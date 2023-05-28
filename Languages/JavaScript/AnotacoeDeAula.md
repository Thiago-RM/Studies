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
***
<br><br>

# 1) Anotações Gerais  
  
Orientação a objetos no JS = Objetos que herdam objetos.  

baseada em protótipos.

$ --> usado por bibliotecas e frameworks para a transmissão de dependências!

$ --> cifrão usado para injeção de dependência de frameworks --> Exemplo : $http; $escope (AngularJs)

_ (Underline) --> utilizado dentro de uma função (para um membro exclusivo), ou seja, representa o método private em uma função, deve ser chamada dentro do seu escopo. 

> Em **Javascript** um objeto é uma coleção dinâmica,  
> um array de chaves e valores!  
  
# 2) Anotações sobre sintaxe - ATRIBUTO COMPOSTO  
  
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


# 3) Funções  
   
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
Exemplo mais convencional de função. Seria aquela que estamos mais abtuados a ver!  

A **Funcition Declaration** é carregada antes da interpretação, ou seja, invocá-la antes não faz diferença em seu funcionamento.   
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
<br>  
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
<br>  

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