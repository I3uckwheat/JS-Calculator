const buttonContainer = document.querySelector(".numbers");
const operatorContainer = document.querySelector(".operators");
const calcScreen = document.querySelector("#screen");
let screenvalue = 0;
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
  for(let i = 0, j = 9; i < buttonChildren.length; i++, j--) {
    buttonChildren[i].addEventListener("click", () => console.log(j));
  }
}

function numberHandler(num) {
  console.log(num);
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

function updateScreen(value) {
  calcScreen.innerHTML = value;
}

// calcScreen = {
//   value: 0,
//   screen: document.querySelector("#screen"),
//   update: () => console.log(this.screen)
// }
