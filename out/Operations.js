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
        return "Division by 0 is not defined!";
    }
    return a / b;
}
export { addNumbers, substractNumbers, multiplyNumbers, divideNumbers };
