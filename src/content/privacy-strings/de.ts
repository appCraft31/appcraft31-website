import type { PrivacyStrings } from './keys';

const MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

export const strings: PrivacyStrings = {
  referenceVersion: (url) =>
    `Dieses Dokument ist eine Übersetzung. Bei Abweichungen ist die französische Fassung unter ${url} maßgeblich.`,

  responsibleTitle: 'Wer verantwortlich ist',
  publishedBy: (app, email) =>
    `${app} wird von AppCraft31 herausgegeben, einem unabhängigen Studio mit Sitz in Toulouse (Frankreich). Bei Fragen zu dieser Erklärung schreiben Sie an ${email}.`,
  policyScope: (platforms) =>
    `Diese Erklärung beschreibt, was die App auf ${platforms} tatsächlich mit Daten macht.`,

  localTitle: 'Was auf Ihrem Gerät bleibt',
  localIntro: (app) =>
    `${app} speichert das Folgende im Speicher Ihres Geräts. Nichts davon wird an einen Server gesendet, und alles verschwindet, wenn Sie die App deinstallieren.`,
  localIntroCloud: (app) =>
    `${app} speichert das Folgende im Speicher Ihres Geräts. Nichts davon wird an einen Server des Studios gesendet.`,

  adsTitle: 'Werbung',
  adsIntro: (app, network, formats) =>
    `${app} ist kostenlos und bindet das ${network}-SDK ein, in den folgenden Formaten: ${formats}. ${network} wird für Nutzerinnen und Nutzer im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz von Google Ireland Limited bereitgestellt, andernorts von Google LLC.`,
  adsProcessing:
    'In diesem Rahmen kann Google die Werbekennung des Geräts, app-bezogene Kennungen und Daten zur Interaktion mit Anzeigen (Einblendungen, Klicks) verarbeiten.',
  adsMediation: (partners) =>
    `Werbeanfragen werden über die AdMob-Vermittlung verteilt und können an andere Werbenetzwerke gehen, deren SDK in der App eingebunden ist: ${partners}. Erhält eines davon den Zuschlag, verarbeitet auch dieses Netzwerk die Werbekennung, app-bezogene Kennungen und Interaktionsdaten — nach seiner eigenen Datenschutzerklärung.`,
  adsMediationConsent:
    'Ihre Entscheidung im Einwilligungsdialog gilt für diese Netzwerke ebenso wie für Google: Sie wird mit jeder Werbeanfrage weitergegeben.',
  adsAtt:
    'Unter iOS fragt das System beim ersten Start, ob Sie die Verfolgung Ihrer Aktivität erlauben. Lehnen Sie ab, wird keine Werbekennung (IDFA) weitergegeben und die Anzeigen werden nicht personalisiert.',
  adsUmp:
    'Im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz wird über die Google User Messaging Platform ein DSGVO-konformer Einwilligungsdialog angezeigt. Sie können der Nutzung Ihrer Daten zu Werbezwecken zustimmen, sie ablehnen oder sie im Einzelnen einstellen.',
  adsUmpNoReopen:
    'Diese Entscheidung bewahrt das Google-SDK auf. Die App bietet noch keinen Bildschirm, um das Formular erneut zu öffnen: Deinstallieren und erneutes Installieren zeigt es wieder an.',
  adsUmpReopen: 'Sie können diese Entscheidung in den Einstellungen der App ändern.',
  adsRemovedBy: (purchase) =>
    `Der Kauf „${purchase}“ entfernt die Werbung dauerhaft aus der App.`,
  adsNone: (app) =>
    `${app} zeigt keinerlei Werbung. Es ist kein Werbenetzwerk eingebunden, und es wird keine Werbekennung ausgelesen.`,

  purchasesTitle: 'In-App-Käufe',
  purchasesSome: (app) =>
    `${app} bietet In-App-Käufe an. Die Zahlungen wickeln der App Store oder Google Play ab: Wir erhalten weder Ihre Kartennummer noch Ihre Anschrift noch irgendwelche Rechnungsdaten.`,
  purchasesNone: (app) => `${app} bietet keine In-App-Käufe an.`,

  analyticsTitle: 'Nutzungsmessung',
  analyticsPurpose: (app, vendors, purpose) => `${app} sendet Daten an ${vendors}, um ${purpose}.`,
  analyticsDefault: (app, vendors) =>
    `${app} sendet Daten an ${vendors}, einzig um Fehler in der App zu beheben.`,
  analyticsOptOut: 'Sie können diese Übermittlung jederzeit in den Einstellungen der App abschalten.',
  analyticsAnonymous: 'Diese Daten lassen keinen Rückschluss auf Ihre Person zu.',
  analyticsNone: (app) =>
    `${app} enthält kein Werkzeug zur Nutzungsmessung, zur Nutzungsstatistik oder zur Absturzberichterstattung.`,

  networkTitle: 'Netzwerkverbindung',
  networkPurpose: (purpose) => `Die App nutzt Ihre Verbindung, um ${purpose}.`,
  networkOffline: (app, hasAds) =>
    `${app} läuft vollständig offline. Zur Nutzung braucht die App keine Verbindung${hasAds ? ', abgesehen vom Laden der Anzeigen' : ''}.`,

  accountsSignInTitle: 'Anmeldung an Ihrem Konto',
  accountsServiceTitle: 'Konten und Spieldienste',
  accountsNoneTitle: 'Konten',
  accountsService: (app, service, what) =>
    `${app} verlangt nie, ein Konto anzulegen. ${service} wird für ${what} genutzt: In diesem Rahmen werden nur Ihr ${service}-Spitzname und Ihre Punktzahlen übermittelt, über den Dienst von Apple.`,
  accountsNone: (app) =>
    `${app} verlangt nie, ein Konto anzulegen, und nutzt keinerlei Anmeldedienst.`,

  childrenTitle: 'Kinder',
  childrenAimed: (app) =>
    `${app} richtet sich an Kinder und folgt daher den Regeln der Familienprogramme der Stores.`,
  childrenNotAimed: (app) =>
    `${app} richtet sich nicht eigens an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von ihnen.`,
  childrenAds:
    'Die ausgespielten Anzeigen sind so eingestellt, dass sie die Inhaltskategorien für Familien einhalten.',

  rightsTitle: 'Ihre Rechte',
  rightsUninstall:
    'Da die oben beschriebenen Daten auf Ihrem Gerät bleiben, ist der direkteste Weg, sie zu löschen, die App zu deinstallieren: Alles geht mit ihr.',
  rightsUninstallCloud:
    'Wenn Sie die App deinstallieren, werden die auf dem Gerät gespeicherten Daten gelöscht. Die iCloud-Kopie löschen Sie in den iCloud-Einstellungen Ihres Geräts (Speicher verwalten).',
  rightsGdpr: (email) =>
    `Die Datenschutz-Grundverordnung gewährt Ihnen darüber hinaus Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch. Um sie auszuüben, schreiben Sie an ${email}.`,
  rightsAdNetworks: (networks, inApp) =>
    `Für die von den Werbenetzwerken verarbeiteten Daten sind diese Rechte gegenüber jedem einzelnen Netzwerk geltend zu machen: ${networks}. ${inApp ? 'Ihre Werbeeinstellungen bleiben zudem jederzeit in den Einstellungen der App und Ihres Geräts änderbar.' : 'Ihre Werbeeinstellungen bleiben zudem jederzeit in den Einstellungen Ihres Geräts änderbar.'}`,

  changesTitle: 'Änderungen',
  changes: (date) =>
    `Diese Erklärung kann sich zusammen mit der App ändern. Jede Änderung wird auf dieser Seite mit ihrem Datum veröffentlicht. Zuletzt aktualisiert: ${date}.`,

  contactTitle: 'Kontakt',
  contact: (email) =>
    `Eine Frage, ein Anliegen, ein Zweifel an diesem Dokument? Schreiben Sie an ${email}. Wir beantworten jede Nachricht.`,

  formats: { banner: 'Banner', interstitial: 'Interstitial', rewarded: 'belohntes Video' },
  kinds: {
    'non-consumable': 'einmaliger Kauf',
    consumable: 'verbrauchbarer Kauf',
    subscription: 'Abonnement',
  },

  joinLast: (head, last) => `${head} und ${last}`,
  formatDate: (y, m, d) => `${d}. ${MONTHS[m - 1]} ${y}`,
};
