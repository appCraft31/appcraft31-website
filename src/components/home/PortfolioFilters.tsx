'use client';

import { useState } from 'react';

type Filter = 'all' | 'app' | 'game';

/**
 * Filtres de la grille.
 *
 * Le filtrage masque des cartes déjà rendues côté serveur plutôt que de les
 * recréer : les vingt produits restent dans le HTML, donc indexables, et sans
 * JavaScript la grille s'affiche entière.
 */
export function PortfolioFilters({
  labels,
}: {
  labels: { all: string; apps: string; games: string };
}) {
  const [active, setActive] = useState<Filter>('all');

  function apply(filter: Filter) {
    setActive(filter);
    const grid = document.getElementById('apps-grid');
    if (!grid) return;
    for (const card of grid.querySelectorAll<HTMLElement>('.app-card')) {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    }
  }

  const options: { id: Filter; label: string }[] = [
    { id: 'all', label: labels.all },
    { id: 'app', label: labels.apps },
    { id: 'game', label: labels.games },
  ];

  return (
    <div className="filters" role="group" aria-label={labels.all}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          className={o.id === active ? 'filter-btn is-active' : 'filter-btn'}
          aria-pressed={o.id === active}
          onClick={() => apply(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
