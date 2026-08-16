/**
 * Générateur pseudo-aléatoire déterministe (mulberry32).
 *
 * Le défi du jour doit produire la même grille pour tous les joueurs web à une
 * date donnée. `kotlin.random.Random(seed)` (XorWoW) n'étant pas reproductible
 * en JS sans le réimplémenter, la grille du jour côté web diffère de celle des
 * apps iOS/Android — voir le commentaire de daily.js.
 */

/** Retourne une fonction () => nombre dans [0, 1[ à partir d'une graine entière. */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Source aléatoire du jeu. `seed` null → non déterministe (partie libre).
 * L'API imite `kotlin.random.Random` pour que le portage reste lisible.
 */
export function createRandom(seed) {
  const next = seed == null ? Math.random : mulberry32(seed);
  return {
    /** Entier dans [0, bound[. */
    nextInt(bound) {
      return Math.floor(next() * bound);
    },
    /** Élément au hasard, ou null si vide. */
    pick(array) {
      return array.length === 0 ? null : array[Math.floor(next() * array.length)];
    },
    /** Copie mélangée (Fisher-Yates). */
    shuffled(array) {
      const out = array.slice();
      for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(next() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
      }
      return out;
    },
  };
}
