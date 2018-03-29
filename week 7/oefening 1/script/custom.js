

const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// easy
//const firstName = 'Arne';
//const lastName = 'De Corte';

// intermediate
// var firstName = prompt("Geef een voornaam in");
// var lastName = prompt("Geef een achternaam in");

//hard

const firstName = document.getElementById('firstNamefield').value;
const lastName = document.getElementById('lastNamefield').value;



const url = 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName;

// JSON functie oproepen, binnen de callbackmanipulerenwe de verkregen data
getJSON(url, function(error, data){


document.write(data.value.joke);

})





