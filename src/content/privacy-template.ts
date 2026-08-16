/**
 * Rédige une politique de confidentialité à partir des faits de l'app.
 *
 * Le texte découle des faits : une app dont `ads` vaut `null` n'a tout
 * simplement pas de rubrique publicité, et une app qui déclare
 * `com.…​.noads` en aura forcément une. C'est ce qui empêche de réécrire, par
 * inattention, la contre-vérité qu'on a trouvée sur Glyphe.
 *
 * Les rubriques suivent l'ordre attendu par les stores : responsable, données
 * locales, publicité, achats intégrés, mesure d'audience, réseau, comptes,
 * enfants, droits, modifications, contact.
 */

import type { AdFormat, PrivacyFacts } from '@/lib/privacy-types';
import type { Lang } from '@/lib/types';

export interface PrivacySection {
  id: string;
  title: string;
  /** Paragraphes. Le HTML n'est jamais utilisé ici : rien que du texte. */
  body: string[];
  /** Liste à puces éventuelle. */
  items?: string[];
}

/** Les langues rédigées ; les autres retombent sur l'anglais. */
type PrivacyLang = 'fr' | 'en';

function pick(lang: Lang): PrivacyLang {
  return lang === 'fr' ? 'fr' : 'en';
}

const FORMAT_LABEL: Record<PrivacyLang, Record<AdFormat, string>> = {
  fr: { banner: 'bannière', interstitial: 'interstitiel', rewarded: 'vidéo récompensée' },
  en: { banner: 'banner', interstitial: 'interstitial', rewarded: 'rewarded video' },
};

const KIND_LABEL: Record<PrivacyLang, Record<string, string>> = {
  fr: {
    'non-consumable': 'achat définitif',
    consumable: 'achat consommable',
    subscription: 'abonnement',
  },
  en: {
    'non-consumable': 'one-off purchase',
    consumable: 'consumable purchase',
    subscription: 'subscription',
  },
};

function list(lang: PrivacyLang, values: string[]): string {
  if (values.length <= 1) return values[0] ?? '';
  const last = values[values.length - 1];
  const head = values.slice(0, -1).join(', ');
  return lang === 'fr' ? `${head} et ${last}` : `${head} and ${last}`;
}

function formatDate(iso: string, lang: PrivacyLang): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = {
    fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  }[lang];
  return lang === 'fr' ? `${d} ${months[m - 1]} ${y}` : `${months[m - 1]} ${d}, ${y}`;
}

