function add(num1, num2){
  return num1+num2
}

function subtract(num1,num2){
  return num1-num2;
}

function multiplty(num1,num2){
  return num1*num2;
}

function divide(num1,num2){
  return num1/num2;
}

function clearOperatorInDisplay(){
  if (operatorsList.some(value => value == display.textContent)){
    operator = display.textContent;
    display.textContent = undefined;
  }
}


function operate(num1, num2, operator){
  num1 = Number(num1);
  num2 = Number(num2);
  operator = operator.toString();
  if (operator === "+"){
    return add(num1,num2);
  } else if (operator === "-"){
    return subtract(num1,num2);
  } else if (operator === "*"){
    return multiplty(num1, num2);
  } else if (operator === "/"){
    if (num2 == 0){
      return "SIKE!";
    } else {
    return divide(num1,num2);
    }
  }
}

function changeSign(){
  display.textContent = display.textContent * -1
}

function clearCalculator(){
  display.textContent = undefined;
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  isResult = false;
}

function addDecimal(){
  if (!display.textContent.includes(".")){ // Check if decimal already exists
    display.textContent = display.textContent + "."
    }
}

function updateNum1AndNum2(){
  num1 = num2;
  num2 = display.textContent;
}
const operators = Array.from(document.querySelectorAll(".operator"));
const operands = Array.from(document.querySelectorAll(".operand"));
let display = document.querySelector(".display-content");
const functions = Array.from(document.querySelectorAll(".function-btn"));

function updateNumber1(){
  num1 = num2;
}

function updateNumber2(){
  num2 = display.textContent;
}

function clearOperator(){
  operator = undefined;
}

function operateAndDisplay(num1, num2, operator){
  display.textContent = operate(num1, num2, operator);
}

function clearDisplay(){
  display.textContent = undefined;
}

// Functions handler
functions.map(button => button.addEventListener("click", () => {
  let functionCalled = button.textContent;
  switch (functionCalled) {
    case "+/-":
      changeSign();
      updateNumber2();
      break;
    case "AC":
      clearCalculator();
      break;
    case ".":
      addDecimal();
      break;
    case "=":
      updateNum1AndNum2();
      display.textContent = operate(num1, num2, operator);
      clearOperator();
      updateNumber2();
      break;
  }
}))

const operatorsList = ["+", "-", "/", "*", "="];


let num1;
let num2;
let operator;
let isResult = false;

// Operator handler
operators.map(operatorElement => operatorElement.addEventListener("click", () => {
  if (operator !== undefined){
    isResult = true;
    updateNum1AndNum2();
    display.textContent = operate(num1, num2, operator);
    updateNumber2();
    // clearDisplay();
  } else {
  num1 = num2;
  num2 = display.textContent;
  display.textContent = operatorElement.textContent;
  operator = operatorElement.textContent;
  }
}))

// Operand handler
operands.map(operand => operand.addEventListener("click", (event) => {
  clearOperatorInDisplay()
  if (isResult == true){
    clearDisplay();
    isResult = false;
  }
  display.textContent = display.textContent + operand.textContent;
}))


