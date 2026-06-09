import site from "../data/site.js";
import { renderNav }    from "./components/nav.js";
import { renderFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNav("contact", "");
  renderContact();
  renderFooter();
});

function renderContact() {
  const { contact } = site;

  const linksHTML = contact.links
    .map(({ label, href, text }) => `
      <a class="contact-link" href="${href}" target="_blank" rel="noopener">
        <span class="contact-link-label">${label}</span>
        <span class="contact-link-text">${text}</span>
        <span class="contact-link-arrow">→</span>
      </a>`)
    .join("");

  document.querySelector("main").innerHTML = `
    <div class="page-main">
      <h1 class="page-title">Contact</h1>
      <p class="contact-intro">${contact.intro}</p>
      <div class="contact-links">${linksHTML}</div>
    </div>
  `;
}
