import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/motfleche.html`. */
const fr: AppCopy = {
  tagline: 'Édition censurée · iPhone',

  headline: {
    lead: 'Des mots fléchés comme avant,',
    highlight: 'mais en mieux.',
  },

  intro:
    'Déchiffrez les mots interdits. Des grilles classiques au style vintage, des thèmes insolites à débloquer et des indices pour ne jamais rester bloqué. Une case, une lettre. Un mot, une définition. Pas de compte à créer, pas de connexion requise.',

  stats: [
    { value: '100 %', label: 'de grille à remplir' },
    { value: '5+', label: 'thèmes à débloquer' },
    { value: '0', label: 'compte à créer' },
    { value: '1952', label: 'l’édition' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Le principe',
      title: 'Trois gestes, et la grille se remplit',
      items: [
        {
          title: '1 · Lisez la définition',
          body: 'Chaque case de départ contient une définition et une flèche indiquant la direction du mot à trouver.',
        },
        {
          title: '2 · Tapez les lettres',
          body: 'Sélectionnez une case vide et composez le mot lettre par lettre. Les mots croisés confirment ou infirment vos réponses.',
        },
        {
          title: '3 · Remplissez la grille',
          body: 'Complétez 100 % de la grille pour finir la partie. Votre score augmente à chaque mot trouvé.',
        },
      ],
    },
    {
      id: 'features',
      kicker: 'Thèmes',
      title: 'Un univers, des centaines de mots',
      body: 'Commencez avec le Classique, débloquez de nouveaux thèmes avec vos étoiles.',
      items: [
        {
          title: 'Classique',
          body: 'Dictionnaire général, vocabulaire varié et définitions intemporelles.',
        },
        { title: 'Nature', body: 'Forêts, montagnes, océans — le monde naturel en définitions.' },
        { title: 'Animaux', body: 'Du domestique au sauvage, toute la faune à portée de doigt.' },
        { title: 'Cuisine', body: 'Saveurs et recettes du monde entier à déchiffrer.' },
        { title: 'Espace', body: 'Étoiles et galaxies — l’infini condensé en grilles.' },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Les grilles',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Gratuit, financé par la publicité',
      body: 'Aucun compte à créer et aucune connexion nécessaire pour jouer. Le jeu est gratuit et financé par la publicité ; le détail des SDK et du consentement figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Une grille vous attend',
    body: 'Mots Fléchés — Édition censurée est disponible gratuitement sur l’App Store.',
  },

  meta: {
    title: 'Mots Fléchés — édition censurée, au style vintage',
    description:
      'Des mots fléchés au style vintage : définitions et flèches, thèmes à débloquer avec vos étoiles, indices quand vous bloquez. Sans compte et jouable hors connexion.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Censored edition · iPhone',

  headline: {
    lead: 'Arrow words like they used to be,',
    highlight: 'only better.',
  },

  intro:
    'Decipher the forbidden words. Classic grids in a vintage style, unusual themes to unlock and hints so you are never truly stuck. One cell, one letter. One word, one clue. No account to create, no connection required.',

  stats: [
    { value: '100%', label: 'of the grid to fill' },
    { value: '5+', label: 'themes to unlock' },
    { value: '0', label: 'accounts to create' },
    { value: '1952', label: 'the edition' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'How it works',
      title: 'Three moves, and the grid fills up',
      items: [
        {
          title: '1 · Read the clue',
          body: 'Every starting cell holds a clue and an arrow showing the direction of the word to find.',
        },
        {
          title: '2 · Type the letters',
          body: 'Select an empty cell and build the word letter by letter. Crossing words confirm or refute your answers.',
        },
        {
          title: '3 · Fill the grid',
          body: 'Complete 100% of the grid to finish the game. Your score rises with every word found.',
        },
      ],
    },
    {
      id: 'features',
      kicker: 'Themes',
      title: 'One world, hundreds of words',
      body: 'Start with Classic, unlock new themes with your stars.',
      items: [
        { title: 'Classic', body: 'General dictionary, varied vocabulary and timeless clues.' },
        { title: 'Nature', body: 'Forests, mountains, oceans — the natural world in clues.' },
        { title: 'Animals', body: 'From pets to the wild, the whole fauna at your fingertips.' },
        { title: 'Cooking', body: 'Flavours and recipes from all over the world to decipher.' },
        { title: 'Space', body: 'Stars and galaxies — the infinite, condensed into grids.' },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'The grids',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Free, funded by advertising',
      body: 'No account to create and no connection needed to play. The game is free and ad-funded; the details of the SDKs and of consent are in the privacy policy.',
    },
  ],

  cta: {
    title: 'A grid is waiting',
    body: 'Mots Fléchés — Édition censurée is available free on the App Store.',
  },

  meta: {
    title: 'Mots Fléchés — censored edition, vintage style',
    description:
      'Vintage-style arrow words: clues and arrows, themes to unlock with your stars, hints when you get stuck. No account, playable offline.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
