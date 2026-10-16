/**
 * Zellige web : menu, partie, victoire. La logique de partie suit
 * `game_notifier.dart` : réappuyer sur le chiffre posé l'efface, les notes ne
 * s'écrivent que dans une case vide, poser une réponse efface les notes de la
 * case, l'indice corrige la sélection si elle est vide ou fausse, sinon la
 * case perfectible la plus proche (distance de Tchebychev), et l'annulation
 * ramène la sélection sur la case défaite. Le moteur est dans engine.js.
 */

import {
  RegionMap, computeConflicts, difficultyForLevel, generateDaily, generateLevel, localDayKey,
} from './engine.js';
import { createTranslator, detectLanguage } from './strings.js';
import * as store from './store.js';

const lang = detectLanguage();
const t = createTranslator(lang);
document.documentElement.lang = lang;

const EMPTY = 0;
const HINTS_PER_GAME = 3;
const UNDO_LIMIT = 200;

/**
 * Paliers du mode libre, chacun au premier niveau du palier dans l'app. Le web
 * s'arrête au 9×9 : l'Expert (10×10 puis 12×12 sans fin) est le mode histoire
 * de l'app. La grille du jour, elle, est la 12×12 de l'app.
 */
const TIERS = [
  { id: 'initiation', level: 1 },
  { id: 'facile', level: 6 },
  { id: 'moyen', level: 13 },
  { id: 'difficile', level: 23 },
  { id: 'expert', level: 36, locked: true },
];
const WEB_FREE = TIERS.filter((tier) => !tier.locked).map((tier) => tier.id);
const tierById = (id) => TIERS.find((tier) => tier.id === id);
const sizeLabel = (level) => {
  const d = difficultyForLevel(level);
  return `${d.width}×${d.height}`;
};

const el = (id) => document.getElementById(id);
const refs = {
  menu: el('menu'), board: el('board'), victory: el('victory'),
  grid: el('grid'), timer: el('timer'), remaining: el('remaining'),
  title: el('board-title'), subtitle: el('board-subtitle'), loading: el('loading'),
  hint: el('hint'), hintCount: el('hint-count'), undo: el('undo'), clear: el('clear'),
  notes: el('notes'), restart: el('restart'), pause: el('pause'), quit: el('quit'),
  pauseOverlay: el('pause-overlay'), pad: el('pad'), status: el('status'),
};

let game = null;
let cells = [];
let token = 0;

const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
const bitOf = (v) => 1 << (v - 1);

// ------------------------------------------------------------- génération

let worker = null;
let workerBroken = false;
let requestId = 0;
const pending = new Map();

function generateSync(request) {
  return request.mode === 'daily' ? generateDaily(request.dayKey) : generateLevel(request.level);
}

/** Génère dans un worker ; à défaut (worker refusé), sur le fil principal. */
function generate(request) {
  if (!worker && !workerBroken) {
    try {
      worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
      worker.onmessage = ({ data }) => {
        pending.get(data.id)?.resolve(data.puzzle);
        pending.delete(data.id);
      };
      worker.onerror = () => {
        workerBroken = true;
        worker = null;
        for (const [, job] of pending) job.resolve(generateSync(job.request));
        pending.clear();
      };
    } catch {
      workerBroken = true;
    }
  }
  if (!worker) {
    // Laisser le message de chargement s'afficher avant de bloquer le fil.
    return new Promise((resolve) => setTimeout(() => resolve(generateSync(request)), 30));
  }
  const id = ++requestId;
  return new Promise((resolve) => {
    pending.set(id, { resolve, request });
    worker.postMessage({ id, ...request });
  });
}

// ----------------------------------------------------------------- textes

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
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

