/**
 * Présence d'AppCraft31 hors du site.
 *
 * Un seul endroit à mettre à jour : le hero de l'accueil et le pied de page y
 * puisent tous les deux.
 */

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  /**
   * Le logo de la marque est son nom : l'afficher en toutes lettres à côté
   * donnerait « 𝕏 X ». Le libellé reste lu par les lecteurs d'écran.
   */
  logoIsName?: boolean;
}

export const SOCIAL: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/appcraft31/',
  },
  {
    id: 'x',
    label: 'X',
    href: 'https://x.com/appcraft31',
    logoIsName: true,
  },
];
