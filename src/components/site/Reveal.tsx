'use client';

import { useEffect } from 'react';

/**
 * Fait apparaître les éléments `.reveal` à mesure qu'ils entrent dans l'écran.
 *
 * Remplace l'ancien `js/reveal.js`. Un élément déjà vu reste visible : on ne
 * réanime pas au retour en arrière, c'est agaçant à la lecture.
 */
export function Reveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
    if (nodes.length === 0) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    // Ce qui est déjà à l'écran s'affiche tout de suite, sans attendre un
    // événement de défilement qui ne viendra peut-être jamais (page courte,
    // ancre profonde, moteur de rendu qui ne défile pas).
    const fold = window.innerHeight;
    const pending: HTMLElement[] = [];
    for (const node of nodes) {
      if (node.getBoundingClientRect().top < fold) node.classList.add('is-visible');
      else pending.push(node);
    }
    if (pending.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    pending.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return null;
}
