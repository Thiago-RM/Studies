# Índice
1. [`Alguns passos importantes na criação `](#alguns-passos-importantes-na-criação)  
2. [`Elementos do Angular #01 `](#elementos-do-angular-01)  
3. [`Elementos do Angular #02 `](#elementos-do-angular-02)  
4. [`Elementos do Angular #03 `](#elementos-do-angular-03)  
5. [`Método Criar Produto `](#método-criar-produto)  
6. [`Utilizando o schematic do Material Design `](#utilizando-o-schematic-do-material-design)  

***
<br><br>

# Alguns passos importantes na criação 

1) ng g c [diretório-component/diretório-template(ou outro)/nome-do-component]  

2) Quando importa-se algo (referência a imports), deve-se colocar essa referência no Imports do @NgModules do app.module.ts (Componente
pricipal da aplicação em Angular.)  

Importante: a pasta assets é responsável por armazenar arquivos estáticos!  

mat-elevation-z4 == elemento do Material Toolbar que dá um aspecto elevado a toolbar criada no header!  

***
<br>

# Elementos do Angular #01:  
  
1. Módulo: responsável por agrupar todos os demais elementos como components, directives, pipes
e services relacionados a aplicação.  

2. Componente: classe, esqueleto onde utilizamos os elementos necessários ao funcionamento de uma
aplicação. Possui um escopo próprio.  

> Mais uma vez:  
Relembrnado: componentes são diretivas com templates!

3. Diretivas: componente sem template que é utilizado para tratar a lógica, seja ela de um elemento
de estilo (CSS) ou de comportamento. Tipos de diretivas:

        * Attribute Directives = diretivas de atributos de estilo;  
        * Structural Directives = diretivas de estruutra;  
Diretivas estruturais tem um * (asterisco) na frente!  
Posso utilizar a diretiva por toda a aplicação!  

> Para não esquecer!  
Relembrnado: Diretivas são componentes sem templates!  

1. **Sobre a ligação do html com ts no Angular**:  
  
    a) [ ] --> Property binding = ouve eventos de atributos do component (one way data binding);  

    b) () --> Event binding = executa ações no ts enviadas pelo html;  

    c) [()] --> Two way data binding = mudan ambos os lado (usa ngModel);  

    d) {{ variavel || date }} --> interpolação == utilizando pipes -- colabora com a formatação de um elemento por exemplo.  

OBS: **posso ter uma cadeia de pipes (Chaining).** Exemplo:

```typescript
<p>
    O vencimento é:
    {{ produto. vencimento | date: 'fullDate' | uppercase }}
</p>
```

***
<br>

# Elementos do Angular #02:  

## Programação Reativa:  

* rxjs &nbsp; ⇨ &nbsp;  ReactiveX;  
    
Padrão mais utilizado na web == **Observer!**. A partir disso temos que:  

1. É um padrão orientado a evento.  

## Entendendo Observables:  

> Callbacks: Função como parâmetro para outra função!  
  
> Observables: encapsulam o padrão observer ⇨ De forma reativa age quando o evento acontece! ⇨ Lembrar que são reutilizáveis!
***
<br>

# Elementos do Angular #03: 

## Services

**Conceito:** Tem por finalidade organizar e compartilhar métodos e dados entre componentes.  

    Criando service:
```Ts  
ng g s services/product
```  

Usa-se a rota usando a ***injeção de dpendências!**  
  
**root &nbsp; ⇨&nbsp;** Um aliás para o AppModule dentro da Service, ou, um root injector! O bootstrap = componente de start, o principal da aplicação!  

aspas são usadas para o root, ou seja, o aliás do appModule
  
Veja na linha onde temos providedIn: 'root'. [`Arquivo de referência para o root`](https://github.com/Thiago-RM/Studies/blob/1ed20988c90d05a2f798c1af4e293f1e876fc6aa/Front-Frameworks/Angular/udemy1-CursoAngular9/crud/frontend/src/app/components/product/product.service.ts)  
<br>

# Método Criar Produto 

## Método Post

**Observação:** O post retorna um _**observable**_ tipado e para isso precisamos usar generics no método post (< > _diamond notation_); 


Veja o trecho de código da service onde é montada a notação Observable
 [`Linhas 27 a 30`](https://github.com/Thiago-RM/Studies/blob/1ed20988c90d05a2f798c1af4e293f1e876fc6aa/Front-Frameworks/Angular/udemy1-CursoAngular9/crud/frontend/src/app/components/product/product.service.ts)  

```Ts  
Observable<Product>
```  

<br>

# Utilizando o schematic do Material Design 

## Linha de comando  

```npm  
    ng generate @angular/material:table <component-name>
```  

**Observação:** Sobre o _@ViewChild_ &nbsp; ⇨&nbsp; percorre o html para encontrar o componente visual selecionado! Uma vez encontrado o componente visual do html, ela insere em uma variável selecionada pelo programador! Exemplo:  
  
```Ts  
@ViewChild(MatPaginator) paginator: MatParginator;  
```
<br>
