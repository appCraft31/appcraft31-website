import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../../globals.css';
import { SiteShell } from '@/components/site/SiteShell';
import { isLang } from '@/lib/i18n';
import { DEFAULT_LANG, LANGS } from '@/lib/types';

export const metadata: Metadata = {
  metadataBase: new URL('https://appcraft31.app'),
  title: {
    default: 'AppCraft31',
    template: '%s · AppCraft31',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  // Le pendant du layout français : sans lui, les pages traduites n'héritaient
  // d'aucune image de partage ni d'aucun nom de site. La `locale` exacte, elle,
  // est posée par page — le layout ne connaît pas sa langue.
  openGraph: {
    siteName: 'AppCraft31',
    type: 'website',
    images: [{ url: '/assets/logo.webp', width: 2816, height: 1536, alt: 'AppCraft31' }],
  },
  twitter: { card: 'summary_large_image' },
};

/** Le français est servi sans préfixe par le layout `(fr)`. */
export function generateStaticParams() {
  return LANGS.filter((l) => l !== DEFAULT_LANG).map((lang) => ({ lang }));
}

export default async function LocalizedRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang) || lang === DEFAULT_LANG) notFound();
  return <SiteShell lang={lang}>{children}</SiteShell>;
}
