document.querySelectorAll(".small-circle[data-section]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;
    const section = document.getElementById(target);

    if (!section) return;

    // Hvis seksjonen er synlig: lukk den
    if (section.classList.contains("show")) {
      section.classList.remove("show");
      setTimeout(() => section.classList.add("hidden"), 400); // matcher transition-tid
    } 
    else {
      // Skjul alle andre seksjoner først
      document.querySelectorAll(".details").forEach(d => {
        d.classList.remove("show");
        d.classList.add("hidden");
      });

      // Vis valgt seksjon
      section.classList.remove("hidden");
      setTimeout(() => section.classList.add("show"), 10);
    }
  });
});
