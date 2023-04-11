"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.array.concat.js");
var _app = require("../app.js");
function init(container) {
  container = document.createElement('div');
  var header = document.createElement('header');
  container.appendChild(header);
  var indice = document.createElement('ul');
  indice.classList.add('indice');
  header.appendChild(indice);
  var heading = document.createElement('h1');
  heading.textContent = 'Nuevos';
  container.appendChild(heading);
  var nav = document.createElement('nav');
  container.appendChild(nav);
  var list = document.createElement('ul');
  nav.appendChild(list);
  var books = [{
    title: 'El bosque',
    author: 'Brandon Sicay',
    page: 'historia'
  }, {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    page: 'it'
  }, {
    title: 'Un mundo feliz',
    author: 'Aldous Huxley',
    page: 'principito'
  }, {
    title: 'Crimen y castigo',
    author: 'Fiódor Dostoyevski',
    page: 'anillos'
  }, {
    title: 'Ulises',
    author: 'James Joyce',
    page: 'jurassic-park'
  }];
  books.forEach(function (book) {
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.classList.add('book-link'); // Agregar la clase "book-link"
    link.dataset.page = book.page; // Agregar el atributo "data-page"
    link.href = '#';
    link.innerHTML = "<b>".concat(book.title, "</b> - <i>").concat(book.author, "</i>");
    listItem.appendChild(link);
    list.appendChild(listItem);
    link.addEventListener('click', function () {
      (0, _app.loadPage)(book.page);
    });
  });
  document.querySelector('main').appendChild(container);
}