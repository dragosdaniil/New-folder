import { Calculator } from "./Calculator.js";

const numberBtns = document.querySelectorAll("div[number_type]");
// numberBtns.forEach(btn => console.log(btn.innerHTML))
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const addBtn = document.querySelector(".add");
const substractBtn = document.querySelector(".substract");
const equalBtn = document.querySelector(".equal");

const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
const pointBtn = document.querySelector(".point");
const resetBtn = document.querySelector('[button_type="reset__display"]');
const display = document.querySelector(".calculator__display");

const calculator = new Calculator(display);
numberBtns.forEach(btn => btn.addEventListener("click", () => calculator.setNumericButtonsFunctionality(btn.innerHTML)));

resetBtn.addEventListener("click", () => calculator.resetCalculator());
clearBtn.addEventListener("click", () => calculator.clearDisplay());
deleteBtn.addEventListener("click", () => calculator.deleteFromDisplay());
pointBtn.addEventListener("click", () => calculator.addPointToDisplay());

addBtn.addEventListener("click", () => calculator.addNumbers());
substractBtn.addEventListener("click", () => calculator.substractNumbers());
multiplyBtn.addEventListener("click", () => calculator.multiplyNumbers());
divideBtn.addEventListener("click", () => calculator.divideNumbers());

document.querySelector(".buttons").addEventListener("click", (e) => calculator.setOperation(e));