
let display = document.getElementById('display');


let greenButton = document.getElementById('green');
let blueButton = document.getElementById('blue');
let redButton = document.getElementById('red');
let yellowButton = document.getElementById('yellow')
console.log(display);


function displayBlue() {
  display.style.backgroundColor = '#038cfc';
}

function displayGreen() {
  display.style.backgroundColor = '#0af238';
}

function displayRed() {
  display.style.backgroundColor = '#fc2c03';
}
function displayYellow(e){
  display.style.backgroundColor = '#eddf1c';
}
greenButton.addEventListener('click', displayGreen);
blueButton.addEventListener('click',displayBlue);
redButton.addEventListener('click',displayRed);
yellowButton.addEventListener('click',displayYellow);
