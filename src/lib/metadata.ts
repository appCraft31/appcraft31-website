/**
 * Construction des métadonnées, en un seul endroit.
 *
 * Next fusionne les métadonnées **champ de premier niveau par champ** : un
 * `openGraph` écrit dans une page remplace intégralement celui du layout. Vingt-
 * deux pages produit ont ainsi perdu `og:image`, `og:site_name` et `og:locale`
 * sans que rien ne le signale — et `twitter:card`, que Next déduit de la
 * présence d'une image, était retombé sur la vignette étroite.
 *
 * La parade n'est pas de se souvenir du piège : c'est que plus aucune page
 * n'écrive un `openGraph` à la main. Tout passe par ici.
 */

import type { Metadata } from 'next';
import { appCopy } from './app-copy';
import { appPath, privacyPath } from './apps';
import { alternates, localizedUrl, translator } from './i18n';
import { LANG_META, type AppData, type Lang } from './types';

const SITE_NAME = 'AppCraft31';

/** Image de partage par défaut : le logo du studio, déjà dimensionné. */
const DEFAULT_OG_IMAGE = { url: '/assets/logo.webp', width: 2816, height: 1536, alt: SITE_NAME };

/**
 * Consigne d'indexation.
 *
 * Une page non listée reste publique — l'écran de consentement OAuth de Google
 * doit pouvoir l'ouvrir — mais n'a rien à faire dans un index. Les autres
 * autorisent le grand aperçu d'image, que les pages de l'ancien site
 * déclaraient déjà et que les pages Next avaient perdu.
 */
function robots(unlisted: boolean | undefined): Metadata['robots'] {
  if (unlisted) return { index: false, follow: false };
  return {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  };
}

function base(
  lang: Lang,
  path: string,
  title: string,
  description: string,
  image?: string,
): Metadata {
  const url = localizedUrl(lang, path);
  return {
    title,
    description,
    alternates: { canonical: url, languages: alternates(path) },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: LANG_META[lang].ogLocale,
      type: 'website',
      images: [image ? { url: image } : DEFAULT_OG_IMAGE],
    },
  };
}

/** L'accueil, dans une langue. */
export function homeMetadata(lang: Lang): Metadata {
  const t = translator(lang);
  return {
    ...base(lang, '/', t('meta.home_title'), t('meta.home_description')),
    robots: robots(false),
  };
}

/** Une page produit. */
export function appMetadata(app: AppData, lang: Lang): Metadata {
  const copy = appCopy(app, lang);
  return {
    ...base(lang, appPath(app), copy.meta.title, copy.meta.description, app.ogImage),
    robots: robots(app.unlisted),
  };
}

/** Une politique de confidentialité. */
export function privacyMetadata(app: AppData, lang: Lang): Metadata {
  const t = translator(lang);
  const title = t('meta.privacy_title').replace('{app}', app.name);
  const description = t('meta.privacy_description').replace('{app}', app.name);
  return {
    ...base(lang, privacyPath(app), title, description, app.ogImage),
    robots: robots(app.unlisted),
  };
}