function renderMenu() {
  const prefs = store.prefs();
  const dayKey = localDayKey();
  const [y, m, d] = dayKey.split('-').map(Number);

  el('daily-date').textContent = new Date(y, m - 1, d).toLocaleDateString(lang, {
    weekday: 'long', day: 'numeric', month: 'long',
  });
  const result = store.dailyResult(dayKey);
  const saved = store.loadGame('daily', dayKey);
  el('daily-status').textContent = result
    ? t('menu.daily_done', { time: formatTime(result.time) })
    : saved ? t('menu.daily_resume') : t('menu.daily_todo');
  el('daily-status').classList.toggle('done', Boolean(result));
  el('daily-play').textContent = saved ? t('menu.resume') : t('menu.play');

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
    TIERS.map((tier) => ({
      id: tier.id,
      label: t(`tier.${tier.id}`),
      sub: tier.locked ? `🔒 ${t('menu.locked')}` : sizeLabel(tier.level),
      locked: tier.locked,
      href: tier.locked ? '../../apps/zellige.html' : null,
    })),
    freeId,
    pickFree,
  );
  pickFree(freeId);

  el('opt-help').checked = prefs.help;
  renderRecords();
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
    row.innerHTML =
      `<span>${t(`tier.${id}`)} · ${sizeLabel(tierById(id).level)}</span>` +
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

async function startGame(mode, tier) {
  const dayKey = localDayKey();
  const slot = mode === 'daily' ? 'daily' : `free.${tier}`;
  const context = mode === 'daily' ? dayKey : tier;
  const saved = store.loadGame(slot, context);
  const mine = ++token;

  refs.title.textContent = mode === 'daily' ? t('game.daily_title') : t(`tier.${tier}`);
  refs.subtitle.textContent = mode === 'daily'
    ? `12×12 · ${t('tier.expert')}`
    : `${t('game.free_title')} · ${sizeLabel(tierById(tier).level)}`;

  game = null;
  refs.grid.innerHTML = '';
  refs.loading.hidden = false;
  refs.board.classList.add('is-loading');
  show('board');

  const puzzle = saved
    ? saved.puzzle
    : await generate(mode === 'daily' ? { mode, dayKey } : { mode, level: tierById(tier).level });
  if (mine !== token) return; // le joueur est reparti entre-temps

  refs.loading.hidden = true;
  refs.board.classList.remove('is-loading');
  game = {
    mode, tier, dayKey, slot, context, puzzle,
    regions: new RegionMap(puzzle.width, puzzle.height, puzzle.regionOf),
    board: saved ? saved.board : puzzle.givens.slice(),
    notes: saved ? saved.notes : new Array(puzzle.givens.length).fill(0),
    elapsed: saved ? saved.elapsed : 0,
    hintsUsed: saved ? saved.hintsUsed : 0,
    history: [],
    selected: -1,
    noteMode: false,
    paused: false,
    finished: false,
    flash: -1,
  };

  buildGrid();
  persist();
  render();
}

function persist() {
  if (!game || game.finished) return;
  store.saveGame(game.slot, {
    context: game.context, puzzle: game.puzzle, board: game.board, notes: game.notes,
    elapsed: game.elapsed, hintsUsed: game.hintsUsed,
  });
}

/**
 * Le joint porte le découpage : chaque case reçoit, de chaque côté, un joint
 * fin vers une case du même bloc et un joint épais vers un autre bloc ou le
 * bord (TectonicMetrics.groutThin / groutThick).
 */
function buildGrid() {
  const { width: w, height: h, regionOf } = game.puzzle;
  // Sur le conteneur de partie : le panneau en a besoin pour se dimensionner.
  refs.board.style.setProperty('--w', w);
  refs.board.style.setProperty('--h', h);
  refs.grid.setAttribute('aria-rowcount', h);
  refs.grid.setAttribute('aria-colcount', w);
  cells = tileCells(refs.grid, w, h, regionOf);
  cells.forEach((cell, i) => {
    cell.dataset.index = i;
    cell.style.setProperty('--d', (Math.floor(i / w) + (i % w)) * 30);
    cell.setAttribute('role', 'gridcell');
  });
}

/** Pose les carreaux d'un découpage dans `container` ; renvoie les cases. */
function tileCells(container, w, h, regionOf) {
  container.innerHTML = '';
  const list = [];
  for (let i = 0; i < w * h; i++) {
    const r = Math.floor(i / w);
    const c = i % w;
    const id = regionOf[i];
    const sides = [];
    if (r === 0 || regionOf[i - w] !== id) sides.push('bt');
    if (c === w - 1 || regionOf[i + 1] !== id) sides.push('br');
    if (r === h - 1 || regionOf[i + w] !== id) sides.push('bb');
    if (c === 0 || regionOf[i - 1] !== id) sides.push('bl');
    const cell = document.createElement('div');
    cell.dataset.sides = sides.join(' ');
    cell.dataset.tint = id % 5;
    cell.className = `cell ${cell.dataset.sides}`;
    container.appendChild(cell);
    list.push(cell);
  }
  return list;
}

