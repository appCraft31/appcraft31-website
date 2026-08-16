import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/meliz.html`, déjà bilingue. */
const fr: AppCopy = {
  tagline: 'Mots mêlés pastel · iPhone, Android et navigateur',

  headline: {
    lead: 'Trouve les mots,',
    highlight: 'retrouve le calme.',
  },

  intro:
    'Mêliz est un jeu de mots mêlés au design tout en douceur. Six univers colorés, trois niveaux de difficulté, et une expérience pensée pour que chaque partie soit un petit moment pour soi.',

  stats: [
    { value: '6', label: 'univers' },
    { value: '3', label: 'difficultés' },
    { value: '2', label: 'langues' },
    { value: '0 €', label: 'pour jouer' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Fonctionnalités',
      title: 'Pensé pour la détente, peaufiné pour le plaisir',
      body: 'Une mécanique simple, raffinée par des détails qui changent tout : haptiques, transitions douces, et un suivi de tes progrès.',
      items: [
        {
          title: 'Design pastel',
          body: 'Une palette douce et apaisante, des typos arrondies, et un mode sombre soigné pour les sessions du soir.',
        },
        {
          title: 'Chrono & score',
          body: 'Chaque partie est mesurée. Plus tu vas vite, plus tu marques. Tes meilleurs scores sont conservés par thème et par difficulté.',
        },
        {
          title: 'Indice à la demande',
          body: 'Bloqué·e ? Demande un indice et révèle une lettre d’un mot non trouvé pour relancer la dynamique.',
        },
        {
          title: 'Haptiques fines',
          body: 'Chaque sélection, chaque mot trouvé, chaque victoire est ponctué d’une vibration discrète.',
        },
        {
          title: 'Bilingue FR / EN',
          body: 'Joue en français ou en anglais. Les banques de mots sont adaptées à chaque langue, pas seulement traduites.',
        },
        {
          title: 'Six univers',
          body: 'Animaux, fruits, couleurs, sports, métiers, espace, pays, transports, musique — chaque thème puise dans sa propre banque de mots.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'La galerie',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Tes scores restent sur ton téléphone',
      body: 'Aucune collecte de données personnelles : tes scores et tes réglages sont stockés sur l’appareil. Le jeu est gratuit et financé par la publicité, avec un écran de consentement clair et révisable à tout moment.',
    },
  ],

  cta: {
    title: 'Une grille, tout de suite',
    body: 'Mêliz se joue sur iPhone, sur Android, et directement dans le navigateur — sans rien installer.',
  },

  meta: {
    title: 'Mêliz — jeu de mots mêlés gratuit (iPhone, Android et en ligne)',
    description:
      'Un jeu de mots mêlés au design pastel : six univers, trois difficultés, chrono et scores conservés par thème. Jouable sur iPhone, Android et directement en ligne.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Pastel word search · iPhone, Android and browser',

  headline: {
    lead: 'Find the words,',
    highlight: 'find your calm.',
  },

  intro:
    'Mêliz is a word search game with a soft, gentle design. Six colourful worlds, three difficulty levels, and an experience built so every round is a small moment for yourself.',

  stats: [
    { value: '6', label: 'worlds' },
    { value: '3', label: 'difficulties' },
    { value: '2', label: 'languages' },
    { value: '£0', label: 'to play' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Features',
      title: 'Built for calm, polished for pleasure',
      body: 'A simple mechanic, refined by the details that change everything: haptics, soft transitions, and a record of your progress.',
      items: [
        {
          title: 'Pastel design',
          body: 'A soft, soothing palette, rounded type, and a careful dark mode for evening sessions.',
        },
        {
          title: 'Timer & score',
          body: 'Every round is timed. The faster you go, the more you score. Your best scores are kept per theme and per difficulty.',
        },
        {
          title: 'Hints on demand',
          body: 'Stuck? Ask for a hint and reveal a letter of a word you have not found yet.',
        },
        {
          title: 'Fine haptics',
          body: 'Every selection, every word found, every win comes with a discreet little buzz.',
        },
        {
          title: 'Bilingual FR / EN',
          body: 'Play in French or English. The word banks are built for each language, not merely translated.',
        },
        {
          title: 'Six worlds',
          body: 'Animals, fruit, colours, sports, jobs, space, countries, transport, music — each theme draws on its own word bank.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'The gallery',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Your scores stay on your phone',
      body: 'No personal data is collected: your scores and settings are stored on the device. The game is free and ad-funded, with a clear consent screen you can revisit at any time.',
    },
  ],

  cta: {
    title: 'One grid, right now',
    body: 'Mêliz runs on iPhone, on Android, and straight in the browser — with nothing to install.',
  },

  meta: {
    title: 'Mêliz — free word search game (iPhone, Android and online)',
    description:
      'A pastel word search game: six worlds, three difficulties, timer and scores kept per theme. Playable on iPhone, Android and directly online.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
