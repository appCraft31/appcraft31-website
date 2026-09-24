import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/holdfire.html`, relus contre le code du jeu
 * (`~/StudioProjects/Hold_fire`, version 2.0) :
 *
 * - chiffres : `lib/config/balance.dart` (noyau ×3, 12 ennemis + 10 boss,
 *   5 tourelles), `lib/config/pacts.dart` (12 pactes, 3 proposés après chaque
 *   boss), `MetaModule` (17 modules) ;
 * - publicité : `lib/game/systems/ads.dart` et `turret_line_game.dart`. Un
 *   interstitiel peut s'ouvrir toutes les trois vagues, au début de la phase
 *   de construction (jeu figé, jamais en pleine vague), et un autre au retour
 *   à l'accueil — fin de partie ou abandon —, au plus une fois toutes les
 *   trois parties et jamais à moins de quatre minutes d'une autre annonce.
 *   Deux vidéos récompensées facultatives : le sursis et le doublement des
 *   fragments. L'ancienne page promettait l'absence de publicité pendant la
 *   partie : ce n'est plus vrai, elle ne le dit plus ;
 * - musique : `lib/game/systems/music.dart` (une boucle par secteur, en trois
 *   couches : construction, vague, boss).
 */
const fr: AppCopy = {
  tagline: 'Tower defense & tir manuel · iOS et Android',

  headline: {
    lead: 'Les tourelles tiennent le couloir.',
    highlight: 'Le reste, c’est vous.',
  },

  intro:
    'Un tower defense où l’on ne se contente pas de regarder. Maintenez votre doigt : le canon vise, chauffe et tire. Entre deux vagues, une fenêtre de construction s’ouvre et vous posez vos tourelles. Puis la vague suivante descend les couloirs, et il faut couvrir vous-même ce que les tourelles ne voient pas — le brouilleur qu’elles ignorent, le sprinteur trop rapide pour elles, le volant qu’aucun mortier n’accroche.',

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
          body: 'Au cœur de chaque ennemi magenta, un point blanc : c’est lui qu’il faut viser. Il encaisse trois fois plus. Un tir placé vaut dix tirs lâchés.',
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
          body: 'Gatling, mortier, DCA, tesla, missiles. Aucune ne couvre tout : c’est la ligne entière qui tient, ou personne. Chaque niveau gagné change leur silhouette.',
        },
        {
          title: 'Un pacte après chaque boss',
          body: 'Trois marchés proposés, un seul signé, et il vous suit jusqu’à la fin de la partie. Plus de dégâts contre moins de portée, de l’or contre des points de vie. Rien n’est gratuit.',
        },
        {
          title: 'Chaque partie compte',
          body: 'Les vagues atteintes rapportent des fragments, les fragments achètent des modules permanents. La partie suivante démarre plus haut.',
        },
      ],
    },
    {
      id: 'gallery-tilt',
      title: 'Cent vagues, en images',
    },
    {
      id: 'diagram',
      kicker: 'Le terrain',
      title: 'Une vague arrive. Voilà ce que vous voyez.',
      body: 'Les ennemis descendent les couloirs vers votre base. Vos tourelles tirent seules ; votre canon, lui, n’attend que vous.',
      items: [
        {
          title: 'Votre base',
          body: 'Ce qu’il faut garder debout. Un ennemi qui l’atteint vous coûte des points de vie.',
        },
        {
          title: 'Votre canon',
          body: 'Maintenez le doigt : il vise, chauffe et tire. C’est la seule arme que vous pilotez.',
        },
        {
          title: 'Vos tourelles',
          body: 'Posées entre deux vagues sur les emplacements libres, le long des couloirs. Elles tirent d’elles-mêmes, mais ne voient pas tout.',
        },
        {
          title: 'Le noyau',
          body: 'Le point blanc au cœur de l’ennemi encaisse trois fois plus. Un tir placé vaut dix tirs lâchés.',
        },
        {
          title: 'L’arrivée',
          body: 'Les vagues entrent par le haut de l’écran. Cent vagues, dix secteurs, et le Léviathan au bout.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Aucun compte à créer, rien à configurer',
      body: 'Le jeu se joue hors ligne et votre progression — record, fragments, modules, réglages — reste sur votre appareil. Hold Fire est gratuit et financé par la publicité : toutes les trois vagues, une annonce peut s’afficher au début de la phase de construction, le jeu figé — jamais au milieu d’une vague —, et une autre en revenant à l’accueil, au plus une fois toutes les trois parties. Les deux vidéos récompensées restent à votre choix : reprendre la vague où vous êtes tombé, ou doubler vos fragments en fin de partie. Regarder une annonce ne rend jamais votre canon plus fort. Des statistiques de partie et les rapports de plantage sont envoyés à Firebase (Google) pour équilibrer le jeu et corriger les erreurs.',
    },
  ],

  cta: {
    title: 'La première vague vous attend',
    body: 'La version 2.0 apporte une nouvelle identité néon, une bande-son qui suit la partie — construction, vague, boss — et des tourelles qui changent d’apparence à chaque niveau. Hold Fire est disponible sur l’App Store et Google Play, en français, anglais, espagnol, japonais et coréen.',
  },

  meta: {
    title: 'Hold Fire — tower defense et tir manuel, en cent vagues',
    description:
      'Un tower defense où c’est vous qui tirez : visez au doigt, posez cinq types de tourelles entre les vagues et tenez cent vagues jusqu’au Léviathan. Hors ligne, sans compte.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'Tower defense & manual fire · iOS and Android',

  headline: {
    lead: 'The turrets hold the lane.',
    highlight: 'The rest is on you.',
  },

  intro:
    'A tower defense you do not just watch. Hold your finger down: the cannon aims, heats up and fires. Between waves a build window opens and you place your turrets. Then the next wave comes down the lanes, and you have to cover what the turrets cannot see — the jammer they ignore, the runner too fast for them, the flyer no mortar will ever catch.',

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
          body: 'At the heart of every magenta enemy sits a white dot: that is what you aim for. It takes three times the damage. One placed shot is worth ten loose ones.',
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
          body: 'Gatling, mortar, anti-air, tesla, missiles. None of them covers everything: either the whole line holds, or nobody does. Every level gained changes their silhouette.',
        },
        {
          title: 'A pact after every boss',
          body: 'Three bargains on offer, one signed, and it stays with you until the end of the run. More damage for less range, gold for hit points. Nothing comes free.',
        },
        {
          title: 'Every run counts',
          body: 'Waves reached earn fragments, fragments buy permanent modules. The next run starts higher.',
        },
      ],
    },
    {
      id: 'gallery-tilt',
      title: 'A hundred waves, in pictures',
    },
    {
      id: 'diagram',
      kicker: 'The field',
      title: 'A wave is coming. Here is what you see.',
      body: 'Enemies come down the lanes towards your base. Your turrets fire on their own; your cannon is waiting for you.',
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
          body: 'Placed between waves on the free slots along the lanes. They fire by themselves, but they do not see everything.',
        },
        {
          title: 'The core',
          body: 'The white dot at the heart of the enemy takes three times the damage. One placed shot is worth ten loose ones.',
        },
        {
          title: 'The entrance',
          body: 'Waves come in from the top of the screen. A hundred waves, ten sectors, and the Leviathan at the end.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account to create, nothing to configure',
      body: 'The game runs offline and your progress — best score, fragments, modules, settings — stays on your device. Hold Fire is free and funded by advertising: every three waves, an ad may appear at the start of the build phase, with the game frozen — never in the middle of a wave — and another when you return to the home screen, at most once every three runs. The two rewarded videos are always your choice: resume the wave you fell on, or double your fragments at the end of a run. Watching an ad never makes your cannon stronger. Run statistics and crash reports are sent to Firebase (Google) to balance the game and fix errors.',
    },
  ],

  cta: {
    title: 'The first wave is waiting',
    body: 'Version 2.0 brings a new neon identity, a soundtrack that follows the run — build, wave, boss — and turrets that change their look at every level. Hold Fire is available on the App Store and Google Play, in French, English, Spanish, Japanese and Korean.',
  },

  meta: {
    title: 'Hold Fire — tower defense and manual fire, across a hundred waves',
    description:
      'A tower defense where you pull the trigger: aim with your finger, place five kinds of turrets between waves and hold a hundred waves up to the Leviathan. Offline, no account.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
