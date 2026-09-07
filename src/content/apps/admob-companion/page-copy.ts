import type { AppCopy, Lang } from '@/lib/types';

/**
 * Textes de la page d'AdMob Companion.
 *
 * Tout ce qui est affirmé ici se vérifie dans `~/essaies_dev/Admob` : les huit
 * périodes viennent de `core/Period.kt`, les six règles d'alerte de
 * `ui/alerts/AlertsViewModel.kt`, les vingt-quatre mois d'historique de la
 * valeur par défaut de `repo/SettingsStore.kt`, et les limites de l'API des
 * commentaires de `repo/SyncOrchestrator.kt`.
 *
 * L'application n'affiche aucune publicité : elle *lit* les revenus d'un
 * compte AdMob. Le nom trompe, le code non — `app/build.gradle.kts` ne déclare
 * aucun SDK de régie.
 */
const fr: AppCopy = {
  tagline: 'Suivi AdMob · Android 8+ · lecture seule',

  headline: {
    lead: 'Vos revenus AdMob,',
    highlight: 'lisibles hors ligne.',
  },

  intro:
    'AdMob Companion interroge l’API AdMob et conserve les chiffres sur l’appareil. Le tableau de bord, les rapports et les analyses restent consultables sans réseau, un widget affiche les revenus du jour, et des alertes préviennent quand une app décroche. L’application ne modifie jamais rien : elle lit.',

  stats: [
    { value: '8', label: 'périodes prédéfinies' },
    { value: '6', label: 'règles d’alerte' },
    { value: '24 mois', label: 'd’historique repris' },
    { value: '100 %', label: 'stocké sur l’appareil' },
  ],

  sections: [
    {
      id: 'features',
      kicker: 'Ce que l’application montre',
      title: 'Sept écrans, une seule source',
      body: 'Tout est lu depuis la base locale : l’affichage ne dépend jamais d’une requête en cours. La synchronisation, elle, tourne en arrière-plan.',
      items: [
        {
          title: 'Tableau de bord',
          body: 'Jour, veille, 7 et 30 jours, mois en cours, et projection de fin de mois — avec la comparaison à la période précédente de même longueur.',
        },
        {
          title: 'Applications',
          body: 'La liste des apps du compte et leur ventilation de revenus, puis, pour chacune, sa série temporelle et ses blocs d’annonces.',
        },
        {
          title: 'Rapports',
          body: 'Un générateur libre sur le rapport réseau et le rapport de médiation : dimensions, métriques et plage de dates au choix.',
        },
        {
          title: 'Analyses',
          body: 'Pays, formats, plateformes, sources de médiation avec eCPM observé, et campagnes.',
        },
        {
          title: 'Alertes',
          body: 'Six règles évaluées après chaque synchronisation : résumé quotidien, seuils haut et bas, chute du taux de correspondance, chute de l’eCPM, app sans impression.',
        },
        {
          title: 'Widget d’écran d’accueil',
          body: 'Les revenus du jour, ceux d’hier et ceux du mois, sans ouvrir l’application.',
        },
      ],
    },
    {
      id: 'how-it-plays',
      kicker: 'Ce que l’API impose',
      title: 'Les limites sont affichées, pas masquées',
      body: 'Un tableau de bord qui arrondit les angles finit par mentir. Celui-ci nomme ce que l’API AdMob ne permet pas.',
      items: [
        {
          title: 'Un « jour AdMob » n’est pas votre jour',
          body: 'Tous les rapports sont exprimés dans le fuseau America/Los_Angeles, imposé par l’API. L’application l’indique explicitement plutôt que de faire croire à un jour local.',
        },
        {
          title: 'Les chiffres récents sont révisés',
          body: 'AdMob corrige le jour en cours et les deux ou trois précédents. Chaque synchronisation réécrit donc une fenêtre glissante de quatre jours.',
        },
        {
          title: 'Lecture seule, par construction',
          body: 'L’autorisation demandée est « admob.readonly ». Aucun écran ne permet de modifier un bloc d’annonces, un paramètre de compte ou une campagne.',
        },
        {
          title: 'Ce qui n’existe pas dans l’API',
          body: 'Paiements et solde, centre de règles, blocage d’annonceurs et app-ads.txt sont absents de l’API AdMob — donc absents de l’application.',
        },
        {
          title: 'Consultable sans réseau',
          body: 'Les métriques sont conservées dans une base locale. Hors connexion, l’application affiche le dernier état synchronisé au lieu d’une page vide.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Vie privée',
      title: 'Vos chiffres ne transitent que par Google',
      body: 'L’application se connecte à votre compte Google par OAuth 2.0 avec PKCE, dans un onglet du navigateur — jamais dans une WebView, et le mot de passe n’est jamais vu par l’application. Les jetons sont chiffrés en AES/GCM par une clé qui ne quitte pas le Keystore Android. Les données lues restent sur l’appareil : aucun serveur AppCraft31 ne les reçoit. Aucune publicité, aucun achat intégré, aucun outil de mesure d’audience.',
    },
  ],

  cta: {
    title: 'Un outil interne, documenté publiquement',
    body: 'AdMob Companion est développé pour l’usage du studio et n’est distribué sur aucun store. Cette page et la politique de confidentialité qui l’accompagne existent parce que Google exige des adresses publiques pour tout client OAuth.',
  },

  meta: {
    title: 'AdMob Companion — suivi AdMob en lecture seule sur Android',
    description:
      'Tableau de bord, rapports, analyses, alertes et widget pour un compte AdMob. Données conservées sur l’appareil et consultables hors ligne, autorisation en lecture seule, aucune publicité.',
  },

  chips: [],
};

const en: AppCopy = {
  tagline: 'AdMob monitoring · Android 8+ · read-only',

  headline: {
    lead: 'Your AdMob earnings,',
    highlight: 'readable offline.',
  },

  intro:
    'AdMob Companion queries the AdMob API and keeps the figures on the device. The dashboard, reports and breakdowns stay readable with no network, a widget shows today’s earnings, and alerts warn you when an app drops off. The app never changes anything: it reads.',

  stats: [
    { value: '8', label: 'preset periods' },
    { value: '6', label: 'alert rules' },
    { value: '24 mo', label: 'of history backfilled' },
    { value: '100%', label: 'stored on device' },
  ],

  sections: [
    {
      id: 'features',
      kicker: 'What the app shows',
      title: 'Seven screens, a single source',
      body: 'Everything is read from the local database, so the display never waits on a request in flight. Syncing happens in the background.',
      items: [
        {
          title: 'Dashboard',
          body: 'Today, yesterday, 7 and 30 days, current month, and an end-of-month projection — each compared with the preceding period of the same length.',
        },
        {
          title: 'Apps',
          body: 'The account’s apps and their revenue split, then, for each one, its time series and its ad units.',
        },
        {
          title: 'Reports',
          body: 'A free-form builder over the network and mediation reports: pick your dimensions, metrics and date range.',
        },
        {
          title: 'Breakdowns',
          body: 'Countries, formats, platforms, mediation sources with observed eCPM, and campaigns.',
        },
        {
          title: 'Alerts',
          body: 'Six rules evaluated after every sync: daily summary, upper and lower thresholds, match rate drop, eCPM drop, app serving no impressions.',
        },
        {
          title: 'Home screen widget',
          body: 'Today’s earnings, yesterday’s and the month’s, without opening the app.',
        },
      ],
    },
    {
      id: 'how-it-plays',
      kicker: 'What the API imposes',
      title: 'The limits are shown, not hidden',
      body: 'A dashboard that smooths over the awkward parts ends up lying. This one names what the AdMob API does not allow.',
      items: [
        {
          title: 'An “AdMob day” is not your day',
          body: 'Every report is expressed in the America/Los_Angeles time zone, as the API requires. The app says so plainly rather than pretending it is a local day.',
        },
        {
          title: 'Recent figures get revised',
          body: 'AdMob restates the current day and the two or three before it. Each sync therefore rewrites a rolling four-day window.',
        },
        {
          title: 'Read-only by construction',
          body: 'The scope requested is “admob.readonly”. No screen can change an ad unit, an account setting or a campaign.',
        },
        {
          title: 'What the API does not expose',
          body: 'Payments and balance, the policy centre, advertiser blocking and app-ads.txt are absent from the AdMob API — and therefore from the app.',
        },
        {
          title: 'Readable with no network',
          body: 'Metrics are kept in a local database. Offline, the app shows the last synced state instead of an empty page.',
        },
      ],
    },
    {
      id: 'privacy',
      kicker: 'Privacy',
      title: 'Your figures only ever travel to Google',
      body: 'The app signs in to your Google account through OAuth 2.0 with PKCE, in a browser tab — never a WebView, and the app never sees your password. Tokens are encrypted with AES/GCM by a key that never leaves the Android Keystore. The data read stays on the device: no AppCraft31 server receives it. No advertising, no in-app purchases, no analytics.',
    },
  ],

  cta: {
    title: 'An internal tool, publicly documented',
    body: 'AdMob Companion is built for the studio’s own use and is distributed on no store. This page and its privacy policy exist because Google requires public addresses for any OAuth client.',
  },

  meta: {
    title: 'AdMob Companion — read-only AdMob monitoring on Android',
    description:
      'Dashboard, reports, breakdowns, alerts and a widget for one AdMob account. Data kept on the device and readable offline, read-only scope, no advertising.',
  },

  chips: [],
};

export const pageCopy: Partial<Record<Lang, AppCopy>> = { fr, en };
