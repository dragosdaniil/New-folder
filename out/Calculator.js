export class Calculator {
    constructor(display) {
        this.alreadyTyped = false;
        this.previousValue = 0;
        this.display = display;
    }
    setAlreadyTyped(value) {
        this.alreadyTyped = value;
    }
    getAlreadyTyped() {
        return this.alreadyTyped;
    }
    getDisplay() {
        return this.display;
    }
    getPreviousValue() {
        return this.previousValue;
    }
    setPreviousValue(value) {
        this.previousValue = value;
    }
    addPointToDisplay() {
        if (!this.getAlreadyTyped()) {
            this.display.innerHTML += ".";
            this.setAlreadyTyped(true);
        }
    }
    clearDisplay() {
        this.display.innerHTML = "";
        this.setAlreadyTyped(false);
    }
    resetCalculator() {
        this.clearDisplay();
        this.setPreviousValue(0);
    }
    setNumericButtonsFunctionality(s) {
        this.display.innerHTML += s;
    }
    deleteFromDisplay() {
        const newValue = this.display.innerHTML;
        if (newValue[newValue.length - 1] === ".") {
            this.setAlreadyTyped(false);
        }
        this.display.innerHTML = newValue.slice(0, newValue.length - 1);
    }
    addNumbers() {
        let value = parseFloat(this.display.innerHTML);
        this.setPreviousValue(value + this.previousValue);
        this.display.innerHTML = this.previousValue.toString();
    }
    substractNumbers() {
        let value = parseFloat(this.display.innerHTML);
        this.setPreviousValue(value - this.previousValue);
        this.display.innerHTML = this.previousValue.toString();
    }
    multiplyNumbers() {
        let value = parseFloat(this.display.innerHTML);
        this.setPreviousValue(value * this.previousValue);
        this.display.innerHTML = this.previousValue.toString();
    }
    divideNumbers() {
        let value = parseFloat(this.display.innerHTML);
        if (!value) {
            this.display.innerHTML = "Invalid operation";
            return;
        }
        this.setPreviousValue(value / this.previousValue);
        this.display.innerHTML = this.previousValue.toString();
    }
}
