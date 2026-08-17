/**
 * Faits de confidentialité des 20 produits.
 *
 * Sources, dans cet ordre : le code de l'app (`~/StudioProjects/…`, résumé par
 * `npm run audit:sdk` dans `sdk-audit.json`), puis la politique de l'ancien
 * site quand elle est confirmée par le code. En cas de désaccord, c'est le code
 * qui gagne — deux divergences ont été trouvées et corrigées ainsi :
 *
 * - **Glyphe** : l'ancienne politique affirmait « nous ne diffusons aucune
 *   publicité » ; `MonetizationConfig.swift` déclare des unités AdMob de
 *   production et un achat « Glyphe+ » qui retire la pub.
 * - **Le Sudoku du jour** : l'ancienne politique ne mentionnait pas la
 *   publicité ; `pubspec.yaml` dépend de `google_mobile_ads` et
 *   `in_app_purchase`, et `lib/state/ads.dart` s'en sert.
 */

import type { PrivacyFacts } from '@/lib/privacy-types';

/** Date de la révision qui a suivi l'audit. */
const REVIEWED = '2026-08-16';

/** Cas le plus courant du catalogue : un jeu gratuit financé par AdMob. */
const adFunded = (removedBy?: string): PrivacyFacts['ads'] => ({
  network: 'Google AdMob',
  formats: ['banner', 'interstitial', 'rewarded'],
  ump: true,
  att: true,
  removedBy,
});

