import type { PrivacyStrings } from './keys';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const strings: PrivacyStrings = {
  referenceVersion: (url) =>
    `This is a translation. In case of any discrepancy, the French version at ${url} is the reference text.`,

  responsibleTitle: 'Who is responsible',
  publishedBy: (app, email) =>
    `${app} is published by AppCraft31, an independent studio based in Toulouse, France. For any question about this policy, write to ${email}.`,
  policyScope: (platforms) =>
    `This policy describes what the app actually does with data, on ${platforms}.`,

  localTitle: 'What stays on your device',
  localIntro: (app) =>
    `${app} stores the following in your device's own storage. None of it is sent to any server, and all of it disappears if you uninstall the app.`,
  localIntroCloud: (app) =>
    `${app} stores the following in your device's own storage. None of it is sent to any studio server.`,

  adsTitle: 'Advertising',
  adsIntro: (app, network, formats) =>
    `${app} is free and includes the ${network} SDK, in the following formats: ${formats}. ${network} is provided by Google Ireland Limited for users in the European Economic Area, the United Kingdom and Switzerland, and by Google LLC elsewhere.`,
  adsProcessing:
    'In that context, Google may process the device advertising identifier, app-related identifiers and ad interaction data (impressions, clicks).',
  adsMediation: (partners) =>
    `Ad requests are arbitrated by AdMob mediation, which may hand them to other networks whose SDK is embedded in the app: ${partners}. When an ad is awarded to them, those networks in turn process the advertising identifier, app-related identifiers and ad interaction data, under their own privacy policy.`,
  adsMediationConsent:
    'The choice you make in the consent screen applies to those networks just as it does to Google: it is passed along with every ad request.',
  adsAtt:
    'On iOS, the system asks at first launch whether you allow tracking of your activity. If you decline, no advertising identifier (IDFA) is shared and ads are not personalised.',
  adsUmp:
    'In the European Economic Area, the United Kingdom and Switzerland, a GDPR-compliant consent screen is shown through the Google User Messaging Platform. You can accept, decline or customise the use of your data for advertising.',
  adsUmpNoReopen:
    'That choice is kept by the Google SDK. The app does not yet offer a screen to reopen the form: uninstalling and reinstalling the app shows it again.',
  adsUmpReopen: 'You can change that choice from the app settings.',
  adsRemovedBy: (purchase) =>
    `The “${purchase}” purchase permanently removes advertising from the app.`,
  adsNone: (app) =>
    `${app} shows no advertising at all. No ad network is built into the app, and no advertising identifier is read.`,

  purchasesTitle: 'In-app purchases',
  purchasesSome: (app) =>
    `${app} offers in-app purchases. Payments are handled by the App Store or Google Play: we never receive your card number, your address or any billing data.`,
  purchasesNone: (app) => `${app} offers no in-app purchases.`,

  analyticsTitle: 'Analytics',
  analyticsPurpose: (app, vendors, purpose) => `${app} sends ${vendors}, to ${purpose}.`,
  analyticsDefault: (app, vendors) =>
    `${app} sends ${vendors}, for the sole purpose of fixing defects in the app.`,
  analyticsOptOut: 'You can switch this off at any time from the app settings.',
  analyticsAnonymous: 'This data cannot be used to identify you.',
  analyticsNone: (app) =>
    `${app} includes no analytics, usage statistics or crash reporting tool.`,

  networkTitle: 'Network connection',
  networkPurpose: (purpose) => `The app uses your connection for ${purpose}.`,
  networkOffline: (app, hasAds) =>
    `${app} runs entirely offline. The app needs no connection to be used${hasAds ? ', apart from loading the ads' : ''}.`,

  accountsSignInTitle: 'Signing in to your account',
  accountsServiceTitle: 'Accounts and game services',
  accountsNoneTitle: 'Accounts',
  accountsService: (app, service, what) =>
    `${app} never asks you to create an account. ${service} is used for ${what}: in that context, only your ${service} nickname and your scores are transmitted, through Apple's service.`,
  accountsNone: (app) =>
    `${app} never asks you to create an account and uses no sign-in service.`,

  childrenTitle: 'Children',
  childrenAimed: (app) =>
    `${app} is aimed at children and follows the rules of the stores' family programmes accordingly.`,
  childrenNotAimed: (app) =>
    `${app} is not specifically aimed at children under 13, and we do not knowingly collect personal data about them.`,
  childrenAds: 'The ads served are configured to respect family content categories.',

  rightsTitle: 'Your rights',
  rightsUninstall:
    'Since the data described above stays on your device, the most direct way to erase it is to uninstall the app: everything goes with it.',
  rightsUninstallCloud:
    'Uninstalling the app erases the data stored on the device. Its iCloud copy is deleted from your device’s iCloud settings (storage management).',
  rightsGdpr: (email) =>
    `The General Data Protection Regulation further grants you rights of access, rectification, erasure, restriction and objection. To exercise them, write to ${email}.`,
  rightsAdNetworks: (networks, inApp) =>
    `For data processed by the ad networks, those rights are exercised with each of them: ${networks}. ${inApp ? 'Your advertising choices also remain changeable at any time from the app settings and your device settings.' : 'Your advertising choices also remain changeable at any time from your device settings.'}`,

  changesTitle: 'Changes',
  changes: (date) =>
    `This policy may change alongside the app. Any change is published on this page, with its date. Last updated: ${date}.`,

  contactTitle: 'Contact',
  contact: (email) =>
    `A question, a request, a doubt about this document? Write to ${email}. We answer every message.`,

  formats: { banner: 'banner', interstitial: 'interstitial', rewarded: 'rewarded video' },
  kinds: {
    'non-consumable': 'one-off purchase',
    consumable: 'consumable purchase',
    subscription: 'subscription',
  },

  joinLast: (head, last) => `${head} and ${last}`,
  formatDate: (y, m, d) => `${MONTHS[m - 1]} ${d}, ${y}`,
};
