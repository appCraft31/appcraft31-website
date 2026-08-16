import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Export statique : `out/` est servi tel quel par Vercel (offre gratuite).
  // Sans `trailingSlash`, la route /apps/tengo produit exactement out/apps/tengo.html —
  // c'est ce qui préserve les URLs déclarées dans les fiches App Store et Google Play.
  output: 'export',

  // `next/image` ne peut pas optimiser à la volée en export statique.
  images: { unoptimized: true },

  // Une page marketing par app : le HTML doit rester lisible par les robots des stores.
  poweredByHeader: false,

  // Sans cette ancre, Turbopack remonte jusqu'au `package-lock.json` du dossier
  // personnel et prend la racine du disque pour celle du projet.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
