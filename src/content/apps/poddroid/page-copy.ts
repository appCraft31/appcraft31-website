import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/poddroid.html`.
 * L'audit du projet `~/StudioProjects/podcast` ne trouve ni régie publicitaire,
 * ni achat intégré, ni mesure d'audience : « sans publicité, sans compte, sans
 * pistage » est exact.
 */
const fr: AppCopy = {
  tagline: 'Lecteur de podcasts · Android',

  headline: {
    lead: 'L’appli de podcast que vous allez',
    highlight: 'vraiment écouter.',
  },

  intro:
    'Recherchez, abonnez-vous et écoutez. PodDroid assemble votre journée d’écoute, vous suit au volant et respecte votre vie privée.',

  stats: [
    { value: '0', label: 'compte' },
    { value: '0', label: 'publicité' },
    { value: '0', label: 'traceur' },
    { value: '3', label: 'durées « Ma journée »' },
  ],

  sections: [
    {
      id: 'features',
      kicker: 'Fonctionnalités',
      title: 'Tout pour écouter mieux',
      body: 'Pensée pour les auditeurs réguliers comme pour les curieux, sans surcharge ni distraction.',
      items: [
        {
          title: 'Ma journée',
          body: 'Assemblez une file d’écoute taillée au temps dont vous disposez : 15 min, 30 min ou 1 h.',
        },
        {
          title: 'Flux immersif',
          body: 'Un fil vertical d’épisodes à découvrir d’un simple balayage vers le haut.',
        },
        {
          title: 'File d’attente',
          body: 'Enchaînez les épisodes sans effort : « Lire ensuite », réorganisation, lecture continue.',
        },
        {
          title: 'Minuteur de sommeil',
          body: 'Programmez l’arrêt automatique : 15, 30, 45 min, 1 h ou en fin d’épisode.',
        },
        {
          title: 'Sauter les silences',
          body: 'Gagnez du temps en supprimant les blancs, sans dénaturer la voix.',
        },
        {
          title: 'Écoute hors-ligne',
          body: 'Téléchargez vos épisodes et écoutez partout, même sans connexion.',
        },
        {
          title: 'Android Auto',
          body: 'Retrouvez vos podcasts et votre file « Ma journée » directement au volant.',
        },
        {
          title: 'Material You',
          body: 'Une interface moderne qui s’adapte aux couleurs et au thème de votre appareil.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Votre vie privée d’abord',
      body: 'Pas de compte, pas de publicité, pas de traceurs. Vos abonnements et votre progression restent sur votre appareil ; l’application ne contacte que les serveurs des podcasts auxquels vous êtes abonné.',
    },
  ],

  cta: {
    title: 'Reprenez votre écoute en main',
    body: 'PodDroid est disponible sur Google Play.',
  },

  meta: {
    title: 'PodDroid — vos podcasts, sans distraction',
    description:
      'Un lecteur de podcasts Android sans compte, sans publicité et sans pistage : file « Ma journée », flux immersif, minuteur de sommeil, écoute hors-ligne et Android Auto.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Podcast player · Android',

  headline: {
    lead: 'The podcast app you will',
    highlight: 'actually listen to.',
  },

  intro:
    'Search, subscribe and listen. PodDroid assembles your listening day, follows you on the road and respects your privacy.',

  stats: [
    { value: '0', label: 'accounts' },
    { value: '0', label: 'ads' },
    { value: '0', label: 'trackers' },
    { value: '3', label: '“My day” lengths' },
  ],

  sections: [
    {
      id: 'features',
      kicker: 'Features',
      title: 'Everything for better listening',
      body: 'Built for regular listeners and curious newcomers alike, with no clutter and no distraction.',
      items: [
        {
          title: 'My day',
          body: 'Build a queue cut to the time you actually have: 15 min, 30 min or 1 h.',
        },
        {
          title: 'Immersive feed',
          body: 'A vertical stream of episodes to discover with a single upward swipe.',
        },
        {
          title: 'Queue',
          body: 'Chain episodes effortlessly: “Play next”, reordering, continuous playback.',
        },
        {
          title: 'Sleep timer',
          body: 'Schedule the automatic stop: 15, 30, 45 min, 1 h or at the end of the episode.',
        },
        {
          title: 'Skip silences',
          body: 'Save time by removing the gaps, without distorting the voice.',
        },
        {
          title: 'Offline listening',
          body: 'Download your episodes and listen anywhere, even with no connection.',
        },
        {
          title: 'Android Auto',
          body: 'Find your podcasts and your “My day” queue right on the dashboard.',
        },
        {
          title: 'Material You',
          body: 'A modern interface that adapts to your device’s colours and theme.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Your privacy first',
      body: 'No account, no advertising, no trackers. Your subscriptions and progress stay on your device; the app only contacts the servers of the podcasts you subscribe to.',
    },
  ],

  cta: {
    title: 'Take your listening back',
    body: 'PodDroid is available on Google Play.',
  },

  meta: {
    title: 'PodDroid — your podcasts, without the distraction',
    description:
      'An Android podcast player with no account, no ads and no tracking: a “My day” queue, an immersive feed, a sleep timer, offline listening and Android Auto.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
