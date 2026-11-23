import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTACT_EMAIL, Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import styles from '@/components/privacy/privacy.module.css';
import { getTheme } from '@/content/themes';
import { appPath, getAppByPrivacySlug, privacyPath } from '@/lib/apps';
import { fontClassesFor } from '@/lib/fonts-universe';
import { themeVars } from '@/lib/theme';

/**
 * Demande de suppression du compte de classement de GraviWords.
 *
 * Google Play exige, pour une app qui crée un compte, une page web où l'on peut
 * demander sa suppression sans réinstaller l'app. Le compte est ici un joueur
 * anonyme Unity (classements de la version 3.0), supprimé dans le jeu par le
 * script Cloud Code `delete_player_data`, ou à la main sur demande par e-mail
 * (procédure : `unity/docs/CLASSEMENTS.md` du dépôt du jeu).
 *
 * Une seule page en français puis en anglais : c'est l'anglais que lit
 * l'examen de Google, et l'URL déclarée dans la Play Console doit être unique.
 */
const PATH = '/privacy/graviwords-suppression';
const SUBJECT = 'Suppression compte GraviWords';

export const metadata: Metadata = {
  title: 'Supprimer son compte de classement · GraviWords',
  description:
    'Comment supprimer votre compte de classement GraviWords, dans le jeu ou par e-mail, et ce qui est effacé. How to delete your GraviWords leaderboard account.',
  alternates: { canonical: `https://appcraft31.app${PATH}.html` },
};

const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

export default function Page() {
  const app = getAppByPrivacySlug('graviwords');
  if (!app) notFound();
  const theme = getTheme(app.slug);

  return (
    <>
      <Header lang="fr" path={PATH} />
      <main className={`${styles.page} ${fontClassesFor(theme.fonts)}`} style={themeVars(theme)}>
        <div className={styles.inner}>
          <header className={styles.head}>
            <p className={styles.kicker}>GraviWords · AppCraft31</p>
            <h1 className={styles.title}>Supprimer votre compte de classement</h1>
            <p className={styles.updated}>
              <a href="#en">English version below</a> · mise à jour le{' '}
              <time dateTime="2026-11-23">23 novembre 2026</time>
            </p>
          </header>

          <section className={styles.section}>
            <h2>De quel compte s&apos;agit-il ?</h2>
            <p>
              À partir de la version 3.0, GraviWords, jeu publié par AppCraft31 sur l&apos;App Store et Google
              Play, crée un compte de joueur anonyme chez Unity pour ses classements en ligne : un identifiant et un
              pseudo tirés au hasard, sans nom, adresse e-mail ni mot de passe. C&apos;est le seul compte du jeu.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Dans le jeu (immédiat)</h2>
            <ol>
              <li>Ouvrez GraviWords.</li>
              <li>
                Touchez « Supprimer mon compte de classement », dans les réglages ou au bas de l&apos;écran
                Classement.
              </li>
              <li>Confirmez avec « Supprimer définitivement ».</li>
            </ol>
            <p>
              La suppression se fait dès que l&apos;appareil est connecté ; sans réseau, elle reste en attente et
              repart toute seule. Plus aucun score n&apos;est envoyé ensuite, sauf si vous rejoignez le classement
              (un nouveau compte est alors créé).
            </p>
          </section>

          <section className={styles.section}>
            <h2>Sans le jeu (par e-mail)</h2>
            <p>
              Écrivez à <a href={mail}>{CONTACT_EMAIL}</a>, objet « {SUBJECT} », en indiquant votre pseudo et
              votre score tels qu&apos;affichés dans le classement, et si vous jouez sur iPhone/iPad ou Android.
              Nous supprimons le compte sous 30 jours et vous le confirmons par retour d&apos;e-mail. Si le jeu est
              encore installé et que vous rejouez, il recrée un compte : supprimez-le aussi dans le jeu, ou
              désinstallez-le.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Ce qui est supprimé, ce qui reste</h2>
            <ul>
              <li>Supprimés définitivement : l&apos;identifiant du compte, le pseudo, le record et les scores du défi du jour dans tous les classements.</li>
              <li>
                Restent sur votre appareil, jusqu&apos;à la désinstallation : pièces, pouvoirs, record local et
                réglages. Ils ne sont jamais envoyés à AppCraft31.
              </li>
              <li>
                Ne dépendent pas de nous : les achats (tenus par Apple ou Google), les succès Game Center ou Google
                Play Jeux (gérés depuis votre profil chez Apple ou Google), et les journaux techniques de Unity,
                conservés selon sa politique : https://unity.com/legal/privacy-policy
              </li>
            </ul>
            <p>
              Détails : <Link href={privacyPath(app)}>politique de confidentialité de GraviWords</Link>.
            </p>
          </section>

          <div id="en" lang="en">
            <header className={styles.head}>
              <p className={styles.kicker}>GraviWords · AppCraft31</p>
              <h2 className={styles.title}>Delete your leaderboard account</h2>
            </header>

            <section className={styles.section}>
              <h2>Which account?</h2>
              <p>
                From version 3.0, GraviWords, a game published by AppCraft31 on the App Store and Google Play,
                creates an anonymous player account with Unity for its online leaderboards: a random identifier and
                nickname, with no name, email address or password. It is the game&apos;s only account.
              </p>
            </section>

            <section className={styles.section}>
              <h2>In the game (immediate)</h2>
              <ol>
                <li>Open GraviWords.</li>
                <li>Tap &quot;Delete my leaderboard account&quot;, in the settings or at the bottom of the Leaderboard screen.</li>
                <li>Confirm with &quot;Delete permanently&quot;.</li>
              </ol>
              <p>
                Deletion happens as soon as the device is online; without a connection it stays pending and resumes
                on its own. No more scores are sent afterwards, unless you rejoin the leaderboard (a new account is
                then created).
              </p>
            </section>

            <section className={styles.section}>
              <h2>Without the game (by email)</h2>
              <p>
                Email <a href={mail}>{CONTACT_EMAIL}</a> with the subject &quot;{SUBJECT}&quot;, giving your nickname
                and score as shown in the leaderboard, and whether you play on iPhone/iPad or Android. We delete the
                account within 30 days and confirm by email. If the game is still installed and you play again, it
                creates a new account: delete it in the game as well, or uninstall it.
              </p>
            </section>

            <section className={styles.section}>
              <h2>What is deleted, what is kept</h2>
              <ul>
                <li>Permanently deleted: the account identifier, the nickname, the best score and daily challenge scores in every leaderboard.</li>
                <li>Kept on your device until you uninstall: coins, powers, local best score and settings. They are never sent to AppCraft31.</li>
                <li>
                  Outside our control: purchases (held by Apple or Google), Game Center or Google Play Games
                  achievements (managed from your Apple or Google profile), and Unity&apos;s technical logs, kept under
                  its policy: https://unity.com/legal/privacy-policy
                </li>
              </ul>
              <p>
                Details: <Link href="/en/privacy/graviwords">GraviWords privacy policy</Link>.
              </p>
            </section>
          </div>

          <p className={styles.back}>
            <Link href={appPath(app)}>← GraviWords</Link>
          </p>
        </div>
      </main>
      <Footer lang="fr" path={PATH} />
    </>
  );
}
