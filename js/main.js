import site from "../data/site.js";
import { renderHeader }   from "./sections/header.js";
import { renderAbout }    from "./sections/about.js";
import { renderSkills }   from "./sections/skills.js";
import { renderProjects } from "./sections/projects.js";
import { renderContact }  from "./sections/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader(site.identity, site.nav);
  renderAbout(site.about);
  renderSkills(site.skills);
  renderProjects(site.projects);
  renderContact(site.contact);

  document.querySelector("footer p").textContent =
    `© ${site.footer.year} ${site.footer.name}`;
});
