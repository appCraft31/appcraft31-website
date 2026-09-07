import type { Metadata } from 'next';
import '../home.css';
import { HomePage } from '@/components/home/HomePage';
import { homeMetadata } from '@/lib/metadata';

/**
 * L'accueil français était la seule page du site sans `rel=canonical` ni
 * grappe `hreflang` : la page la plus importante, et la seule que ses
 * traductions déclaraient sans qu'elle les déclare en retour.
 */
export const metadata: Metadata = homeMetadata('fr');

export default function Page() {
  return <HomePage lang="fr" />;
}
