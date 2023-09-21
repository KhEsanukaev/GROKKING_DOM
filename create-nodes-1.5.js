const divRed = document.createElement('div');
divRed.classList.add('red');


const divGreen = document.createElement('div');
divGreen.classList.add('green');


const divBlue = document.createElement('div');
divBlue.classList.add('blue');
divBlue.textContent = 'я вложен';


document.body.appendChild(divRed);
document.body.appendChild(divGreen);
document.body.appendChild(divBlue);