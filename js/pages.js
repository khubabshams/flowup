/** Page-specific content rendering */
const Pages = (function () {
  "use strict";

  const { company, hero, trustBadges, services, about, contact } = SITE;

  function serviceCards() {
    return services.items
      .map(
        (item, i) => `
        <article class="service-card reveal" id="service-${item.id}" style="--delay:${i * 0.08}s">
          <div class="service-card__icon">${ICONS[item.icon]}</div>
          <h3 class="service-card__title">${item.title}</h3>
          <p class="service-card__text">${item.description}</p>
          <a href="contact.html" class="service-card__link">Get a quote →</a>
        </article>`
      )
      .join("");
  }

  function renderHome() {
    const badge = company.gasSafeRegistered
      ? '<p class="hero__badge"><span aria-hidden="true">✓</span> Gas Safe Registered</p>'
      : "";
    const trustItems = trustBadges
      .map(
        (b) => `<li class="trust-row__item">
          <span class="trust-row__value">${b.value}</span>
          <span class="trust-row__label">${b.label}</span>
        </li>`
      )
      .join("");

    const previewCards = services.items
      .map(
        (item) => `
        <a href="services.html#service-${item.id}" class="preview-card reveal">
          <span class="preview-card__icon">${ICONS[item.icon]}</span>
          <span class="preview-card__title">${item.title}</span>
        </a>`
      )
      .join("");

    document.getElementById("page-main").innerHTML = `
      <section class="hero">
        <div class="hero__grid container">
          <div class="hero__content reveal">
            ${badge}
            <h1 class="hero__title">${hero.headline}</h1>
            <p class="hero__lead">${hero.subheadline}</p>
            <div class="hero__actions">
              <a href="${hero.primaryCta.href}" class="btn btn--accent btn--lg">${hero.primaryCta.label}</a>
              <a href="${hero.secondaryCta.href}" class="btn btn--outline btn--lg">${hero.secondaryCta.label}</a>
            </div>
          </div>
          <div class="hero__visual reveal">
            <div class="hero__glow" aria-hidden="true"></div>
            <img src="${hero.image}" alt="${hero.imageAlt}" class="hero__logo" width="420" loading="eager">
          </div>
        </div>
        <ul class="trust-row container" aria-label="Why choose us">${trustItems}</ul>
      </section>

      <section class="section section--alt">
        <div class="container">
          <header class="section-head">
            <span class="section-label">Services</span>
            <h2 class="section-title">How we can help</h2>
            <p class="section-intro">Heating, plumbing, gas, and boilers — one trusted team.</p>
          </header>
          <div class="preview-grid">${previewCards}</div>
          <p class="section-cta">
            <a href="services.html" class="btn btn--outline">Explore all services</a>
          </p>
        </div>
      </section>`;
  }

  function renderServices() {
    document.getElementById("page-main").innerHTML = `
      <section class="page-hero section--compact">
        <div class="container">
          <span class="section-label">Services</span>
          <h1 class="page-hero__title">${services.title}</h1>
          <p class="page-hero__intro">${services.intro}</p>
        </div>
      </section>
      <section class="section section--alt">
        <div class="container">
          <div class="services-grid">${serviceCards()}</div>
        </div>
      </section>`;
  }

  function renderAbout() {
    const highlights = about.highlights.map((h) => `<li class="reveal">${h}</li>`).join("");
    const steps = about.steps
      .map(
        (s) => `<li class="steps__item reveal">
          <span class="steps__num">${s.step}</span>
          <div><strong>${s.title}</strong><p>${s.text}</p></div>
        </li>`
      )
      .join("");
    const paragraphs = about.paragraphs.map((p) => `<p>${p}</p>`).join("");

    document.getElementById("page-main").innerHTML = `
      <section class="page-hero section--compact">
        <div class="container">
          <span class="section-label">About</span>
          <h1 class="page-hero__title">${about.title}</h1>
        </div>
      </section>
      <section class="section">
        <div class="container about-grid">
          <div class="about__main">${paragraphs}<ul class="highlights">${highlights}</ul></div>
          <div class="about__process">
            <h2 class="about__process-title">How it works</h2>
            <ol class="steps">${steps}</ol>
          </div>
        </div>
      </section>`;
  }

  function renderContact() {
    const addr = contact.address;
    const addressHtml = [addr.company, ...addr.lines].join("<br>");

    document.getElementById("page-main").innerHTML = `
      <section class="page-hero section--compact">
        <div class="container">
          <span class="section-label">Contact</span>
          <h1 class="page-hero__title">${contact.title}</h1>
          <p class="page-hero__intro">${contact.intro}</p>
        </div>
      </section>
      <section class="section section--alt">
        <div class="container contact-layout">
          <div class="contact-info">
            <div class="info-card reveal">
              <div class="info-card__icon">${ICONS.location}</div>
              <h2>Address</h2>
              <address>${addressHtml}</address>
            </div>
            <div class="info-card reveal">
              <div class="info-card__icon">${ICONS.phone}</div>
              <h2>Phone</h2>
              <p><a href="tel:${contact.phone.tel}">${contact.phone.display}</a></p>
            </div>
            <div class="info-card reveal">
              <div class="info-card__icon">${ICONS.mail}</div>
              <h2>Email</h2>
              <p><a href="mailto:${contact.email}">${contact.email}</a></p>
            </div>
            <div class="info-card reveal">
              <div class="info-card__icon">${ICONS.clock}</div>
              <h2>Hours</h2>
              <p>${contact.hours}</p>
            </div>
          </div>
          <form class="contact-form reveal" id="contact-form" action="mailto:${contact.email}" method="post" enctype="text/plain">
            <h2 class="contact-form__title">Send a message</h2>
            <label for="name">Your name</label>
            <input type="text" id="name" name="name" required autocomplete="name">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required autocomplete="email">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit" class="btn btn--accent btn--block">${contact.form.submitLabel}</button>
          </form>
        </div>
      </section>`;
  }

  const renderers = {
    home: renderHome,
    services: renderServices,
    about: renderAbout,
    contact: renderContact,
  };

  function init() {
    const render = renderers[document.body.dataset.page];
    if (render) render();
  }

  return { init };
})();
