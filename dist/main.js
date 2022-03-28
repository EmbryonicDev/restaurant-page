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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\n\nconsole.log('(⊙.⊙(☉̃ₒ☉)⊙.⊙)');\n\n//# sourceURL=webpack://10-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst home = (() => {\n\n  const siteHeader = (() => {\n    // header\n    const header = document.createElement('header');\n    header.id = \"myHeader\";\n    // insert header as body's first child\n    document.body.insertAdjacentElement(\"afterbegin\", header);\n  \n    // header wrap\n    const headerWrap = document.createElement('div');\n    headerWrap.classList.add('headerDiv');\n    header.appendChild(headerWrap);\n    // header Title\n    const headerTitle = document.createElement('H1');\n    headerTitle.innerText = \"🍔 Master Munchies 🍧\";\n    // nav wrap\n    const navWrap = document.createElement('div');\n    navWrap.classList.add('navWrap');\n    headerWrap.append(headerTitle, navWrap)\n  \n    // buttons\n    const homeBtn = document.createElement('button'),\n      menuBtn = document.createElement('button'),\n      contactBtn = document.createElement('button');\n    homeBtn.innerText = 'Home';\n    menuBtn.innerText = 'Menu';\n    contactBtn.innerText = 'Contact';\n    navWrap.append(homeBtn, menuBtn, contactBtn);\n  })();\n\n  // main content\n  const content = document.getElementById('content'),\n    textOne = document.createElement('p');\n  textOne.innerText = \"Congratulations! Your search is over, you've \\njust found the best joint to cure your munchies! \\nOur tasty food & beverages are sure to tantalize \\nyour tastebuds...\";\n\n  const homeImg = document.createElement('img');\n  homeImg.src = \"../src/assets/images/meat-on-grill.jpg\";\n  homeImg.alt = \"Meat on Grill\";\n  homeImg.classList.add(\"homeImg\");\n\n  const textTwo = document.createElement('p');\n  textTwo.innerText = \"Visit us to feast like a king or place your order \\n online now...\";\n\n  content.append(textOne, homeImg, textTwo);\n\n  const siteFooter = (() => {\n    // footer\n    const footer = document.createElement('FOOTER');\n    footer.id = \"Myfooter\";\n    footer.innerText = \"© Embryonic Dev 2022\";\n    const footerSpan = document.createElement('span'),\n      footerLogo = document.createElement('img');\n    footerLogo.src = \"../src/assets/icons/tree-logo.svg\";\n  \n    document.body.appendChild(footer);\n    footer.append(footerSpan);\n    footerSpan.append(footerLogo);\n  })();\n\n  return {\n    siteHeader,\n    siteFooter\n  }\n\n})();\n\n\n\n//# sourceURL=webpack://10-restaurant-page/./src/pages/home.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;