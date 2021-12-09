export class Calculator{

    private readonly display: Element;
    private alreadyTyped: boolean = false;
    private previousValue: number = 0;
    private presentValue: string = "";

    constructor(display: Element){
        this.display = display;
    }

    setAlreadyTyped(value:boolean): void{
        this.alreadyTyped = value;
    }

    getAlreadyTyped(): boolean{
        return this.alreadyTyped;
    }

    public getDisplay(): Element {
        return this.display;
    }
    
    public getPreviousValue(): number | null{
        return this.previousValue;
    }

    public setPreviousValue(value: number): void{
        this.previousValue = value;
    }

    public addPointToDisplay(): void{
        if(!this.getAlreadyTyped()){
            this.presentValue += ".";
            this.display.innerHTML = this.presentValue;
            this.setAlreadyTyped(true);
        }
    }

    public clearDisplay(): void{
        this.display.innerHTML = "";
        this.presentValue = "";
        this.setAlreadyTyped(false);
    }

    public resetCalculator(){
        this.clearDisplay();
        this.setPreviousValue(0);
    }

    public setNumericButtonsFunctionality(s: string): void{
        this.presentValue += s;
        this.display.innerHTML = this.presentValue;
    }

    public deleteFromDisplay(){
        const newValue = this.display.innerHTML;
        if(newValue[newValue.length - 1] === "."){
            this.setAlreadyTyped(false);
        }
        this.display.innerHTML = newValue.slice(0, newValue.length - 1);
    }

    public addNumbers(){
        this.presentValue = "";
        this.setPreviousValue(
            this.previousValue + parseFloat(this.presentValue)
        )
        console.log(this.previousValue);
        console.log(this.presentValue);
        this.display.innerHTML = this.previousValue.toString();
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