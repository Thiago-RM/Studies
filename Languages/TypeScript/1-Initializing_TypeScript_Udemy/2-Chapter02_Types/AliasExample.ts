let aula27: string = 'Alias Example';
console.log("\n\n" + aula27);

type Funcionarios = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}


let funcionarios: Funcionarios = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario): string {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário'
    },
}

console.log(funcionarios.supervisores);
console.log(funcionarios.baterPonto(8));
console.log(funcionarios.baterPonto(10));


