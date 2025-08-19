declare var particlesJS: any;

particlesJS.load(
  "particles-js",
  "/assets/particlesjs-config.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);
