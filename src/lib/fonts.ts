/**
 * Polices du site lui-même (en-tête, accueil, chrome commun).
 *
 * Les polices propres aux univers des apps vivent dans `fonts-universe.ts`,
 * pour que l'accueil n'embarque pas le CSS des quinze familles produits.
 */

import { Bricolage_Grotesque, Inter } from 'next/font/google';

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
  weight: ['400', '600', '700', '800'],
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/** Classes à poser sur `<html>` pour exposer les variables de police. */
export const siteFontVars = `${bricolage.variable} ${inter.variable}`;
