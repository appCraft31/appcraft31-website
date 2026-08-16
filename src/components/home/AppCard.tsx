import Image from 'next/image';
import Link from 'next/link';
import { appPath } from '@/lib/apps';
import { localizedUrl, translator } from '@/lib/i18n';
import { cardVars } from '@/lib/theme';
import type { AppData, AppTheme, Lang } from '@/lib/types';

/**
 * Carte produit de l'accueil.
 *
 * Chaque carte emprunte les couleurs de son app : c'est ce qui manquait à
 * l'ancienne grille, où vingt produits très différents partageaient le même
 * lavande. Le numéro d'ordre et le filet supérieur donnent le côté « sommaire
 * d'atelier » de la page.
 */
export function AppCard({
  app,
  theme,
  index,
  lang,
  tagline,
  description,
  chips,
}: {
  app: AppData;
  theme: AppTheme;
  index: number;
  lang: Lang;
  tagline: string;
  description: string;
  chips: string[];
}) {
  const t = translator(lang);
  const href = localizedUrl(lang, appPath(app));
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className="app-card reveal"
      data-category={app.category}
      style={{ ...cardVars(theme), '--reveal-delay': `${Math.min(index, 8) * 45}ms` } as never}
    >
      <div className="app-card-rule" aria-hidden="true" />

      <header className="app-card-head">
        <span className="app-card-num" aria-hidden="true">
          n°{num}
        </span>
        <div className="app-card-icon">
          <Image src={app.icon} alt="" width={72} height={72} unoptimized />
        </div>
        <div className="app-card-id">
          <h3>
            <Link href={href} className="app-card-link">
              {app.name}
            </Link>
          </h3>
          <p className="app-card-tagline">{tagline}</p>
        </div>
        <span className={`badge badge--${app.status}`}>
          {app.status === 'available' ? t('badge.available') : t('badge.soon')}
        </span>
      </header>

      <p className="app-card-desc">{description}</p>

      {chips.length > 0 && (
        <ul className="app-card-chips">
          {chips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>
      )}

      <footer className="app-card-foot">
        {/* Les liens de téléchargement dès la grille : un visiteur qui connaît
            déjà l'app ne devrait pas avoir à ouvrir sa page pour l'installer.
            `z-index` les place au-dessus du lien qui couvre toute la carte. */}
        {(app.store.ios || app.store.android) && (
          <span className="app-card-stores">
            {app.store.ios && (
              <a
                href={app.store.ios}
                target="_blank"
                rel="noopener"
                aria-label={`${app.name} — App Store`}
              >
                <Image
                  src="/assets/app-store-badge.svg"
                  alt="App Store"
                  width={180}
                  height={60}
                  unoptimized
                />
              </a>
            )}
            {app.store.android && (
              <a
                href={app.store.android}
                target="_blank"
                rel="noopener"
                aria-label={`${app.name} — Google Play`}
              >
                <Image
                  src="/assets/google-play-badge.svg"
                  alt="Google Play"
                  width={203}
                  height={60}
                  unoptimized
                />
              </a>
            )}
          </span>
        )}
        <span className="app-card-more">{t('common.learn_more')} →</span>
      </footer>
    </article>
  );
}
