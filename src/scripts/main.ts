import iconsList from "../constants/tech-icons";
import emailjs from "emailjs-com";
declare var bootstrap: any;

// resume download
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv/akash_software_engineer.pdf"; // path relative to public/
  link.download = "Akash_KV_CV.pdf"; // filename on download
  link.click();
};

const cvDownloadBtn = document.querySelector(".cv-download-btn");
cvDownloadBtn?.addEventListener("click", downloadCV);

// skill tabs filling
const skillsTab = document.getElementById("skills-tab");
const skillsTabContent = document.getElementById("skills-tabContent");

Object.entries(iconsList).forEach(([sectionName, sectionItems], index) => {
  const slug = `skills-${sectionName.toLowerCase().replace(/\s+/g, "-")}`;

  // --- Tab Button ---
  const li = document.createElement("li");
  li.className = "nav-item single-skill";
  li.role = "presentation";

  const button = document.createElement("button");
  button.className = `nav-link${index === 0 ? " active" : ""}`;
  button.id = `${slug}-tab`;
  button.dataset.bsToggle = "pill";
  button.dataset.bsTarget = `#${slug}`;
  button.type = "button";
  button.role = "tab";
  button.setAttribute("aria-controls", slug);
  button.setAttribute("aria-selected", index === 0 ? "true" : "false");
  button.textContent =
    sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

  li.appendChild(button);
  if (skillsTab) {
    skillsTab.appendChild(li);
  }

  // --- Tab Pane ---
  const tabPane = document.createElement("div");
  tabPane.className = `tab-pane fade${index === 0 ? " show active" : ""}`;
  tabPane.id = slug;
  tabPane.role = "tabpanel";
  tabPane.setAttribute("aria-labelledby", `${slug}-tab`);

  const innerDiv = document.createElement("div");
  innerDiv.className = "single-section p-1 d-flex flex-wrap gap-2";

  sectionItems.forEach((tech) => {
    const span = document.createElement("span");
    span.className = "tech-item  p-2";
    span.innerHTML = `<img src="${tech.icon}" alt="${tech.name}" style="width: 20px; margin-right: 5px;"> ${tech.name}`;
    innerDiv.appendChild(span);
  });

  tabPane.appendChild(innerDiv);
  if (skillsTabContent) {
    skillsTabContent.appendChild(tabPane);
  }
});

// contact form submission

const form = document.getElementById("contact-form") as HTMLFormElement | null;

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    switchOffButton(); // Disable the button and show "Sending..." text
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showToast("success");
        switchOnButton(); // Re-enable the button and reset text
        form.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        switchOnButton(); // Re-enable the button even if there's an error
        showToast("error");
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  hiddenElements.forEach((el) => observer.observe(el));
});

function switchOffButton() {
  const button = document.getElementById(
    "form-submit-btn"
  ) as HTMLButtonElement;
  button.disabled = true;
  button.textContent = "Sending...";
}

function switchOnButton() {
  const button = document.getElementById(
    "form-submit-btn"
  ) as HTMLButtonElement;
  button.disabled = false;
  button.textContent = "Submit";
}

function showToast(type: "success" | "error") {
  const toastLiveExample = document.getElementById(
    type === "success" ? "successToast" : "errorToast"
  );

  if (toastLiveExample) {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  }
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

const textArray = [
  "Full stack developer.",
  "Problem solver.",
  "Team player.",
  "Mentor.",
];
const typingSpeed = 100; // speed per character
const erasingSpeed = 60; // erasing speed
const delayBetween = 1500; // delay before erasing/next

let textIndex = 0;
let charIndex = 0;
const typewriter = document.getElementById("typewriter") as HTMLElement;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typewriter.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

// Start the effect
document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, delayBetween);
});
