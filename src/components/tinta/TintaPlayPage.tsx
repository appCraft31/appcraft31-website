import Link from 'next/link';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { localizedUrl } from '@/lib/i18n';
import { fontClassesFor } from '@/lib/fonts-universe';
import { TINTA_APP_STORE, tintaPlayPath, tintaPlayUrls } from '@/lib/play';
import type { Lang } from '@/lib/types';
import { TINTA_COPY } from './copy';
import { TintaGame } from './TintaGame';
import styles from './tinta.module.css';

const FONT = 'var(--font-nunito)';

/**
 * Page « grille du jour » de Tinta, jouable dans le navigateur.
 *
 * Le texte (titre, règles, appel à l'app) est rendu au build : un robot ou un
 * aperçu de lien le lit sans JavaScript. Seul le plateau est client.
 */
export function TintaPlayPage({ lang }: { lang: Lang }) {
  const t = TINTA_COPY[lang];
  const urls = tintaPlayUrls();

  return (
    <>
      <Header lang={lang} path={tintaPlayPath(lang)} langUrls={urls} />
      <main className={`${styles.root} ${fontClassesFor({ display: FONT, body: FONT })}`}>
        <div className={styles.page}>
          <header className={styles.hero}>
            <p className={styles.kicker}>{t.kicker}</p>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.intro}>{t.intro}</p>
          </header>

          <TintaGame lang={lang} />

          <section className={styles.cta} aria-labelledby="tinta-cta">
            <h2 id="tinta-cta" className={styles.ctaTitle}>
              {t.ctaTitle}
            </h2>
            <p className={styles.ctaBody}>{t.ctaBody}</p>
            <a href={TINTA_APP_STORE} target="_blank" rel="noopener" className={styles.badge}>
              {/* Badge officiel Apple, jamais recoloré. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/app-store-badge.svg" alt={t.ctaBadgeAlt} width={162} height={54} />
            </a>
          </section>

          <section className={styles.rules} aria-labelledby="tinta-rules">
            <h2 id="tinta-rules">{t.rulesTitle}</h2>
            <ul>
              {t.rules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <Link href={localizedUrl(lang, '/apps/tinta.html')} className={styles.aboutLink}>
              {t.aboutApp} →
            </Link>
          </section>
        </div>
      </main>
      <Footer lang={lang} path={tintaPlayPath(lang)} langUrls={urls} />
    </>
  );
}
