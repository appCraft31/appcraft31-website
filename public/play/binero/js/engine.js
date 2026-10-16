/**
 * Moteur de Binero : générateur pseudo-aléatoire, solveur et générateur de
 * grilles. Portage ligne à ligne de l'app iOS
 * (`binero_IOS/Sources/Engine/{SeededGenerator,PuzzleSolver,PuzzleGenerator}.swift`).
 *
 * La grille du jour doit sortir **identique** à celle de l'app : même seed, même
 * suite SplitMix64, même ordre de parcours, même budget de recherche au
 * creusage. Le moindre écart (un `>>` signé, une boucle réordonnée, un budget
 * différent) donnerait une autre grille sans que rien ne casse. D'où les tests
 * contre `binero_Android/test/fixtures/daily_v2.json`, partagée par iOS et
 * Android : `node scripts/check-binero-daily.mjs`.
 *
 * Grilles à plat dans des Int8Array : -1 = vide, 0, 1 ; index = ligne * n + colonne.
 */

const MASK = (1n << 64n) - 1n;
const GOLDEN = 0x9E3779B97F4A7C15n;

/** SplitMix64, arithmétique 64 bits non signée via BigInt (cf. SeededGenerator.swift). */
export class SeededGenerator {
  constructor(seed) {
    // Évite l'état 0 et brouille un peu la seed d'entrée.
    this.state = (BigInt(seed) * GOLDEN + 0x123456789ABCDEF0n) & MASK;
  }

  next() {
    this.state = (this.state + GOLDEN) & MASK;
    let z = this.state;
    z = ((z ^ (z >> 30n)) * 0xBF58476D1CE4E5B9n) & MASK;
    z = ((z ^ (z >> 27n)) * 0x94D049BB133111EBn) & MASK;
    return z ^ (z >> 31n);
  }
}

/** Seed aléatoire pour les parties libres (équivalent de SystemRandomNumberGenerator). */
export function randomSeed() {
  const words = new Uint32Array(2);
  crypto.getRandomValues(words);
  return (BigInt(words[0]) << 32n) | BigInt(words[1]);
}

/** Fisher-Yates explicite, décalage non signé : identique à `stableShuffle` (Swift et Dart). */
function stableShuffle(input, rng) {
  const result = input.slice();
  for (let i = result.length - 1; i >= 1; i--) {
    const j = Number((rng.next() >> 1n) % BigInt(i + 1));
    const tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }
  return result;
}

// ------------------------------------------------------------------ solveur

export class BineroSolver {
  constructor(n) {
    if (n % 2 !== 0) throw new Error('La taille d’une grille de Binero doit être paire.');
    this.n = n;
    this.half = n / 2;
  }

  /**
   * Vrai si poser `v` en (r,c) ne viole pas immédiatement les règles « pas de
   * triplet » et « au plus n/2 par ligne/colonne ». L'unicité des lignes et
   * colonnes est vérifiée à la complétion.
   */
  canPlace(g, r, c, v) {
    const n = this.n;
    const row = r * n;
    // Triplets horizontaux : les 3 fenêtres contenant (r,c).
    if (c >= 2 && g[row + c - 1] === v && g[row + c - 2] === v) return false;
    if (c >= 1 && c + 1 < n && g[row + c - 1] === v && g[row + c + 1] === v) return false;
    if (c + 2 < n && g[row + c + 1] === v && g[row + c + 2] === v) return false;

    // Triplets verticaux.
    if (r >= 2 && g[row - n + c] === v && g[row - 2 * n + c] === v) return false;
    if (r >= 1 && r + 1 < n && g[row - n + c] === v && g[row + n + c] === v) return false;
    if (r + 2 < n && g[row + n + c] === v && g[row + 2 * n + c] === v) return false;

    // Équilibre : au plus n/2 fois la même valeur par ligne et par colonne.
    let rowCount = 0;
    let colCount = 0;
    for (let k = 0; k < n; k++) {
      if (g[row + k] === v) rowCount++;
      if (g[k * n + c] === v) colCount++;
    }
    return rowCount < this.half && colCount < this.half;
  }

  /** Remplit les cases forcées. Retourne false en cas de contradiction. */
  propagate(g) {
    const n = this.n;
    let changed = true;
    while (changed) {
      changed = false;
      for (let i = 0; i < g.length; i++) {
        if (g[i] !== -1) continue;
        const r = (i / n) | 0;
        const c = i % n;
        const can0 = this.canPlace(g, r, c, 0);
        const can1 = this.canPlace(g, r, c, 1);
        if (!can0 && !can1) return false;
        if (can0 !== can1) {
          g[i] = can0 ? 0 : 1;
          changed = true;
        }
      }
    }
    return true;
  }

