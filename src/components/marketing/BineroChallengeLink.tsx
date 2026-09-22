'use client';
import { useEffect, useState } from 'react';

export function BineroChallengeLink({ lang }: { lang: string }) {
  const [challenge, setChallenge] = useState<{day: string; current: boolean} | null>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const day = params.get('challenge');
    if (params.get('v') !== '2' || !day || !/^\d{4}-\d{2}-\d{2}$/.test(day) ||
        !['easy', 'normal', 'expert'].includes(params.get('difficulty') ?? '')) return;
    const date = new Date(day + 'T00:00:00Z');
    if (!Number.isFinite(date.valueOf()) || date.toISOString().slice(0, 10) !== day) return;
    const currentDay = new Date(Date.now() - 7 * 3600000).toISOString().slice(0, 10);
    setChallenge({day, current: day === currentDay});
  }, []);
  if (!challenge) return null;
  const copy = lang === 'fr' ? {
    title: challenge.current ? 'Votre défi Binero vous attend' : 'Ce défi est terminé',
    body: challenge.current ? `Défi du ${challenge.day}. Retrouvez la grille dans Binero.` : 'Retrouvez le défi du jour dans Binero.',
    action: 'Télécharger Binero',
  } : lang === 'de' ? {
    title: challenge.current ? 'Dein Binero-Rätsel wartet' : 'Dieses Rätsel ist beendet',
    body: 'Entdecke das tägliche Rätsel in Binero.', action: 'Binero herunterladen',
  } : {
    title: challenge.current ? 'Your Binero challenge awaits' : 'This challenge has ended',
    body: 'Find the daily puzzle in Binero.', action: 'Download Binero',
  };
  return <aside aria-label={copy.title} style={{padding: '24px', margin: '24px 0', border: '1px solid currentColor', borderRadius: 20}}>
    <h2>{copy.title}</h2><p>{copy.body}</p>
    <p><a href="https://apps.apple.com/app/id6782013644">{copy.action} — App Store</a></p>
    <p><a href="https://play.google.com/store/apps/details?id=com.appcraft31.binero&referrer=utm_source%3Ddaily_share">{copy.action} — Google Play</a></p>
  </aside>;
}
