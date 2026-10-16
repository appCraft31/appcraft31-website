/**
 * Moteur de Zellige (Tectonic / Suguru) : aléa, découpage-et-remplissage
 * conjoint, solveur, générateur. Portage ligne à ligne du moteur Dart de l'app
 * (`Zellige/lib/engine/*`, `lib/models/*`).
 *
 * La grille du jour doit sortir **identique** à celle de l'app. Tout compte :
 * le nombre exact de tirages SplitMix64, l'ordre des boucles, les budgets en
 * nœuds — et jusqu'à l'algorithme de tri, `List.sort` de Dart n'étant pas
 * stable (cf. `dartSort`). `node scripts/check-zellige-daily.mjs` compare ce
 * portage aux grilles exportées du moteur Dart (scripts/fixtures/zellige-v1.json).
 *
 * Conventions de l'app : 0 = case vide, valeurs 1..5 ; grilles à plat,
 * index = ligne × largeur + colonne.
 */

const EMPTY = 0;
const MAX_REGION = 5;
const ALL_VALUES = 0x1f;
const FULL_MASK = [0x00, 0x01, 0x03, 0x07, 0x0f, 0x1f];
const POP5 = Array.from({ length: 32 }, (_, m) =>
  (m & 1) + ((m >> 1) & 1) + ((m >> 2) & 1) + ((m >> 3) & 1) + ((m >> 4) & 1));
const SINGLE = Array.from({ length: 32 }, (_, m) =>
  ({ 1: 1, 2: 2, 4: 3, 8: 4, 16: 5 })[m] ?? EMPTY);
const bitOf = (v) => 1 << (v - 1);

// ------------------------------------------------------------------- aléa

const MASK64 = (1n << 64n) - 1n;
const GOLDEN = 0x9E3779B97F4A7C15n;

/** SplitMix64 (seeded_generator.dart) : entiers 64 bits, décalages non signés. */
export class SeededRandom {
  constructor(seed) {
    this.state = (BigInt(seed) * GOLDEN + 0x123456789ABCDEF0n) & MASK64;
  }

  next() {
    this.state = (this.state + GOLDEN) & MASK64;
    let z = this.state;
    z = ((z ^ (z >> 30n)) * 0xBF58476D1CE4E5B9n) & MASK64;
    z = ((z ^ (z >> 27n)) * 0x94D049BB133111EBn) & MASK64;
    return z ^ (z >> 31n);
  }

  /** Entier dans [0, bound[ : `(next() >>> 1) % bound`. */
  nextInt(bound) {
    return Number((this.next() >> 1n) % BigInt(bound));
  }

  /** Fisher-Yates en place (RandomSource.shuffle). */
  shuffle(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = this.nextInt(i + 1);
      const tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
  }

  /** Tirage pondéré ; consomme exactement un tirage (sauf total nul). */
  pickWeighted(weights) {
    let total = 0;
    for (const w of weights) total += w;
    if (total <= 0) return 0;
    let roll = this.nextInt(total);
    for (let i = 0; i < weights.length; i++) {
      roll -= weights[i];
      if (roll < 0) return i;
    }
    return weights.length - 1;
  }
}

export function randomSeed() {
  const words = new Uint32Array(2);
  crypto.getRandomValues(words);
  return (BigInt(words[0]) << 32n) | BigInt(words[1]);
}

/**
 * `List.sort` de Dart (dart:_internal/sort.dart) : tri par insertion jusqu'à
 * 32 éléments, quicksort à double pivot au-delà. **Pas stable** — et le
 * générateur trie des cases à taille de bloc égale : `Array.prototype.sort`,
 * stable, rangerait les égalités autrement et changerait la grille.
 */
export function dartSort(a, compare) {
  doSort(a, 0, a.length - 1, compare);
}

function doSort(a, left, right, compare) {
  if (right - left <= 32) insertionSort(a, left, right, compare);
  else dualPivotQuicksort(a, left, right, compare);
}

function insertionSort(a, left, right, compare) {
  for (let i = left + 1; i <= right; i++) {
    const el = a[i];
    let j = i;
    while (j > left && compare(a[j - 1], el) > 0) {
      a[j] = a[j - 1];
      j--;
    }
    a[j] = el;
  }
}

