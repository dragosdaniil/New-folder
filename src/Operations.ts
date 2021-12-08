function addNumbers(a:number, b:number): number{
    return a + b;
}

function substractNumbers(a:number, b:number): number{
    return a - b;
}

function multiplyNumbers(a:number, b:number): number{
    return a * b;
}

function divideNumbers(a:number, b:number): string|number{
    if(b === 0){
        return "Division by 0 is not defined!";
    }

    return a/b;
}

export {addNumbers, substractNumbers, multiplyNumbers, divideNumbers}