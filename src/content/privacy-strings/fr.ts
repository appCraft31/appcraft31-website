import type { PrivacyStrings } from './keys';

const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

/** Le français fait foi : c'est la version de référence, il ne renvoie à rien. */
export const strings: PrivacyStrings = {
  referenceVersion: null,

  responsibleTitle: 'Qui est responsable',
  publishedBy: (app, email) =>
    `${app} est édité par AppCraft31, studio indépendant basé à Toulouse (France). Pour toute question relative à cette politique, écrivez à ${email}.`,
  policyScope: (platforms) =>
    `Cette politique décrit ce que l'application fait réellement des données, sur ${platforms}.`,

  localTitle: 'Ce qui reste sur votre appareil',
  localIntro: (app) =>
    `${app} enregistre les éléments suivants dans le stockage de votre appareil. Ils ne sont envoyés à aucun serveur et disparaissent si vous désinstallez l'application.`,
  localIntroCloud: (app) =>
    `${app} enregistre les éléments suivants dans le stockage de votre appareil. Ils ne sont envoyés à aucun serveur du studio.`,

  adsTitle: 'Publicité',
  adsIntro: (app, network, formats) =>
    `${app} est gratuit et intègre le SDK ${network}, sous les formats suivants : ${formats}. ${network} est fourni par Google Ireland Limited pour les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse, et par Google LLC ailleurs.`,
  adsProcessing:
    "Dans ce cadre, Google est susceptible de traiter l'identifiant publicitaire de l'appareil, des identifiants liés à l'application et des données d'interaction avec les annonces (affichages, clics).",
  adsMediation: (partners) =>
    `La demande publicitaire est arbitrée par la médiation AdMob, qui peut la confier à d'autres régies dont le SDK est embarqué dans l'application : ${partners}. Lorsqu'une annonce leur est attribuée, ces régies traitent à leur tour l'identifiant publicitaire, des identifiants liés à l'application et les données d'interaction avec l'annonce, selon leur propre politique de confidentialité.`,
  adsMediationConsent:
    "Le choix que vous exprimez dans l'écran de consentement s'applique à ces régies comme à Google : il leur est transmis avec chaque demande d'annonce.",
  adsAtt:
    "Sur iOS, le système vous demande au premier lancement si vous autorisez le suivi de votre activité. Si vous refusez, aucun identifiant publicitaire (IDFA) n'est partagé et les annonces ne sont pas personnalisées.",
  adsUmp:
    "Dans l'Espace économique européen, au Royaume-Uni et en Suisse, un écran de consentement conforme au RGPD est affiché via Google User Messaging Platform. Vous pouvez accepter, refuser ou personnaliser l'usage de vos données à des fins publicitaires.",
  adsUmpNoReopen:
    "Ce choix est conservé par le SDK Google. L'application ne propose pas encore d'écran pour rouvrir ce formulaire : désinstaller puis réinstaller l'application le réaffiche.",
  adsUmpReopen: "Vous pouvez revenir sur ce choix depuis les réglages de l'application.",
  adsRemovedBy: (purchase) =>
    `L'achat « ${purchase} » retire définitivement la publicité de l'application.`,
  adsNone: (app) =>
    `${app} n'affiche aucune publicité. Aucune régie publicitaire n'est intégrée à l'application, et aucun identifiant publicitaire n'est lu.`,

  purchasesTitle: 'Achats intégrés',
  purchasesSome: (app) =>
    `${app} propose des achats intégrés. Les paiements sont traités par l'App Store ou Google Play : nous ne recevons ni votre numéro de carte, ni votre adresse, ni aucune donnée de facturation.`,
  purchasesNone: (app) => `${app} ne propose aucun achat intégré.`,

  analyticsTitle: 'Mesure d’audience',
  analyticsPurpose: (app, vendors, purpose) => `${app} remonte ${vendors}, pour ${purpose}.`,
  analyticsDefault: (app, vendors) =>
    `${app} remonte ${vendors}, dans le seul but de corriger les défauts de l'application.`,
  analyticsOptOut:
    "Vous pouvez couper cette remontée à tout moment depuis les réglages de l'application.",
  analyticsAnonymous: 'Ces données ne permettent pas de vous identifier.',
  analyticsNone: (app) =>
    `${app} n'intègre aucun outil de mesure d'audience, de statistiques d'usage ou de rapport de plantage.`,

  networkTitle: 'Connexion réseau',
  networkPurpose: (purpose) => `L'application utilise votre connexion pour ${purpose}.`,
  networkOffline: (app, hasAds) =>
    `${app} fonctionne entièrement hors ligne. L'application n'a besoin d'aucune connexion pour être utilisée${hasAds ? ', en dehors du chargement des annonces' : ''}.`,

  accountsSignInTitle: 'Connexion à votre compte',
  accountsServiceTitle: 'Comptes et services de jeu',
  accountsNoneTitle: 'Comptes',
  accountsService: (app, service, what) =>
    `${app} ne vous demande jamais de créer un compte. ${service} est utilisé pour ${what} : dans ce cadre, seul votre pseudonyme ${service} et vos scores sont transmis, par le service d'Apple.`,
  accountsNone: (app) =>
    `${app} ne vous demande jamais de créer un compte et n'utilise aucun service d'identification.`,

  childrenTitle: 'Enfants',
  childrenAimed: (app) =>
    `${app} s'adresse aux enfants et respecte à ce titre les règles des programmes familiaux des stores.`,
  childrenNotAimed: (app) =>
    `${app} n'est pas destiné spécifiquement aux enfants de moins de 13 ans, et nous ne collectons pas sciemment de données personnelles les concernant.`,
  childrenAds:
    'Les annonces diffusées sont configurées pour respecter les catégories de contenu familial.',

  rightsTitle: 'Vos droits',
  rightsUninstall:
    "Les données décrites ci-dessus restant sur votre appareil, le moyen le plus direct de les effacer est de désinstaller l'application : tout disparaît avec elle.",
  rightsUninstallCloud:
    "Désinstaller l'application efface les données enregistrées sur l'appareil. Leur copie iCloud, elle, se supprime depuis les réglages iCloud de votre appareil (gestion du stockage).",
  rightsGdpr: (email) =>
    `Le règlement général sur la protection des données vous ouvre par ailleurs un droit d'accès, de rectification, d'effacement, de limitation et d'opposition. Pour l'exercer, écrivez à ${email}.`,
  rightsAdNetworks: (networks, inApp) =>
    `Pour les données traitées par les régies publicitaires, ces droits s'exercent auprès de chacune d'elles : ${networks}. ${inApp ? "Vos choix publicitaires restent par ailleurs modifiables à tout moment depuis les réglages de l'application et ceux de votre appareil." : 'Vos choix publicitaires restent par ailleurs modifiables à tout moment depuis les réglages de votre appareil.'}`,

  changesTitle: 'Modifications',
  changes: (date) =>
    `Cette politique peut évoluer en même temps que l'application. Toute modification est publiée sur cette page, avec sa date. Dernière mise à jour : ${date}.`,

  contactTitle: 'Contact',
  contact: (email) =>
    `Une question, une demande, un doute sur ce document ? Écrivez à ${email}. Nous répondons à toutes les demandes.`,

  formats: { banner: 'bannière', interstitial: 'interstitiel', rewarded: 'vidéo récompensée' },
  kinds: {
    'non-consumable': 'achat définitif',
    consumable: 'achat consommable',
    subscription: 'abonnement',
  },

  joinLast: (head, last) => `${head} et ${last}`,
  formatDate: (y, m, d) => `${d} ${MONTHS[m - 1]} ${y}`,
};
