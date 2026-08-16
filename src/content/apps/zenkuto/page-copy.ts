import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/zenkuto.html`.
 * Le produit s'appelle Zenkuro ; son slug d'URL, `zenkuto`, est une coquille
 * historique figée par les fiches store. On ne touche pas à l'URL.
 */
const fr: AppCopy = {
  tagline: 'Kakuro · pastel · zen · iPhone',

  headline: {
    lead: 'Le kakuro,',
    highlight: 'en douceur.',
  },

  intro:
    'Des grilles de chiffres infinies, toujours une solution unique. Respire, réfléchis, résous — accompagné de Momo.',

  stats: [
    { value: '∞', label: 'grilles générées' },
    { value: '1', label: 'solution par grille' },
    { value: '2', label: 'langues' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Pourquoi tu vas aimer',
      title: 'Pensé pour le calme, taillé pour l’esprit',
      items: [
        {
          title: 'Des grilles infinies',
          body: 'Générées aléatoirement, chacune avec une solution unique garantie. Jamais deux fois la même.',
        },
        {
          title: 'Un design zen',
          body: 'Palette pastel, animations douces, retours haptiques : un vrai moment de calme.',
        },
        {
          title: 'Indices & mode crayon',
          body: 'Un coup de pouce quand tu bloques, et des notes de candidats dans chaque case.',
        },
        {
          title: 'Momo t’accompagne',
          body: 'Une petite mascotte qui vit avec toi : elle réfléchit, elle célèbre tes victoires.',
        },
        {
          title: 'Chrono & records',
          body: 'Ton meilleur temps est gardé pour chaque difficulté. Bats-toi contre toi-même.',
        },
        {
          title: 'Français & anglais',
          body: 'Entièrement localisé, jouable hors-ligne, du plus doux au vrai défi.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Ce que Zenkuro enregistre',
      body: 'Tes records et tes réglages restent sur l’appareil, et le jeu se joue hors ligne. Le détail des SDK intégrés figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Prends une grande inspiration',
    body: 'Ta prochaine grille t’attend. Zenkuro est disponible sur l’App Store.',
  },

  meta: {
    title: 'Zenkuro — le kakuro, en douceur',
    description:
      'Des grilles de kakuro générées à l’infini, chacune avec une solution unique. Design pastel, mode crayon, indices, chrono et records — jouable hors ligne.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Kakuro · pastel · zen · iPhone',

  headline: {
    lead: 'Kakuro,',
    highlight: 'gently.',
  },

  intro:
    'Endless number grids, always with a single solution. Breathe, think, solve — with Momo by your side.',

  stats: [
    { value: '∞', label: 'generated grids' },
    { value: '1', label: 'solution per grid' },
    { value: '2', label: 'languages' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Why you will like it',
      title: 'Built for calm, cut for the mind',
      items: [
        {
          title: 'Endless grids',
          body: 'Randomly generated, each with a guaranteed unique solution. Never the same one twice.',
        },
        {
          title: 'A zen design',
          body: 'Pastel palette, soft animations, haptic feedback: a genuine moment of calm.',
        },
        {
          title: 'Hints & pencil mode',
          body: 'A nudge when you are stuck, and candidate notes in every cell.',
        },
        {
          title: 'Momo keeps you company',
          body: 'A little mascot that lives alongside you: it thinks, it celebrates your wins.',
        },
        {
          title: 'Timer & records',
          body: 'Your best time is kept for each difficulty. Compete against yourself.',
        },
        {
          title: 'French & English',
          body: 'Fully localised, playable offline, from the gentlest to a real challenge.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'What Zenkuro stores',
      body: 'Your records and settings stay on the device, and the game runs offline. The full list of included SDKs is in the privacy policy.',
    },
  ],

  cta: {
    title: 'Take a deep breath',
    body: 'Your next grid is waiting. Zenkuro is available on the App Store.',
  },

  meta: {
    title: 'Zenkuro — kakuro, gently',
    description:
      'Endlessly generated kakuro grids, each with a unique solution. Pastel design, pencil mode, hints, timer and records — playable offline.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
