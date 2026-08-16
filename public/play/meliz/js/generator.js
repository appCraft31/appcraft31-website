/**
 * Modèles de jeu et générateur de grille.
 *
 * Port de android/app/src/main/java/com/appcraft31/meliz/domain/ :
 *   model/GridDirection.kt, model/Difficulty.kt, model/PuzzleTheme.kt,
 *   text/WordNormalizer.kt, generator/GridGenerator.kt, ScoreFormula.kt
 * Les noms et constantes sont conservés pour que la parité reste vérifiable.
 */

// ---------------------------------------------------------------- directions

/** Les huit directions en ligne droite ; delta = déplacement par lettre. */
export const DIRECTIONS = {
  RIGHT: { deltaRow: 0, deltaCol: 1 },
  LEFT: { deltaRow: 0, deltaCol: -1 },
  DOWN: { deltaRow: 1, deltaCol: 0 },
  UP: { deltaRow: -1, deltaCol: 0 },
  DOWN_RIGHT: { deltaRow: 1, deltaCol: 1 },
  DOWN_LEFT: { deltaRow: 1, deltaCol: -1 },
  UP_RIGHT: { deltaRow: -1, deltaCol: 1 },
  UP_LEFT: { deltaRow: -1, deltaCol: -1 },
};

const ALL_DIRECTIONS = Object.values(DIRECTIONS);

/**
 * Direction de `start` vers `end` si le tracé est horizontal, vertical ou à
 * 45°, sinon null. Port de `GridDirection.from`.
 */
export function directionFrom(start, end) {
  const dr = end.row - start.row;
  const dc = end.col - start.col;
  if (dr === 0 && dc === 0) return null;
  if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;
  const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
  const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
  return ALL_DIRECTIONS.find((d) => d.deltaRow === stepR && d.deltaCol === stepC) || null;
}

// --------------------------------------------------------------- difficultés

const EASY_DIRECTIONS = [DIRECTIONS.RIGHT, DIRECTIONS.DOWN];
const MEDIUM_DIRECTIONS = [
  DIRECTIONS.RIGHT, DIRECTIONS.DOWN, DIRECTIONS.LEFT,
  DIRECTIONS.UP, DIRECTIONS.DOWN_RIGHT, DIRECTIONS.UP_RIGHT,
];

export const DIFFICULTIES = {
  easy: { id: 'easy', gridSize: 8, wordCount: 6, allowedDirections: EASY_DIRECTIONS, scoreMultiplier: 1 },
  medium: { id: 'medium', gridSize: 12, wordCount: 10, allowedDirections: MEDIUM_DIRECTIONS, scoreMultiplier: 2 },
  hard: { id: 'hard', gridSize: 15, wordCount: 14, allowedDirections: ALL_DIRECTIONS, scoreMultiplier: 3 },
};

export function difficultyFromId(id) {
  return DIFFICULTIES[id] || DIFFICULTIES.medium;
}

// -------------------------------------------------------------------- thèmes

/** `isBonus` reproduit PuzzleTheme.kt : ces thèmes sont hors rotation du jour. */
export const THEMES = [
  { id: 'animals', isBonus: false },
  { id: 'fruits', isBonus: false },
  { id: 'countries', isBonus: false },
  { id: 'sports', isBonus: false },
  { id: 'colors', isBonus: false },
  { id: 'jobs', isBonus: false },
  { id: 'space', isBonus: true },
  { id: 'music', isBonus: true },
  { id: 'transport', isBonus: true },
];

export function themeFromId(id) {
  return THEMES.find((t) => t.id === id) || THEMES[0];
}

// ------------------------------------------------------------- normalisation

/**
 * Majuscules ASCII sans diacritiques. Équivalent de `WordNormalizer.normalize`
 * (NFD → suppression des marques combinantes → majuscules → filtre A-Z).
 */
export function normalize(raw) {
  return raw
    .normalize('NFD')
    .replace(/\p{Mn}+/gu, '')
    .toUpperCase()
    .replace(/[^A-Z]/g, '');
}

// ------------------------------------------------------------------ générateur

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MAX_ATTEMPTS = 200;

/** Bornes de départ valides sur un axe, selon le delta. Port de `startRange`. */
function startRange(delta, length, size) {
  if (delta === 1) return { from: 0, until: size - length + 1 };
  if (delta === -1) return { from: length - 1, until: size };
  return { from: 0, until: size };
}

function tryPlace(word, letters, size, directions, random) {
  if (directions.length === 0) return null;
  const length = word.length;

  for (let attempts = 0; attempts < MAX_ATTEMPTS; attempts++) {
    const dir = directions[random.nextInt(directions.length)];

    const rowRange = startRange(dir.deltaRow, length, size);
    const colRange = startRange(dir.deltaCol, length, size);
    if (rowRange.until <= rowRange.from || colRange.until <= colRange.from) continue;
    const row = rowRange.from + random.nextInt(rowRange.until - rowRange.from);
    const col = colRange.from + random.nextInt(colRange.until - colRange.from);

    // Chaque cellule doit être vide ou porter déjà la bonne lettre.
    let ok = true;
    for (let i = 0; i < length; i++) {
      const existing = letters[row + dir.deltaRow * i][col + dir.deltaCol * i];
      if (existing !== null && existing !== word[i]) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    for (let i = 0; i < length; i++) {
      letters[row + dir.deltaRow * i][col + dir.deltaCol * i] = word[i];
    }

    return {
      normalized: word,
      start: { row, col },
      direction: dir,
      positions: Array.from({ length }, (_, i) => ({
        row: row + dir.deltaRow * i,
        col: col + dir.deltaCol * i,
      })),
      isFound: false,
    };
  }
  return null;
}

/**
 * Place les mots (les plus longs d'abord) puis remplit le reste de lettres
 * aléatoires. Un mot non placé après MAX_ATTEMPTS essais est abandonné : il
 * n'apparaît alors pas dans `placedWords`, donc jamais dans la liste affichée.
 */
export function generate(words, size, allowedDirections, random) {
  const letters = Array.from({ length: size }, () => new Array(size).fill(null));
  const placed = [];

  const candidates = words
    .map(normalize)
    .filter((w) => w.length > 0 && w.length <= size)
    .sort((a, b) => b.length - a.length);

  for (const word of candidates) {
    const p = tryPlace(word, letters, size, allowedDirections, random);
    if (p) placed.push(p);
  }

  const grid = Array.from({ length: size }, (_, r) =>
    Array.from({ length: size }, (_, c) =>
      letters[r][c] !== null ? letters[r][c] : ALPHABET[random.nextInt(ALPHABET.length)]
    )
  );

  return { grid, placedWords: placed, size };
}

// ----------------------------------------------------------------- score

/** Score = max(100, 1000 - 5*secondes) × multiplicateur. Port de ScoreFormula.kt. */
export function computeScore(elapsedSeconds, difficulty) {
  return Math.max(100, 1000 - elapsedSeconds * 5) * difficulty.scoreMultiplier;
}
