import Image from 'next/image';
import type { AppData } from '@/lib/types';

/**
 * Illustration du hero d'une page produit.
 *
 * Ordre de préférence : un visuel dessiné pour l'app (logotype, scène), sinon
 * sa première capture d'écran, sinon rien. On ne met jamais d'image d'attente :
 * une page sans visuel se tient mieux qu'une page qui montre autre chose que
 * l'app dont elle parle.
 */

/** Visuels dessinés à la main, par produit. */
const ARTWORK: Record<string, { src: string; alt: string; width: number; height: number }> = {
  // Le logotype du jeu (`lib/ui/widgets/wordmark.dart`) : lettres de Michroma
  // converties en tracés — un SVG chargé en <img> ne voit pas les polices de
  // la page —, dégradé violet → magenta, filet interrompu et réticule.
  holdfire: {
    src: '/assets/holdfire/wordmark-signal.svg',
    alt: 'Le logotype Hold Fire : HOLD au-dessus de FIRE en capitales larges, dégradé du violet au magenta, séparés par un filet pointillé et un petit réticule',
    width: 510,
    height: 280,
  },
};

/**
 * L'app a-t-elle de quoi illustrer son hero ?
 *
 * À vérifier avant de passer `<HeroVisual>` : le composant renvoie `null`
 * quand il n'a rien à montrer, mais l'élément React, lui, reste « vrai » —
 * de quoi masquer silencieusement le repli prévu (le motif du jeu).
 */
export function hasHeroVisual(app: AppData): boolean {
  return hasArtwork(app) || app.screenshots.length > 0;
}

/**
 * L'app a-t-elle un visuel dessiné pour elle (logotype, scène) ?
 * Quand c'est le cas, la page n'affiche pas en plus son nom en creux : le
 * logotype dit déjà comment le jeu s'appelle, et deux fois vaut redite.
 */
export function hasArtwork(app: AppData): boolean {
  return app.slug in ARTWORK;
}

export function HeroVisual({ app }: { app: AppData }) {
  const artwork = ARTWORK[app.slug];
  if (artwork) {
    return (
      <Image
        src={artwork.src}
        alt={artwork.alt}
        width={artwork.width}
        height={artwork.height}
        priority
        unoptimized
      />
    );
  }

  const shot = app.screenshots[0];
  if (!shot) return null;

  // Une capture d'écran est un portrait de téléphone : affichée sur toute la
  // largeur du hero, elle écrase la page. Le CSS la borne via `data-shot`.
  return (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={420}
      height={910}
      priority
      unoptimized
      data-shot=""
    />
  );
}
