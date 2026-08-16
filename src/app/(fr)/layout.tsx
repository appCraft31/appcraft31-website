import type { Metadata } from 'next';
import '../globals.css';
import { SiteShell } from '@/components/site/SiteShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://appcraft31.app'),
  title: {
    default: 'AppCraft31 — applications et jeux mobiles faits à Toulouse',
    template: '%s · AppCraft31',
  },
  description:
    'Studio indépendant toulousain. Des applications et des jeux soignés, sans publicité ni pistage.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  openGraph: {
    siteName: 'AppCraft31',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/assets/logo.webp', width: 2816, height: 1536, alt: 'AppCraft31' }],
  },
};

export default function FrenchRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="fr">{children}</SiteShell>;
}
