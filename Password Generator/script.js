"use strict";

//Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@ẽ";

//Modal and Backdrop
const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal h2");
const modalMessage = document.querySelector(".modal p");
const modalBtn = document.querySelector(".modal button");
//Password
const passwordEl = document.querySelector(".password");
//Input Elements
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

//Counter
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const counterEl = document.querySelector(".generator__length-counter span");

//Generate and Copy
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");

//Functionality

let counter = 6;
counterEl.textContent = counter;

plusBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (counter < 20) {
    counter++;
  }
  counterEl.textContent = counter;
});

minusBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (counter > 6) {
    counter--;
  }
  counterEl.textContent = counter;
});

const getRandomCharacter = () => {
  const characters = [];

  if (upperInput.checked) {
    characters.push(
      upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
    );
  }

  if (lowerInput.checked) {
    characters.push(
      lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
    );
  }

  if (numbersInput.checked) {
    characters.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  if (symbolsInput.checked) {
    characters.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  if (!characters.length) {
    return "";
  }

  return characters[Math.floor(Math.random() * characters.length)];
};

generateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let password = "";
  for (let i = 0; i < counter; i++) {
    password += getRandomCharacter();
  }

  passwordEl.textContent = password;
});

copyBtn.addEventListener("click", (event) => {
  event.preventDefault();

  backdropEl.classList.add("active");
  modalEl.classList.add("active");

  const passwordValue = passwordEl.textContent;

  if (passwordValue) {
    modalTitle.textContent = "Success";
    modalMessage.textContent = `Your password is (${passwordValue}) succesfully coppied to clipboard.`;
  } else {
    modalTitle.textContent = "Unsuccessfull";
    modalMessage.textContent = `Your password has not been created`;
  }
});

const closeModal = () => {
  backdropEl.classList.remove("active");
  modalEl.classList.remove("active");
};

modalBtn.addEventListener("click", closeModal);
backdropEl.addEventListener("click", closeModal);
