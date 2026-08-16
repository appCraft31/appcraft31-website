import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/tengo.html`.
 * Le barème de score est celui affiché dans le jeu.
 */
const fr: AppCopy = {
  tagline: 'Puzzle de bulles · iPhone',

  headline: {
    lead: 'Relie les bulles,',
    highlight: 'fais 10, libère la grille.',
  },

  intro:
    'Un puzzle minimaliste et apaisant. Glisse ton doigt pour tracer un chemin dont la somme fait exactement 10 — les bulles éclatent, la grille s’effondre, les combos s’enchaînent.',

  stats: [
    { value: '10', label: 'la somme à faire' },
    { value: '+1000', label: 'bonus grille vide' },
    { value: '10', label: 'langues' },
    { value: '0', label: 'compte à créer' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Le principe en 30 secondes',
      title: 'Une règle unique, des centaines de combinaisons',
      items: [
        {
          title: '1 · Connecte',
          body: 'Glisse ton doigt d’une bulle à l’autre, en passant par les cases adjacentes — diagonales comprises.',
        },
        {
          title: '2 · Additionne',
          body: 'Les chiffres du chemin s’additionnent. Ton objectif : atteindre exactement 10. Ni plus, ni moins.',
        },
        {
          title: '3 · Libère',
          body: 'Les bulles éclatent, la grille s’effondre par gravité, de nouvelles combinaisons apparaissent. Enchaîne.',
        },
        {
          title: 'Scoring progressif',
          body: '2 bulles = 10 points. 3 bulles = 30. 4 bulles = 100. Au-delà, chaque bulle supplémentaire rapporte 50. Les longues chaînes paient.',
        },
        {
          title: 'Perfect Clear',
          body: 'Vider entièrement la grille déclenche un bonus de +1000 points. Le Graal des joueurs aguerris.',
        },
        {
          title: 'Reprise instantanée',
          body: 'Ta partie est sauvegardée automatiquement. Ferme l’app, reprends plus tard exactement où tu en étais.',
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
      title: 'Pas de compte, pas de profil',
      body: 'Tes dix meilleurs scores sont conservés sur l’appareil, avec mise en avant du record. Le jeu est gratuit et financé par la publicité : le SDK Google AdMob est intégré, et une bannière de consentement s’affiche dans l’Espace économique européen, au Royaume-Uni et en Suisse.',
    },
  ],

  cta: {
    title: 'Fais 10.',
    body: 'tenGO est disponible gratuitement sur l’App Store, en dix langues.',
  },

  meta: {
    title: 'tenGO — puzzle de bulles, relie pour faire 10',
    description:
      'Trace un chemin dont la somme fait exactement 10 : les bulles éclatent, la grille s’effondre, les combos s’enchaînent. Gratuit sur iPhone, en dix langues.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Bubble puzzle · iPhone',

  headline: {
    lead: 'Link the bubbles,',
    highlight: 'make 10, clear the grid.',
  },

  intro:
    'A minimal, soothing puzzle. Drag your finger to trace a path that adds up to exactly 10 — the bubbles pop, the grid collapses, the combos chain.',

  stats: [
    { value: '10', label: 'the sum to reach' },
    { value: '+1000', label: 'perfect clear bonus' },
    { value: '10', label: 'languages' },
    { value: '0', label: 'account to create' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'The idea in 30 seconds',
      title: 'One rule, hundreds of combinations',
      items: [
        {
          title: '1 · Connect',
          body: 'Drag your finger from bubble to bubble through adjacent cells — diagonals included.',
        },
        {
          title: '2 · Add up',
          body: 'The digits along the path add up. Your target: exactly 10. No more, no less.',
        },
        {
          title: '3 · Clear',
          body: 'The bubbles pop, the grid collapses under gravity, new combinations appear. Keep going.',
        },
        {
          title: 'Progressive scoring',
          body: '2 bubbles = 10 points. 3 bubbles = 30. 4 bubbles = 100. Beyond that, each extra bubble is worth 50. Long chains pay.',
        },
        {
          title: 'Perfect Clear',
          body: 'Emptying the grid completely triggers a +1000 point bonus. The seasoned player’s grail.',
        },
        {
          title: 'Instant resume',
          body: 'Your game is saved automatically. Close the app, come back later exactly where you left off.',
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
      title: 'No account, no profile',
      body: 'Your ten best scores are kept on the device, with the record highlighted. The game is free and ad-funded: the Google AdMob SDK is included, and a consent banner is shown in the European Economic Area, the United Kingdom and Switzerland.',
    },
  ],

  cta: {
    title: 'Make 10.',
    body: 'tenGO is available free on the App Store, in ten languages.',
  },

  meta: {
    title: 'tenGO — bubble puzzle, link to make 10',
    description:
      'Trace a path that adds up to exactly 10: the bubbles pop, the grid collapses, the combos chain. Free on iPhone, in ten languages.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
