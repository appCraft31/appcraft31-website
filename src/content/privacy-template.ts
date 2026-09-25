/**
 * Rédige une politique de confidentialité à partir des faits de l'app.
 *
 * Le texte découle des faits : une app dont `ads` vaut `null` n'a tout
 * simplement pas de rubrique publicité, et une app qui déclare
 * `com.…​.noads` en aura forcément une. C'est ce qui empêche de réécrire, par
 * inattention, la contre-vérité qu'on a trouvée sur Glyphe.
 *
 * C'est aussi ce qui rend la traduction sûre : les phrases vivent dans
 * `src/content/privacy-strings/<lang>.ts`, une par langue, et l'assemblage ci-
 * dessous n'en connaît que les clés. Une traduction maladroite reste
 * maladroite ; elle ne peut pas inventer une régie ni en taire une.
 *
 * Les rubriques suivent l'ordre attendu par les stores : responsable, données
 * locales, publicité, achats intégrés, mesure d'audience, réseau, comptes,
 * enfants, droits, modifications, contact.
 */

import { strings as fr } from './privacy-strings/fr';
import { strings as en } from './privacy-strings/en';
import { strings as ja } from './privacy-strings/ja';
import { strings as ko } from './privacy-strings/ko';
import { strings as es } from './privacy-strings/es';
import { strings as de } from './privacy-strings/de';
import type { PrivacyStrings } from './privacy-strings/keys';
import type { Localized, PrivacyFacts } from '@/lib/privacy-types';
import type { Lang } from '@/lib/types';

export interface PrivacySection {
  id: string;
  title: string;
  /** Paragraphes. Le HTML n'est jamais utilisé ici : rien que du texte. */
  body: string[];
  /** Liste à puces éventuelle. */
  items?: string[];
}

const STRINGS: Record<Lang, PrivacyStrings> = { fr, en, ja, ko, es, de };

/**
 * Fragment localisé ramené à la langue rendue.
 *
 * Les notes propres à une app (`privacy-facts.ts`) ne sont pas toutes traduites
 * dans les six langues : le repli sur l'anglais puis le français vaut mieux
 * qu'une puce vide au milieu d'un document juridique.
 */
function loc(lang: Lang, value: Localized): string {
  if (typeof value === 'string') return value;
  return value[lang] ?? value.en ?? value.fr;
}

function list(lang: Lang, values: string[]): string {
  if (values.length <= 1) return values[0] ?? '';
  return STRINGS[lang].joinLast(values.slice(0, -1).join(', '), values[values.length - 1]);
}

function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  return STRINGS[lang].formatDate(y, m, d);
}

