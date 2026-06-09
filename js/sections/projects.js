export function renderProjects({ heading, items }) {
  const cards = items
    .map(
      ({ name, description, url }) => `
    <div class="project-card">
      <h3>${name}</h3>
      <p>${description}</p>
      <a href="${url}" target="_blank" rel="noopener">查看项目 →</a>
    </div>`
    )
    .join("\n");

  const el = document.querySelector("#projects");
  el.innerHTML = `
    <h2>${heading}</h2>
    ${cards}
  `;
}
