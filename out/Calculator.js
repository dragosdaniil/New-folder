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
            this.getDisplay().innerHTML += ".";
            this.setAlreadyTyped(true);
        }
    }
    clearDisplay() {
        this.getDisplay().innerHTML = "";
        this.setAlreadyTyped(false);
    }
    resetCalculator() {
        this.clearDisplay();
        this.setPreviousValue(0);
    }
    setNumericButtonsFunctionality(s) {
        this.getDisplay().innerHTML += s;
    }
    deleteFromDisplay() {
        const newValue = this.getDisplay().innerHTML;
        if (newValue[newValue.length - 1] === ".") {
            this.setAlreadyTyped(false);
        }
        this.getDisplay().innerHTML = newValue.slice(0, newValue.length - 1);
    }
}
