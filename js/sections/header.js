export function renderHeader(site) {
  const { identity, nav, actions, contact } = site;
  const { name, initials, tagline, intro, avatarUrl, panel } = identity;

  const avatarHTML = avatarUrl
    ? `<img src="${avatarUrl}" alt="${name}" class="avatar-img" />`
    : `<div class="avatar-placeholder">${initials}</div>`;

  const actionsHTML = actions
    .map(
      ({ label, href, primary }) =>
        `<a class="btn ${primary ? "btn-primary" : "btn-ghost"}" href="${href}">${label}${
          primary ? " →" : ""
        }</a>`
    )
    .join("\n        ");

  const infoHTML = panel.info
    .map(
      ({ k, v }) =>
        `<div class="info-row"><dt>${k}</dt><dd>${v}</dd></div>`
    )
    .join("\n        ");

  const panelLinksHTML = contact.links
    .map(({ label, href }) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`)
    .join("\n        ");

  const navLinks = nav
    .map(({ label, href }) => `<a href="${href}">${label}</a>`)
    .join("\n      ");

  const el = document.querySelector("header");
  el.innerHTML = `
    <div class="hero-inner">
      <div class="hero-lead">
        <h1>${name}</h1>
        <p class="tagline">${tagline}</p>
        <p class="hero-intro">${intro}</p>
        <div class="hero-actions">
        ${actionsHTML}
        </div>
      </div>

      <aside class="hero-panel">
        <div class="hero-panel-head">
          <div class="avatar-wrapper">${avatarHTML}</div>
          <div class="hero-panel-id">
            <span class="hero-panel-name">${name}</span>
            <span class="hero-panel-status"><i class="status-dot"></i>${panel.status}</span>
          </div>
        </div>
        <dl class="hero-panel-info">
        ${infoHTML}
        </dl>
        <div class="hero-panel-links">
        ${panelLinksHTML}
        </div>
      </aside>
    </div>

    <nav>
      ${navLinks}
    </nav>
  `;
}
