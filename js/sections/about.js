export function renderAbout({ heading, body, traits = [] }) {
  const traitsHTML = traits
    .map((t) => `<li class="trait">${t}</li>`)
    .join("\n        ");

  const el = document.querySelector("#about");
  el.innerHTML = `
    <div class="section-head">
      <h2>${heading}</h2>
    </div>
    <div class="section-body about-body">
      <p class="about-lead">${body}</p>
      <ul class="trait-list">
        ${traitsHTML}
      </ul>
    </div>
  `;
}
