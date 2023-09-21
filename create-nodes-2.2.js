function render(parentNode, tagName, textContent) {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    parentNode.appendChild(element);
}


const words = ["html", "css", "js"];


const ulElement = document.createElement('ul');


for (const word of words) {
    render(ulElement, 'li', word);
}


document.body.appendChild(ulElement);