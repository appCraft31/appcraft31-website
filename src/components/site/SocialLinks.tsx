import { SOCIAL } from './social';

/**
 * Liens vers les comptes du studio.
 *
 * Les glyphes sont dessinés ici plutôt qu'importés : trois icônes ne valent pas
 * une dépendance, et un SVG en ligne prend la couleur du texte qui l'entoure.
 */
export function SocialLinks({
  label,
  className = 'social-links',
}: {
  label: string;
  className?: string;
}) {
  return (
    <ul className={className} aria-label={label}>
      {SOCIAL.map((link) => (
        <li key={link.id}>
          <a href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
            <span aria-hidden="true">{ICONS[link.id]}</span>
            <span className={link.logoIsName ? 'visually-hidden' : 'social-name'}>
              {link.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export const ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Le logo X est une lettre pleine, pas un tracé : on la peint, sans contour.
  x: (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};
