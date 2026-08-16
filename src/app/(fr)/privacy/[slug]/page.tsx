import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyPage } from '@/components/privacy/PrivacyPage';
import { PRIVACY_SLUGS, getAppByPrivacySlug, privacyPath } from '@/lib/apps';
import { alternates } from '@/lib/i18n';

export function generateStaticParams() {
  return PRIVACY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppByPrivacySlug(slug);
  if (!app) return {};
  const path = privacyPath(app);

  return {
    title: `Politique de confidentialité — ${app.name}`,
    description: `Ce que ${app.name} fait — et ne fait pas — de vos données : stockage local, publicité, achats intégrés, mesure d'audience et vos droits.`,
    alternates: { canonical: path, languages: alternates(path) },
    // Ces pages n'ont pas vocation à être trouvées par une recherche : elles
    // sont là pour être lues depuis la fiche store et depuis l'app.
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppByPrivacySlug(slug);
  if (!app) notFound();
  return <PrivacyPage app={app} lang="fr" />;
}
