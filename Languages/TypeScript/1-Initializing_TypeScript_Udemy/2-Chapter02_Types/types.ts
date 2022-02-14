// string type in javascript
let theName = 'Pedro';
console.log(theName);

let idade = 27;
console.log(idade);

// Comment in portuguese:
/* Nem sempre o compilador determinará o tipo de variável, ou seja
* caso ela não seja inicializada. Exemplo: */

// This is a dinamic variable!
/* let minhaIdade; */

let minhaIdade: number; //specifying the type of the variable
minhaIdade = 36;

console.log(typeof minhaIdade);
// minhaIdade = '36';

//Type of variables

let theFirstName: string = 'First name = Pedro';
console.log(theFirstName);

let age: number = 27;
console.log('Your age is: ' + age);

let possuiHobbies: boolean;
possuiHobbies = true;
console.log('Do you have any hobbies? ' + possuiHobbies);