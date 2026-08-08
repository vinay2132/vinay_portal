document.getElementById("year").textContent = new Date().getFullYear();

const CATEGORY_LABEL = {
  "ai-ml": "AI / ML",
  "agentic-ai": "Agentic AI / MCP",
  fullstack: "Full-Stack / Mobile",
  production: "Production Systems",
  systems: "Infra / Systems"
};

const grid = document.getElementById("project-grid");

function renderProjects(filter) {
  grid.innerHTML = "";
  PROJECTS.filter(p => p.category === filter).forEach(p => {
    const details = document.createElement("details");
    details.className = "project-card";
    details.dataset.category = p.category;

    const modulesHtml = p.modules
      .map(([name, desc]) => `<li><strong>${name}:</strong> ${desc}</li>`)
      .join("");
    const stackHtml = p.stack.map(s => `<span>${s}</span>`).join("");

    details.innerHTML = `
      <summary>
        <span class="project-title">${p.title}</span>
        <span class="project-tagline">${p.tagline}</span>
        <span class="project-cat">${CATEGORY_LABEL[p.category]}</span>
      </summary>
      <div class="project-body">
        <p>${p.arch}</p>
        <ul>${modulesHtml}</ul>
        <div class="tech-tags">${stackHtml}</div>
        <a class="btn-code" href="https://github.com/vinay2132/${p.repo}" target="_blank" rel="noopener">Code</a>
      </div>
    `;
    grid.appendChild(details);
  });
}

renderProjects(document.querySelector(".filter-btn.active").dataset.filter);

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});
