import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/sudoku.html`.
 * Les cinq variantes et leur rotation sont celles du code du jeu.
 */
const fr: AppCopy = {
  tagline: 'Un journal de grilles · iOS',

  headline: {
    lead: 'Chaque matin, une grille.',
    highlight: 'Et chaque matin, une règle différente.',
  },

  intro:
    'Un défi quotidien numéroté comme une édition de journal — la même grille pour tous les joueurs, partout, le même jour. Cinq variantes se relaient au fil des éditions, et la difficulté suit le rythme de la semaine : accessible en début de semaine, corsée le week-end. Une carte de règle claire s’affiche avant chaque variante, pour que les règles exotiques restent accessibles à tous.',

  stats: [
    { value: '5', label: 'variantes' },
    { value: '60', label: 'éditions archivées' },
    { value: '1', label: 'grille par jour' },
    { value: '0', label: 'compte requis' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'La rotation',
      title: 'Cinq façons de remplir une grille',
      body: 'Une carte de règle s’affiche avant chaque variante : rien n’est supposé connu.',
      items: [
        { title: 'Édition 1 · Classique', body: 'Le sudoku que vous connaissez.' },
        { title: 'Édition 2 · Sudoku X', body: 'Les diagonales comptent aussi.' },
        { title: 'Édition 3 · Killer', body: 'Des cages qui s’additionnent.' },
        { title: 'Édition 4 · Irrégulier', body: 'Des régions aux formes libres.' },
        { title: 'Édition 5 · Thermomètre', body: 'Des chiffres qui croissent le long du tube.' },
      ],
    },
    {
      id: 'features',
      kicker: 'Ce qui fait revenir',
      title: 'Un rendez-vous, pas une réserve de grilles',
      items: [
        {
          title: 'Le carnet de tampons',
          body: 'Un cachet d’encre par défi résolu sur le calendrier du mois. Ce sont les trous qui donnent envie de revenir.',
        },
        {
          title: 'Les rangs',
          body: 'D’Apprenti à Rédacteur en chef — ils ne redescendent jamais, même le jour où la série se brise.',
        },
        {
          title: 'Les archives',
          body: 'Les 60 dernières éditions restent ouvertes. Un jour manqué n’est jamais perdu.',
        },
        {
          title: 'Le partage en emojis',
          body: 'Un résumé de partie copié en un geste, à partager où bon vous semble — sans rien divulgâcher.',
        },
        {
          title: 'La partie libre',
          body: 'Chaque variante en trois difficultés, avec records de temps, notes au crayon, annulation et indices comptés.',
        },
        {
          title: 'Le confort',
          body: 'Sauvegarde automatique, mode sombre, clavier physique pris en charge, VoiceOver soigné case par case.',
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'À la une',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Aucun compte à créer, rien à configurer',
      body: 'Les grilles se génèrent directement sur votre appareil et la partie se joue même sans connexion. Votre carnet de tampons, vos rangs et vos records restent chez vous.',
    },
  ],

  cta: {
    title: 'La première édition arrive',
    body: 'Le Sudoku du jour paraît bientôt sur l’App Store. D’ici là, nos autres jeux de logique vous attendent.',
  },

  meta: {
    title: 'Le Sudoku du jour — une règle différente chaque jour',
    description:
      'Un défi de sudoku quotidien dont la variante change chaque jour : classique, X, killer, irrégulier, thermomètre. Carnet de tampons, rangs, archives — sans compte et hors connexion.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'A newspaper of grids · iOS',

  headline: {
    lead: 'Every morning, a grid.',
    highlight: 'And every morning, a different rule.',
  },

  intro:
    'A daily challenge numbered like a newspaper edition — the same grid for every player, everywhere, on the same day. Five variants take turns across editions, and difficulty follows the rhythm of the week: gentle on Monday, sharp at the weekend. A clear rule card appears before each variant, so the exotic ones stay open to everyone.',

  stats: [
    { value: '5', label: 'variants' },
    { value: '60', label: 'archived editions' },
    { value: '1', label: 'grid a day' },
    { value: '0', label: 'account needed' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'The rotation',
      title: 'Five ways to fill a grid',
      body: 'A rule card appears before each variant: nothing is assumed known.',
      items: [
        { title: 'Edition 1 · Classic', body: 'The sudoku you already know.' },
        { title: 'Edition 2 · Sudoku X', body: 'The diagonals count too.' },
        { title: 'Edition 3 · Killer', body: 'Cages that add up.' },
        { title: 'Edition 4 · Irregular', body: 'Regions with free-form shapes.' },
        { title: 'Edition 5 · Thermometer', body: 'Digits that grow along the tube.' },
      ],
    },
    {
      id: 'features',
      kicker: 'What brings you back',
      title: 'An appointment, not a pile of grids',
      items: [
        {
          title: 'The stamp book',
          body: 'One ink stamp per solved challenge on the month’s calendar. It is the gaps that make you come back.',
        },
        {
          title: 'Ranks',
          body: 'From Apprentice to Editor-in-chief — they never go back down, not even the day the streak breaks.',
        },
        {
          title: 'The archive',
          body: 'The last 60 editions stay open. A missed day is never lost.',
        },
        {
          title: 'Emoji sharing',
          body: 'A one-tap summary of your run, to share wherever you like — without spoiling anything.',
        },
        {
          title: 'Free play',
          body: 'Every variant in three difficulties, with time records, pencil notes, undo and counted hints.',
        },
        {
          title: 'Comfort',
          body: 'Autosave, dark mode, hardware keyboard support, careful VoiceOver cell by cell.',
        },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'Front page',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account to create, nothing to configure',
      body: 'Grids are generated on your device and a game can be played with no connection at all. Your stamp book, your ranks and your records stay with you.',
    },
  ],

  cta: {
    title: 'The first edition is coming',
    body: 'Le Sudoku du jour arrives soon on the App Store. Until then, our other logic games are waiting.',
  },

  meta: {
    title: 'Le Sudoku du jour — a different rule every day',
    description:
      'A daily sudoku challenge whose variant changes each day: classic, X, killer, irregular, thermometer. Stamp book, ranks, archive — no account, playable offline.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
