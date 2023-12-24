"use strict";

const colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  color.addEventListener("mouseover", () => {
    color.classList.add("active");
  });
  color.addEventListener("mouseleave", () => {
    color.classList.remove("active");
  });
});