function dualPivotQuicksort(a, left, right, compare) {
  const sixth = Math.floor((right - left + 1) / 6);
  const index1 = left + sixth;
  const index5 = right - sixth;
  const index3 = Math.floor((left + right) / 2);
  const index2 = index3 - sixth;
  const index4 = index3 + sixth;

  let el1 = a[index1], el2 = a[index2], el3 = a[index3], el4 = a[index4], el5 = a[index5];
  let t;
  if (compare(el1, el2) > 0) { t = el1; el1 = el2; el2 = t; }
  if (compare(el4, el5) > 0) { t = el4; el4 = el5; el5 = t; }
  if (compare(el1, el3) > 0) { t = el1; el1 = el3; el3 = t; }
  if (compare(el2, el3) > 0) { t = el2; el2 = el3; el3 = t; }
  if (compare(el1, el4) > 0) { t = el1; el1 = el4; el4 = t; }
  if (compare(el3, el4) > 0) { t = el3; el3 = el4; el4 = t; }
  if (compare(el2, el5) > 0) { t = el2; el2 = el5; el5 = t; }
  if (compare(el2, el3) > 0) { t = el2; el2 = el3; el3 = t; }
  if (compare(el4, el5) > 0) { t = el4; el4 = el5; el5 = t; }

  const pivot1 = el2;
  const pivot2 = el4;
  a[index1] = el1;
  a[index3] = el3;
  a[index5] = el5;
  a[index2] = a[left];
  a[index4] = a[right];

  let less = left + 1;
  let great = right - 1;
  const pivotsAreEqual = compare(pivot1, pivot2) === 0;
  if (pivotsAreEqual) {
    const pivot = pivot1;
    for (let k = less; k <= great; k++) {
      const ak = a[k];
      let comp = compare(ak, pivot);
      if (comp === 0) continue;
      if (comp < 0) {
        if (k !== less) { a[k] = a[less]; a[less] = ak; }
        less++;
      } else {
        for (;;) {
          comp = compare(a[great], pivot);
          if (comp > 0) { great--; continue; }
          if (comp < 0) {
            a[k] = a[less];
            a[less++] = a[great];
            a[great--] = ak;
          } else {
            a[k] = a[great];
            a[great--] = ak;
          }
          break;
        }
      }
    }
  } else {
    for (let k = less; k <= great; k++) {
      const ak = a[k];
      if (compare(ak, pivot1) < 0) {
        if (k !== less) { a[k] = a[less]; a[less] = ak; }
        less++;
      } else if (compare(ak, pivot2) > 0) {
        for (;;) {
          let comp = compare(a[great], pivot2);
          if (comp > 0) {
            great--;
            if (great < k) break;
            continue;
          }
          comp = compare(a[great], pivot1);
          if (comp < 0) {
            a[k] = a[less];
            a[less++] = a[great];
            a[great--] = ak;
          } else {
            a[k] = a[great];
            a[great--] = ak;
          }
          break;
        }
      }
    }
  }

  a[left] = a[less - 1];
  a[less - 1] = pivot1;
  a[right] = a[great + 1];
  a[great + 1] = pivot2;

  doSort(a, left, less - 2, compare);
  doSort(a, great + 2, right, compare);

  if (pivotsAreEqual) return;

  if (less < index1 && great > index5) {
    while (compare(a[less], pivot1) === 0) less++;
    while (compare(a[great], pivot2) === 0) great--;
    for (let k = less; k <= great; k++) {
      const ak = a[k];
      if (compare(ak, pivot1) === 0) {
        if (k !== less) { a[k] = a[less]; a[less] = ak; }
        less++;
      } else if (compare(ak, pivot2) === 0) {
        for (;;) {
          let comp = compare(a[great], pivot2);
          if (comp === 0) {
            great--;
            if (great < k) break;
            continue;
          }
          comp = compare(a[great], pivot1);
          if (comp < 0) {
            a[k] = a[less];
            a[less++] = a[great];
            a[great--] = ak;
          } else {
            a[k] = a[great];
            a[great--] = ak;
          }
          break;
        }
      }
    }
  }
  doSort(a, less, great, compare);
}

// -------------------------------------------------------------- voisinage

const adjacencyCache = new Map();

