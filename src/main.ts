import iconsList from "./tech-icons";

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv/akash_full_stack_developer"; // path relative to public/
  link.download = "Akash_KV_CV.pdf"; // filename on download
  link.click();
};

const cvDownloadBtn = document.querySelector(".cv-download-btn");
cvDownloadBtn?.addEventListener("click", downloadCV);

const skillsContainer = document.getElementById("skills-container");

Object.entries(iconsList).forEach(([sectionName, sectionItems]) => {
  const ul = document.createElement("ul");
  const h5 = document.createElement("h5");
  h5.textContent = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
  ul.appendChild(h5);
  sectionItems.forEach((tech) => {
    const li = document.createElement("li");
    li.className = "tech-item";
    li.innerHTML = `<img src="${tech.icon}" alt="${tech.name}"> ${tech.name}`;
    ul.appendChild(li);
  });

  if (skillsContainer) {
    skillsContainer.appendChild(ul);
  }
});
