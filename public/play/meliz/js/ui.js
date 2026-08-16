/**
 * Rendu DOM de la grille, de la liste de mots et du HUD, plus les gestes de
 * sélection. Équivalent web de ui/game/GridView.kt, WordListView.kt et HudView.kt.
 */

import { formatTime } from './game.js';

const ACCENTS = ['primary', 'mint', 'lavender', 'peach', 'lemon'];

/**
 * (Re)construit les cellules d'une nouvelle partie. Les gestes ne sont PAS
 * branchés ici : `attachGestures` doit être appelé une seule fois sur le
 * conteneur, sinon chaque partie empilerait un jeu d'écouteurs supplémentaire
 * pointant vers la partie précédente.
 */
export function buildGrid(container, game) {
  container.innerHTML = '';
  container.style.setProperty('--grid-size', game.size);
  container.classList.toggle('dense', game.size >= 15);

  const cells = [];
  for (let r = 0; r < game.size; r++) {
    for (let c = 0; c < game.size; c++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = game.grid[r][c];
      cell.dataset.row = r;
      cell.dataset.col = c;
      container.appendChild(cell);
      cells.push(cell);
    }
  }

  return cells;
}

/**
 * Sélection au pointeur, branchée une fois pour toutes : `getGame` fournit la
 * partie courante à chaque événement. `setPointerCapture` couvre souris,
 * stylet et tactile d'un seul code. La conversion position → cellule reprend
 * `GridView.toGridPos` (division par le pas de la grille), ce qui reste juste
 * même lorsque le doigt sort de la grille en cours de tracé.
 */
export function attachGestures(container, getGame, { onSelectionEnd }) {
  let dragStart = null;

  function toGridPos(event) {
    const game = getGame();
    if (!game || !game.size) return null;
    const rect = container.getBoundingClientRect();
    const stride = rect.width / game.size;
    const col = Math.floor((event.clientX - rect.left) / stride);
    const row = Math.floor((event.clientY - rect.top) / stride);
    if (row < 0 || row >= game.size || col < 0 || col >= game.size) return null;
    return { row, col };
  }

  container.addEventListener('pointerdown', (e) => {
    const pos = toGridPos(e);
    if (!pos) return;
    e.preventDefault();
    container.setPointerCapture(e.pointerId);
    dragStart = pos;
    getGame().updateSelection(pos, pos);
  });

  container.addEventListener('pointermove', (e) => {
    if (!dragStart) return;
    const pos = toGridPos(e);
    if (pos) getGame().updateSelection(dragStart, pos);
  });

  function finish(e) {
    if (!dragStart) return;
    dragStart = null;
    if (container.hasPointerCapture(e.pointerId)) container.releasePointerCapture(e.pointerId);
    const game = getGame();
    if (game) onSelectionEnd(game.endSelection());
  }

  container.addEventListener('pointerup', finish);
  container.addEventListener('pointercancel', finish);
}

/** Applique l'état courant aux cellules déjà construites. */
export function renderGrid(cells, game) {
  for (const cell of cells) {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    const colorIndex = game.colorIndexAt(row, col);

    cell.className = 'cell';
    if (colorIndex !== null) cell.classList.add('found', `accent-${ACCENTS[colorIndex]}`);
    if (game.isSelected(row, col)) cell.classList.add('selected');
    if (game.isHinted(row, col) && colorIndex === null) cell.classList.add('hinted');
  }
}

/**
 * Trait de sélection tracé du centre de la première au centre de la dernière
 * cellule, comme le Canvas de GridView.kt. Le SVG utilise un viewBox en
 * pourcentage de la grille pour rester juste à toutes les tailles.
 */
export function renderSelectionLine(svg, game) {
  const path = game.selection;
  if (path.length < 2) {
    svg.innerHTML = '';
    return;
  }
  const step = 100 / game.size;
  const center = (i) => (i + 0.5) * step;
  const first = path[0];
  const last = path[path.length - 1];
  svg.innerHTML =
    `<line x1="${center(first.col)}" y1="${center(first.row)}" ` +
    `x2="${center(last.col)}" y2="${center(last.row)}" ` +
    `stroke-width="${step * 0.7}" stroke-linecap="round" />`;
}

/** Liste des mots à trouver, barrés une fois découverts. */
export function renderWords(container, game) {
  container.innerHTML = '';
  game.words.forEach((word, index) => {
    const chip = document.createElement('span');
    chip.className = 'word' + (word.isFound ? ` found accent-${ACCENTS[index % 5]}` : '');
    chip.textContent = word.normalized;
    container.appendChild(chip);
  });
}

/** Chrono, compteur de mots et bouton d'indice. */
export function renderHud(refs, game, t) {
  refs.timer.textContent = formatTime(game.elapsedSeconds);
  refs.progress.textContent = `${game.foundCount}/${game.words.length}`;
  refs.hintCount.textContent = t('game.hints_left', { n: game.hintsLeft });
  refs.hintButton.disabled = game.hintsLeft <= 0 || game.isFinished;
  refs.pauseButton.textContent = game.isPaused ? t('game.resume') : t('game.pause');
  refs.pauseButton.disabled = game.isFinished;
  refs.board.classList.toggle('paused', game.isPaused);
}
