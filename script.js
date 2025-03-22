/** @format */

import { data } from "./data.js";

const boxes = document.querySelectorAll(".box");
const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const c1_percentage = document.querySelector(".c1_percentage");
const c2_percentage = document.querySelector(".c2_percentage");

let count = 0;

choice1.textContent = data.questions[0].choice[0];
choice2.textContent = data.questions[0].choice[1];

next.addEventListener("click", () => {
  if (count < data.questions.length - 1 && count >= 0) {
    count += 1;
    choice1.textContent = data.questions[count].choice[0];
    choice2.textContent = data.questions[count].choice[1];

    c1_percentage.textContent = " ";
    c2_percentage.textContent = " ";
    console.log(count);
  }
});

prev.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    choice1.textContent = data.questions[count].choice[0];
    choice2.textContent = data.questions[count].choice[1];

    c1_percentage.textContent = " ";
    c2_percentage.textContent = " ";
    console.log(count);
  }
});
function animatePercentage(targetElement, targetValue) {
  let currentValue = 0;
  const duration = 2000;
  const step = targetValue / (duration / 50);

  function updatePercentage() {
    if (currentValue < targetValue) {
      currentValue += step;
      if (currentValue > targetValue) currentValue = targetValue;
      targetElement.textContent = `${Math.round(currentValue)}%`;
      requestAnimationFrame(updatePercentage);
    }
  }
  updatePercentage();
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    c1_percentage.classList.add("fade-in");
    c2_percentage.classList.add("fade-in");

    animatePercentage(c1_percentage, data.questions[count].percentage[0]);
    animatePercentage(c2_percentage, data.questions[count].percentage[1]);
  });
});
