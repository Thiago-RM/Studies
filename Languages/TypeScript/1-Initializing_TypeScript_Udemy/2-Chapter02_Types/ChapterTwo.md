# Class Guidelines

For JavaScript and what Type inherited:  
1) Every character declared between ' ' is string;  
2) All numbers, even those with floating point are of type number;  
3) Boolean will be boolean in both cases  

 **typeof:** Determines the type;  
 With a dynamic variable I can apply any value, that the compiler will accept it,
 be it string, number or boolean, for example:  

~~~js
let minhaIdade;
minhaIdade = 36;
console.log(typeof minhaIdade);
minhaIdade = '36';
~~~   

## Class 18 -  Tuplas

It is an array with predefined types in its filling.
For example: one number and two string types.  

## Class 19 -  Enums
When assigning fixed values, the enum follows the established
numerical order from the immediately preceding member. For example:  

~~~typescript
enum Cor {
 Cinza,
 Verde,
 Azul
}

let minhaCor : Cor = Cor.Verde;
console.log(minhaCor);

//if the "Verde" color is equal to 100, 
// then the "Azul" will receive 101,but "Grey" will 
// continue to receive 0
~~~  
Each enum value can be determined by the programmer