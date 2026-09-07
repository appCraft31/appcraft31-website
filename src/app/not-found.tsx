import Link from 'next/link';
import './globals.css';

/**
 * Page 404, servie par Vercel pour toute adresse inconnue.
 *
 * Elle porte son propre `<html>` : les deux layouts racines vivent dans les
 * groupes `(fr)` et `(intl)`, et un fichier posé ici n'appartient à aucun des
 * deux — il n'hérite donc d'aucun document. C'est aussi pourquoi elle reste
 * volontairement autonome, sans en-tête ni pied de page : ceux-ci demandent une
 * langue, et une adresse inconnue n'en a pas.
 *
 * Le gabarit par défaut de Next, lui, s'affichait en anglais et sans attribut
 * `lang` — illisible pour un lecteur d'écran, et muet sur la langue du site.
 */
export const metadata = {
  title: 'Page introuvable · AppCraft31',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <main className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
          <p style={{ fontSize: 72, margin: 0, opacity: 0.2, fontWeight: 700 }}>404</p>
          <h1 style={{ margin: '8px 0 6px', fontSize: 28 }}>Cette page n’existe pas</h1>
          <p style={{ margin: '0 0 32px', color: 'var(--text-soft)' }} lang="en">
            This page does not exist.
          </p>
          <Link href="/" className="btn btn-primary">
            Accueil · Home
          </Link>
        </main>
      </body>
    </html>
  );
}
