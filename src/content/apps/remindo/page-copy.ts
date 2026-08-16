import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/remindo.html`. */
const fr: AppCopy = {
  tagline: 'Pense-bête & second cerveau · iOS et Android',

  headline: {
    lead: 'Ta tête est pleine ?',
    highlight: 'Passe-moi tout, je m’en occupe.',
  },

  intro:
    'Remindo est un pense-bête qui ne demande rien : ni compte, ni configuration. On l’ouvre, on écrit, c’est réglé. Cortex — le petit cerveau rose qui vit dedans — garde ce qu’on lui confie et le remet sous les yeux au bon moment.',

  stats: [
    { value: '15', label: 'langues' },
    { value: '0', label: 'compte' },
    { value: '0', label: 'cloud' },
    { value: '4', label: 'formes de mémo' },
  ],

  sections: [
    {
      id: 'features',
      kicker: 'Le principe',
      title: 'Une note, un rappel, une routine, un objectif — le même geste',
      items: [
        {
          title: 'Des notes qui restent lisibles',
          body: 'Gras, italique, puces et petits encadrés. De quoi tenir une liste de courses ou des idées cadeaux sans que ça parte en vrac.',
        },
        {
          title: 'Des rappels au bon moment',
          body: 'Un jour, une heure, et Cortex fait signe. Le mode « heure exacte » est proposé mais reste facultatif : par défaut, rien ne réveille l’appareil pour rien.',
        },
        {
          title: 'Des routines en pilote automatique',
          body: 'Tous les jours ou chaque semaine. Elles reviennent seules, il ne reste qu’à cocher — et la case se remet à zéro d’elle-même le lendemain.',
        },
        {
          title: 'Des objectifs qui avancent',
          body: '30 pompes, 8 verres d’eau, 20 pages. On fixe un nombre, on ajoute sa progression au fil de la journée, et la barre se remplit.',
        },
        {
          title: 'Des relances, mais discrètes',
          body: 'Un point d’étape le midi, un coup de pouce le soir, aux horaires qu’on choisit. Dès qu’il ne reste rien à faire, Cortex se tait.',
        },
        {
          title: 'Widget et note express',
          body: 'Sa journée sur l’écran d’accueil, et un bouton dans les réglages rapides pour noter une idée en deux secondes.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'À quoi ça ressemble',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Vos notes ne sortent pas de votre téléphone',
      body: 'Remindo n’a ni compte, ni cloud, ni publicité. Vos notes vivent dans une base de données locale et ne sont jamais envoyées nulle part — l’application fonctionne intégralement sans réseau. Seules des statistiques d’usage anonymes et les rapports de plantage remontent, pour corriger les bugs, et vous pouvez les couper dans les réglages.',
    },
  ],

  cta: {
    title: 'Bientôt disponible',
    body: 'Remindo arrive sur iOS et Android, en quinze langues.',
  },

  meta: {
    title: 'Remindo — ton second cerveau tout doux',
    description:
      'Notes, rappels datés, routines et objectifs chiffrés dans une seule app, sans compte ni cloud. Vos notes restent sur le téléphone et l’app fonctionne sans réseau.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Memo & second brain · iOS and Android',

  headline: {
    lead: 'Head full?',
    highlight: 'Hand it over, I’ll keep it.',
  },

  intro:
    'Remindo is a memo app that asks for nothing: no account, no setup. Open it, write, done. Cortex — the little pink brain living inside — keeps what you hand it and brings it back at the right moment.',

  stats: [
    { value: '15', label: 'languages' },
    { value: '0', label: 'accounts' },
    { value: '0', label: 'cloud' },
    { value: '4', label: 'kinds of memo' },
  ],

  sections: [
    {
      id: 'features',
      kicker: 'The idea',
      title: 'A note, a reminder, a routine, a goal — always the same gesture',
      items: [
        {
          title: 'Notes that stay readable',
          body: 'Bold, italic, bullets and little callouts. Enough to hold a shopping list or gift ideas without it turning to mush.',
        },
        {
          title: 'Reminders at the right moment',
          body: 'A day, a time, and Cortex nudges you. “Exact time” mode is offered but optional: by default, nothing wakes the device for nothing.',
        },
        {
          title: 'Routines on autopilot',
          body: 'Daily or weekly. They come back on their own, you just tick them off — and the box resets itself the next day.',
        },
        {
          title: 'Goals that move',
          body: '30 push-ups, 8 glasses of water, 20 pages. Set a number, add your progress through the day, and the bar fills up.',
        },
        {
          title: 'Nudges, but quiet ones',
          body: 'A midday check-in, an evening prompt, at the times you choose. As soon as nothing is left to do, Cortex goes quiet.',
        },
        {
          title: 'Widget and quick note',
          body: 'Your day on the home screen, and a button in quick settings to jot an idea in two seconds.',
        },
      ],
    },
    {
      id: 'gallery-device',
      title: 'What it looks like',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Your notes never leave your phone',
      body: 'Remindo has no account, no cloud and no advertising. Your notes live in a local database and are never sent anywhere — the app works entirely without a network. Only anonymous usage statistics and crash reports are sent, to fix bugs, and you can switch them off in settings.',
    },
  ],

  cta: {
    title: 'Coming soon',
    body: 'Remindo arrives on iOS and Android, in fifteen languages.',
  },

  meta: {
    title: 'Remindo — your gentle second brain',
    description:
      'Notes, dated reminders, routines and tracked goals in one app, with no account and no cloud. Your notes stay on the phone and the app works with no network.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
