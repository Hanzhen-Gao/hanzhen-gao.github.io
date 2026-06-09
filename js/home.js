import site from "../data/site.js";
import { renderNav }    from "./components/nav.js";
import { renderFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNav("", "");
  renderHero();
  renderFeatured();
  renderFooter();
});

function renderHero() {
  const { identity, actions } = site;
  const { name, initials, tagline, intro, avatarUrl, panel } = identity;

  const avatarHTML = avatarUrl
    ? `<img src="${avatarUrl}" alt="${name}" class="avatar-img" />`
    : `<div class="avatar-placeholder">${initials}</div>`;

  const actionsHTML = actions
    .map(({ label, href, primary }) =>
      `<a class="btn ${primary ? "btn-primary" : "btn-ghost"}" href="${href}">${label}${primary ? " →" : ""}</a>`
    )
    .join("");

  const infoHTML = panel.info
    .map(({ k, v }) => `<div class="info-row"><dt>${k}</dt><dd>${v}</dd></div>`)
    .join("");

  const panelLinksHTML = site.contact.links
    .map(({ label, href }) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`)
    .join("");

  document.querySelector("main").insertAdjacentHTML("beforeend", `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-lead">
          <h1>${name}</h1>
          <p class="tagline">${tagline}</p>
          <p class="hero-intro">${intro}</p>
          <div class="hero-actions">${actionsHTML}</div>
        </div>
        <aside class="hero-panel">
          <div class="hero-panel-head">
            <div class="avatar-wrapper">${avatarHTML}</div>
            <div class="hero-panel-id">
              <span class="hero-panel-name">${name}</span>
              <span class="hero-panel-status"><i class="status-dot"></i>${panel.status}</span>
            </div>
          </div>
          <dl class="hero-panel-info">${infoHTML}</dl>
          <div class="hero-panel-links">${panelLinksHTML}</div>
        </aside>
      </div>
    </section>
    <section class="home-works" id="home-works-section"></section>
  `);
}

function renderFeatured() {
  const featured = site.projects.filter(p => p.featured);

  const rows = featured
    .map((p, i) => `
      <a class="work-row" href="work/${p.slug}.html">
        <span class="work-index">${String(i + 1).padStart(2, "0")}</span>
        <div class="work-info">
          <span class="work-name">${p.name}</span>
          <span class="work-tagline">${p.tagline}</span>
        </div>
        <span class="work-category">${p.category}</span>
        <span class="work-year">${p.year}</span>
        <span class="work-arrow">→</span>
      </a>`)
    .join("");

  document.getElementById("home-works-section").innerHTML = `
    <div class="home-works-header">
      <span class="works-label">Selected Work</span>
      <a href="work.html" class="works-all">All work →</a>
    </div>
    <div class="works-list">${rows}</div>
  `;
}
