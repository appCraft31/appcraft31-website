import Link from 'next/link';
import { getTheme } from '@/content/themes';
import { getPrivacyFacts } from '@/content/privacy-facts';
import { privacySections, formatDate } from '@/content/privacy-template';
import { CONTACT_EMAIL, Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { appPath, privacyPath } from '@/lib/apps';
import { fontClassesFor } from '@/lib/fonts-universe';
import { localizedUrl, translator } from '@/lib/i18n';
import { JsonLd } from '@/components/site/JsonLd';
import { breadcrumbList, organization } from '@/lib/jsonld';
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
  // La version française fait foi : les autres langues le disent en tête de
  // document et renvoient vers elle.
  const sections = privacySections(
    app.name,
    facts,
    CONTACT_EMAIL,
    lang,
    `https://appcraft31.app${privacyPath(app)}`,
  );
  const t = translator(lang);

  return (
    <>
      <JsonLd
        nodes={[
          organization(),
          breadcrumbList(lang, [
            { name: app.name, path: appPath(app) },
            { name: t('nav.privacy'), path: privacyPath(app) },
          ]),
        ]}
      />
      <Header lang={lang} path={privacyPath(app)} />

      <main
        className={`${styles.page} ${fontClassesFor(theme.fonts)}`}
        style={themeVars(theme)}
      >
        <div className={styles.inner}>
          <header className={styles.head}>
            <p className={styles.kicker}>{app.name}</p>
            <h1 className={styles.title}>
              {t('privacy.title')}
            </h1>
            <p className={styles.updated}>
              {t('privacy.updated')}
              <time dateTime={facts.updated}>
                {formatDate(facts.updated, lang)}
              </time>
            </p>
          </header>

          {/* Un sommaire : ces documents se consultent, ils ne se lisent pas
              en entier. */}
          <nav className={styles.toc} aria-label={t('privacy.toc')}>
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
              ← {t('privacy.back').replace('{app}', app.name)}
            </Link>
          </p>
        </div>
      </main>

      <Footer lang={lang} path={privacyPath(app)} />
    </>
  );
}
