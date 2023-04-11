"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPage = loadPage;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
var _populares = require("./pages/populares.js");
var _harryPotter = require("./pages/harry-potter.js");
var _historia = require("./pages/historia.js");
var _it = require("./pages/it.js");
var _nuevos = require("./pages/nuevos.js");
require("../scss/style.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || (0, _typeof2.default)(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// import 'bootstrap/dist/css/bootstrap.css'

var main = document.querySelector('main');
var navLinks = document.querySelectorAll('nav a');
function loadPage(page) {
  var main = document.querySelector('main');
  main.innerHTML = '';
  (function (specifier) {
    return new Promise(function (r) {
      return r(specifier);
    }).then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  })("./pages/".concat(page, ".js")).then(function (module) {
    module.init(main);
  }).catch(function (error) {
    console.error("Error loading ".concat(page, " module: ").concat(error));
  });
}
navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var page = event.target.dataset.page;
    var main = document.querySelector('main');
    main.innerHTML = ''; // Limpia el contenido de main
    loadPage(page);
  });
});

// Inicializar los módulos que se importaron

(0, _populares.init)(main);
(0, _harryPotter.init)(main);
(0, _historia.init)(main);
(0, _it.init)(main);
(0, _nuevos.init)(main);
main.innerHTML = '';