/** 8-voisinage (voisinage du roi) au format CSR. */
export function adjacencyOf(width, height) {
  const key = width * 1000 + height;
  if (adjacencyCache.has(key)) return adjacencyCache.get(key);
  const cellCount = width * height;
  const offsets = new Int32Array(cellCount + 1);
  const flat = [];
  for (let i = 0; i < cellCount; i++) {
    offsets[i] = flat.length;
    const r = Math.floor(i / width);
    const c = i % width;
    for (let dr = -1; dr <= 1; dr++) {
      const nr = r + dr;
      if (nr < 0 || nr >= height) continue;
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nc = c + dc;
        if (nc < 0 || nc >= width) continue;
        flat.push(nr * width + nc);
      }
    }
  }
  offsets[cellCount] = flat.length;
  const built = { width, height, neighbours: Int32Array.from(flat), offsets };
  adjacencyCache.set(key, built);
  return built;
}

// ---------------------------------------------------------------- régions

/** Découpage en blocs (region_map.dart) : identifiant par case, tailles, cases en CSR. */
export class RegionMap {
  constructor(width, height, regionOf) {
    this.width = width;
    this.height = height;
    this.regionOf = Uint8Array.from(regionOf);
    let max = -1;
    for (const id of this.regionOf) if (id > max) max = id;
    this.regionCount = max + 1;
    const sizes = new Uint8Array(this.regionCount);
    for (const id of this.regionOf) sizes[id]++;
    this.regionSizes = sizes;
    const offsets = new Int32Array(this.regionCount + 1);
    for (let id = 0; id < this.regionCount; id++) offsets[id + 1] = offsets[id] + sizes[id];
    const cursor = offsets.slice(0, this.regionCount);
    const cells = new Int32Array(this.regionOf.length);
    for (let i = 0; i < this.regionOf.length; i++) cells[cursor[this.regionOf[i]]++] = i;
    this.regionOffsets = offsets;
    this.regionCells = cells;
  }

  get cellCount() { return this.width * this.height; }

  sizeAt(cell) { return this.regionSizes[this.regionOf[cell]]; }
}

// ------------------------------------------------------------- difficulté

const PROFILES = {
  initiation:  { weights: [2, 5, 6, 4, 1],  maxSingletons: 3, meanTarget: 3.5 },
  facile:      { weights: [1, 4, 6, 5, 3],  maxSingletons: 2, meanTarget: 4.1 },
  moyen:       { weights: [0, 3, 5, 6, 5],  maxSingletons: 2, meanTarget: 4.3 },
  difficile:   { weights: [0, 2, 4, 6, 7],  maxSingletons: 2, meanTarget: 4.4 },
  expert:      { weights: [0, 1, 3, 6, 9],  maxSingletons: 2, meanTarget: 4.5 },
  expertLarge: { weights: [0, 1, 2, 5, 10], maxSingletons: 2, meanTarget: 4.5 },
};

const EFFORT = {
  initiation: [0, 0],
  facile: [0, 0],
  moyen: [1, 60],
  difficile: [4, 600],
  expert: [10, 6000],
};

/** Difficulty.forLevel (models/difficulty.dart), sans ajustement adaptatif. */
export function difficultyForLevel(level, skillOffset = 0) {
  let width, height, tier, profile;
  if (level < 6) { width = 5; height = 5; tier = 'initiation'; profile = PROFILES.initiation; }
  else if (level < 13) { width = 6; height = 6; tier = 'facile'; profile = PROFILES.facile; }
  else if (level < 23) { width = 7; height = 8; tier = 'moyen'; profile = PROFILES.moyen; }
  else if (level < 36) { width = 9; height = 9; tier = 'difficile'; profile = PROFILES.difficile; }
  else if (level < 60) { width = 10; height = 10; tier = 'expert'; profile = PROFILES.expert; }
  else { width = 12; height = 12; tier = 'expert'; profile = PROFILES.expertLarge; }
  const floor = 0.19, start = 0.36, tau = 24.0;
  const base = floor + (start - floor) * Math.exp(-Math.max(level - 1, 0) / tau);
  const clueRatio = Math.min(0.45, Math.max(0.16, base + skillOffset));
  return { width, height, clueRatio, profile, tier };
}

