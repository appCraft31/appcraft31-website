import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page tenGO, revus pour la version 4.0 (Unity) le 12 novembre 2026.
 * Barème : `Core/Grid/Scoring.cs` ; bonus de grille vide : `GameRules.WinBonus` ;
 * modes, fleurs et duels : `strings.json` du jeu.
 */
const fr: AppCopy = {
  tagline: 'Puzzle de bulles · iPhone et Android',

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
    { value: '4', label: 'modes de jeu' },
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
          title: 'Les longues chaînes paient',
          body: '2 bulles = 10 points, 3 = 30, 4 = 100, 5 = 200… et 10 bulles = 1 450. Plus la chaîne est longue, plus chaque bulle vaut cher.',
        },
        {
          title: 'Perfect Clear',
          body: 'Vider entièrement la grille rapporte un bonus de +1000 points — en Rush, à chaque grille vidée. Le Graal des joueurs aguerris.',
        },
        {
          title: 'Reprise instantanée',
          body: 'Ta partie est sauvegardée automatiquement. Ferme l’app, reprends plus tard exactement où tu en étais.',
        },
        {
          title: 'Quatre façons de jouer',
          body: 'La partie classique, le Rush en 60 secondes, le Duel en 1 contre 1 sur la même grille, et 20 puzzles à résoudre.',
        },
        {
          title: 'Un défi par jour',
          body: 'Chaque jour, la même grille pour tout le monde, un classement du jour et une série à entretenir.',
        },
        {
          title: 'Fleurs de dix',
          body: 'Ta plus longue chaîne plante une graine. Quatre heures plus tard, elle éclot en fleur : fais passer une chaîne par elle pour multiplier les points.',
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
      title: 'Pas de compte à créer',
      body: 'Ta progression reste sur l’appareil. Les classements passent par Game Center ou Google Play Jeux, et les duels par une session anonyme Firebase, sans e-mail : seuls ton pseudo et tes scores y figurent. Le jeu est gratuit et financé par la publicité (Google AdMob, avec Unity Ads et Liftoff en médiation) ; Firebase Analytics mesure l’usage du jeu. Le détail figure dans la politique de confidentialité.',
    },
  ],

  cta: {
    title: 'Fais 10.',
    body: 'tenGO est disponible gratuitement sur l’App Store et Google Play, en dix langues.',
  },

  meta: {
    title: 'tenGO — puzzle de bulles, relie pour faire 10',
    description:
      'Trace un chemin dont la somme fait exactement 10 : les bulles éclatent, la grille s’effondre, les combos s’enchaînent. Rush, Duel, puzzles et défi du jour. Gratuit sur iPhone et Android, en dix langues.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Bubble puzzle · iPhone and Android',

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
    { value: '4', label: 'game modes' },
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
          title: 'Long chains pay',
          body: '2 bubbles = 10 points, 3 = 30, 4 = 100, 5 = 200… and 10 bubbles = 1,450. The longer the chain, the more each bubble is worth.',
        },
        {
          title: 'Perfect Clear',
          body: 'Emptying the grid completely earns a +1000 point bonus — in Rush, for every grid you clear. The seasoned player’s grail.',
        },
        {
          title: 'Instant resume',
          body: 'Your game is saved automatically. Close the app, come back later exactly where you left off.',
        },
        {
          title: 'Four ways to play',
          body: 'The classic game, 60-second Rush, one-on-one Duel on the same grid, and 20 puzzles to solve.',
        },
        {
          title: 'One challenge a day',
          body: 'Every day, the same grid for everyone, a daily leaderboard and a streak to keep alive.',
        },
        {
          title: 'Flowers of ten',
          body: 'Your longest chain plants a seed. Four hours later it blooms into a flower: run a chain through it to multiply the points.',
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
      title: 'No account to create',
      body: 'Your progress stays on the device. Leaderboards go through Game Center or Google Play Games, and duels through an anonymous Firebase session with no email: only your nickname and your scores appear there. The game is free and ad-funded (Google AdMob, with Unity Ads and Liftoff through mediation); Firebase Analytics measures how the game is used. The details are in the privacy policy.',
    },
  ],

  cta: {
    title: 'Make 10.',
    body: 'tenGO is available free on the App Store and Google Play, in ten languages.',
  },

  meta: {
    title: 'tenGO — bubble puzzle, link to make 10',
    description:
      'Trace a path that adds up to exactly 10: the bubbles pop, the grid collapses, the combos chain. Rush, Duel, puzzles and a daily challenge. Free on iPhone and Android, in ten languages.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
