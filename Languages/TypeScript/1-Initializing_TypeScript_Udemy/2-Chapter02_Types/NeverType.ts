let aula30: string = 'Never Type';
console.log(`\n\n ${aula30}`);


function falha(msg: string): never {
    throw new Error(msg);
}

// This is a Typescript/JavascriptObject
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
}

produto.validarProduto();