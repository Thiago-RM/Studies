let aula22: string = 'Class about functions';
console.log("\n\n" + aula22);

var onlyName = "João"

//typing the function
function returnName(): string {
    return onlyName;
}
console.log(returnName());

// void type functions do not allow return
function digaOi():void {
    console.log('Oi');
}
digaOi();

// parameters function
function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}
console.log(multiplicar(2.5, 2));
