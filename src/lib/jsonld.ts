/**
 * Données structurées (schema.org), en JSON-LD.
 *
 * Le site n'en produisait aucune — alors que le registre porte déjà tout ce
 * qu'il faut : catégorie, icône, captures, liens store. Curieusement, la page
 * legacy `play/meliz` en avait, elle : l'ancien site était mieux équipé que le
 * nouveau sur ce point précis.
 *
 * Règle de fabrication : rien qui ne se lise dans `AppData` ou dans les textes
 * déjà écrits. En particulier **pas d'`aggregateRating`** : on n'a pas de
 * notes, et les inventer serait à la fois un mensonge et une violation des
 * règles de Google. Un balisage exact sans vignette vaut mieux qu'une vignette
 * fausse. Une `offers` n'est déclarée que pour une app marquée `free` dans le
 * registre — gratuite et sans achat intégré, vérifié dans son code : le prix
 * nul est alors un fait, pas une estimation.
 */

import { SOCIAL } from '@/components/site/social';
import { CONTACT_EMAIL } from '@/components/site/Footer';
import { appPath, privacyPath } from './apps';
import { localizedUrl, translator } from './i18n';
import { LANG_META, type AppCopy, type AppData, type Lang } from './types';

const SITE = 'https://appcraft31.app';
const STUDIO_ID = `${SITE}/#studio`;

function absolute(path: string): string {
  return path.startsWith('http') ? path : `${SITE}${path}`;
}

/** Le studio — référencé par toutes les autres entités. */
export function organization() {
  return {
    '@type': 'Organization',
    '@id': STUDIO_ID,
    name: 'AppCraft31',
    url: SITE,
    logo: absolute('/assets/logo.webp'),
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toulouse',
      addressRegion: 'Haute-Garonne',
      addressCountry: 'FR',
    },
    sameAs: SOCIAL.map((account) => account.href),
  };
}

/** Une application ou un jeu. */
export function softwareApplication(app: AppData, copy: AppCopy, lang: Lang) {
  const platforms = [
    app.store.ios ? 'iOS' : null,
    app.store.android ? 'Android' : null,
  ].filter(Boolean);
  const stores = [app.store.ios, app.store.android].filter((url): url is string => !!url);

  return {
    '@type': app.category === 'game' ? 'GameApplication' : 'MobileApplication',
    name: app.name,
    description: copy.meta.description,
    url: absolute(localizedUrl(lang, appPath(app))),
    image: absolute(app.ogImage ?? app.icon),
    applicationCategory: app.category === 'game' ? 'GameApplication' : 'UtilitiesApplication',
    // Une app sans lien store n'est pas encore publiée : ne rien affirmer de
    // ses plateformes plutôt que d'en inventer.
    ...(platforms.length ? { operatingSystem: platforms.join(', ') } : {}),
    ...(app.screenshots.length
      ? { screenshot: app.screenshots.map((shot) => absolute(shot.src)) }
      : {}),
    inLanguage: LANG_META[lang].htmlLang,
    // Les fiches store sont la même œuvre à une autre adresse.
    ...(stores.length ? { sameAs: stores } : {}),
    // Le lien store est l'adresse de téléchargement et d'installation.
    ...(stores.length
      ? { downloadUrl: one(stores), installUrl: one(stores) }
      : {}),
    ...(app.free
      ? {
          offers: {
            '@type': 'Offer',
            price: 0,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            ...(stores.length ? { url: stores[0] } : {}),
          },
        }
      : {}),
    ...(copy.schema?.alternateName?.length
      ? { alternateName: one(copy.schema.alternateName) }
      : {}),
    ...(copy.schema?.featureList?.length ? { featureList: copy.schema.featureList } : {}),
    publisher: { '@id': STUDIO_ID },
    privacyPolicy: absolute(localizedUrl(lang, privacyPath(app))),
  };
}

/** Une valeur seule n'a pas à être emballée dans un tableau. */
function one<T>(values: T[]): T | T[] {
  return values.length === 1 ? values[0] : values;
}

/**
 * Les questions fréquentes d'une page.
 *
 * Construit depuis `copy.faq`, le même tableau que rend le bloc `faq` : le
 * balisage ne peut donc pas diverger du texte visible, ce que Google exige.
 */
export function faqPage(copy: AppCopy, lang: Lang, path: string) {
  if (!copy.faq?.length) return null;
  return {
    '@type': 'FAQPage',
    url: absolute(localizedUrl(lang, path)),
    inLanguage: LANG_META[lang].htmlLang,
    mainEntity: copy.faq.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  };
}

/** Le fil d'Ariane d'une page, libellé dans la langue de la page. */
export function breadcrumbList(
  lang: Lang,
  trail: { name: string; path: string }[],
) {
  const t = translator(lang);
  const items = [{ name: t('nav.home'), path: '/' }, ...trail];

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(localizedUrl(lang, item.path)),
    })),
  };
}

/**
 * Sérialise un graphe pour l'insérer dans un `<script>`.
 *
 * `<` est échappé : un `alt` de capture contenant un chevron fermerait la
 * balise et casserait la page.
 */
export function serialize(nodes: object[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(
    /</g,
    '\\u003c',
  );
}
