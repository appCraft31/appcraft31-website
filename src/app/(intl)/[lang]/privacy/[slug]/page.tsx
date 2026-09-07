import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyPage } from '@/components/privacy/PrivacyPage';
import { PRIVACY_SLUGS, getAppByPrivacySlug } from '@/lib/apps';
import { isLang } from '@/lib/i18n';
import { privacyMetadata } from '@/lib/metadata';
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
  // Le titre et la description suivent la langue de la page : ils étaient
  // servis en anglais sous un `lang="ja"`, ce qui suffit à faire sortir la
  // page de sa propre grappe hreflang.
  return privacyMetadata(app, lang);
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
