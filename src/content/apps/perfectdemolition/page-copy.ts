import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/perfectdemolition.html`.
 *
 * Écrits le 16 octobre 2026 d'après le code de
 * `~/StudioProjects/PerfectDemolition` (Godot 4.7, physique Jolt) :
 * 203 niveaux — 7 structures dessinées à la main, puis 28 familles en
 * 7 tailles — répartis en 14 zones de 15 (`scripts/levels.gd`), seuils
 * d'étoiles à 50, 75 et 95 %, 22 étoiles par zone franchie
 * (`scripts/game_state.gd`), 12 outils améliorables jusqu'au niveau 5
 * (`scripts/tool_defs.gd`), 14 matières (`data/pieces.json`), défi de niveau
 * et défi du jour (`Levels.challenge`, `Levels.daily`), 15 langues
 * (`scripts/loc.gd`). Le jeu est financé par AdMob, sans aucun achat
 * intégré, et se joue hors ligne.
 */
const fr: AppCopy = {
  tagline: 'Démolition en 3D, un coup après l’autre · sur iPhone et iPad',

  headline: {
    lead: 'Une tour, quelques coups.',
    highlight: 'Et tout doit tomber.',
  },

  intro:
    'Dans Perfect Demolition, chaque niveau pose une structure sur un socle : tour de briques, château de cartes, pièce montée, robot géant… Vous avez un nombre limité de coups. Choisissez l’outil, visez le point faible, et regardez la physique faire le reste : les pièces éclatent en morceaux, basculent, entraînent leurs voisines et finissent au sol.',

  stats: [
    { value: '203', label: 'niveaux dans 14 zones' },
    { value: '12', label: 'outils, du marteau au canon à chats' },
    { value: '14', label: 'matières qui réagissent différemment' },
    { value: '95 %', label: 'pour une démolition parfaite' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Le principe',
      title: 'Viser, frapper, regarder tomber',
      items: [
        { title: 'Touchez', body: 'Touchez la structure pour utiliser l’outil sélectionné ; glissez pour tourner autour d’elle.' },
        { title: 'Comptez vos coups', body: 'Chaque niveau donne un nombre de coups limité. Le marteau, lui, ne s’épuise jamais.' },
        { title: 'Faites tomber', body: 'Une pièce compte quand elle vole en éclats ou tombe du socle. Une pièce simplement renversée reste à finir.' },
        { title: 'Trois étoiles', body: '50 % détruit : niveau réussi. 75 % : deuxième étoile. 95 % : démolition parfaite, troisième étoile et trophée.' },
        { title: 'Encaissez', body: 'Dès 50 %, le bouton « Terminer » arrête la partie et transforme vos coups restants en pièces.' },
        { title: 'Améliorez', body: 'Les pièces gagnées débloquent les outils à l’atelier et les font monter jusqu’au niveau 5.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'De la première brique au trophée',
    },
    {
      id: 'features',
      kicker: 'Ce qui vous attend',
      title: 'Un chantier de démolition dans votre poche',
      items: [
        {
          title: '12 outils',
          body: 'Marteau, explosifs, aimant, boule de démolition, poule en caoutchouc, aspirateur cosmique, pluie de pianos, chatouilleur géant, canon à chats, sèche-cheveux cosmique, trampoline et nuage d’orage.',
        },
        {
          title: '14 matières',
          body: 'Pierre, brique, bois, carton, métal, verre, gâteau, glace, caoutchouc, papier, or, plastique, sucre et os. Le verre éclate au moindre choc, la glace glisse, le caoutchouc rebondit, l’or pèse une tonne.',
        },
        {
          title: 'Le bon outil',
          body: 'Chaque outil a ses matières fortes et faibles : son effet double ou se divise par deux. Chaque coup répond « EFFICACE ! » ou « RÉSISTE… », et l’atelier détaille forces et faiblesses.',
        },
        {
          title: '203 niveaux',
          body: 'Sept structures dessinées à la main, puis 28 familles en sept tailles croissantes : donjons, dominos, pyramides, gratte-ciel, maison en pain d’épices, géant de glace, temple d’or… Des caisses de TNT déclenchent des réactions en chaîne.',
        },
        {
          title: '14 zones',
          body: 'Chantier, désert, banlieue, crépuscule, banquise, volcan, Lune, puis les mêmes paysages sous une autre lumière. Chaque zone franchie demande 22 étoiles de plus.',
        },
        {
          title: 'Un défi par niveau',
          body: 'Épargner les mariés, décapiter la statue, faire sauter toute la TNT, finir en peu de coups, sans explosifs ou avec trois outils différents : une médaille et une prime en plus des étoiles.',
        },
        {
          title: 'Le défi du jour',
          body: 'Chaque jour, une structure tirée au sort et trois outils prêtés. La prime grimpe de 10 % par jour de série, jusqu’au double.',
        },
        {
          title: 'Des trophées qui comptent',
          body: 'Un trophée par niveau réussi à trois étoiles. Tous les dix trophées, chaque outil gagne une charge ; une famille complète dore son outil et le rend plus puissant.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Pas de compte, pas de mesure d’audience',
      body: 'Progression, pièces, outils, étoiles et trophées sont enregistrés sur l’appareil. Le jeu se joue entièrement hors ligne : la connexion ne sert qu’à charger les publicités (Google AdMob, avec Unity Ads et Liftoff en médiation) et leur formulaire de consentement. Aucun achat intégré, aucun outil de statistiques. Les vidéos publicitaires ne se lancent que si vous appuyez sur leur bouton.',
    },
  ],

  cta: {
    title: 'Bientôt sur l’App Store',
    body: 'Perfect Demolition arrive sur iPhone et iPad. En attendant, découvrez nos autres jeux.',
  },

  meta: {
    title: 'Perfect Demolition — jeu de démolition en 3D',
    description:
      'Un jeu de démolition en 3D gratuit sur iPhone et iPad : 203 niveaux, 12 outils, du marteau au canon à chats, et 14 matières qui réagissent chacune à leur façon. Visez le point faible et réduisez tours et châteaux en miettes.',
  },

  chips: [],

  schema: {
    alternateName: ['Perfect Demolition: Casse Tout'],
  },
};

const en: AppCopy = {
  tagline: '3D demolition, one strike at a time · on iPhone and iPad',

  headline: {
    lead: 'One tower, a few strikes.',
    highlight: 'Everything must fall.',
  },

  intro:
    'In Perfect Demolition, every level sets a structure on a platform: a brick tower, a house of cards, a wedding cake, a giant robot… You have a limited number of strikes. Pick your tool, aim for the weak spot, and let physics do the rest: pieces shatter, topple, drag their neighbours down and hit the ground.',

  stats: [
    { value: '203', label: 'levels across 14 zones' },
    { value: '12', label: 'tools, from hammer to cat cannon' },
    { value: '14', label: 'materials that react differently' },
    { value: '95%', label: 'for a perfect demolition' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'How it plays',
      title: 'Aim, strike, watch it fall',
      items: [
        { title: 'Tap', body: 'Tap the structure to use the selected tool; swipe to turn around it.' },
        { title: 'Count your strikes', body: 'Each level gives you a limited number of strikes. The hammer, though, never runs out.' },
        { title: 'Bring it down', body: 'A piece counts once it shatters or falls off the platform. A piece that is merely knocked over still needs finishing.' },
        { title: 'Three stars', body: '50% destroyed: level cleared. 75%: second star. 95%: perfect demolition, third star and a trophy.' },
        { title: 'Cash in', body: 'From 50%, the “Finish” button ends the round and turns your remaining strikes into coins.' },
        { title: 'Upgrade', body: 'The coins you earn unlock tools in the workshop and raise them up to level 5.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'From the first brick to the trophy',
    },
    {
      id: 'features',
      kicker: 'What awaits you',
      title: 'A demolition site in your pocket',
      items: [
        {
          title: '12 tools',
          body: 'Hammer, explosives, magnet, wrecking ball, rubber chicken, cosmic vacuum, piano rain, giant tickler, cat cannon, cosmic hair dryer, trampoline and storm cloud.',
        },
        {
          title: '14 materials',
          body: 'Stone, brick, wood, cardboard, metal, glass, cake, ice, rubber, paper, gold, plastic, sugar and bone. Glass shatters at the slightest knock, ice slides, rubber bounces, gold weighs a ton.',
        },
        {
          title: 'The right tool',
          body: 'Every tool has strong and weak materials: its effect doubles or is halved. Each strike answers “EFFECTIVE!” or “RESISTS…”, and the workshop lists strengths and weaknesses.',
        },
        {
          title: '203 levels',
          body: 'Seven hand-built structures, then 28 families in seven growing sizes: keeps, dominoes, pyramids, skyscrapers, a gingerbread house, an ice giant, a golden temple… TNT crates set off chain reactions.',
        },
        {
          title: '14 zones',
          body: 'Building site, desert, suburbs, dusk, pack ice, volcano, the Moon, then the same landscapes under a different light. Each zone you pass takes 22 more stars.',
        },
        {
          title: 'A challenge per level',
          body: 'Spare the bride and groom, behead the statue, blow up all the TNT, finish in few strikes, without explosives or with three different tools: a medal and a bonus on top of the stars.',
        },
        {
          title: 'The daily challenge',
          body: 'Every day, a randomly drawn structure and three loaned tools. The bonus grows by 10% for each day of your streak, up to double.',
        },
        {
          title: 'Trophies that matter',
          body: 'One trophy per level cleared with three stars. Every ten trophies, each tool gains a charge; a complete family turns its tool gold and makes it stronger.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account, no analytics',
      body: 'Progress, coins, tools, stars and trophies are stored on the device. The game plays entirely offline: the connection is only used to load ads (Google AdMob, with Unity Ads and Liftoff through mediation) and their consent form. No in-app purchases, no analytics tools. Ad videos only start if you tap their button.',
    },
  ],

  cta: {
    title: 'Coming soon to the App Store',
    body: 'Perfect Demolition is coming to iPhone and iPad. Meanwhile, discover our other games.',
  },

  meta: {
    title: 'Perfect Demolition — 3D demolition game',
    description:
      'A free 3D demolition game for iPhone and iPad: 203 levels, 12 tools from the hammer to the cat cannon, and 14 materials that each react their own way. Find the weak spot and smash towers and castles to pieces.',
  },

  chips: [],

  schema: {
    alternateName: ['Perfect Demolition: Smash 3D'],
  },
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
