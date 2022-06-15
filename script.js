const navbarToggler = document.querySelector(".toggler-icon");
const mobileNav = document.querySelector(".mobile-nav");
let mqlMd = window.matchMedia(`(min-width: 768px)`);
const iconPaths = [
  "/assets/shared/mobile/icon-hamburger.svg",
  "/assets/shared/mobile/icon-close.svg",
];

//NAVBAR COLLAPSE
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

//RADIO BUTTONS FOR COFFEE PLAN
const radioBtns = Array.from(document.querySelectorAll(".btn-check"));
const summaryText = Array.from(
  document.querySelectorAll(".order-summary__choice")
);
const grindBtn = document.getElementById("grind-btn");

//add evenet listeners to all radio buttons, every 3 buttons change the field that is supposed to ba updated on click

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener("click", () => {
    if (i < 3) {
      if (i == 0) {
        //disable grind options button, remove text about it in order summary and set choice text to as Capsule
        //close accordion for grind options if it was open
        grindBtn.disabled = true;
        grindBtn.classList.add("collapsed");
        document.getElementById("collapseFour").classList.remove("show");
        document.getElementById("ground").style.display = "none";
        summaryText[0].innerHTML =
          '<span class="text-white"> using </span>' + radioBtns[i].value;
      } else {
        //enable grind options button, add/leave text about it in order summary and set choice text to as Filer or as Espresso
        grindBtn.disabled = false;
        document.getElementById("ground").style.display = "inline";

        summaryText[0].innerHTML =
          '<span class="text-white"> as </span>' + radioBtns[i].value;
      }
    } else if (i < 6) {
      summaryText[1].innerText = radioBtns[i].value;
    } else if (i < 9) {
      summaryText[2].innerText = radioBtns[i].value;
    } else if (i < 12) {
      summaryText[3].innerText = radioBtns[i].value;
    } else {
      summaryText[4].innerText = radioBtns[i].value;
    }

    //get inner text for all summaryText elements
    let summaryTextInner = [];
    summaryText.forEach((el) => {
      summaryTextInner.push(el.innerText);
    });

    //if grind option is hidden remove its value to prevent problems with validation
    if (document.getElementById("ground").style.display == "none") {
      summaryTextInner.splice(3, 1);
    }

    //enable button if all options were chosen by user
    if (summaryTextInner.includes("_____")) {
      summaryBtn.disabled = true;
    } else {
      summaryBtn.disabled = false;
    }
  });
}
/*function updateOrderSummary(button, text) {
  text.innerHTML = button.value;
}*/

const summaryBtn = document.getElementById("summary-btn");
