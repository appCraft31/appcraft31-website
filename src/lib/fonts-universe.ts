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
  Bangers,
  Bungee,
  Chakra_Petch,
  Fredoka,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Condensed,
  Instrument_Serif,
  JetBrains_Mono,
  Jua,
  Lilita_One,
  M_PLUS_Rounded_1c,
  Michroma,
  Newsreader,
  Nunito,
  Outfit,
  Playfair_Display,
  Press_Start_2P,
  Rajdhani,
  Rubik,
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
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-outfit',
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

// Michroma n'existe qu'en un seul poids : la demander en 700 ferait fabriquer
// un faux gras par le navigateur. Les univers qui l'emploient le savent.
const michroma = Michroma({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-michroma',
});
const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['500', '600'],
  variable: '--font-plexcond',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['500', '600'],
  variable: '--font-plexmono',
});

// Les trois polices d'Elastic Hero (`pubspec.yaml`) : Bungee pour les titres,
// qui n'existe qu'en un poids, Rubik pour les textes des menus, Fredoka pour
// les chiffres du HUD.
const bungee = Bungee({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-bungee',
});
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-rubik',
});
const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-fredoka',
});

// Les deux polices de Capsule Collector (`pubspec.yaml`, `lib/core/theme.dart`) :
// M PLUS Rounded 1c en 700 et 800 pour tout le texte, Jua en repli pour le
// coréen, absent de M PLUS Rounded. Ni l'une ni l'autre n'est variable : les
// graisses sont nommées. Les glyphes japonais et coréens arrivent par tranches
// `unicode-range`, téléchargées seulement si la page les affiche.
const mplusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['700', '800'],
  variable: '--font-mplusrounded',
});
const jua = Jua({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-jua',
});

// Perfect Demolition : Lilita One pour les titres et les boutons (`TITLE_FONT`
// de scripts/ui.gd), Nunito pour le texte courant, déjà déclarée plus haut.
// Lilita One n'existe qu'en une graisse.
const lilitaOne = Lilita_One({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-lilita',
});

// Vroomics : Bangers, la police de bande dessinée de tout le jeu
// (`assets/fonts/Bangers-Regular.ttf`, chargée par scripts/game.gd et
// scripts/main.gd). Une seule graisse, latin seulement : les titres japonais
// et coréens retombent sur la police système.
const bangers = Bangers({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-bangers',
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
  '--font-outfit': outfit.variable,
  '--font-press': pressStart.variable,
  '--font-playfair': playfair.variable,
  '--font-jetbrains': jetbrainsMono.variable,
  '--font-michroma': michroma.variable,
  '--font-plexcond': plexCondensed.variable,
  '--font-plexmono': plexMono.variable,
  '--font-bungee': bungee.variable,
  '--font-rubik': rubik.variable,
  '--font-fredoka': fredoka.variable,
  '--font-mplusrounded': mplusRounded.variable,
  '--font-jua': jua.variable,
  '--font-lilita': lilitaOne.variable,
  '--font-bangers': bangers.variable,
};

/**
 * Classes à poser sur la page d'un produit, déduites des `var(--font-…)`
 * citées par son thème. Une police non citée n'est pas chargée.
 */
export function fontClassesFor(fonts: {
  display: string;
  body: string;
  numeric?: string;
}): string {
  const cited = new Set<string>();
  for (const stack of [fonts.display, fonts.body, fonts.numeric ?? '']) {
    for (const [, name] of stack.matchAll(/var\((--font-[a-z]+)\)/g)) {
      const className = BY_VAR[name];
      if (className) cited.add(className);
    }
  }
  return [...cited].join(' ');
}
