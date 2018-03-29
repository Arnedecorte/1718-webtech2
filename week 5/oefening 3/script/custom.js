var dog ={
    breed: 'Collie',
    name:'Lassie',
    color:'brownish',
    age:56,
    gender: 'm',
    colorEyes: function() {
        return 'brown'
    }
}

let Dog = function(breed, name, color, age, gender){
this.breed = breed;
this.name = name;
this.color = color;
this.age= age;
this.colorEyes = function() {
   
    return 'pink'

 };
this.birthYear = function() {
    const now = new Date();
    const year = 
    let birthYear = currentYear - this.age;
    return birthYear
  }
}

let myFavoriteDog = new Dog ('Collie', 'Lassie', 'brown ')