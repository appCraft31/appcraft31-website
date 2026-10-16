/**
 * Binero web : menu, partie, victoire. La logique de partie suit
 * `GameViewModel.swift` (cycle vide → 0 → 1 → vide, indices qui révèlent une
 * case juste, recommencer sans effacer les indices ni le chrono du jour,
 * aide au placement coupée en Expert) ; le moteur est dans engine.js.
 */

import {
  DAILY_DIFFICULTIES, FREE_DIFFICULTIES, computeConflicts, currentDayKey,
  generateDaily, generateFree,
} from './engine.js';
import { createTranslator, detectLanguage } from './strings.js';
import * as store from './store.js';

const lang = detectLanguage();
const t = createTranslator(lang);
document.documentElement.lang = lang;

const HINTS_PER_GAME = 3;
/** Le mode libre du web s'arrête au 10×10 : 12×12 et 14×14 restent l'argument de l'app. */
const WEB_FREE = ['initiation', 'facile', 'moyen'];

const el = (id) => document.getElementById(id);
const refs = {
  menu: el('menu'), board: el('board'), victory: el('victory'),
  grid: el('grid'), timer: el('timer'), progress: el('progress'),
  title: el('board-title'), subtitle: el('board-subtitle'), helpNote: el('help-note'),
  hint: el('hint'), hintCount: el('hint-count'), undo: el('undo'), restart: el('restart'),
  pause: el('pause'), quit: el('quit'), pauseOverlay: el('pause-overlay'),
};

let game = null;
let cells = [];

const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

// ----------------------------------------------------------------- textes

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

/** Heure locale du changement de grille : 7 h UTC, soit 8 h ou 9 h en France selon la saison. */
function resetHour() {
  const now = new Date();
  const reset = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 7));
  return reset.toLocaleTimeString(lang, { hour: 'numeric', minute: '2-digit' });
}

// ------------------------------------------------------------------- menu

function segmented(container, items, active, onPick) {
  container.innerHTML = '';
  for (const item of items) {
    const button = document.createElement(item.href ? 'a' : 'button');
    if (item.href) button.href = item.href;
    else button.type = 'button';
    button.className = 'seg' + (item.id === active ? ' active' : '') + (item.locked ? ' locked' : '');
    button.innerHTML = `<strong>${item.label}</strong><span>${item.sub}</span>`;
    if (!item.locked) {
      button.addEventListener('click', () => {
        container.querySelectorAll('.seg').forEach((b) => b.classList.remove('active'));
        button.classList.add('active');
        onPick(item.id);
      });
    }
    container.appendChild(button);
  }
}

function dailyStatus(dayKey, id) {
  const result = store.dailyResult(dayKey, id);
  if (result) return { done: true, text: t('menu.daily_done', { time: formatTime(result.time) }) };
  if (store.loadGame(`daily.${id}`, dayKey)) return { done: false, text: t('menu.daily_resume') };
  return { done: false, text: t('menu.daily_todo') };
}

function renderMenu() {
  const prefs = store.prefs();
  const dayKey = currentDayKey();

  el('daily-sub').textContent = t('menu.daily_sub', { hour: resetHour() });
  el('daily-date').textContent = new Date(`${dayKey}T12:00:00Z`).toLocaleDateString(lang, {
    weekday: 'long', day: 'numeric', month: 'long',
  });

  const pickDaily = (id) => {
    store.savePrefs({ daily: id });
    const status = dailyStatus(dayKey, id);
    el('daily-play').textContent = store.loadGame(`daily.${id}`, dayKey) ? t('menu.resume') : t('menu.play');
    el('daily-status').textContent = status.text;
    el('daily-status').classList.toggle('done', status.done);
  };
  segmented(
    el('daily-list'),
    Object.values(DAILY_DIFFICULTIES).map((d) => {
      const status = dailyStatus(dayKey, d.id);
      return {
        id: d.id,
        label: `${status.done ? '✓ ' : ''}${t(`daily.${d.id}`)}`,
        sub: `${d.size}×${d.size}`,
      };
    }),
    prefs.daily,
    pickDaily,
  );
  pickDaily(prefs.daily);

  const streak = store.activeStreak(dayKey);
  el('daily-streak').textContent = t('menu.streak', { n: streak });
  el('daily-streak').hidden = streak === 0;

  const freeId = WEB_FREE.includes(prefs.free) ? prefs.free : 'facile';
  const pickFree = (id) => {
    store.savePrefs({ free: id });
    el('free-play').textContent = store.loadGame(`free.${id}`, id) ? t('menu.resume') : t('menu.play');
  };
  segmented(
    el('free-list'),
    Object.values(FREE_DIFFICULTIES).map((d) => ({
      id: d.id,
      label: t(`free.${d.id}`),
      sub: WEB_FREE.includes(d.id) ? `${d.size}×${d.size}` : `🔒 ${t('menu.locked')}`,
      locked: !WEB_FREE.includes(d.id),
      href: WEB_FREE.includes(d.id) ? null : '../../apps/binero.html',
    })),
    freeId,
    pickFree,
  );
  pickFree(freeId);

  el('opt-help').checked = prefs.help;
  segmented(
    el('look-list'),
    ['digits', 'colors', 'bw'].map((id) => ({ id, label: t(`look.${id}`), sub: lookSample(id) })),
    prefs.look,
    (id) => { store.savePrefs({ look: id }); applyLook(); },
  );
  applyLook();

  renderRecords();
}

