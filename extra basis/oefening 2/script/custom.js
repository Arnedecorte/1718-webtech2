let fruits = ["Apple", "Orange", "Grapefruit","Banana","Pear" ];

for (let i=0;i<fruits.length;i++) {
    document.write(fruits[i] + "<br>");
};
const showItems = function (arrayName) {
    for (let i=0;i<fruits.length;i++) {   
    document.write(arrayName[i] + "<br>");
  } 
};

showItems (fruits)

// function declaratie

