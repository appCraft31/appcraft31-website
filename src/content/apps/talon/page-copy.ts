import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/talon.html`.
 *
 * Réécrits le 17 août 2026 : Talon était vendue 1,99 € et la page promettait
 * « zéro publicité ». Le jeu est désormais gratuit et financé par AdMob, avec un
 * achat qui retire les annonces. L'audit des SDK
 * (`~/StudioProjects/solitaire/pubspec.yaml`) fait foi, et il liste maintenant
 * `google_mobile_ads` et `in_app_purchase` : la page devait suivre, sous peine
 * de mentir à l'endroit exact où les stores exigent la vérité.
 */
const fr: AppCopy = {
  tagline: 'Solitaire Klondike & Spider · gratuit',

  headline: {
    lead: 'Le solitaire qui ne vous prend',
    highlight: 'jamais en otage.',
  },

  intro:
    'La plupart des solitaires du marché coupent chaque partie par trente secondes de publicité. Celui-ci ne coupe jamais une partie : une annonce entre deux, jamais pendant, jamais sur la donne du jour, et aucune bannière sur le plateau. Le jeu est gratuit et entier, et chaque donne a été résolue avant vous.',

  stats: [
    { value: '0', label: 'bannière' },
    { value: '2', label: 'jeux : Klondike & Spider' },
    { value: '100 %', label: 'donnes gagnables' },
    { value: '1', label: 'donne du jour' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Ce qui change',
      title: 'Un jeu de cartes qui respecte votre temps',
      items: [
        {
          title: 'Gratuit, et entier',
          body: 'Les deux jeux, les cinq niveaux, la donne du jour et les trois thèmes dès le premier lancement. Aucune vie à attendre, aucun niveau à débloquer, aucune monnaie à collectionner.',
        },
        {
          title: 'Une publicité qui se tient',
          body: 'Une annonce entre deux parties, jamais pendant, jamais sur la donne du jour, et aucune bannière sur le plateau. Un achat unique les retire définitivement.',
        },
        {
          title: 'Le jeu reste hors ligne',
          body: 'Dans le métro, en avion, à la campagne. Les donnes, la donne du jour et les codes de défi sont calculés sur l’appareil : seule la publicité a besoin du réseau, et son absence n’empêche jamais de jouer.',
        },
        {
          title: 'Toujours gagnable',
          body: 'Chaque donne a été résolue à l’avance. Vous ne perdez plus une demi-heure sur une distribution qui n’avait aucune solution.',
        },
        {
          title: 'La donne du jour',
          body: 'Une distribution quotidienne, strictement identique pour tous les joueurs, où qu’ils soient. Sans compte et sans serveur.',
        },
        {
          title: 'Défis par code',
          body: 'Chaque partie porte un code court. Envoyez-le et votre adversaire joue exactement la même donne que vous.',
        },
        {
          title: 'Confortable pour tous',
          body: 'Jeu à quatre couleurs pour les daltoniens, mode une main, cartes décrites à VoiceOver, trois thèmes.',
        },
      ],
    },
    {
      id: 'rules',
      kicker: 'L’idée centrale',
      title: 'Jouez contre la meilleure solution, pas contre le hasard',
      body: 'Un solveur a résolu chaque donne avant vous. Le nombre de coups de sa solution s’affiche pendant la partie : c’est le par, comme au golf. Finir en dessous est possible — le solveur trouve une très bonne solution, pas nécessairement la meilleure.',
      items: [
        { title: 'Le par', body: 'Le nombre de coups de la solution trouvée par le solveur.' },
        { title: 'Vos coups', body: 'Comptés en direct, affichés à côté du par.' },
        { title: 'Sous le par', body: 'Le moment où le solitaire cesse d’être un passe-temps.' },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'À la table',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Le jeu ne demande rien, la régie se déclare',
      body: 'Pas de compte, pas de serveur de jeu : vos parties et vos statistiques restent sur l’appareil. Seule la publicité communique, et vous en décidez au premier lancement — l’achat « Sans publicité » y met fin pour de bon.',
    },
  ],

  cta: {
    title: 'Bientôt sur l’App Store et Google Play',
    body: 'Talon arrive prochainement. En attendant, découvrez nos autres jeux de cartes et de logique.',
  },

  meta: {
    title: 'Talon — solitaire Klondike & Spider, gratuit',
    description:
      'Un solitaire gratuit qui se joue hors ligne, sans bannière et sans coupure en pleine partie. Chaque donne est gagnable et affiche son « par », le nombre de coups de la meilleure solution connue.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Klondike & Spider solitaire · free',

  headline: {
    lead: 'The solitaire that never',
    highlight: 'holds you hostage.',
  },

  intro:
    'Most solitaire apps interrupt every game with thirty seconds of advertising. This one never interrupts a game: one ad between two, never during, never on the daily deal, and no banner on the table. The game is free and complete, and every deal has been solved before you get it.',

  stats: [
    { value: '0', label: 'banners' },
    { value: '2', label: 'games: Klondike & Spider' },
    { value: '100%', label: 'winnable deals' },
    { value: '1', label: 'daily deal' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'What changes',
      title: 'A card game that respects your time',
      items: [
        {
          title: 'Free, and complete',
          body: 'Both games, all five levels, the daily deal and the three themes from the first launch. No lives to wait for, no levels to unlock, no currency to collect.',
        },
        {
          title: 'Advertising that behaves',
          body: 'One ad between two games, never during play, never on the daily deal, and no banner on the table. A single purchase removes them for good.',
        },
        {
          title: 'The game stays offline',
          body: 'On the underground, on a plane, in the countryside. Deals, the daily deal and challenge codes are computed on the device: only advertising needs a network, and its absence never stops you playing.',
        },
        {
          title: 'Always winnable',
          body: 'Every deal has been solved in advance. No more half hours lost on a distribution that had no solution.',
        },
        {
          title: 'The daily deal',
          body: 'One deal a day, strictly identical for every player, wherever they are. No account and no server.',
        },
        {
          title: 'Challenges by code',
          body: 'Every game carries a short code. Send it, and your opponent plays exactly the deal you played.',
        },
        {
          title: 'Comfortable for everyone',
          body: 'Four-colour deck for colour-blind players, one-handed mode, cards described to VoiceOver, three themes.',
        },
      ],
    },
    {
      id: 'rules',
      kicker: 'The core idea',
      title: 'Play against the best solution, not against chance',
      body: 'A solver cracked every deal before you did. The move count of its solution is shown during play: that is the par, as in golf. Finishing under it is possible — the solver finds a very good solution, not necessarily the best one.',
      items: [
        { title: 'The par', body: 'The move count of the solution found by the solver.' },
        { title: 'Your moves', body: 'Counted live, shown next to the par.' },
        { title: 'Under par', body: 'The moment solitaire stops being a pastime.' },
      ],
    },
    {
      id: 'gallery-stack',
      title: 'At the table',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'The game asks for nothing, the ad network declares itself',
      body: 'No account, no game server: your games and statistics stay on the device. Only advertising communicates, and you decide about it on first launch — the “Remove ads” purchase ends it for good.',
    },
  ],

  cta: {
    title: 'Coming soon to the App Store and Google Play',
    body: 'Talon arrives shortly. In the meantime, have a look at our other card and logic games.',
  },

  meta: {
    title: 'Talon — Klondike & Spider solitaire, free',
    description:
      'A free solitaire that plays offline, with no banners and no interruption mid-game. Every deal is winnable and shows its “par”: the move count of the best known solution.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
