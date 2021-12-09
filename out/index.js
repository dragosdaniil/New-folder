import { Calculator } from "./Calculator.js";
const numberBtns = document.querySelectorAll("div[number_type]");
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
let calculator;
if (display) {
    calculator = new Calculator(display);
}
numberBtns.forEach((btn) => btn.addEventListener("click", () => calculator.setNumericButtonsFunctionality(btn.innerHTML)));
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", () => calculator.resetCalculator());
clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.addEventListener("click", () => calculator.clearDisplay());
deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener("click", () => calculator.deleteFromDisplay());
pointBtn === null || pointBtn === void 0 ? void 0 : pointBtn.addEventListener("click", () => calculator.addPointToDisplay());
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", () => calculator.addNumbers());
substractBtn === null || substractBtn === void 0 ? void 0 : substractBtn.addEventListener("click", () => calculator.substractNumbers());
multiplyBtn === null || multiplyBtn === void 0 ? void 0 : multiplyBtn.addEventListener("click", () => calculator.multiplyNumbers());
divideBtn === null || divideBtn === void 0 ? void 0 : divideBtn.addEventListener("click", () => calculator.divideNumbers());
