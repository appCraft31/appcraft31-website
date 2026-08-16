import type { AppCopy, Lang } from '@/lib/types';

/** Textes repris de l'ancienne page `apps/randompix.html`. */
const fr: AppCopy = {
  tagline: 'Party game · 2 à 10 joueurs · iPhone',

  headline: {
    lead: 'Devine',
    highlight: 'à qui est la photo.',
  },

  intro:
    'Le party game qui pioche dans VOS souvenirs. Chacun ajoute quelques photos au hasard de sa galerie, et tout le monde devine à qui elles appartiennent. Fous rires garantis.',

  stats: [
    { value: '2 → 10', label: 'joueurs' },
    { value: '10 s', label: 'pour deviner' },
    { value: '1000', label: 'points maximum' },
    { value: '6', label: 'chiffres pour le code' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Comment ça marche',
      title: 'Un jeu fait pour les soirées',
      body: 'Autour d’une table ou à distance, il suffit d’un iPhone chacun. Crée un salon, partage le code à six chiffres, et c’est parti.',
      items: [
        {
          title: '1 · Crée un salon',
          body: 'L’hôte crée une partie et partage le code à six chiffres avec ses amis.',
        },
        {
          title: '2 · Choisissez vos photos',
          body: 'Chacun valide quelques photos piochées au hasard dans sa galerie. Rien ne part sans votre accord.',
        },
        {
          title: '3 · Devinez et marquez',
          body: '5, 10 ou 15 manches. Une photo, quatre noms : plus tu réponds vite, plus tu marques.',
        },
        {
          title: 'Combos ×2',
          body: 'Enchaîne les bonnes réponses pour déclencher un combo qui double ton score.',
        },
        {
          title: 'Réactions emoji',
          body: 'Balance des emojis en pleine partie pour chambrer tes potes en temps réel.',
        },
        {
          title: 'Confettis & podium',
          body: 'Fin de manche dès que tout le monde a voté, confettis pour le gagnant, podium animé.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Des photos éphémères',
      body: 'Aucun compte, aucune inscription. Vos photos sont chiffrées le temps d’une partie, puis supprimées automatiquement — elles ne servent qu’à la manche en cours.',
    },
  ],

  cta: {
    title: 'Il faut être au moins deux',
    body: 'randompix est disponible gratuitement sur l’App Store.',
  },

  meta: {
    title: 'randompix — devine à qui est la photo',
    description:
      'Le party game qui pioche dans vos vraies photos : de 2 à 10 joueurs, un code à six chiffres, dix secondes pour deviner, combos et podium animé. Photos éphémères et sans compte.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Party game · 2 to 10 players · iPhone',

  headline: {
    lead: 'Guess',
    highlight: 'whose photo it is.',
  },

  intro:
    'The party game that digs into YOUR memories. Everyone adds a few random photos from their gallery, and the group guesses whose they are. Laughter guaranteed.',

  stats: [
    { value: '2 → 10', label: 'players' },
    { value: '10 s', label: 'to guess' },
    { value: '1000', label: 'points max' },
    { value: '6', label: 'digits in the code' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'How it works',
      title: 'A game built for evenings',
      body: 'Around a table or far apart, all it takes is one iPhone each. Create a room, share the six-digit code, and off you go.',
      items: [
        {
          title: '1 · Create a room',
          body: 'The host starts a game and shares the six-digit code with their friends.',
        },
        {
          title: '2 · Pick your photos',
          body: 'Everyone approves a few photos drawn at random from their gallery. Nothing leaves without your say-so.',
        },
        {
          title: '3 · Guess and score',
          body: '5, 10 or 15 rounds. One photo, four names: the faster you answer, the more you score.',
        },
        {
          title: 'Combos ×2',
          body: 'Chain correct answers to trigger a combo that doubles your score.',
        },
        {
          title: 'Emoji reactions',
          body: 'Throw emojis mid-game to tease your friends in real time.',
        },
        {
          title: 'Confetti & podium',
          body: 'The round ends as soon as everyone has voted, with confetti for the winner and an animated podium.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Photos that do not stay',
      body: 'No account, no sign-up. Your photos are encrypted for the duration of a game, then deleted automatically — they only serve the round being played.',
    },
  ],

  cta: {
    title: 'It takes at least two',
    body: 'randompix is available free on the App Store.',
  },

  meta: {
    title: 'randompix — guess whose photo it is',
    description:
      'The party game built on your real photos: 2 to 10 players, a six-digit code, ten seconds to guess, combos and an animated podium. Ephemeral photos, no account.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
