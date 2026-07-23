/**
 * Chargement des banques de mots. Port de `AssetWordBankRepository.kt` :
 * data/{lang}/{theme}.json (tableaux de chaînes), cache mémoire, repli sur
 * l'anglais quand la langue demandée est absente.
 *
 * Ces fichiers sont une copie de android/app/src/main/assets/wordbanks/ ;
 * ils ne sont pas synchronisés automatiquement avec les apps natives.
 */

import { normalize } from './generator.js';

const cache = new Map();

async function readJson(themeId, languageCode) {
  try {
    const res = await fetch(`data/${languageCode}/${themeId}.json`);
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? data : null;
  } catch (e) {
    return null;
  }
}

async function loadWords(themeId, languageCode) {
  const key = `${languageCode}/${themeId}`;
  if (cache.has(key)) return cache.get(key);
  const words = (await readJson(themeId, languageCode)) || (await readJson(themeId, 'en')) || [];
  cache.set(key, words);
  return words;
}

/**
 * `count` mots normalisés d'au moins 3 lettres, tirés avec `random`.
 *
 * `maxLength` (la taille de la grille) écarte d'emblée les mots trop longs.
 * Le mobile ne filtre qu'au moment du placement : en 8×8, où beaucoup de mots
 * dépassent 8 lettres, cela produisait des grilles très incomplètes (mesuré :
 * 4,7 mots placés en moyenne sur 6 demandés, et jusqu'à 0). Le filtre ne change
 * aucune règle du jeu, il garantit seulement que les `count` mots tirés
 * peuvent tous tenir dans la grille.
 */
export async function pickWords(themeId, languageCode, count, random, maxLength) {
  const raw = await loadWords(themeId, languageCode);
  const eligible = raw
    .map(normalize)
    .filter((w) => w.length >= 3 && (maxLength == null || w.length <= maxLength));
  return random.shuffled(eligible).slice(0, count);
}
