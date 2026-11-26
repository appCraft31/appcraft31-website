import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTACT_EMAIL, Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import styles from '@/components/privacy/privacy.module.css';
import { getTheme } from '@/content/themes';
import { appPath, getApp, privacyPath } from '@/lib/apps';
import { fontClassesFor } from '@/lib/fonts-universe';
import { themeVars } from '@/lib/theme';

/**
 * Conditions d'utilisation de Tinta.
 *
 * Google Play demande, dans « Statut de professionnel », l'URL des conditions
 * d'utilisation de l'app. Une seule page en français puis en anglais, comme la
 * page de suppression de GraviWords : c'est l'anglais que lit l'examen de
 * Google, et l'URL déclarée doit être unique. Le contenu décrit Tinta 3.0
 * (Unity) : trois jeux, 800 niveaux, indices, « Sans publicité », classement
 * anonyme du défi du jour.
 */
const PATH = '/terms/tinta';
const UPDATED = '2026-11-26';

export const metadata: Metadata = {
  title: "Conditions d'utilisation · Tinta",
  description:
    "Conditions d'utilisation du jeu Tinta (AppCraft31) : licence, achats, classement du défi du jour, responsabilité. Tinta terms of use.",
  alternates: { canonical: `https://appcraft31.app${PATH}.html` },
};

