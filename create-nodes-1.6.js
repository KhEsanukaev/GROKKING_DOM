const divElem = document.createElement('div')

const ulElem = document.createElement('ul');

const li1Elem = document.createElement('li');
const link1Elem = document.createElement('a')

link1Elem.href = 'https://instagram.com/intocode'
link1Elem.textContent = 'Наш инстаграмм'
li1Elem.appendChild(link1Elem)



const li2Elem = document.createElement('li');
const link2Elem = document.createElement('a')

link2Elem.href = 'https://intocode.ru'
link2Elem.textContent = 'Наш сайт'
li2Elem.appendChild(link2Elem)

ulElem.appendChild(li1Elem)

ulElem.appendChild(li2Elem)

divElem.appendChild(ulElem)

document.body.append(divElem)