function lookSample(id) {
  const tile = (v) => `<i class="sample look-${id} v${v}">${id === 'digits' ? v : ''}</i>`;
  return `${tile(0)}${tile(1)}`;
}

function applyLook() {
  const look = store.prefs().look;
  refs.grid.dataset.look = look;
  document.querySelectorAll('.legend').forEach((node) => { node.dataset.look = look; });
}

function renderRecords() {
  const list = el('records');
  const records = store.records();
  list.innerHTML = '';
  const entries = WEB_FREE.filter((id) => records[id]);
  if (!entries.length) {
    list.innerHTML = `<p class="muted">${t('menu.no_records')}</p>`;
    return;
  }
  for (const id of entries) {
    const row = document.createElement('div');
    row.className = 'record-row';
    const size = FREE_DIFFICULTIES[id].size;
    row.innerHTML =
      `<span>${t(`free.${id}`)} · ${size}×${size}</span>` +
      `<span class="muted">× ${records[id].solved}</span>` +
      `<strong>${formatTime(records[id].time)}</strong>`;
    list.appendChild(row);
  }
}

function show(screen) {
  refs.menu.hidden = screen !== 'menu';
  refs.board.hidden = screen !== 'board';
  refs.victory.hidden = screen !== 'victory';
  window.scrollTo({ top: 0 });
}

// ----------------------------------------------------------------- partie

function slotOf(mode, difficulty) { return `${mode}.${difficulty}`; }

function startGame(mode, difficulty) {
  const dayKey = currentDayKey();
  const slot = slotOf(mode, difficulty);
  const context = mode === 'daily' ? dayKey : difficulty;
  const saved = store.loadGame(slot, context);

  let puzzle;
  if (saved) {
    puzzle = saved.puzzle;
  } else {
    puzzle = mode === 'daily' ? generateDaily(dayKey, difficulty) : generateFree(difficulty);
  }

  game = {
    mode, difficulty, dayKey, slot, context, puzzle,
    board: saved ? saved.board : puzzle.givens.slice(),
    elapsed: saved ? saved.elapsed : 0,
    hintsUsed: saved ? saved.hintsUsed : 0,
    history: [],
    paused: false,
    finished: false,
    cursor: -1,
    flash: -1,
  };

  const n = puzzle.size;
  const d = mode === 'daily' ? DAILY_DIFFICULTIES[difficulty] : FREE_DIFFICULTIES[difficulty];
  refs.title.textContent = mode === 'daily' ? t('game.daily_title') : t(`free.${difficulty}`);
  refs.subtitle.textContent = mode === 'daily'
    ? `${t(`daily.${difficulty}`)} · ${d.size}×${d.size}`
    : `${t('game.free_title')} · ${d.size}×${d.size}`;
  refs.helpNote.hidden = !(mode === 'daily' && difficulty === 'expert');

  buildGrid(n);
  show('board');
  persist();
  render();
}

/** Aide au placement : réglage du joueur, toujours coupée en Expert du jour (comme l'app). */
function helpActive() {
  if (game.mode === 'daily' && game.difficulty === 'expert') return false;
  return store.prefs().help;
}

function persist() {
  if (!game || game.finished) return;
  store.saveGame(game.slot, {
    context: game.context, puzzle: game.puzzle, board: game.board,
    elapsed: game.elapsed, hintsUsed: game.hintsUsed,
  });
}

function buildGrid(n) {
  refs.grid.innerHTML = '';
  refs.grid.style.setProperty('--n', n);
  refs.grid.classList.toggle('dense', n >= 12);
  cells = [];
  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    // Délai de la vague de victoire : en diagonale, depuis le coin haut gauche.
    cell.style.setProperty('--d', (Math.floor(i / n) + (i % n)) * 35);
    cell.setAttribute('role', 'gridcell');
    refs.grid.appendChild(cell);
    cells.push(cell);
  }
}

