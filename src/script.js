"use strict";

// CARD PROPERTIES
const cardHolder = document.getElementById("card-holder");
const cardNumber = document.getElementById("card-number");
const cardName = document.querySelector(".card__details__user");
const cardExpirationMonth = document.querySelector(".expiry-month");
const cardExpirationYear = document.querySelector(".expiry-year");
const cardNumberDisplay = document.querySelector(".card__number");
const cardCode = document.querySelector(".card__code");

//FORM PROPERTIES
const form = document.querySelector(".form");
const formField = document.querySelector(".form__field");
const formInputArr = document.querySelectorAll(".form__field__input");

//BUTTONS
const confirmBtn = document.querySelector(".btn--confirm");
const dismissBtn = document.querySelector(".btn--dismiss");

const errorMsgArr = document.querySelectorAll(".error");
const successMsg = document.querySelector(".message--success");

cardHolder.addEventListener("input", (e) => {});

form.addEventListener("input", function (event) {
  const curInput = event.target;
  const curFieldError = curInput.parentElement.querySelector(".error")
    ? curInput.parentElement.querySelector(".error")
    : curInput.parentElement.parentElement.querySelector(".error");

  if (curInput.validity.valueMissing) {
    curFieldError.textContent = "Can't be blank";
    curFieldError.classList.remove("no-display");
  } else {
    curFieldError.classList.add("no-display");
  }

  //   if ((curInput.id === "card-number") & curInput.validity.patternMismatch) {
  //     console.log("wrong input limit");
  //   }

  if (curInput.id === "card-holder") {
    cardName.textContent = curInput.value;
  }
  if (curInput.id === "card-number") {
    cardNumberDisplay.textContent = curInput.value;
  }

  if (curInput.id === "expiry-month") {
    cardExpirationMonth.textContent = curInput.value;
  }

  if (curInput.id === "expiry-year") {
    cardExpirationYear.textContent = curInput.value;
  }

  if (curInput.id === "cvc") {
    cardCode.textContent = curInput.value;
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    formInputArr.forEach((input) => {
      const errMsg = input.parentElement.querySelector(".error")
        ? input.parentElement.querySelector(".error")
        : input.parentElement.parentElement.querySelector(".error");
      console.log(input.validity.valid);
      console.log(errMsg);

      if (!input.validity.valid) {
        errMsg.classList.remove("no-display");
        errMsg.textContent = "Invalid Input";
      }
    });
  } else {
    form.classList.add("no-display");
    successMsg.classList.remove("no-display");
  }
});

dismissBtn.addEventListener("click", function () {
  successMsg.classList.add("no-display");
  form.classList.remove("no-display");
  formInputArr.forEach((input) => {
    input.textContent = "";
  });
});

// document.body.addEventListener("click", function (event) {
//   if (event) {
//     formInputArr.forEach((input) => {
//       input.querySelector(".error").classList.add("no-display");
//     });
//   }
// });
