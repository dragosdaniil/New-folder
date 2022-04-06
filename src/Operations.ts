import { DivisionError } from "./CustomErrors.js";

function addNumbers(a: number, b: number): number {
    return a + b;
}

function substractNumbers(a: number, b: number): number {
    return a - b;
}

function multiplyNumbers(a: number, b: number): number {
    return a * b;
}

function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new DivisionError("Division by zero is not possible!");
    }
    return a / b;
}

export { addNumbers, substractNumbers, multiplyNumbers, divideNumbers }