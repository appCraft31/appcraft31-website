/**
 * Tout ce que le jeu retient, dans le navigateur seulement (localStorage) :
 * préférences, partie en cours par emplacement, résultats de la grille du jour
 * et série, meilleurs temps du mode libre. Rien ne part vers un serveur.
 *
 * La série suit `DailyStore` de l'app : terminer une grille du jour (quelle que
 * soit sa difficulté) la prolonge si la veille avait été jouée, la remet à 1
 * sinon ; elle s'éteint si ni aujourd'hui ni hier n'ont été joués.
 */

const PREFIX = 'binero.web.';

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Stockage plein ou bloqué (navigation privée) : on joue sans mémoire.
  }
}

function remove(key) {
  try { localStorage.removeItem(PREFIX + key); } catch { /* idem */ }
}

const DEFAULT_PREFS = { daily: 'easy', free: 'facile', help: true, look: 'digits' };

export function prefs() {
  return { ...DEFAULT_PREFS, ...read('prefs', {}) };
}

export function savePrefs(patch) {
  write('prefs', { ...prefs(), ...patch });
}

// ------------------------------------------------------------ parties

/** Une sauvegarde par emplacement ; `context` empêche de reprendre la grille d'un autre jour. */
export function loadGame(slot, context) {
  const saved = read(`save.${slot}`, null);
  if (!saved || saved.context !== context) return null;
  return saved;
}

export function saveGame(slot, game) {
  write(`save.${slot}`, game);
}

export function clearGame(slot) {
  remove(`save.${slot}`);
}

// ------------------------------------------------------- grille du jour

function previousDay(dayKey) {
  const date = new Date(`${dayKey}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() - 1);
  return date.toISOString().slice(0, 10);
}

function daily() {
  return read('daily', { results: {}, lastDay: '', streak: 0 });
}

export function dailyResult(dayKey, difficulty) {
  return daily().results[`${dayKey}.${difficulty}`] ?? null;
}

export function activeStreak(today) {
  const value = daily();
  return [today, previousDay(today)].includes(value.lastDay) ? value.streak : 0;
}

/** Enregistre une grille du jour terminée et renvoie la série à jour. */
export function completeDaily(dayKey, difficulty, time, hints) {
  const value = daily();
  const key = `${dayKey}.${difficulty}`;
  const previous = value.results[key];
  if (!previous || time < previous.time) value.results[key] = { time, hints };
  if (value.lastDay !== dayKey) {
    value.streak = value.lastDay === previousDay(dayKey) ? value.streak + 1 : 1;
    value.lastDay = dayKey;
  }
  // On ne garde que les deux derniers mois de résultats.
  const keys = Object.keys(value.results).sort();
  for (const old of keys.slice(0, Math.max(0, keys.length - 180))) delete value.results[old];
  write('daily', value);
  return value.streak;
}

// ----------------------------------------------------------- mode libre

export function records() {
  return read('records', {});
}

/** Enregistre un temps du mode libre ; vrai s'il bat le record. */
export function completeFree(difficulty, time) {
  const value = records();
  const best = value[difficulty];
  const isBest = !best || time < best.time;
  value[difficulty] = { time: isBest ? time : best.time, solved: (best?.solved ?? 0) + 1 };
  write('records', value);
  return isBest;
}
