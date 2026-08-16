import Link from 'next/link';
import { APPS, appPath, privacyPath } from '@/lib/apps';
import { translator, localizedUrl } from '@/lib/i18n';
import type { Lang } from '@/lib/types';
import { SocialLinks } from './SocialLinks';

/**
 * Adresse d'assistance affichée partout.
 *
 * L'ancien site en faisait cohabiter trois : `nicolas.zanette.nz@gmail.com`
 * (62 pages), `appcraft31@gmail.com` (5) et `appacraft31@gmail.com` (2, une
 * coquille). Ces pages servent d'URL de support dans les fiches store : elles
 * doivent toutes donner la même adresse, et c'est celle-ci.
 */
export const CONTACT_EMAIL = 'appcraft31@gmail.com';

export function Footer({ lang }: { lang: Lang }) {
  const t = translator(lang);
  const year = 2026;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="wordmark">
              <span className="wordmark-name">AppCraft</span>
              <span className="wordmark-num">31</span>
            </span>
            <p>{t('hero.tagline')}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer-mail">
              {CONTACT_EMAIL}
            </a>
            <SocialLinks label={t('nav.follow')} />
          </div>

          <nav className="footer-col" aria-label={t('portfolio.title')}>
            <h2>{t('portfolio.title')}</h2>
            <ul>
              {APPS.map((app) => (
                <li key={app.slug}>
                  <Link href={localizedUrl(lang, appPath(app))}>{app.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label={t('footer.privacy')}>
            <h2>{t('footer.privacy')}</h2>
            <ul>
              {APPS.map((app) => (
                <li key={app.slug}>
                  <Link href={localizedUrl(lang, privacyPath(app))}>{app.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {year} AppCraft31 — Toulouse</p>
        </div>
      </div>
    </footer>
  );
}
