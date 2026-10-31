import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/fioleetpoison.html`.
 *
 * Écrits le 30 octobre 2026 d'après le code de
 * `~/StudioProjects/En_developpement/sort_bottle` (Godot 4.7) : règles et
 * recettes du chaudron (`scripts/game_state.gd`, README), étoiles au nombre
 * de coups (`GameState.stars` : 3 dans les coups visés, 2 jusqu'à moitié
 * plus, 1 sinon), niveaux sans fin en chapitres de 10 et dix noms de
 * chapitre (`scripts/level_gen.gd`), obstacles et malédictions
 * (`LevelGen.FEATURE_START`), tutoriel en 5 étapes (`scripts/tutorial.gd`),
 * antidote et vidéo récompensée (`scripts/hud.gd`, `scripts/ads.gd`),
 * français et anglais (`assets/i18n/strings.csv`). Le jeu est financé par
 * AdMob, sans aucun achat intégré, et se joue hors ligne. iPhone seulement.
 */
const fr: AppCopy = {
  tagline: 'Le grimoire de l’apprentie sorcière · bientôt sur iPhone',

  headline: {
    lead: 'Des fioles en désordre, un chaudron qui bouillonne.',
    highlight: 'À vous de trier les potions.',
  },

  intro:
    'Dans le laboratoire d’une apprentie sorcière, les potions se sont mélangées. Versez-les d’une fiole à l’autre jusqu’à ce que chacune ne contienne plus qu’une couleur : quatre doses identiques, et la potion est scellée. Une couleur manque ? Le chaudron la fabrique. Du poison ? Le chaudron le purifie.',

  stats: [
    { value: '∞', label: 'niveaux, en chapitres de 10' },
    { value: '10', label: 'chapitres, de L’apprenti au Sabbat des étoiles' },
    { value: '3', label: 'recettes de chaudron' },
    { value: '3', label: 'étoiles à viser par niveau' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Le principe',
      title: 'Verser, mélanger, sceller',
      items: [
        { title: 'Versez', body: 'Touchez une fiole, puis une autre, pour y verser la potion du dessus. On ne verse que sur la même couleur, ou dans une fiole vide.' },
        { title: 'Scellez', body: 'Quatre doses identiques dans une fiole : la potion est scellée. Le niveau est réussi quand chaque fiole est vide ou scellée.' },
        { title: 'Mélangez', body: 'Touchez une potion, le chaudron, puis une autre : rouge + bleu = violet, rouge + jaune = orange, jaune + bleu = vert. Deux doses du mélange reviennent dans vos fioles, rien ne se perd.' },
        { title: 'Purifiez', body: 'Le poison ne se scelle jamais. Passez-le au chaudron avec du vert : poison + vert = deux verts.' },
        { title: 'Visez trois étoiles', body: 'Trois étoiles dans le nombre de coups visé, deux jusqu’à moitié plus, une au-delà. Annuler est gratuit, mais les coups joués restent comptés.' },
        { title: 'Apprenez en jouant', body: 'Au premier lancement, un tutoriel en cinq étapes montre tout : verser, la même couleur, le chaudron, le poison, puis une partie libre.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Du premier niveau au Grand Œuvre',
    },
    {
      id: 'features',
      kicker: 'Ce qui vous attend',
      title: 'Un laboratoire plein de surprises',
      items: [
        {
          title: 'Des niveaux sans fin',
          body: 'Chaque niveau est créé à partir de sa propre graine et vérifié par un solveur : il a toujours une solution. Ils se regroupent en chapitres de dix, qui commencent en douceur et finissent plus serrés.',
        },
        {
          title: 'Dix chapitres',
          body: 'L’apprenti, La cave du maître, Le Grand Œuvre, La tour des corbeaux, Le marais aux lucioles, La bibliothèque interdite, Le bal des citrouilles, Les cristaux de lune, La forêt hantée et Le sabbat des étoiles. Puis ils reviennent, en « cercles » : L’apprenti · cercle 2…',
        },
        {
          title: 'Des fioles capricieuses',
          body: 'Couches mystère voilées jusqu’au sommet, fiole givrée qui dégèle peu à peu, fiole fêlée qui ne tient que trois doses, sceau de cire, potions caméléon, potion instable qui déborde, fioles jumelles et toile d’araignée. Chacune est présentée par un panneau « Nouveau ! ».',
        },
        {
          title: 'Les malédictions de la nuit',
          body: 'La brume voile les potions sous le sommet pendant quelques coups ; le corbeau emporte une fiole et ne la rapporte que plus tard.',
        },
        {
          title: 'Avant l’aube',
          body: 'En fin de chapitre, terminez la recette avant que la lune ne se couche : le nombre de coups est compté.',
        },
        {
          title: 'L’antidote',
          body: 'Un antidote par niveau libère une fiole entravée : chaînes, givre, cire ou toile. Plus d’antidote ? Une vidéo facultative en rend un.',
        },
        {
          title: 'Un laboratoire dessiné',
          body: 'Étagères, bougies, lucioles, chauves-souris et pleine lune à la fenêtre ; le décor verdit quand le poison gagne et s’assombrit sous la brume.',
        },
        {
          title: 'Hors ligne, en français et en anglais',
          body: 'Le jeu se joue sans connexion, et parle français ou anglais. Les vibrations se coupent dans les paramètres.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Pas de compte',
      body: 'Votre progression reste sur l’iPhone. Le jeu se joue hors ligne : la connexion ne sert qu’aux publicités (Google AdMob). Aucun achat intégré, aucune statistique.',
    },
  ],

  cta: {
    title: 'Le chaudron chauffe',
    body: 'Fioles & Poisons arrive bientôt gratuitement sur l’App Store, pour iPhone, en français et en anglais.',
  },

  meta: {
    title: 'Fioles & Poisons — puzzle de tri de potions',
    description:
      'Un puzzle de tri de couleurs gratuit sur iPhone, dans le laboratoire d’une apprentie sorcière : versez les potions, mélangez les couleurs au chaudron, purifiez le poison et déjouez fioles givrées, caméléons et corbeau. Des niveaux sans fin, jouables hors ligne.',
  },

  chips: [],

  schema: {
    alternateName: ['Fioles & Poisons – Water Sort'],
  },
};

const en: AppCopy = {
  tagline: 'The apprentice witch’s grimoire · coming soon to iPhone',

  headline: {
    lead: 'Messy flasks, a bubbling cauldron.',
    highlight: 'Time to sort the potions.',
  },

  intro:
    'In an apprentice witch’s laboratory, the potions have got mixed up. Pour them from one flask to another until each holds a single color: four identical doses, and the potion is sealed. A color missing? The cauldron brews it. Poison? The cauldron purifies it.',

  stats: [
    { value: '∞', label: 'levels, in chapters of 10' },
    { value: '10', label: 'chapters, from The Apprentice to The Star Sabbath' },
    { value: '3', label: 'cauldron recipes' },
    { value: '3', label: 'stars to aim for in each level' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'How it plays',
      title: 'Pour, mix, seal',
      items: [
        { title: 'Pour', body: 'Tap a flask, then another, to pour the top potion into it. You can only pour onto the same color, or into an empty flask.' },
        { title: 'Seal', body: 'Four identical doses in a flask: the potion is sealed. The level is complete when every flask is empty or sealed.' },
        { title: 'Mix', body: 'Tap a potion, the cauldron, then another: red + blue = purple, red + yellow = orange, yellow + blue = green. Two doses of the mix come back into your flasks; nothing is lost.' },
        { title: 'Purify', body: 'Poison can never be sealed. Take it to the cauldron with green: poison + green = two greens.' },
        { title: 'Aim for three stars', body: 'Three stars within the target number of moves, two with up to half as many again, one beyond. Undo is free, but moves played still count.' },
        { title: 'Learn as you play', body: 'On first launch, a five-step tutorial shows it all: pouring, same color, the cauldron, poison, then a free game.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'From the first level to the Great Work',
    },
    {
      id: 'features',
      kicker: 'What awaits you',
      title: 'A laboratory full of surprises',
      items: [
        {
          title: 'Endless levels',
          body: 'Every level is built from its own seed and checked by a solver: it always has a solution. They come in chapters of ten that start gently and end tighter.',
        },
        {
          title: 'Ten chapters',
          body: 'The Apprentice, The Master’s Cellar, The Great Work, The Ravens’ Tower, The Firefly Marsh, The Forbidden Library, The Pumpkin Ball, The Moon Crystals, The Haunted Forest and The Star Sabbath. Then they come back, in “circles”: The Apprentice · circle 2…',
        },
        {
          title: 'Temperamental flasks',
          body: 'Mystery layers veiled until they reach the top, a frozen flask that slowly thaws, a cracked flask that only holds three doses, wax seals, chameleon potions, an unstable potion that boils over, twin flasks and spider webs. Each one is introduced by a “New!” panel.',
        },
        {
          title: 'Curses of the night',
          body: 'The mist veils the potions below the top for a few moves; the raven flies off with a flask and only brings it back later.',
        },
        {
          title: 'Before dawn',
          body: 'At the end of a chapter, finish the recipe before the moon sets: your moves are limited.',
        },
        {
          title: 'The antidote',
          body: 'One antidote per level frees a blocked flask: chains, frost, wax or web. Out of antidotes? An optional video gives you one.',
        },
        {
          title: 'A hand-drawn laboratory',
          body: 'Shelves, candles, fireflies, bats and a full moon at the window; the scene turns green as poison spreads and darkens under the mist.',
        },
        {
          title: 'Offline, in French and English',
          body: 'The game plays without a connection, in French or English. Vibrations can be turned off in the settings.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account',
      body: 'Your progress stays on your iPhone. The game plays offline: the connection is only used for ads (Google AdMob). No in-app purchases, no analytics.',
    },
  ],

  cta: {
    title: 'The cauldron is warming up',
    body: 'Fioles & Poisons is coming soon for free on the App Store, for iPhone, in French and English.',
  },

  meta: {
    title: 'Fioles & Poisons — potion sorting puzzle',
    description:
      'A free color sorting puzzle for iPhone, set in an apprentice witch’s laboratory: pour the potions, mix colors in the cauldron, purify the poison and outwit frozen flasks, chameleons and the raven. Endless levels, playable offline.',
  },

  chips: [],

  schema: {
    alternateName: ['Fioles & Poisons: Water Sort'],
  },
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
