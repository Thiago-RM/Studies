const class47: string = 'Arrow Function"';
console.log(`\n\n ${class47}`);

// This a simple example of arrow function:

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(4, 3));


// Used a braces in function

const somar = (n1: number, n2: number): number => {
    return n1 + n2;
}
console.log(somar(4, -3));

//function like a tipe (anonymous function)

const multiplier = function (n1: number, n2: number) {
    return n1 * n2;
}
console.log(multiplier(10, 3));

// "Common" function
function mutliplication(n1: number, n2: number) {
    return n1 * n2;
}

console.log(mutliplication(10, 4));


// Empty Fuctions
const saudacao = () => console.log('Teste02');
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa);
falarCom('João');


// This
function normalComThis() {
    // console.log(this);
}
normalComThis();

const normalComThisEspecial = normalComThis.bind(2);
normalComThisEspecial();

// const normalComThisArrow = () => console.log(this, 'Teste');
// normalComThisArrow();