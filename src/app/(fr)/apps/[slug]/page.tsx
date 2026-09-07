import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppPage } from '@/components/marketing/AppPage';
import { APP_SLUGS, getApp } from '@/lib/apps';
import { appCopy } from '@/lib/app-copy';
import { appMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return APP_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return appMetadata(app, 'fr');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  return <AppPage app={app} copy={appCopy(app, 'fr')} lang="fr" />;
}
