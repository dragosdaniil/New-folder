import * as op from "./Operations.js";

export class Calculator {

    alreadyTyped = false;
    previousValue = null;
    presentValue = "";
    operation = "";

    constructor(display) {
        this.display = display;
    }
    addPointToDisplay() {
        if (!this.alreadyTyped) {
            this.presentValue += ".";
            this.display.innerHTML = this.presentValue;
            this.alreadyTyped = true;
        }
    }

    clearDisplay() {
        this.display.innerHTML = "";
        this.presentValue = "";
        this.alreadyTyped = false;
    }

    resetCalculator() {
        this.clearDisplay();
        this.previousValue = null;
    }

    setNumericButtonsFunctionality(s) {
        this.presentValue += s;
        this.display.innerHTML = this.presentValue;
    }

    deleteFromDisplay() {
        const newValue = this.display.innerHTML;
        if (newValue[newValue.length - 1] === ".") {
            this.alreadyTyped = false;
        }
        this.display.innerHTML = newValue.slice(0, newValue.length - 1);
    }

    doCalculation() {
        const newValue = parseFloat(this.presentValue);
        if (typeof this.previousValue !== "number") {
            this.previousValue = newValue;
        } else if(this.presentValue !== ""){
            
            switch (this.operation) {
                case "add":
                    this.previousValue = op.addNumbers(this.previousValue, newValue);
                    break;
                case "substract":
                    this.previousValue = op.substractNumbers(this.previousValue, newValue);
                    break;
                case "multiply":
                    this.previousValue = op.multiplyNumbers(this.previousValue, newValue);
                    break;
                case "divide":
                    try{
                        this.previousValue = op.divideNumbers(this.previousValue, newValue);
                    } catch (e){
                        this.resetCalculator();
                        this.display.innerHTML = e.message;
                        return;
                    }
                    break;
            }
            this.display.innerHTML = this.previousValue.toString();
        }
        this.alreadyTyped = false;
        this.presentValue = "";
    }

    setOperation(e) {
        if (e.target.hasAttribute("operation")) this.operation = e.target.getAttribute("operation");
    }

    equal() {
        this.doCalculation();
        this.presentValue = "";
    }
}