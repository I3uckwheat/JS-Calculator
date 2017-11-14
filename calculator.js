const buttonContainer = document.querySelector(".numbers")
generateButtons9to0(buttonContainer);

function generateButtons9to0(container){
  for(let i = 9; i >=0; i--) {
    let button = document.createElement("button");
    button.setAttribute("name", `button${i}`);
    button.setAttribute("id",`button${i}`)
    button.innerHTML = i
    container.appendChild(button);
  }
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
