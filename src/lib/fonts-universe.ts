/**
 * Polices des univers produits.
 *
 * Séparé de `fonts.ts` pour que l'accueil n'embarque pas les familles de vingt
 * apps. Toutes sont déclarées `preload: false` : le navigateur ne télécharge
 * que celles qu'une page utilise réellement.
 *
 * `next/font` héberge les fichiers lui-même et invente un nom de famille
 * (`__Chakra_Petch_a1b2c3`) : on ne peut donc pas écrire `'Chakra Petch'` dans
 * une variable CSS et espérer que ça marche. Chaque police expose une variable,
 * et `themes.ts` la référence par `var(--font-…)`.
 */

import {
  Baloo_2,
  Chakra_Petch,
  Instrument_Serif,
  JetBrains_Mono,
  Newsreader,
  Nunito,
  Playfair_Display,
  Press_Start_2P,
  Rajdhani,
  Space_Grotesk,
} from 'next/font/google';

// `next/font` lit ces appels au moment de la compilation : ses arguments
// doivent être des littéraux, pas un objet partagé étalé.
const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-chakra',
});
const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
});
const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-newsreader',
});
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-space',
});
const baloo2 = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-baloo',
});
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-nunito',
});
const pressStart = Press_Start_2P({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-press',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-playfair',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-jetbrains',
});

/** Variable CSS → classe qui la définit. */
const BY_VAR: Record<string, string> = {
  '--font-chakra': chakraPetch.variable,
  '--font-rajdhani': rajdhani.variable,
  '--font-newsreader': newsreader.variable,
  '--font-instrument': instrumentSerif.variable,
  '--font-space': spaceGrotesk.variable,
  '--font-baloo': baloo2.variable,
  '--font-nunito': nunito.variable,
  '--font-press': pressStart.variable,
  '--font-playfair': playfair.variable,
  '--font-jetbrains': jetbrainsMono.variable,
};

/**
 * Classes à poser sur la page d'un produit, déduites des `var(--font-…)`
 * citées par son thème. Une police non citée n'est pas chargée.
 */
export function fontClassesFor(fonts: { display: string; body: string }): string {
  const cited = new Set<string>();
  for (const stack of [fonts.display, fonts.body]) {
    for (const [, name] of stack.matchAll(/var\((--font-[a-z]+)\)/g)) {
      const className = BY_VAR[name];
      if (className) cited.add(className);
    }
  }
  return [...cited].join(' ');
}
