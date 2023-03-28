
export function init(container) {
    // Crea un contenedor para el HTML
container = document.createElement('div');

// Crea el título
const title = document.createElement('h1');
title.textContent = '- Harry Potter';
container.appendChild(title);

// Crea la portada del libro
const portada = document.createElement('div');
portada.classList.add('portada');
container.appendChild(portada);

const figure = document.createElement('figure');
portada.appendChild(figure);

const image = document.createElement('img');
image.src = 'https://tienda.sophosenlinea.com/imagenes/9786073/978607319300.GIF';
image.alt = 'libreria';
image.width = 154;
image.height = 192;
figure.appendChild(image);

const figcaption = document.createElement('figcaption');
figcaption.innerHTML = '<i>Harry Poter y la Piedra Filosofal, por J. K. Rowling.</i>';
figure.appendChild(figcaption);

// Crea la descripción del libro
const descripcion = document.createElement('div');
descripcion.classList.add('descripcion');
container.appendChild(descripcion);

const paragraph = document.createElement('p');
paragraph.textContent = 'Harry Potter nunca ha oído hablar de Hogwarts cuando en el felpudo del número 4 de Privet Drive empieza a caer una lluvia de sobres de pergamino amarillento, con la dirección escrita con tinta verde y un sello de lacre púrpura. Y aunque los horribles tíos de Harry se apresuran a confiscar las cartas, el día que Harry cumple once años un hombre gigantesco llamado Rubeus Hagrid, cuyos ojos brillan como escarabajos negros, irrumpe con una noticia extraordinaria: Harry Potter es un mago, y le han concedido una plaza en el Colegio Hogwarts de Magia y Hechicería.';
descripcion.appendChild(paragraph);

// Agrega el contenedor al documento
    document.querySelector('main').appendChild(container);
}


