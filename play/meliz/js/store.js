/**
 * Persistance locale (localStorage) : meilleurs scores, série du défi du jour,
 * préférences. Équivalent web de DataStoreScoreStore.kt et DailyRepository.kt.
 * Tout reste sur l'appareil, rien n'est envoyé à un serveur.
 */

import { nextStreak } from './daily.js';

const SCORES_KEY = 'meliz.web.scores';
const DAILY_KEY = 'meliz.web.daily';
const PREFS_KEY = 'meliz.web.prefs';
const MAX_SCORES = 20;

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // Navigation privée ou quota plein : le jeu reste jouable sans persistance.
  }
}

// ------------------------------------------------------------------- scores

/** Meilleurs scores, du plus élevé au plus faible. */
export function scores() {
  const list = read(SCORES_KEY, []);
  return Array.isArray(list) ? list : [];
}

export function addScore(entry) {
  const list = scores();
  list.push(entry);
  list.sort((a, b) => b.points - a.points);
  const trimmed = list.slice(0, MAX_SCORES);
  write(SCORES_KEY, trimmed);
  return trimmed;
}

// -------------------------------------------------------------------- daily

export function dailyState() {
  const s = read(DAILY_KEY, {});
  return { streak: s.streak || 0, lastCompletedKey: s.lastCompletedKey || null };
}

/**
 * Idempotent : ne compte que la première victoire d'une journée donnée.
 * Retourne la série résultante.
 */
export function recordDailyCompletion(todayKey, yesterdayKey) {
  const { streak, lastCompletedKey } = dailyState();
  if (lastCompletedKey === todayKey) return streak;
  const next = nextStreak(lastCompletedKey, todayKey, yesterdayKey, streak);
  write(DAILY_KEY, { streak: next, lastCompletedKey: todayKey });
  return next;
}

// --------------------------------------------------------------------- prefs

export function prefs() {
  const p = read(PREFS_KEY, {});
  return { theme: p.theme || 'animals', difficulty: p.difficulty || 'medium' };
}

export function savePrefs(patch) {
  write(PREFS_KEY, { ...prefs(), ...patch });
}
