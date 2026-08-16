'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { AppData, Lang } from '@/lib/types';
import { StoreLinks } from './StoreLinks';
import styles from './sticky.module.css';

/**
 * Barre de téléchargement qui suit le défilement.
 *
 * Les badges du hero disparaissent dès le premier écran passé ; à partir de là,
 * un lecteur convaincu au milieu de la page n'a plus rien sur quoi appuyer.
 * Cette barre reprend l'icône, le nom et les liens, et n'apparaît qu'une fois
 * le hero franchi — sinon elle ferait doublon avec lui.
 *
 * Elle disparaît à nouveau au niveau de l'appel final, qui porte déjà les mêmes
 * liens en grand.
 */
export function StickyDownload({ app, lang }: { app: AppData; lang: Lang }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Sans lien de téléchargement, la barre n'aurait rien à proposer.
    const { ios, android, web } = app.store;
    if (!ios && !android && !web) return;

    const hero = document.querySelector('main section');
    const cta = document.querySelector('[data-final-cta]');
    if (!hero) return;

    let pastHero = false;
    let atCta = false;
    const update = () => setShown(pastHero && !atCta);

    const heroWatcher = new IntersectionObserver(
      ([entry]) => {
        pastHero = !entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );
    heroWatcher.observe(hero);

    let ctaWatcher: IntersectionObserver | undefined;
    if (cta) {
      ctaWatcher = new IntersectionObserver(
        ([entry]) => {
          atCta = entry.isIntersecting;
          update();
        },
        { threshold: 0 },
      );
      ctaWatcher.observe(cta);
    }

    return () => {
      heroWatcher.disconnect();
      ctaWatcher?.disconnect();
    };
  }, [app.store]);

  const { ios, android, web } = app.store;
  if (!ios && !android && !web) return null;

  return (
    <div className={`${styles.bar} ${shown ? styles.shown : ''}`} aria-hidden={!shown}>
      <div className={styles.inner}>
        {/* Chargée d'emblée : dans un conteneur masqué, une image paresseuse
            n'est demandée qu'au moment où la barre apparaît, et se dessine
            après elle. */}
        <Image
          src={app.icon}
          alt=""
          width={44}
          height={44}
          className={styles.icon}
          loading="eager"
          unoptimized
        />
        <div className={styles.id}>
          <strong>{app.name}</strong>
          <span>{lang === 'fr' ? 'Télécharger' : 'Download'}</span>
        </div>
        {/* `inert` : quand la barre est masquée, ses liens ne doivent pas
            capter le clavier ni les lecteurs d'écran. */}
        <div className={styles.actions} inert={!shown}>
          <StoreLinks app={app} lang={lang} size="compact" />
        </div>
      </div>
    </div>
  );
}
