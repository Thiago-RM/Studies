let aula25: string = 'Challenge Create Object';
console.log("\n\n" + aula25);

// A criação da função recebe dois pontos e depois o tipo!
// : tipo
// = atribuindo um objeto a variável!

//Definição do tipo objeto
let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

// Executando

funcionario = {
    supervisores: ['Ana', 'Pedro'],
    baterPonto(horario): string {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário'
    },
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(10));


// New Challenge (in portuguese!)
/*Criar um objeto do tipo aula com:
*
*       Array de strings com os nomes dos alunos;
*       Função de passar a carteirinha no hora certa retonnando uma string
*           < = 8 está no horario
*           > = 8 chegou atrasado!
*/


/*
* Para esta função, primeiramente, determinaremos a sua consturção com seus
* objetos e variáveis
* */

let aula: {
    /* Para "tipar" as funções, após o atributo, coloca-se dois pontos!
    * */
    alunos: string[],
    passarCarteirinha: (hora: number) => string
}

/* Criando a função com os dados a serem passados!*/

aula = {
    alunos: ['Jona', 'Luna'],
    passarCarteirinha(horario: number): string {
        let resposta: string = '';
        if (horario <= 8) {
             return resposta = 'está no horário';
        } else if (horario > 8) {
            return resposta = 'chegou atrasado!';
        }

        return resposta;
    },

}

console.log('\n' + aula.alunos);
console.log(aula.passarCarteirinha(8));
console.log(aula.passarCarteirinha(10));