export function renderContact({ heading, intro, links }) {
  const rows = links
    .map(
      ({ label, href, text }) => `
        <a class="contact-link" href="${href}" target="_blank" rel="noopener">
          <span class="contact-link-label">${label}</span>
          <span class="contact-link-text">${text}</span>
          <span class="contact-link-arrow">→</span>
        </a>`
    )
    .join("\n");

  const el = document.querySelector("#contact");
  el.innerHTML = `
    <div class="section-head">
      <h2>${heading}</h2>
    </div>
    <div class="section-body contact-body">
      <p class="contact-intro">${intro}</p>
      <div class="contact-links">
        ${rows}
      </div>
    </div>
  `;
}
