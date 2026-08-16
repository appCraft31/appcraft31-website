import Link from 'next/link';
import { translator, localizedUrl } from '@/lib/i18n';
import { LANGS, type Lang } from '@/lib/types';
import { LangSwitcher } from './LangSwitcher';
import { ThemeToggle } from './ThemeToggle';

/**
 * En-tête du site. `path` est le chemin sans préfixe de langue (« / »,
 * « /apps/tengo.html »…) : il sert à proposer la même page dans les six langues.
 */
export function Header({ lang, path }: { lang: Lang; path: string }) {
  const t = translator(lang);
  const home = localizedUrl(lang, '/');

  const urls = Object.fromEntries(LANGS.map((l) => [l, localizedUrl(l, path)])) as Record<
    Lang,
    string
  >;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={home} className="wordmark" aria-label="AppCraft31 — accueil">
          <span className="wordmark-name">AppCraft</span>
          <span className="wordmark-num">31</span>
        </Link>

        <nav className="nav-main" aria-label="Navigation principale">
          <Link href={`${home}#creations`}>{t('portfolio.title')}</Link>
          <Link href={`${home}#apps`}>{t('nav.apps')}</Link>
          <Link href={`${home}#jeux`}>{t('nav.games')}</Link>
          <Link href={`${home}#about`}>{t('nav.about')}</Link>
        </nav>

        <div className="header-tools">
          <ThemeToggle label={t('ui.theme_label')} />
          <LangSwitcher current={lang} urls={urls} label={t('ui.lang_label')} />
        </div>
      </div>
    </header>
  );
}
