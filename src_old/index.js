import { Calculator } from "./Calculator.js";

const numberBtns = document.querySelectorAll("div[number_type]");
const operationsBtns = document.querySelectorAll("div[operation]");
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

equalBtn.addEventListener("click", () => calculator.equal());

operationsBtns.forEach(btn => btn.addEventListener("click", () => calculator.doCalculation()));
document.querySelector(".buttons").addEventListener("click", (e) => calculator.setOperation(e));