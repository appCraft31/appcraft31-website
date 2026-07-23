/**
 * Câblage de la page : menu ↔ partie ↔ victoire.
 * Équivalent web de MelizApp.kt (navigation) et GameScreen.kt (assemblage).
 */

import { THEMES, DIFFICULTIES, themeFromId, difficultyFromId } from './generator.js';
import { Game, formatTime } from './game.js';
import { currentDates, themeForSeed, isCompletedToday, DAILY_DIFFICULTY } from './daily.js';
import * as store from './store.js';
import { detectLanguage, createTranslator } from './strings.js';
import { buildGrid, attachGestures, renderGrid, renderWords, renderHud, renderSelectionLine } from './ui.js';

const lang = detectLanguage();
const t = createTranslator(lang);
document.documentElement.lang = lang;

const el = (id) => document.getElementById(id);

const refs = {
  menu: el('menu'),
  board: el('board'),
  victory: el('victory'),
  grid: el('grid'),
  selectionLine: el('selection-line'),
  words: el('words'),
  timer: el('timer'),
  progress: el('progress'),
  hintButton: el('hint'),
  hintCount: el('hint-count'),
  pauseButton: el('pause'),
  quitButton: el('quit'),
  boardTitle: el('board-title'),
  pauseOverlay: el('pause-overlay'),
};

let game = null;
let cells = [];
let dates = currentDates();

// ---------------------------------------------------------------- traduction

/** Traduit les nœuds porteurs d'un data-i18n (libellés statiques de la page). */
function translateStatic() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

// --------------------------------------------------------------------- menu

function buildMenu() {
  const prefs = store.prefs();

  const themeSelect = el('theme-select');
  themeSelect.innerHTML = '';
  THEMES.forEach((theme) => {
    const option = document.createElement('option');
    option.value = theme.id;
    option.textContent = t(`theme.${theme.id}`);
    themeSelect.appendChild(option);
  });
  themeSelect.value = prefs.theme;

  const diffList = el('difficulty-list');
  diffList.innerHTML = '';
  Object.values(DIFFICULTIES).forEach((difficulty) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'diff' + (difficulty.id === prefs.difficulty ? ' active' : '');
    button.dataset.difficulty = difficulty.id;
    button.innerHTML =
      `<strong>${t(`diff.${difficulty.id}`)}</strong>` +
      `<span>${t(`diff.${difficulty.id}_sub`)}</span>`;
    button.addEventListener('click', () => {
      store.savePrefs({ difficulty: difficulty.id });
      diffList.querySelectorAll('.diff').forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
    });
    diffList.appendChild(button);
  });

  themeSelect.addEventListener('change', () => store.savePrefs({ theme: themeSelect.value }));

  renderDailyCard();
  renderScores();
}

function renderDailyCard() {
  const { streak, lastCompletedKey } = store.dailyState();
  const done = isCompletedToday(lastCompletedKey, dates.todayKey);
  const theme = themeForSeed(dates.seed);

  el('daily-theme').textContent = t(`theme.${theme.id}`);
  el('daily-status').textContent = done ? t('menu.daily_done') : t('menu.daily_sub');
  el('daily-play').textContent = done ? t('menu.daily_replay') : t('menu.play');
  const streakNode = el('daily-streak');
  streakNode.textContent = t('menu.streak', { n: streak });
  streakNode.hidden = streak === 0;
}

function renderScores() {
  const list = el('scores');
  const entries = store.scores();
  list.innerHTML = '';
  if (entries.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = t('menu.no_scores');
    list.appendChild(empty);
    return;
  }
  entries.slice(0, 5).forEach((entry) => {
    const row = document.createElement('div');
    row.className = 'score-row';
    row.innerHTML =
      `<span>${t(`theme.${entry.theme}`)} · ${t(`diff.${entry.difficulty}`)}</span>` +
      `<span>${formatTime(entry.elapsedSeconds)}</span>` +
      `<strong>${entry.points}</strong>`;
    list.appendChild(row);
  });
}

// ------------------------------------------------------------------- partie

function show(screen) {
  refs.menu.hidden = screen !== 'menu';
  refs.board.hidden = screen !== 'board';
  refs.victory.hidden = screen !== 'victory';
}

