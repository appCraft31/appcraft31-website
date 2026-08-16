import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/combo.html`.
 * Le produit s'appelle SquareLink ; son slug d'URL, `combo`, est historique et
 * figé par les fiches store.
 */
const fr: AppCopy = {
  tagline: 'Tuiles & combos · inspiré du triomino · iPhone',

  headline: {
    lead: 'Pose, encastre,',
    highlight: 'enchaîne.',
  },

  intro:
    'SQUARELINK est un puzzle de tuiles à quatre faces. Place chaque tuile pour que ses chiffres correspondent à ceux des voisines. Plus tu connectes de côtés d’un seul coup, plus le combo monte — et le multiplicateur s’enchaîne.',

  stats: [
    { value: '×3', label: 'multiplicateur maximum' },
    { value: '+500', label: 'l’encastrement parfait' },
    { value: '3', label: 'indications par partie' },
    { value: '4', label: 'faces par tuile' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Fonctionnalités',
      title: 'Une mécanique simple, un univers tout doux',
      body: 'Le gameplay du triomino transposé en quatre faces, animé d’effets pastel, et calibré pour des sessions de trois minutes comme des soirées entières.',
      items: [
        {
          title: 'Combos jusqu’à ×3',
          body: '1 côté = 10 points. 2 côtés = 50. 3 côtés = 200, et la pose suivante est ×2. Encastrement parfait sur 4 côtés ? +500 et ×3.',
        },
        {
          title: 'Design pastel',
          body: 'Palette douce (pêche, menthe, lavande, blush, beurre), animations souples, mode sombre adapté pour les sessions du soir.',
        },
        {
          title: 'Aide intelligente',
          body: 'Trois indications par partie en mode infini, et une supplémentaire en regardant une vidéo bonus.',
        },
        {
          title: 'Haptiques fines',
          body: 'Chaque pose, chaque combo et chaque encastrement parfait est ponctué d’une vibration discrète — et de confettis pastel.',
        },
        {
          title: 'Game Center',
          body: 'Soumets ton score et compare-toi aux autres joueurs.',
        },
        {
          title: 'Mode sombre',
          body: 'La même palette, en version nuit, pour jouer sans se brûler les yeux.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'En jeu',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Ce que SquareLink enregistre',
      body: 'Ta progression et tes réglages restent sur l’appareil ; seuls les scores passent par Game Center. Le jeu est gratuit et intègre de la publicité, dont une vidéo bonus facultative. Le détail figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Une tuile, puis une autre',
    body: 'SquareLink est disponible gratuitement sur l’App Store.',
  },

  meta: {
    title: 'SquareLink — tuiles & combos, inspiré du triomino',
    description:
      'Un puzzle de tuiles à quatre faces : fais correspondre les chiffres avec les voisines, enchaîne les combos jusqu’à ×3 et vise l’encastrement parfait à +500 points.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Tiles & combos · triomino-inspired · iPhone',

  headline: {
    lead: 'Place, fit,',
    highlight: 'chain.',
  },

  intro:
    'SQUARELINK is a four-sided tile puzzle. Place each tile so its numbers match its neighbours’. The more sides you connect in a single move, the higher the combo — and the longer the multiplier runs.',

  stats: [
    { value: '×3', label: 'maximum multiplier' },
    { value: '+500', label: 'the perfect fit' },
    { value: '3', label: 'hints per game' },
    { value: '4', label: 'sides per tile' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Features',
      title: 'A simple mechanic, a gentle world',
      body: 'Triomino gameplay transposed to four sides, animated with pastel effects, and calibrated for three-minute sessions as much as whole evenings.',
      items: [
        {
          title: 'Combos up to ×3',
          body: '1 side = 10 points. 2 sides = 50. 3 sides = 200, and the next placement is ×2. A perfect fit on all 4 sides? +500 and ×3.',
        },
        {
          title: 'Pastel design',
          body: 'A soft palette (peach, mint, lavender, blush, butter), springy animations, and a dark mode suited to evening sessions.',
        },
        {
          title: 'Smart hints',
          body: 'Three hints per game in endless mode, and one more by watching a bonus video.',
        },
        {
          title: 'Fine haptics',
          body: 'Every placement, every combo and every perfect fit comes with a discreet buzz — and pastel confetti.',
        },
        {
          title: 'Game Center',
          body: 'Submit your score and measure yourself against other players.',
        },
        {
          title: 'Dark mode',
          body: 'The same palette, at night, to play without burning your eyes.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'In play',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'What SquareLink stores',
      body: 'Your progress and settings stay on the device; only scores go through Game Center. The game is free and includes advertising, with an optional bonus video. The details are in the privacy policy.',
    },
  ],

  cta: {
    title: 'One tile, then another',
    body: 'SquareLink is available free on the App Store.',
  },

  meta: {
    title: 'SquareLink — tiles & combos, inspired by triominoes',
    description:
      'A four-sided tile puzzle: match the numbers with the neighbours, chain combos up to ×3 and aim for the perfect fit worth +500 points.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
