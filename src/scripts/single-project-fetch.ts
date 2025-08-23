import allProjectDetails from "../constants/project-details.ts";

const urlParams = new URLSearchParams(window.location.search);
const projectName = urlParams.get("project");

if (projectName) {
  const name = projectName.split("-")[0].trim().toLowerCase();

  document.title = `Project - ${name}`;
  const projectDetails =
    allProjectDetails[name as keyof typeof allProjectDetails];

  if (projectDetails) {
    setProjectDetails(projectDetails, name);
  } else {
    console.error("Project not found in allProjectDetails");
  }
} else {
  console.error("No project specified");
}

function setProjectDetails(
  projectDetails: (typeof allProjectDetails)[keyof typeof allProjectDetails],
  name: string
) {
  const container = document.getElementById("project-details");
  if (!container) return;

  container.innerHTML = `
    <header class="header">
      <h1 class="project-title">${capitalize(name)} Project</h1>
      <p class="project-subtitle">${projectDetails.role}</p>
      <div class="project-links px-3">
        <a href="${projectDetails.github}" class="project-link" target="_blank">
          GitHub Repository
        </a>
      </div>
    </header>

    <section class="section">
      <h2 class="section-title">Introduction</h2>
      <div class="section-content">
        <p>${projectDetails.introduction}</p>
        <div class="tech-stack">
          ${projectDetails.tech
            .split(",")
            .map((tech) => `<span class="tech-item">${tech.trim()}</span>`)
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Purpose & Goal</h2>
      <div class="section-content">
        <p>${projectDetails.purpose}</p>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Technical Spotlight</h2>
      <div class="section-content">
        <p>${projectDetails.technicalSpotlight}</p>

        <div class="flow-steps">
          <h3 style="margin-bottom: 1rem">Application Flow:</h3>
          ${projectDetails.flow
            .map(
              (step, i) => `
            <div class="flow-step">
              <div class="step-number">${i + 1}</div>
              <div class="step-content">${step}</div>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="interactive-demo">
          <span class="code-comment">// Authentication Architecture</span>
          ${projectDetails.auth}
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Challenges & Solutions</h2>
      <div class="section-content">
        ${projectDetails.challenges
          .map(
            ([title, desc]) => `
            <div class="challenge-card">
              <div class="challenge-title">🔹 ${title}</div>
              <p>${desc}</p>
            </div>
          `
          )
          .join("")}
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Current Status & Lessons Learned</h2>
      <div class="section-content">
        <div class="status-badge">Status: ${projectDetails.status}</div>
        <ul class="lessons-list">
          ${projectDetails.lessons
            .map(
              ([category, text]) => `
              <li>
                <div class="lesson-category">${category}</div>
                <p>${text}</p>
              </li>
            `
            )
            .join("")}
        </ul>
      </div>
    </section>
  `;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
