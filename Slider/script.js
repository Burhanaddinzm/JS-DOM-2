"use strict";
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

const [leftBtn, rightBtn] = document.querySelectorAll("button");

let index = 0;

rightBtn.addEventListener("click", () => {
  if (index === slides.length - 3) {
    index = 0;
  } else {
    index++;
  }
  slider.style.transform = `translateX(-${index * 310}px)`;
});

leftBtn.addEventListener("click", () => {
  if (index === 0) {
    index = slides.length - 3;
  } else {
    index--;
  }
  slider.style.transform = `translateX(-${index * 310}px)`;
});