export function privacySections(
  appName: string,
  facts: PrivacyFacts,
  contactEmail: string,
  lang: Lang,
  /** URL absolue de la version française, pour la mention de référence. */
  referenceUrl?: string,
): PrivacySection[] {
  const s = STRINGS[lang];
  const sections: PrivacySection[] = [];

  /* 1 — Responsable du traitement ---------------------------------------- */
  sections.push({
    id: 'responsable',
    title: s.responsibleTitle,
    body: [
      // Une traduction ne fait pas foi : la version française reste le texte de
      // référence, et le document le dit lui-même plutôt que de le laisser
      // supposer.
      ...(s.referenceVersion && referenceUrl ? [s.referenceVersion(referenceUrl)] : []),
      s.publishedBy(appName, contactEmail),
      s.policyScope(list(lang, facts.platforms)),
    ],
  });

  /* 2 — Données stockées localement -------------------------------------- */
  sections.push({
    id: 'donnees-locales',
    title: s.localTitle,
    body: [facts.cloudSync ? s.localIntroCloud(appName) : s.localIntro(appName), ...(facts.notes ?? []).map((n) => loc(lang, n))],
    items: facts.localData.map((d) => loc(lang, d)),
  });

  /* 3 — Publicité --------------------------------------------------------- */
  if (facts.ads) {
    const formats = facts.ads.formats.map((f) => s.formats[f]);
    const body = [
      s.adsIntro(appName, facts.ads.network, list(lang, formats)),
      s.adsProcessing,
    ];

    if (facts.ads.mediation?.length) {
      const partners = facts.ads.mediation.map((m) => `${m.name} (${m.privacyUrl})`);
      body.push(s.adsMediation(list(lang, partners)));
      body.push(s.adsMediationConsent);
    }
    if (facts.ads.att) body.push(s.adsAtt);
    if (facts.ads.ump) {
      body.push(s.adsUmp);
      // `umpReopen` non renseigné = l'app propose bien un accès au formulaire.
      // Le dire quand c'est faux serait une clause inexacte dans un document
      // juridique — d'où le cas contraire, à renseigner app par app.
      body.push(facts.ads.umpReopen === false ? s.adsUmpNoReopen : s.adsUmpReopen);
    }
    if (facts.ads.removedBy) body.push(s.adsRemovedBy(facts.ads.removedBy));

    sections.push({ id: 'publicite', title: s.adsTitle, body });
  } else {
    sections.push({ id: 'publicite', title: s.adsTitle, body: [s.adsNone(appName)] });
  }

  /* 4 — Achats intégrés --------------------------------------------------- */
  const hasPurchases = facts.purchases.length > 0;
  sections.push({
    id: 'achats',
    title: s.purchasesTitle,
    body: [hasPurchases ? s.purchasesSome(appName) : s.purchasesNone(appName)],
    items: hasPurchases
      ? facts.purchases.map((p) => `${loc(lang, p.what)} — ${s.kinds[p.kind]}`)
      : undefined,
  });

  /* 5 — Mesure d'audience ------------------------------------------------- */
  sections.push({
    id: 'mesure',
    title: s.analyticsTitle,
    body: facts.analytics
      ? [
          facts.analytics.purpose
            ? s.analyticsPurpose(
                appName,
                list(lang, facts.analytics.vendors),
                loc(lang, facts.analytics.purpose),
              )
            : s.analyticsDefault(appName, list(lang, facts.analytics.vendors)),
          // L'interrupteur prime ; à défaut, l'anonymat n'est affirmé que s'il
          // est vrai.
          ...(facts.analytics.optOut
            ? [s.analyticsOptOut]
            : facts.analytics.anonymous === false
              ? []
              : [s.analyticsAnonymous]),
        ]
      : [s.analyticsNone(appName)],
  });

  /* 6 — Réseau ------------------------------------------------------------ */
  sections.push({
    id: 'reseau',
    title: s.networkTitle,
    body: facts.network
      ? [s.networkPurpose(loc(lang, facts.network.purpose))]
      : [s.networkOffline(appName, Boolean(facts.ads))],
  });

  /* 7 — Comptes et services de jeu ---------------------------------------- */
  if (facts.accounts) {
    sections.push({
      id: 'comptes',
      title:
        facts.accounts.body && facts.accounts.bodyTitle !== 'service'
          ? s.accountsSignInTitle
          : s.accountsServiceTitle,
      body: facts.accounts.body
        ? facts.accounts.body.map((b) => loc(lang, b))
        : [
            s.accountsService(
              appName,
              facts.accounts.service,
              loc(lang, facts.accounts.what),
            ),
          ],
    });
  } else {
    sections.push({
      id: 'comptes',
      title: s.accountsNoneTitle,
      body: [s.accountsNone(appName)],
    });
  }

  /* 8 — Enfants ----------------------------------------------------------- */
  sections.push({
    id: 'enfants',
    title: s.childrenTitle,
    body: [
      facts.forChildren ? s.childrenAimed(appName) : s.childrenNotAimed(appName),
      ...(facts.ads && facts.ads.familyContent !== false ? [s.childrenAds] : []),
    ],
  });

  /* 9 — Vos droits -------------------------------------------------------- */
  sections.push({
    id: 'droits',
    title: s.rightsTitle,
    body: [
      facts.cloudSync ? s.rightsUninstallCloud : s.rightsUninstall,
      s.rightsGdpr(contactEmail),
      ...(facts.ads
        ? [
            s.rightsAdNetworks(
              list(lang, ['Google', ...(facts.ads.mediation ?? []).map((m) => m.name)]),
              // Sans formulaire rouvrable, les choix ne se changent que dans
              // les réglages de l'appareil.
              facts.ads.ump && facts.ads.umpReopen !== false,
            ),
          ]
        : []),
    ],
  });

  /* 10 — Modifications ---------------------------------------------------- */
  sections.push({
    id: 'modifications',
    title: s.changesTitle,
    body: [s.changes(formatDate(facts.updated, lang))],
  });

  /* 11 — Contact ---------------------------------------------------------- */
  sections.push({
    id: 'contact',
    title: s.contactTitle,
    body: [s.contact(contactEmail)],
  });

  return sections;
}

export { formatDate };
