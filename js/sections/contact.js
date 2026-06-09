export function renderContact({ heading, links }) {
  const rows = links
    .map(({ label, href, text }) => `<p>${label}：<a href="${href}">${text}</a></p>`)
    .join("\n    ");

  const el = document.querySelector("#contact");
  el.innerHTML = `
    <h2>${heading}</h2>
    ${rows}
  `;
}
