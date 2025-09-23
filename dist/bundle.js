/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _src_modules_ListasTodosAgendamentos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modules/ListasTodosAgendamentos.js */ \"./src/modules/ListasTodosAgendamentos.js\");\n\n\n\n\n\n//REALIZAR AGENDAMENTO\n\n// ListarTodosAgendamentos(URL);\n(0,_src_modules_ListasTodosAgendamentos_js__WEBPACK_IMPORTED_MODULE_1__.ListarTodosAgendamentos)();\n\n//# sourceURL=webpack://petshop/./app.js?\n}");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://petshop/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/modules/ListasTodosAgendamentos.js":
/*!************************************************!*\
  !*** ./src/modules/ListasTodosAgendamentos.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListarTodosAgendamentos: () => (/* binding */ ListarTodosAgendamentos)\n/* harmony export */ });\n/* harmony import */ var _services_FetchAgendamentos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/FetchAgendamentos.js */ \"./src/services/FetchAgendamentos.js\");\n/* harmony import */ var _services_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.js */ \"./src/services/config.js\");\n\n\nconst periodo = document.getElementsByClassName(\"\");\nasync function ListarTodosAgendamentos() {\n  try {\n    const listaDeAgendamentos = await (0,_services_FetchAgendamentos_js__WEBPACK_IMPORTED_MODULE_0__.getAgendamentos)(_services_config_js__WEBPACK_IMPORTED_MODULE_1__.URL);\n    console.log(`todos os agendamentos:${listaDeAgendamentos}`);\n  } catch (error) {\n    console.log(\"erro ao listar agendamentos\");\n  }\n}\n\n//# sourceURL=webpack://petshop/./src/modules/ListasTodosAgendamentos.js?\n}");

/***/ }),

/***/ "./src/services/FetchAgendamentos.js":
/*!*******************************************!*\
  !*** ./src/services/FetchAgendamentos.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAgendamentos: () => (/* binding */ getAgendamentos)\n/* harmony export */ });\nasync function getAgendamentos(URL) {\n  await fetch(`${URL}/agendamentos`).then(response => {\n    if (!response.ok) {\n      throw new Error(\"erro na requisicao\" + response.status);\n    }\n    return response.json();\n  }).then(data => {\n    console.log(data);\n  });\n}\n\n//# sourceURL=webpack://petshop/./src/services/FetchAgendamentos.js?\n}");

/***/ }),

/***/ "./src/services/config.js":
/*!********************************!*\
  !*** ./src/services/config.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   URL: () => (/* binding */ URL)\n/* harmony export */ });\nconst URL = \"http://localhost:3333\";\n\n//# sourceURL=webpack://petshop/./src/services/config.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;