/** Difficulty.daily : la grille « cauchemar », 12×12. */
export const DAILY_DIFFICULTY = {
  width: 12, height: 12, clueRatio: 0.17, profile: PROFILES.expertLarge, tier: 'expert',
};

const pickSize = (profile, rng) => rng.pickWeighted(profile.weights) + 1;

// ------------------------------------------------------------ construction

const FREE = 255;
const DEFAULT_ATTEMPTS = 60;
const MEAN_TOLERANCE = 0.5;
const MAX_BACKTRACKS = 8;
const REGION_NODE_BUDGET = 400;

/** GridBuilder.build : découpage et solution d'un seul tenant. */
function buildGrid(width, height, profile, rng) {
  const adjacency = adjacencyOf(width, height);
  let best = null;
  let bestPenalty = Infinity;
  for (let attempt = 0; attempt < DEFAULT_ATTEMPTS; attempt++) {
    const grid = attemptGrid(width, height, profile, rng, adjacency);
    if (grid === null) continue;
    const penalty = partitionPenalty(grid.regions, profile);
    if (penalty === 0) return grid;
    if (penalty < bestPenalty) {
      bestPenalty = penalty;
      best = grid;
    }
  }
  while (best === null) best = attemptGrid(width, height, profile, rng, adjacency);
  return best;
}

function attemptGrid(width, height, profile, rng, adjacency) {
  const cellCount = width * height;
  const owner = new Uint8Array(cellCount).fill(FREE);
  const values = new Uint8Array(cellCount);
  const placed = [];
  let backtracks = 0;
  let seed = 0;

  for (;;) {
    while (seed < cellCount && owner[seed] !== FREE) seed++;
    if (seed === cellCount) break;
    if (placed.length > 254) return null;

    const shape = [];
    const id = placed.length;
    if (placeRegion(seed, id, profile, width, height, owner, values, adjacency, rng, shape)) {
      placed.push(shape.slice());
      continue;
    }

    if (placed.length === 0 || ++backtracks > MAX_BACKTRACKS) return null;
    const undone = placed.pop();
    for (const cell of undone) {
      owner[cell] = FREE;
      values[cell] = EMPTY;
    }
    seed = undone.reduce((a, b) => (a < b ? a : b));
  }

  return { regions: new RegionMap(width, height, owner), solution: values };
}

function placeRegion(seed, id, profile, width, height, owner, values, adjacency, rng, out) {
  const first = pickSize(profile, rng);
  const order = [first];
  for (let k = MAX_REGION; k >= 1; k--) if (k !== first) order.push(k);

  for (const target of order) {
    const budget = { remaining: REGION_NODE_BUDGET };
    out.length = 0;
    if (startRegion(seed, id, target, width, height, owner, values, adjacency, rng, out, budget)) {
      return true;
    }
    for (const cell of out) {
      owner[cell] = FREE;
      values[cell] = EMPTY;
    }
    out.length = 0;
  }
  return false;
}

function startRegion(seed, id, target, width, height, owner, values, adjacency, rng, out, budget) {
  const choices = [];
  for (let v = 1; v <= target; v++) if (fits(seed, v, values, adjacency)) choices.push(v);
  rng.shuffle(choices);

  for (const v of choices) {
    owner[seed] = id;
    values[seed] = v;
    if (strandsAnyNeighbour(seed, owner, values, adjacency)) {
      owner[seed] = FREE;
      values[seed] = EMPTY;
      continue;
    }
    out.push(seed);
    if (extend(id, target, bitOf(v), width, height, owner, values, adjacency, rng, out, budget)) {
      return true;
    }
    out.pop();
    owner[seed] = FREE;
    values[seed] = EMPTY;
  }
  return false;
}

