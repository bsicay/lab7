const main = document.querySelector('main');
const navLinks = document.querySelectorAll('nav a');
const loadedPages = {}; // objeto para llevar un registro de las páginas ya cargadas


function loadPage(page) {
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

// export function loadPageDetail(page) {
//     import(`./pages/${page}.js`)
//         .then(module => {
//             module.init(main);
//         })
//         .catch(error => {
//             console.error(`Error loading ${page} module: ${error}`);
//         });
// }
