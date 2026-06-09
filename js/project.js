import site from "../data/site.js";
import { renderNav }    from "./components/nav.js";
import { renderFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  const projectId = document.body.dataset.project;
  const project   = site.projects.find(p => p.id === projectId);

  renderNav("work", "../");

  if (!project) {
    document.querySelector("main").innerHTML = `
      <div class="page-main">
        <a class="back-link" href="../work.html">Work</a>
        <p style="color:var(--muted)">Project not found.</p>
      </div>
    `;
    renderFooter();
    return;
  }

  document.title = `${project.name} — Gao Hanzhen`;
  renderProject(project);
  renderFooter();
});

function renderProject(p) {
  const tagsHTML = p.tags
    .map(t => `<span class="project-tag-item">${t}</span>`)
    .join("");

  document.querySelector("main").innerHTML = `
    <div class="page-main">
      <a class="back-link" href="../work.html">Work</a>
      <h1 class="page-title">${p.name}</h1>
      <p class="project-meta">
        ${p.category}<span class="meta-sep">·</span>${p.year}
      </p>
      <div class="project-body">
        <span class="project-section-label">Overview</span>
        <p class="project-text">${p.description}</p>

        <span class="project-section-label">Process</span>
        <p class="project-text">${p.process}</p>

        <span class="project-section-label">Context</span>
        <p class="project-text">${p.context}</p>

        <span class="project-section-label">Built with</span>
        <div class="project-tags-inline">${tagsHTML}</div>

        <div class="project-cta">
          <a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">View on GitHub →</a>
        </div>
      </div>
    </div>
  `;
}
