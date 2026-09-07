import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyPage } from '@/components/privacy/PrivacyPage';
import { PRIVACY_SLUGS, getAppByPrivacySlug } from '@/lib/apps';
import { privacyMetadata } from '@/lib/metadata';

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
  // Ces pages n'ont pas vocation à être trouvées par une recherche : elles
  // sont là pour être lues depuis la fiche store et depuis l'app. Celles des
  // outils non listés vont plus loin et sortent carrément des index.
  return privacyMetadata(app, 'fr');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppByPrivacySlug(slug);
  if (!app) notFound();
  return <PrivacyPage app={app} lang="fr" />;
}
