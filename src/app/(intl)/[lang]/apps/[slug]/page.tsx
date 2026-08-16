import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppPage } from '@/components/marketing/AppPage';
import { APP_SLUGS, appPath, getApp } from '@/lib/apps';
import { appCopy } from '@/lib/app-copy';
import { alternates, isLang, localizedUrl } from '@/lib/i18n';
import { DEFAULT_LANG, LANGS } from '@/lib/types';

export function generateStaticParams() {
  return LANGS.filter((l) => l !== DEFAULT_LANG).flatMap((lang) =>
    APP_SLUGS.map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const app = getApp(slug);
  if (!app || !isLang(lang)) return {};
  const copy = appCopy(app, lang);
  const path = appPath(app);

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: { canonical: localizedUrl(lang, path), languages: alternates(path) },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: localizedUrl(lang, path),
      type: 'website',
      ...(app.ogImage ? { images: [{ url: app.ogImage }] } : {}),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const app = getApp(slug);
  if (!app || !isLang(lang)) notFound();
  return <AppPage app={app} copy={appCopy(app, lang)} lang={lang} />;
}
