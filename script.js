const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-navigation");

function setMenuOpen(isOpen) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("site-navigation--open", isOpen);
}

menuButton?.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 820) setMenuOpen(false);
});
