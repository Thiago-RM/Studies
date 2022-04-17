let aula31: string = 'Null Types Lesson 31';
console.log(`\n\n ${aula31}`);

let altura = 12;

//Using Union Types
let alturaOpcional: null | number = 12;
console.log(alturaOpcional);

alturaOpcional = null;
console.log(alturaOpcional);

type Contato ={
    nome: string;
    tel1: string;
    tel2: string | null;
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '992386136',
    tel2:  null,
}

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