/** L'accueil de l'app est lui-même une grille : ici, une 5×5 résolue, toujours la même. */
function renderEmblem() {
  const box = el('emblem');
  const p = generateLevel(1, 31);
  box.style.setProperty('--w', p.width);
  box.style.setProperty('--h', p.height);
  tileCells(box, p.width, p.height, p.regionOf).forEach((cell, i) => {
    cell.textContent = p.solution[i];
    if (p.givens[i] === EMPTY) cell.classList.add('ghost');
  });
}

function notesHtml(mask, size) {
  let html = '<span class="notes">';
  for (let v = 1; v <= 5; v++) {
    html += `<i${mask & bitOf(v) && v <= size ? '' : ' class="off"'}>${v}</i>`;
  }
  return `${html}</span>`;
}

function render() {
  if (!game) return;
  const { puzzle, board, notes, regions, selected } = game;
  const conflicts = store.prefs().help ? computeConflicts(board, regions) : new Set();
  const focusRegion = selected >= 0 ? regions.regionOf[selected] : -1;
  const sameValue = selected >= 0 ? board[selected] : EMPTY;

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const v = board[i];
    let cls = `cell ${cell.dataset.sides}`;
    if (puzzle.givens[i] !== EMPTY) cls += ' given';
    if (regions.regionOf[i] === focusRegion) cls += ' focus';
    if (i === selected) cls += ' sel';
    else if (sameValue !== EMPTY && v === sameValue) cls += ' same';
    if (conflicts.has(i)) cls += ' bad';
    if (i === game.flash) cls += ' hinted';
    if (cell.className !== cls) cell.className = cls;

    const key = v !== EMPTY ? `v${v}` : notes[i] ? `n${notes[i]}` : '';
    if (cell.dataset.key !== key) {
      cell.dataset.key = key;
      if (v !== EMPTY) cell.textContent = String(v);
      else if (notes[i]) cell.innerHTML = notesHtml(notes[i], regions.sizeAt(i));
      else cell.textContent = '';
    }
    cell.setAttribute('aria-selected', i === selected ? 'true' : 'false');
  }

  const remaining = board.reduce((n, v) => n + (v === EMPTY ? 1 : 0), 0);
  refs.remaining.textContent = remaining;
  refs.timer.textContent = formatTime(game.elapsed);

  const hintsLeft = Math.max(0, HINTS_PER_GAME - game.hintsUsed);
  refs.hintCount.textContent = hintsLeft;
  refs.hint.disabled = hintsLeft <= 0 || game.finished;
  refs.hint.title = t('game.hints_left', { n: hintsLeft });
  refs.undo.disabled = game.history.length === 0;

  // Le pavé grise les chiffres hors du bloc : c'est une information de jeu.
  const editable = selected >= 0 && puzzle.givens[selected] === EMPTY;
  const size = selected >= 0 ? regions.sizeAt(selected) : 5;
  refs.pad.querySelectorAll('button').forEach((key) => {
    const v = Number(key.dataset.value);
    key.disabled = !editable || v > size;
    const noted = game.noteMode && editable && board[selected] === EMPTY && (notes[selected] & bitOf(v)) !== 0;
    key.classList.toggle('noted', noted);
  });
  refs.pad.classList.toggle('note-mode', game.noteMode);
  refs.clear.disabled = !editable || (board[selected] === EMPTY && notes[selected] === 0);
  refs.notes.setAttribute('aria-pressed', game.noteMode ? 'true' : 'false');

  const pauseLabel = game.paused ? t('game.resume') : t('game.pause');
  refs.pause.querySelector('.sr').textContent = pauseLabel;
  refs.pause.title = pauseLabel;
  refs.pause.classList.toggle('is-paused', game.paused);
  refs.board.classList.toggle('paused', game.paused);
  refs.pauseOverlay.hidden = !game.paused;
}

const playing = () => game && !game.finished && !game.paused;

function select(index) {
  if (!playing()) return;
  game.selected = game.selected === index ? -1 : index;
  render();
}