function extend(id, target, usedMask, width, height, owner, values, adjacency, rng, out, budget) {
  if (out.length === target) return true;
  if (budget.remaining <= 0) return false;

  const candidates = [];
  for (const cell of out) {
    for (const n of orthogonal(cell, width, height)) {
      if (owner[n] === FREE && !candidates.includes(n)) candidates.push(n);
    }
  }
  if (candidates.length === 0) return false;

  const weights = candidates.map((c) => (wouldOrphan(c, width, height, owner) ? 1 : 8));
  while (candidates.length > 0) {
    const pick = rng.pickWeighted(weights);
    const cell = candidates.splice(pick, 1)[0];
    weights.splice(pick, 1);

    const choices = [];
    for (let v = 1; v <= target; v++) {
      if ((usedMask & bitOf(v)) === 0 && fits(cell, v, values, adjacency)) choices.push(v);
    }
    rng.shuffle(choices);

    for (const v of choices) {
      budget.remaining--;
      owner[cell] = id;
      values[cell] = v;
      if (strandsAnyNeighbour(cell, owner, values, adjacency)) {
        owner[cell] = FREE;
        values[cell] = EMPTY;
        continue;
      }
      out.push(cell);
      if (extend(id, target, usedMask | bitOf(v), width, height, owner, values, adjacency, rng, out, budget)) {
        return true;
      }
      out.pop();
      owner[cell] = FREE;
      values[cell] = EMPTY;
      if (budget.remaining <= 0) return false;
    }
  }
  return false;
}

function orthogonal(cell, width, height) {
  const r = Math.floor(cell / width);
  const c = cell % width;
  const list = [];
  if (r > 0) list.push(cell - width);
  if (r < height - 1) list.push(cell + width);
  if (c > 0) list.push(cell - 1);
  if (c < width - 1) list.push(cell + 1);
  return list;
}

function wouldOrphan(cell, width, height, owner) {
  for (const n of orthogonal(cell, width, height)) {
    if (owner[n] !== FREE) continue;
    let hasFree = false;
    for (const m of orthogonal(n, width, height)) {
      if (m !== cell && owner[m] === FREE) { hasFree = true; break; }
    }
    if (!hasFree) return true;
  }
  return false;
}

function strandsAnyNeighbour(cell, owner, values, adjacency) {
  const { neighbours: nbr, offsets: off } = adjacency;
  for (let k = off[cell]; k < off[cell + 1]; k++) {
    const m = nbr[k];
    if (owner[m] !== FREE) continue;
    let used = 0;
    for (let j = off[m]; j < off[m + 1]; j++) {
      const v = values[nbr[j]];
      if (v !== EMPTY) used |= bitOf(v);
    }
    if (used === ALL_VALUES) return true;
  }
  return false;
}

function fits(cell, value, values, adjacency) {
  const { neighbours: nbr, offsets: off } = adjacency;
  for (let k = off[cell]; k < off[cell + 1]; k++) if (values[nbr[k]] === value) return false;
  return true;
}

function partitionPenalty(regions, profile) {
  let singletons = 0;
  for (const size of regions.regionSizes) if (size === 1) singletons++;
  const mean = regions.cellCount / regions.regionCount;
  const meanGap = Math.abs(mean - profile.meanTarget);
  let penalty = 0;
  if (singletons > profile.maxSingletons) penalty += 2.0 * (singletons - profile.maxSingletons);
  if (meanGap > MEAN_TOLERANCE) penalty += meanGap;
  return penalty;
}

// ----------------------------------------------------------------- solveur

const UNDECIDED = -1;

/** TectonicSolver : propagation (singletons nus et cachés) puis branchement MRV. */
export class TectonicSolver {
  constructor(regions) {
    this.regions = regions;
    this.adjacency = adjacencyOf(regions.width, regions.height);
    this.lastBranchNodes = 0;
  }

  countSolutions(start, limit = 2, nodeBudget = 400000) {
    const search = new Search(this);
    if (!search.seed(start)) return search.exhausted ? UNDECIDED : 0;
    const budget = { remaining: nodeBudget };
    search.count(budget, limit);
    this.lastBranchNodes = search.branchNodes;
    return search.exhausted ? UNDECIDED : search.solutions;
  }

  hasUniqueSolution(start, nodeBudget) {
    return this.countSolutions(start, 2, nodeBudget) === 1;
  }

  effort(start, nodeBudget = 400000) {
    const search = new Search(this);
    if (!search.seed(start)) return UNDECIDED;
    const budget = { remaining: nodeBudget };
    const found = search.descend(budget);
    this.lastBranchNodes = search.branchNodes;
    return found ? search.branchNodes : UNDECIDED;
  }
}

