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
 * Demande de suppression des données de SquareLink (slug historique `combo`).
 *
 * Déclarée dans la Play Console (Sécurité des données → « Proposez-vous aux
 * utilisateurs un moyen de demander la suppression de leurs données ? »).
 * SquareLink 3.0 n'a pas de bouton de suppression dans le jeu : le compte de
 * classement anonyme (Unity Gaming Services) se supprime à la main, sur
 * demande par e-mail, avec les statistiques Unity Analytics rattachées (même
 * projet Unity, même joueur). Une seule page, en français puis en anglais,
 * comme celle de Tinta.
 */
const PATH = '/privacy/combo-suppression';
const SUBJECT = 'Suppression données SquareLink';

export const metadata: Metadata = {
  title: 'Supprimer vos données · SquareLink',
  description:
    'Comment demander la suppression de vos données SquareLink (classement mondial, statistiques), et ce qui est effacé. How to request deletion of your SquareLink data.',
  alternates: { canonical: `https://appcraft31.app${PATH}.html` },
};

const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

export default function Page() {
  const app = getApp('combo');
  if (!app) notFound();
  const theme = getTheme(app.slug);

  return (
    <>
      <Header lang="fr" path={PATH} />
      <main className={`${styles.page} ${fontClassesFor(theme.fonts)}`} style={themeVars(theme)}>
        <div className={styles.inner}>
          <header className={styles.head}>
            <p className={styles.kicker}>SquareLink · AppCraft31</p>
            <h1 className={styles.title}>Supprimer vos données</h1>
            <p className={styles.updated}>
              <a href="#en">English version below</a> · mise à jour le{' '}
              <time dateTime="2026-11-27">27 novembre 2026</time>
            </p>
          </header>

          <section className={styles.section}>
            <h2>Quelles données ?</h2>
            <p>
              SquareLink, jeu publié par AppCraft31 sur l&apos;App Store et Google Play, ne crée aucun compte avec
              nom, adresse e-mail ou mot de passe. Les données qui quittent votre appareil sont : le compte de joueur
              anonyme du classement mondial (un identifiant de joueur Unity et un pseudo générés automatiquement,
              votre meilleur score du mode Infini et votre niveau), chez Unity Gaming Services ; les statistiques
              d&apos;usage envoyées à Unity Analytics et à Firebase Analytics ; et les rapports de plantage envoyés à
              Firebase Crashlytics.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Demander la suppression (par e-mail)</h2>
            <p>Le jeu ne propose pas de suppression intégrée : la demande se fait par e-mail.</p>
            <ol>
              <li>
                Écrivez à <a href={mail}>{CONTACT_EMAIL}</a>, objet « {SUBJECT} ».
              </li>
              <li>
                Indiquez votre pseudo tel qu&apos;affiché dans le classement mondial et si vous jouez sur
                iPhone/iPad ou Android.
              </li>
              <li>Nous traitons la demande sous 30 jours et vous le confirmons par retour d&apos;e-mail.</li>
            </ol>
            <p>
              Le jeu se reconnecte automatiquement à un compte anonyme : si vous continuez à y jouer, un nouveau
              compte est créé. Désinstallez le jeu pour l&apos;éviter.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Ce qui est supprimé, ce qui reste</h2>
            <ul>
              <li>
                Supprimés définitivement : l&apos;identifiant du compte de classement, le pseudo, vos scores et votre
                niveau dans le classement mondial. Nous demandons aussi à Unity d&apos;effacer les statistiques
                d&apos;usage rattachées à ce joueur.
              </li>
              <li>
                Les statistiques Firebase et les rapports de plantage ne sont liés qu&apos;à un identifiant
                d&apos;instance tiré au hasard, sans lien avec votre pseudo ni avec votre identité.
              </li>
              <li>
                Restent sur votre appareil, jusqu&apos;à la désinstallation : progression, records, partie en cours,
                cosmétiques et réglages. Ils ne sont jamais envoyés à AppCraft31. Désinstaller le jeu les efface.
              </li>
              <li>
                Ne dépendent pas de nous : les achats (tenus par Apple ou Google), les données publicitaires de
                Google, d&apos;Unity Ads et de Liftoff (gérées depuis les réglages publicitaires de votre appareil
                et la rangée « Confidentialité » des Réglages du jeu), et les journaux techniques de Unity, conservés
                selon sa politique : https://unity.com/legal/privacy-policy
              </li>
            </ul>
            <p>
              Détails : <Link href={privacyPath(app)}>politique de confidentialité de SquareLink</Link>.
            </p>
          </section>

          <div id="en" lang="en">
            <header className={styles.head}>
              <p className={styles.kicker}>SquareLink · AppCraft31</p>
              <h2 className={styles.title}>Delete your data</h2>
            </header>

            <section className={styles.section}>
              <h2>Which data?</h2>
              <p>
                SquareLink, a game published by AppCraft31 on the App Store and Google Play, creates no account with
                a name, email address or password. The data that leaves your device is: the anonymous player account
                of the global leaderboard (an automatically generated Unity player identifier and nickname, your best
                Infinite mode score and your level), at Unity Gaming Services; the usage statistics sent to Unity
                Analytics and Firebase Analytics; and the crash reports sent to Firebase Crashlytics.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Request deletion (by email)</h2>
              <p>The game has no built-in deletion: requests are made by email.</p>
              <ol>
                <li>
                  Email <a href={mail}>{CONTACT_EMAIL}</a> with the subject &quot;{SUBJECT}&quot;.
                </li>
                <li>
                  Give your nickname as shown in the global leaderboard and whether you play on iPhone/iPad or
                  Android.
                </li>
                <li>We handle the request within 30 days and confirm by email.</li>
              </ol>
              <p>
                The game automatically signs back in to an anonymous account: if you keep playing, a new account is
                created. Uninstall the game to avoid this.
              </p>
            </section>

            <section className={styles.section}>
              <h2>What is deleted, what is kept</h2>
              <ul>
                <li>
                  Permanently deleted: the leaderboard account identifier, the nickname, your scores and your level
                  in the global leaderboard. We also ask Unity to erase the usage statistics linked to that player.
                </li>
                <li>
                  Firebase statistics and crash reports are only linked to a random instance identifier, unrelated
                  to your nickname or your identity.
                </li>
                <li>
                  Kept on your device until you uninstall: progress, records, game in progress, cosmetics and
                  settings. They are never sent to AppCraft31. Uninstalling the game erases them.
                </li>
                <li>
                  Outside our control: purchases (held by Apple or Google), Google, Unity Ads and Liftoff advertising
                  data (managed from your device&apos;s ad settings and the &quot;Privacy&quot; row in the game
                  Settings), and Unity&apos;s technical logs, kept under its policy:
                  https://unity.com/legal/privacy-policy
                </li>
              </ul>
              <p>
                Details: <Link href="/en/privacy/combo">SquareLink privacy policy</Link>.
              </p>
            </section>
          </div>

          <p className={styles.back}>
            <Link href={appPath(app)}>← SquareLink</Link>
          </p>
        </div>
      </main>
      <Footer lang="fr" path={PATH} />
    </>
  );
}
