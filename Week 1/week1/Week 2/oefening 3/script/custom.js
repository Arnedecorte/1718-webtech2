// 3 variabelen met beestjes
const animal1 ='elephant';
const animal2 ='cockroach';
const animal3 ='zebra';


// variabele van het type array
let animals = [];


// variablen in de array steken
animals.push(animal1);
animals.push(animal2);
animals.push(animal3);


// manueel alle string concatteneren (samenvoegen)
let allAnimals= animals[0]+animals[1]+animals[2];

//op scherm zetten 
document.write (allAnimals);
document.write ('<br>-------<br>');


// tweede manier
let allAnimals2= '';

// loopen door de array
for(let i = 0; i < animals.length; i++) {

// resultaat loggen van elk element uit de array 
    console.log(animals[i]);

    // de strings concatteren
    allAnimals2 += animals [i];
}

// samengevoegde strings op het scherm schrijven
document.write(allAnimals2);