export default function Page() {
  const app = getApp('tinta');
  if (!app) notFound();
  const theme = getTheme(app.slug);
  const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Tinta')}`;

  return (
    <>
      <Header lang="fr" path={PATH} />
      <main className={`${styles.page} ${fontClassesFor(theme.fonts)}`} style={themeVars(theme)}>
        <div className={styles.inner}>
          <header className={styles.head}>
            <p className={styles.kicker}>Tinta · AppCraft31</p>
            <h1 className={styles.title}>Conditions d&apos;utilisation</h1>
            <p className={styles.updated}>
              <a href="#en">English version below</a> · mise à jour le{' '}
              <time dateTime={UPDATED}>26 novembre 2026</time>
            </p>
          </header>

          <section className={styles.section}>
            <h2>1. Éditeur et acceptation</h2>
            <p>
              Tinta est un jeu de logique édité par AppCraft31 (contact : <a href={mail}>{CONTACT_EMAIL}</a>),
              distribué sur l&apos;App Store et Google Play. En téléchargeant ou en utilisant Tinta, vous acceptez
              les présentes conditions. Elles complètent les conditions de la boutique qui vous a fourni le jeu
              (Apple ou Google), qui s&apos;appliquent aussi.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Licence</h2>
            <p>
              AppCraft31 vous accorde une licence personnelle, non exclusive, non transférable et révocable
              d&apos;utiliser Tinta sur les appareils que vous possédez ou contrôlez, à des fins non commerciales.
              Le jeu, ses grilles, ses graphismes, ses textes et ses sons restent la propriété d&apos;AppCraft31.
              Il est interdit de copier, modifier, décompiler ou redistribuer le jeu, ou d&apos;en extraire les
              grilles, sauf dans la mesure où la loi l&apos;autorise.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Publicité, indices et achats</h2>
            <ul>
              <li>
                Le jeu se télécharge sans frais et affiche de la publicité (annonces plein écran et vidéos
                récompensées facultatives), comme décrit dans la politique de confidentialité.
              </li>
              <li>
                Les indices sont un avantage de jeu sans valeur monétaire : ils ne s&apos;achètent pas, ne se
                revendent pas et ne s&apos;échangent pas.
              </li>
              <li>
                L&apos;achat unique « Sans publicité » retire les annonces plein écran ; il est lié à votre compte
                Apple ou Google et se restaure depuis les réglages du jeu. Le paiement, la facturation et les
                remboursements sont gérés par Apple ou Google selon leurs propres conditions.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Défi du jour et classement</h2>
            <p>
              Le classement du défi du jour utilise un compte de joueur anonyme créé par Unity Gaming Services, avec
              un pseudo tiré au hasard. Il est interdit de fausser le classement (outils, modification du jeu ou de
              ses échanges avec le serveur, automatisation). AppCraft31 peut écarter un score ou un compte qui ne
              respecte pas ces règles. Les récompenses éventuelles du classement sont des indices, sans valeur
              monétaire.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Disponibilité</h2>
            <p>
              Les niveaux se jouent hors ligne. Les services en ligne (classement, publicité, achats) dépendent de
              prestataires tiers et peuvent être interrompus, modifiés ou arrêtés. AppCraft31 peut faire évoluer
              le jeu, ses contenus et ses règles au fil des mises à jour.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Garantie et responsabilité</h2>
            <p>
              Le jeu est fourni « en l&apos;état ». Dans les limites permises par la loi, AppCraft31 ne garantit pas
              qu&apos;il fonctionnera sans interruption ni erreur, et n&apos;est pas responsable des dommages indirects
              liés à son utilisation, notamment la perte de progression. Rien dans ces conditions ne limite les
              droits que vous accorde la loi, en particulier en tant que consommateur.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Données personnelles</h2>
            <p>
              Le traitement de vos données est décrit dans la{' '}
              <Link href={privacyPath(app)}>politique de confidentialité de Tinta</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Modifications, droit applicable et contact</h2>
            <p>
              Ces conditions peuvent être mises à jour ; la date en haut de page indique la dernière version. Elles
              sont régies par le droit français, sans vous priver de la protection des règles impératives du pays
              où vous résidez. Pour toute question : <a href={mail}>{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <div id="en" lang="en">
            <header className={styles.head}>
              <p className={styles.kicker}>Tinta · AppCraft31</p>
              <h2 className={styles.title}>Terms of use</h2>
            </header>

            <section className={styles.section}>
              <h2>1. Publisher and acceptance</h2>
              <p>
                Tinta is a logic game published by AppCraft31 (contact: <a href={mail}>{CONTACT_EMAIL}</a>),
                distributed on the App Store and Google Play. By downloading or using Tinta, you accept these terms.
                They supplement the terms of the store that provided the game (Apple or Google), which also apply.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Licence</h2>
              <p>
                AppCraft31 grants you a personal, non-exclusive, non-transferable and revocable licence to use Tinta
                on devices you own or control, for non-commercial purposes. The game, its grids, graphics, texts and
                sounds remain the property of AppCraft31. You may not copy, modify, decompile or redistribute the
                game, or extract its grids, except to the extent permitted by law.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Ads, hints and purchases</h2>
              <ul>
                <li>
                  The game is free to download and shows ads (full-screen ads and optional rewarded videos), as
                  described in the privacy policy.
                </li>
                <li>Hints are an in-game advantage with no monetary value: they cannot be bought, sold or exchanged.</li>
                <li>
                  The one-time &quot;Remove Ads&quot; purchase removes full-screen ads; it is tied to your Apple or
                  Google account and can be restored from the game settings. Payment, billing and refunds are handled
                  by Apple or Google under their own terms.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Daily challenge and leaderboard</h2>
              <p>
                The daily challenge leaderboard uses an anonymous player account created by Unity Gaming Services,
                with a random nickname. You may not distort the leaderboard (tools, modifying the game or its
                exchanges with the server, automation). AppCraft31 may remove a score or an account that breaks
                these rules. Any leaderboard rewards are hints, with no monetary value.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Availability</h2>
              <p>
                Levels play offline. Online services (leaderboard, ads, purchases) rely on third-party providers and
                may be interrupted, changed or discontinued. AppCraft31 may change the game, its content and its
                rules through updates.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Warranty and liability</h2>
              <p>
                The game is provided &quot;as is&quot;. To the extent permitted by law, AppCraft31 does not guarantee
                that it will run without interruption or error, and is not liable for indirect damage arising from
                its use, including loss of progress. Nothing in these terms limits the rights the law gives you, in
                particular as a consumer.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Personal data</h2>
              <p>
                How your data is processed is described in the{' '}
                <Link href="/en/privacy/tinta">Tinta privacy policy</Link>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Changes, governing law and contact</h2>
              <p>
                These terms may be updated; the date at the top of the page shows the latest version. They are
                governed by French law, without depriving you of the protection of the mandatory rules of your
                country of residence. Questions: <a href={mail}>{CONTACT_EMAIL}</a>.
              </p>
            </section>
          </div>

          <p className={styles.back}>
            <Link href={appPath(app)}>← Tinta</Link>
          </p>
        </div>
      </main>
      <Footer lang="fr" path={PATH} />
    </>
  );
}
