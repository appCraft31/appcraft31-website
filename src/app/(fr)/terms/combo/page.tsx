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
 * Conditions d'utilisation de SquareLink (slug historique `combo`).
 *
 * Google Play demande, dans « Statut de professionnel », l'URL des conditions
 * d'utilisation de l'app. Une seule page en français puis en anglais, comme
 * celle de Tinta : c'est l'anglais que lit l'examen de Google, et l'URL
 * déclarée doit être unique. Le contenu décrit SquareLink 3.0 (Unity) : modes
 * Voyage, Infini et défi du jour, indications, « Sans publicité », pack de
 * cosmétiques, classement mondial anonyme.
 */
const PATH = '/terms/combo';
const UPDATED = '2026-11-27';

export const metadata: Metadata = {
  title: "Conditions d'utilisation · SquareLink",
  description:
    "Conditions d'utilisation du jeu SquareLink (AppCraft31) : licence, achats, classement mondial, responsabilité. SquareLink terms of use.",
  alternates: { canonical: `https://appcraft31.app${PATH}.html` },
};

export default function Page() {
  const app = getApp('combo');
  if (!app) notFound();
  const theme = getTheme(app.slug);
  const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('SquareLink')}`;

  return (
    <>
      <Header lang="fr" path={PATH} />
      <main className={`${styles.page} ${fontClassesFor(theme.fonts)}`} style={themeVars(theme)}>
        <div className={styles.inner}>
          <header className={styles.head}>
            <p className={styles.kicker}>SquareLink · AppCraft31</p>
            <h1 className={styles.title}>Conditions d&apos;utilisation</h1>
            <p className={styles.updated}>
              <a href="#en">English version below</a> · mise à jour le{' '}
              <time dateTime={UPDATED}>27 novembre 2026</time>
            </p>
          </header>

          <section className={styles.section}>
            <h2>1. Éditeur et acceptation</h2>
            <p>
              SquareLink est un jeu de réflexion à tuiles édité par AppCraft31, à Toulouse (contact :{' '}
              <a href={mail}>{CONTACT_EMAIL}</a>), distribué sur l&apos;App Store et Google Play. En téléchargeant ou
              en utilisant SquareLink, vous acceptez les présentes conditions. Elles complètent les conditions de la
              boutique qui vous a fourni le jeu (Apple ou Google), qui s&apos;appliquent aussi.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Licence</h2>
            <p>
              AppCraft31 vous accorde une licence personnelle, non exclusive, non transférable et révocable
              d&apos;utiliser SquareLink sur les appareils que vous possédez ou contrôlez, à des fins non
              commerciales. Le jeu, ses niveaux, ses graphismes, ses mascottes, ses textes et ses sons restent la
              propriété d&apos;AppCraft31. Il est interdit de copier, modifier, décompiler ou redistribuer le jeu, ou
              d&apos;en extraire les niveaux, sauf dans la mesure où la loi l&apos;autorise.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Publicité et achats</h2>
            <ul>
              <li>
                Le jeu se télécharge sans frais et affiche de la publicité (annonces plein écran et vidéos
                récompensées facultatives), comme décrit dans la politique de confidentialité.
              </li>
              <li>
                Les indications et les récompenses des vidéos (continuer ou recommencer une partie) sont des
                avantages de jeu sans valeur monétaire : ils ne se revendent pas et ne s&apos;échangent pas.
              </li>
              <li>
                Les achats « Sans publicité » (retrait des annonces plein écran) et « pack de cosmétiques » sont
                définitifs ; ils sont liés à votre compte Apple ou Google et se restaurent depuis la boutique du jeu. Le paiement,
                la facturation et les remboursements sont gérés par Apple ou Google selon leurs propres conditions.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Classement mondial</h2>
            <p>
              Le classement mondial (mode Infini et niveau du joueur) utilise un compte de joueur anonyme créé par
              Unity Gaming Services, avec un pseudo généré automatiquement. Il est interdit de fausser le classement
              (outils, modification du jeu ou de ses échanges avec le serveur, automatisation). AppCraft31 peut
              écarter un score ou un compte qui ne respecte pas ces règles.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Disponibilité</h2>
            <p>
              Le jeu se joue hors ligne. Les services en ligne (classement, publicité, achats) dépendent de
              prestataires tiers et peuvent être interrompus, modifiés ou arrêtés. AppCraft31 peut faire évoluer le
              jeu, ses contenus et ses règles au fil des mises à jour.
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
              <Link href={privacyPath(app)}>politique de confidentialité de SquareLink</Link>.
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
              <p className={styles.kicker}>SquareLink · AppCraft31</p>
              <h2 className={styles.title}>Terms of use</h2>
            </header>

            <section className={styles.section}>
              <h2>1. Publisher and acceptance</h2>
              <p>
                SquareLink is a tile puzzle game published by AppCraft31, Toulouse, France (contact:{' '}
                <a href={mail}>{CONTACT_EMAIL}</a>), distributed on the App Store and Google Play. By downloading or
                using SquareLink, you accept these terms. They supplement the terms of the store that provided the
                game (Apple or Google), which also apply.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Licence</h2>
              <p>
                AppCraft31 grants you a personal, non-exclusive, non-transferable and revocable licence to use
                SquareLink on devices you own or control, for non-commercial purposes. The game, its levels,
                graphics, mascots, texts and sounds remain the property of AppCraft31. You may not copy, modify,
                decompile or redistribute the game, or extract its levels, except to the extent permitted by law.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Ads and purchases</h2>
              <ul>
                <li>
                  The game is free to download and shows ads (full-screen ads and optional rewarded videos), as
                  described in the privacy policy.
                </li>
                <li>
                  Hints and video rewards (continuing or restarting a game) are in-game advantages with no monetary
                  value: they cannot be sold or exchanged.
                </li>
                <li>
                  The &quot;Remove Ads&quot; (removal of full-screen ads) and &quot;cosmetics pack&quot; purchases are
                  permanent; they are tied to your Apple or Google account and can be restored from the in-game shop.
                  Payment, billing and refunds are handled by Apple or Google under their own terms.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Global leaderboard</h2>
              <p>
                The global leaderboard (Infinite mode and player level) uses an anonymous player account created by
                Unity Gaming Services, with an automatically generated nickname. You may not distort the leaderboard
                (tools, modifying the game or its exchanges with the server, automation). AppCraft31 may remove a
                score or an account that breaks these rules.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Availability</h2>
              <p>
                The game plays offline. Online services (leaderboard, ads, purchases) rely on third-party providers
                and may be interrupted, changed or discontinued. AppCraft31 may change the game, its content and its
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
                <Link href="/en/privacy/combo">SquareLink privacy policy</Link>.
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
            <Link href={appPath(app)}>← SquareLink</Link>
          </p>
        </div>
      </main>
      <Footer lang="fr" path={PATH} />
    </>
  );
}
