import site from "../../data/site.js";

export function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `<p>© ${site.footer.year} ${site.footer.name}</p>`;
}
