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

let num1;
let operator;
let num2;
let waitingSecondNumber = false;

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
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
});

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (!isNaN(value)) {
      if (waitingSecondNumber) {
        display.textContent = value;
        waitingSecondNumber = false;
      } else {
        display.textContent += value;
      }
    }
  });
});

const operators = document.querySelectorAll("#operator");

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 === undefined) {
      num1 = parseFloat(display.textContent);
    } else if (operator) {
      num2 = parseFloat(display.textContent);
      num1 = operate(operator, num1, num2);
      display.textContent = num1;
    }
    operator = button.textContent;
    waitingSecondNumber = true;
  });
});

const equalButton = document.getElementById("equals");
equalButton.addEventListener("click", () => {
  if (num1 !== undefined && operator && display.textContent !== "") {
    num2 = parseFloat(display.textContent);
    num1 = operate(operator, num1, num2);
    display.textContent = num1;
    operator = undefined;
    num2 = undefined;
  }
});
