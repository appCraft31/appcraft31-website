import type { Metadata } from 'next';
import { TINTA_COPY } from '@/components/tinta/copy';
import { TintaPlayPage } from '@/components/tinta/TintaPlayPage';
import { tintaPlayMetadata } from '@/lib/metadata';
import { tintaPlayUrls } from '@/lib/play';

/** `/jouer/tinta.html` — la grille du jour de Tinta, jouable sans l'app. */
export const metadata: Metadata = tintaPlayMetadata('fr', TINTA_COPY.fr, tintaPlayUrls());

export default function Page() {
  return <TintaPlayPage lang="fr" />;
}
