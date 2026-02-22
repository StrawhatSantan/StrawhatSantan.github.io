let searchTheme = determineComputedTheme();
const ninjaKeys = document.querySelector("ninja-keys");

if (searchTheme === "dark") {
  ninjaKeys.classList.add("dark");
} else {
  ninjaKeys.classList.remove("dark");
}

const openSearchModal = () => {
  // collapse navbarNav if expanded on mobile
  const $navbarNav = $("#navbarNav");
  if ($navbarNav.hasClass("show")) {
    $navbarNav.collapse("hide");
  }
  ninjaKeys.open();
};

// Keep backward compatibility for any inline handlers.
window.openSearchModal = openSearchModal;

// Use a JS listener so the button works even without inline onclick.
const searchToggleBtn = document.querySelector("#search-toggle");
if (searchToggleBtn) {
  searchToggleBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openSearchModal();
  });
}
