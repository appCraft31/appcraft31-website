/**
 * Registre des produits — source unique des `generateStaticParams` et du sitemap.
 *
 * L'ordre de ce tableau est celui des cartes sur l'accueil : les nouveautés d'abord.
 */

import type { AppData } from './types';

export const APPS: AppData[] = [
  /* Ding! sort le 21 septembre 2026 : passer `status` à 'available' ce jour-là.
     L'identifiant App Store (6810621313) est celui de la fiche déjà créée. */
  {
    slug: 'ding',
    name: 'Ding!',
    category: 'game',
    status: 'soon',
    store: { ios: 'https://apps.apple.com/fr/app/id6810621313' },
    icon: '/assets/icons/ding.webp',
    ogImage: '/assets/ding-og.jpg',
    screenshots: [
      { src: '/assets/ding-screen-partie.webp', alt: 'Une partie à la Résidence des Tilleuls : la cabine dans sa gaine, les voisins qui attendent à chaque étage' },
      { src: '/assets/ding-screen-accueil.webp', alt: "L'accueil : reprendre la carrière, défi du jour, Atelier et entraînement libre" },
      { src: '/assets/ding-screen-defi-du-jour.webp', alt: 'Le défi du jour présenté par la voisine, avec ses trois médailles' },
      { src: '/assets/ding-screen-atelier.webp', alt: "L'Atelier : équipements, prototypes et finitions de la cabine" },
    ],
    sdk: { ads: true, purchases: false, analytics: true, network: true, accounts: false },
    privacyUpdated: '2026-09-11',
  },
  /* Glowmi — en vente depuis le 9 juin 2026 (version 2.1). Sa fiche App Store
     pointait vers appcraft31.vercel.app/glowmi*.html, jamais servies. */
  {
    slug: 'glowmi',
    name: 'Glowmi',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/fr/app/glowmi-animal-virtuel/id6776699294' },
    icon: '/assets/icons/glowmi.webp',
    screenshots: [
      { src: '/assets/glowmi-screen-maison.webp', alt: 'La maison : le compagnon heureux, ses pièces et les boutons Nourrir, Laver, Dodo et Soigner' },
      { src: '/assets/glowmi-screen-mini-jeux.webp', alt: 'Les quatre mini-jeux : Séquence, Mémo des paires, Attrape-gourmandises et Tempo' },
      { src: '/assets/glowmi-screen-garde-robe.webp', alt: 'La garde-robe : tenues, objets, décors et auras essayés sur le compagnon' },
      { src: '/assets/glowmi-screen-collection.webp', alt: 'L’album : la collection des 24 espèces, découvertes au fil des éclosions' },
    ],
    sdk: { ads: true, purchases: true, analytics: true, network: true, accounts: true },
    privacyUpdated: '2026-09-22',
  },
  {
    slug: 'zellige',
    name: 'Zellige',
    category: 'game',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/zellige-tectonic-suguru/id6806969470',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.zellige',
    },
    icon: '/assets/icons/zellige.svg',
    screenshots: [
      { src: '/assets/zellige-screen-accueil.webp', alt: "L'accueil est lui-même une grille de Tectonic : Continuer, Grille du jour et Comment jouer sont des blocs" },
      { src: '/assets/zellige-screen-partie.webp', alt: 'Une grille 7×8 en cours, niveau 15, avec des annotations et le bloc sélectionné cerné de bleu' },
      { src: '/assets/zellige-screen-sombre.webp', alt: 'La même grille en thème sombre : le joint devient l’ombre entre les carreaux' },
      { src: '/assets/zellige-screen-jour.webp', alt: 'La grille du jour, une 12×12 experte' },
    ],
    sdk: { ads: true, purchases: false, analytics: true, network: false, accounts: true },
    privacyUpdated: '2026-08-31',
  },
  {
    slug: 'pixelcraft',
    name: 'PixelCraft',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/fr/app/pixelcraft-coloriage-pixel/id6805811711' },
    icon: '/assets/icons/pixelcraft.svg',
    screenshots: [
      { src: '/assets/pixelcraft-screen-coloriage.webp', alt: 'Un renard à moitié colorié, numéros encore visibles' },
      { src: '/assets/pixelcraft-screen-timelapse.webp', alt: 'Le timelapse rejoue la création case par case' },
      { src: '/assets/pixelcraft-screen-libre.webp', alt: 'Le mode libre, en ambiance pastel' },
    ],
    sdk: { ads: true, purchases: false, analytics: true, network: true, accounts: false },
    privacyUpdated: '2026-09-07',
  },
  {
    slug: 'remindo',
    name: 'Remindo',
    category: 'app',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/remindo/id6800648765',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.remindo',
    },
    icon: '/assets/icons/remindo.svg',
    screenshots: [
      { src: '/assets/remindo-accueil.webp', alt: "L'accueil de Remindo, avec Cortex" },
      { src: '/assets/remindo-ajout.webp', alt: "L'ajout d'une note en quelques gestes" },
      { src: '/assets/remindo-objectifs.webp', alt: "Le suivi des objectifs chiffrés" },
      { src: '/assets/remindo-widget.webp', alt: "Le widget d'écran d'accueil" },
    ],
    sdk: { ads: false, purchases: true, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'holdfire',
    name: 'Hold Fire',
    category: 'game',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/hold-fire-tower-defense/id6801176503',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.holdfire',
    },
    icon: '/assets/icons/holdfire.svg',
    screenshots: [],
    sdk: { ads: true, purchases: false, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'sudoku',
    name: 'Le Sudoku du jour',
    category: 'game',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/le-sudoku-du-jour/id6799910748',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.dailysudoku',
    },
    icon: '/assets/icons/sudoku.svg',
    screenshots: [
      { src: '/assets/sudoku-jeu.webp', alt: "Un killer en cours : cages lisibles, chrono et rappel de règle sous la grille" },
      { src: '/assets/sudoku-accueil.webp', alt: "La manchette du jour, la partie libre et le carnet de tampons" },
      { src: '/assets/sudoku-regle.webp', alt: "La carte de règle, affichée avant chaque variante" },
      { src: '/assets/sudoku-sombre.webp', alt: "Le « papier de nuit » : encre crème sur papier brun" },
    ],
    sdk: { ads: true, purchases: true, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'talon',
    name: 'Talon',
    category: 'game',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/talon-solitaire-spider/id6796341428',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.talon',
    },
    icon: '/assets/icons/talon.svg',
    screenshots: [
      { src: '/assets/talon-screen-accueil.webp', alt: "L'accueil de Talon" },
      { src: '/assets/talon-screen-par.webp', alt: "Une donne en cours, avec le par affiché" },
      { src: '/assets/talon-screen-victoire.webp', alt: "L'écran de victoire" },
    ],
    sdk: { ads: true, purchases: true, analytics: true, network: true, accounts: false },
    privacyUpdated: '2026-08-17',
  },
  {
    slug: 'tinta',
    name: 'Tinta',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/us/app/tinta-color-sudoku-logic/id6787122341' },
    icon: '/assets/icons/tinta.svg',
    screenshots: [],
    sdk: { ads: true, purchases: true, analytics: false, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'binero',
    name: 'Binero',
    category: 'game',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/binero-takuzu-binairo/id6782013644',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.binero',
    },
    icon: '/assets/icons/binero.svg',
    screenshots: [],
    sdk: { ads: true, purchases: true, analytics: true, network: true, accounts: true },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'glyphe',
    name: 'Glyphe',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/app/id6784743658' },
    icon: '/assets/icons/glyphe.svg',
    screenshots: [],
    sdk: { ads: true, purchases: true, analytics: true, network: false, accounts: true },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'zenkuro',
    name: 'Zenkuro',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/app/id6787019507' },
    icon: '/assets/icons/zenkuro.svg',
    screenshots: [],
    sdk: { ads: true, purchases: true, analytics: false, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
    privacySlug: 'zenkuro-privacy',
    legacySlugs: ['zenkuto'],
    legacyPrivacySlugs: ['zenkuto-privacy'],
  },
  {
    slug: 'contree',
    name: 'Contrée',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/app/id6790448405' },
    icon: '/assets/icons/contree.svg',
    screenshots: [],
    sdk: { ads: true, purchases: false, analytics: true, network: false, accounts: true },
    privacyUpdated: '2026-08-16',
    // Gratuite, sans achat intégré : StoreKit n'y sert qu'à la demande d'avis
    // (`requestReview`), aucun produit n'est déclaré.
    free: true,
    privacySlug: 'contree-privacy',
  },
  {
    slug: 'keeply',
    name: 'Keeply',
    category: 'app',
    status: 'available',
    store: { ios: 'https://apps.apple.com/app/id6786308238' },
    icon: '/assets/icons/keeply.svg',
    ogImage: '/assets/keeply-og.png',
    screenshots: [
      { src: '/assets/keeply-screen-missions.webp', alt: "Les missions de tri proposées par Keeply" },
      { src: '/assets/keeply-screen-trier.webp', alt: "Le tri photo par balayage" },
    ],
    sdk: { ads: false, purchases: true, analytics: true, network: true, accounts: true },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'combo',
    name: 'SquareLink',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/fr/app/squarelink-pips-domino-puzzle/id6773255081' },
    icon: '/assets/combo-icon.png',
    screenshots: [
      { src: '/assets/combo-menu.webp', alt: "Le menu de SquareLink" },
      { src: '/assets/combo-drag.webp', alt: "Une tuile en cours de placement" },
      { src: '/assets/combo-game.webp', alt: "Une partie avancée, tuiles encastrées" },
      { src: '/assets/combo-summary.webp', alt: "Le résumé de fin de partie" },
    ],
    sdk: { ads: true, purchases: true, analytics: true, network: false, accounts: true },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'randompix',
    name: 'randompix',
    category: 'game',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/randompix/id6773356363',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.randompix',
    },
    icon: '/assets/randompix-icon.png',
    screenshots: [],
    sdk: { ads: true, purchases: true, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'graviwords',
    name: 'GraviWords',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/fr/app/graviwords-mots-arcade/id6776174390' },
    icon: '/assets/graviwords-icon.webp',
    screenshots: [
      { src: '/assets/graviwords-menu.webp', alt: "L'écran d'accueil de GraviWords" },
      { src: '/assets/graviwords-jeu.webp', alt: "Une partie en cours" },
      { src: '/assets/graviwords-boutique.webp', alt: "La boutique de pouvoirs" },
    ],
    sdk: { ads: true, purchases: true, analytics: true, network: false, accounts: true },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'orbis',
    name: 'Orbis',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/fr/app/orbis-arcade-action-r%C3%A9flexes/id6763065365' },
    icon: '/assets/orbis-icon.webp',
    screenshots: [
      { src: '/assets/orbis-accueil.webp', alt: "L'accueil d'Orbis" },
      { src: '/assets/orbis-partie.webp', alt: "Une partie en cours" },
      { src: '/assets/orbis-progression.webp', alt: "L'écran de progression" },
      { src: '/assets/orbis-score.webp', alt: "Le récapitulatif de score" },
    ],
    sdk: { ads: true, purchases: true, analytics: false, network: false, accounts: true },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'tengo',
    name: 'tenGO',
    category: 'game',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/ten-go-calcul-mental/id6762470649',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.tengo',
    },
    icon: '/assets/icons/tengo.svg',
    screenshots: [
      { src: '/assets/tengo-menu.webp', alt: "Le menu de tenGO" },
      { src: '/assets/tengo-grid.webp', alt: "Une grille de bulles en cours de partie" },
      { src: '/assets/tengo-combo.webp', alt: "Un combo qui rapporte plus de cent points" },
      { src: '/assets/tengo-play.webp', alt: "Un chemin tracé entre plusieurs bulles" },
      { src: '/assets/tengo-leaderboard.webp', alt: "Les dix meilleurs scores, conservés sur l'appareil" },
    ],
    sdk: { ads: true, purchases: true, analytics: true, network: false, accounts: true },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'meliz',
    name: 'Mêliz',
    category: 'game',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/m%C3%AAliz-mots-m%C3%AAl%C3%A9s-cach%C3%A9s/id6767558990',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.meliz',
      web: '/play/meliz/',
    },
    icon: '/assets/meliz-icon.webp',
    screenshots: [
      { src: '/assets/meliz-menu.webp', alt: "Le menu de Mêliz" },
      { src: '/assets/meliz-game.webp', alt: "Une grille de mots mêlés en cours" },
      { src: '/assets/meliz-victory.webp', alt: "L'écran de victoire" },
      { src: '/assets/meliz-scores.webp', alt: "Les scores conservés sur l'appareil" },
    ],
    sdk: { ads: true, purchases: true, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'motfleche',
    name: 'Mots Fléchés',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/fr/app/mots-fl%C3%A9ch%C3%A9s-r%C3%A9tro/id6762137189' },
    icon: '/assets/mf-icon.webp',
    screenshots: [
      { src: '/assets/mf-menu.webp', alt: "Le menu des Mots Fléchés" },
      { src: '/assets/mf-grille-vide.webp', alt: "Une grille vierge, prête à remplir" },
      { src: '/assets/mf-jeu.webp', alt: "Une grille en cours de résolution" },
      { src: '/assets/mf-jeu-avance.webp', alt: "Une grille presque terminée" },
      { src: '/assets/mf-boutique.webp', alt: "La boutique du jeu" },
    ],
    sdk: { ads: true, purchases: true, analytics: false, network: false, accounts: true },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'shizuku',
    name: 'Shizuku',
    category: 'app',
    status: 'available',
    store: { ios: 'https://apps.apple.com/fr/app/shizuku-caf%C3%A9-filtre/id6777961527' },
    icon: '/assets/icons/shizuku.svg',
    screenshots: [],
    sdk: { ads: false, purchases: true, analytics: false, network: false, accounts: false },
    privacyUpdated: '2026-09-22',
  },
  {
    slug: 'poddroid',
    name: 'PodDroid',
    category: 'app',
    status: 'available',
    store: { android: 'https://play.google.com/store/apps/details?id=com.appcraft31.poddroid' },
    icon: '/assets/icons/poddroid.svg',
    screenshots: [],
    sdk: { ads: true, purchases: false, analytics: false, network: true, accounts: false },
    privacyUpdated: '2026-09-22',
  },
  {
    slug: 'ecopompe',
    name: 'EcoPompe',
    category: 'app',
    status: 'available',
    store: {
      ios: 'https://apps.apple.com/fr/app/ecopompe-prix-carburant/id6761409265',
      android: 'https://play.google.com/store/apps/details?id=com.appcraft31.ecopompe',
    },
    icon: '/assets/logo_ecopompe.webp',
    screenshots: [
      { src: '/assets/ecopompe-recherche.webp', alt: "La recherche de stations-service" },
      { src: '/assets/ecopompe-moins-cher.webp', alt: "La station la moins chère à proximité" },
      { src: '/assets/ecopompe-detail.webp', alt: "Le détail d'une station et ses prix" },
      { src: '/assets/ecopompe-favoris.webp', alt: "Les stations mises en favoris" },
    ],
    sdk: { ads: false, purchases: true, analytics: true, network: true, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  /*
   * Outil interne du studio, non listé (`unlisted`). Sa page existe parce que
   * l'écran de consentement OAuth de Google réclame une page d'accueil et une
   * politique de confidentialité publiques avant de laisser publier un client
   * demandant le périmètre `admob.readonly`.
   *
   * `ads: false` n'est pas une inattention : l'application *lit* les revenus
   * AdMob d'un compte, elle n'affiche aucune annonce et n'embarque aucune
   * régie. Le mot « AdMob » y est partout, le SDK publicitaire nulle part.
   * Son projet (`~/essaies_dev/Admob`) est d'ailleurs hors du périmètre de
   * `npm run audit:sdk`, qui ne parcourt que `~/StudioProjects`.
   */
  {
    slug: 'admob-companion',
    name: 'AdMob Companion',
    category: 'app',
    status: 'soon',
    store: {},
    icon: '/assets/icons/admob-companion.svg',
    screenshots: [],
    sdk: { ads: false, purchases: false, analytics: false, network: true, accounts: true },
    privacyUpdated: '2026-09-06',
    unlisted: true,
  },
];

export const APP_SLUGS = APPS.flatMap((a) => [a.slug, ...(a.legacySlugs ?? [])]);

/**
 * Les produits qui se montrent : accueil, pied de page, sitemap.
 *
 * `APPS` reste la liste complète — c'est elle qui engendre les pages, y
 * compris celles des outils internes. Toute liste destinée à un lecteur passe
 * par ici, sans quoi un outil interne réapparaîtrait dans le portfolio.
 */
export const VISIBLE_APPS = APPS.filter((a) => !a.unlisted);

export function getApp(slug: string): AppData | undefined {
  return APPS.find((a) => a.slug === slug || a.legacySlugs?.includes(slug));
}

/**
 * Nom de fichier de la politique. Deux pages historiques s'écartent de la
 * convention et sont figées : leurs URLs figurent dans des fiches store validées.
 */
export function privacyFileSlug(app: AppData): string {
  return app.privacySlug ?? app.slug;
}

/** Retrouve une app depuis le nom de fichier de sa politique. */
export function getAppByPrivacySlug(fileSlug: string): AppData | undefined {
  return APPS.find(
    (a) => privacyFileSlug(a) === fileSlug || a.legacyPrivacySlugs?.includes(fileSlug),
  );
}

/** Tous les noms de fichiers de politiques, y compris les exceptions et les anciennes URL. */
export const PRIVACY_SLUGS = APPS.flatMap((a) => [
  privacyFileSlug(a),
  ...(a.legacyPrivacySlugs ?? []),
]);

export function privacyPath(app: AppData): string {
  return `/privacy/${privacyFileSlug(app)}.html`;
}

/** Chemin de la page marketing (URL de support et URL marketing des fiches store). */
export function appPath(app: AppData): string {
  return `/apps/${app.slug}.html`;
}
