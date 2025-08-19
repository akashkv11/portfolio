import type { GitHubRepoList } from "../types/github-repo.type";
declare var particlesJS: any;

const response = await fetch("https://api.github.com/users/akashkv11/repos");

const repos = sortReposWithDescription(await response.json());

const projectsContainer = document.getElementById("projects");

if (projectsContainer) {
  for (const repo of repos) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = repo.name;

    const placeHolderImage = document.createElement("img");
    placeHolderImage.classList.add("card-img-top");
    placeHolderImage.src =
      "https://www.shutterstock.com/image-vector/no-photo-thumbnail-graphic-element-600nw-2311073121.jpg";
    placeHolderImage.alt = repo.name;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = repo.description;

    // Social icons container (from your snippet)
    const socialIcons = document.createElement("ul");
    socialIcons.classList.add("example-2");
    socialIcons.classList.add("px-0");
    socialIcons.classList.add("mb-0");
    socialIcons.innerHTML = `
  <li class="icon-content">
    <a href=${repo.html_url} aria-label="GitHub" data-social="github" target="_blank">
      <div class="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-github"
        viewBox="0 0 16 16"
        xml:space="preserve"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div class="tooltip">GitHub</div>
  </li>
`;

    // Append all to card
    cardBody.appendChild(placeHolderImage);
    cardBody.appendChild(cardTitle);
    if (repo.description) cardBody.appendChild(cardText);
    // cardBody.appendChild(cardLink);
    cardBody.appendChild(socialIcons);

    card.appendChild(cardBody);
    projectsContainer.appendChild(card);
  }
}

function sortReposWithDescription(repos: GitHubRepoList) {
  return repos
    .filter((repo) => repo.stargazers_count > 0)
    .sort((a, b) => {
      if (a.description && !b.description) {
        return -1;
      }
      if (!a.description && b.description) {
        return 1;
      }
      return 0;
    });
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
  "particles-js",
  "/assets/particlesjs-config.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);
