import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/components/site/Footer';
import { privacyPath } from '@/lib/apps';
import { localizedUrl } from '@/lib/i18n';
import type { AppCopy, AppData, CopySection, Lang, Stat } from '@/lib/types';
import { GameMotif, hasMotif } from './GameMotif';
import { hasArtwork } from './HeroVisual';
import { StoreLinks } from './StoreLinks';
import styles from './universe.module.css';

/* ── Hero, trois compositions ───────────────────────────────────────────── */

export function Hero({
  variant,
  app,
  copy,
  lang,
  visual,
}: {
  variant: 'hero-full' | 'hero-split' | 'hero-offset';
  app: AppData;
  copy: AppCopy;
  lang: Lang;
  visual?: React.ReactNode;
}) {
  const isGame = app.category === 'game';

  const badge = (
    <p className={styles.heroKicker}>
      <span className={styles.heroPill}>
        {app.status === 'available' ? 'Disponible' : 'Bientôt'}
      </span>
      {copy.tagline}
    </p>
  );

  const heading = (
    <h1 className={styles.heroTitle}>
      {copy.headline.lead}{' '}
      <span className={styles.heroAccent}>{copy.headline.highlight}</span>
    </h1>
  );

  const body = (
    <>
      <p className={styles.heroIntro}>{copy.intro}</p>
      {/* Le premier point de décision : les badges y sont en grand. */}
      <StoreLinks app={app} lang={lang} size="large" />
    </>
  );

  return (
    <section className={`${styles.hero} ${styles[camel(variant)]}`}>
      {/* Le nom du jeu, en très grand et en creux derrière le titre : c'est
          l'affiche, pas la page d'un logiciel. */}
      {isGame && !hasArtwork(app) && (
        <span className={styles.ghostName} aria-hidden="true">
          {app.name}
        </span>
      )}

      <div className={styles.inner}>
        <div className={styles.heroText}>
          {badge}
          {heading}
          {body}
        </div>
        {visual ? (
          <div className={styles.heroVisual}>{visual}</div>
        ) : (
          isGame &&
          hasMotif(app.slug) && (
            <div className={styles.heroMotif}>
              <GameMotif slug={app.slug} />
            </div>
          )
        )}
      </div>
    </section>
  );
}

/* ── Bandeau de chiffres ────────────────────────────────────────────────── */

export function StatBand({ stats }: { stats: Stat[] }) {
  if (stats.length === 0) return null;
  return (
    <section className={styles.statBand}>
      <div className={styles.inner}>
        <dl className={styles.stats}>
          {stats.map((s, i) => (
            <div key={s.label} className="reveal" style={{ '--i': i } as never}>
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── Liste de points : « ce qui se joue », « les règles », « fonctions » ── */

export function Items({ section, app }: { section: CopySection; app: AppData }) {
  const items = section.items ?? [];
  const isGame = app.category === 'game';

  return (
    <section className={`${styles.section} ${styles[camel(section.id)]}`}>
      {/* Le motif du jeu revient en filigrane dans un coin de section. */}
      {isGame && hasMotif(app.slug) && <GameMotif slug={app.slug} variant="corner" />}

      <div className={styles.inner}>
        <header className={`${styles.sectionHead} reveal`}>
          {section.kicker && <p className={styles.kicker}>{section.kicker}</p>}
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          {section.body && <p className={styles.sectionBody}>{section.body}</p>}
        </header>

        {items.length > 0 && (
          <ul className={styles.items}>
            {items.map((item, i) => (
              <li
                key={item.title}
                className="reveal"
                style={
                  {
                    '--reveal-delay': `${Math.min(i, 6) * 60}ms`,
                    '--n': `"${String(i + 1).padStart(2, '0')}"`,
                  } as never
                }
              >
                <h3>{item.title}</h3>
                {item.body && <p>{item.body}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/* ── Galerie, trois compositions ────────────────────────────────────────── */

export function Gallery({
  variant,
  app,
  title,
}: {
  variant: 'gallery-tilt' | 'gallery-stack' | 'gallery-device';
  app: AppData;
  title: string;
}) {
  if (app.screenshots.length === 0) return null;
  return (
    <section className={`${styles.section} ${styles[camel(variant)]}`}>
      <div className={styles.inner}>
        <h2 className={`${styles.sectionTitle} reveal`}>{title}</h2>
        <div className={styles.shots}>
          {app.screenshots.map((shot, i) => {
            // Une scène dessinée est en paysage : lui imposer le cadre d'une
            // capture de téléphone la déforme et la cadre comme un écran.
            const isArtwork = shot.src.endsWith('.svg');
            return (
              <figure
                key={shot.src}
                className="reveal"
                data-artwork={isArtwork ? '' : undefined}
                style={{ '--reveal-delay': `${Math.min(i, 5) * 70}ms`, '--i': i } as never}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={isArtwork ? 660 : 420}
                  height={isArtwork ? 220 : 910}
                  unoptimized
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Vie privée : c'est ce bloc qui fait de la page une page d'assistance ─ */

export function PrivacyBlock({
  app,
  lang,
  section,
  linkLabel,
  contactLabel,
}: {
  app: AppData;
  lang: Lang;
  section: CopySection;
  linkLabel: string;
  contactLabel: string;
}) {
  return (
    <section className={`${styles.section} ${styles.privacy}`}>
      <div className={styles.inner}>
        <div className={`${styles.privacyCard} reveal`}>
          {section.kicker && <p className={styles.kicker}>{section.kicker}</p>}
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          {section.body && <p className={styles.sectionBody}>{section.body}</p>}

          <p className={styles.privacyLinks}>
            <Link href={localizedUrl(lang, privacyPath(app))}>{linkLabel}</Link>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(app.name)}`}>
              {contactLabel} — {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Appel final ────────────────────────────────────────────────────────── */

export function FinalCta({
  app,
  copy,
  lang,
  backLabel,
}: {
  app: AppData;
  copy: AppCopy;
  lang: Lang;
  backLabel: string;
}) {
  return (
    <section className={`${styles.section} ${styles.cta}`} data-final-cta>
      <div className={styles.inner}>
        <div className="reveal">
          <h2 className={styles.ctaTitle}>{copy.cta.title}</h2>
          <p className={styles.sectionBody}>{copy.cta.body}</p>
          <StoreLinks app={app} lang={lang} size="large" align="center" />
          <p className={styles.ctaBack}>
            <Link href={localizedUrl(lang, '/#creations')}>← {backLabel}</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/** `hero-split` → `heroSplit`, pour retrouver la classe du module CSS. */
function camel(id: string): string {
  return id.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}
