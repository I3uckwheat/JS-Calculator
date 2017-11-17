const buttonContainer = document.querySelector(".numbers");
const operatorContainer = document.querySelector(".operators");
const calcScreen = document.querySelector("#screen");
let screenValue = "";
let holdValue = null;
let operatorValue = null;

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
  let bigAssClearButton = document.querySelector("#clr");
  let operatorChildren = operatorContainer.children
  for(let i = 0, j = 9; i < buttonChildren.length; i++, j--) {
    buttonChildren[i].addEventListener("click", () => updateScreenValue(j));
  }

  for(let i = operatorChildren.length - 2; i >= 0; i--){
    let operation = operatorChildren[i];
    operation.addEventListener("click", () => operatorHandler(operation.innerHTML));
  }

  bigAssClearButton.addEventListener("click", () => clearScreen());
  operatorChildren[operatorChildren.length -1].addEventListener("click", () => equals());
}

function equals(){
  console.log("equals");
  if(operatorValue !== null) {
    screenValue = operate(operatorValue, Number(holdValue), Number(screenValue));
    updateScreen();
    clearCalculator();
  }
}

function updateScreenValue(value) {
  screenValue += value;
  updateScreen();
}

function updateScreen() {
  calcScreen.innerHTML = screenValue;
}

function clearCalculator() {
  operatorValue = null;
  holdValue = null;
}

function clearScreen() {
  screenValue = " ";
  updateScreen();
}

function operatorHandler(operator) {
  if(operatorValue === null) {
    operatorValue = operator;
    holdValue = screenValue;
    clearScreen();
  }// else if() {CALCULATE AND CONTINUE}
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

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


// calcScreen = {
//   value: 0,
//   screen: document.querySelector("#screen"),
//   update: () => console.log(this.screen)
// }
