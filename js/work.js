import site from "../data/site.js";
import { renderNav }    from "./components/nav.js";
import { renderFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNav("work", "");
  renderGallery();
  renderFooter();
});

function renderGallery() {
  const rows = site.projects
    .map((p, i) => `
      <a class="gallery-row" href="work/${p.slug}.html">
        <span class="gallery-index">${String(i + 1).padStart(2, "0")}</span>
        <div class="gallery-info">
          <span class="gallery-name">${p.name}</span>
          <span class="gallery-tagline">${p.tagline}</span>
        </div>
        <span class="gallery-category">${p.category}</span>
        <span class="gallery-year">${p.year}</span>
        <span class="gallery-arrow">→</span>
      </a>`)
    .join("");

  document.querySelector("main").innerHTML = `
    <div class="page-main">
      <h1 class="page-title">Work</h1>
      <div class="gallery-list">${rows}</div>
    </div>
  `;
}
