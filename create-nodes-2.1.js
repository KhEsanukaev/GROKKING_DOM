/*
const words = ["html", "css", "js"];

const ulElement = document.createElement('ul');


for (const word of words) {
    const liElement = document.createElement('li');
    liElement.textContent = word;

    ulElement.appendChild(liElement);


}

document.appendChild(ulElement);
*/

const words = ["html", "css", "js"];

const ulElement = document.createElement('ul');


for (const word of words) {
    
    const liElement = document.createElement('li');
    liElement.textContent = word;

    
    ulElement.appendChild(liElement);
}


document.body.appendChild(ulElement);