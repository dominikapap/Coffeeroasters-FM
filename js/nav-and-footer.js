// REPLACE PLACEHOLDER NAV, ADD CODE FOR MOBILE NAV BEHAVIOUR

fetch("nav.html")
  .then((res) => res.text())
  .then((text) => {
    let navPlaceholder = document.querySelector("#replace_with_navbar");
    navPlaceholder.outerHTML = text;
  })
  .then(() => {
    const navbarToggler = document.querySelector(".toggler-icon");
    const mobileNav = document.querySelector(".mobile-nav");
    const createPlanSmTxt = document.querySelector(".create-plan__sm-text");
    const aboutTxt = document.querySelector(".about__text");
    navbarToggler.addEventListener("click", () => {
      if (navbarToggler.getAttribute("src") === iconPaths[0]) {
        navbarToggler.src = iconPaths[1];
        mobileNav.style.display = "block";
        if (window.location.href.includes("subscription")) {
          createPlanSmTxt.setAttribute("stye", "opacity:1");
        }
        if (window.location.href.includes("about")) {
          aboutTxt.setAttribute("stye", "opacity:1");
        }
      } else {
        navbarToggler.src = iconPaths[0];
        mobileNav.style.display = "none";
        if (window.location.href.includes("about")) {
          aboutTxt.setAttribute("stye", "opacity:0.8");
        }
      }
    });
    let mqlMd = window.matchMedia(`(min-width: 768px)`);
    const iconPaths = [
      "/assets/shared/mobile/icon-hamburger.svg",
      "/assets/shared/mobile/icon-close.svg",
    ];

    //NAVBAR COLLAPSE

    mqlMd.addEventListener("change", () => {
      if (mqlMd.matches) {
        navbarToggler.src = iconPaths[0];
        mobileNav.style.display = "none";
      }
    });
  });

// REPLACE PLACEHOLDER FOOTER

fetch("footer.html")
  .then((res) => res.text())
  .then((text) => {
    let footerPlaceholder = document.querySelector("#replace_with_footer");
    footerPlaceholder.outerHTML = text;
  });