export const PRIVACY_FACTS: Record<string, PrivacyFacts> = {
  holdfire: {
    platforms: ['iOS'],
    localData: ['record', 'fragments', 'modules débloqués', 'réglages'],
    ads: {
      network: 'Google AdMob',
      formats: ['rewarded'],
      ump: true,
      att: true,
    },
    purchases: [],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'La publicité n’apparaît qu’en fin de partie, et seulement si vous choisissez de la regarder pour doubler vos fragments ou reprendre la vague. Aucune publicité pendant la partie.',
        en: 'Advertising only appears at the end of a run, and only if you choose to watch it to double your fragments or resume the wave. No ads during play.',
      },
    ],
  },

  sudoku: {
    platforms: ['iOS'],
    localData: ['carnet de tampons', 'rangs', 'séries', 'records de temps', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.dailysudoku.noads' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'Les grilles sont générées sur votre appareil : le défi du jour ne nécessite aucun échange avec un serveur.',
        en: 'Grids are generated on your device: the daily challenge requires no exchange with any server.',
      },
    ],
  },

  tengo: {
    platforms: ['iOS'],
    localData: ['dix meilleurs scores', 'partie en cours', 'pièces', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.tengo.noads' },
      { kind: 'consumable', what: 'des pièces (4 paliers)', productId: 'com.tengo.coins.tier1' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement' },
    forChildren: false,
    updated: REVIEWED,
  },

  glyphe: {
    platforms: ['iOS'],
    localData: ['séries', 'scores', 'thème choisi'],
    ads: adFunded('Glyphe+'),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité et les indices illimités (« Glyphe+ »)', productId: 'com.appcraft31.glyphe.plus' },
    ],
    analytics: null,
    network: { purpose: 'la synchronisation du classement en ligne, à votre demande' },
    accounts: { service: 'Game Center', what: 'le classement mondial' },
    forChildren: false,
    updated: REVIEWED,
  },

  binero: {
    platforms: ['iOS'],
    localData: ['progression des 50 niveaux', 'meilleurs temps', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le mode libre', productId: 'com.appcraft31.binero.freemode' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement mondial des meilleurs temps' },
    forChildren: false,
    updated: REVIEWED,
  },

  zenkuto: {
    platforms: ['iOS'],
    localData: ['records par difficulté', 'grille en cours', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.kakuro.removeads' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
  },

  tinta: {
    platforms: ['iOS'],
    localData: ['progression des 300 niveaux', 'étoiles obtenues', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.tinta.removeads' },
      { kind: 'consumable', what: 'des pièces (3 paliers)', productId: 'com.appcraft31.tinta.coins.small' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
  },

  contree: {
    platforms: ['iOS'],
    localData: ['parties en cours', 'statistiques', 'réglages'],
    ads: adFunded(),
    purchases: [],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le multijoueur et les parties entre amis' },
    forChildren: false,
    updated: REVIEWED,
  },

  combo: {
    platforms: ['iOS'],
    localData: ['meilleurs scores', 'partie en cours', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.squarelink.removeads' },
      { kind: 'non-consumable', what: 'un lot de cosmétiques', productId: 'com.appcraft31.squarelink.cosmetics.pack' },
      { kind: 'non-consumable', what: 'le mode infini', productId: 'com.appcraft31.squarelink.infinite.v2' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement' },
    forChildren: false,
    updated: REVIEWED,
  },

  graviwords: {
    platforms: ['iOS'],
    localData: ['pièces', 'pouvoirs débloqués', 'meilleurs scores', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'consumable', what: 'des pièces pour la boutique de pouvoirs (3 paliers)', productId: 'com.appcraft31.graviword.coins.small' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement mondial' },
    forChildren: false,
    updated: REVIEWED,
  },

  orbis: {
    platforms: ['iOS'],
    localData: ['progression', 'meilleurs scores', 'réglages'],
    ads: adFunded(),
    purchases: [],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'les classements iPhone et iPad' },
    forChildren: false,
    updated: REVIEWED,
  },

  meliz: {
    platforms: ['iOS', 'Android', 'Web'],
    localData: ['meilleurs scores par thème et difficulté', 'partie en cours', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.meliz.removeads' },
      { kind: 'consumable', what: 'des pièces (3 paliers)', productId: 'com.appcraft31.meliz.coins.small' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'La version jouable dans le navigateur conserve vos scores dans le stockage local de votre navigateur, et nulle part ailleurs.',
        en: 'The browser version keeps your scores in your browser’s local storage, and nowhere else.',
      },
    ],
  },

  motfleche: {
    platforms: ['iOS'],
    localData: ['grilles en cours', 'étoiles', 'thèmes débloqués', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'consumable', what: 'des étoiles pour débloquer des thèmes (4 paliers)', productId: 'com.appcraft31.motfleche.stars.handful' },
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.motfleche.removeads' },
    ],
    analytics: null,
    network: null,
    accounts: { service: 'Game Center', what: 'le classement' },
    forChildren: false,
    updated: REVIEWED,
  },

  randompix: {
    platforms: ['iOS'],
    localData: ['pseudonyme choisi pour la partie', 'réglages'],
    ads: adFunded(),
    purchases: [
      { kind: 'non-consumable', what: 'le retrait de la publicité', productId: 'com.appcraft31.randompix.noads' },
      { kind: 'non-consumable', what: 'des packs d’emojis', productId: 'com.appcraft31.randompix.emojis.fete' },
    ],
    analytics: null,
    network: {
      purpose:
        'la partie en réseau : le code de salon, les votes et les photos de la manche en cours transitent entre les joueurs',
    },
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'Les photos que vous validez sont chiffrées le temps de la partie, puis supprimées automatiquement. Elles ne servent qu’à la manche en cours et ne sont jamais conservées après.',
        en: 'The photos you approve are encrypted for the duration of the game, then deleted automatically. They serve only the round being played and are never kept afterwards.',
      },
    ],
  },

  talon: {
    platforms: ['iOS', 'Android'],
    localData: ['parties en cours', 'statistiques', 'donne du jour', 'réglages'],
    ads: null,
    purchases: [],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'Aucune régie publicitaire n’est intégrée à l’application, et le jeu fonctionne intégralement hors ligne : il n’envoie rien, nulle part.',
        en: 'No ad network is built into the app, and the game runs entirely offline: it sends nothing, anywhere.',
      },
    ],
  },

  keeply: {
    platforms: ['iOS'],
    localData: ['missions effectuées', 'corbeille de sécurité', 'réglages'],
    ads: null,
    purchases: [
      { kind: 'subscription', what: 'l’abonnement Premium (mensuel ou annuel, avec période d’essai)', productId: 'com.appcraft31.keeply.premium.monthly' },
    ],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'L’analyse de votre photothèque est faite entièrement sur l’appareil. Aucune photo, aucune vignette et aucune empreinte d’image n’est envoyée sur un serveur.',
        en: 'Your photo library is analysed entirely on the device. No photo, no thumbnail and no image fingerprint is ever sent to a server.',
      },
    ],
  },

  remindo: {
    platforms: ['iOS', 'Android'],
    localData: ['notes', 'rappels', 'routines', 'objectifs', 'réglages'],
    ads: null,
    purchases: [],
    analytics: {
      vendors: ['statistiques d’usage anonymes', 'rapports de plantage'],
      optOut: true,
    },
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'Vos notes vivent dans une base de données locale et ne sont jamais envoyées nulle part : l’application fonctionne intégralement sans réseau.',
        en: 'Your notes live in a local database and are never sent anywhere: the app works entirely without a network.',
      },
    ],
  },

  shizuku: {
    platforms: ['iOS', 'watchOS'],
    localData: ['recettes', 'historique de brassage', 'réglages'],
    ads: null,
    purchases: [],
    analytics: null,
    network: null,
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'La reconnaissance vocale utilise le service de dictée d’Apple, activé uniquement quand vous allumez le micro depuis l’écran de brassage.',
        en: 'Voice recognition uses Apple’s speech service, active only while you turn the microphone on from the brew screen.',
      },
    ],
  },

  poddroid: {
    platforms: ['Android'],
    localData: ['abonnements', 'progression d’écoute', 'épisodes téléchargés', 'réglages'],
    ads: null,
    purchases: [],
    analytics: null,
    network: {
      purpose:
        'la recherche de podcasts, le téléchargement des flux RSS et des épisodes auxquels vous êtes abonné',
    },
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'L’application ne contacte que les serveurs des podcasts que vous écoutez et l’annuaire de recherche. Aucun compte, aucune régie publicitaire, aucun traceur.',
        en: 'The app only contacts the servers of the podcasts you listen to and the search directory. No account, no ad network, no trackers.',
      },
    ],
  },

  ecopompe: {
    platforms: ['iOS', 'Android'],
    localData: ['stations favorites', 'carburant préféré', 'réglages'],
    ads: null,
    purchases: [],
    analytics: null,
    network: {
      purpose:
        'le téléchargement des prix publiés en données ouvertes par les stations-service françaises',
    },
    accounts: null,
    forChildren: false,
    updated: REVIEWED,
    notes: [
      {
        fr: 'Votre position sert uniquement, sur votre appareil, à trier les stations par distance. Elle n’est envoyée à aucun serveur.',
        en: 'Your location is used only, on your device, to sort stations by distance. It is never sent to any server.',
      },
    ],
  },
};

export function getPrivacyFacts(slug: string): PrivacyFacts {
  const facts = PRIVACY_FACTS[slug];
  if (!facts) {
    throw new Error(`Aucun fait de confidentialité pour « ${slug} » dans privacy-facts.ts`);
  }
  return facts;
}
