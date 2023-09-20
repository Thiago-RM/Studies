 # Index  
[`1) Anotações Gerais`](#1-anotações-gerais)  
[`2) Anotações sobre sintaxe - ATRIBUTO COMPOSTO`](#2-anotações-sobre-sintaxe---ATRIBUTO-COMPOSTO)  
[`3) Funções`](#3-funções)  
&nbsp;&nbsp;&nbsp;&nbsp;[`3.1) Tipos de Funções`](#31-tipos-de-funções)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.1.1) Funciton Declaration`](#311-funciton-declaration)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.1.2) Funciton Expression`](#312-funciton-expression)  
&nbsp;&nbsp;&nbsp;&nbsp;[`3.2) Exemplo de invocação de funções `](#32-exemplo-de-invocação-de-funções)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.2.1) Exemplo de invocação com lambda `](#321-exemplo-de-invocação-com-lambda)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.2.2) Exemplo de invocação função de uma função `](#322-exemplo-de-invocação-função-de-uma-função)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.2.3) Invocação de função por Objeto `](#323-invocação-de-função-por-objeto)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.2.4) Invocação de função por call e apply `](#324-invocação-de-função-por-call-e-apply)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.2.5) Invocação de função por meio do new `](#325-invocação-de-função-por-meio-do-new)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.3) Funções - Continuação`](#33-funções---continuação)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`3.3.1) Comunicando a função com o "exterior" `](#331-comunicando-a-função-com-o-exterior)  
[`4) Arrays`](#4-arrays)  
&nbsp;&nbsp;&nbsp;&nbsp;[`4.1) A API de Arrays em JS`](#41-a-api-de-arrays-em-js)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.1) valueOf()`](#411-valueof)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.2) length()`](#412-length)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.3) push()`](#413-push)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.4) pop()`](#414-pop)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.5) unshift()`](#415-unshift)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.6) shift()`](#416-shift)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.7) splice()`](#417-splice) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.8) forEach()`](#418-forEach) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.9) filter()`](#419-filter) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.10) every()`](#4110-every) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.11) some()`](#4111-some) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.12) map()`](#4112-map) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.13) reduce()`](#4113-reduce) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.14) concat()`](#4114-concat) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.15) slice()`](#4115-slice) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.16) reverse()`](#4116-reverse) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.17) sort()`](#4117-sort) 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`4.1.18) join()`](#4118-join) 
<br>

# 1) Anotações Gerais  
<br>

Orientação a objetos no JS = Objetos que herdam objetos.  

baseada em protótipos.

$ --> usado por bibliotecas e frameworks para a transmissão de dependências!

$ --> cifrão usado para injeção de dependência de frameworks --> Exemplo : $http; $escope (AngularJs)

_ (Underline) --> utilizado dentro de uma função (para um membro exclusivo), ou seja, representa o método private em uma função, deve ser chamada dentro do seu escopo. 

> Em **Javascript** um objeto é uma coleção dinâmica,  
> um array de chaves e valores!  
  
[Voltar ao Índice](#index)
<br>
  
# 2) Anotações sobre sintaxe - ATRIBUTO COMPOSTO  
<br>

["atributo composto"] = pode ser usado dessa forma quando definido um objeto. Exemplo

```js
var meuObjeto = {
    'cor dos olhos' = 'azul',
    idade = 10
}  
  
meuObjeto["cor dos olhos"] = 'castanho';  
  
// Novo Objeto  
  
var meuObjeto = {
    'cor dos olhos' = 'castanho',
    idade = 10
}
```
[Voltar ao Índice](#index)
<br>

# 3) Funções  
<br>

Podem simular:  
+ Classes;  
+ Métodos;  
+ Construtores; e  
+ Módulo;  

As variáveis em JS podem ser outras funções:  
```js
const x = function (a, b) {
    return a * b
    };
```
  
## 3.1) Tipos de Funções  
  <br>

### 3.1.1) Funciton Declaration  
  
```js
function soma (a, b) {
    return a + b;
}
```  
Exemplo mais convencional de função. Seria aquela que estamos mais habituados a ver!  

A **Funcition Declaration** é carregada antes da interpretação, ou seja, invocá-la antes não faz diferença em seu funcionamento.  
  
[Voltar ao Índice](#index)
<br> 

### 3.1.2) Funciton Expression
  
```js
var soma = function (a, b) {
    return a + b;
}
```  
Exemplo de função corriqueira nas programações JS, o nome da função passa para a variável nesse caso!  

<br> 

### 
  
```js
var soma = function soma (a, b) {
    return a + b;
}
```  
Nesse caso, temos o nome na função e na variável, auxilia bastante durante debbugings, stack traces e listas de breakpoints!

Agora, a **Function Expression** e a **Function Named Expression** são carregadas durante a interpretação do código, ou seja, primeiro as declaramos e em seguida as invocamos!  
  
[Voltar ao Índice](#index)
<br>

## 3.2) Exemplo de invocação de funções 
<br>

### 3.2.1) Exemplo de invocação com lambda  

```js  
var produto = {
    nome: 'Sapato',
    preco: 150
};

var formulaImpostoA = function (preco) {
 return preco * 0.1;
};

var calcularPreco = function (produto, formulaImposto) {
    return produto.preco + formulaImposto(produto.preco);
};

console.log(calcularPreco(produto, formulaImpostoA));
console.log(formulaImposto);

```  
<br>

### 3.2.2) Exemplo de invocação função de uma função   

```js  
var helloWorld =  function () {
    return function () {
        return "Hello World";
    };
};

/* RESULTADOS */  

/* 
 * console.log(helloWorld);
 * Retorno = [Function]
 * 
 * console.log(helloWorld());
 * Retorno = [Funcition]
 * Chamou somente a função externa!
 * 
 * 
 * console.log(helloWorld()());
 * Retorno = Hello World
 * Nesse caso estamos chamando a função da função!
 */ 
```  
<br>

### 3.2.3) Invocação de função por Objeto   
  
>   Lembrando novamente: **this** define o escopo ao qual estou me referindo!!!  
  
```js  
var getIdade = function () {
    return this.idade;
};

var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: getIdade
};

console.log(getIdade);
console.log(pessoa.getIdade());

/* RESULTADOS */  

/* 
 * console.log(getIdade());
 * console.log(pessoa.getIdade());
 * 
 * Retorno = [Function: getIdade]
 * 20
 * 
 * Nesse caso o this refere-se a idade do objeto pessoa 
 * (idade não faz parte do escopo global)!
 */ 
```  
<br>

### 3.2.4) Invocação de função por call e apply   

Call e Apply indicam em qual escopo uma função deve ser utilizada! A diferença é como tais métodos são chamados!  
  
```js  


var getIdade = function (extra) {
    return this.idade + extra;
};

var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: getIdade
};

getIdade.call(pessoa, 2); // Aqui, passamos parâmetros abertos

getIdade.apply(pessoa, [2]); // Aqui, passamos parâmetros na forma de arrays!

/* RESULTADOS */  

/* 
 * 20
 */ 
```  
<br>

### 3.2.5) Invocação de função por meio do new 

**Funções Fábricas:** Retrona um novo objeto, direto, não depende de instâncias!

```js  
var criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

/* RESULTADOS */

/* 
 * console.log(criarPessoa('Pedro', 20));
 * 
 * {nome: 'Pedro', idade: 20}
 * 
 */
``` 
<br>

**Funções Construtoras:** Retrona um novo objeto, usa o New, começa com letra maiúsculas!


```js  
var Pessoa = function (nome, idade) {
        this.nome = nome;
        this.idade =  idade;
};

/* RESULTADOS */
   
/* 
 * console.log(new Pessoa('Pedro', 21));
 * console.log(new Pessoa('Maria', 31));
 * 
 * Resultado:
 * 
 * {nome: 'Pedro', idade: 21}
 * {nome: 'Maria', idade: 31}
 * 
 */
```  
> Observe que o objeto deixa de existir (return com chaves) e o **this** referencia os atributos nome e idade.  
  
[Voltar ao Índice](#index)
<br>

## 3.3) Funções - Continuação
<br>

Funções utilizam o escopo global para se comunicar, pois não possuem um **linker** para realizar comunicações!  
<br>

No exemplo abaixo, vemos que o escopo global está poluído, de maneira a complicar a interpretação do trecho de código!  

```js  
var counter = 0;
var add = function () {
    return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

/* RESULTADOS */
   
/* 
 * 1 
 * 2
 * 3
 * 
 */  

var itens = [];
var add = function (item) {
    itens.push(item);
    return itens;
};
console.log(add());
console.log(add());
console.log(add());

/* RESULTADOS */
   
/* 
 * [A]
 * [A, B]
 * [A, B, C]
 * 
 */  
``` 
<br>

### 3.3.1) Comunicando a função com o "exterior"  
### GERANDO ENCAPSULAMENTO POR MEIO DA FACTORY FUNCTION (OU FUNÇÃO FÁBRICA!)  
  
```js
var createCounter = function () {
    var value = 0;
    // RETORNANDO UM OBJETO!
    return {
        add: function () {
            return ++value;
        }
    };
};
var counter = createCounter();
console.log(counter.value); 
console.log(counter.add());
```
<br>

### GERANDO ENCAPSULAMENTO POR MEIO DA CONSTRUCTOR FUNCTION (OU FUNÇÃO CONSTRUTORA!)  

```js
var Counter = function () {
    var value = 0;
    // UTILIZANDO O THIS (REFERENCE CONSTRUCTOR)
    
    this.add = function () {
        return value++;
    }.
};
var counter = new Counter();
console.log(counter.value); 
console.log(counter.add());
```  
<br>  

### GERANDO ENCAPSULAMENTO POR MEIO DA IIFE (Immediately-Invoked Function Expression)  
  
```js
var counter = (
    function () {
        var value = 0;
        return {
            add: function() {
                return value++;
            }
        };
    }
)();
console.log(counter.value); 
console.log(counter.add());
console.log(counter.add());
```  
<br>

### GERANDO ENCAPSULAMENTO POR MEIO DA IIFE (Immediately-Invoked Function Expression) E TORNANDO MÉTODOS E ATRIBUTOS PRIVADOS!  
    
```js
var counter = (
    function () {
        var _value = 0;
        var _add = function() {
                return _value++;
        };
        var _reset = function() {
            _value = 0;
        };
        return {
            add: _add,
            reset: _reset,
        };
    }
)();
console.log(counter.value); 
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());
```  
  
[Voltar ao Índice](#index)
<br>

# 4) Arrays  
<br>

    Arrays em JavaScript não são como arrays convencionais de outras linguagens, na verdade, eles são objetos especiais que oferecem meios para manipular propriedades através de índices!  

```js
    /* Declaração simples de um array */
    var carros = [];

    /* Outro exemplo: Array inicializado! */
    var carros = ['Ford', 'Fiat', 'Volks'];

    /* Construindo um array com função construtora: */
    var carros = new Array();

    /* Construindo um array com função construtora definindo uma quantidade inicial de elementos: */
    var carros = new Array(10);
```  
  
Lembrando que em JavaScript, indicar a quantidade de elementos não significa limitá-lo, pois o Array não tem tamanho fixo.  
No array do exemplo anterior, somente indicamos quantas posições esse array pode ter, ou seja, trata-se de inicializar o array com 10 posições!  
  
## 4.1) A API de Arrays em JS  
### 4.1.1) valueOf()  

    O valueOf() apenas demonstra o array em tela:

```js
    var carros = ["Ka", "Corsa", "Palio"];
    > carros.valueOf();

    /* RESULTADO 
        * ["Ka", "Corsa", "Palio"]
        */
```

### 4.1.2) length()  

    O length() retorna o tamanho do array em tela:  
  
```js
    var carros = ["Ka", "Corsa", "Palio"];
    > carros.length();

    /* RESULTADO 
     * 3
     */
```  
  
### 4.1.3) push()  

    Insere um elemento no final do array!  
  
```js
    var carros = ["Ka", "Corsa", "Palio"];
    > carros.push("Gol");

    /* RESULTADO 
     * ["Ka", "Corsa", "Palio", "Gol"];
     */
``` 
  
### 4.1.4) pop()  

    Remove um elemento no final do array!  
  
```js
    var carros = ["Ka", "Corsa", "Palio", "Gol"];
    > carros.pop();

    /* RESULTADO 
     * ["Ka", "Corsa", "Palio"];
     */
```  

### 4.1.5) unshift()  

    Insere um elemento no início do array!  
  
```js
    var carros = ["Ka", "Corsa", "Palio"];
    > carros.unshift("Gol");

    /* RESULTADO 
     * ["Gol", "Ka", "Corsa", "Palio"];
     */
```  

### 4.1.6) shift()  

    Remove um elemento no início do array!  
  
```js
    var carros = ["Gol", "Ka", "Corsa", "Palio"];
    > carros.shift("Gol");

    /* RESULTADO 
     * ["Ka", "Corsa", "Palio"];
     */
```  
  
### 4.1.7) splice()  

    Permite trocar, remover e inserir um elemento em uma determinada posição do array!  
  
```js
    var carros = ["Ka", "Corsa", "Palio"];
    > carros.splice(1, 1);

    /* RESULTADO 
     *   Remoção de elementos!
     * ['Corsa']
     *
     * > carros
     * 
     * ["Ka", "Palio"];
     */
```  

```js
    var carros = ["Ka", "Corsa", "Palio"];  
    > carros.splice(1, 1, "Sonic");  

    /*    
     * Para esse caso, o terceiro parâmetro será responsável 
     * pela inserção! 
     * Já o segundo parâmetro (2) é responsável pela remoção!
     */  
  
    /* RESULTADO 
     *   Troca de elementos!
     * ['Corsa']
     *
     * > carros
     * 
     * ["Ka", "Sonic", "Palio"];
     */
```  

```js
    var carros = ["Ka", "Sonic", "Palio"];  
    > carros.splice(1, 0, "Corsa");  

    /* RESULTADO 
     *   Inserção de elementos!
     * []
     *
     * > carros
     * 
     * ["Ka", "Corsa", "Sonic", "Palio"];
     */
```    
[Voltar ao Índice](#index)
<br>

### 4.1.8) forEach()  

    Permite iterar índice a índice do array, assim como um for clássico (utilizando incremento)!  
  
```js
    var carros = ["Ka", "Corsa", "Palio"];
    
    > carros.forEach(function (elementos) {
       console.log(elementos); 
    });

    /* RESULTADO 
     * Ka
     * Corsa
     * Sonic
     * Palio
     * undefined
     */
```  

```js
    /*For Clássico*/
    var carros = ["Ka", "Corsa", "Palio"];
    
    > for(var i = 0; i < carros.length; i++) {
        console.log(carros[i]);
    }

    /* RESULTADO 
     * Ka
     * Corsa
     * Sonic
     * Palio
     * undefined
     */
```
[Voltar ao Índice](#index)  
<br>

### 4.1.9) filter()  
  
Nos permite "filtrar" uma busca de acordo com um elemento do array!  

```js
    var carros = [];
    carros[0] = {marca: "Ford", modelo: "Ka"}; 
    carros[1] = {marca: "Chevrolet", modelo: "Corsa"}; 
    carros[2] = {marca: "Fiat", modelo: "Palio"};

    carros.filter(function (elemento) {
        return elemento.marca === "Ford";
    });

    
    /* RESULTADO 
     * >[{marca: "Ford", modelo: "Ka"}]
     */
```  
  
[Voltar ao Índice](#index)
<br>

### 4.1.10) every()  
  
Nos permite "saber" se todos os elementos são de um determinado tipo!  

```js
    var carros = [];
    carros[0] = {marca: "Ford", modelo: "Ka"}; 
    carros[1] = {marca: "Chevrolet", modelo: "Corsa"}; 
    carros[2] = {marca: "Fiat", modelo: "Palio"};

    carros.every(function (elemento) {
        return elemento.marca === "Ford";
    });
    
    /* RESULTADO 
     * > false
     */
```  
  
[Voltar ao Índice](#index)
<br>

### 4.1.11) some()  
  
Nos permite "saber" se algum dos elementos são de um determinado tipo!  

```js
    var carros = [];
    carros[0] = {marca: "Ford", modelo: "Ka"}; 
    carros[1] = {marca: "Chevrolet", modelo: "Corsa"}; 
    carros[2] = {marca: "Fiat", modelo: "Palio"};

    carros.some(function (elemento) {
        return elemento.marca === "Ford";
    });
    
    /* RESULTADO 
     * > true
     */
```  
  
[Voltar ao Índice](#index)  
<br>

## 4.1.12) map()  
  
Nos permite mapear os elementos os transformando, de forma a derivar um novo array!  

```js
    var carros = [];
    carros[0] = {marca: "Ford", modelo: "Ka"}; 
    carros[1] = {marca: "Chevrolet", modelo: "Corsa"}; 
    carros[2] = {marca: "Fiat", modelo: "Palio"};

    carros.map(function (elemento) {
        return elemento.marca;
    });
    
    /* RESULTADO 
     * > [ 'Ford', 'Chevrolet', 'Fiat']
     */
```  
  
[Voltar ao Índice](#index)  
<br>

## 4.1.13) reduce()  
  
Nos permite fazer um processamento e uma acumulação em um array!  

```js
    var carros = [];
    carros[0] = {modelo: "Ka", preco: 28800};
    carros[1] = {modelo: "Corsa", preco: 34750}; 
    carros[2] = {modelo: "Palio", preco: 32000};

    carros.reduce(function (prev, curl) {
        return prev + cur.preco;
    }, 0);
    
    // o 0 aqui em questão é onde começa o valor de soma, ou seja, o termo
    // prev!

    /* RESULTADO 
     * > 95550
     */
```  
  
[Voltar ao Índice](#index)  
<br>

## 4.1.14) concat()  
  
Não muda o estado original do array, na verdade ele gera um novo array!  

```js
    var carros = ["Ka", "Corsa", "Palio"]; 
    var motos = ["Honda", "Yamaha"];
    
    var veiculos = carros.concat(motos);
    veiculos.toString(); 

    /* RESULTADO 
     * > ["Ka", "Corsa", "Palio", "Honda", "Yamaha"]
     */
```  
  
[Voltar ao Índice](#index)  
<br>

## 4.1.15) slice()  
  
Serve para "fatiar" o array, começando em uma posição e terminando em outra. Lembrando que a posição será o índice menos 1.

```js
    var carros = [];  
    carros[0] = "Ka";  
    carros[1] = "Corsa";  
    carros[2] = "Palio";  
    carros[3] = "Gol";  
    carros.slice(0,2); // ["Ka", "Corsa"]  
    carros.slice(1,3); // ["Corsa", "Palio"]  
    carros.slice(2); // ["Palio", "Gol"]  
```  
  
[Voltar ao Índice](#index)  
<br>

## 4.1.16) reverse()  
  
Reverte os índices do array.

```js
    var carros = [];  
    carros[0] = "Ka";  
    carros[1] = "Corsa";  
    carros[2] = "Palio";  
    carros[3] = "Gol";  

    carros.reverse();

    /*
    * RESULTADO
    * ['Gol',
    *  'Palio',
    *  'Corsa',
    *  'Ka'
    * ]
    */  
```  
  
[Voltar ao Índice](#index)  
<br>

## 4.1.17) sort()  
  
Ordena os elementos do array.

```js
    var carros = [];
    carros[0] = {modelo: "Ka", preco: 28800};
    carros[1] = {modelo: "Corsa", preco: 34750}; 
    carros[2] = {modelo: "Palio", preco: 32000};

    carros.sort(function (a, b) {
        return a.preco - b.preco;
    }, 0);

    /*
    * RESULTADO
    * carros.valueOf();
    * > ['Ka', 'Palio', 'Corsa']
    */  
```  
    Outro exemplo

```js
    var carros = [];
    carros[0] = {modelo: "Ka", preco: 28800};
    carros[1] = {modelo: "Corsa", preco: 34750}; 
    carros[2] = {modelo: "Palio", preco: 32000};

    carros.sort(function (a, b) {
        return a.preco - b.preco;
    }, 0);

    

    /*
    * RESULTADO
    * carros.valueOf();
    * > ['Ka', 'Palio', 'Corsa']
    */  
```  

    O sort, tal como está na função acima, pode retornar três valores:  
    1) Positivo: posição b vai a frente da posição a;  
    2) Negativo: posição a vai a frente da posição b;  
    3) 0: Não há mudança na posição dos elementos!  
  
[Voltar ao Índice](#index)  
<br>


## 4.1.18) join()  
  
Junta os elementos de um array e utiliza um separador.

```js
    var carros = [];  
    carros[0] = "Ka";  
    carros[1] = "Corsa";  
    carros[2] = "Palio";  
    carros[3] = "Gol";  

    carros.join(";");


    /*
    * RESULTADO
    * > 'Ka;Corsa;Palio;Gol']
    */  
```  
   
[Voltar ao Índice](#index)  
<br>

