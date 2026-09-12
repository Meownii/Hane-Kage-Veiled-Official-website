/* ==================================================
   GENERAL SITE BEHAVIOUR
   - Cinematic logo intro
   - Mobile navigation
   - Hash-based section switching on main.html
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("introScreen");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const returningFromArchive = intro && new URLSearchParams(window.location.search).get("from") === "archive";

  /* ==================================================
     FUTURE IMAGE LOADER
     Elements with data-image-path automatically use that exact filename
     when the owner adds it to the project. Until then, the placeholder stays.
     ================================================== */
  document.querySelectorAll("[data-image-path]").forEach(element => {
    const path = element.dataset.imagePath;
    if (!path) return;
    const probe = new Image();
    probe.onload = () => {
      element.style.backgroundImage = `url("${path}")`;
      element.style.backgroundSize = element.dataset.imageFit || "cover";
      element.style.backgroundPosition = element.dataset.imagePosition || "center";
      element.style.backgroundRepeat = "no-repeat";
      element.textContent = "";
      element.classList.add("has-image");
    };
    probe.src = path;
  });

  // A fresh entry always shows the same cinematic intro on desktop and mobile.
  // Returning through the archive's HOME link deliberately skips the replay,
  // avoiding a partial second intro without relying on persistent storage.
  if (intro) {
    const introLogo = intro.querySelector(".intro-logo");
    let introFinished = false;
    let safetyTimer = 0;
    let homeRevealTimer = 0;

    const revealHome = () => {
      document.body.classList.add("home-ready");
    };

    const finishIntro = () => {
      if (introFinished) return;
      introFinished = true;
      window.clearTimeout(safetyTimer);
      window.clearTimeout(homeRevealTimer);
      revealHome();
      intro.remove();
    };

    if (returningFromArchive) {
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete("from");
      window.history.replaceState(null, "", `${cleanUrl.pathname}${cleanUrl.search}${cleanUrl.hash}`);
      finishIntro();
    }

    const playIntro = () => {
      // The timing is shared by desktop and mobile. Reduced-motion keeps the
      // same gentle opacity sequence but removes blur and scaling in CSS.
      if (reduceMotion) intro.classList.add("reduced-motion");

      // Starting on a new animation frame makes the class transition reliable
      // in Chrome, Edge and Firefox, even when the page loads from cache.
      requestAnimationFrame(() => {
        void intro.offsetWidth;
        intro.classList.add("play");
        homeRevealTimer = window.setTimeout(revealHome, 3400);
      });

      intro.addEventListener("animationend", event => {
        if (event.target === intro && event.animationName === "introCurtainCinematic") finishIntro();
      });
      safetyTimer = window.setTimeout(finishIntro, 4600);
    };

    // Decode before playing so a slower desktop disk/cache cannot spend the
    // fade duration showing an empty overlay. The fallback prevents a damaged
    // image from ever leaving the visitor stuck on the loading screen.
    if (!returningFromArchive) {
      const logoReady = introLogo?.decode
        ? introLogo.decode().catch(() => undefined)
        : Promise.resolve();
      Promise.race([
        logoReady,
        new Promise(resolve => window.setTimeout(resolve, 1200))
      ]).then(playIntro);
    }
  } else {
    document.body.classList.add("home-ready");
  }

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("primaryNav");
  const menuButtonParent = menuButton?.parentNode;
  const menuButtonNextSibling = menuButton?.nextSibling;
  const navigationParent = navigation?.parentNode;
  const navigationNextSibling = navigation?.nextSibling;
  let menuScrollPosition = 0;

  // While open, the mobile navigation is moved directly under <body>.
  // This prevents sticky headers, backdrop filters and section overflow from
  // becoming containing/clipping parents for the fullscreen overlay.
  function restoreNavigationPosition() {
    if (!navigation || !navigationParent || navigation.parentNode === navigationParent) return;
    if (navigationNextSibling?.parentNode === navigationParent) {
      navigationParent.insertBefore(navigation, navigationNextSibling);
    } else {
      navigationParent.appendChild(navigation);
    }
  }

  function restoreMenuButtonPosition() {
    if (!menuButton || !menuButtonParent || menuButton.parentNode === menuButtonParent) return;
    if (menuButtonNextSibling?.parentNode === menuButtonParent) {
      menuButtonParent.insertBefore(menuButton, menuButtonNextSibling);
    } else {
      menuButtonParent.appendChild(menuButton);
    }
  }

  function unlockPageScroll() {
    document.body.classList.remove("menu-open");
    document.body.style.top = "";
    window.scrollTo({ top: menuScrollPosition, behavior: "auto" });
  }

  function closeMenu() {
    if (!menuButton || !navigation) return;
    const wasOpen = navigation.classList.contains("open");
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    restoreNavigationPosition();
    restoreMenuButtonPosition();
    if (wasOpen) unlockPageScroll();
  }

  function openMenu() {
    if (!menuButton || !navigation) return;
    menuScrollPosition = window.scrollY;
    document.body.appendChild(navigation);
    document.body.appendChild(menuButton);
    document.body.style.top = `-${menuScrollPosition}px`;
    document.body.classList.add("menu-open");
    navigation.classList.add("open");
    navigation.scrollTop = 0;
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation");
    navigation.querySelector("a")?.focus({ preventScroll: true });
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const willOpen = !navigation.classList.contains("open");
      if (willOpen) openMenu();
      else closeMenu();
    });

    navigation.addEventListener("click", event => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }

      // Keep keyboard focus inside the open navigation and its close button.
      if (event.key === "Tab" && navigation.classList.contains("open")) {
        const links = [...navigation.querySelectorAll("a")];
        const first = links[0];
        const last = links[links.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
          event.preventDefault();
          menuButton.focus();
        } else if (event.shiftKey && active === menuButton) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          menuButton.focus();
        } else if (!event.shiftKey && active === menuButton) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    // If the viewport becomes desktop-sized while open, restore the original
    // header layout and the document's previous scroll position.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 980 && navigation.classList.contains("open")) closeMenu();
    });
  }

  // main.html only: show the requested section without reloading the page.
  const sections = [...document.querySelectorAll("[data-section]")];
  const sectionLinks = [...document.querySelectorAll("[data-section-link]")];
  const validSections = sections.map(section => section.dataset.section);

  /* ==================================================
     LIGHTWEIGHT SCROLL REVEAL
     Elements receive a class only after JavaScript loads, so the
     content remains visible if scripts are unavailable.
     ================================================== */
  const revealGroups = [
    { selector: ".section-hero h1, .home-trailer h2", className: "reveal-title" },
    { selector: ".section-hero .eyebrow, .section-hero blockquote, .home-trailer__heading p, .story-lead, .story-intro, .story-meta, .trailer-feature, .teaser-list, .credits-column, .staff-photos, .site-footer > *", className: "reveal-text" },
    { selector: ".world-entry, .episode-card, .gallery-item, .news-card, .character-selector", className: "reveal-card" }
  ];

  const revealElements = [];
  revealGroups.forEach(group => {
    document.querySelectorAll(group.selector).forEach((element, index) => {
      element.classList.add(group.className);
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 85}ms`);
      revealElements.push(element);
    });
  });

  let revealObserver = null;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(element => element.classList.add("is-revealed"));
  } else {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    revealElements.forEach(element => revealObserver.observe(element));
  }

  function showSection(sectionName, moveFocus = false) {
    if (!sections.length) return;
    if (!validSections.includes(sectionName)) {
      location.replace("index.html");
      return;
    }
    const safeName = sectionName;

    sections.forEach(section => {
      const selected = section.dataset.section === safeName;
      section.hidden = !selected;
      section.classList.toggle("active", selected);
    });

    // Newly visible hash sections are checked by the observer immediately.
    if (revealObserver) {
      requestAnimationFrame(() => {
        document.querySelectorAll(`[data-section="${safeName}"] .reveal-title, [data-section="${safeName}"] .reveal-text, [data-section="${safeName}"] .reveal-card`)
          .forEach(element => revealObserver.observe(element));
      });
    }

    sectionLinks.forEach(link => {
      const selected = link.dataset.sectionLink === safeName;
      link.classList.toggle("active", selected);
      if (selected) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    if (moveFocus) {
      const heading = document.querySelector(`[data-section="${safeName}"] h1`);
      heading?.setAttribute("tabindex", "-1");
      heading?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  }

  if (sections.length) {
    const initialSection = location.hash.replace("#", "").toLowerCase();
    if (!validSections.includes(initialSection)) {
      location.replace("index.html");
      return;
    }

    showSection(initialSection);
    window.addEventListener("hashchange", () => {
      const requestedSection = location.hash.replace("#", "").toLowerCase();
      if (!validSections.includes(requestedSection)) {
        location.replace("index.html?from=archive");
        return;
      }
      showSection(requestedSection, true);
    });
  }
});