function render() {
  if (!game) return;
  const { puzzle, board } = game;
  const conflicts = helpActive() ? computeConflicts(board, puzzle.size) : new Set();

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const v = board[i];
    const given = puzzle.givens[i] !== -1;
    let cls = 'cell';
    if (v !== -1) cls += ` v${v}`;
    if (given) cls += ' given';
    if (conflicts.has(i)) cls += ' bad';
    if (i === game.cursor) cls += ' cursor';
    if (i === game.flash) cls += ' hinted';
    if (cell.className !== cls) cell.className = cls;
    const text = v === -1 ? '' : String(v);
    if (cell.textContent !== text) cell.textContent = text;
  }

  const editable = puzzle.givens.filter((v) => v === -1).length;
  const filled = puzzle.givens.reduce((sum, v, i) => sum + (v === -1 && board[i] !== -1 ? 1 : 0), 0);
  refs.progress.textContent = t('game.progress', { n: editable ? Math.floor((filled * 100) / editable) : 0 });
  refs.timer.textContent = formatTime(game.elapsed);

  const hintsLeft = HINTS_PER_GAME - game.hintsUsed;
  refs.hintCount.textContent = Math.max(0, hintsLeft);
  refs.hint.disabled = hintsLeft <= 0 || game.finished;
  refs.hint.title = t('game.hints_left', { n: Math.max(0, hintsLeft) });
  refs.undo.disabled = game.history.length === 0;

  const pauseLabel = game.paused ? t('game.resume') : t('game.pause');
  refs.pause.querySelector('.sr').textContent = pauseLabel;
  refs.pause.title = pauseLabel;
  refs.pause.classList.toggle('is-paused', game.paused);
  refs.board.classList.toggle('paused', game.paused);
  refs.pauseOverlay.hidden = !game.paused;
}

function setCell(index, value, { record = true } = {}) {
  if (!game || game.finished || game.paused) return;
  if (game.puzzle.givens[index] !== -1) return;
  const previous = game.board[index];
  if (previous === value) return;
  if (record) game.history.push({ index, previous });
  game.board[index] = value;
  afterMove();
}

function cycle(index, backwards = false) {
  const v = game.board[index];
  const next = backwards ? (v === -1 ? 1 : v === 1 ? 0 : -1) : (v === -1 ? 0 : v === 0 ? 1 : -1);
  setCell(index, next);
}

function afterMove() {
  const { board, puzzle } = game;
  // Grille pleine et sans infraction : c'est la solution (elle est unique).
  if (!board.includes(-1) && computeConflicts(board, puzzle.size).size === 0) {
    finish();
    return;
  }
  persist();
  render();
}

function useHint() {
  if (!game || game.finished || game.paused) return;
  if (game.hintsUsed >= HINTS_PER_GAME) return;
  const { board, puzzle } = game;
  const candidates = [];
  for (let i = 0; i < board.length; i++) {
    if (puzzle.givens[i] === -1 && board[i] !== puzzle.solution[i]) candidates.push(i);
  }
  if (!candidates.length) return;
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  game.hintsUsed++;
  game.flash = pick;
  setTimeout(() => { if (game && game.flash === pick) { game.flash = -1; render(); } }, 1400);
  setCell(pick, puzzle.solution[pick]);
}

function undo() {
  if (!game || game.finished || game.paused) return;
  const last = game.history.pop();
  if (!last) return;
  game.board[last.index] = last.previous;
  afterMove();
}

/** Recommencer : cases vidées ; les indices restent comptés, le chrono du jour continue. */
function restart() {
  if (!game || game.finished) return;
  game.board = game.puzzle.givens.slice();
  game.history = [];
  if (game.mode !== 'daily') game.elapsed = 0;
  game.paused = false;
  persist();
  render();
}

function togglePause() {
  if (!game || game.finished) return;
  game.paused = !game.paused;
  render();
}

function backToMenu() {
  persist();
  game = null;
  renderMenu();
  show('menu');
}

// --------------------------------------------------------------- victoire

