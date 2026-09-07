import type { Metadata } from 'next';
import '../../home.css';
import { HomePage } from '@/components/home/HomePage';
import { isLang } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { homeMetadata } from '@/lib/metadata';
import { DEFAULT_LANG, LANGS } from '@/lib/types';

export function generateStaticParams() {
  return LANGS.filter((l) => l !== DEFAULT_LANG).map((lang) => ({ lang }));
}

/**
 * Sans ceci, les cinq accueils traduits n'avaient qu'un `<title>AppCraft31</title>`
 * hérité du layout : ni description, ni canonical, ni hreflang, ni image de
 * partage. Cinq pages qu'un moteur ne pouvait pas qualifier.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return homeMetadata(lang);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <HomePage lang={lang} />;
}
