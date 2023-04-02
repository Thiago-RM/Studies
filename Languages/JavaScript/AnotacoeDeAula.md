 # Index  
1. [`Anotações Gerais `](#anotações-gerais)  
2. [`Anotações sobre sintaxe - ATRIBUTO COMPOSTO  `](#anotações-sobre-sintaxe-atributo-composto)  

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

  
