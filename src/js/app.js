

import { init as initPopulares } from './pages/populares.js';
import { init as initHarryPotter } from './pages/harry-potter.js';
import { init as initHistoria} from './pages/historia.js';
import { init as initIt} from './pages/it.js';
import { init as initNuevos } from './pages/nuevos.js';
import '../scss/style.css' 
// import 'bootstrap/dist/css/bootstrap.css'

const main = document.querySelector('main');
const navLinks = document.querySelectorAll('nav a');


export function loadPage(page) {
    const main = document.querySelector('main');
        main.innerHTML = ''; 
        import(`./pages/${page}.js`)
            .then(module => {
                module.init(main);
            })
            .catch(error => {
                console.error(`Error loading ${page} module: ${error}`);
            });
}

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const page = event.target.dataset.page;
        const main = document.querySelector('main');
        main.innerHTML = ''; // Limpia el contenido de main
        loadPage(page);
    });
});

// Inicializar los módulos que se importaron

initPopulares(main);
initHarryPotter(main);
initHistoria(main);
initIt(main);
initNuevos(main);
main.innerHTML = '';
