/********************************************************************* 
* @author     Arne De Corte
* @created    14/02/2018
* @modified   14/02/2018
* @copyright  Copyright © 2016-2017 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/


let number = parseInt(prompt('Geef een eerste getal in'));

number = parseFloat(number);

let number2 = parseInt(prompt('Geef een tweede getal in'));

number2 = parseFloat(number2);

let sum = number + number2;

let text = `De som van ${number} en ${number2} is ${sum}`;

document.write(text);



//Breng het resultaat op het scherm

let i = 7;
console.log(i); //7 want ongewijzigd
console.log(i++); // 7 want eerste gelogd, dan pas 1 aan toevoegen
console.log(i); // 8, 1 is toegevoegd in voorgaande statement
console.log(++i); // 9, 1 toevoegen, dan loggen




console.log('dit is wat tekst');
console.log(number);

