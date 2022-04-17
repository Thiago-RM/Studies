let refazendoDesafio: string = 'Challenge Lesson 32 again';
console.log(`\n\n ${refazendoDesafio}`);

/*
*   Criando o objeto com seus atributos
* */

//  Exercício Conta Bancária 2!
type contaBancariaE2 = {
    saldo2: number,
    depositar2: (valor: number) => void;
}

let contaBancaria2: contaBancariaE2 = {
    saldo2: 3500,
    depositar2(valor: number) {
       this.saldo2 += valor;
    }
}
console.log(contaBancaria2);

type correntista2 = {
    nome2: string,
    contaBancariaCorrentista: contaBancariaE2,
    contatos2: string[]
}

let correntista2: correntista2 = {
    nome2: 'Maria Joana',
    contaBancariaCorrentista: contaBancaria2,
    contatos2: ['61 993835-44, 61 99865-47']
}
correntista2.contaBancariaCorrentista.depositar2(1000);
console.log(correntista2);