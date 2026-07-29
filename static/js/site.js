const hoverMenuQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

document.querySelectorAll("[data-language-choice]").forEach((link) => {
  link.addEventListener("click", () => {
    try {
      window.localStorage.setItem("rslv-language", link.dataset.languageChoice);
    } catch (_) {
      // The language link still works when storage is unavailable.
    }
  });
});

document.querySelectorAll(".services-menu").forEach((menu) => {
  let openedByHover = false;

  menu.addEventListener("pointerenter", () => {
    if (!hoverMenuQuery.matches) return;

    menu.open = true;
    openedByHover = true;
  });

  menu.addEventListener("pointerleave", () => {
    if (!openedByHover) return;

    menu.open = false;
    openedByHover = false;
  });

  menu.addEventListener("toggle", () => {
    if (!menu.open) openedByHover = false;
  });
});