function push(index) {
  if (game.history.length >= UNDO_LIMIT) game.history.shift();
  game.history.push({ index, value: game.board[index], notes: game.notes[index] });
}

function enter(value) {
  if (!playing()) return;
  const index = game.selected;
  if (index < 0) { flashStatus(t('game.select_first')); return; }
  if (game.puzzle.givens[index] !== EMPTY) return;
  if (value > game.regions.sizeAt(index)) return;

  if (game.noteMode) {
    if (game.board[index] !== EMPTY) return;
    push(index);
    game.notes[index] ^= bitOf(value);
    persist();
    render();
    return;
  }

  push(index);
  game.board[index] = game.board[index] === value ? EMPTY : value;
  if (game.board[index] !== EMPTY) game.notes[index] = 0;
  commit();
}

function clear() {
  if (!playing()) return;
  const index = game.selected;
  if (index < 0 || game.puzzle.givens[index] !== EMPTY) return;
  if (game.board[index] === EMPTY && game.notes[index] === 0) return;
  push(index);
  game.board[index] = EMPTY;
  game.notes[index] = 0;
  commit();
}

/** Case à révéler : la sélection si elle est vide ou fausse, sinon la plus proche. */
function hintTarget() {
  const { board, puzzle, selected } = game;
  const perfectible = (i) => board[i] !== puzzle.solution[i];
  if (selected >= 0 && perfectible(selected)) return selected;
  const w = puzzle.width;
  const anchorRow = selected >= 0 ? Math.floor(selected / w) : 0;
  const anchorCol = selected >= 0 ? selected % w : 0;
  let best = -1;
  let bestDistance = Infinity;
  for (let i = 0; i < board.length; i++) {
    if (!perfectible(i)) continue;
    const distance = Math.max(Math.abs(Math.floor(i / w) - anchorRow), Math.abs((i % w) - anchorCol));
    if (distance < bestDistance) {
      bestDistance = distance;
      best = i;
    }
  }
  return best;
}

function useHint() {
  if (!playing() || game.hintsUsed >= HINTS_PER_GAME) return;
  const target = hintTarget();
  if (target < 0) return;
  push(target);
  game.board[target] = game.puzzle.solution[target];
  game.notes[target] = 0;
  game.hintsUsed++;
  game.selected = target;
  game.flash = target;
  setTimeout(() => { if (game && game.flash === target) { game.flash = -1; render(); } }, 1400);
  commit();
}

/** Un indice annulé n'est pas rendu : sinon révéler, lire, annuler donnerait des indices à volonté. */
function undo() {
  if (!playing()) return;
  const move = game.history.pop();
  if (!move) return;
  game.board[move.index] = move.value;
  game.notes[move.index] = move.notes;
  game.selected = move.index;
  commit();
}

function commit() {
  const remaining = game.board.includes(EMPTY);
  if (!remaining && computeConflicts(game.board, game.regions).size === 0) {
    finish();
    return;
  }
  persist();
  render();
}

/** Recommencer : cases et notes vidées ; les indices restent comptés, le chrono du jour continue. */
function restart() {
  if (!game || game.finished) return;
  game.board = game.puzzle.givens.slice();
  game.notes = game.notes.map(() => 0);
  game.history = [];
  game.selected = -1;
  if (game.mode !== 'daily') game.elapsed = 0;
  game.paused = false;
  persist();
  render();
}

function togglePause() {
  if (!game || game.finished) return;
  game.paused = !game.paused;
  persist();
  render();
}

function toggleNotes() {
  if (!game || game.finished) return;
  game.noteMode = !game.noteMode;
  render();
}

function backToMenu() {
  persist();
  token++;
  game = null;
  renderMenu();
  show('menu');
}

let statusTimer = 0;
function flashStatus(text) {
  refs.status.textContent = text;
  refs.status.hidden = false;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => { refs.status.hidden = true; }, 1600);
}

// --------------------------------------------------------------- victoire

