let aula32: string = 'Challenge Lesson 32';
console.log(`\n\n ${aula32}`);

// In portuguese:
/*
*  Transformar os códigos JS abaixo em TS
* */

/* Exemplo Conta Bancária*/
type contaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}
let contaBancaria: contaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor;
    }

}
console.log(contaBancaria.saldo);
console.log(`Fim da aplicação.`);

/*
Resetting the application to receive the 3000 deposit from the account
holder, otherwise, the amount will be added to the previous deposit
*/
// contaBancaria.saldo = 0;

/* Exemplo Correntista*/
type correntista = {
    nome: string,
    contaBancaria: contaBancaria,
    contatos: string[];
}

var correntista: correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['+55(62)612-1212 , +55(62)612-1010']
}

// Making a deposit
correntista.contaBancaria.depositar(3000);
console.log(correntista);