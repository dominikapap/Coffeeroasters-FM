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
          '<span class="addon"> using </span>' + radioBtns[i].value;
      } else {
        //enable grind options button, add/leave text about it in order summary and set choice text to as Filer or as Espresso
        grindBtn.disabled = false;
        document.getElementById("ground").style.display = "inline";

        summaryText[0].innerHTML =
          '<span class="addon"> as </span>' + radioBtns[i].value;
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

const summaryBtn = document.getElementById("summary-btn");
const orderModal = document.getElementById("order-modal");
const summary = document.querySelector(".order-summary__text");
const modalText = document.querySelector(".modal-body__text");
const calcPrice = document.querySelector(".calc-price");
const calcPriceSmall = document.querySelector(".calc-price-btn--small");

summaryBtn.addEventListener("click", () => {
  modalText.innerHTML = summary.innerHTML;
  calcPrice.innerText = getPrice(
    summaryText[2].innerText,
    summaryText[4].innerText
  );
  calcPriceSmall.innerText =
    "Checkout- " + getPrice(summaryText[2].innerText, summaryText[4].innerText);
});

const prices = [
  {
    "250g ": [
      { "Every week": "$28.80/ mo" },
      { "Every two weeks": "$19.20/ mo" },
      { "Every month": "$12.00/ mo" },
    ],
  },
  {
    "500g ": [
      { "Every week": "$52.00/ mo" },
      { "Every two weeks": "$35.00/ mo" },
      { "Every month": "$22.00/ mo" },
    ],
  },
  {
    "1000g ": [
      { "Every week": "$88.00/ mo" },
      { "Every two weeks": "$64.00/ mo" },
      { "Every month": "$42.00/ mo" },
    ],
  },
];

function getPrice(weight, frequency) {
  for (let i = 0; i < prices.length; i++) {
    //find weight in prices
    if (weight == Object.keys(prices[i])) {
      for (let j = 0; j < Object.keys(prices[i][weight]).length; j++) {
        //find frequency in weight object
        if (frequency == Object.keys(prices[i][weight][j])) {
          //return appropriate value
          return prices[i][weight][j][frequency];
        }
      }
    }
  }
}
