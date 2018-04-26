
// Stap 1: knop en inputveld declareren
let btnSubmit = document.getElementById('storeMyMole');
let inputfield = document.getElementById('nameOfTheMole');

//Stap 2: click event zetten op de knop 
btnSubmit.addEventListener('click', function(){
    // de mol uit het inputveld halen
    let mole = inputfield.value;

    // na een klik moet het in de local storage opgeslagen worden
    localStorage.setItem('myMole', mole);
});

//stap 3: controleren of er een mol in de local storage zit?
let storedMole = localStorage.getItem('myMole');
if(storedMole != null) {
    btnSubmit.style.display = "none";
    inputField.style.display= "none";

}