import { DivisionError } from "./CustomErrors.js";

function addNumbers(a, b) {
    return a + b;
}

function substractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        throw new DivisionError("Division by zero is not possible!");
    }
    return a / b;
}

export { addNumbers, substractNumbers, multiplyNumbers, divideNumbers }