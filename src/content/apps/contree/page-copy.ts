import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/contree.html`. */
const fr: AppCopy = {
  tagline: 'Belote contrée · iPhone',

  headline: {
    lead: 'La belote contrée.',
    highlight: 'Toutes les règles.',
  },

  intro:
    'Enchères jusqu’au capot, contre, surcontre, belote et rebelote, dix de der. Rien n’a été simplifié : c’est la belote que l’on joue vraiment autour d’une table.',

  stats: [
    { value: '162', label: 'points par donne' },
    { value: '80 → 250', label: 'des annonces au capot' },
    { value: '3', label: 'niveaux d’IA' },
    { value: '×4', label: 'au surcontre' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Les enchères',
      title: 'Annoncez, contrez, surcontrez',
      body: 'Le vrai sel de la contrée. Montez de 80 à 160, tentez le capot, et si les adversaires y croient trop fort — contrez.',
      items: [
        {
          title: 'Les annonces',
          body: 'De 80 à 160, puis Capot à 250, avec choix de l’atout. Chaque annonce doit dépasser la précédente ; fin après trois passes.',
        },
        {
          title: 'Contre et surcontre',
          body: 'Contre (×2) par la défense, surcontre (×4) par le preneur. Le contrat tient, ou il chute.',
        },
        {
          title: 'Fournir, couper, monter',
          body: 'Les obligations sont appliquées à la lettre. Les cartes que vous n’avez pas le droit de jouer sont estompées : impossible de se tromper, impossible de tricher.',
        },
        {
          title: 'Belote et rebelote',
          body: 'Roi et Dame d’atout : +20, annoncés à l’écran au moment où ils tombent.',
        },
        {
          title: 'Dix de der',
          body: 'Les dix points du dernier pli, comme à la table.',
        },
        {
          title: 'Une IA qui compte les cartes',
          body: 'Trois niveaux, et un partenaire qui joue le jeu. En Difficile, l’IA retient les cartes déjà tombées.',
        },
      ],
    },
    {
      id: 'gallery-tilt',
      title: 'À la table',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Sans compte',
      body: 'Le jeu se joue hors ligne, sans compte à créer ; le multijoueur passe par Game Center. Le détail des SDK intégrés figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'À vous d’annoncer',
    body: 'Contrée est disponible gratuitement sur l’App Store.',
  },

  meta: {
    title: 'Contrée — la belote contrée sur iPhone, toutes les règles',
    description:
      'Belote contrée complète : annonces de 80 au capot, contre et surcontre, obligations de fournir et de couper appliquées à la lettre, belote-rebelote, dix de der et IA qui compte les cartes.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Belote contrée · iPhone',

  headline: {
    lead: 'Belote contrée.',
    highlight: 'Every rule.',
  },

  intro:
    'Bidding up to capot, contre, surcontre, belote and rebelote, ten of last. Nothing has been simplified: this is the belote people actually play around a table.',

  stats: [
    { value: '162', label: 'points per deal' },
    { value: '80 → 250', label: 'from bids to capot' },
    { value: '3', label: 'AI levels' },
    { value: '×4', label: 'on surcontre' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'The bidding',
      title: 'Bid, double, redouble',
      body: 'The real spice of contrée. Climb from 80 to 160, go for capot, and if your opponents believe in it too hard — double them.',
      items: [
        {
          title: 'The bids',
          body: 'From 80 to 160, then Capot at 250, with choice of trump. Each bid must beat the previous one; bidding ends after three passes.',
        },
        {
          title: 'Contre and surcontre',
          body: 'Contre (×2) by the defence, surcontre (×4) by the taker. The contract holds, or it falls.',
        },
        {
          title: 'Follow, trump, overtrump',
          body: 'The obligations are enforced to the letter. Cards you are not allowed to play are dimmed: you cannot slip, and you cannot cheat.',
        },
        {
          title: 'Belote and rebelote',
          body: 'King and Queen of trumps: +20, announced on screen the moment they fall.',
        },
        { title: 'Ten of last', body: 'The ten points of the final trick, just like at the table.' },
        {
          title: 'An AI that counts cards',
          body: 'Three levels, and a partner who plays properly. On Hard, the AI remembers what has already fallen.',
        },
      ],
    },
    {
      id: 'gallery-tilt',
      title: 'At the table',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account',
      body: 'The game runs offline, with no account to create; multiplayer goes through Game Center. The full list of included SDKs is in the privacy policy.',
    },
  ],

  cta: {
    title: 'Your bid',
    body: 'Contrée is available free on the App Store.',
  },

  meta: {
    title: 'Contrée — belote contrée on iPhone, every rule',
    description:
      'Complete belote contrée: bids from 80 up to capot, contre and surcontre, follow-and-trump obligations enforced to the letter, belote-rebelote, ten of last and a card-counting AI.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
