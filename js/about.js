import site from "../data/site.js";
import { renderNav }    from "./components/nav.js";
import { renderFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNav("about", "");
  renderAbout();
  renderFooter();
});

function renderAbout() {
  const { about, skills } = site;

  const traitsHTML = about.traits
    .map(t => `<li class="about-trait">${t}</li>`)
    .join("");

  const skillGroupsHTML = skills.groups
    .map(({ name, items }) => `
      <div class="skill-group">
        <h3 class="skill-group-name">${name}</h3>
        <div class="skill-grid">
          ${items.map(s => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
      </div>`)
    .join("");

  document.querySelector("main").innerHTML = `
    <div class="page-main">
      <h1 class="page-title">About</h1>
      <div class="about-bio">
        <p>${about.bio}</p>
        <p>${about.extended}</p>
      </div>
      <span class="about-section-label">Background</span>
      <ul class="about-traits">${traitsHTML}</ul>
      <span class="about-section-label">Skills</span>
      <div class="skill-groups">${skillGroupsHTML}</div>
    </div>
  `;
}
