const allBtns = document.querySelectorAll(".calc-btn");
const display = document.getElementById("display");
const themeToggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("icon");
const navBtn = document.getElementById("navBtn");
const aside = document.getElementById("aside");
const btnContainer = document.querySelector(".btn-container");
const historyContainer = document.getElementById("historyContainer");
const previousCalculation = document.querySelector(".previous-calculation");

const clearAllBtn = document.getElementById("clearAllBtn");
const calculate = document.getElementById("calculate");
const stepBack = document.getElementById("stepBack");
const moreOptionBtn = document.getElementById("moreOptionBtn");

// EventListeners
let isCalculated = false;
icon.addEventListener("click", toggletheme);

navBtn.addEventListener("click", showSidePanel);

clearAllBtn.addEventListener("click", clearAll);

stepBack.addEventListener("click", deleteStep);

calculate.addEventListener("click", () => {
  calculateVal();
  isCalculated = true;
});

document.addEventListener("keydown", (e) => {
  const key = e.keyCode;

  switch (key) {
    case 46:
      clearAll();
      break;
    case 13:
      calculateVal();
      break;
    case 8:
      deleteStep();
      break;
    case 111:
      append("/");
      break;
    case 106:
      append("*");
      break;
    case 107:
      append("+");
      break;
    case 109:
      append("-");
      break;
    case 110:
    case 190:
      2;
      append(".");
      break;
    case 96:
    case 48:
      append("0");
      break;
    case 97:
    case 49:
      append("1");
      break;
    case 98:
    case 50:
      append("2");
      break;
    case 99:
    case 51:
      append("3");
      break;
    case 100:
    case 52:
      append("4");
      break;
    case 101:
    case 53:
      append("5");
      break;
    case 102:
    case 54:
      append("6");
      break;
    case 103:
    case 55:
      append("7");
      break;
    case 104:
    case 56:
      append("8");
      break;
    case 105:
    case 57:
      append("9");
      break;
  }
});

moreOptionBtn.addEventListener("click", advBtns);
// Functions

// More options

function advBtns() {}

// Dark/Light Mode
let theme = localStorage.getItem("theme") || "light";
if (theme == "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.replace("ri-moon-fill", "ri-sun-fill");
}
function toggletheme() {
  if (theme == "light") {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");
    icon.classList.replace("ri-moon-fill", "ri-sun-fill");
    theme = "dark";
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark-mode");
    icon.classList.replace("ri-sun-fill", "ri-moon-fill");
    theme = "light";
  }
}

//Sidepanel
function showSidePanel() {
  aside.classList.contains("hide")
    ? aside.classList.remove("hide")
    : aside.classList.add("hide");
}

// Calculating
// function calculateVal() {
//   createHistory(display.value);
//   display.value = `=` + eval(display.value);
// }

function calculateVal() {
  let expr = display.value;

  const operators = ["+", "-", "*", "/"];
  while (operators.includes(expr.slice(-1))) {
    expr = expr.slice(0, -1);
  }

  if (!expr || expr === "0") return;

  if (isCalculated) return;

  try {
    const result = eval(expr);

    createHistory(expr);
    createHistory(result);

    display.value = "=" + result;
    isCalculated = true;
  } catch (e) {
    display.value = "Error";
    isCalculated = true;
  }
}

// Loading existing History
(() => {
  const saved = JSON.parse(localStorage.getItem("calcHistory") || "[]");
  saved.forEach((equation) => {
    const para = document.createElement("p");
    para.textContent = equation;
    historyContainer.append(para);
  });
})();

//History creation
function createHistory(equation) {
  const para = document.createElement("p");
  para.textContent = equation;
  historyContainer.append(para);
  previousCalculation.append(para.cloneNode(true));

  // saving history into local storage
  const existing = JSON.parse(localStorage.getItem("calcHistory") || "[]");
  existing.push(equation);
  localStorage.setItem("calcHistory", JSON.stringify(existing));
}

// Percentage Calculation
function calculatePercentage() {}

// appending input to display
let x = 0;
function append(input) {
  if (isCalculated) {
    display.value = 0;

    isCalculated = false;
  }
  const operators = ["+", "-", "*", "/"];
  const isOperator = operators.includes(input);
  isOperator ? x++ : null;

  if (display.value === "0") {
    isOperator ? (display.value += input) : (display.value = input);
    clearAllBtn.textContent = "C";
  } else {
    const lastChar = display.value.slice(-1);

    if (isOperator && operators.includes(lastChar)) {
      display.value = display.value.slice(0, -1) + input;
      x = 1;
    } else {
      display.value += input;
      display.scrollLeft = display.scrollWidth;
    }
  }
}

//stepback
function deleteStep() {
  display.value = display.value.slice(0, -1);
  !display.value
    ? ((clearAllBtn.textContent = "AC"), (display.value = 0))
    : (clearAllBtn.textContent = "C");
}

// clearing all
function clearAll() {
  display.value = 0;
  clearAllBtn.textContent = "AC";
  previousCalculation.innerHTML = "";
}

// What's left
// UX
// --local storage theme ✔️✔️✔️✔️✔️✔️
// --history panel✔️
// --responsive navbar✔️
// --advance calculator function
// input overflow
//Deadline 24-04-26
