let aula19: string = 'Aula sobre enums';
console.log("\n\n" + aula19);

enum Cor {
    Cinza,
    Verde = 100,
    Azul
}

let minhaCor : Cor = Cor.Verde;
console.log(minhaCor);