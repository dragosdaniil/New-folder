export class Calculator {

    alreadyTyped = false;
    previousValue = 0;
    presentValue = "";
    operation = "";

    constructor(display) {
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
        this.setPreviousValue(
            this.previousValue + parseFloat(this.presentValue)
        );
        this.display.innerHTML = this.previousValue.toString();
        this.presentValue = "";
    }

    setOperation(e) {
        const element = e.target;
        if (e.target) this.operation = e.target.innerHTML;
    }

    equal() {

        }
        // public substractNumbers(){
        //     let value = parseFloat(this.display.innerHTML);
        //     this.setPreviousValue(value - this.previousValue);
        //     this.display.innerHTML = this.previousValue.toString();
        // }

    // public multiplyNumbers(){
    //     let value = parseFloat(this.display.innerHTML);
    //     this.setPreviousValue(value * this.previousValue);
    //     this.display.innerHTML = this.previousValue.toString();
    // }

    // public divideNumbers(){
    //     let value = parseFloat(this.display.innerHTML);
    //     if(!value){
    //         this.display.innerHTML = "Invalid operation";
    //         return;
    //     }
    //     this.setPreviousValue(value / this.previousValue);
    //     this.display.innerHTML = this.previousValue.toString();
    // }
}