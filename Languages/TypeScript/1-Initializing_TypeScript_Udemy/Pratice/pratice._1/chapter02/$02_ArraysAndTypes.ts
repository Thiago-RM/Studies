const revision_02: string = 'Basic review of Arrays and Types'
console.log(`\n ${revision_02}`)


console.log('\n******************************************')

console.log('ARRAYS DIRECT STATEMNET')
let arrayDirectStament = ['Lavar', 'Passar', 'Cozinhar'];
console.log(arrayDirectStament);
console.log(arrayDirectStament[2]);

console.log('\n******************************************')

console.log('ARRAYS WITH TYPE')

let arrayWithType: number[] = [1, 2, 3, 4];
console.log(arrayWithType);
console.log(arrayWithType[3]);

console.log('\n******************************************')

console.log('ARRAYS WITH TYPE ANY')

let arrayWithAny: any[] = [1, 2, 3, 4];
console.log(arrayWithAny);
console.log(arrayWithAny[3]);

arrayWithAny =['blas'];
console.log(arrayWithAny)

let declareOtherArray: boolean[] =[true, false, true, true];
console.log(declareOtherArray);
console.log(declareOtherArray[2]);