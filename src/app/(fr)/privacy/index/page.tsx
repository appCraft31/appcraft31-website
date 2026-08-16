import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyPage } from '@/components/privacy/PrivacyPage';
import { getApp } from '@/lib/apps';

/**
 * `/privacy/index.html` — la politique d'**EcoPompe**, pas un index.
 *
 * C'est la première politique publiée par le site, à une époque où il n'y avait
 * qu'une app. L'URL figure dans la fiche EcoPompe : elle est gelée. La même
 * politique est aussi servie à `/privacy/ecopompe.html`, qui est l'adresse à
 * utiliser désormais.
 */
export const metadata: Metadata = {
  title: 'Politique de confidentialité — EcoPompe',
  description:
    'Ce qu’EcoPompe fait — et ne fait pas — de vos données : stations favorites, position, données ouvertes des prix, et vos droits.',
  alternates: { canonical: '/privacy/ecopompe.html' },
};

export default function Page() {
  const app = getApp('ecopompe');
  if (!app) notFound();
  return <PrivacyPage app={app} lang="fr" />;
}
