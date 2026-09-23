import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/contree.html`. */
const fr: AppCopy = {
  tagline: 'Belote contrée · Coinche · iPhone',

  headline: {
    lead: 'La belote contrée.',
    highlight: 'Toutes les règles.',
  },

  intro:
    'La belote contrée, aussi appelée coinche : enchères jusqu’au capot, contre, surcontre, belote et rebelote, dix de der. Rien n’a été simplifié : c’est la belote que l’on joue vraiment autour d’une table.',

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
    {
      id: 'faq',
      kicker: 'Questions fréquentes',
      title: 'La coinche sur iPhone, en pratique',
    },
  ],

  faq: [
    {
      question: 'Peut-on jouer à la coinche contre l’ordinateur ?',
      answer:
        'Oui. En solo, vous faites équipe avec un partenaire contre deux adversaires, tous trois tenus par l’IA : c’est une vraie partie de belote contrée (coinche) à quatre joueurs, en deux équipes.',
    },
    {
      question: 'Quels sont les niveaux de difficulté ?',
      answer:
        'Il y en a trois : Facile, Normal et Difficile. En Difficile, l’IA mémorise les cartes déjà tombées.',
    },
    {
      question: 'Peut-on jouer hors ligne ?',
      answer:
        'Oui. La partie en solo contre l’IA se joue sans connexion, et elle est sauvegardée automatiquement. Seul le multijoueur en ligne demande Internet.',
    },
    {
      question: 'Faut-il créer un compte ?',
      answer:
        'Non, il n’y a aucun compte à créer. Le multijoueur en ligne passe par Game Center, le service de jeu d’Apple déjà présent sur l’iPhone.',
    },
    {
      question: 'Contrée est-elle gratuite ?',
      answer:
        'Oui. Contrée : Belote & Coinche est gratuite sur l’App Store, pour iPhone (il n’existe pas de version Android), et ne contient pas d’achat intégré. Elle est financée par la publicité : une bannière sur l’écran d’accueil et une publicité plein écran entre certaines manches, jamais pendant le jeu.',
    },
    {
      question: 'Peut-on jouer avec des amis en ligne ?',
      answer:
        'Oui, via Game Center : lancez une partie rapide ou invitez vos amis. Les sièges vides sont tenus par des bots, qui remplacent aussi un joueur qui quitte la partie.',
    },
    {
      question: 'Quelles règles de la belote contrée sont appliquées ?',
      answer:
        'Les règles classiques de la contrée : annonces de 80 à 160 puis capot à 250, contre (×2) et surcontre (×4), obligation de fournir, de couper et de monter à l’atout, belote-rebelote (+20) et dix de der. La partie se joue en 500, 1000 ou 1500 points, et un écran de règles les rappelle dans l’app.',
    },
  ],

  schema: {
    alternateName: ['Contrée : Belote & Coinche', 'Coinche', 'Belote contrée'],
    featureList: [
      'Belote contrée (coinche) à quatre joueurs, en deux équipes',
      'Annonces de 80 à 160, puis capot à 250',
      'Contre (×2) et surcontre (×4)',
      'Obligations de fournir, couper et monter à l’atout',
      'Belote-rebelote (+20) et dix de der',
      'IA en trois niveaux : Facile, Normal, Difficile',
      'Score cible de 500, 1000 ou 1500 points',
      'Sauvegarde automatique et statistiques',
      'Écran de règles et compatibilité VoiceOver',
      'Multijoueur en ligne via Game Center',
      'Solo jouable hors ligne',
    ],
  },

  cta: {
    title: 'À vous d’annoncer',
    body: 'Contrée : Belote & Coinche est disponible gratuitement sur l’App Store, pour iPhone.',
  },

  meta: {
    title: 'Contrée : Belote & Coinche — la belote contrée sur iPhone',
    description:
      'La belote contrée, aussi appelée coinche, sur iPhone : annonces de 80 au capot, contre et surcontre, belote-rebelote, dix de der, IA en trois niveaux et parties en ligne via Game Center. Gratuit, sans compte.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Belote contrée · Coinche · iPhone',

  headline: {
    lead: 'Belote contrée.',
    highlight: 'Every rule.',
  },

  intro:
    'Belote contrée, also known as coinche: bidding up to capot, contre, surcontre, belote and rebelote, ten of last. Nothing has been simplified: this is the belote people actually play around a table.',

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
    {
      id: 'faq',
      kicker: 'FAQ',
      title: 'Coinche on iPhone, in practice',
    },
  ],

  faq: [
    {
      question: 'Can I play coinche against the computer?',
      answer:
        'Yes. Playing solo, you team up with a partner against two opponents, all three played by the AI: a real four-player game of belote contrée (coinche), in two teams.',
    },
    {
      question: 'What difficulty levels are there?',
      answer:
        'Three: Easy, Normal and Hard. On Hard, the AI remembers the cards that have already been played.',
    },
    {
      question: 'Can I play offline?',
      answer:
        'Yes. Solo games against the AI need no connection, and they are saved automatically. Only online multiplayer requires the internet.',
    },
    {
      question: 'Do I need to create an account?',
      answer:
        'No, there is no account to create. Online multiplayer goes through Game Center, Apple’s gaming service already built into the iPhone.',
    },
    {
      question: 'Is Contrée free?',
      answer:
        'Yes. Contrée: Belote & Coinche is free on the App Store, for iPhone (there is no Android version), and has nothing to buy inside the app. It is funded by ads: a banner on the home screen and a full-screen ad between some rounds, never during play.',
    },
    {
      question: 'Can I play with friends online?',
      answer:
        'Yes, through Game Center: start a quick match or invite your friends. Empty seats are filled by bots, which also take over from a player who leaves.',
    },
    {
      question: 'Which belote contrée rules are used?',
      answer:
        'The classic contrée rules: bids from 80 to 160, then capot at 250, contre (×2) and surcontre (×4), the obligation to follow suit, to trump and to overtrump, belote-rebelote (+20) and ten of last. Games are played to 500, 1000 or 1500 points, and a rules screen in the app sums them up.',
    },
  ],

  schema: {
    alternateName: ['Contrée: Belote & Coinche', 'Coinche', 'Belote contrée'],
    featureList: [
      'Four-player belote contrée (coinche), in two teams',
      'Bids from 80 to 160, then capot at 250',
      'Contre (×2) and surcontre (×4)',
      'Follow, trump and overtrump obligations enforced',
      'Belote-rebelote (+20) and ten of last',
      'Three AI levels: Easy, Normal, Hard',
      'Target score of 500, 1000 or 1500 points',
      'Automatic save and statistics',
      'Rules screen and VoiceOver support',
      'Online multiplayer through Game Center',
      'Solo play offline',
    ],
  },

  cta: {
    title: 'Your bid',
    body: 'Contrée: Belote & Coinche is available free on the App Store, for iPhone.',
  },

  meta: {
    title: 'Contrée: Belote & Coinche — belote contrée on iPhone',
    description:
      'Belote contrée, also known as coinche, on iPhone: bids from 80 up to capot, contre and surcontre, belote-rebelote, ten of last, three AI levels and online games through Game Center. Free, no account.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
