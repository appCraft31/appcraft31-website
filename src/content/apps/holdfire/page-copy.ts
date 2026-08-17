import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes repris de l'ancienne page `apps/holdfire.html`, restructurés pour le
 * nouveau gabarit. Les chiffres viennent des tables de configuration du jeu
 * (`~/StudioProjects/tir_game`) et sont repris tels quels.
 */
const fr: AppCopy = {
  tagline: 'Tower defense & tir manuel · iOS',

  headline: {
    lead: 'Les tourelles tiennent le couloir.',
    highlight: 'Le reste, c’est vous.',
  },

  intro:
    'Un tower defense où l’on ne se contente pas de regarder. Maintenez votre doigt : le canon vise, chauffe et crache. Entre deux vagues, une fenêtre de construction s’ouvre et vous posez vos tourelles. Puis la vague suivante arrive, et il faut couvrir vous-même ce que les tourelles ne voient pas — le brouilleur qu’elles ignorent, le sprinteur trop rapide pour elles, le volant qu’aucun mortier n’accroche.',

  stats: [
    { value: '100', label: 'vagues' },
    { value: '10', label: 'secteurs' },
    { value: '22', label: 'ennemis' },
    { value: '5', label: 'tourelles' },
    { value: '12', label: 'pactes' },
    { value: '17', label: 'modules' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Ce qui se joue',
      title: 'Tirer est une décision, pas un réflexe',
      body: 'Chaque vague pose une question à laquelle vos tourelles ne savent pas répondre seules.',
      items: [
        {
          title: 'Les noyaux',
          body: 'Les points faibles jaunes encaissent trois fois plus. Un tir placé vaut dix tirs lâchés.',
        },
        {
          title: 'La surchauffe',
          body: 'Le canon chauffe tant que vous tirez. Savoir s’arrêter fait partie du tir.',
        },
        {
          title: 'Dix boss',
          body: 'Un type d’ennemi inédit tous les dix niveaux, puis un boss qui pousse à l’extrême ce qu’il vient de vous apprendre. Au bout : le Léviathan.',
        },
        {
          title: 'Cinq tourelles',
          body: 'Gatling, mortier, DCA, tesla, missiles. Aucune ne couvre tout : c’est la ligne entière qui tient, ou personne.',
        },
        {
          title: 'Un pacte par partie',
          body: 'Douze marchés, un seul choisi, tenu jusqu’au bout. Plus de dégâts contre moins de portée, de l’or contre des points de vie. Rien n’est gratuit.',
        },
        {
          title: 'Chaque partie compte',
          body: 'Les vagues atteintes rapportent des fragments, les fragments achètent des modules permanents. La partie suivante démarre plus haut.',
        },
      ],
    },
    {
      id: 'diagram',
      kicker: 'Le couloir',
      title: 'Une vague arrive. Voilà ce que vous voyez.',
      body: 'Les ennemis remontent le couloir vers votre base. Vos tourelles tirent seules ; votre canon, lui, n’attend que vous.',
      items: [
        {
          title: 'Votre base',
          body: 'Ce qu’il faut garder debout. Un ennemi qui l’atteint vous coûte des points de vie.',
        },
        {
          title: 'Votre canon',
          body: 'Maintenez le doigt : il vise, chauffe et crache. C’est la seule arme que vous pilotez.',
        },
        {
          title: 'Vos tourelles',
          body: 'Posées entre deux vagues, de part et d’autre du couloir. Elles tirent d’elles-mêmes, mais ne voient pas tout.',
        },
        {
          title: 'Le noyau',
          body: 'Le point faible jaune encaisse trois fois plus. Un tir placé vaut dix tirs lâchés.',
        },
        {
          title: 'L’arrivée',
          body: 'La vague entre par la droite. Cent vagues, dix secteurs, et le Léviathan au bout.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Aucun compte à créer, rien à configurer',
      body: 'Le jeu se joue hors ligne et votre progression — record, fragments, modules, réglages — reste sur votre appareil. Le jeu est gratuit : à la fin d’une partie seulement, vous pouvez choisir de regarder une vidéo pour doubler vos fragments ou reprendre la vague où vous êtes tombé. Aucune publicité pendant la partie, et aucune ne rend votre canon plus fort.',
    },
  ],

  cta: {
    title: 'La première vague vous attend',
    body: 'Hold Fire est disponible sur l’App Store, en français, anglais, espagnol, japonais et coréen.',
  },

  meta: {
    title: 'Hold Fire — tower defense et tir manuel, en cent vagues',
    description:
      'Un tower defense où c’est vous qui tirez : visez au doigt, posez cinq types de tourelles entre les vagues et tenez cent vagues jusqu’au Léviathan. Hors ligne, sans compte.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Tower defense & manual fire · iOS',

  headline: {
    lead: 'The turrets hold the lane.',
    highlight: 'The rest is on you.',
  },

  intro:
    'A tower defense you do not just watch. Hold your finger down: the cannon aims, heats up and fires. Between waves a build window opens and you place your turrets. Then the next wave arrives, and you have to cover what the turrets cannot see — the jammer they ignore, the runner too fast for them, the flyer no mortar will ever catch.',

  stats: [
    { value: '100', label: 'waves' },
    { value: '10', label: 'sectors' },
    { value: '22', label: 'enemies' },
    { value: '5', label: 'turrets' },
    { value: '12', label: 'pacts' },
    { value: '17', label: 'modules' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'How it plays',
      title: 'Firing is a decision, not a reflex',
      body: 'Every wave asks a question your turrets cannot answer on their own.',
      items: [
        {
          title: 'Cores',
          body: 'Yellow weak points take three times the damage. One placed shot is worth ten loose ones.',
        },
        {
          title: 'Overheating',
          body: 'The cannon heats up as long as you fire. Knowing when to stop is part of shooting.',
        },
        {
          title: 'Ten bosses',
          body: 'A brand new enemy type every ten levels, then a boss that pushes to the extreme what it just taught you. At the end: the Leviathan.',
        },
        {
          title: 'Five turrets',
          body: 'Gatling, mortar, anti-air, tesla, missiles. None of them covers everything: either the whole line holds, or nobody does.',
        },
        {
          title: 'One pact per run',
          body: 'Twelve bargains, one chosen, kept to the end. More damage for less range, gold for hit points. Nothing comes free.',
        },
        {
          title: 'Every run counts',
          body: 'Waves reached earn fragments, fragments buy permanent modules. The next run starts higher.',
        },
      ],
    },
    {
      id: 'diagram',
      kicker: 'The lane',
      title: 'A wave is coming. Here is what you see.',
      body: 'Enemies push up the lane towards your base. Your turrets fire on their own; your cannon is waiting for you.',
      items: [
        {
          title: 'Your base',
          body: 'What has to stay standing. An enemy that reaches it costs you hit points.',
        },
        {
          title: 'Your cannon',
          body: 'Hold your finger down: it aims, heats up and fires. The only weapon you control.',
        },
        {
          title: 'Your turrets',
          body: 'Placed between waves, on either side of the lane. They fire by themselves, but they do not see everything.',
        },
        {
          title: 'The core',
          body: 'The yellow weak point takes three times the damage. One placed shot is worth ten loose ones.',
        },
        {
          title: 'The entrance',
          body: 'The wave comes in from the right. A hundred waves, ten sectors, and the Leviathan at the end.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account to create, nothing to configure',
      body: 'The game runs offline and your progress — best score, fragments, modules, settings — stays on your device. The game is free: only at the end of a run can you choose to watch a video to double your fragments or resume the wave you fell on. No ads during play, and none of them make your cannon stronger.',
    },
  ],

  cta: {
    title: 'The first wave is waiting',
    body: 'Hold Fire is available on the App Store, in French, English, Spanish, Japanese and Korean.',
  },

  meta: {
    title: 'Hold Fire — tower defense and manual fire, across a hundred waves',
    description:
      'A tower defense where you pull the trigger: aim with your finger, place five kinds of turrets between waves and hold a hundred waves up to the Leviathan. Offline, no account.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
