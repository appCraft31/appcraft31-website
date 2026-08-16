import Image from 'next/image';
import Link from 'next/link';
import type { AppData, Lang } from '@/lib/types';
import styles from './store.module.css';

/**
 * Liens de téléchargement.
 *
 * C'est l'action que la page existe pour provoquer : les badges sont donc
 * grands, posés sur une surface qui les détache du fond, et répétés à chaque
 * moment où le lecteur peut se décider — dans le hero, à la fin, et dans une
 * barre qui suit le défilement.
 *
 * Les badges officiels d'Apple et de Google ne sont jamais recolorés ni
 * redessinés : leurs conditions d'usage l'interdisent. On agit sur ce qui les
 * entoure.
 */
export function StoreLinks({
  app,
  lang,
  size = 'default',
  align = 'start',
}: {
  app: AppData;
  lang: Lang;
  size?: 'default' | 'large' | 'compact';
  align?: 'start' | 'center';
}) {
  const { ios, android, web } = app.store;
  const fr = lang === 'fr';

  // Une app pas encore publiée n'a pas de lien : le dire vaut mieux que de
  // laisser un vide là où le lecteur cherche le bouton.
  if (!ios && !android && !web) {
    return (
      <p className={`${styles.soon} ${styles[align]}`}>
        {fr ? 'Bientôt sur l’App Store et Google Play' : 'Coming soon to the App Store and Google Play'}
      </p>
    );
  }

  const height = size === 'large' ? 62 : size === 'compact' ? 42 : 54;

  return (
    <div
      className={`${styles.links} ${styles[size]} ${styles[align]}`}
      style={{ '--badge-h': `${height}px` } as never}
    >
      {ios && (
        <a
          href={ios}
          target="_blank"
          rel="noopener"
          className={styles.badge}
          aria-label={fr ? `Télécharger ${app.name} sur l'App Store` : `Download ${app.name} on the App Store`}
        >
          <Image
            src="/assets/app-store-badge.svg"
            alt={fr ? 'Télécharger sur l’App Store' : 'Download on the App Store'}
            width={180}
            height={60}
            unoptimized
          />
        </a>
      )}

      {android && (
        <a
          href={android}
          target="_blank"
          rel="noopener"
          className={styles.badge}
          aria-label={fr ? `Télécharger ${app.name} sur Google Play` : `Get ${app.name} on Google Play`}
        >
          <Image
            src="/assets/google-play-badge.svg"
            alt={fr ? 'Disponible sur Google Play' : 'Get it on Google Play'}
            width={203}
            height={60}
            unoptimized
          />
        </a>
      )}

      {/* Le jeu web n'existe qu'à une seule adresse : il gère lui-même sa
          langue, la préfixer donnerait un lien mort. */}
      {web && (
        <Link href={web} className={styles.web}>
          {fr ? 'Jouer dans le navigateur' : 'Play in your browser'}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
