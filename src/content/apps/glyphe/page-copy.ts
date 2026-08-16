import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/glyphe.html`, à une correction près.
 *
 * L'ancienne page annonçait « aucune pub, aucun achat pour jouer ». Le code du
 * jeu (`~/StudioProjects/glyphe/ios/GlypheMockup/Services/MonetizationConfig.swift`)
 * déclare des unités AdMob de production — bannière, interstitiel et vidéo
 * récompensée — ainsi qu'un achat non consommable « Glyphe+ » qui retire la
 * publicité. La page dit donc désormais ce que l'app fait réellement.
 */
const fr: AppCopy = {
  tagline: 'Déduction quotidienne · iPhone',

  headline: {
    lead: 'Le code du jour,',
    highlight: 'par pure déduction.',
  },

  intro:
    'Un code secret de quatre glyphes à percer en six essais. À chaque proposition, le plateau vous répond : bien placé, présent ailleurs, ou absent. Tout le monde affronte la même grille, chaque jour.',

  stats: [
    { value: '4', label: 'glyphes à trouver' },
    { value: '6', label: 'essais' },
    { value: '1', label: 'partie par jour' },
    { value: '2', label: 'thèmes' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'Comment jouer',
      title: 'Trois réponses, et rien d’autre',
      body: 'Le plateau ne vous dit jamais où vous vous trompez. Il vous dit seulement de combien.',
      items: [
        { title: 'Bien placé', body: 'Le bon glyphe, à la bonne position.' },
        { title: 'Présent', body: 'Le glyphe est dans le code, mais ailleurs.' },
        { title: 'Absent', body: 'Ce glyphe n’est pas — ou plus — dans le code.' },
      ],
    },
    {
      id: 'features',
      kicker: 'Pensé pour le confort',
      title: 'Un jeu calme et élégant',
      items: [
        {
          title: 'Une partie par jour',
          body: 'Tout le monde affronte la même grille. Revenez chaque jour et entretenez votre série.',
        },
        {
          title: 'Classement mondial',
          body: 'Comparez vos scores avec les autres joueurs, via Game Center et le classement en ligne.',
        },
        {
          title: 'Clair & sombre',
          body: 'Thèmes clair et sombre, ou suivi automatique de votre système.',
        },
        {
          title: 'Mode daltonien',
          body: 'Chaque case porte aussi un symbole distinct, pas seulement une couleur.',
        },
        {
          title: 'Hors-ligne',
          body: 'Jouable sans connexion. Le classement se synchronise quand vous le souhaitez.',
        },
        {
          title: 'Pas de chrono',
          body: 'Aucune horloge ne tourne. Vous réfléchissez le temps qu’il faut.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Gratuit, financé par la publicité',
      body: 'Glyphe est gratuit et intègre le SDK Google AdMob : bannière, interstitiel et vidéo récompensée. Une bannière de consentement s’affiche dans l’Espace économique européen, au Royaume-Uni et en Suisse, et iOS vous demande votre accord avant tout suivi publicitaire. L’achat « Glyphe+ » retire la publicité et débloque les indices illimités. Votre progression, elle, reste sur l’appareil.',
    },
  ],

  cta: {
    title: 'Le code du jour vous attend',
    body: 'Glyphe est disponible gratuitement sur l’App Store.',
  },

  meta: {
    title: 'Glyphe — le code du jour, par pure déduction',
    description:
      'Percez un code secret de quatre glyphes en six essais. Une grille par jour, la même pour tous, avec classement Game Center, mode daltonien et jeu hors connexion.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Daily deduction · iPhone',

  headline: {
    lead: 'Today’s code,',
    highlight: 'by pure deduction.',
  },

  intro:
    'A secret code of four glyphs to crack in six guesses. After each attempt the board answers: right place, somewhere else, or not there at all. Everyone faces the same grid, every day.',

  stats: [
    { value: '4', label: 'glyphs to find' },
    { value: '6', label: 'guesses' },
    { value: '1', label: 'game a day' },
    { value: '2', label: 'themes' },
  ],

  sections: [
    {
      id: 'rules',
      kicker: 'How to play',
      title: 'Three answers, and nothing else',
      body: 'The board never tells you where you are wrong. Only by how much.',
      items: [
        { title: 'Right place', body: 'The right glyph, in the right position.' },
        { title: 'Present', body: 'The glyph is in the code, but elsewhere.' },
        { title: 'Absent', body: 'That glyph is not — or no longer — in the code.' },
      ],
    },
    {
      id: 'features',
      kicker: 'Built for comfort',
      title: 'A calm, elegant game',
      items: [
        {
          title: 'One game a day',
          body: 'Everyone faces the same grid. Come back each day and keep your streak alive.',
        },
        {
          title: 'Global leaderboard',
          body: 'Compare your scores with other players, through Game Center and the online leaderboard.',
        },
        { title: 'Light & dark', body: 'Light and dark themes, or automatic system following.' },
        {
          title: 'Colour-blind mode',
          body: 'Every cell also carries a distinct symbol, not just a colour.',
        },
        {
          title: 'Offline',
          body: 'Playable with no connection. The leaderboard syncs whenever you want.',
        },
        { title: 'No timer', body: 'No clock is running. Think for as long as you need.' },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Free, funded by advertising',
      body: 'Glyphe is free and includes the Google AdMob SDK: banner, interstitial and rewarded video. A consent banner is shown in the European Economic Area, the United Kingdom and Switzerland, and iOS asks for your permission before any ad tracking. The “Glyphe+” purchase removes advertising and unlocks unlimited hints. Your progress stays on the device.',
    },
  ],

  cta: {
    title: 'Today’s code is waiting',
    body: 'Glyphe is available free on the App Store.',
  },

  meta: {
    title: 'Glyphe — today’s code, by pure deduction',
    description:
      'Crack a secret four-glyph code in six guesses. One grid a day, the same for everyone, with a Game Center leaderboard, colour-blind mode and offline play.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
