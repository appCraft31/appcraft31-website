import { APPS } from '@/lib/apps';
import { shortCopy } from '@/lib/copy';
import { translator } from '@/lib/i18n';
import { getTheme } from '@/content/themes';
import type { Lang } from '@/lib/types';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { Reveal } from '@/components/site/Reveal';
import { AppCard } from './AppCard';
import { Hero } from './Hero';
import { Marquee } from './Marquee';
import { PortfolioFilters } from './PortfolioFilters';

/** Accueil, partagé par la version française et les cinq autres langues. */
export function HomePage({ lang }: { lang: Lang }) {
  const t = translator(lang);

  return (
    <>
      <Header lang={lang} path="/" />

      <main id="content">
        <Hero lang={lang} />
        <Marquee />

        <section className="section" id="creations">
          {/* Ancres historiques : d'anciens liens pointent encore dessus. */}
          <span id="apps" className="anchor" aria-hidden="true" />
          <span id="jeux" className="anchor" aria-hidden="true" />

          <div className="container">
            <header className="section-head reveal">
              <h2 className="section-title">{t('portfolio.title')}</h2>
              <p className="section-sub">{t('portfolio.subtitle')}</p>
            </header>

            <PortfolioFilters
              labels={{
                all: t('portfolio.filter_all'),
                apps: t('portfolio.filter_apps'),
                games: t('portfolio.filter_games'),
              }}
            />

            <div className="apps-grid" id="apps-grid">
              {APPS.map((app, i) => {
                const copy = shortCopy(app.slug, lang);
                return (
                  <AppCard
                    key={app.slug}
                    app={app}
                    theme={getTheme(app.slug)}
                    index={i}
                    lang={lang}
                    tagline={copy.tagline}
                    description={copy.description}
                    chips={copy.chips}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--about" id="about">
          <div className="container about-grid">
            <div className="reveal">
              <h2 className="section-title">{t('about.title')}</h2>
              <p className="about-p">{t('about.p1')}</p>
              {/* Le texte d'origine porte des <strong> : on le rend tel quel. */}
              <p className="about-p" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
            </div>
            <aside className="about-figures reveal">
              <p>
                <strong>{APPS.filter((a) => a.category === 'app').length}</strong>
                {t('about.stat_app_label')}
              </p>
              <p>
                <strong>{APPS.filter((a) => a.category === 'game').length}</strong>
                {t('about.stat_games_label')}
              </p>
            </aside>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      <Reveal />
    </>
  );
}
