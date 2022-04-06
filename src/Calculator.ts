import * as op from "./Operations.js";
import { OperationType } from "./OperationTypes.js"


interface Calculator {
    alreadyTyped: boolean
    previousValue: number
    presentValue: string
    operation: string
    display: HTMLElement

    addPointToDisplay(): void
    clearDisplay(): void
    resetCalculator(): void
    setNumericButtonsFunctionality(s: string): void
    deleteFromDisplay(): void
    doCalculation(): void
    setOperation(e: Event): void
    equal(): void
}

export class CalculatorImpl implements Calculator{

    alreadyTyped: boolean = false;
    previousValue: number = null;
    presentValue: string = "";
    operation: string = "";
    display: HTMLElement;

    constructor(display: HTMLElement) {
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

    setNumericButtonsFunctionality(s: string) {
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
                case OperationType.ADD:
                    this.previousValue = op.addNumbers(this.previousValue, newValue);
                    break;
                case OperationType.SUBSTRACT:
                    this.previousValue = op.substractNumbers(this.previousValue, newValue);
                    break;
                case OperationType.MULTIPLY:
                    this.previousValue = op.multiplyNumbers(this.previousValue, newValue);
                    break;
                case OperationType.DIVIDE:
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

    setOperation(e: Event) {
        if ((e.target as HTMLButtonElement).hasAttribute("operation")) 
        {
            this.operation = (e.target as HTMLButtonElement).getAttribute("operation");
        }
    }

    equal() {
        this.doCalculation();
        this.presentValue = "";
    }
}