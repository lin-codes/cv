document.addEventListener("DOMContentLoaded", function () {
  // 🔘 Toggle Dark Mode
  const darkModeBtn = document.getElementById("darkModeBtn");
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // 📥 Download CV (lenke til PDF i repo)
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.addEventListener("click", () => {
    window.open("CV.pdf", "_blank"); // legg CV.pdf i repo-roten
  });

  // 🔽 Toggle sections (show/hide)
  const toggleBtns = document.querySelectorAll(".toggleBtn");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const section = document.getElementById(targetId);

      // Finn første UL eller P inni section
      const content = section.querySelector("ul, p");
      if (content.style.display === "none") {
        content.style.display = "";
        btn.textContent = "Hide";
      } else {
        content.style.display = "none";
        btn.textContent = "Show";
      }
    });
  });
});
