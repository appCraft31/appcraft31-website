import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TINTA_COPY } from '@/components/tinta/copy';
import { TintaPlayPage } from '@/components/tinta/TintaPlayPage';
import { isLang } from '@/lib/i18n';
import { tintaPlayMetadata } from '@/lib/metadata';
import { tintaPlayUrls } from '@/lib/play';
import { DEFAULT_LANG, LANGS } from '@/lib/types';

/** `/<lang>/play/tinta.html` — la grille du jour de Tinta, dans les cinq autres langues. */
export function generateStaticParams() {
  return LANGS.filter((l) => l !== DEFAULT_LANG).map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return tintaPlayMetadata(lang, TINTA_COPY[lang], tintaPlayUrls());
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === DEFAULT_LANG) notFound();
  return <TintaPlayPage lang={lang} />;
}
