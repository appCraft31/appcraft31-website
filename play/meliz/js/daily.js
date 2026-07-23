/**
 * Défi du jour. Port de domain/daily/DailyDates.kt et DailyPuzzle.kt.
 *
 * La graine et la clé du jour sont calculées exactement comme sur mobile, mais
 * le tirage s'appuie sur mulberry32 (cf. rng.js) là où Kotlin utilise XorWoW :
 * la grille du jour est donc identique pour tous les joueurs *web*, et
 * différente de celle des apps iOS/Android. Les classements n'étant pas
 * partagés entre les plateformes, l'écart est sans conséquence.
 */

import { THEMES, DIFFICULTIES } from './generator.js';

/** Difficulté fixe du défi du jour. */
export const DAILY_DIFFICULTY = DIFFICULTIES.medium;

function keyAndSeed(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const pad = (n, w) => String(n).padStart(w, '0');
  return {
    key: `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`,
    seed: year * 10000 + month * 100 + day,
  };
}

/** Clés d'aujourd'hui / d'hier et graine du jour, en heure locale. */
export function currentDates(now = new Date()) {
  const today = keyAndSeed(now);
  const yesterdayDate = new Date(now.getTime());
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = keyAndSeed(yesterdayDate);
  return { todayKey: today.key, yesterdayKey: yesterday.key, seed: today.seed };
}

/** Thème du jour, en rotation sur les thèmes non bonus. */
export function themeForSeed(seed) {
  const themes = THEMES.filter((t) => !t.isBonus);
  const idx = ((seed % themes.length) + themes.length) % themes.length;
  return themes[idx];
}

export function isCompletedToday(lastCompletedKey, todayKey) {
  return lastCompletedKey === todayKey;
}

/**
 * Série après une victoire du jour : inchangée si déjà fait aujourd'hui, +1 si
 * la dernière remonte à hier, sinon remise à 1.
 */
export function nextStreak(lastCompletedKey, todayKey, yesterdayKey, currentStreak) {
  if (lastCompletedKey === todayKey) return currentStreak;
  if (lastCompletedKey === yesterdayKey) return currentStreak + 1;
  return 1;
}