class Search {
  constructor(solver) {
    this.solver = solver;
    const n = solver.regions.cellCount;
    const rc = solver.regions.regionCount;
    this.g = new Uint8Array(n);
    this.regionUsed = new Uint8Array(rc);
    this.nbrCount = new Uint8Array(n * MAX_REGION);
    this.nbrMask = new Uint8Array(n);
    this.trail = [];
    this.cellQueue = [];
    this.queued = new Uint8Array(n);
    this.regionQueue = [];
    this.regionDirty = new Uint8Array(rc);
    this.branchNodes = 0;
    this.solutions = 0;
    this.exhausted = false;
  }

  candidates(i) {
    const regions = this.solver.regions;
    return FULL_MASK[regions.sizeAt(i)] & ~this.regionUsed[regions.regionOf[i]] & ~this.nbrMask[i];
  }

  seed(start) {
    const regions = this.solver.regions;
    const n = regions.cellCount;
    for (let i = 0; i < n; i++) {
      const v = start[i];
      if (v === EMPTY) continue;
      if (v > regions.sizeAt(i)) return false;
      if ((this.candidates(i) & bitOf(v)) === 0) return false;
      this.place(i, v);
    }
    const { regionSizes: sizes, regionOffsets: offsets, regionCells: cells } = regions;
    for (let id = 0; id < regions.regionCount; id++) {
      if (sizes[id] !== 1) continue;
      const cell = cells[offsets[id]];
      if (this.g[cell] !== EMPTY) continue;
      if ((this.candidates(cell) & bitOf(1)) === 0) return false;
      this.place(cell, 1);
    }
    return this.propagate();
  }

  place(i, v) {
    this.set(i, v);
    this.trail.push(i);
    this.enqueueAffected(i);
  }

  set(i, v) {
    this.g[i] = v;
    const bit = bitOf(v);
    this.regionUsed[this.solver.regions.regionOf[i]] |= bit;
    const { neighbours: nbr, offsets: off } = this.solver.adjacency;
    const slot = v - 1;
    for (let k = off[i]; k < off[i + 1]; k++) {
      const j = nbr[k];
      const idx = j * MAX_REGION + slot;
      if (this.nbrCount[idx]++ === 0) this.nbrMask[j] |= bit;
    }
  }

  unset(i) {
    const v = this.g[i];
    this.g[i] = EMPTY;
    const bit = bitOf(v);
    this.regionUsed[this.solver.regions.regionOf[i]] &= ~bit;
    const { neighbours: nbr, offsets: off } = this.solver.adjacency;
    const slot = v - 1;
    for (let k = off[i]; k < off[i + 1]; k++) {
      const j = nbr[k];
      const idx = j * MAX_REGION + slot;
      if (--this.nbrCount[idx] === 0) this.nbrMask[j] &= ~bit;
    }
  }

  undoTo(mark) {
    while (this.trail.length > mark) this.unset(this.trail.pop());
  }

  enqueueAffected(i) {
    const regions = this.solver.regions;
    const { regionOffsets: offsets, regionCells: cells } = regions;
    const id = regions.regionOf[i];
    for (let k = offsets[id]; k < offsets[id + 1]; k++) this.enqueueCell(cells[k]);
    this.enqueueRegion(id);
    const { neighbours: nbr, offsets: off } = this.solver.adjacency;
    for (let k = off[i]; k < off[i + 1]; k++) {
      const j = nbr[k];
      this.enqueueCell(j);
      this.enqueueRegion(regions.regionOf[j]);
    }
  }

  enqueueCell(i) {
    if (this.g[i] !== EMPTY || this.queued[i] !== 0) return;
    this.queued[i] = 1;
    this.cellQueue.push(i);
  }

  enqueueRegion(id) {
    if (this.regionDirty[id] !== 0) return;
    this.regionDirty[id] = 1;
    this.regionQueue.push(id);
  }

  propagate() {
    while (this.cellQueue.length > 0 || this.regionQueue.length > 0) {
      while (this.cellQueue.length > 0) {
        const i = this.cellQueue.pop();
        this.queued[i] = 0;
        if (this.g[i] !== EMPTY) continue;
        const m = this.candidates(i);
        if (m === 0) return false;
        if (POP5[m] === 1) this.place(i, SINGLE[m]);
      }
      while (this.regionQueue.length > 0) {
        const id = this.regionQueue.pop();
        this.regionDirty[id] = 0;
        if (!this.scanRegion(id)) return false;
        if (this.cellQueue.length > 0) break;
      }
    }
    return true;
  }

