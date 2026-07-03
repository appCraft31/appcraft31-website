/* ===== AppCraft31 — animations au scroll ===== */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function init() {
    setupProgressBar();
    setupPortfolioFilters();

    if (reduce) {
      // Pas d'animation : on rend tout visible immédiatement
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    setupReveal();
    setupParallax();
    setupMouseParallax();
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

  /* ---- Parallaxe de la souris dans le hero ---- */
  function setupMouseParallax() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    hero.addEventListener("mousemove", function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mx", x);
      hero.style.setProperty("--my", y);
    });
    hero.addEventListener("mouseleave", function () {
      hero.style.setProperty("--mx", 0);
      hero.style.setProperty("--my", 0);
    });
  }

  /* ---- Filtrage du Portfolio ---- */
  function setupPortfolioFilters() {
    var filterBtns = document.querySelectorAll(".filter-btn");
    var filterItems = document.querySelectorAll(".app-card");
    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filterValue = btn.getAttribute("data-filter");
        
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        filterItems.forEach(function (item) {
          if (filterValue === "all" || item.classList.contains("category-" + filterValue)) {
            item.style.display = "flex";
            if (reduce) {
              item.style.opacity = "1";
              item.style.transform = "none";
            } else {
              window.requestAnimationFrame(function () {
                item.style.opacity = "1";
                item.style.transform = "scale(1)";
              });
            }
          } else {
            if (reduce) {
              item.style.opacity = "0";
              item.style.transform = "none";
              item.style.display = "none";
            } else {
              item.style.opacity = "0";
              item.style.transform = "scale(0.95)";
              setTimeout(function () {
                if (item.style.opacity === "0") {
                  item.style.display = "none";
                }
              }, 400);
            }
          }
        });
      });
    });

    function checkHash() {
      var hash = window.location.hash;
      if (hash === "#apps" || hash === "#portfolio-apps") {
        var btn = document.querySelector('.filter-btn[data-filter="app"]');
        if (btn) btn.click();
      } else if (hash === "#jeux" || hash === "#portfolio-jeux") {
        var btn = document.querySelector('.filter-btn[data-filter="game"]');
        if (btn) btn.click();
      }
    }
    
    window.addEventListener("hashchange", checkHash);
    checkHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
