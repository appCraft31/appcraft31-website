import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/binero.html`. */
const fr: AppCopy = {
  tagline: 'Takuzu · Binairo · iPhone et iPad',

  headline: {
    lead: 'La logique',
    highlight: 'en noir et blanc.',
  },

  intro:
    'Le Binero — aussi appelé Takuzu ou Binairo — c’est la détente du sudoku, mais en binaire : des règles limpides et des grilles qui occupent l’esprit pendant des heures. Remplissez la grille de 0 et de 1 par pure déduction, jamais au hasard.',

  stats: [
    { value: '50', label: 'niveaux' },
    { value: '6×6 → 14×14', label: 'tailles de grille' },
    { value: '1', label: 'grille du jour' },
    { value: '4', label: 'règles' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'En 30 secondes',
      title: 'Quatre règles, mille combinaisons',
      items: [
        { title: '1 · Touchez une case', body: 'Alternez vide → 0 → 1.' },
        {
          title: '2 · Jamais trois pareils',
          body: 'Pas plus de deux mêmes chiffres côte à côte.',
        },
        {
          title: '3 · Autant de 0 que de 1',
          body: 'Sur chaque ligne et sur chaque colonne.',
        },
        {
          title: '4 · Lignes uniques',
          body: 'Toutes les lignes — et toutes les colonnes — diffèrent.',
        },
      ],
    },
    {
      id: 'features',
      kicker: 'Au programme',
      title: 'Tout pour muscler votre logique',
      items: [
        {
          title: 'Mode histoire',
          body: '50 niveaux à la difficulté qui monte en douceur, du 6×6 au 14×14.',
        },
        { title: 'Grille du jour', body: 'Un nouveau défi chaque jour, en mode cauchemar (14×14).' },
        {
          title: 'Difficulté adaptative',
          body: 'Le jeu s’ajuste à votre niveau pour rester juste à votre limite.',
        },
        { title: 'Classement mondial', body: 'Comparez vos meilleurs temps via Game Center.' },
        { title: 'Hors-ligne', body: 'Jouez partout, sans connexion et sans inscription.' },
        {
          title: 'Indices & aide',
          body: 'Un coup de pouce quand vous bloquez, et le repérage des erreurs.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Sans inscription',
      body: 'Les grilles se génèrent sur l’appareil et le jeu se joue sans connexion. Le classement passe par Game Center, avec votre pseudonyme Apple et rien d’autre. Le détail des SDK figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Prêt à relever la grille du jour ?',
    body: 'Téléchargez Binero et entraînez votre cerveau, une grille à la fois.',
  },

  meta: {
    title: 'Binero — Takuzu et Binairo, la logique en noir et blanc',
    description:
      'Remplissez la grille de 0 et de 1 par pure déduction : 50 niveaux du 6×6 au 14×14, une grille du jour en 14×14 et un classement mondial via Game Center.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Takuzu · Binairo · iPhone and iPad',

  headline: {
    lead: 'Logic',
    highlight: 'in black and white.',
  },

  intro:
    'Binero — also known as Takuzu or Binairo — is the calm of sudoku, in binary: crystal-clear rules and grids that keep the mind busy for hours. Fill the grid with 0s and 1s by pure deduction, never by guessing.',

  stats: [
    { value: '50', label: 'levels' },
    { value: '6×6 → 14×14', label: 'grid sizes' },
    { value: '1', label: 'daily grid' },
    { value: '4', label: 'rules' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'In 30 seconds',
      title: 'Four rules, a thousand combinations',
      items: [
        { title: '1 · Tap a cell', body: 'Cycle through empty → 0 → 1.' },
        { title: '2 · Never three alike', body: 'No more than two identical digits side by side.' },
        { title: '3 · As many 0s as 1s', body: 'On every row and on every column.' },
        { title: '4 · Unique lines', body: 'Every row — and every column — differs from the others.' },
      ],
    },
    {
      id: 'features',
      kicker: 'What is inside',
      title: 'Everything to sharpen your logic',
      items: [
        { title: 'Story mode', body: '50 levels of gently rising difficulty, from 6×6 to 14×14.' },
        { title: 'Daily grid', body: 'A new challenge every day, in nightmare mode (14×14).' },
        {
          title: 'Adaptive difficulty',
          body: 'The game adjusts to your level to stay right at your limit.',
        },
        { title: 'Global leaderboard', body: 'Compare your best times through Game Center.' },
        { title: 'Offline', body: 'Play anywhere, with no connection and no sign-up.' },
        { title: 'Hints & help', body: 'A nudge when you are stuck, and error spotting.' },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No sign-up',
      body: 'Grids are generated on the device and the game runs with no connection. The leaderboard goes through Game Center, with your Apple nickname and nothing else. The full SDK list is in the privacy policy.',
    },
  ],

  cta: {
    title: 'Ready for today’s grid?',
    body: 'Download Binero and train your brain, one grid at a time.',
  },

  meta: {
    title: 'Binero — Takuzu and Binairo, logic in black and white',
    description:
      'Fill the grid with 0s and 1s by pure deduction: 50 levels from 6×6 to 14×14, a daily 14×14 grid and a global leaderboard through Game Center.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
