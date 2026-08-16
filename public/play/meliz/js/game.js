/**
 * État d'une partie : sélection, validation, chrono, indices, victoire.
 * Port de ui/game/GameViewModel.kt et GameUiState.kt.
 */

import { createRandom } from './rng.js';
import { pickWords } from './words.js';
import { generate, directionFrom, computeScore } from './generator.js';

/** Indices offerts par partie (le mobile les débloque par pub récompensée). */
export const MAX_HINTS = 3;

const posKey = (p) => `${p.row},${p.col}`;

export class Game {
  /**
   * @param {object} options
   * @param {object} options.theme      thème (cf. THEMES)
   * @param {object} options.difficulty difficulté (cf. DIFFICULTIES)
   * @param {string} options.languageCode 'fr' | 'en'
   * @param {boolean} options.isDaily
   * @param {number|null} options.seed  graine fixe pour le défi du jour
   * @param {function} options.onChange appelé à chaque mutation de l'état
   */
  constructor({ theme, difficulty, languageCode, isDaily = false, seed = null, onChange }) {
    this.theme = theme;
    this.difficulty = difficulty;
    this.languageCode = languageCode;
    this.isDaily = isDaily;
    this.seed = seed;
    this.onChange = onChange || (() => {});

    this.grid = [];
    this.words = [];
    this.size = 0;
    this.selection = [];
    this.foundCells = new Map();  // "r,c" -> index de couleur
    this.hintedCells = new Set(); // "r,c"
    this.hintsLeft = MAX_HINTS;
    this.elapsedSeconds = 0;
    this.isFinished = false;
    this.isPaused = false;
    this.points = 0;
    this._timer = null;
  }

  async start() {
    const { wordCount, gridSize, allowedDirections } = this.difficulty;
    // Défi du jour : on re-sème à chaque génération pour qu'un rejeu soit identique.
    const random = createRandom(this.seed);

    // `generate` abandonne un mot qu'il n'a pas su placer en 200 essais. C'est
    // rare mais réel en 8×8, où seules deux directions sont autorisées (mesuré :
    // 0,9 % des grilles, jusqu'à 3 mots sur 6). On retente alors avec un autre
    // tirage. Le générateur aléatoire n'est PAS re-semé entre les tentatives :
    // la séquence continue, ce qui garde le défi du jour reproductible tout en
    // donnant un résultat différent à chaque essai.
    let best = null;
    for (let attempt = 0; attempt < 12; attempt++) {
      const raw = await pickWords(this.theme.id, this.languageCode, wordCount, random, gridSize);
      const puzzle = generate(raw, gridSize, allowedDirections, random);
      if (!best || puzzle.placedWords.length > best.placedWords.length) best = puzzle;
      if (best.placedWords.length >= Math.min(wordCount, raw.length)) break;
    }

    this.grid = best.grid;
    this.words = best.placedWords;
    this.size = best.size;
    this.startTimer();
    this.onChange();
  }

  startTimer() {
    this.stopTimer();
    this._timer = setInterval(() => {
      if (!this.isPaused && !this.isFinished) {
        this.elapsedSeconds += 1;
        this.onChange();
      }
    }, 1000);
  }

  stopTimer() {
    if (this._timer) clearInterval(this._timer);
    this._timer = null;
  }

  togglePause() {
    if (this.isFinished) return;
    this.isPaused = !this.isPaused;
    if (this.isPaused) this.selection = [];
    this.onChange();
  }

  // ------------------------------------------------------------- sélection

  /** Met à jour la sélection si `start`→`end` forme une ligne valide. */
  updateSelection(start, end) {
    if (this.isPaused || this.isFinished) return;
    const path = this.path(start, end);
    if (!path) return;
    const same =
      path.length === this.selection.length &&
      path.every((p, i) => p.row === this.selection[i].row && p.col === this.selection[i].col);
    if (!same) {
      this.selection = path;
      this.onChange();
    }
  }

  /**
   * Valide la sélection courante. Retourne 'found', 'invalid' ou null (simple
   * tap, qui ne doit pas être signalé comme une erreur).
   */
  endSelection() {
    if (this.selection.length === 0) return null;

    const letters = this.selection
      .filter((p) => p.row >= 0 && p.row < this.size && p.col >= 0 && p.col < this.size)
      .map((p) => this.grid[p.row][p.col]);
    const str = letters.join('');
    const reverse = str.split('').reverse().join('');

    const matchedIndex = this.words.findIndex(
      (w) => !w.isFound && (w.normalized === str || w.normalized === reverse)
    );

    if (matchedIndex >= 0) {
      const matched = this.words[matchedIndex];
      matched.isFound = true;
      // Chaque mot garde une couleur d'accent distincte (5 accents, par ordre).
      const colorIndex = matchedIndex % 5;
      matched.positions.forEach((p) => this.foundCells.set(posKey(p), colorIndex));
      this.selection = [];
      this.checkVictory();
      this.onChange();
      return 'found';
    }

    const wasRealAttempt = this.selection.length >= 2;
    this.selection = [];
    this.onChange();
    return wasRealAttempt ? 'invalid' : null;
  }

  /** Chemin rectiligne de `start` à `end` (H/V/45°), sinon null. */
  path(start, end) {
    if (start.row === end.row && start.col === end.col) return [start];
    const dir = directionFrom(start, end);
    if (!dir) return null;
    const steps = Math.max(Math.abs(end.row - start.row), Math.abs(end.col - start.col));
    return Array.from({ length: steps + 1 }, (_, i) => ({
      row: start.row + dir.deltaRow * i,
      col: start.col + dir.deltaCol * i,
    }));
  }

  // ---------------------------------------------------------------- indice

  /** Révèle la première lettre non encore dévoilée d'un mot non trouvé. */
  revealHint() {
    if (this.hintsLeft <= 0 || this.isFinished) return false;
    const candidates = this.words.filter((w) => !w.isFound);
    if (candidates.length === 0) return false;
    const word = candidates[Math.floor(Math.random() * candidates.length)];
    const pos = word.positions.find(
      (p) => !this.hintedCells.has(posKey(p)) && !this.foundCells.has(posKey(p))
    );
    if (!pos) return false;
    this.hintedCells.add(posKey(pos));
    this.hintsLeft -= 1;
    this.onChange();
    return true;
  }

  // -------------------------------------------------------------- victoire

  checkVictory() {
    // La garde sur la longueur évite une victoire immédiate si, cas extrême,
    // aucun mot n'a pu être placé.
    if (this.words.length === 0 || !this.words.every((w) => w.isFound)) return;
    this.stopTimer();
    this.isFinished = true;
    this.points = computeScore(this.elapsedSeconds, this.difficulty);
  }

  // ---------------------------------------------------------------- helpers

  colorIndexAt(row, col) {
    const v = this.foundCells.get(`${row},${col}`);
    return v === undefined ? null : v;
  }

  isHinted(row, col) {
    return this.hintedCells.has(`${row},${col}`);
  }

  isSelected(row, col) {
    return this.selection.some((p) => p.row === row && p.col === col);
  }

  get foundCount() {
    return this.words.filter((w) => w.isFound).length;
  }

  destroy() {
    this.stopTimer();
  }
}

/** Formate des secondes en mm:ss. */
export function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
