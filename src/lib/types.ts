/**
 * Types du système d'univers.
 *
 * Chaque app est décrite une seule fois : `lib/apps.ts` porte les faits
 * (vérifiables dans le code de l'app), `content/themes.ts` son univers
 * graphique, `content/apps/<slug>/page-copy.ts` ses textes, et
 * `content/privacy-facts.ts` ce qu'elle fait des données.
 */

export type Lang = 'fr' | 'en' | 'ja' | 'ko' | 'es' | 'de';

export const LANGS: readonly Lang[] = ['fr', 'en', 'ja', 'ko', 'es', 'de'] as const;

/** Le français est la langue par défaut : ses URLs n'ont pas de préfixe. */
export const DEFAULT_LANG: Lang = 'fr';

export const LANG_META: Record<Lang, { label: string; flag: string; htmlLang: string }> = {
  fr: { label: 'Français', flag: '🇫🇷', htmlLang: 'fr' },
  en: { label: 'English', flag: '🇬🇧', htmlLang: 'en' },
  ja: { label: '日本語', flag: '🇯🇵', htmlLang: 'ja' },
  ko: { label: '한국어', flag: '🇰🇷', htmlLang: 'ko' },
  es: { label: 'Español', flag: '🇪🇸', htmlLang: 'es' },
  de: { label: 'Deutsch', flag: '🇩🇪', htmlLang: 'de' },
};

export type Category = 'app' | 'game';
export type Status = 'available' | 'soon';

/** Moteurs de fond disponibles dans `src/components/backdrops/`. */
export type Backdrop =
  | 'neon-grid'
  | 'starfield'
  | 'paper-ink'
  | 'soft-bubbles'
  | 'card-felt'
  | 'waveform'
  | 'blueprint'
  | 'road'
  | 'zen';

/** Intensité du mouvement, toujours annulée par `prefers-reduced-motion`. */
export type Motion = 'calm' | 'medium' | 'high';

export type BorderStyle = 'hard' | 'soft' | 'organic' | 'none';

export interface Palette {
  /** Couleur du texte principal sur `paper`. */
  ink: string;
  /** Fond de page. */
  paper: string;
  /** Fond des blocs posés sur `paper`. */
  surface: string;
  accent: string;
  accentAlt: string;
  /**
   * Variante de l'accent réservée au texte, quand l'accent du produit est trop
   * clair pour être lu sur son propre fond (un rose pastel sur beige, un vert
   * menthe sur blanc). Sans elle, `accent` sert aussi au texte.
   */
  accentText?: string;
  /** Halo/lueur, en rgba pour pouvoir être superposée. */
  glow: string;
}

export interface AppTheme {
  palette: Palette;
  /** Piles CSS référençant les variables de `lib/fonts-universe.ts`. */
  fonts: { display: string; body: string };
  backdrop: Backdrop;
  shape: { radius: number; border: BorderStyle };
  motion: Motion;
  /** Ordre des blocs de la page marketing. */
  layout: SectionId[];
}

export type SectionId =
  | 'hero-full'
  | 'hero-split'
  | 'hero-offset'
  | 'stat-band'
  | 'how-it-plays'
  | 'features'
  | 'gallery-tilt'
  | 'gallery-stack'
  | 'gallery-device'
  /* Schéma annoté : pour un jeu sans captures, montrer sa scène expliquée. */
  | 'diagram'
  | 'rules'
  | 'privacy'
  | 'cta';

export interface StoreLinks {
  ios?: string;
  android?: string;
  /** Version jouable dans le navigateur, s'il y en a une. */
  web?: string;
}

export interface Screenshot {
  src: string;
  /** Description de ce que montre la capture, pour l'attribut alt. */
  alt: string;
}

/** Un chiffre vérifié dans le code de l'app (niveaux, modes, thèmes…). */
export interface Stat {
  value: string;
  label: string;
}

export interface AppData {
  slug: string;
  /** Nom affiché, tel que `CFBundleDisplayName`. */
  name: string;
  category: Category;
  status: Status;
  store: StoreLinks;
  icon: string;
  /** Image de partage (Open Graph), quand l'app en a une dessinée. */
  ogImage?: string;
  screenshots: Screenshot[];
  /** SDK réellement liés — source de vérité de la politique de confidentialité. */
  sdk: {
    ads: boolean;
    purchases: boolean;
    analytics: boolean;
    network: boolean;
    accounts: boolean;
  };
  /** Date de dernière mise à jour de la politique, format ISO. */
  privacyUpdated: string;
  /**
   * Nom de fichier de la politique quand il s'écarte du slug.
   * Deux pages historiques sont dans ce cas (`contree-privacy`, `zenkuto-privacy`) :
   * leurs URLs figurent dans des fiches store validées et ne doivent pas bouger.
   */
  privacySlug?: string;
}

export interface AppCopy {
  tagline: string;
  /** Accroche du hero, en deux temps : la seconde partie est mise en valeur. */
  headline: { lead: string; highlight: string };
  intro: string;
  stats: Stat[];
  sections: CopySection[];
  cta: { title: string; body: string };
  /** Description courte pour la carte de l'accueil et les métadonnées. */
  meta: { title: string; description: string };
  chips: string[];
}

export interface CopySection {
  id: SectionId;
  kicker?: string;
  title: string;
  body?: string;
  items?: { title: string; body: string }[];
}
