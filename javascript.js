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

const operatorsList = ["+", "-", "/", "*", "="];


let num1;
let num2;
let operator;

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
    return divide(num1,num2);
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
}

function addDecimal(){
  if (!display.textContent.includes(".")){ // Check if decimal already exists
    display.textContent = display.textContent + "."
    }
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
      display.textContent = operate(num1, num2, operator);
      clearOperator();
      updateNumber2();
      break;
  }
}))

// Operator handler
operators.map(operatorElement => operatorElement.addEventListener("click", () => {
  if (operator !== undefined){
    operateAndDisplay(num1, num2, operator);
  } else {
  display.textContent = operatorElement.textContent;
  operator = operatorElement.textContent;
  }
}))

// Operand handler
operands.map(operand => operand.addEventListener("click", (event) => {
  if (operatorsList.some(value => value == display.textContent)){
    operator = display.textContent;
    display.textContent = undefined;
    console.log("its a operator!")
  }
  display.textContent = display.textContent + operand.textContent;
  num1 = num2;
  num2 = display.textContent;
}))


