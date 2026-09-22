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

import type { Lang } from './types';

export type AdFormat = 'banner' | 'interstitial' | 'rewarded';

/**
 * Fragment de politique rédigé pour le lecteur.
 *
 * Une chaîne simple est reprise telle quelle dans les deux langues — c'est
 * suffisant pour « réglages » ou « stations favorites ». Dès que la phrase
 * porte du sens, on écrit les deux versions : une politique lue par un
 * réviseur anglophone ne peut pas se permettre une clause en français.
 *
 * Les quatre autres langues sont facultatives. Le gabarit, lui, parle les six ;
 * ces fragments-ci sont propres à chaque app — « photos éphémères de
 * randompix », « position d'EcoPompe » — et se traduisent au fil de l'eau. Une
 * politique japonaise dont deux puces restent en anglais vaut mieux que la page
 * anglaise entière d'avant.
 */
export type Localized =
  | string
  | ({ fr: string; en: string } & Partial<Record<Lang, string>>);

export interface AdsFacts {
  /** Régie publicitaire réellement intégrée. */
  network: 'Google AdMob';
  formats: AdFormat[];
  /** Écran de consentement RGPD (UMP) réellement implémenté. */
  ump: boolean;
  /** Demande App Tracking Transparency réellement implémentée. */
  att: boolean;
  /**
   * L'app propose-t-elle un accès pour rouvrir le formulaire de consentement ?
   * Non renseigné vaut oui. À mettre à `false` quand le code n'appelle nulle
   * part `showPrivacyOptionsForm` : promettre un réglage qui n'existe pas est
   * une clause fausse, et le RGPD porte précisément sur le retrait du
   * consentement.
   */
  umpReopen?: boolean;
  /** Un achat retire-t-il la publicité ? Nom du produit, le cas échéant. */
  removedBy?: string;
  /**
   * Réseaux tiers dont le SDK est réellement embarqué et servi par la médiation
   * AdMob. Chacun reçoit à ce titre des données de l'appareil : le RGPD impose
   * de les nommer, une mention générique « et nos partenaires » ne suffit pas.
   * On y écrit le nom commercial suivi du SDK, tel qu'il apparaît dans le
   * projet : `Liftoff Monetize (VungleAdsSDK)`.
   */
  mediation?: MediationPartner[];
  /**
   * Les annonces sont-elles restreintes au contenu familial
   * (`maxAdContentRating`, `tagForChildDirectedTreatment`…) ? Non renseigné
   * vaut oui, comme avant l'ajout du champ. À mettre à `false` quand le code
   * ne configure rien de tel.
   */
  familyContent?: boolean;
}

/** Un réseau de médiation, avec le lien vers sa propre politique. */
export interface MediationPartner {
  name: string;
  /** URL de la politique de confidentialité du réseau. */
  privacyUrl: string;
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
  /**
   * Finalité réelle de la remontée, quand elle dépasse la correction des
   * défauts — par exemple mesurer les revenus publicitaires ou alimenter des
   * campagnes d'acquisition. Écrire ici ce que le code fait, pas la formule la
   * plus rassurante : c'est une information que le RGPD impose de donner.
   */
  purpose?: Localized;
  /**
   * Les données sont-elles anonymes ? Non renseigné vaut oui. À mettre à
   * `false` quand l'identifiant publicitaire peut leur être associé (ATT
   * accepté) : « ne permettent pas de vous identifier » serait alors inexact.
   */
  anonymous?: boolean;
}

export interface NetworkFacts {
  /** À quoi sert la connexion, et ce qui est envoyé. */
  purpose: Localized;
}

export interface AccountFacts {
  service: 'Game Center' | 'Apple' | 'Google Play Jeux' | 'compte Google';
  what: string;
  /**
   * Rubrique rédigée en entier, quand la phrase type ne convient pas.
   *
   * Elle décrit un classement de scores passé par Apple : elle serait fausse
   * pour une app dont le compte est la porte d'entrée vers les données de son
   * propriétaire.
   */
  body?: Localized[];
}

export interface PrivacyFacts {
  /** Systèmes sur lesquels l'app est distribuée. */
  platforms: string[];
  /** Ce qui est écrit sur l'appareil, et jamais ailleurs. */
  localData: Localized[];
  /** `null` quand l'app n'intègre aucune régie publicitaire. */
  ads: AdsFacts | null;
  /** Tableau vide quand l'app ne propose aucun achat intégré. */
  purchases: PurchaseFacts[];
  analytics: AnalyticsFacts | null;
  network: NetworkFacts | null;
  accounts: AccountFacts | null;
  /**
   * Les données locales sont-elles aussi synchronisées dans l'espace iCloud
   * privé de l'utilisateur ? Elles ne « restent » alors plus sur l'appareil,
   * et la désinstallation ne les efface pas : le gabarit le dit.
   */
  cloudSync?: boolean;
  /** L'app est-elle destinée aux enfants de moins de 13 ans ? */
  forChildren: boolean;
  /** Date de dernière mise à jour de la politique, au format ISO. */
  updated: string;
  /**
   * Précisions propres à l'app, ajoutées en fin de rubrique « données
   * locales ». Sert aux cas que le gabarit ne couvre pas (photos éphémères de
   * randompix, position d'EcoPompe…).
   */
  notes?: Localized[];
}
