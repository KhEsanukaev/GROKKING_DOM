function render(parentNode, tagName, attributes, textContent) {
    const element = document.createElement(tagName);

    // Установка атрибутов
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    element.textContent = textContent;
    parentNode.appendChild(element);
}

// Создаем узел тега <ul>
const ulElement = document.createElement('ul');

// Используем функцию render для создания и добавления элементов <li>
data.forEach(item => {
    render(ulElement, 'li', {}, () => {
        // Используем функцию render для создания и добавления ссылок <a>
        render(ulElement.lastChild, 'a', { href: item.url }, item.name);
    });
});

// Добавляем узел <ul> в тег <body>
document.body.appendChild(ulElement);