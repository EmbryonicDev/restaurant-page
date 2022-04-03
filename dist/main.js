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

/***/ "./src/functions/globalFuntions.js":
/*!*****************************************!*\
  !*** ./src/functions/globalFuntions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFooter\": () => (/* binding */ addFooter),\n/* harmony export */   \"addHeader\": () => (/* binding */ addHeader),\n/* harmony export */   \"clearContent\": () => (/* binding */ clearContent),\n/* harmony export */   \"elFactory\": () => (/* binding */ elFactory)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/contact */ \"./src/pages/contact.js\");\n\n\n\n\n// DOM element creator\nconst elFactory = (type, attributes, appendTo, ...children) => {\n  const el = document.createElement(type)\n\n  for (let key in attributes) {\n    el.setAttribute(key, attributes[key])\n  }\n\n  children.forEach(child => {\n    if (typeof child === 'string') {\n      el.appendChild(document.createTextNode(child))\n    } else {\n      el.appendChild(child)\n    }\n  })\n\n  if (appendTo != \"\") appendTo.append(el);\n\n  return el\n};\n\nconst addHeader = () => {\n  // header\n  const header = elFactory('header', { id: 'myHeader' }, '')\n  // // insert header as body's first child\n  document.body.insertAdjacentElement(\"afterbegin\", header);\n  // header wrap\n  const headerDiv = elFactory('div', { class: 'headerDiv' }, header,\n    elFactory('H1', '', '', \"🍔 Master Munchies 🍧\"));\n  // nav wrap\n  const navWrap = elFactory('div', { class: 'navWrap' }, headerDiv);\n  // buttons\n  const homeBtn = elFactory('button', { style: \"border-bottom: solid #f1f5f9\" }, navWrap, 'Home')\n  const menuBtn = elFactory('button', '', navWrap, 'Menu')\n  const contactBtn = elFactory('button', '', navWrap, 'Contact');\n\n  // eListerners\n  (() => {\n    // update button styling when page is selected\n    const selectedBtnBorder = (btnOn, btnOff, btnTwoOff) => {\n      btnOn.style.cssText = \"border-bottom: solid #f1f5f9\";\n      btnOff.style.cssText = \"border-bottom: solid transparent\";\n      btnTwoOff.style.cssText = \"border-bottom: solid transparent\";\n    }\n\n    // display home page\n    homeBtn.onclick = () => {\n      selectedBtnBorder(homeBtn, menuBtn, contactBtn);\n      clearContent();\n      (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addHomeContent)();\n    }\n\n    // display menu page\n    menuBtn.onclick = () => {\n      selectedBtnBorder(menuBtn, homeBtn, contactBtn);\n      clearContent();\n      (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.addMenuContent)();\n    }\n\n    // display contact page\n    contactBtn.onclick = () => {\n      selectedBtnBorder(contactBtn, menuBtn, homeBtn);\n      clearContent();\n      (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__.addContactContent)();\n    }\n  })();\n}\n\nconst addFooter = () => {\n  const footer = elFactory('FOOTER', '', document.body, \"© Embryonic Dev 2022\",\n    elFactory('span', '', '',\n      elFactory('img', { src: \"../src/assets/icons/tree-logo.svg\" }, '')\n    )\n  )\n}\n\nconst clearContent = () => {\n  while (content.firstChild) {\n    content.removeChild(content.lastChild);\n  }\n}\n\n\n\n//# sourceURL=webpack://10-restaurant-page/./src/functions/globalFuntions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\n\nconsole.log('(⊙.⊙(☉̃ₒ☉)⊙.⊙)');\n\n//# sourceURL=webpack://10-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addContactContent\": () => (/* binding */ addContactContent)\n/* harmony export */ });\n/* harmony import */ var _functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/globalFuntions */ \"./src/functions/globalFuntions.js\");\n\n\nconst addContactContent = () => {\n  const content = document.getElementById('content');\n\n  // add contact content to DOM\n  const contentDiv = (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: \"contactContent\" }, content);\n  (() => {\n    const inputPattern = 'pattern=\"^(?![\\s.]+$)[0-9a-zA-Z\\s.]*$\"';\n    (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h1', '', contentDiv, 'Contact us');\n    (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', contentDiv, \"Fill in the form below or call us on \",\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('span', '', '', '518-783-7239'),\n      \"  to get in touch. We would be happy to answer your questions and assist you in any way we can.\");\n    (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('form', { action: '#', id: \"form\" }, contentDiv,\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', \"\", '',\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'name', class: 'required' }, '', \"Name: \"),\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('input', { inputPattern, required: true, id: 'name', maxlength: '24' }, '')\n      ),\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', \"\", '',\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'email', class: 'required' }, '', \"Email: \"),\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('input', { inputPattern, required: true, id: 'email', type: 'email' }, '')\n      ),\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', \"\", '',\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'subject', class: 'required' }, '', \"Subject: \"),\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('input', { inputPattern, required: true, id: 'subject', maxlength: '32' }, '')\n      ),\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', \"\", '',\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'messageArea', class: 'required' }, '', \"Message: \"),\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('textarea', { inputPattern, id: 'messageArea', cols: \"30\", rows: \"10\", placeHolder: 'Type your message here...' }, '')\n      ),\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('button', { type: 'submit' }, '', 'Submit')\n    )\n  })();\n\n  // get data from form inputs\n  (() => {\n    let name = '';\n    let email = '';\n    let subject = '';\n    const form = document.getElementById('form');\n    form.addEventListener('submit', (e) => {\n      e.preventDefault;\n      name = form.name.value;\n      email = form.email.value;\n      subject = form.subject.value;\n      displayMessage();\n    });\n\n    const displayMessage = () => {\n      // clear form except for H1\n      const contactHeading = document.querySelector('#contactContent h1');\n      while (contactContent.children.length > 1) {\n        contactContent.removeChild(contactContent.lastChild);\n      }\n      // modify H1 & add new paragraph with <span>'s\n      contactHeading.innerText = `Thank you for contacting us `;\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('span', '', contactHeading, name + \"!\");\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', {style: 'padding-bottom: 60px'}, contentDiv, 'We have received your message with subject: ',\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('span', '', '', '\"' + subject + '\"'),\n        ' and will respond via ',\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('span', '', '', email),\n        ' within 24 hours.'\n      )\n    }\n  })();\n};\n\nconst contact = () => {\n  addContactContent();\n};\n\n//# sourceURL=webpack://10-restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHomeContent\": () => (/* binding */ addHomeContent),\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/globalFuntions */ \"./src/functions/globalFuntions.js\");\n\n\n\n\nconst addHomeContent = () => {\n  // main content\n  const content = document.getElementById('content');\n\n  (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: 'homeContent' }, content,\n    (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '', \"Congratulations! Your search is over, you've just found the best joint to cure your munchies! Our tasty food & beverages are sure to tantalize your tastebuds...\"),\n    (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: \"../src/assets/images/meat-on-grill.jpg\", alt: \"Meat on Grill\" }, ''),\n    (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '', \"Visit us to feast like a king or place your order online now...\")\n  )\n}\n\nconst home = (() => {\n  ;(0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.addHeader)();\n  addHomeContent();\n  (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.addFooter)();\n})();\n\n\n\n//# sourceURL=webpack://10-restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMenuContent\": () => (/* binding */ addMenuContent),\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/globalFuntions */ \"./src/functions/globalFuntions.js\");\n\n\nconst addMenuContent = () => {\n  const menuData = {\n    classForHeading: ['starters', 'mainCourses', 'deserts', 'drinks'],\n    starters: {\n      icons: ['🧆', '🍿', '🍣', '🥪'],\n      name: ['Falafel', 'Popcorn', 'Sushi', 'Sandwidch'],\n      price: ['$3', '$2', '$5', '$3.50'],\n      text: [\"Secret Middle Eastern recipe\", \"Add your own spices\", \"Fresh fish used\", \"Ham, cheese, and tomatto\"]\n    },\n    mainCourses: {\n      icons: ['🍔', '🌭', '🍝', '🥩'],\n      name: ['Burger', 'Hotdog', 'Spaghetti', 'Steak'],\n      price: ['$7.50', '$6.50', '$7', '$9.50'],\n      text: [\"Cheese burger with tomatto and lettuce\", \"Homemade mustard added\", \"With Bolognese sauce\", \"500g pure beef\"]\n    },\n    deserts: {\n      icons: ['🥞', '🧇', '🍨', '🥧'],\n      name: ['Pancakes', 'Waffle', 'Ice Cream', 'Pie'],\n      price: ['$4.50', '$4', '$3.50', '$4'],\n      text: [\"Drenched in maple syrup\", \"Served with ice cream\", \"Vanilla, cholocolate, or strawberry\", \"Chocolate chip pecan pie\"]\n    },\n    drinks: {\n      icons: ['🍹', '🍺', '🍷', '☕'],\n      name: ['Fruit Coctail', 'Beer', 'Wine', 'Coffee'],\n      price: ['$2.50', '$3', '$2.50', '$2.50'],\n      text: [\"Orange, mango, apple\", \"Home brewed\", \"Red or white\", \"Cappuccino or Late Macchiato\"]\n    }\n  };\n\n  const content = document.getElementById('content');\n\n  // create DOM elements (menu items empty at this point)\n  (() => {\n    const menuHeadings = ['Starters', 'Main Courses', 'Deserts', 'Drinks'];\n    const contentDiv = (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: \"menuContent\" }, content);\n    for (let i = 0; i < menuData.classForHeading.length; i++) {\n      (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: `subSection ${menuData.classForHeading[i]}` }, contentDiv,\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('H3', \"\", \"\", menuHeadings[i]),\n        (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'menuItem' }, '',\n          (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'menuIcon' }, '', \"\"),\n          (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'namePrice' }, '',\n            (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('H4', '', '', ''),\n            (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('span', '', '', '')\n          ),\n          (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '', '')\n        ),\n      );\n      // create 3 additional menu items per subSection\n      let item = document.querySelector('.menuItem');\n      let section = document.querySelector(`.${menuData.classForHeading[i]}`);\n      for (let i = 0; i < 3; i++) {\n        let myClone = item.cloneNode(true);\n        section.append(myClone);\n      }\n    }\n  })();\n\n  // factory to populate menu items\n  const addMenuData = (selector, targetGroup, foodCategory, itemContent) => {\n    const container = document.querySelector(selector);\n    let counter = 0;\n\n    container.querySelectorAll(targetGroup).forEach(item => {\n      item.innerText = menuData[foodCategory][itemContent][counter];\n      counter++;\n    })\n  };\n\n  // populate menu items\n  const feedMenuData = (() => {\n    const selector = ['.starters', '.mainCourses', '.deserts', '.drinks'];\n    const targetGroup = ['.menuIcon', 'H4', 'span', 'p'];\n    const itemContent = ['icons', 'name', 'price', 'text'];\n    let categoryChanger = 0;\n    let itemChanger = 0;\n    for (let i = 0; i < 16; i++) {\n      // + 1 to categoryChanger after populating \"starters\" to switch to next course\n      // itemChanger resets to 0 after each category is filled\n      if (i == 4 || i == 8 || i == 12 || i == 16) {\n        categoryChanger++;\n        itemChanger = 0;\n      }\n      addMenuData(selector[categoryChanger], targetGroup[itemChanger], menuData.classForHeading[categoryChanger], itemContent[itemChanger]);\n      itemChanger++;\n    }\n  })();\n  return { elFactory: _functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.elFactory };\n}\n\nconst menu = () => {\n  addMenuContent();\n};\n\n\n\n//# sourceURL=webpack://10-restaurant-page/./src/pages/menu.js?");

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