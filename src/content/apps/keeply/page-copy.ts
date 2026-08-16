import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/keeply.html`, qui était déjà bilingue. */
const fr: AppCopy = {
  tagline: 'Tri photo · iPhone, iOS 16+',

  headline: {
    lead: 'Votre photothèque,',
    highlight: 'enfin respirable.',
  },

  intro:
    'Balayez, gardez, libérez. Keeply transforme des milliers de photos en missions courtes et rassurantes — doublons, similaires, captures d’écran, vidéos lourdes — avec l’espace récupérable visible avant chaque décision.',

  stats: [
    { value: '100 %', label: 'sur l’appareil' },
    { value: '5', label: 'types de missions' },
    { value: '30 j', label: 'de corbeille' },
    { value: 'iOS 16+', label: 'iPhone' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Pourquoi ça marche',
      title: 'Des missions, pas une montagne',
      body: 'Personne ne trie huit mille photos d’un coup. Keeply découpe le problème en séances courtes, chacune avec un gain annoncé à l’avance.',
      items: [
        {
          title: '01 · Balayer pour garder ou supprimer',
          body: 'Une photo à la fois, plein écran si vous voulez, zoom pour vérifier. Un geste, une décision — et « Annuler » si vous changez d’avis.',
        },
        {
          title: '02 · Missions intelligentes',
          body: 'Doublons exacts, photos similaires (on garde la plus nette), captures d’écran, rafales, vidéos lourdes. L’espace récupérable est affiché avant de commencer.',
        },
        {
          title: '03 · Corbeille de sécurité',
          body: 'Rien ne part définitivement sur un geste. Les photos écartées attendent dans une corbeille, le temps que vous confirmiez.',
        },
        {
          title: 'Export libre',
          body: 'Vos photos vous appartiennent : rien n’enferme votre photothèque dans l’application.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'En main',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Vos photos ne quittent jamais l’appareil',
      body: 'Keeply travaille entièrement en local : aucune photo n’est envoyée sur un serveur, et l’application n’a besoin d’aucune connexion pour analyser votre photothèque. Aucune régie publicitaire n’est intégrée.',
    },
  ],

  cta: {
    title: 'Reprenez de la place',
    body: 'Keeply est disponible sur l’App Store, pour iPhone sous iOS 16 ou plus récent.',
  },

  meta: {
    title: 'Keeply — le tri photo sans stress sur iPhone',
    description:
      'Des milliers de photos transformées en missions courtes : doublons, similaires, captures d’écran, vidéos lourdes. Espace récupérable annoncé, corbeille de sécurité, 100 % sur l’appareil.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Photo cleanup · iPhone, iOS 16+',

  headline: {
    lead: 'Your photo library,',
    highlight: 'finally breathing.',
  },

  intro:
    'Swipe, keep, free up space. Keeply turns thousands of photos into short, reassuring missions — duplicates, similar shots, screenshots, heavy videos — with the reclaimable space visible before every decision.',

  stats: [
    { value: '100%', label: 'on-device' },
    { value: '5', label: 'mission types' },
    { value: '30 d', label: 'safety trash' },
    { value: 'iOS 16+', label: 'iPhone' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Why it works',
      title: 'Missions, not a mountain',
      body: 'Nobody sorts eight thousand photos in one sitting. Keeply cuts the problem into short sessions, each with its payoff announced up front.',
      items: [
        {
          title: '01 · Keep / delete swipes',
          body: 'One photo at a time, fullscreen if you like, pinch to zoom before deciding. One gesture, one decision — and “Undo” if you change your mind.',
        },
        {
          title: '02 · Smart missions',
          body: 'Exact duplicates, similar shots (we keep the sharpest), screenshots, bursts, heavy videos. The reclaimable space is shown before you start.',
        },
        {
          title: '03 · Safety trash',
          body: 'Nothing is gone for good on a single gesture. Discarded photos wait in a trash bin until you confirm.',
        },
        {
          title: 'Free export',
          body: 'Your photos are yours: nothing locks your library inside the app.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'In your hand',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Your photos never leave the device',
      body: 'Keeply works entirely locally: no photo is ever sent to a server, and the app needs no connection at all to analyse your library. No ad network is included.',
    },
  ],

  cta: {
    title: 'Get your space back',
    body: 'Keeply is available on the App Store, for iPhone running iOS 16 or later.',
  },

  meta: {
    title: 'Keeply — photo cleanup without the stress on iPhone',
    description:
      'Thousands of photos turned into short missions: duplicates, similar shots, screenshots, heavy videos. Reclaimable space announced, safety trash, 100% on-device.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
