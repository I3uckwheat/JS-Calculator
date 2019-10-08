const buttonContainer = document.querySelector(".numbers");
const operatorContainer = document.querySelector(".operators");
const calcScreen = document.querySelector("#screen");
let screenValue = "";
let holdValue = null;
let operatorValue = null
let answerOnScreen = false;
let equalsPressed = false;

generateButtons9to0(buttonContainer);
addClickHandlers();

function generateButtons9to0(container){
  for(let i = 9; i >=0; i--) {
    let button = document.createElement("button");
    button.setAttribute("name", `button${i}`);
    button.setAttribute("id",`button${i}`)
    button.innerHTML = i
    container.appendChild(button);
  }
}

function addClickHandlers() {
  let buttonChildren = buttonContainer.children
  let clearScreenBtn = document.querySelector("#clr");
  let clearCalcBtn = document.querySelector("#clr-calc");
  let operatorChildren = operatorContainer.children
  for(let i = 0, j = 9; i < buttonChildren.length; i++, j--) {
    buttonChildren[i].addEventListener("click", () => updateScreenValue(j));
  }

  for(let i = operatorChildren.length - 2; i >= 0; i--){
    let operation = operatorChildren[i];
    operation.addEventListener("click", () => operatorHandler(operation.innerHTML));
  }

  clearScreenBtn.addEventListener("click", () => clearScreen());
  clearCalcBtn.addEventListener("click", () => totalClear());
  operatorChildren[operatorChildren.length -1].addEventListener("click", () => compute());
}

function compute(){
  if(operatorValue !== null) {
    screenValue = operate(operatorValue, Number(holdValue), Number(screenValue));
    updateScreen();
    equalsPressed = true;
    answerOnScreen = true;
  }
}

function updateScreenValue(value) {
  if(answerOnScreen === false && screenValue.length > 9) {
    screenValue = screenValue.slice(1, 10) + value;
  }else if(answerOnScreen === false) {
    screenValue += value;
  } else {
    screenValue = value.toString();
    answerOnScreen = false;
  }
  updateScreen();
}

function updateScreen() {
  calcScreen.innerHTML = screenValue;
}

function clearCalculator() {
  operatorValue = null;
  holdValue = null;
  answerOnScreen = false;
}

function clearScreen() {
  screenValue = "";
  answerOnScreen = false;
  updateScreen();
}

function totalClear() {
  clearCalculator();
  clearScreen();
  answerOnScreen = true;
}

function operatorHandler(operator) {
  if(operatorValue === null) {
    operatorValue = operator;
    holdValue = screenValue;
    answerOnScreen = true;
  } else if (equalsPressed) {
    operatorValue = operator;
    holdValue = screenValue;
    answerOnScreen = true;
  } else {
    holdValue = operate(operatorValue, Number(holdValue), Number(screenValue));
    screenValue = holdValue;
    operatorValue = operator;
    answerOnScreen = true;
    updateScreen();
  }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
  switch(operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
     return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return "Invalid Operator: " + operator;
  }
}