  /**
   * Unicité de la solution, avec un budget de nœuds. Vrai uniquement si une
   * seule solution est trouvée DANS le budget ; budget dépassé = faux, par
   * prudence (c'est ce qui borne le creusage).
   */
  hasUniqueSolution(start, nodeBudget) {
    const n = this.n;
    let nodes = 0;
    let found = 0;

    const explore = (g0) => {
      const g = g0.slice();
      if (!this.propagate(g)) return true; // 0 solution sur cette branche
      const cell = g.indexOf(-1);
      if (cell === -1) {
        if (this.rowsAndColsDistinct(g)) found++;
        return true;
      }
      const r = (cell / n) | 0;
      const c = cell % n;
      for (const v of [0, 1]) {
        if (!this.canPlace(g, r, c, v)) continue;
        nodes++;
        if (nodes > nodeBudget) return false;
        const next = g.slice();
        next[cell] = v;
        if (!explore(next)) return false;
        if (found >= 2) return true;
      }
      return true;
    };

    const completed = explore(start);
    return completed && found === 1;
  }

  /** Valide une grille pleine selon les 3 règles. */
  isValidSolution(g) {
    const n = this.n;
    if (g.indexOf(-1) !== -1) return false;
    for (let r = 0; r < n; r++) {
      let count = 0;
      for (let c = 0; c < n; c++) {
        const v = g[r * n + c];
        if (v === 1) count++;
        if (c >= 2 && v === g[r * n + c - 1] && v === g[r * n + c - 2]) return false;
      }
      if (count !== this.half) return false;
    }
    for (let c = 0; c < n; c++) {
      let count = 0;
      for (let r = 0; r < n; r++) {
        const v = g[r * n + c];
        if (v === 1) count++;
        if (r >= 2 && v === g[(r - 1) * n + c] && v === g[(r - 2) * n + c]) return false;
      }
      if (count !== this.half) return false;
    }
    return this.rowsAndColsDistinct(g);
  }

  /** Lignes complètes toutes distinctes, colonnes complètes toutes distinctes. */
  rowsAndColsDistinct(g) {
    const n = this.n;
    const rows = new Set();
    for (let r = 0; r < n; r++) {
      let key = '';
      let full = true;
      for (let c = 0; c < n; c++) {
        const v = g[r * n + c];
        if (v === -1) { full = false; break; }
        key += v;
      }
      if (full) {
        if (rows.has(key)) return false;
        rows.add(key);
      }
    }
    const cols = new Set();
    for (let c = 0; c < n; c++) {
      let key = '';
      let full = true;
      for (let r = 0; r < n; r++) {
        const v = g[r * n + c];
        if (v === -1) { full = false; break; }
        key += v;
      }
      if (full) {
        if (cols.has(key)) return false;
        cols.add(key);
      }
    }
    return true;
  }
}

// --------------------------------------------------------------- générateur

/** Budget de recherche au creusage — borne la durée même très agressive. */
const CARVE_NODE_BUDGET = 400_000;

/** Grille du jour : trois tailles, comme `DailyDifficulty` (Models/DailyChallenge.swift). */
export const DAILY_DIFFICULTIES = {
  easy:   { id: 'easy',   size: 6,  clueRatio: 0.62 },
  normal: { id: 'normal', size: 10, clueRatio: 0.50 },
  expert: { id: 'expert', size: 14, clueRatio: 0.33 },
};

/** Mode libre : comme `GameDifficulty` (Models/Difficulty.swift). */
export const FREE_DIFFICULTIES = {
  initiation: { id: 'initiation', size: 6,  clueRatio: 0.62 },
  facile:     { id: 'facile',     size: 8,  clueRatio: 0.56 },
  moyen:      { id: 'moyen',      size: 10, clueRatio: 0.50 },
  difficile:  { id: 'difficile',  size: 12, clueRatio: 0.46 },
  expert:     { id: 'expert',     size: 14, clueRatio: 0.42 },
};

/** Seed d'une journée : aaaammjj, comme `PuzzleGenerator.dailySeed`. */
export function dailySeed(dayKey) {
  const [y, m, d] = dayKey.split('-').map(Number);
  return y * 10_000 + m * 100 + d;
}

/**
 * Journée de jeu en cours, au format aaaa-mm-jj. L'app bascule à 7 h UTC
 * (`DailyChallenge.day(at:)` : minuit UTC de l'instant moins 7 heures).
 */
export function currentDayKey(now = new Date()) {
  return new Date(now.getTime() - 7 * 3600 * 1000).toISOString().slice(0, 10);
}

export function generateDaily(dayKey, difficultyId) {
  const difficulty = DAILY_DIFFICULTIES[difficultyId];
  const n = difficulty.size;
  const target = Math.round(difficulty.clueRatio * n * n);
  return generate(n, target, new SeededGenerator(dailySeed(dayKey)));
}

