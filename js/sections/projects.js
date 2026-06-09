export function renderProjects({ heading, items }) {
  const cards = items
    .map(
      ({ name, description, url, tags = [] }) => `
      <article class="project-card">
        <h3 class="project-name">${name}</h3>
        <p class="project-desc">${description}</p>
        <ul class="project-tags">
          ${tags.map((t) => `<li>${t}</li>`).join("\n          ")}
        </ul>
        <a class="project-link" href="${url}" target="_blank" rel="noopener">查看项目 →</a>
      </article>`
    )
    .join("\n");

  const el = document.querySelector("#projects");
  el.innerHTML = `
    <div class="section-head">
      <h2>${heading}</h2>
    </div>
    <div class="section-body project-grid">
      ${cards}
    </div>
  `;
}
