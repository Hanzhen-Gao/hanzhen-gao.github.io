export function renderSkills({ heading, items }) {
  const tags = items
    .map((skill) => `<span class="skill-tag">${skill}</span>`)
    .join("\n      ");

  const el = document.querySelector("#skills");
  el.innerHTML = `
    <h2>${heading}</h2>
    <div class="skill-grid">
      ${tags}
    </div>
  `;
}
