/**
 * Tout ce que le jeu retient, dans le navigateur seulement (localStorage) :
 * préférences, partie en cours par emplacement, grille du jour et série,
 * meilleurs temps du mode libre. Rien ne part vers un serveur.
 *
 * La série suit `ProgressNotifier.completeDaily` de l'app : elle se prolonge
 * si la veille a été jouée, repart à 1 sinon ; rejouer la grille du jour ne
 * garde que le meilleur temps.
 */

const PREFIX = 'zellige.web.';

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

const DEFAULT_PREFS = { free: 'facile', help: true };

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
  const [y, m, d] = dayKey.split('-').map(Number);
  const date = new Date(y, m - 1, d - 1);
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function daily() {
  return read('daily', { results: {}, lastDay: '', streak: 0 });
}

export function dailyResult(dayKey) {
  return daily().results[dayKey] ?? null;
}

export function activeStreak(today) {
  const value = daily();
  return [today, previousDay(today)].includes(value.lastDay) ? value.streak : 0;
}

/** Enregistre la grille du jour terminée et renvoie la série à jour. */
export function completeDaily(dayKey, time, hints) {
  const value = daily();
  const previous = value.results[dayKey];
  if (!previous || time < previous.time) value.results[dayKey] = { time, hints };
  if (value.lastDay !== dayKey) {
    value.streak = value.lastDay === previousDay(dayKey) ? value.streak + 1 : 1;
    value.lastDay = dayKey;
  }
  const keys = Object.keys(value.results).sort();
  for (const old of keys.slice(0, Math.max(0, keys.length - 90))) delete value.results[old];
  write('daily', value);
  return value.streak;
}

// ----------------------------------------------------------- mode libre

export function records() {
  return read('records', {});
}

/** Enregistre un temps du mode libre ; vrai s'il bat le record. */
export function completeFree(tier, time) {
  const value = records();
  const best = value[tier];
  const isBest = !best || time < best.time;
  value[tier] = { time: isBest ? time : best.time, solved: (best?.solved ?? 0) + 1 };
  write('records', value);
  return isBest;
}
