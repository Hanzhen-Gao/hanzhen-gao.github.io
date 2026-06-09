import site from "../../data/site.js";

export function renderNav(currentPage = "", basePath = "") {
  const el = document.getElementById("site-nav");
  if (!el) return;

  const links = site.nav
    .map(({ label, href, id }) => {
      const url = basePath + href;
      const active = currentPage === id;
      return `<a href="${url}" class="nav-link${active ? " nav-active" : ""}">${label}</a>`;
    })
    .join("");

  el.innerHTML = `
    <div class="nav-inner">
      <a class="nav-logo" href="${basePath}index.html">${site.identity.initials}</a>
      <div class="nav-links">${links}</div>
    </div>
  `;
}
