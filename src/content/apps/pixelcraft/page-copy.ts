import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/pixelcraft.html`.
 *
 * Tout ce qui est chiffré ici se lit dans le code du jeu
 * (`~/StudioProjects/pixel_art`) : 120 dessins dans `lib/data/artworks/`,
 * 8 thèmes et 4 difficultés dans `lib/data/artworks.dart`, 13 trophées dans
 * `lib/data/badges.dart`, 5 ambiances dans `lib/data/palettes.dart`. Le
 * `pubspec.yaml` ne liste ni achat intégré, ni outil de mesure d'audience.
 * La page ne promet en revanche rien sur la publicité : une régie est prévue,
 * et une promesse d'aujourd'hui deviendrait un mensonge à la mise à jour.
 */
const fr: AppCopy = {
  tagline: 'Coloriage pixel art par numéros',

  headline: {
    lead: 'Une case, une couleur,',
    highlight: 'et le dessin apparaît.',
  },

  intro:
    "Posez le pouce, une case se colore. Puis une autre. Au bout de quelques minutes, un dessin apparaît et la journée pèse un peu moins lourd. Pas de chrono, pas de pénalité, pas de bonne façon de faire : PixelCraft est un jeu de coloriage qui ne vous met jamais sous pression, et qui n'a jamais besoin de réseau.",

  stats: [
    { value: '120', label: 'dessins' },
    { value: '8', label: 'thèmes' },
    { value: '13', label: 'trophées' },
    { value: '100 %', label: 'hors ligne' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Le geste',
      title: 'Colorier, sans jamais se tromper',
      items: [
        {
          title: 'Touchez, ou glissez',
          body: "Un appui colore une case. Un glissé en colore une série. Pincez pour zoomer sur les détails des grandes grilles.",
        },
        {
          title: "L'erreur ne compte pas",
          body: "La couleur ne se pose que là où elle doit aller. Une case touchée avec la mauvaise teinte se signale d'un reflet, et rien n'est perdu : ni point, ni vie, ni temps.",
        },
        {
          title: 'Aucun chrono',
          body: "Vous coloriez cinq minutes ou une heure, vous reprenez trois jours plus tard exactement là où vous en étiez. Le jeu ne vous rappelle à l'ordre que si vous le lui demandez.",
        },
        {
          title: 'Quatre tailles de grille',
          body: 'Du 16x16 tout doux, fait en une pause, au 32x32 qui occupe une vraie soirée. Chaque dessin annonce sa difficulté avant que vous ne l\'ouvriez.',
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Dans le jeu',
    },
    {
      id: 'features',
      kicker: 'Ce qui reste',
      title: 'Le dessin fini n\'est pas la fin',
      items: [
        {
          title: 'Le timelapse',
          body: "Chaque dessin terminé garde l'ordre exact dans lequel vous l'avez colorié. Il se rejoue comme un film, case par case, et l'image finale se partage.",
        },
        {
          title: 'Le mode libre',
          body: "Un dessin achevé se rouvre sans numéros : à vous les couleurs, où vous voulez. Cinq ambiances de palette — d'origine, pastel, néon, sépia, nuit — changent complètement le même sujet.",
        },
        {
          title: 'Un dessin du jour',
          body: "Différent à chaque réveil, tiré parmi ceux qu'il vous reste à faire. Le terminer rapporte une prime, et la série de jours consécutifs s'allonge.",
        },
        {
          title: 'Des collections',
          body: 'Huit thèmes à boucler, deux séries transversales, treize trophées, et vos statistiques de coloriage. Tout se gagne en jouant, rien ne s\'achète.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Le jeu ne demande rien, et ne raconte rien',
      body: "Pas de compte, pas de serveur, pas de mesure d'audience. Vos dessins, vos pièces et vos réglages restent sur l'appareil, dans son stockage local. PixelCraft se joue dans le métro comme en avion, sans jamais réclamer de connexion.",
    },
  ],

  cta: {
    title: "Bientôt sur l'App Store",
    body: "PixelCraft arrive prochainement. En attendant, découvrez nos autres jeux calmes, à jouer hors ligne.",
  },

  meta: {
    title: 'PixelCraft — coloriage pixel art par numéros, hors ligne',
    description:
      "120 dessins pixel art à colorier case par case, sans chrono ni pénalité. Timelapse de chaque création, mode libre et cinq ambiances de couleurs. Jouable hors ligne, sans compte à créer.",
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Pixel art colour by number',

  headline: {
    lead: 'One cell, one colour,',
    highlight: 'and the picture appears.',
  },

  intro:
    "Put your thumb down and a cell fills in. Then another. A few minutes later a picture has appeared, and the day weighs a little less. No timer, no penalty, no right way to do it: PixelCraft is a colouring game that never puts you under pressure, and never needs a network.",

  stats: [
    { value: '120', label: 'pictures' },
    { value: '8', label: 'themes' },
    { value: '13', label: 'trophies' },
    { value: '100%', label: 'offline' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'The gesture',
      title: 'Colour in, without ever getting it wrong',
      items: [
        {
          title: 'Tap, or drag',
          body: 'A tap fills one cell. A drag fills a run of them. Pinch to zoom into the detail of the larger grids.',
        },
        {
          title: 'Mistakes do not count',
          body: 'A colour only lands where it belongs. Touch a cell with the wrong shade and it simply glints back at you — no points lost, no lives, no time.',
        },
        {
          title: 'No clock',
          body: 'Colour for five minutes or for an hour, come back three days later exactly where you left off. The game only nudges you if you ask it to.',
        },
        {
          title: 'Four grid sizes',
          body: 'From a gentle 16x16 that fits in a coffee break to a 32x32 that fills an evening. Every picture states its difficulty before you open it.',
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Inside the game',
    },
    {
      id: 'features',
      kicker: 'What stays',
      title: 'A finished picture is not the end',
      items: [
        {
          title: 'The timelapse',
          body: 'Every finished picture keeps the exact order in which you coloured it. It plays back like a film, cell by cell, and the final image can be shared.',
        },
        {
          title: 'Free mode',
          body: 'A finished picture reopens without numbers: the colours are yours, wherever you want them. Five palette moods — original, pastel, neon, sepia, night — make the same subject a different drawing.',
        },
        {
          title: 'A picture of the day',
          body: 'A different one every morning, drawn from those you have left. Finishing it pays a bonus, and your streak of consecutive days grows.',
        },
        {
          title: 'Collections',
          body: 'Eight themes to complete, two cross-theme sets, thirteen trophies and your colouring statistics. Everything is earned by playing; nothing is for sale.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'The game asks for nothing, and tells no one',
      body: 'No account, no server, no analytics. Your pictures, coins and settings stay on the device, in its local storage. PixelCraft plays on the underground as well as on a plane, without ever asking for a connection.',
    },
  ],

  cta: {
    title: 'Coming soon to the App Store',
    body: 'PixelCraft is on its way. In the meantime, have a look at our other quiet games, all playable offline.',
  },

  meta: {
    title: 'PixelCraft — offline pixel art colour by number',
    description:
      '120 pixel art pictures to colour cell by cell, with no timer and no penalty. A timelapse of every creation, a free mode and five colour moods. Playable offline, with no account to create.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