async function startGame({ theme, difficulty, isDaily, seed }) {
  if (game) game.destroy();

  game = new Game({
    theme,
    difficulty,
    languageCode: lang,
    isDaily,
    seed,
    onChange: render,
  });

  refs.boardTitle.textContent = isDaily
    ? `${t('menu.daily')} · ${t(`theme.${theme.id}`)}`
    : `${t(`theme.${theme.id}`)} · ${t(`diff.${difficulty.id}`)}`;
  cells = [];
  refs.grid.innerHTML = `<p class="muted loading">${t('game.loading')}</p>`;
  refs.words.innerHTML = '';
  refs.pauseOverlay.hidden = true;
  show('board');

  await game.start();
  cells = buildGrid(refs.grid, game);
  render();
}

function render() {
  if (!game) return;
  if (cells.length) renderGrid(cells, game);
  renderSelectionLine(refs.selectionLine, game);
  renderWords(refs.words, game);
  renderHud(refs, game, t);
  refs.pauseOverlay.hidden = !game.isPaused;
  if (game.isFinished && refs.victory.hidden) showVictory();
}

function handleSelectionEnd(result) {
  if (result === 'invalid') {
    refs.grid.classList.add('shake');
    setTimeout(() => refs.grid.classList.remove('shake'), 300);
  }
}

// ------------------------------------------------------------------ victoire

function showVictory() {
  el('victory-time').textContent = formatTime(game.elapsedSeconds);
  el('victory-score').textContent = game.points;

  const streakRow = el('victory-streak-row');
  if (game.isDaily) {
    const streak = store.recordDailyCompletion(dates.todayKey, dates.yesterdayKey);
    el('victory-streak').textContent = streak;
    streakRow.hidden = false;
  } else {
    store.addScore({
      theme: game.theme.id,
      difficulty: game.difficulty.id,
      elapsedSeconds: game.elapsedSeconds,
      points: game.points,
      date: new Date().toISOString(),
    });
    streakRow.hidden = true;
  }

  el('share').hidden = !game.isDaily;
  show('victory');
}

function shareText() {
  return t('share.text', {
    date: dates.todayKey,
    time: formatTime(game.elapsedSeconds),
    words: game.words.length,
    points: game.points,
  });
}

async function share() {
  const text = `${shareText()}\n${location.href}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: 'Mêliz', text });
      return;
    } catch (e) {
      // Partage annulé : on retombe sur la copie.
    }
  }
  try {
    await navigator.clipboard.writeText(text);
    const button = el('share');
    const label = button.textContent;
    button.textContent = t('victory.copied');
    setTimeout(() => { button.textContent = label; }, 2000);
  } catch (e) {
    window.prompt(t('victory.share'), text);
  }
}

// ------------------------------------------------------------------ écoutes

el('daily-play').addEventListener('click', () => {
  dates = currentDates();
  startGame({
    theme: themeForSeed(dates.seed),
    difficulty: DAILY_DIFFICULTY,
    isDaily: true,
    seed: dates.seed,
  });
});

el('free-play').addEventListener('click', () => {
  const prefs = store.prefs();
  startGame({
    theme: themeFromId(prefs.theme),
    difficulty: difficultyFromId(prefs.difficulty),
    isDaily: false,
    seed: null,
  });
});

refs.hintButton.addEventListener('click', () => game && game.revealHint());
refs.pauseButton.addEventListener('click', () => game && game.togglePause());
refs.pauseOverlay.addEventListener('click', () => game && game.togglePause());

function backToMenu() {
  if (game) game.destroy();
  game = null;
  cells = [];
  refs.pauseOverlay.hidden = true;
  refs.board.classList.remove('paused');
  renderDailyCard();
  renderScores();
  show('menu');
}

refs.quitButton.addEventListener('click', backToMenu);
el('victory-menu').addEventListener('click', backToMenu);
el('share').addEventListener('click', share);

el('victory-replay').addEventListener('click', () => {
  const { theme, difficulty, isDaily, seed } = game;
  startGame({ theme, difficulty, isDaily, seed });
});

// Gestes branchés une seule fois : `() => game` fournit la partie courante.
attachGestures(refs.grid, () => game, { onSelectionEnd: handleSelectionEnd });

translateStatic();
buildMenu();
show('menu');
