const password = 'Peterluts';

let guess = prompt('wat is het geheime wachtwoord?');
let amountTries = 1;
console.log (guess);

if (password == guess) {
    document.write (' Goed zo rakker')
} 

while(password != guess) {
    amountTries++;
    guess =prompt ('Wat is het geheime wachtwoord?');

}

document.write ('je hebt het wachtwoord ');
document.write ('na ' + amountTries + ' keer geraden');