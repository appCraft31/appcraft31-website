import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la version 2.0 (13 novembre 2026) : jardin de Momo (5 chapitres de
 * 12 niveaux, `Garden.cs`), partie libre, 9 langues, iPhone et iPad ; Android
 * en examen Google (voir `soonAlso` dans `lib/apps.ts`).
 * À l'origine repris de l'ancienne page `apps/zenkuto.html`.
 * Ce slug portait une coquille : l'adresse canonique est désormais
 * `apps/zenkuro.html`. L'ancienne reste servie (voir `legacySlugs`), car elle
 * figure dans une fiche store validée.
 */
const fr: AppCopy = {
  tagline: 'Kakuro · pastel · zen · iPhone & iPad',

  headline: {
    lead: 'Le kakuro,',
    highlight: 'en douceur.',
  },

  intro:
    'Fais pousser le jardin de Momo au fil de 60 niveaux, ou joue des grilles infinies en partie libre — toujours une solution unique. Respire, réfléchis, résous.',

  stats: [
    { value: '60', label: 'niveaux au jardin' },
    { value: '∞', label: 'grilles en partie libre' },
    { value: '9', label: 'langues' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Pourquoi tu vas aimer',
      title: 'Pensé pour le calme, taillé pour l’esprit',
      items: [
        {
          title: 'Le jardin de Momo',
          body: '60 niveaux en 5 chapitres, du sentier de mousse au pavillon de thé. Chaque grille réussie fait pousser le jardin et rapporte jusqu’à 3 étoiles.',
        },
        {
          title: 'Des grilles infinies',
          body: 'En partie libre, des grilles générées à la demande, chacune avec une solution unique garantie. Jamais deux fois la même.',
        },
        {
          title: 'Un design zen',
          body: 'Palette pastel, animations douces, retours haptiques : un vrai moment de calme.',
        },
        {
          title: 'Indices, crayon & annulation',
          body: 'Un coup de pouce quand tu bloques, des notes de candidats dans chaque case, et un retour en arrière à tout moment.',
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
          title: '9 langues, hors ligne',
          body: 'Français, anglais, allemand, espagnol, italien, portugais, japonais, coréen et chinois. Jouable sans connexion, du plus doux au vrai défi.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Ce que Zenkuro enregistre',
      body: 'Ta progression, tes records et tes réglages restent sur l’appareil, et le jeu se joue hors ligne. Des statistiques d’usage anonymes et des rapports de plantage (Firebase) nous aident à l’améliorer, et la publicité respecte ton choix de consentement. Le détail figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Prends une grande inspiration',
    body: 'Ta prochaine grille t’attend. Zenkuro est disponible sur l’App Store, et bientôt sur Google Play.',
  },

  meta: {
    title: 'Zenkuro — le kakuro, en douceur',
    description:
      'Le kakuro en douceur : le jardin de Momo et ses 60 niveaux, des grilles infinies à solution unique, mode crayon, indices et records — jouable hors ligne, en 9 langues.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Kakuro · pastel · zen · iPhone & iPad',

  headline: {
    lead: 'Kakuro,',
    highlight: 'gently.',
  },

  intro:
    'Grow Momo’s garden across 60 levels, or play endless grids in free play — always with a single solution. Breathe, think, solve.',

  stats: [
    { value: '60', label: 'garden levels' },
    { value: '∞', label: 'free-play grids' },
    { value: '9', label: 'languages' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Why you will like it',
      title: 'Built for calm, cut for the mind',
      items: [
        {
          title: 'Momo’s garden',
          body: '60 levels across 5 chapters, from the moss path to the tea pavilion. Every solved grid makes the garden grow and earns up to 3 stars.',
        },
        {
          title: 'Endless grids',
          body: 'In free play, grids are generated on demand, each with a guaranteed unique solution. Never the same one twice.',
        },
        {
          title: 'A zen design',
          body: 'Pastel palette, soft animations, haptic feedback: a genuine moment of calm.',
        },
        {
          title: 'Hints, pencil & undo',
          body: 'A nudge when you are stuck, candidate notes in every cell, and undo whenever you need it.',
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
          title: '9 languages, offline',
          body: 'English, French, German, Spanish, Italian, Portuguese, Japanese, Korean and Chinese. Playable offline, from the gentlest to a real challenge.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'What Zenkuro stores',
      body: 'Your progress, records and settings stay on the device, and the game runs offline. Anonymous usage statistics and crash reports (Firebase) help us improve it, and ads respect your consent choice. Full details are in the privacy policy.',
    },
  ],

  cta: {
    title: 'Take a deep breath',
    body: 'Your next grid is waiting. Zenkuro is available on the App Store, and coming soon to Google Play.',
  },

  meta: {
    title: 'Zenkuro — kakuro, gently',
    description:
      'Kakuro, gently: Momo’s garden and its 60 levels, endless grids with a unique solution, pencil mode, hints and records — playable offline, in 9 languages.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
