/**
 * Registre des produits — source unique des `generateStaticParams` et du sitemap.
 *
 * L'ordre de ce tableau est celui des cartes sur l'accueil : les nouveautés d'abord.
 */

import type { AppData } from './types';

export const APPS: AppData[] = [
  {
    slug: 'remindo',
    name: 'Remindo',
    category: 'app',
    status: 'soon',
    store: {},
    icon: '/assets/icons/remindo.svg',
    screenshots: [
      { src: '/assets/remindo-accueil.jpg', alt: "L'accueil de Remindo, avec Cortex" },
      { src: '/assets/remindo-ajout.jpg', alt: "L'ajout d'une note en quelques gestes" },
      { src: '/assets/remindo-objectifs.jpg', alt: "Le suivi des objectifs chiffrés" },
      { src: '/assets/remindo-widget.jpg', alt: "Le widget d'écran d'accueil" },
    ],
    sdk: { ads: false, purchases: true, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'holdfire',
    name: 'Hold Fire',
    category: 'game',
    status: 'soon',
    store: {},
    icon: '/assets/icons/holdfire.svg',
    screenshots: [],
    sdk: { ads: true, purchases: false, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'sudoku',
    name: 'Le Sudoku du jour',
    category: 'game',
    status: 'soon',
    store: {},
    icon: '/assets/icons/sudoku.svg',
    screenshots: [
      { src: '/assets/sudoku-jeu.jpg', alt: "Un killer en cours : cages lisibles, chrono et rappel de règle sous la grille" },
      { src: '/assets/sudoku-accueil.jpg', alt: "La manchette du jour, la partie libre et le carnet de tampons" },
      { src: '/assets/sudoku-regle.jpg', alt: "La carte de règle, affichée avant chaque variante" },
      { src: '/assets/sudoku-sombre.jpg', alt: "Le « papier de nuit » : encre crème sur papier brun" },
    ],
    sdk: { ads: true, purchases: true, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'talon',
    name: 'Talon',
    category: 'game',
    status: 'soon',
    store: {},
    icon: '/assets/icons/talon.svg',
    screenshots: [
      { src: '/assets/talon-screen-accueil.webp', alt: "L'accueil de Talon" },
      { src: '/assets/talon-screen-par.webp', alt: "Une donne en cours, avec le par affiché" },
      { src: '/assets/talon-screen-victoire.webp', alt: "L'écran de victoire" },
    ],
    sdk: { ads: false, purchases: false, analytics: true, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
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
    store: { ios: 'https://apps.apple.com/fr/app/binero-takuzu-binairo/id6782013644' },
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
    slug: 'zenkuto',
    name: 'Zenkuro',
    category: 'game',
    status: 'available',
    store: { ios: 'https://apps.apple.com/app/id6787019507' },
    icon: '/assets/icons/zenkuto.svg',
    screenshots: [],
    sdk: { ads: true, purchases: true, analytics: false, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
    privacySlug: 'zenkuto-privacy',
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
    store: { ios: 'https://apps.apple.com/fr/app/randompix/id6773356363' },
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
    store: { ios: 'https://apps.apple.com/fr/app/ten-go-calcul-mental/id6762470649' },
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
    sdk: { ads: false, purchases: false, analytics: false, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
  },
  {
    slug: 'poddroid',
    name: 'PodDroid',
    category: 'app',
    status: 'available',
    store: { android: 'https://play.google.com/store/apps/details?id=com.appcraft31.poddroid' },
    icon: '/assets/icons/poddroid.svg',
    screenshots: [],
    sdk: { ads: false, purchases: false, analytics: false, network: false, accounts: false },
    privacyUpdated: '2026-08-16',
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
];

export const APP_SLUGS = APPS.map((a) => a.slug);

export function getApp(slug: string): AppData | undefined {
  return APPS.find((a) => a.slug === slug);
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
  return APPS.find((a) => privacyFileSlug(a) === fileSlug);
}

/** Tous les noms de fichiers de politiques, y compris les deux exceptions. */
export const PRIVACY_SLUGS = APPS.map(privacyFileSlug);

export function privacyPath(app: AppData): string {
  return `/privacy/${privacyFileSlug(app)}.html`;
}

/** Chemin de la page marketing (URL de support et URL marketing des fiches store). */
export function appPath(app: AppData): string {
  return `/apps/${app.slug}.html`;
}
