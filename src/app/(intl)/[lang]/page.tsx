import '../../home.css';
import { HomePage } from '@/components/home/HomePage';
import { isLang } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { DEFAULT_LANG, LANGS } from '@/lib/types';

export function generateStaticParams() {
  return LANGS.filter((l) => l !== DEFAULT_LANG).map((lang) => ({ lang }));
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <HomePage lang={lang} />;
}
