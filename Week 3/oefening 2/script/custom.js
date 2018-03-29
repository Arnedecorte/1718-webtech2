let popcorn = 3;
let hamburger = 4;
let donut = 5;

let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3 = document.getElementById('result3');
let userSolution = document.getElementById('result4');

input1.value= popcorn + popcorn + popcorn;
input2.value= popcorn + hamburger + hamburger;
input3.value= donut*2 + hamburger + donut*2;

// correcte opls berekenen

let correctSolution = hamburger + donut * popcorn;

// button declareren

let checkButton = document.getElementById ('check');

checkButton.addEventListener('click', function() {
    if(correctSolution == userSolution.value){
        alert('juist');
    } else {
        alert ('fout');
    }
   });
// correct





// als er op de knop gedrukt wordt
// controleer de userSolution met correctSolution
//indien juist: joo berry
//indien fout: peter luts maat


