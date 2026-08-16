/**
 * Applique le thème avant le premier rendu.
 *
 * Sans ce script, une page sombre s'afficherait un instant en clair au
 * chargement. Il pose aussi la classe `js` dont dépend l'apparition au
 * défilement : sans JavaScript, rien ne doit rester invisible.
 */

const SCRIPT = `(function(){
  var d = document.documentElement;
  d.classList.add('js');
  try {
    var t = localStorage.getItem('ac31_theme');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    d.setAttribute('data-theme', t);
  } catch (e) {
    d.setAttribute('data-theme', 'dark');
  }
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
