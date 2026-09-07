import type { AdFormat } from '@/lib/privacy-types';

/**
 * Les phrases d'une politique de confidentialité, une langue par fichier.
 *
 * Le gabarit n'écrit rien qu'il n'ait tiré des faits : c'est ce qui rend la
 * traduction sûre. Une phrase mal tournée reste maladroite ; elle ne peut pas
 * inventer une régie publicitaire ni en taire une, puisque la rubrique elle-même
 * n'existe que si `facts.ads` existe.
 *
 * L'interface donne l'exhaustivité gratuitement : TypeScript refuse un fichier
 * de langue auquel il manque une phrase.
 */
export interface PrivacyStrings {
  /** Mention de version de référence, sur les langues autres que le français. */
  referenceVersion: ((url: string) => string) | null;

  responsibleTitle: string;
  publishedBy: (app: string, email: string) => string;
  policyScope: (platforms: string) => string;

  localTitle: string;
  localIntro: (app: string) => string;

  adsTitle: string;
  adsIntro: (app: string, network: string, formats: string) => string;
  adsProcessing: string;
  adsMediation: (partners: string) => string;
  adsMediationConsent: string;
  adsAtt: string;
  adsUmp: string;
  adsUmpNoReopen: string;
  adsUmpReopen: string;
  adsRemovedBy: (purchase: string) => string;
  adsNone: (app: string) => string;

  purchasesTitle: string;
  purchasesSome: (app: string) => string;
  purchasesNone: (app: string) => string;

  analyticsTitle: string;
  analyticsPurpose: (app: string, vendors: string, purpose: string) => string;
  analyticsDefault: (app: string, vendors: string) => string;
  analyticsOptOut: string;
  analyticsAnonymous: string;
  analyticsNone: (app: string) => string;

  networkTitle: string;
  networkPurpose: (purpose: string) => string;
  networkOffline: (app: string, hasAds: boolean) => string;

  accountsSignInTitle: string;
  accountsServiceTitle: string;
  accountsNoneTitle: string;
  accountsService: (app: string, service: string, what: string) => string;
  accountsNone: (app: string) => string;

  childrenTitle: string;
  childrenAimed: (app: string) => string;
  childrenNotAimed: (app: string) => string;
  childrenAds: string;

  rightsTitle: string;
  rightsUninstall: string;
  rightsGdpr: (email: string) => string;
  rightsAdNetworks: (networks: string) => string;

  changesTitle: string;
  changes: (date: string) => string;

  contactTitle: string;
  contact: (email: string) => string;

  /** Étiquettes des formats publicitaires et des types d'achat. */
  formats: Record<AdFormat, string>;
  kinds: Record<string, string>;

  /** Joint le dernier élément d'une énumération : « a, b et c ». */
  joinLast: (head: string, last: string) => string;
  /** Date longue, dans l'usage de la langue. */
  formatDate: (year: number, month: number, day: number) => string;
}
