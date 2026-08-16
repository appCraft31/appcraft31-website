/**
 * Faits de confidentialité d'une app.
 *
 * Une politique de confidentialité est un document juridique : elle décrit ce
 * que le code fait, pas ce qu'on aimerait qu'il fasse. Ces faits sont donc
 * établis en lisant le projet de l'app (`npm run audit:sdk` puis relecture),
 * et le texte de la page en découle mécaniquement. C'est ce qui rend impossible
 * d'écrire « aucune publicité » sur une app qui charge AdMob — l'erreur qu'on a
 * trouvée sur Glyphe et sur Le Sudoku du jour dans l'ancien site.
 */

export type AdFormat = 'banner' | 'interstitial' | 'rewarded';

export interface AdsFacts {
  /** Régie publicitaire réellement intégrée. */
  network: 'Google AdMob';
  formats: AdFormat[];
  /** Écran de consentement RGPD (UMP) réellement implémenté. */
  ump: boolean;
  /** Demande App Tracking Transparency réellement implémentée. */
  att: boolean;
  /** Un achat retire-t-il la publicité ? Nom du produit, le cas échéant. */
  removedBy?: string;
}

export interface PurchaseFacts {
  kind: 'non-consumable' | 'consumable' | 'subscription';
  /** Ce que l'achat débloque, en clair. */
  what: string;
  /**
   * Identifiant du produit tel que déclaré dans le code de l'app.
   * On le note pour que le fait reste vérifiable : `…​.noads` ne laisse aucun
   * doute sur le fait que l'application affiche de la publicité.
   */
  productId?: string;
}

export interface AnalyticsFacts {
  /** Services réellement liés : Firebase Analytics, Crashlytics… */
  vendors: string[];
  /** L'utilisateur peut-il les couper depuis les réglages de l'app ? */
  optOut: boolean;
}

export interface NetworkFacts {
  /** À quoi sert la connexion, et ce qui est envoyé. */
  purpose: string;
}

export interface AccountFacts {
  service: 'Game Center' | 'Apple' | 'Google Play Jeux';
  what: string;
}

export interface PrivacyFacts {
  /** Systèmes sur lesquels l'app est distribuée. */
  platforms: string[];
  /** Ce qui est écrit sur l'appareil, et jamais ailleurs. */
  localData: string[];
  /** `null` quand l'app n'intègre aucune régie publicitaire. */
  ads: AdsFacts | null;
  /** Tableau vide quand l'app ne propose aucun achat intégré. */
  purchases: PurchaseFacts[];
  analytics: AnalyticsFacts | null;
  network: NetworkFacts | null;
  accounts: AccountFacts | null;
  /** L'app est-elle destinée aux enfants de moins de 13 ans ? */
  forChildren: boolean;
  /** Date de dernière mise à jour de la politique, au format ISO. */
  updated: string;
  /**
   * Précisions propres à l'app, ajoutées en fin de rubrique « données
   * locales ». Sert aux cas que le gabarit ne couvre pas (photos éphémères de
   * randompix, position d'EcoPompe…).
   */
  notes?: { fr: string; en: string }[];
}
