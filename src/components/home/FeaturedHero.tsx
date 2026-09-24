import Image from 'next/image';
import Link from 'next/link';
import { appPath, getApp, VISIBLE_APPS } from '@/lib/apps';
import { shortCopy } from '@/lib/copy';
import { fontClassesFor } from '@/lib/fonts-universe';
import { localizedUrl, translator } from '@/lib/i18n';
import { themeVars } from '@/lib/theme';
import { getTheme } from '@/content/themes';
import type { AppData, Lang } from '@/lib/types';
import { GameMotif, hasMotif } from '@/components/marketing/GameMotif';
import { FeaturedCarousel } from './FeaturedCarousel';

/**
 * Les apps à la une, dans l'ordre de leurs téléchargements App Store.
 *
 * Classement relevé dans l'audit ASC du 2026-09-24
 * (`~/StudioProjects/audits/asc-2026-09-24/metrics.json`), premiers
 * téléchargements cumulés sur les 28 derniers jours : Binero 100, randompix 55,
 * Mêliz 36, Glowmi 32, EcoPompe 31. Écrit à la main exprès : la page annonce un
 * classement, il doit correspondre à un relevé daté, pas à l'ordre du registre.
 * À refaire à chaque nouvel audit.
 */
const FEATURED = ['binero', 'randompix', 'meliz', 'glowmi', 'ecopompe'] as const;

/**
 * Hero de l'accueil : un carrousel des produits phares.
 *
 * Chaque diapositive prend l'univers complet de son app — palette, polices,
 * capture ou motif du jeu — pour que le visiteur voie cinq produits
 * différents, et non cinq fois la même carte recolorée.
 */
export function FeaturedHero({ lang }: { lang: Lang }) {
  const t = translator(lang);
  const apps = FEATURED.map((slug) => getApp(slug)).filter((a): a is AppData => !!a);

  return (
    <section className="hero featured grain" aria-labelledby="featured-title">
      <div className="container">
        <header className="featured-head">
          <p className="hero-kicker">
            <span className="hero-dot" aria-hidden="true" />
            {t('featured.kicker')}
          </p>
          <h1 className="featured-title" id="featured-title">
            {t('featured.title')}
          </h1>
          <p className="featured-note">{t('featured.note')}</p>
        </header>

        <FeaturedCarousel
          label={t('featured.label')}
          names={apps.map((a) => a.name)}
          labels={{
            prev: t('featured.prev'),
            next: t('featured.next'),
            goto: t('featured.goto'),
            pause: t('featured.pause'),
            play: t('featured.play'),
          }}
        >
          {apps.map((app, i) => (
            <Slide key={app.slug} app={app} rank={i + 1} lang={lang} />
          ))}
        </FeaturedCarousel>

        <p className="featured-all">
          <Link href="#creations" className="btn btn-ghost">
            {t('featured.all').replace('{count}', String(VISIBLE_APPS.length))} ↓
          </Link>
        </p>
      </div>
    </section>
  );
}

function Slide({ app, rank, lang }: { app: AppData; rank: number; lang: Lang }) {
  const t = translator(lang);
  const theme = getTheme(app.slug);
  const copy = shortCopy(app.slug, lang);
  const href = localizedUrl(lang, appPath(app));
  const shot = app.screenshots[0];

  return (
    <div
      className={`featured-slide ${fontClassesFor(theme.fonts)}`}
      style={themeVars(theme)}
      data-slug={app.slug}
    >
      <div className="featured-copy">
        {/* Le titre de la section dit déjà de quel classement il s'agit : le
            numéro seul suffit à l'œil, la phrase reste pour les lecteurs d'écran. */}
        <p className="featured-rank">
          <span aria-hidden="true">{String(rank).padStart(2, '0')}</span>
          <span className="visually-hidden">{t('featured.rank').replace('{n}', String(rank))}</span>
        </p>

        <div className="featured-id">
          <Image src={app.icon} alt="" width={84} height={84} unoptimized className="featured-icon" />
          <div>
            <h2 className="featured-name">{app.name}</h2>
            <p className="featured-tagline">{copy.tagline}</p>
          </div>
        </div>

        <p className="featured-desc">{copy.description}</p>

        <div className="featured-actions">
          <Link href={href} className="featured-cta">
            {t('featured.discover')} {app.name} →
          </Link>
          {app.store.ios && (
            <a href={app.store.ios} target="_blank" rel="noopener" aria-label={`${app.name} — App Store`}>
              <Image src="/assets/app-store-badge.svg" alt="App Store" width={135} height={45} unoptimized />
            </a>
          )}
          {app.store.android && (
            <a href={app.store.android} target="_blank" rel="noopener" aria-label={`${app.name} — Google Play`}>
              <Image src="/assets/google-play-badge.svg" alt="Google Play" width={152} height={45} unoptimized />
            </a>
          )}
        </div>
      </div>

      {/* Une capture si l'app en a, sinon le motif du jeu : jamais une image
          d'attente qui montrerait autre chose que le produit. */}
      <div className="featured-visual" aria-hidden={shot ? undefined : true}>
        {shot ? (
          <div className="featured-phone">
            <Image src={shot.src} alt={shot.alt} width={420} height={910} unoptimized loading={rank === 1 ? 'eager' : 'lazy'} />
          </div>
        ) : hasMotif(app.slug) ? (
          <div className="featured-motif">
            <GameMotif slug={app.slug} />
          </div>
        ) : (
          <Image src={app.icon} alt="" width={260} height={260} unoptimized className="featured-bigicon" />
        )}
      </div>
    </div>
  );
}
