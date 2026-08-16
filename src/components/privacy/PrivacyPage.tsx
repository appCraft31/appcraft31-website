import Link from 'next/link';
import { getTheme } from '@/content/themes';
import { getPrivacyFacts } from '@/content/privacy-facts';
import { privacySections, formatDate } from '@/content/privacy-template';
import { CONTACT_EMAIL, Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { appPath, privacyPath } from '@/lib/apps';
import { fontClassesFor } from '@/lib/fonts-universe';
import { localizedUrl } from '@/lib/i18n';
import { themeVars } from '@/lib/theme';
import type { AppData, Lang } from '@/lib/types';
import styles from './privacy.module.css';

/**
 * Politique de confidentialité d'une app.
 *
 * Elle emprunte la palette et la typographie de son produit, mais rien de plus :
 * pas de fond animé, pas de composition oblique. C'est un document qu'on vient
 * lire — souvent parce qu'on a un doute — et la lisibilité passe avant tout.
 */
export function PrivacyPage({ app, lang }: { app: AppData; lang: Lang }) {
  const theme = getTheme(app.slug);
  const facts = getPrivacyFacts(app.slug);
  const sections = privacySections(app.name, facts, CONTACT_EMAIL, lang);
  const fr = lang === 'fr';

  return (
    <>
      <Header lang={lang} path={privacyPath(app)} />

      <main
        className={`${styles.page} ${fontClassesFor(theme.fonts)}`}
        style={themeVars(theme)}
      >
        <div className={styles.inner}>
          <header className={styles.head}>
            <p className={styles.kicker}>{app.name}</p>
            <h1 className={styles.title}>
              {fr ? 'Politique de confidentialité' : 'Privacy policy'}
            </h1>
            <p className={styles.updated}>
              {fr ? 'Dernière mise à jour : ' : 'Last updated: '}
              <time dateTime={facts.updated}>
                {formatDate(facts.updated, fr ? 'fr' : 'en')}
              </time>
            </p>
          </header>

          {/* Un sommaire : ces documents se consultent, ils ne se lisent pas
              en entier. */}
          <nav className={styles.toc} aria-label={fr ? 'Sommaire' : 'Contents'}>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          {sections.map((section) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <h2>{section.title}</h2>
              {section.body.filter(Boolean).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {section.items && section.items.length > 0 && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <p className={styles.back}>
            <Link href={localizedUrl(lang, appPath(app))}>
              ← {fr ? `Retour à la page de ${app.name}` : `Back to the ${app.name} page`}
            </Link>
          </p>
        </div>
      </main>

      <Footer lang={lang} />
    </>
  );
}
