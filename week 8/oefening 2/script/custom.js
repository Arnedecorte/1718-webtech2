let btn = document.getElementById('button');

btn.addEventListener('click', function(){


let color = document.querySelector('input[name="color"]:checked');
console.log(color.value);

btn.className = `btn ${(color) ? color.value : 'btn-warning'}`;
/*
if(color) {
    btn.className = 'btn' + color.value;

}

else{
    btn.className= 'btn' + 'btn-warning';
}
*/


});