export function generateFree(difficultyId, seed = randomSeed()) {
  const difficulty = FREE_DIFFICULTIES[difficultyId];
  const n = difficulty.size;
  const target = Math.max(n * 2, Math.round(difficulty.clueRatio * n * n));
  return generate(n, target, new SeededGenerator(seed));
}

function generate(n, targetClues, rng) {
  const solver = new BineroSolver(n);
  const solution = fullSolution(solver, rng);
  const givens = carve(solution, targetClues, solver, rng);
  return { size: n, givens: Array.from(givens), solution: Array.from(solution) };
}

/** Backtracking randomisé produisant une grille pleine valide. */
function fullSolution(solver, rng) {
  const n = solver.n;
  let budget = 20_000;
  for (;;) {
    const g = new Int8Array(n * n).fill(-1);
    const remaining = { value: budget };
    if (fill(g, 0, solver, rng, remaining)) return g;
    budget *= 2;
  }
}

function fill(g, pos, solver, rng, remaining) {
  const n = solver.n;
  if (pos === n * n) return solver.isValidSolution(g);
  if (remaining.value <= 0) return false;

  const r = (pos / n) | 0;
  const c = pos % n;
  for (const v of stableShuffle([0, 1], rng)) {
    if (!solver.canPlace(g, r, c, v)) continue;
    remaining.value--;
    g[pos] = v;
    // Élagage : refuser les lignes/colonnes dupliquées dès leur complétion.
    const rowOK = c < n - 1 || rowIsUnique(g, r, n);
    const colOK = r < n - 1 || colIsUnique(g, c, n);
    if (rowOK && colOK && fill(g, pos + 1, solver, rng, remaining)) return true;
    g[pos] = -1;
    if (remaining.value <= 0) return false;
  }
  return false;
}

function rowIsUnique(g, row, n) {
  for (let other = 0; other < row; other++) {
    let same = true;
    for (let c = 0; c < n; c++) {
      if (g[row * n + c] !== g[other * n + c]) { same = false; break; }
    }
    if (same) return false;
  }
  return true;
}

function colIsUnique(g, col, n) {
  for (let other = 0; other < col; other++) {
    let same = true;
    for (let r = 0; r < n; r++) {
      if (g[r * n + col] !== g[r * n + other]) { same = false; break; }
    }
    if (same) return false;
  }
  return true;
}

/** Retire des cases, dans un ordre aléatoire, tant que la solution reste unique. */
function carve(solution, targetClues, solver, rng) {
  const givens = solution.slice();
  let clues = solution.length;
  const order = stableShuffle(Array.from({ length: solution.length }, (_, i) => i), rng);
  for (const p of order) {
    if (clues <= targetClues) break;
    const saved = givens[p];
    givens[p] = -1;
    if (solver.hasUniqueSolution(givens, CARVE_NODE_BUDGET)) {
      clues--;
    } else {
      givens[p] = saved;
    }
  }
  return givens;
}

// --------------------------------------------------------------- conflits

/**
 * Cases en infraction, pour le surlignage rouge doux : triplets, excès d'une
 * valeur dans une ligne ou colonne, lignes ou colonnes complètes identiques.
 * Portage de `GameViewModel.computeConflicts`.
 */
export function computeConflicts(board, n) {
  const set = new Set();
  const half = n / 2;
  const at = (r, c) => board[r * n + c];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const v = at(r, c);
      if (v === -1) continue;
      if (c + 2 < n && at(r, c + 1) === v && at(r, c + 2) === v) {
        set.add(r * n + c); set.add(r * n + c + 1); set.add(r * n + c + 2);
      }
      if (r + 2 < n && at(r + 1, c) === v && at(r + 2, c) === v) {
        set.add(r * n + c); set.add((r + 1) * n + c); set.add((r + 2) * n + c);
      }
    }
  }

  for (let line = 0; line < n; line++) {
    for (const rows of [true, false]) {
      const zeros = [];
      const ones = [];
      for (let k = 0; k < n; k++) {
        const i = rows ? line * n + k : k * n + line;
        if (board[i] === 0) zeros.push(i);
        else if (board[i] === 1) ones.push(i);
      }
      if (zeros.length > half) zeros.forEach((i) => set.add(i));
      if (ones.length > half) ones.forEach((i) => set.add(i));
    }
  }

  for (const rows of [true, false]) {
    const seen = new Map();
    for (let a = 0; a < n; a++) {
      let key = '';
      let full = true;
      for (let b = 0; b < n; b++) {
        const v = rows ? at(a, b) : at(b, a);
        if (v === -1) { full = false; break; }
        key += v;
      }
      if (!full) continue;
      if (seen.has(key)) {
        const other = seen.get(key);
        for (let b = 0; b < n; b++) {
          set.add(rows ? a * n + b : b * n + a);
          set.add(rows ? other * n + b : b * n + other);
        }
      } else {
        seen.set(key, a);
      }
    }
  }
  return set;
}
