import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/talon.html`.
 * L'audit des SDK confirme l'absence de régie publicitaire dans le projet
 * `~/StudioProjects/solitaire` : l'argument « zéro publicité » est exact.
 */
const fr: AppCopy = {
  tagline: 'Solitaire Klondike & Spider · sans publicité',

  headline: {
    lead: 'Le solitaire qui ne vous prend',
    highlight: 'jamais en otage.',
  },

  intro:
    'La plupart des solitaires du marché coupent chaque partie par trente secondes de publicité. Celui-ci n’en contient aucune — pas « peu » : aucune. Aucun compte, aucun réseau, et chaque donne a été résolue avant vous.',

  stats: [
    { value: '0', label: 'publicité' },
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
          title: 'Zéro publicité',
          body: 'Ni bannière, ni interstitiel, ni vidéo qui démarre avec le son alors que le téléphone est en silencieux. Aucune régie publicitaire n’est intégrée à l’application.',
        },
        {
          title: 'Entièrement hors ligne',
          body: 'Dans le métro, en avion, à la campagne. Le jeu n’a jamais besoin de réseau, parce qu’il n’envoie rien nulle part.',
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
      title: 'Rien à envoyer, donc rien d’envoyé',
      body: 'Talon fonctionne intégralement hors ligne : pas de compte, pas de serveur, pas de régie publicitaire. Vos parties et vos statistiques restent sur l’appareil.',
    },
  ],

  cta: {
    title: 'Bientôt sur l’App Store et Google Play',
    body: 'Talon arrive prochainement. En attendant, découvrez nos autres jeux de cartes et de logique.',
  },

  meta: {
    title: 'Talon — solitaire Klondike & Spider, sans publicité',
    description:
      'Un solitaire sans aucune publicité et entièrement hors ligne. Chaque donne est gagnable et affiche son « par », le nombre de coups de la meilleure solution connue.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Klondike & Spider solitaire · no ads',

  headline: {
    lead: 'The solitaire that never',
    highlight: 'holds you hostage.',
  },

  intro:
    'Most solitaire apps interrupt every game with thirty seconds of advertising. This one contains none — not “few”: none. No account, no network, and every deal has been solved before you get it.',

  stats: [
    { value: '0', label: 'ads' },
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
          title: 'Zero ads',
          body: 'No banner, no interstitial, no video that starts with sound while the phone is on silent. No ad network is built into the app at all.',
        },
        {
          title: 'Fully offline',
          body: 'On the underground, on a plane, in the countryside. The game never needs a network, because it never sends anything anywhere.',
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
      title: 'Nothing to send, so nothing is sent',
      body: 'Talon runs entirely offline: no account, no server, no ad network. Your games and statistics stay on the device.',
    },
  ],

  cta: {
    title: 'Coming soon to the App Store and Google Play',
    body: 'Talon arrives shortly. In the meantime, have a look at our other card and logic games.',
  },

  meta: {
    title: 'Talon — Klondike & Spider solitaire, without ads',
    description:
      'A solitaire with no advertising at all, fully offline. Every deal is winnable and shows its “par”: the move count of the best known solution.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