function finish() {
  game.finished = true;
  game.selected = -1;
  store.clearGame(game.slot);
  render();
  refs.grid.classList.add('solved');

  const isDaily = game.mode === 'daily';
  let streak = 0;
  let isBest = false;
  if (isDaily) streak = store.completeDaily(game.dayKey, game.elapsed, game.hintsUsed);
  else isBest = store.completeFree(game.tier, game.elapsed);

  el('victory-time').textContent = formatTime(game.elapsed);
  el('victory-hints').textContent = game.hintsUsed;
  el('victory-streak').textContent = streak;
  el('victory-streak-row').hidden = !isDaily;
  const best = store.records()[game.tier];
  el('victory-best').textContent = best ? formatTime(best.time) : '—';
  el('victory-best-row').hidden = isDaily;
  el('victory-badge').hidden = !isBest;
  el('share').hidden = !isDaily;
  el('victory-next').hidden = isDaily;

  // Un temps pour voir le carrelage s'illuminer avant l'écran de fin.
  setTimeout(() => {
    refs.grid.classList.remove('solved');
    show('victory');
  }, 1000);
}

async function share() {
  const [y, m, d] = game.dayKey.split('-').map(Number);
  const date = new Date(y, m - 1, d).toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' });
  const streak = store.activeStreak(game.dayKey);
  const lines = [
    t('share.title', { date }),
    t('share.line', { time: formatTime(game.elapsed), hints: game.hintsUsed }),
  ];
  if (streak > 1) lines.push(t('share.streak', { n: streak }));
  lines.push(`https://appcraft31.app/play/zellige/${lang === 'fr' ? '' : `?lang=${lang}`}`);
  const text = lines.join('\n');

  if (navigator.share) {
    try { await navigator.share({ title: 'Zellige', text }); return; } catch { /* annulé : on copie */ }
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
  const cell = e.target.closest('[data-index]');
  if (!cell || !game) return;
  select(Number(cell.dataset.index));
});

refs.pad.addEventListener('click', (e) => {
  const key = e.target.closest('button');
  if (key) enter(Number(key.dataset.value));
});

document.addEventListener('keydown', (e) => {
  if (!game || game.finished || refs.board.hidden) return;
  if (e.target.closest?.('input, textarea')) return;
  const { width: w, height: h } = game.puzzle;
  const moves = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };
  if (moves[e.key]) {
    if (!playing()) return;
    e.preventDefault();
    const [dr, dc] = moves[e.key];
    const from = game.selected < 0 ? 0 : game.selected;
    const r = Math.min(h - 1, Math.max(0, Math.floor(from / w) + (game.selected < 0 ? 0 : dr)));
    const c = Math.min(w - 1, Math.max(0, (from % w) + (game.selected < 0 ? 0 : dc)));
    game.selected = r * w + c;
    render();
  } else if (/^[1-5]$/.test(e.key) && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    enter(Number(e.key));
  } else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') {
    e.preventDefault();
    clear();
  } else if ((e.key === 'n' || e.key === 'N') && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    toggleNotes();
  } else if ((e.key === 'z' || e.key === 'Z') && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    undo();
  } else if (e.key === 'Escape' && game.selected >= 0) {
    game.selected = -1;
    render();
  }
});

refs.hint.addEventListener('click', useHint);
refs.undo.addEventListener('click', undo);
refs.clear.addEventListener('click', clear);
refs.notes.addEventListener('click', toggleNotes);
refs.restart.addEventListener('click', restart);
refs.pause.addEventListener('click', togglePause);
refs.pauseOverlay.addEventListener('click', togglePause);
refs.quit.addEventListener('click', backToMenu);

el('daily-play').addEventListener('click', () => startGame('daily'));
el('free-play').addEventListener('click', () => {
  const id = store.prefs().free;
  startGame('free', WEB_FREE.includes(id) ? id : 'facile');
});
el('opt-help').addEventListener('change', (e) => store.savePrefs({ help: e.target.checked }));
el('victory-next').addEventListener('click', () => startGame('free', game.tier));
el('victory-menu').addEventListener('click', backToMenu);
el('share').addEventListener('click', share);

// Le chrono ne tourne que partie visible, active et non en pause.
setInterval(() => {
  if (!playing() || document.hidden || refs.board.hidden) return;
  game.elapsed++;
  refs.timer.textContent = formatTime(game.elapsed);
  if (game.elapsed % 5 === 0) persist();
}, 1000);

document.addEventListener('visibilitychange', () => { if (document.hidden) persist(); });
window.addEventListener('pagehide', persist);

applyI18n();
renderEmblem();
renderMenu();
show('menu');
