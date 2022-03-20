let aula25: string = 'Challenge Create Object';
console.log("\n\n" + aula25);

//A criação da função recebe dois pontos e depois o tipo!
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