function finish() {
  game.finished = true;
  game.cursor = -1;
  store.clearGame(game.slot);
  render();
  refs.grid.classList.add('solved');

  const isDaily = game.mode === 'daily';
  let streak = 0;
  let isBest = false;
  if (isDaily) streak = store.completeDaily(game.dayKey, game.difficulty, game.elapsed, game.hintsUsed);
  else isBest = store.completeFree(game.difficulty, game.elapsed);

  el('victory-time').textContent = formatTime(game.elapsed);
  el('victory-hints').textContent = game.hintsUsed;
  el('victory-streak').textContent = streak;
  el('victory-streak-row').hidden = !isDaily;
  const best = store.records()[game.difficulty];
  el('victory-best').textContent = best ? formatTime(best.time) : '—';
  el('victory-best-row').hidden = isDaily;
  el('victory-badge').hidden = !isBest;
  el('share').hidden = !isDaily;
  el('victory-next').hidden = isDaily;

  // Un temps pour voir la grille résolue s'illuminer avant l'écran de fin.
  setTimeout(() => {
    refs.grid.classList.remove('solved');
    show('victory');
  }, 900);
}

async function share() {
  const d = DAILY_DIFFICULTIES[game.difficulty];
  const date = new Date(`${game.dayKey}T12:00:00Z`).toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' });
  const streak = store.activeStreak(game.dayKey);
  const lines = [
    t('share.title', { date }),
    t('share.line', { difficulty: t(`daily.${d.id}`), size: d.size, time: formatTime(game.elapsed), hints: game.hintsUsed }),
  ];
  if (streak > 1) lines.push(t('share.streak', { n: streak }));
  lines.push(`https://appcraft31.app/play/binero/${lang === 'fr' ? '' : `?lang=${lang}`}`);
  const text = lines.join('\n');

  if (navigator.share) {
    try { await navigator.share({ title: 'Binero', text }); return; } catch { /* annulé : on copie */ }
  }
  try {
    await navigator.clipboard.writeText(text);
    const button = el('share');
    const label = button.textContent;
    button.textContent = t('victory.copied');
    setTimeout(() => { button.textContent = label; }, 2000);
  } catch { /* presse-papiers refusé */ }
}

// ------------------------------------------------------------- événements

refs.grid.addEventListener('click', (e) => {
  const cell = e.target.closest('.cell');
  if (!cell || !game) return;
  game.cursor = Number(cell.dataset.index);
  cycle(game.cursor);
});

refs.grid.addEventListener('contextmenu', (e) => {
  const cell = e.target.closest('.cell');
  if (!cell || !game) return;
  e.preventDefault();
  game.cursor = Number(cell.dataset.index);
  cycle(game.cursor, true);
});

refs.grid.addEventListener('keydown', (e) => {
  if (!game || game.finished) return;
  const n = game.puzzle.size;
  if (game.cursor < 0) game.cursor = 0;
  const r = Math.floor(game.cursor / n);
  const c = game.cursor % n;
  const moves = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };
  if (moves[e.key]) {
    e.preventDefault();
    const [dr, dc] = moves[e.key];
    game.cursor = Math.min(n - 1, Math.max(0, r + dr)) * n + Math.min(n - 1, Math.max(0, c + dc));
    render();
  } else if (e.key === '0' || e.key === '1') {
    e.preventDefault();
    setCell(game.cursor, Number(e.key));
  } else if (e.key === 'Backspace' || e.key === 'Delete') {
    e.preventDefault();
    setCell(game.cursor, -1);
  } else if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    cycle(game.cursor);
  } else if ((e.key === 'z' || e.key === 'Z') && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    undo();
  }
});

refs.hint.addEventListener('click', useHint);
refs.undo.addEventListener('click', undo);
refs.restart.addEventListener('click', restart);
refs.pause.addEventListener('click', togglePause);
refs.pauseOverlay.addEventListener('click', togglePause);
refs.quit.addEventListener('click', backToMenu);

el('daily-play').addEventListener('click', () => startGame('daily', store.prefs().daily));
el('free-play').addEventListener('click', () => {
  const id = store.prefs().free;
  startGame('free', WEB_FREE.includes(id) ? id : 'facile');
});
el('opt-help').addEventListener('change', (e) => store.savePrefs({ help: e.target.checked }));
el('victory-next').addEventListener('click', () => startGame('free', game.difficulty));
el('victory-menu').addEventListener('click', backToMenu);
el('share').addEventListener('click', share);

// Le chrono ne tourne que partie visible, active et non en pause.
setInterval(() => {
  if (!game || game.finished || game.paused || document.hidden || refs.board.hidden) return;
  game.elapsed++;
  refs.timer.textContent = formatTime(game.elapsed);
  if (game.elapsed % 5 === 0) persist();
}, 1000);

document.addEventListener('visibilitychange', () => { if (document.hidden) persist(); });
window.addEventListener('pagehide', persist);

applyI18n();
renderMenu();
show('menu');
