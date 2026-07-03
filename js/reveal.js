/* ===== AppCraft31 — animations au scroll ===== */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function init() {
    setupProgressBar();

    if (reduce) {
      // Pas d'animation : on rend tout visible immédiatement
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    setupReveal();
    setupParallax();
  }

  /* ---- Barre de progression du scroll ---- */
  function setupProgressBar() {
    var bar = document.getElementById("scroll-progress");
    if (!bar) return;
    var ticking = false;
    function update() {
      var h = document.documentElement;
      var scrolled = h.scrollTop || document.body.scrollTop;
      var max = (h.scrollHeight - h.clientHeight) || 1;
      var pct = Math.min(100, Math.max(0, (scrolled / max) * 100));
      bar.style.transform = "scaleX(" + (pct / 100) + ")";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---- Apparition au scroll (stagger par groupe) ---- */
  function setupReveal() {
    // Calcule un délai échelonné pour les éléments d'un même conteneur (grille)
    document.querySelectorAll("[data-stagger]").forEach(function (group) {
      var items = group.querySelectorAll(".reveal");
      items.forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", (i * 90) + "ms");
      });
    });

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Parallaxe douce du décor du hero ---- */
  function setupParallax() {
    // On déplace le conteneur (et non les blobs) pour préserver leur animation de flottement
    var bg = document.querySelector(".hero-bg");
    var content = document.querySelector(".hero-center");
    if (!bg) return;
    var ticking = false;
    function update() {
      var y = window.pageYOffset || 0;
      if (y <= window.innerHeight) {
        bg.style.transform = "translate3d(0," + (y * 0.3) + "px,0)";
        if (content) {
          content.style.transform = "translate3d(0," + (y * 0.12) + "px,0)";
          content.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.85)));
        }
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
