const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv/akash_full_stack_developer"; // path relative to public/
  link.download = "Akash_KV_CV.pdf"; // filename on download
  link.click();
};

const cvDownloadBtn = document.querySelector(".cv-download-btn");
cvDownloadBtn?.addEventListener("click", downloadCV);
