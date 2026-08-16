import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppPage } from '@/components/marketing/AppPage';
import { APP_SLUGS, appPath, getApp } from '@/lib/apps';
import { appCopy } from '@/lib/app-copy';
import { alternates } from '@/lib/i18n';

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
  const copy = appCopy(app, 'fr');
  const path = appPath(app);

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: { canonical: path, languages: alternates(path) },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: path,
      type: 'website',
      ...(app.ogImage ? { images: [{ url: app.ogImage }] } : {}),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  return <AppPage app={app} copy={appCopy(app, 'fr')} lang="fr" />;
}
