export class Calculator{

    private readonly display: Element;
    private alreadyTyped: boolean = false;
    private previousValue: number = 0;

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
    
    public getPreviousValue(): number{
        return this.previousValue;
    }

    public setPreviousValue(value: number): void{
        this.previousValue = value;
    }

    public addPointToDisplay(): void{
        if(!this.getAlreadyTyped()){
            this.getDisplay().innerHTML += ".";
            this.setAlreadyTyped(true);
        }
    }

    public clearDisplay(): void{
        this.getDisplay().innerHTML = "";
        this.setAlreadyTyped(false);
    }

    public resetCalculator(){
        this.clearDisplay();
        this.setPreviousValue(0);
    }

    public setNumericButtonsFunctionality(s: string): void{
        this.getDisplay().innerHTML += s;
    }

    public deleteFromDisplay(){
        const newValue = this.getDisplay().innerHTML;
        if(newValue[newValue.length - 1] === "."){
            this.setAlreadyTyped(false);
        }
        this.getDisplay().innerHTML = newValue.slice(0, newValue.length - 1);
    }
}