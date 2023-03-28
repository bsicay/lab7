
export function init(container) {
    // Crea un contenedor para el HTML
container = document.createElement('div');

// Crea el título
const title = document.createElement('h1');
title.textContent = 'El Bosque';
container.appendChild(title);

// Crea la portada del libro
const portada = document.createElement('div');
portada.classList.add('portada');
container.appendChild(portada);

const figure = document.createElement('figure');
portada.appendChild(figure);

const image = document.createElement('img');
image.src = 'https://w0.peakpx.com/wallpaper/180/462/HD-wallpaper-bosque-arboles-camini-dark-oscuro-sunshine-tenebroso.jpg';
image.alt = 'libreria';
image.width = 154;
image.height = 192;
figure.appendChild(image);

const figcaption = document.createElement('figcaption');
figcaption.innerHTML = '<i>El Bosque, por Brandon Sicay</i>';
figure.appendChild(figcaption);

// Crea la descripción del libro
const descripcion = document.createElement('div');
descripcion.classList.add('descripcion');
container.appendChild(descripcion);

const paragraph = document.createElement('p');
paragraph.textContent = 'Una tarde, aproximadamente las 5 de la tarde. En las noticias se había anunciado que habría una lluvia de estrellas en la noche de ese día...¡este es un evento que se da cada 100 años!. Debo de ir al punto más alto de la ciudad -Pensó Joshua- ¿A qúe punto de la ciudad debería de ir?';
descripcion.appendChild(paragraph);

// Agrega el contenedor al documento
    document.querySelector('main').appendChild(container);
}