export function privacySections(
  appName: string,
  facts: PrivacyFacts,
  contactEmail: string,
  langIn: Lang,
): PrivacySection[] {
  const lang = pick(langIn);
  const fr = lang === 'fr';
  const sections: PrivacySection[] = [];

  /* 1 — Responsable du traitement ---------------------------------------- */
  sections.push({
    id: 'responsable',
    title: fr ? 'Qui est responsable' : 'Who is responsible',
    body: [
      fr
        ? `${appName} est édité par AppCraft31, studio indépendant basé à Toulouse (France). Pour toute question relative à cette politique, écrivez à ${contactEmail}.`
        : `${appName} is published by AppCraft31, an independent studio based in Toulouse, France. For any question about this policy, write to ${contactEmail}.`,
      fr
        ? `Cette politique décrit ce que l'application fait réellement des données, sur ${list('fr', facts.platforms)}.`
        : `This policy describes what the app actually does with data, on ${list('en', facts.platforms)}.`,
    ],
  });

  /* 2 — Données stockées localement -------------------------------------- */
  sections.push({
    id: 'donnees-locales',
    title: fr ? 'Ce qui reste sur votre appareil' : 'What stays on your device',
    body: [
      fr
        ? `${appName} enregistre les éléments suivants dans le stockage de votre appareil. Ils ne sont envoyés à aucun serveur et disparaissent si vous désinstallez l'application.`
        : `${appName} stores the following in your device's own storage. None of it is sent to any server, and all of it disappears if you uninstall the app.`,
      ...(facts.notes ?? []).map((n) => n[lang]),
    ],
    items: facts.localData,
  });

  /* 3 — Publicité --------------------------------------------------------- */
  if (facts.ads) {
    const formats = facts.ads.formats.map((f) => FORMAT_LABEL[lang][f]);
    const body = [
      fr
        ? `${appName} est gratuit et intègre le SDK ${facts.ads.network}, sous les formats suivants : ${list('fr', formats)}. ${facts.ads.network} est fourni par Google Ireland Limited pour les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse, et par Google LLC ailleurs.`
        : `${appName} is free and includes the ${facts.ads.network} SDK, in the following formats: ${list('en', formats)}. ${facts.ads.network} is provided by Google Ireland Limited for users in the European Economic Area, the United Kingdom and Switzerland, and by Google LLC elsewhere.`,
      fr
        ? "Dans ce cadre, Google est susceptible de traiter l'identifiant publicitaire de l'appareil, des identifiants liés à l'application et des données d'interaction avec les annonces (affichages, clics)."
        : 'In that context, Google may process the device advertising identifier, app-related identifiers and ad interaction data (impressions, clicks).',
    ];

    if (facts.ads.att) {
      body.push(
        fr
          ? "Sur iOS, le système vous demande au premier lancement si vous autorisez le suivi de votre activité. Si vous refusez, aucun identifiant publicitaire (IDFA) n'est partagé et les annonces ne sont pas personnalisées."
          : 'On iOS, the system asks at first launch whether you allow tracking of your activity. If you decline, no advertising identifier (IDFA) is shared and ads are not personalised.',
      );
    }
    if (facts.ads.ump) {
      body.push(
        fr
          ? "Dans l'Espace économique européen, au Royaume-Uni et en Suisse, un écran de consentement conforme au RGPD est affiché via Google User Messaging Platform. Vous pouvez accepter, refuser ou personnaliser l'usage de vos données à des fins publicitaires, et revenir sur ce choix depuis les réglages de l'application."
          : 'In the European Economic Area, the United Kingdom and Switzerland, a GDPR-compliant consent screen is shown through the Google User Messaging Platform. You can accept, decline or customise the use of your data for advertising, and change that choice from the app settings.',
      );
    }
    if (facts.ads.removedBy) {
      body.push(
        fr
          ? `L'achat « ${facts.ads.removedBy} » retire définitivement la publicité de l'application.`
          : `The “${facts.ads.removedBy}” purchase permanently removes advertising from the app.`,
      );
    }

    sections.push({
      id: 'publicite',
      title: fr ? 'Publicité' : 'Advertising',
      body,
    });
  } else {
    sections.push({
      id: 'publicite',
      title: fr ? 'Publicité' : 'Advertising',
      body: [
        fr
          ? `${appName} n'affiche aucune publicité. Aucune régie publicitaire n'est intégrée à l'application, et aucun identifiant publicitaire n'est lu.`
          : `${appName} shows no advertising at all. No ad network is built into the app, and no advertising identifier is read.`,
      ],
    });
  }

  /* 4 — Achats intégrés --------------------------------------------------- */
  sections.push({
    id: 'achats',
    title: fr ? 'Achats intégrés' : 'In-app purchases',
    body:
      facts.purchases.length > 0
        ? [
            fr
              ? `${appName} propose des achats intégrés. Les paiements sont traités par l'App Store ou Google Play : nous ne recevons ni votre numéro de carte, ni votre adresse, ni aucune donnée de facturation.`
              : `${appName} offers in-app purchases. Payments are handled by the App Store or Google Play: we never receive your card number, your address or any billing data.`,
          ]
        : [
            fr
              ? `${appName} ne propose aucun achat intégré.`
              : `${appName} offers no in-app purchases.`,
          ],
    items:
      facts.purchases.length > 0
        ? facts.purchases.map((p) => `${p.what} — ${KIND_LABEL[lang][p.kind]}`)
        : undefined,
  });

  /* 5 — Mesure d'audience ------------------------------------------------- */
  sections.push({
    id: 'mesure',
    title: fr ? 'Mesure d’audience' : 'Analytics',
    body: facts.analytics
      ? [
          fr
            ? `${appName} remonte ${list('fr', facts.analytics.vendors)}, dans le seul but de corriger les défauts de l'application.`
            : `${appName} sends ${list('en', facts.analytics.vendors)}, for the sole purpose of fixing defects in the app.`,
          facts.analytics.optOut
            ? fr
              ? "Vous pouvez couper cette remontée à tout moment depuis les réglages de l'application."
              : 'You can switch this off at any time from the app settings.'
            : fr
              ? "Ces données ne permettent pas de vous identifier."
              : 'This data cannot be used to identify you.',
        ]
      : [
          fr
            ? `${appName} n'intègre aucun outil de mesure d'audience, de statistiques d'usage ou de rapport de plantage.`
            : `${appName} includes no analytics, usage statistics or crash reporting tool.`,
        ],
  });

  /* 6 — Réseau ------------------------------------------------------------ */
  sections.push({
    id: 'reseau',
    title: fr ? 'Connexion réseau' : 'Network connection',
    body: facts.network
      ? [
          fr
            ? `L'application utilise votre connexion pour ${facts.network.purpose}.`
            : `The app uses your connection for ${facts.network.purpose}.`,
        ]
      : [
          fr
            ? `${appName} fonctionne entièrement hors ligne. L'application n'a besoin d'aucune connexion pour être utilisée${facts.ads ? ", en dehors du chargement des annonces" : ''}.`
            : `${appName} runs entirely offline. The app needs no connection to be used${facts.ads ? ', apart from loading the ads' : ''}.`,
        ],
  });

  /* 7 — Comptes et services de jeu ---------------------------------------- */
  if (facts.accounts) {
    sections.push({
      id: 'comptes',
      title: fr ? 'Comptes et services de jeu' : 'Accounts and game services',
      body: [
        fr
          ? `${appName} ne vous demande jamais de créer un compte. ${facts.accounts.service} est utilisé pour ${facts.accounts.what} : dans ce cadre, seul votre pseudonyme ${facts.accounts.service} et vos scores sont transmis, par le service d'Apple.`
          : `${appName} never asks you to create an account. ${facts.accounts.service} is used for ${facts.accounts.what}: in that context, only your ${facts.accounts.service} nickname and your scores are transmitted, through Apple's service.`,
      ],
    });
  } else {
    sections.push({
      id: 'comptes',
      title: fr ? 'Comptes' : 'Accounts',
      body: [
        fr
          ? `${appName} ne vous demande jamais de créer un compte et n'utilise aucun service d'identification.`
          : `${appName} never asks you to create an account and uses no sign-in service.`,
      ],
    });
  }

  /* 8 — Enfants ----------------------------------------------------------- */
  sections.push({
    id: 'enfants',
    title: fr ? 'Enfants' : 'Children',
    body: [
      facts.forChildren
        ? fr
          ? `${appName} s'adresse aux enfants et respecte à ce titre les règles des programmes familiaux des stores.`
          : `${appName} is aimed at children and follows the rules of the stores' family programmes accordingly.`
        : fr
          ? `${appName} n'est pas destiné spécifiquement aux enfants de moins de 13 ans, et nous ne collectons pas sciemment de données personnelles les concernant.`
          : `${appName} is not specifically aimed at children under 13, and we do not knowingly collect personal data about them.`,
      ...(facts.ads
        ? [
            fr
              ? 'Les annonces diffusées sont configurées pour respecter les catégories de contenu familial.'
              : 'The ads served are configured to respect family content categories.',
          ]
        : []),
    ],
  });

  /* 9 — Vos droits -------------------------------------------------------- */
  sections.push({
    id: 'droits',
    title: fr ? 'Vos droits' : 'Your rights',
    body: [
      fr
        ? "Les données décrites ci-dessus restant sur votre appareil, le moyen le plus direct de les effacer est de désinstaller l'application : tout disparaît avec elle."
        : 'Since the data described above stays on your device, the most direct way to erase it is to uninstall the app: everything goes with it.',
      fr
        ? `Le règlement général sur la protection des données vous ouvre par ailleurs un droit d'accès, de rectification, d'effacement, de limitation et d'opposition. Pour l'exercer, écrivez à ${contactEmail}.`
        : `The General Data Protection Regulation further grants you rights of access, rectification, erasure, restriction and objection. To exercise them, write to ${contactEmail}.`,
    ],
  });

  /* 10 — Modifications ---------------------------------------------------- */
  sections.push({
    id: 'modifications',
    title: fr ? 'Modifications' : 'Changes',
    body: [
      fr
        ? `Cette politique peut évoluer en même temps que l'application. Toute modification est publiée sur cette page, avec sa date. Dernière mise à jour : ${formatDate(facts.updated, 'fr')}.`
        : `This policy may change alongside the app. Any change is published on this page, with its date. Last updated: ${formatDate(facts.updated, 'en')}.`,
    ],
  });

  /* 11 — Contact ---------------------------------------------------------- */
  sections.push({
    id: 'contact',
    title: 'Contact',
    body: [
      fr
        ? `Une question, une demande, un doute sur ce document ? Écrivez à ${contactEmail}. Nous répondons à toutes les demandes.`
        : `A question, a request, a doubt about this document? Write to ${contactEmail}. We answer every message.`,
    ],
  });

  return sections;
}

export { formatDate };
