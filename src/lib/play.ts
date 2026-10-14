import { LANGS, type Lang } from './types';

/**
 * Adresses du jeu web Tinta (grille du jour).
 *
 * Contrairement au reste du site, le chemin se traduit : `/jouer/tinta.html`
 * en français, `/<lang>/play/tinta.html` ailleurs. C'est une URL qu'on
 * partage dans un message (« Tinta #44 · ★★★ … »), donc elle doit se lire
 * dans la langue du joueur ; « play » est compris partout hors du français.
 * Le `.html` suit la règle du site (export statique sans `trailingSlash`) ;
 * `vercel.json` réécrit en plus la forme courte sans extension.
 */
export function tintaPlayPath(lang: Lang): string {
  return lang === 'fr' ? '/jouer/tinta.html' : `/${lang}/play/tinta.html`;
}

/** Les six adresses, pour le sélecteur de langue et les `hreflang`. */
export function tintaPlayUrls(): Record<Lang, string> {
  return Object.fromEntries(LANGS.map((l) => [l, tintaPlayPath(l)])) as Record<Lang, string>;
}

/** Fiche App Store de Tinta (lien court, sans storefront imposé). */
export const TINTA_APP_STORE = 'https://apps.apple.com/app/id6787122341';