  scanRegion(id) {
    const regions = this.solver.regions;
    const size = regions.regionSizes[id];
    const { regionOffsets: offsets, regionCells: cells } = regions;
    for (let v = 1; v <= size; v++) {
      const bit = bitOf(v);
      if ((this.regionUsed[id] & bit) !== 0) continue;
      let seat = -1;
      let count = 0;
      for (let k = offsets[id]; k < offsets[id + 1]; k++) {
        const cell = cells[k];
        if (this.g[cell] !== EMPTY) continue;
        if ((this.candidates(cell) & bit) === 0) continue;
        count++;
        if (count > 1) break;
        seat = cell;
      }
      if (count === 0) return false;
      if (count === 1) this.place(seat, v);
    }
    return true;
  }

  bestEmptyCell() {
    const regions = this.solver.regions;
    let best = -1;
    let bestCount = MAX_REGION + 1;
    let bestSize = 0;
    for (let i = 0; i < regions.cellCount; i++) {
      if (this.g[i] !== EMPTY) continue;
      const count = POP5[this.candidates(i)];
      if (count === 0) return i;
      if (count > bestCount) continue;
      const size = regions.sizeAt(i);
      if (count === bestCount && size >= bestSize) continue;
      best = i;
      bestCount = count;
      bestSize = size;
      if (count === 1) return i;
    }
    return best;
  }

  valuesOf(mask) {
    const values = [];
    for (let v = 1; v <= MAX_REGION; v++) if ((mask & bitOf(v)) !== 0) values.push(v);
    return values;
  }

  descend(budget) {
    const i = this.bestEmptyCell();
    if (i < 0) return true;
    const mask = this.candidates(i);
    if (mask === 0) return false;
    for (const v of this.valuesOf(mask)) {
      if (budget.remaining <= 0) {
        this.exhausted = true;
        return false;
      }
      budget.remaining--;
      this.branchNodes++;
      const mark = this.trail.length;
      this.place(i, v);
      if (this.propagate() && this.descend(budget)) return true;
      this.undoTo(mark);
      this.clearQueues();
      if (this.exhausted) return false;
    }
    return false;
  }

  count(budget, limit) {
    const i = this.bestEmptyCell();
    if (i < 0) {
      this.solutions++;
      return;
    }
    const mask = this.candidates(i);
    if (mask === 0) return;
    for (const v of this.valuesOf(mask)) {
      if (this.solutions >= limit) return;
      if (budget.remaining <= 0) {
        this.exhausted = true;
        return;
      }
      budget.remaining--;
      this.branchNodes++;
      const mark = this.trail.length;
      this.place(i, v);
      if (this.propagate()) this.count(budget, limit);
      this.undoTo(mark);
      this.clearQueues();
      if (this.exhausted) return;
    }
  }

  clearQueues() {
    for (const i of this.cellQueue) this.queued[i] = 0;
    this.cellQueue.length = 0;
    for (const id of this.regionQueue) this.regionDirty[id] = 0;
    this.regionQueue.length = 0;
  }
}

// ------------------------------------------------------------- générateur

const CALIBRATION_ATTEMPTS = 6;
const CARVE_NODE_BUDGET = 60000;
const TUNE_STEPS = 40;

/** Grille du jour : seed aaaammjj du jour **local**, comme l'app (DateTime.now()). */
export function dailySeed(dayKey) {
  const [y, m, d] = dayKey.split('-').map(Number);
  return y * 10000 + m * 100 + d;
}

