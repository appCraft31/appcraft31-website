import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/zellige.html`.
 *
 * Tout ce qui est chiffré ici se lit dans le code du jeu
 * (`~/StudioProjects/Tectonic`) : les paliers et tailles de grille dans
 * `lib/models/difficulty.dart` (5×5 jusqu'au niveau 5, 6×6, 7×8, 9×9, 10×10,
 * puis 12×12 à partir du niveau 60, sans fin), la grille du jour 12×12 dans
 * `Difficulty.daily`, les 3 classements et 12 succès Game Center dans
 * `lib/core/game_center_ids.dart`, les 21 locales dans `lib/l10n/`. Le
 * `pubspec.yaml` lie `google_mobile_ads` (interstitiel toutes les deux
 * grilles, vidéo récompensée pour des pièces) et `firebase_analytics`, aucun
 * achat intégré : la page ne promet donc ni « sans publicité » ni boutique.
 */
const fr: AppCopy = {
  tagline: 'Tectonic & Suguru en carreaux de faïence',

  headline: {
    lead: 'Trois règles, aucun calcul,',
    highlight: 'jamais de hasard.',
  },

  intro:
    "On l'appelle Tectonic en France, Suguru ailleurs : une grille découpée en blocs irréguliers, des chiffres à poser, et le seul raisonnement pour y arriver. Zellige l'habille de carreaux de faïence — bleu de Delft, terre cuite, sauge, ocre — séparés par un joint qui dit tout du découpage. Chaque grille est engendrée sur votre téléphone puis vérifiée : sa solution est unique, et sa difficulté se mesure sur le raisonnement qu'elle exige, pas sur le nombre de cases vides.",

  stats: [
    { value: '5×5 → 12×12', label: 'tailles de grille' },
    { value: '5', label: 'paliers de difficulté' },
    { value: '1', label: 'grille du jour, la même pour tous' },
    { value: '21', label: 'langues' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Les règles',
      title: 'Trois règles, pas une de plus',
      items: [
        {
          title: 'Un bloc de N cases contient 1 à N',
          body: "Un bloc de trois cases porte 1, 2 et 3, une fois chacun. Un bloc d'une case vaut toujours 1 — et c'est déjà une prise pour le raisonnement.",
        },
        {
          title: 'Deux voisines ne portent jamais le même chiffre',
          body: "Diagonales comprises : chaque case a jusqu'à huit voisines, et aucune ne peut répéter son chiffre. C'est la règle qui n'existe ni au Sudoku ni au Binero, et celle qui fait tout le sel du jeu.",
        },
        {
          title: 'La solution est unique',
          body: "Chaque grille passe par le solveur avant de vous être proposée. Il n'y a jamais à deviner : si vous êtes bloqué, c'est qu'une déduction vous attend quelque part.",
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Dans le jeu',
    },
    {
      id: 'features',
      kicker: 'Ce qui se joue',
      title: 'De la première grille à la grille du jour',
      items: [
        {
          title: 'Une progression qui vous suit',
          body: "Cinq grilles 5×5 pour prendre la main, puis 6×6, 7×8, 9×9, 10×10, et à partir du niveau 60 des 12×12 sans fin. La proportion d'indices baisse doucement, et s'ajuste à votre réussite récente.",
        },
        {
          title: 'La grille du jour',
          body: "Une 12×12 experte, la même pour tout le monde, chaque jour. Terminez-la pour allonger votre série, et comparez votre temps sur le classement Game Center du jour.",
        },
        {
          title: 'Notes, annulation, indices',
          body: "Posez vos hypothèses en annotations, revenez sur un coup sans les perdre, faites-vous signaler les conflits — ou coupez ce filet dans les réglages. Un indice révèle une case contre des pièces gagnées en jouant ou en regardant une vidéo.",
        },
        {
          title: 'Dessiné, pas généré',
          body: "Chaque icône est un tracé fait main, chaque case un carreau posé dans son joint. Le thème sombre n'est pas un négatif du clair : le joint y devient l'ombre entre les carreaux. La grille entière se lit avec VoiceOver, et une erreur ne se signale jamais par la seule couleur.",
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Pas de compte, des grilles fabriquées sur place',
      body: "Zellige ne demande ni compte ni inscription : progression, pièces, série et réglages restent sur l'appareil, et les grilles sont engendrées localement. Le jeu est gratuit grâce à la publicité (Google AdMob, un interstitiel toutes les deux grilles et une vidéo que vous choisissez de regarder), il remonte des mesures d'usage anonymes à Firebase Analytics, et Game Center ne sert qu'aux classements et aux succès. Tout est détaillé dans la politique de confidentialité.",
    },
  ],

  cta: {
    title: "Disponible sur l'App Store et Google Play",
    body: "Zellige se télécharge dès maintenant. Découvrez aussi nos autres jeux de logique, à jouer hors ligne.",
  },

  meta: {
    title: 'Zellige — Tectonic & Suguru, grilles à solution unique',
    description:
      "Jeu de Tectonic (Suguru) en carreaux de faïence : grilles engendrées sur votre appareil et vérifiées à solution unique, du 5×5 au 12×12, grille du jour, notes, annulation, thème sombre. Sans compte, en 21 langues.",
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Tectonic & Suguru on glazed tiles',

  headline: {
    lead: 'Three rules, no arithmetic,',
    highlight: 'never any guessing.',
  },

  intro:
    "Known as Tectonic in France and Suguru elsewhere: a grid cut into irregular blocks, digits to place, and pure reasoning to get there. Zellige dresses it in glazed tiles — Delft blue, terracotta, sage, ochre — separated by grout that tells you everything about the layout. Every grid is generated on your phone and then verified: its solution is unique, and its difficulty is measured on the reasoning it actually demands, not on the number of empty cells.",

  stats: [
    { value: '5×5 → 12×12', label: 'grid sizes' },
    { value: '5', label: 'difficulty tiers' },
    { value: '1', label: 'daily grid, the same for everyone' },
    { value: '21', label: 'languages' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'The rules',
      title: 'Three rules, not one more',
      items: [
        {
          title: 'A block of N cells holds 1 to N',
          body: 'A three-cell block holds 1, 2 and 3, once each. A single-cell block is always a 1 — and that alone is a foothold for your reasoning.',
        },
        {
          title: 'Neighbours never share a digit',
          body: 'Diagonals included: every cell has up to eight neighbours, and none may repeat its digit. This is the rule that exists in neither Sudoku nor Binero, and the one that gives the game its bite.',
        },
        {
          title: 'The solution is unique',
          body: 'Every grid goes through the solver before it reaches you. There is never anything to guess: if you are stuck, a deduction is waiting somewhere.',
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Inside the game',
    },
    {
      id: 'features',
      kicker: 'What you play',
      title: 'From the first grid to the daily grid',
      items: [
        {
          title: 'A progression that follows you',
          body: 'Five 5×5 grids to find your feet, then 6×6, 7×8, 9×9, 10×10, and from level 60 onwards endless 12×12 grids. The share of given digits eases down gently, and adjusts to how you have been doing lately.',
        },
        {
          title: 'The daily grid',
          body: 'An expert 12×12, the same for everyone, every day. Finish it to extend your streak, and compare your time on the daily Game Center leaderboard.',
        },
        {
          title: 'Notes, undo, hints',
          body: 'Pencil in your hypotheses, undo a move without losing them, have conflicts pointed out — or switch that safety net off in the settings. A hint reveals one cell, paid with coins earned by playing or by watching a video.',
        },
        {
          title: 'Drawn, not generated',
          body: 'Every icon is hand-traced, every cell a tile set in its grout. The dark theme is not a negative of the light one: there, the grout becomes the shadow between the tiles. The whole grid reads with VoiceOver, and a mistake is never signalled by colour alone.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account, grids made on the spot',
      body: 'Zellige asks for no account and no sign-up: progress, coins, streak and settings stay on the device, and grids are generated locally. The game is free thanks to advertising (Google AdMob — an interstitial every two grids and a video you choose to watch), it sends anonymous usage measurements to Firebase Analytics, and Game Center is used only for leaderboards and achievements. Everything is spelled out in the privacy policy.',
    },
  ],

  cta: {
    title: 'Available on the App Store and Google Play',
    body: 'Zellige is out now. Have a look at our other logic games too, all playable offline.',
  },

  meta: {
    title: 'Zellige — Tectonic & Suguru grids with a single solution',
    description:
      'A Tectonic (Suguru) game on glazed tiles: grids generated on your device and verified to have a single solution, from 5×5 to 12×12, a daily grid, notes, undo and a dark theme. No account, in 21 languages.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
