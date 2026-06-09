export function renderSkills({ heading, groups }) {
  const groupsHTML = groups
    .map(
      ({ name, items }) => `
      <div class="skill-group">
        <h3 class="skill-group-name">${name}</h3>
        <div class="skill-grid">
          ${items
            .map((skill) => `<span class="skill-tag">${skill}</span>`)
            .join("\n          ")}
        </div>
      </div>`
    )
    .join("\n");

  const el = document.querySelector("#skills");
  el.innerHTML = `
    <div class="section-head">
      <h2>${heading}</h2>
    </div>
    <div class="section-body skill-groups">
      ${groupsHTML}
    </div>
  `;
}
