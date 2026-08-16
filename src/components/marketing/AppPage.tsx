import { getTheme } from '@/content/themes';
import { Backdrop } from '@/components/backdrops/Backdrop';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { Reveal } from '@/components/site/Reveal';
import { appPath } from '@/lib/apps';
import { fontClassesFor } from '@/lib/fonts-universe';
import { translator } from '@/lib/i18n';
import { themeVars } from '@/lib/theme';
import type { AppCopy, AppData, Lang, SectionId } from '@/lib/types';
import { Diagram } from './Diagram';
import { HeroVisual, hasHeroVisual } from './HeroVisual';
import { FinalCta, Gallery, Hero, Items, PrivacyBlock, StatBand } from './sections';
import { StickyDownload } from './StickyDownload';
import styles from './universe.module.css';

/** `var(--font-press), monospace` → `press`. */
function displayKey(stack: string): string {
  return stack.match(/var\(--font-([a-z]+)\)/)?.[1] ?? 'default';
}

/**
 * Gabarit d'une page produit.
 *
 * La page ne décide de rien : c'est `theme.layout` qui dit quels blocs
 * apparaissent et dans quel ordre, et `themeVars` qui pose les couleurs et les
 * polices de l'app. Un tower defense et un sudoku passent donc par le même
 * code sans se ressembler.
 */
export function AppPage({
  app,
  copy,
  lang,
  visual = hasHeroVisual(app) ? <HeroVisual app={app} /> : undefined,
}: {
  app: AppData;
  copy: AppCopy;
  lang: Lang;
  /** Illustration du hero. Par défaut : le visuel dessiné, sinon une capture. */
  visual?: React.ReactNode;
}) {
  const theme = getTheme(app.slug);
  const t = translator(lang);
  const byId = new Map(copy.sections.map((s) => [s.id, s]));

  return (
    <>
      <Header lang={lang} path={appPath(app)} />

      <main
        className={`${styles.universe} ${fontClassesFor(theme.fonts)}`}
        style={themeVars(theme)}
        data-backdrop={theme.backdrop}
        /* Identifie la police de titre, pour les rares réglages qu'une fonte
           impose (une pixel-font ne se compose pas comme une grotesque). */
        data-display={displayKey(theme.fonts.display)}
        /* Les jeux reçoivent un traitement plus affirmé que les applications
           utilitaires : titres démesurés, motifs de mécanique, fonds appuyés.
           Une app de tri photo n'a pas à ressembler à une borne d'arcade. */
        data-category={app.category}
      >
        <Backdrop kind={theme.backdrop} />

        <div className={styles.content}>
          {theme.layout.map((id) => renderSection(id))}
        </div>

        {/* Rattrape le lecteur qui se décide en cours de page, une fois les
            badges du hero sortis de l'écran. */}
        <StickyDownload app={app} lang={lang} />
      </main>

      <Footer lang={lang} />
      <Reveal />
    </>
  );

  function renderSection(id: SectionId) {
    switch (id) {
      case 'hero-full':
      case 'hero-split':
      case 'hero-offset':
        return <Hero key={id} variant={id} app={app} copy={copy} lang={lang} visual={visual} />;

      case 'stat-band':
        return <StatBand key={id} stats={copy.stats} />;

      case 'how-it-plays':
      case 'features':
      case 'rules': {
        const section = byId.get(id);
        return section ? <Items key={id} section={section} app={app} /> : null;
      }

      case 'diagram': {
        const section = byId.get('diagram');
        return section ? <Diagram key={id} app={app} section={section} /> : null;
      }

      case 'gallery-tilt':
      case 'gallery-stack':
      case 'gallery-device':
        return (
          <Gallery key={id} variant={id} app={app} title={byId.get(id)?.title ?? app.name} />
        );

      case 'privacy': {
        const section = byId.get('privacy');
        return section ? (
          <PrivacyBlock
            key={id}
            app={app}
            lang={lang}
            section={section}
            linkLabel={t('footer.privacy')}
            contactLabel={t('footer.support')}
          />
        ) : null;
      }

      case 'cta':
        return (
          <FinalCta key={id} app={app} copy={copy} lang={lang} backLabel={t('portfolio.title')} />
        );

      default:
        return null;
    }
  }
}
