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
 * Demande de suppression des données de Tinta.
 *
 * Déclarée dans la Play Console (Sécurité des données → « Proposez-vous aux
 * utilisateurs un moyen de demander la suppression de leurs données ? »).
 * Tinta 3.0 n'a pas de bouton de suppression dans le jeu : le compte de
 * classement anonyme (Unity Gaming Services) se supprime à la main, sur
 * demande par e-mail, et les statistiques Unity Analytics avec lui (même
 * projet Unity, même joueur). Une seule page, en français puis en anglais,
 * comme celle de GraviWords.
 */
const PATH = '/privacy/tinta-suppression';
const SUBJECT = 'Suppression données Tinta';

export const metadata: Metadata = {
  title: 'Supprimer vos données · Tinta',
  description:
    'Comment demander la suppression de vos données Tinta (classement du défi du jour, statistiques), et ce qui est effacé. How to request deletion of your Tinta data.',
  alternates: { canonical: `https://appcraft31.app${PATH}.html` },
};

const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

export default function Page() {
  const app = getApp('tinta');
  if (!app) notFound();
  const theme = getTheme(app.slug);

  return (
    <>
      <Header lang="fr" path={PATH} />
      <main className={`${styles.page} ${fontClassesFor(theme.fonts)}`} style={themeVars(theme)}>
        <div className={styles.inner}>
          <header className={styles.head}>
            <p className={styles.kicker}>Tinta · AppCraft31</p>
            <h1 className={styles.title}>Supprimer vos données</h1>
            <p className={styles.updated}>
              <a href="#en">English version below</a> · mise à jour le{' '}
              <time dateTime="2026-11-26">26 novembre 2026</time>
            </p>
          </header>

          <section className={styles.section}>
            <h2>Quelles données ?</h2>
            <p>
              Tinta, jeu publié par AppCraft31 sur l&apos;App Store et Google Play, ne crée aucun compte avec nom,
              adresse e-mail ou mot de passe. Deux types de données quittent votre appareil : le compte de joueur
              anonyme du classement du défi du jour (un identifiant et un pseudo tirés au hasard, vos scores), chez
              Unity Gaming Services, et les statistiques d&apos;usage envoyées à Unity Analytics.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Demander la suppression (par e-mail)</h2>
            <ol>
              <li>
                Écrivez à <a href={mail}>{CONTACT_EMAIL}</a>, objet « {SUBJECT} ».
              </li>
              <li>
                Indiquez votre pseudo tel qu&apos;affiché dans le classement du défi du jour (si vous y avez joué) et
                si vous jouez sur iPhone/iPad ou Android.
              </li>
              <li>Nous traitons la demande sous 30 jours et vous le confirmons par retour d&apos;e-mail.</li>
            </ol>
            <p>
              Si le jeu est encore installé et que vous rejouez le défi du jour, un nouveau compte anonyme est créé :
              désinstallez le jeu pour l&apos;éviter.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Ce qui est supprimé, ce qui reste</h2>
            <ul>
              <li>
                Supprimés définitivement : l&apos;identifiant du compte, le pseudo et vos scores dans le classement
                du jour et dans les classements archivés. Nous demandons aussi à Unity d&apos;effacer les
                statistiques d&apos;usage rattachées à ce joueur.
              </li>
              <li>
                Restent sur votre appareil, jusqu&apos;à la désinstallation : progression, étoiles, indices,
                séries et réglages. Ils ne sont jamais envoyés à AppCraft31.
              </li>
              <li>
                Ne dépendent pas de nous : les achats (tenus par Apple ou Google), les données publicitaires de
                Google et d&apos;Unity Ads (gérées depuis les réglages publicitaires de votre appareil), et les
                journaux techniques de Unity, conservés selon sa politique : https://unity.com/legal/privacy-policy
              </li>
            </ul>
            <p>
              Détails : <Link href={privacyPath(app)}>politique de confidentialité de Tinta</Link>.
            </p>
          </section>

          <div id="en" lang="en">
            <header className={styles.head}>
              <p className={styles.kicker}>Tinta · AppCraft31</p>
              <h2 className={styles.title}>Delete your data</h2>
            </header>

            <section className={styles.section}>
              <h2>Which data?</h2>
              <p>
                Tinta, a game published by AppCraft31 on the App Store and Google Play, creates no account with a
                name, email address or password. Two kinds of data leave your device: the anonymous player account of
                the daily challenge leaderboard (a random identifier and nickname, your scores), at Unity Gaming
                Services, and the usage statistics sent to Unity Analytics.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Request deletion (by email)</h2>
              <ol>
                <li>
                  Email <a href={mail}>{CONTACT_EMAIL}</a> with the subject &quot;{SUBJECT}&quot;.
                </li>
                <li>
                  Give your nickname as shown in the daily challenge leaderboard (if you played it) and whether you
                  play on iPhone/iPad or Android.
                </li>
                <li>We handle the request within 30 days and confirm by email.</li>
              </ol>
              <p>
                If the game is still installed and you play the daily challenge again, a new anonymous account is
                created: uninstall the game to avoid this.
              </p>
            </section>

            <section className={styles.section}>
              <h2>What is deleted, what is kept</h2>
              <ul>
                <li>
                  Permanently deleted: the account identifier, the nickname and your scores in the daily and archived
                  leaderboards. We also ask Unity to erase the usage statistics linked to that player.
                </li>
                <li>
                  Kept on your device until you uninstall: progress, stars, hints, streaks and settings. They are
                  never sent to AppCraft31.
                </li>
                <li>
                  Outside our control: purchases (held by Apple or Google), Google and Unity Ads advertising data
                  (managed from your device&apos;s ad settings), and Unity&apos;s technical logs, kept under its
                  policy: https://unity.com/legal/privacy-policy
                </li>
              </ul>
              <p>
                Details: <Link href="/en/privacy/tinta">Tinta privacy policy</Link>.
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
