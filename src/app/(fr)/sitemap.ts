import type { MetadataRoute } from 'next';
import { VISIBLE_APPS, appPath, getApp, privacyPath } from '@/lib/apps';
import { alternates, localizedUrl } from '@/lib/i18n';
import { DEFAULT_LANG, type AppData } from '@/lib/types';

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
  /**
   * La date de chaque page, pas celle du build.
   *
   * Une constante unique annonçait le 16 août 2026 pour les 47 URLs : uniforme
   * et périmée, elle ne dit rien de plus qu'une absence. `new Date()` serait
   * pire — elle changerait à chaque déploiement et signalerait 47 modifications
   * qui n'ont pas eu lieu. `privacyUpdated` est maintenu à la main, par
   * produit, et décrit justement la dernière révision de ce produit.
   */
  const dateOf = (app: AppData) => new Date(app.privacyUpdated);
  const latest = new Date(Math.max(...VISIBLE_APPS.map((app) => dateOf(app).getTime())));

  const withAlternates = (
    path: string,
    priority: number,
    changeFrequency: 'monthly' | 'yearly' | 'daily',
    lastModified: Date,
  ) => ({
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
    // L'accueil bouge dès qu'un produit bouge : il les liste tous.
    withAlternates('/', 1, 'monthly', latest),

    // Les jeux jouables dans le navigateur : de vraies pages, pas des redirections.
    {
      url: `${SITE}/play/meliz/`,
      lastModified: dateOf(getApp('meliz')!),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${SITE}/holdfire/event/`,
      lastModified: dateOf(getApp('holdfire')!),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },

    // Les outils internes (`unlisted`) sont volontairement absents : leurs
    // pages existent pour Google OAuth, pas pour la recherche.
    ...VISIBLE_APPS.map((app) => withAlternates(appPath(app), 0.8, 'monthly', dateOf(app))),
    ...VISIBLE_APPS.map((app) => withAlternates(privacyPath(app), 0.3, 'yearly', dateOf(app))),
  ];
}
