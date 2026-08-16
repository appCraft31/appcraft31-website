import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/graviwords.html`. */
const fr: AppCopy = {
  tagline: 'Puzzle de mots arcade rétro · iPhone',

  headline: {
    lead: 'Les lettres tombent.',
    highlight: 'Trace des mots, fais tout exploser.',
  },

  intro:
    'Le puzzle de mots arcade rétro. Les lettres tombent et s’empilent : trace des mots pour les faire exploser… avant que la pile ne déborde. Un jeu de mots nerveux qui mêle réflexion, physique et adrénaline arcade.',

  stats: [
    { value: '7', label: 'pouvoirs' },
    { value: '8', label: 'directions de tracé' },
    { value: '3 s', label: 'avant le game over' },
    { value: '2', label: 'langues' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Comment jouer',
      title: 'Simple à prendre en main, difficile à lâcher',
      items: [
        {
          title: '01 · Trace',
          body: 'Pose le doigt sur une lettre et glisse vers les voisines pour former un mot d’au moins deux lettres. Bleu = en cours, vert = validé, rouge = introuvable.',
        },
        {
          title: '02 · Fais exploser',
          body: 'Relâche sur un mot vert : les blocs explosent, la pile s’effondre et tu marques des points.',
        },
        {
          title: '03 · Ne déborde pas',
          body: 'Empêche la pile de franchir la ligne rouge plus de trois secondes, sinon c’est game over.',
        },
        {
          title: 'Physique des blocs',
          body: 'Les lettres tombent, glissent et s’empilent. Valide un mot, la pile s’effondre en combos.',
        },
        {
          title: 'Sept pouvoirs',
          body: 'Marteau, bombe, gel, mélange, joker, balayage, déplacement — déclenchés par une jauge d’énergie.',
        },
        {
          title: 'Classement Game Center',
          body: 'Soumets ton score et grimpe dans le classement mondial.',
        },
      ],
    },
    {
      id: 'gallery-tilt',
      title: 'En jeu',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Ce que GraviWords enregistre',
      body: 'Ta progression, tes pièces et tes pouvoirs restent sur l’appareil ; seuls les scores passent par Game Center. Le détail des SDK intégrés figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'La pile monte',
    body: 'GraviWords est disponible sur l’App Store, en français et en anglais.',
  },

  meta: {
    title: 'GraviWords — le puzzle de mots arcade rétro',
    description:
      'Les lettres tombent et s’empilent : trace des mots dans huit directions pour les faire exploser avant que la pile ne déborde. Sept pouvoirs, boutique et classement Game Center.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Retro arcade word puzzle · iPhone',

  headline: {
    lead: 'The letters are falling.',
    highlight: 'Trace words, blow it all up.',
  },

  intro:
    'The retro arcade word puzzle. Letters fall and stack up: trace words to blow them apart… before the pile overflows. A nervy word game mixing thought, physics and arcade adrenaline.',

  stats: [
    { value: '7', label: 'powers' },
    { value: '8', label: 'tracing directions' },
    { value: '3 s', label: 'before game over' },
    { value: '2', label: 'languages' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'How to play',
      title: 'Easy to pick up, hard to put down',
      items: [
        {
          title: '01 · Trace',
          body: 'Put your finger on a letter and slide to its neighbours to build a word of at least two letters. Blue = in progress, green = valid, red = not a word.',
        },
        {
          title: '02 · Blow it up',
          body: 'Release on a green word: the blocks explode, the pile collapses and you score.',
        },
        {
          title: '03 · Do not overflow',
          body: 'Keep the pile from crossing the red line for more than three seconds, or it is game over.',
        },
        {
          title: 'Block physics',
          body: 'Letters fall, slide and stack. Validate a word and the pile collapses into combos.',
        },
        {
          title: 'Seven powers',
          body: 'Hammer, bomb, freeze, shuffle, joker, sweep, move — triggered by an energy gauge.',
        },
        {
          title: 'Game Center leaderboard',
          body: 'Submit your score and climb the global leaderboard.',
        },
      ],
    },
    {
      id: 'gallery-tilt',
      title: 'In play',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'What GraviWords stores',
      body: 'Your progress, coins and powers stay on the device; only scores go through Game Center. The full list of included SDKs is in the privacy policy.',
    },
  ],

  cta: {
    title: 'The pile is rising',
    body: 'GraviWords is available on the App Store, in French and English.',
  },

  meta: {
    title: 'GraviWords — the retro arcade word puzzle',
    description:
      'Letters fall and stack up: trace words in eight directions to blow them apart before the pile overflows. Seven powers, a shop and a Game Center leaderboard.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
