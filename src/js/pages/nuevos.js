import { loadPage } from '../app.js';

export function init(container) {
    container = document.createElement('div');
    const header = document.createElement('header');
    container.appendChild(header);

    const indice = document.createElement('ul');
    indice.classList.add('indice');
    header.appendChild(indice);


    const heading = document.createElement('h1');
    heading.textContent = 'Nuevos';
    container.appendChild(heading);

    const nav = document.createElement('nav');
    container.appendChild(nav);

    const list = document.createElement('ul');
    nav.appendChild(list);

    const books = [
    { title: 'El bosque', author: 'Brandon Sicay', page: 'historia'},
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez', page: 'it' },
    { title: 'Un mundo feliz', author: 'Aldous Huxley', page: 'principito' },
    { title: 'Crimen y castigo', author: 'Fiódor Dostoyevski', page: 'anillos' },
    { title: 'Ulises', author: 'James Joyce', page: 'jurassic-park' },
    ];

    books.forEach(book => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('book-link'); // Agregar la clase "book-link"
    link.dataset.page = book.page; // Agregar el atributo "data-page"
    link.href = '#';
    link.innerHTML = `<b>${book.title}</b> - <i>${book.author}</i>`;
    listItem.appendChild(link);
    list.appendChild(listItem);

    link.addEventListener('click', () => {
        loadPage(book.page);
      });
    
    });

    document.querySelector('main').appendChild(container)
}