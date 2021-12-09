export class Calculator {
    constructor(display) {
        this.alreadyTyped = false;
        this.previousValue = 0;
        this.presentValue = "";
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
            this.presentValue += ".";
            this.display.innerHTML = this.presentValue;
            this.setAlreadyTyped(true);
        }
    }
    clearDisplay() {
        this.display.innerHTML = "";
        this.presentValue = "";
        this.setAlreadyTyped(false);
    }
    resetCalculator() {
        this.clearDisplay();
        this.setPreviousValue(0);
    }
    setNumericButtonsFunctionality(s) {
        this.presentValue += s;
        this.display.innerHTML = this.presentValue;
    }
    deleteFromDisplay() {
        const newValue = this.display.innerHTML;
        if (newValue[newValue.length - 1] === ".") {
            this.setAlreadyTyped(false);
        }
        this.display.innerHTML = newValue.slice(0, newValue.length - 1);
    }
    addNumbers() {
        this.presentValue = "";
        this.setPreviousValue(this.previousValue + parseFloat(this.presentValue));
        console.log(this.previousValue);
        console.log(this.presentValue);
        this.display.innerHTML = this.previousValue.toString();
    }
}
