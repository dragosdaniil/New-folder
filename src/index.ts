import { CalculatorImpl } from "./Calculator.js";

const numberBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll("div[number_type]");
const operationsBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll("div[operation]");
const equalBtn: HTMLButtonElement = document.querySelector(".equal");

const deleteBtn: HTMLButtonElement = document.querySelector(".delete");
const clearBtn: HTMLButtonElement = document.querySelector(".clear");
const pointBtn: HTMLButtonElement = document.querySelector(".point");
const resetBtn: HTMLButtonElement = document.querySelector('[button_type="reset__display"]');
const display: HTMLElement = document.querySelector(".calculator__display");

const calculator = new CalculatorImpl(display);
numberBtns.forEach(btn => btn.addEventListener("click", () => calculator.setNumericButtonsFunctionality(btn.innerHTML)));

resetBtn.addEventListener("click", () => calculator.resetCalculator());
clearBtn.addEventListener("click", () => calculator.clearDisplay());
deleteBtn.addEventListener("click", () => calculator.deleteFromDisplay());
pointBtn.addEventListener("click", () => calculator.addPointToDisplay());

equalBtn.addEventListener("click", () => calculator.equal());

operationsBtns.forEach(btn => btn.addEventListener("click", () => calculator.doCalculation()));
document.querySelector(".buttons").addEventListener("click", (e) => calculator.setOperation(e));