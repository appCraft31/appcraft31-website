import { APPS } from '@/lib/apps';

/**
 * Bandeau défilant des noms de produits, entre le hero et la grille.
 *
 * C'est un élément d'affiche : il donne du rythme à la page et annonce
 * l'ampleur du catalogue avant même de le montrer. Purement décoratif, donc
 * masqué aux lecteurs d'écran — les noms sont juste en dessous, en vrais liens.
 */
export function Marquee() {
  const names = APPS.map((a) => a.name);

  return (
    <div className="marquee" aria-hidden="true">
      {/* Deux passages identiques : le second prend le relais sans rupture. */}
      {[0, 1].map((pass) => (
        <div className="marquee-track" key={pass}>
          {names.map((name) => (
            <span className="marquee-item" key={`${pass}-${name}`}>
              {name}
              <i className="marquee-sep">✦</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
