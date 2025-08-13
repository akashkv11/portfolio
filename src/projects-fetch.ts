import type { GitHubRepoList } from "./types/github-repo.type";
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
    // // Create GitHub link
    // const cardLink = document.createElement("a");
    // cardLink.classList.add("card-link");
    // cardLink.href = repo.html_url;
    // cardLink.target = "_blank";

    // // Create GitHub SVG
    // const svgNS = "http://www.w3.org/2000/svg";
    // const svgIcon = document.createElementNS(svgNS, "svg");
    // svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    // svgIcon.setAttribute("width", "20");
    // svgIcon.setAttribute("height", "20");
    // svgIcon.setAttribute("viewBox", "0 0 30 30");
    // svgIcon.setAttribute("style", "fill: #ffffff; margin-left: 5px;");

    // const svgPath = document.createElementNS(svgNS, "path");
    // svgPath.setAttribute(
    //   "d",
    //   "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
    // );
    // svgIcon.appendChild(svgPath);
    // cardLink.appendChild(svgIcon);

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
