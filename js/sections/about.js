export function renderAbout({ heading, body }) {
  const el = document.querySelector("#about");
  el.innerHTML = `
    <h2>${heading}</h2>
    <p>${body}</p>
  `;
}
