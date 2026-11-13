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
    'La plupart des solitaires du marché coupent chaque partie par trente secondes de publicité. Celui-ci ne coupe jamais une partie : une annonce entre deux, jamais pendant, jamais sur la donne du jour, et aucune bannière sur le plateau. Le jeu est gratuit et entier, et chaque donne du Solitaire comme du Spider 1 ou 2 familles a été résolue avant vous.',

  stats: [
    { value: '0', label: 'bannière' },
    { value: '2', label: 'jeux : Klondike & Spider' },
    { value: '5', label: 'niveaux, du Solitaire 1 carte au Spider 4 familles' },
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
          body: 'Les deux jeux, les cinq niveaux, la donne du jour et les quatre thèmes dès le premier lancement. Aucune vie à attendre, aucun niveau à débloquer, aucune monnaie à collectionner.',
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
          title: 'Des donnes gagnables',
          body: 'Chaque donne du Solitaire et du Spider 1 ou 2 familles a été résolue à l’avance : vous ne perdez plus une demi-heure sur une distribution sans solution. Le Spider 4 familles, lui, distribue au hasard, comme le veut la tradition.',
        },
        {
          title: 'Nouveau : Spider 2 familles',
          body: 'Le palier qui manquait entre le Spider d’une seule couleur et le redoutable 4 familles, avec ses donnes résolues et son par.',
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
          title: 'Vos progrès en détail',
          body: 'Statistiques par jeu et par difficulté : victoires, séries, records de temps et de score, et vos parties face au par.',
        },
        {
          title: 'Partagez votre victoire',
          body: 'Une image soignée de votre partie gagnée — coups, écart au par, temps et code de défi — à envoyer à qui vous voulez.',
        },
        {
          title: 'Une table vivante',
          body: 'Sons de cartes et vibrations réglables, double tap pour monter une carte, cascade de cartes à la victoire, et un guide pour votre première partie.',
        },
        {
          title: 'Confortable pour tous',
          body: 'Jeu à quatre couleurs pour les daltoniens, mode une main, cartes décrites à VoiceOver, quatre thèmes.',
        },
      ],
    },
    {
      id: 'rules',
      kicker: 'L’idée centrale',
      title: 'Jouez contre la meilleure solution, pas contre le hasard',
      body: 'Un solveur a résolu chaque donne du catalogue avant vous. Le nombre de coups de sa solution s’affiche pendant la partie : c’est le par, comme au golf. Finir en dessous est possible — le solveur trouve une très bonne solution, pas nécessairement la meilleure.',
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
      body: 'Pas de compte, pas de serveur de jeu : vos parties et vos statistiques restent sur l’appareil. Seules la publicité et une mesure d’audience anonyme communiquent : vous décidez de la première au premier lancement — l’achat « Sans publicité » y met fin pour de bon — et la seconde se coupe dans les réglages. Les rappels, si vous les acceptez, sont programmés par l’appareil, sans serveur.',
    },
  ],

  cta: {
    title: 'Disponible sur l’App Store et Google Play',
    body: 'Talon se télécharge gratuitement. Découvrez aussi nos autres jeux de cartes et de logique.',
  },

  meta: {
    title: 'Talon — solitaire Klondike & Spider, gratuit',
    description:
      'Un solitaire gratuit qui se joue hors ligne, sans bannière et sans coupure en pleine partie. Donnes résolues à l’avance avec leur « par », Spider 1, 2 ou 4 familles, statistiques détaillées et victoires à partager.',
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
    'Most solitaire apps interrupt every game with thirty seconds of advertising. This one never interrupts a game: one ad between two, never during, never on the daily deal, and no banner on the table. The game is free and complete, and every Klondike and 1- or 2-suit Spider deal has been solved before you get it.',

  stats: [
    { value: '0', label: 'banners' },
    { value: '2', label: 'games: Klondike & Spider' },
    { value: '5', label: 'levels, from Klondike draw 1 to 4-suit Spider' },
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
          body: 'Both games, all five levels, the daily deal and the four themes from the first launch. No lives to wait for, no levels to unlock, no currency to collect.',
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
          title: 'Winnable deals',
          body: 'Every Klondike and 1- or 2-suit Spider deal has been solved in advance: no more half hours lost on a deal with no solution. 4-suit Spider deals at random, as tradition demands.',
        },
        {
          title: 'New: 2-suit Spider',
          body: 'The missing step between one-colour Spider and the fearsome 4 suits, with solved deals and its own par.',
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
          title: 'Your progress in detail',
          body: 'Statistics by game and difficulty: wins, streaks, best times and scores, and how you fare against the par.',
        },
        {
          title: 'Share your win',
          body: 'A polished image of your winning game — moves, distance to par, time and challenge code — to send to anyone.',
        },
        {
          title: 'A living table',
          body: 'Card sounds and adjustable vibrations, double-tap to send a card up, a card cascade when you win, and a guide for your first game.',
        },
        {
          title: 'Comfortable for everyone',
          body: 'Four-colour deck for colour-blind players, one-handed mode, cards described to VoiceOver, four themes.',
        },
      ],
    },
    {
      id: 'rules',
      kicker: 'The core idea',
      title: 'Play against the best solution, not against chance',
      body: 'A solver cracked every deal in the catalogue before you did. The move count of its solution is shown during play: that is the par, as in golf. Finishing under it is possible — the solver finds a very good solution, not necessarily the best one.',
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
      body: 'No account, no game server: your games and statistics stay on the device. Only advertising and anonymous analytics communicate: you decide about the former on first launch — the “Remove ads” purchase ends it for good — and the latter can be turned off in the settings. Reminders, if you accept them, are scheduled by the device, with no server.',
    },
  ],

  cta: {
    title: 'Available on the App Store and Google Play',
    body: 'Talon is a free download. Have a look at our other card and logic games too.',
  },

  meta: {
    title: 'Talon — Klondike & Spider solitaire, free',
    description:
      'A free solitaire that plays offline, with no banners and no interruption mid-game. Deals solved in advance with their “par”, 1-, 2- or 4-suit Spider, detailed statistics and wins to share.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
