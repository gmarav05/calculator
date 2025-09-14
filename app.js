function addition(num1, num2) {
  const a = parseInt(num1);
  const b = parseInt(num2);
  return a + b;
}

function subtract(num1, num2) {
  const a = parseInt(num1);
  const b = parseInt(num2);
  return a - b;
}

function multiply(num1, num2) {
  const a = parseInt(num1);
  const b = parseInt(num2);
  return a * b;
}

function divide(num1, num2) {
  const a = parseInt(num1);
  const b = parseInt(num2);
  return a / b;
}

const num1 = " ";
const operator = " ";
const num2 = " ";

function operate(operator, num1, num2) {
  if (operator === "+") {
    return addition(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

operate(operator, num1, num2);

const clear = document.getElementById("c");
const display = document.querySelector(".display");

clear.addEventListener("click", () => {
  display.textContent = "";
  num1 = "";
  num2 = "";
});

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    num1 = button;
    display.textContent = num1;
  });
});
