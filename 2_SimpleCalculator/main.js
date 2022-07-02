const calculator = {
  displayValue: "0",
  op1: null,
  waitingForSecondOperand: false,
  op2: null,
  operator: null,
};

function input(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue += digit;
    calculator.op2 = digit;
    calculator.waitingForSecondOperand = false;
    console.log(calculator)
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
      console.log(calculator)
  }
}

function inputDecimal(dot) {
  // If the `displayValue` property does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
    console.log(calculator)
  }
}

function OperatorHandling(op) {
  const { op1, displayValue, operator, op2 } = calculator;
  const inputValue = parseFloat(displayValue);

  if (op1 == null && !isNaN(inputValue)) {
    calculator.op1 = inputValue;
    console.log(calculator)
  } else if (operator != null) {
    const result = calculate(op1, inputValue, operator);
    console.log(result)
    calculator.displayValue = result + operator;
    calculator.op1 = result;
    console.log(calculator);
  }

  calculator.waitingForSecondOperand = true;
  calculator.displayValue += op
  calculator.operator = op;
  console.log(calculator);
}

function calculate(op1, op2, operator) {
  if (operator === "+") {
    return op1 + op2;
  } else if (operator === "-") {
    return op1 - op2;
  } else if (operator === "*") {
    return op1 * op2;
  } else if (operator === "/") {
    return op1 / op2;
  }

  return op2;
}

function updateDisplay() {
  const screen = document.querySelector(".header-screen");
  screen.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("special")) {
    OperatorHandling(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  input(target.value);
  updateDisplay();
});

const allClear = document.querySelector(".keypad");
allClear.addEventListener("click", (event) => {
  const { target } = event;
  if (target.classList.contains("all-clear")) {
    console.log("clear", target.value);
  }
});
