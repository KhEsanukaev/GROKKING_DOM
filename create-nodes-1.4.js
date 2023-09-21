const ulElement = document.createElement('ul')
ulElement.classList.add('list')

const liElement = document.createElement('li')
liElement.textContent = 'привет, мир';

ulElement.appendChild(liElement)

console.log(ulElement);
console.log(liElement);
