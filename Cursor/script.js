"use strict";

const outter = document.querySelector(".cursor--outer");
const inner = document.querySelector(".cursor--inner");
const btn = document.querySelector(".btn");

const { width, height, borderRadius, margin } = window.getComputedStyle(outter);

window.addEventListener("mousemove", (event) => {
  const { x, y, target } = event;

  const { x: btnX, y: btnY } = btn.getBoundingClientRect();

  outter.style.transform = `translate(${x}px, ${y}px)`;
  inner.style.transform = `translate(${x}px, ${y}px)`;

  if (target.classList.contains("btn")) {
    const {
      width: btnWidth,
      height: btnHeight,
      borderRadius: btnRadius,
    } = window.getComputedStyle(btn);

    outter.style.width = btnWidth;
    outter.style.height = btnHeight;
    outter.style.borderRadius = btnRadius;
    outter.style.margin = 0;
    outter.style.transform = `translate(${btnX}px, ${btnY}px)`;
  } else {
    outter.style.width = width;
    outter.style.height = height;
    outter.style.margin = margin;
    outter.style.borderRadius = borderRadius;
  }
});
