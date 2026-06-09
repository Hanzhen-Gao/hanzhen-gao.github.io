export function renderHeader(identity, nav) {
  const avatarHTML = identity.avatarUrl
    ? `<img src="${identity.avatarUrl}" alt="${identity.name}" class="avatar-img" />`
    : `<div class="avatar-placeholder">${identity.initials}</div>`;

  const navLinks = nav
    .map(({ label, href }) => `<a href="${href}">${label}</a>`)
    .join("\n      ");

  const el = document.querySelector("header");
  el.innerHTML = `
    <div class="avatar-wrapper">${avatarHTML}</div>
    <h1>${identity.name}</h1>
    <p class="tagline">${identity.tagline}</p>
    <nav>
      ${navLinks}
    </nav>
  `;
}
