export class Calculator {

    alreadyTyped = false;
    previousValue = 0;
    presentValue = "";
    operation = "";

    constructor(display) {
        this.display = display;
    }
    addPointToDisplay() {
        if (!this.getAlreadyTyped()) {
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
        this.previousValue = 0;
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

    addNumbers() {
        this.previousValue += parseFloat(this.presentValue);
        this.display.innerHTML = this.previousValue.toString();
        this.presentValue = "";
    }

    substractNumbers() {
        this.previousValue -= parseFloat(this.presentValue);
        this.display.innerHTML = this.previousValue.toString();
        this.presentValue = "";
    }

    multiplyNumbers() {
        this.previousValue *= parseFloat(this.presentValue)
        this.display.innerHTML = this.previousValue.toString();
        this.presentValue = "";
    }

    divideNumbers() {
        if (this.presentValue) {
            this.previousValue /= parseFloat(this.presentValue);
            this.display.innerHTML = this.previousValue.toString();
        } else {
            this.display.innerHTML = "Invalid operation!";
        }
        this.presentValue = "";
    }

    setOperation(e) {
        if (e.target.hasAttribute("operation")) this.operation = e.target.getAttribute("operation");
        console.log(this.operation)
    }

    equal() {
        switch (this.operation) {
            case "add":
                console.log("In ADD")
                this.addNumbers();
                break;
            case "substract":
                this.substract();
                break;
            case "multiply":
                this.multiplty();
                break;
            case "divide":
                this.divideNumbers();
                break;
        }
    }
}