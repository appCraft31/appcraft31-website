/**
 * Tinta, grille du jour : logique pure (aucun DOM, aucun React).
 *
 * Portage des règles de l'app iOS (dépôt Tinta) :
 * - `GridCipher/BoardView.swift` → `RuleCheck` (contrôle en direct des pastilles
 *   et des marqueurs, fondé sur les règles et jamais sur la solution) ;
 * - `GridCipher/GameViewModel.swift` → `validateIfFull` (grille pleine : juste
 *   ⇒ victoire, fausse ⇒ une erreur) et `GameResult.stars`.
 *
 * Les grilles viennent de `PuzzlePackTool daily-export` : ce sont exactement
 * celles de l'app (`DailyPuzzle.puzzle(for:)`), numérotées pareil (#1 = 2026-09-01).
 */

/** 0 = teal, 1 = amber, 2 = rose, 3 = violet (ordre de `PieceColor`). */
export type Color = 0 | 1 | 2 | 3;

export type Clue =
  | { t: 'count'; line: 'row' | 'col'; i: number; color: Color; n: number }
  | { t: 'rel'; a: [number, number]; b: [number, number]; eq: boolean }
  | { t: 'fixed'; cell: [number, number]; color: Color };

export interface DailyPuzzle {
  date: string;
  number: number;
  size: number;
  colorCount: number;
  clues: Clue[];
  /** Row-major. */
  solution: Color[];
}

export type Cells = (Color | null)[];
export type ChipStatus = 'open' | 'satisfied' | 'exceeded';


/** Date civile LOCALE du navigateur, `AAAA-MM-JJ`. */
export function localDateKey(d: Date = new Date()): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/** La veille d'une clé `AAAA-MM-JJ` (calendrier pur, sans fuseau). */
export function previousDay(key: string): string {
  const [y, m, d] = key.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d) - 86_400_000);
  return t.toISOString().slice(0, 10);
}

export function fixedCells(p: DailyPuzzle): Map<number, Color> {
  const out = new Map<number, Color>();
  for (const c of p.clues) if (c.t === 'fixed') out.set(c.cell[0] * p.size + c.cell[1], c.color);
  return out;
}

/** Grille de départ : cases révélées posées, le reste vide. */
export function initialCells(p: DailyPuzzle): Cells {
  const cells: Cells = Array(p.size * p.size).fill(null);
  for (const [i, color] of fixedCells(p)) cells[i] = color;
  return cells;
}

function lineIndices(line: 'row' | 'col', i: number, size: number): number[] {
  return Array.from({ length: size }, (_, k) => (line === 'row' ? i * size + k : k * size + i));
}

/** État d'une pastille de comptage (cf. `RuleCheck.status`). */
export function chipStatus(
  clue: Extract<Clue, { t: 'count' }>,
  cells: Cells,
  size: number,
): ChipStatus {
  const idx = lineIndices(clue.line, clue.i, size);
  const placed = idx.filter((k) => cells[k] === clue.color).length;
  if (placed > clue.n) return 'exceeded';
  if (placed === clue.n) {
    // Pastille « à zéro » : estompée seulement une fois la ligne pleine.
    if (clue.n === 0) return idx.every((k) => cells[k] !== null) ? 'satisfied' : 'open';
    return 'satisfied';
  }
  return 'open';
}

/** Un marqueur `=` / `≠` est-il contredit par ses deux cases remplies ? */
export function relationViolated(
  clue: Extract<Clue, { t: 'rel' }>,
  cells: Cells,
  size: number,
): boolean {
  const a = cells[clue.a[0] * size + clue.a[1]];
  const b = cells[clue.b[0] * size + clue.b[1]];
  if (a === null || b === null) return false;
  return clue.eq ? a !== b : a === b;
}

export const isFull = (cells: Cells) => cells.every((c) => c !== null);

/** La grille pleine est-elle la solution (unique) ? */
export function isSolved(p: DailyPuzzle, cells: Cells): boolean {
  return cells.length === p.solution.length && cells.every((c, i) => c === p.solution[i]);
}

/**
 * La grille respecte-t-elle tous les indices ? (Contrôle indépendant de la
 * solution, utilisé par les tests : la solution exportée doit le passer.)
 */
export function satisfiesClues(p: DailyPuzzle, cells: Cells): boolean {
  return p.clues.every((c) => {
    if (c.t === 'fixed') return cells[c.cell[0] * p.size + c.cell[1]] === c.color;
    if (c.t === 'rel') {
      const a = cells[c.a[0] * p.size + c.a[1]];
      const b = cells[c.b[0] * p.size + c.b[1]];
      return a !== null && b !== null && (c.eq ? a === b : a !== b);
    }
    const idx = lineIndices(c.line, c.i, p.size);
    return idx.filter((k) => cells[k] === c.color).length === c.n;
  });
}

/** 3★ sans erreur, 2★ avec une erreur, 1★ au-delà (pas d'indice sur le web). */
export function stars(mistakes: number): number {
  if (mistakes === 0) return 3;
  if (mistakes <= 1) return 2;
  return 1;
}

/**
 * Résultat partageable, sans rien révéler de la solution :
 * « Tinta #44 · 6×6 · ★★★ · 🔥3 », la ligne de `performanceLine`, puis
 * l'URL. Même format que le partage de l'app iOS.
 */
export function shareText(
  p: Pick<DailyPuzzle, 'number' | 'size' | 'colorCount'>,
  mistakes: number,
  streak: number,
  url: string,
): string {
  const s = stars(mistakes);
  const parts = [
    `Tinta #${p.number}`,
    `${p.size}×${p.size}`,
    '★'.repeat(s) + '☆'.repeat(3 - s),
  ];
  if (streak > 1) parts.push(`🔥${streak}`);
  return `${parts.join(' · ')}\n${performanceLine(p.size, mistakes)}\n${url}`;
}

/**
 * Une case par colonne : 🟩 par défaut, 🟥 par erreur (plafonné à la
 * largeur). Comme dans l'app, qui y ajoute 🟨 par indice utilisé.
 */
export function performanceLine(size: number, mistakes: number): string {
  const red = Math.min(mistakes, size);
  return '🟩'.repeat(size - red) + '🟥'.repeat(red);
}

/** Série en cours : jours consécutifs résolus, jusqu'à aujourd'hui (ou hier). */
export function currentStreak(solvedDays: Iterable<string>, today: string): number {
  const set = new Set(solvedDays);
  let day = set.has(today) ? today : previousDay(today);
  let n = 0;
  while (set.has(day)) {
    n++;
    day = previousDay(day);
  }
  return n;
}
