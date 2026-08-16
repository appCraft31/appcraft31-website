import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyPage } from '@/components/privacy/PrivacyPage';
import { PRIVACY_SLUGS, getAppByPrivacySlug, privacyPath } from '@/lib/apps';
import { alternates, isLang, localizedUrl } from '@/lib/i18n';
import { DEFAULT_LANG, LANGS } from '@/lib/types';

export function generateStaticParams() {
  return LANGS.filter((l) => l !== DEFAULT_LANG).flatMap((lang) =>
    PRIVACY_SLUGS.map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const app = getAppByPrivacySlug(slug);
  if (!app || !isLang(lang)) return {};
  const path = privacyPath(app);

  return {
    title: `Privacy policy — ${app.name}`,
    description: `What ${app.name} does — and does not do — with your data: local storage, advertising, in-app purchases, analytics and your rights.`,
    alternates: { canonical: localizedUrl(lang, path), languages: alternates(path) },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const app = getAppByPrivacySlug(slug);
  if (!app || !isLang(lang)) notFound();
  return <PrivacyPage app={app} lang={lang} />;
}
