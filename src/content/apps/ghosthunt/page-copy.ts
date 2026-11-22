import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page `apps/ghosthunt.html` (URL d'assistance et marketing de la
 * fiche App Store).
 *
 * Écrits le 22 novembre 2026 d'après `~/StudioProjects/En_developpement/GhostHunt`
 * (Unity 6) : règles et libellés (`Resources/strings.json`, 14 langues),
 * 30 niveaux en 4 difficultés (`Resources/Levels/campaign.json`), solution
 * unique et déductible (`CampaignTests`), 3 cœurs par niveau
 * (`ProgressData.MaxLives`), 3 indices au départ, +1 par vidéo et +2 par défi
 * du jour (`HintWallet`). Le jeu a des cœurs : ne pas écrire « sans vies ».
 * Le temps est mesuré, sans limite.
 */
const fr: AppCopy = {
  tagline: 'Retrouvez les fantômes cachés du jardin · bientôt',

  headline: {
    lead: 'De petits fantômes se cachent dans le jardin.',
    highlight: 'Suivez les flèches.',
  },

  intro:
    'Ghost Hunt est un jeu de logique tout doux. Des flèches vous disent où regarder, des parterres découpent le jardin : observez, déduisez, puis placez chaque fantôme. Chaque grille a une seule solution, toujours trouvable par le raisonnement.',

  stats: [
    { value: '30', label: 'niveaux' },
    { value: '4', label: 'difficultés, de Facile à Super dur' },
    { value: '3', label: 'cœurs par niveau' },
    { value: '14', label: 'langues' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'Les règles',
      title: 'Observer, déduire, placer',
      items: [
        { title: 'Suivez les flèches', body: 'Chaque flèche voit exactement un fantôme, tout droit jusqu’au bord du jardin.' },
        { title: 'Aucun fantôme oublié', body: 'Chaque fantôme est sur la ligne d’au moins une flèche. Les silhouettes en haut de l’écran disent combien il y en a.' },
        { title: 'Jamais côte à côte', body: 'Deux fantômes ne se touchent jamais, même en diagonale.' },
        { title: 'Un par parterre', body: 'À partir du niveau 5, le jardin est découpé en parterres : chacun cache exactement un fantôme.' },
        { title: 'Un geste suffit', body: 'Un toucher pose une croix, deux posent un fantôme, trois effacent.' },
        { title: 'Gardez vos cœurs', body: 'Un fantôme mal placé coûte un cœur, une croix jamais. Sans cœur, le niveau recommence.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'Un jardin à explorer',
    },
    {
      id: 'features',
      kicker: 'Au programme',
      title: 'De la logique, en douceur',
      items: [
        { title: 'Trente niveaux', body: 'Les premiers enseignent les règles, les derniers demandent de vrais enchaînements de déductions.' },
        { title: 'Un défi chaque jour', body: 'Une grille par jour, tirée d’un lot de 60. Réussie, elle rapporte deux indices.' },
        { title: 'Des indices qui expliquent', body: 'Trois indices au départ. Chacun se dévoile en trois temps et montre le raisonnement.' },
        { title: 'Pas de limite de temps', body: 'Réfléchissez autant que vous voulez. Votre temps est noté pour battre vos records, et chaque cœur gardé vaut une étoile.' },
        { title: 'Gratuit', body: 'Aucun achat intégré, ni bannière, ni interstitiel. Une vidéo publicitaire facultative rapporte un indice.' },
        { title: 'Hors connexion', body: 'Le jeu se joue sans réseau, en 14 langues. La connexion sert aux vidéos et aux statistiques de jeu.' },
      ],
    },
    {
      id: 'faq',
      kicker: 'Assistance',
      title: 'Questions fréquentes',
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Aucun compte à créer',
      body: 'Votre progression est enregistrée sur votre appareil. Le jeu utilise Google AdMob et Unity Ads pour les vidéos, et Unity Analytics pour les statistiques de jeu : la politique de confidentialité détaille ce que chacun reçoit.',
    },
  ],

  faq: [
    {
      question: 'Comment contacter l’assistance de Ghost Hunt ?',
      answer: 'Écrivez à appcraft31@gmail.com en indiquant votre appareil et, si besoin, le numéro du niveau concerné.',
    },
    {
      question: 'Comment obtenir plus d’indices ?',
      answer: 'Réussissez le défi du jour (deux indices, une fois par jour) ou, quand votre réserve est vide, regardez une vidéo facultative (un indice).',
    },
    {
      question: 'La vidéo ne se lance pas : que faire ?',
      answer: 'Vérifiez votre connexion et réessayez un peu plus tard : il arrive qu’aucune vidéo ne soit disponible. Une vidéo interrompue ne donne pas d’indice.',
    },
    {
      question: 'Que se passe-t-il quand je n’ai plus de cœur ?',
      answer: 'La grille du niveau s’efface et vous repartez avec trois cœurs. Les niveaux déjà réussis et vos étoiles sont conservés.',
    },
    {
      question: 'Comment changer de langue ?',
      answer: 'Ouvrez Paramètres depuis l’accueil, puis touchez Langue.',
    },
  ],

  cta: {
    title: 'Le jardin ouvre bientôt',
    body: 'Ghost Hunt arrive bientôt gratuitement sur l’App Store et Google Play.',
  },

  meta: {
    title: 'Ghost Hunt — puzzle de logique et assistance',
    description:
      'Un puzzle de logique tout doux : suivez les flèches et retrouvez les fantômes cachés du jardin. 30 niveaux, un défi chaque jour, des indices expliqués. Bientôt disponible.',
  },

  chips: [],

  schema: {
    alternateName: ['Ghost Hunt : Puzzle logique'],
  },
};

const en: AppCopy = {
  tagline: 'Find the ghosts hidden in the garden · coming soon',

  headline: {
    lead: 'Little ghosts are hiding in the garden.',
    highlight: 'Follow the arrows.',
  },

  intro:
    'Ghost Hunt is a cozy logic game. Arrows tell you where to look and flower beds divide up the garden: look closely, work it out, then place each ghost. Every board has a single solution, always reachable by reasoning.',

  stats: [
    { value: '30', label: 'levels' },
    { value: '4', label: 'difficulties, from easy to super hard' },
    { value: '3', label: 'hearts per level' },
    { value: '14', label: 'languages' },
  ],

  sections: [
    {
      id: 'how-it-plays',
      kicker: 'The rules',
      title: 'Look, deduce, place',
      items: [
        { title: 'Follow the arrows', body: 'Each arrow sees exactly one ghost, straight ahead to the edge of the garden.' },
        { title: 'No ghost left out', body: 'Every ghost is in line with at least one arrow. The silhouettes at the top show how many there are.' },
        { title: 'Never side by side', body: 'Two ghosts never touch, not even diagonally.' },
        { title: 'One per flower bed', body: 'From level 5 on, the garden is split into flower beds: each one hides exactly one ghost.' },
        { title: 'Just tap', body: 'One tap places a cross, two place a ghost, three clear the square.' },
        { title: 'Keep your hearts', body: 'A misplaced ghost costs a heart, a cross never does. With no hearts left, the level starts over.' },
      ],
    },
    {
      id: 'gallery-device',
      title: 'A garden to explore',
    },
    {
      id: 'features',
      kicker: 'What’s inside',
      title: 'Gentle logic',
      items: [
        { title: 'Thirty levels', body: 'The first ones teach the rules, the last ones call for real chains of deduction.' },
        { title: 'A daily challenge', body: 'One board a day, drawn from a set of 60. Solve it to earn two hints.' },
        { title: 'Hints that explain', body: 'You start with three hints. Each unfolds in three steps and shows the reasoning.' },
        { title: 'No time limit', body: 'Think for as long as you like. Your time is recorded so you can beat your records, and each heart kept earns a star.' },
        { title: 'Free', body: 'No in-app purchases, banners or interstitials. An optional video ad earns you a hint.' },
        { title: 'Offline', body: 'The game plays without a network, in 14 languages. The connection is used for videos and gameplay statistics.' },
      ],
    },
    {
      id: 'faq',
      kicker: 'Support',
      title: 'Frequently asked questions',
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'No account needed',
      body: 'Your progress is saved on your device. The game uses Google AdMob and Unity Ads for videos, and Unity Analytics for gameplay statistics: the privacy policy details what each one receives.',
    },
  ],

  faq: [
    {
      question: 'How do I contact Ghost Hunt support?',
      answer: 'Email appcraft31@gmail.com with your device and, if relevant, the level number.',
    },
    {
      question: 'How do I get more hints?',
      answer: 'Solve the daily challenge (two hints, once a day) or, when you have run out, watch an optional video (one hint).',
    },
    {
      question: 'The video will not play: what can I do?',
      answer: 'Check your connection and try again a little later: sometimes no video is available. An interrupted video gives no hint.',
    },
    {
      question: 'What happens when I run out of hearts?',
      answer: 'The level’s board is cleared and you start again with three hearts. Completed levels and your stars are kept.',
    },
    {
      question: 'How do I change the language?',
      answer: 'Open Settings from the home screen, then tap Language.',
    },
  ],

  cta: {
    title: 'The garden opens soon',
    body: 'Ghost Hunt is coming soon for free to the App Store and Google Play.',
  },

  meta: {
    title: 'Ghost Hunt — logic puzzle and support',
    description:
      'A cozy logic puzzle: follow the arrows and find the ghosts hidden in the garden. 30 levels, a daily challenge and hints that explain. Coming soon.',
  },

  chips: [],

  schema: {
    alternateName: ['Ghost Hunt: Logic Puzzle'],
  },
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
