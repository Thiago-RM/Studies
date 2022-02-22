let aula19: string = 'Lesson about enums';
console.log("\n\n" + aula19);

enum Cor {
    Cinza,
    Verde = 100,
    Azul
}

let minhaCor : Cor = Cor.Verde;
console.log(minhaCor);