/** Jour local au format aaaa-mm-jj : la grille change à minuit chez le joueur. */
export function localDayKey(now = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

export function generateDaily(dayKey) {
  return generate(DAILY_DIFFICULTY, new SeededRandom(dailySeed(dayKey)));
}

export function generateLevel(level, seed = randomSeed()) {
  return generate(difficultyForLevel(level), new SeededRandom(seed));
}

/** PuzzleGenerator._generate : construire, creuser, calibrer. */
export function generate(difficulty, rng) {
  const [minEffort, maxEffort] = EFFORT[difficulty.tier];
  const inWindow = (e) => e >= minEffort && e <= maxEffort;
  let fallback = null;

  for (let attempt = 0; attempt < CALIBRATION_ATTEMPTS; attempt++) {
    const grid = buildGrid(difficulty.width, difficulty.height, difficulty.profile, rng);
    const solver = new TectonicSolver(grid.regions);
    const target = targetClues(grid.regions, difficulty.clueRatio);
    const carved = carve(grid.solution, grid.regions, solver, target, rng);
    const givens = tune(carved, grid.solution, solver, [minEffort, maxEffort], rng);
    const puzzle = {
      width: difficulty.width,
      height: difficulty.height,
      regionOf: Array.from(grid.regions.regionOf),
      givens: Array.from(givens),
      solution: Array.from(grid.solution),
    };
    const effort = solver.effort(givens, CARVE_NODE_BUDGET);
    if (effort !== UNDECIDED && inWindow(effort)) return puzzle;
    if (fallback === null) fallback = puzzle;
  }
  return fallback;
}

function targetClues(regions, clueRatio) {
  // `round()` de Dart arrondit les demis à l'opposé de zéro ; les valeurs sont positives.
  const fromRatio = Math.round(clueRatio * regions.cellCount);
  const floor = Math.floor(regions.regionCount / 3);
  return fromRatio > floor ? fromRatio : floor;
}

function carve(solution, regions, solver, target, rng) {
  const givens = Uint8Array.from(solution);
  let clues = solution.length;
  const order = Array.from({ length: solution.length }, (_, i) => i);
  rng.shuffle(order);
  // Les grandes régions d'abord — avec le tri de Dart, pas celui de JS (cf. dartSort).
  dartSort(order, (a, b) => regions.sizeAt(b) - regions.sizeAt(a));
  for (const p of order) {
    if (clues <= target) break;
    const saved = givens[p];
    givens[p] = EMPTY;
    if (solver.hasUniqueSolution(givens, CARVE_NODE_BUDGET)) clues--;
    else givens[p] = saved;
  }
  return givens;
}

function tune(givens, solution, solver, [minEffort, maxEffort], rng) {
  const board = Uint8Array.from(givens);
  const order = Array.from({ length: board.length }, (_, i) => i);
  rng.shuffle(order);
  for (let step = 0; step < TUNE_STEPS; step++) {
    const effort = solver.effort(board, CARVE_NODE_BUDGET);
    if (effort === UNDECIDED) return board;
    if (effort >= minEffort && effort <= maxEffort) return board;
    if (effort > maxEffort) {
      const hole = order.find((i) => board[i] === EMPTY) ?? -1;
      if (hole < 0) return board;
      board[hole] = solution[hole];
    } else {
      let removed = false;
      for (const p of order) {
        if (board[p] === EMPTY) continue;
        const saved = board[p];
        board[p] = EMPTY;
        if (solver.hasUniqueSolution(board, CARVE_NODE_BUDGET)) { removed = true; break; }
        board[p] = saved;
      }
      if (!removed) return board;
    }
  }
  return board;
}

// ---------------------------------------------------------------- conflits

/**
 * Cases en infraction (conflict_detector.dart) : doublon dans un bloc, valeur
 * hors du bloc, ou deux voisines — diagonales comprises — de même chiffre.
 */
export function computeConflicts(board, regions) {
  const conflicts = new Set();
  const { regionOffsets: offsets, regionCells: cells, regionSizes: sizes } = regions;
  for (let id = 0; id < regions.regionCount; id++) {
    const size = sizes[id];
    const seat = new Array(MAX_REGION + 1).fill(-1);
    for (let k = offsets[id]; k < offsets[id + 1]; k++) {
      const cell = cells[k];
      const v = board[cell];
      if (v === EMPTY) continue;
      if (v > size) { conflicts.add(cell); continue; }
      if (seat[v] >= 0) { conflicts.add(seat[v]); conflicts.add(cell); }
      else seat[v] = cell;
    }
  }
  const { neighbours: nbr, offsets: off } = adjacencyOf(regions.width, regions.height);
  for (let i = 0; i < board.length; i++) {
    const v = board[i];
    if (v === EMPTY) continue;
    for (let k = off[i]; k < off[i + 1]; k++) {
      if (board[nbr[k]] === v) { conflicts.add(i); conflicts.add(nbr[k]); }
    }
  }
  return conflicts;
}
