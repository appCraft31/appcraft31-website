import Link from 'next/link';
import { VISIBLE_APPS } from '@/lib/apps';
import { translator } from '@/lib/i18n';
import { LANGS, type Lang } from '@/lib/types';
import { SOCIAL } from '@/components/site/social';
import { ICONS } from '@/components/site/SocialLinks';

/**
 * Hero de l'accueil.
 *
 * Parti pris typographique : une seule phrase, très grande, et un fond
 * « d'atelier » — des tracés de gabarit qui se construisent lentement, comme
 * un plan qu'on dessine. Rien de pastel, rien de flou.
 */
export function Hero({ lang }: { lang: Lang }) {
  const t = translator(lang);
  // Les compteurs disent ce que la page montre : `VISIBLE_APPS` exclut les
  // outils internes, qui ont une URL mais pas de carte.
  const games = VISIBLE_APPS.filter((a) => a.category === 'game').length;
  const apps = VISIBLE_APPS.length - games;

  return (
    <section className="hero grain">
      <div className="hero-plan" aria-hidden="true">
        <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="plan-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="700" fill="url(#plan-grid)" opacity="0.5" />
          {/* `fill="none"` en attribut : sans lui, un CSS qui tarde afficherait
              deux disques pleins en travers du hero. */}
          <circle className="plan-arc" cx="880" cy="240" r="180" fill="none" />
          <circle className="plan-arc plan-arc--2" cx="880" cy="240" r="260" fill="none" />
          <path className="plan-rule" d="M120 560 H1080" fill="none" />
          <path className="plan-rule plan-rule--2" d="M160 120 V620" fill="none" />
        </svg>
      </div>

      <div className="container hero-inner">
        <p className="hero-kicker">
          <span className="hero-dot" aria-hidden="true" />
          Studio indépendant · Toulouse
        </p>

        {/* Le nombre vient du registre : écrit à la main, il annonçait encore
            « Vingt » à vingt-deux produits — et il le disait en français sur
            les pages japonaises. */}
        <h1 className="hero-title">
          {t('hero.title_lead')}
          <br />
          <span className="hero-title-accent">
            {t('hero.title_accent').replace('{count}', String(VISIBLE_APPS.length))}
          </span>
        </h1>

        <p className="hero-sub">{t('hero.sub')}</p>

        <div className="hero-cta">
          <Link href="#creations" className="btn btn-primary">
            {t('hero.cta_apps')}
          </Link>
          {/* Les comptes viennent du registre `site/social.ts` : en ajouter
              un le fait apparaître ici et en pied de page à la fois. */}
          {SOCIAL.map((account) => (
            <a
              key={account.id}
              href={account.href}
              className="btn btn-ghost btn-social"
              target="_blank"
              rel="noopener"
              aria-label={account.label}
            >
              <span aria-hidden="true">{ICONS[account.id]}</span>
              <span className={account.logoIsName ? 'visually-hidden' : undefined}>
                {account.label}
              </span>
            </a>
          ))}
        </div>

        <dl className="hero-figures">
          <div>
            <dt>{t('about.stat_app_label')}</dt>
            <dd>{apps}</dd>
          </div>
          <div>
            <dt>{t('about.stat_games_label')}</dt>
            <dd>{games}</dd>
          </div>
          {/* Un chiffre vérifiable plutôt qu'une promesse : plusieurs jeux
              affichent de la publicité, le dire autrement serait faux. */}
          <div>
            <dt>{t('about.stat_langs_label')}</dt>
            <dd>{LANGS.length}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
