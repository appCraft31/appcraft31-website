import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/tinta.html`. */
const fr: AppCopy = {
  tagline: 'Puzzle logique couleur · iPhone, iOS 17+',

  headline: {
    lead: 'Déduction pure,',
    highlight: 'sans jamais deviner.',
  },

  intro:
    'Chaque grille cache un coloriage secret. Les indices suffisent toujours à le retrouver — un café, une grille, et que la logique parle. 300 grilles générées et vérifiées par un moteur logique : chaque solution est unique, et toujours déductible sans hasard.',

  stats: [
    { value: '300', label: 'niveaux' },
    { value: '3', label: 'mondes' },
    { value: '3', label: 'étoiles par niveau' },
    { value: '0', label: 'part de hasard' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'La règle',
      title: 'Des pastilles, des signes, une seule solution',
      body: 'Les pastilles comptent les couleurs, les signes = et ≠ relient les cases voisines. Tout le reste se déduit.',
      items: [
        { title: 'Les pastilles', body: 'Elles indiquent combien de cases portent chaque couleur.' },
        { title: 'Les signes = et ≠', body: 'Ils relient deux voisines : même couleur, ou couleurs différentes.' },
        {
          title: 'Une solution unique',
          body: 'Un moteur logique a vérifié chaque grille : il n’existe qu’un seul coloriage possible.',
        },
      ],
    },
    {
      id: 'gallery-tilt',
      title: 'Les grilles',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Ce que Tinta enregistre',
      body: 'Votre progression, vos étoiles et vos réglages restent sur l’appareil. Le détail des SDK intégrés figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Une grille, un café',
    body: 'Tinta est disponible gratuitement sur l’App Store, pour iPhone sous iOS 17 ou plus récent.',
  },

  meta: {
    title: 'Tinta — puzzle logique couleur, sans hasard',
    description:
      '300 grilles de déduction pure : les pastilles comptent les couleurs, les signes = et ≠ relient les voisines, et chaque grille a une solution unique vérifiée par un moteur logique.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Colour logic puzzle · iPhone, iOS 17+',

  headline: {
    lead: 'Pure deduction,',
    highlight: 'never a guess.',
  },

  intro:
    'Every grid hides a secret colouring. The clues are always enough to find it — one coffee, one grid, and let logic do the talking. 300 grids generated and verified by a logic engine: every solution is unique, and always reachable without guessing.',

  stats: [
    { value: '300', label: 'levels' },
    { value: '3', label: 'worlds' },
    { value: '3', label: 'stars per level' },
    { value: '0', label: 'guesswork' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'The rule',
      title: 'Counters, signs, one single solution',
      body: 'Counters tally the colours, the = and ≠ signs link neighbouring cells. Everything else is deduced.',
      items: [
        { title: 'The counters', body: 'They tell you how many cells carry each colour.' },
        { title: 'The = and ≠ signs', body: 'They link two neighbours: same colour, or different colours.' },
        {
          title: 'A unique solution',
          body: 'A logic engine checked every grid: only one colouring is possible.',
        },
      ],
    },
    {
      id: 'gallery-tilt',
      title: 'The grids',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'What Tinta stores',
      body: 'Your progress, your stars and your settings stay on the device. The full list of included SDKs is in the privacy policy.',
    },
  ],

  cta: {
    title: 'One grid, one coffee',
    body: 'Tinta is available free on the App Store, for iPhone running iOS 17 or later.',
  },

  meta: {
    title: 'Tinta — colour logic puzzle, no guessing',
    description:
      '300 pure-deduction grids: counters tally the colours, = and ≠ signs link neighbours, and every grid has a unique solution verified by a logic engine.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
