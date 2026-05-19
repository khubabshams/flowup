/** Shared header, footer, meta, and navigation */
const Layout = (function () {
  "use strict";

  const { company, meta, navigation, contact, assets, credit } = SITE;

  function currentPage() {
    return document.body.dataset.page || "home";
  }

  function renderNav(listId) {
    const page = currentPage();
    document.getElementById(listId).innerHTML = navigation
      .map(
        (item) =>
          `<li class="${item.id === page ? "active" : ""}">
            <a href="${item.href}">${item.label}</a>
          </li>`
      )
      .join("");
  }

  function setMeta() {
    const pageMeta = meta.pages[currentPage()] || meta.pages.home;
    document.title = pageMeta.title;
    document.querySelector('meta[name="description"]').content = pageMeta.description;
    document.querySelector('meta[name="theme-color"]').content = meta.themeColor;
  }

  function renderHeader() {
    document.getElementById("site-header").innerHTML = `
      <div class="header__inner container">
        <a href="index.html" class="brand">
          <img src="${assets.favicon32}" alt="${company.name} logo" width="36" height="36" class="brand__logo">
          <span class="brand__text">
            <span class="brand__name">${company.name}</span>
            <span class="brand__tag">${company.tagline}</span>
          </span>
        </a>
        <button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false" id="nav-toggle">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <nav class="nav" id="main-nav">
          <ul id="top-menu" class="nav__list"></ul>
          <a href="tel:${contact.phone.tel}" class="nav__cta btn btn--accent">Call now</a>
        </nav>
      </div>`;
    renderNav("top-menu");
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    const { label, name, url } = credit;

    document.getElementById("site-footer").innerHTML = `
      <div class="container footer__inner">
        <div class="footer__brand">
          <img src="${assets.favicon32}" alt="" width="32" height="32">
          <div>
            <strong>${company.name}</strong>
            <p>${company.tagline}</p>
          </div>
        </div>
        <ul id="bottom-menu" class="footer__nav"></ul>
        <p class="footer__copy">© ${year} ${company.name}. All rights reserved.</p>
        <p class="footer__credit">
          ${label}
          <a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>
        </p>
      </div>`;

    renderNav("bottom-menu");
  }

  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("nav--open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav--open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  function init() {
    setMeta();
    renderHeader();
    renderFooter();
    initMobileNav();
  }

  return { init, initReveal, currentPage };
})();
