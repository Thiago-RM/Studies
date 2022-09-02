const class48: string = 'Default Parameters';
console.log(`\n\n ${class48}`);

// Using parameters in TS:

function contagemRegressiva(inicio: number = 3): void {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!" + `\n\n`);
}

contagemRegressiva();
contagemRegressiva(5);

// 2º example:

function contagemRegressivaNovo(inicio: number = 5,
                                fim: number = inicio - 5): void {
    console.log(`\n\n Início: ` + inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!")
}

contagemRegressivaNovo();
contagemRegressivaNovo(5);
contagemRegressivaNovo(3);