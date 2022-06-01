const navbarToggler = document.querySelector(".toggler-icon");
const mobileNav = document.querySelector(".mobile-nav");
let mqlMd = window.matchMedia(`(min-width: 768px)`);
const iconPaths = [
  "/assets/shared/mobile/icon-hamburger.svg",
  "/assets/shared/mobile/icon-close.svg",
];

navbarToggler.addEventListener("click", () => {
  if (navbarToggler.getAttribute("src") === iconPaths[0]) {
    navbarToggler.src = iconPaths[1];
    mobileNav.style.display = "block";
  } else {
    navbarToggler.src = iconPaths[0];
    mobileNav.style.display = "none";
  }
});

mqlMd.addEventListener("change", () => {
  if (mqlMd.matches) {
    navbarToggler.src = iconPaths[0];
    mobileNav.style.display = "none";
  }
});
