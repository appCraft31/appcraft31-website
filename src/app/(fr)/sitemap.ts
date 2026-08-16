import type { MetadataRoute } from 'next';
import { APPS, appPath, privacyPath } from '@/lib/apps';
import { alternates, localizedUrl } from '@/lib/i18n';
import { DEFAULT_LANG } from '@/lib/types';

const SITE = 'https://appcraft31.app';

/** Le site est exporté en statique : le sitemap est un fichier, pas une route. */
export const dynamic = 'force-static';

/**
 * Sitemap, engendré depuis le registre des produits.
 *
 * Remplace le `sitemap.xml` écrit à la main, qui se désynchronisait à chaque
 * app ajoutée. Chaque page est déclarée dans les six langues via `hreflang`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-16');

  const withAlternates = (path: string, priority: number, changeFrequency: 'monthly' | 'yearly' | 'daily') => ({
    url: `${SITE}${localizedUrl(DEFAULT_LANG, path)}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        Object.entries(alternates(path)).map(([lang, url]) => [lang, `${SITE}${url}`]),
      ),
    },
  });

  return [
    withAlternates('/', 1, 'monthly'),

    // Les jeux jouables dans le navigateur : de vraies pages, pas des redirections.
    {
      url: `${SITE}/play/meliz/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${SITE}/holdfire/event/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },

    ...APPS.map((app) => withAlternates(appPath(app), 0.8, 'monthly')),
    ...APPS.map((app) => withAlternates(privacyPath(app), 0.3, 'yearly')),
  ];
}
