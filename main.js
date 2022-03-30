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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFooter\": () => (/* binding */ addFooter),\n/* harmony export */   \"addHeader\": () => (/* binding */ addHeader),\n/* harmony export */   \"clearContent\": () => (/* binding */ clearContent)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n\n\n\nconst addHeader = () => {\n  // header\n  const header = document.createElement('header');\n  header.id = \"myHeader\";\n  // insert header as body's first child\n  document.body.insertAdjacentElement(\"afterbegin\", header);\n\n  // header wrap\n  const headerWrap = document.createElement('div');\n  headerWrap.classList.add('headerDiv');\n  header.appendChild(headerWrap);\n  // header Title\n  const headerTitle = document.createElement('H1');\n  headerTitle.innerText = \"🍔 Master Munchies 🍧\";\n  // nav wrap\n  const navWrap = document.createElement('div');\n  navWrap.classList.add('navWrap');\n  headerWrap.append(headerTitle, navWrap)\n\n  // buttons\n  const homeBtn = document.createElement('button'),\n    menuBtn = document.createElement('button'),\n    contactBtn = document.createElement('button');\n\n  homeBtn.innerText = 'Home';\n  menuBtn.innerText = 'Menu';\n  contactBtn.innerText = 'Contact';\n  navWrap.append(homeBtn, menuBtn, contactBtn);\n  homeBtn.style.cssText = \"border-bottom: solid #f1f5f9\"\n\n  // eListerners\n  // display home page\n  homeBtn.onclick = () => {\n    homeBtn.style.cssText = \"border-bottom: solid #f1f5f9\"\n    clearContent();\n    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.addHomeContent)();\n  }\n\n  // display menu page\n  menuBtn.onclick = () => {\n    homeBtn.style.cssText = \"border-bottom: solid transparent\"\n    clearContent();\n    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.addMenuContent)();\n  }\n}\n\nconst addFooter = () => {\n  const footer = document.createElement('FOOTER');\n  footer.id = \"Myfooter\";\n  footer.innerText = \"© Embryonic Dev 2022\";\n  const footerSpan = document.createElement('span'),\n    footerLogo = document.createElement('img');\n  footerLogo.src = \"../src/assets/icons/tree-logo.svg\";\n\n  document.body.appendChild(footer);\n  footer.append(footerSpan);\n  footerSpan.append(footerLogo);\n}\n\nconst clearContent = () => {\n  while (content.firstChild) {\n    content.removeChild(content.lastChild);\n  }\n}\n\n\n\n//# sourceURL=webpack://10-restaurant-page/./src/functions/globalFuntions.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHomeContent\": () => (/* binding */ addHomeContent),\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/globalFuntions */ \"./src/functions/globalFuntions.js\");\n\n\n\nconst addHomeContent = () => {\n  // main content\n  const content = document.getElementById('content'),\n    contentDiv = document.createElement('div');\n  contentDiv.id = 'homeContent'\n\n  const textOne = document.createElement('p');\n  textOne.innerText = \"Congratulations! Your search is over, you've just found the best joint to cure your munchies! Our tasty food & beverages are sure to tantalize your tastebuds...\";\n\n  const homeImg = document.createElement('img');\n  homeImg.src = \"../src/assets/images/meat-on-grill.jpg\";\n  homeImg.alt = \"Meat on Grill\";\n  homeImg.classList.add(\"homeImg\");\n\n  const textTwo = document.createElement('p');\n  textTwo.innerText = \"Visit us to feast like a king or place your order online now...\";\n\n  content.append(contentDiv)\n  contentDiv.append(textOne, homeImg, textTwo);\n}\n\nconst home = (() => {\n  ;(0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.addHeader)();\n  addHomeContent();\n  (0,_functions_globalFuntions__WEBPACK_IMPORTED_MODULE_0__.addFooter)();\n})();\n\n\n\n//# sourceURL=webpack://10-restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMenuContent\": () => (/* binding */ addMenuContent),\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst addMenuContent = () => {\n  const content = document.getElementById('content'),\n    contentDiv = document.createElement('div');\n  contentDiv.id = 'menuContent';\n  content.append(contentDiv);\n\n  const menuHeadings = ['Starters', 'Main-Courses', 'Desert', 'Drinks'];\n  let counterTwo = 0;\n\n  // create DOM elements\n  const addMenuWraps = (subSection, item, sectionHeading, icon, namePrice, itemHeading, price, itemText) => {\n    let counter = 0;\n\n    sectionHeading = document.createElement('H3')\n    sectionHeading.innerText = subSection;\n\n    subSection = document.createElement('div');\n    subSection.classList.add('subSection', menuHeadings[counterTwo].toLowerCase());\n\n    item = document.createElement('div');\n    item.classList.add('menuItem');\n\n    icon = document.createElement('div');\n    icon.classList.add('menuIcon');\n\n    namePrice = document.createElement('div');\n    namePrice.classList.add('namePrice');\n\n    itemHeading = document.createElement('H4');\n    price = document.createElement('span');\n    itemText = document.createElement('p');\n\n    contentDiv.append(subSection);\n    subSection.append(sectionHeading, item);\n    item.append(icon, namePrice, itemText);\n    namePrice.append(itemHeading, price);\n\n    // create 3 additional menu items\n    while (counter < 3) {\n      let myClone = item.cloneNode(true);\n      subSection.append(myClone);\n      counter++;\n    };\n    counterTwo++;\n  };\n\n  for (let i = 0; i < menuHeadings.length; i++) {\n    addMenuWraps(menuHeadings[i], [i], [i], [i], [i], [i], [i], [i])\n  };\n\n  let itemCounter = 0;\n  // Add starter info\n  (() => {\n    // add starter food icons\n    const starterIcons = ['🧆', '🍿', '🍣', '🥪'];\n    let starterWrap = document.querySelector('.starters');\n    starterWrap.querySelectorAll('.menuIcon').forEach(element => {\n      element.innerText = starterIcons[itemCounter];\n      itemCounter++;\n    });\n\n    // add starter food names\n    itemCounter = 0;\n    const starterName = ['Falafel', 'Popcorn', 'Sushi', 'Sandwidch'];\n    starterWrap.querySelectorAll('H4').forEach(element => {\n      element.innerText = starterName[itemCounter];\n      itemCounter++;\n    });\n\n    // add starter food prices\n    itemCounter = 0;\n    const starterPrice = ['$3', '$2', '$5', '$3.50'];\n    starterWrap.querySelectorAll('span').forEach(element => {\n      element.innerText = starterPrice[itemCounter];\n      itemCounter++;\n    });\n\n    // add starter text\n    itemCounter = 0;\n    const starterText = [\n      \"Secret Middle Eastern recipe\",\n      \"Add your own spices\",\n      \"Fresh fish used\",\n      \"Ham, cheese, and tomatto\"\n    ];\n    starterWrap.querySelectorAll('p').forEach(element => {\n      element.innerText = starterText[itemCounter];\n      itemCounter++;\n    });\n  })();\n\n  // Add main course info\n  (() => {\n    // add main-course food icons\n    const mainCourseIcons = ['🍔', '🌭', '🍝', '🥩'];\n    itemCounter = 0;\n    let mainCourseWrap = document.querySelector('.main-courses');\n    mainCourseWrap.querySelectorAll('.menuIcon').forEach(element => {\n      element.innerHTML = mainCourseIcons[itemCounter];\n      itemCounter++\n    });\n\n    // add main course food names\n    itemCounter = 0;\n    const mainCourseName = ['Burger', 'Hotdog', 'Spaghetti', 'Steak'];\n    mainCourseWrap.querySelectorAll('H4').forEach(element => {\n      element.innerText = mainCourseName[itemCounter];\n      itemCounter++;\n    });\n\n    // add main course food prices\n    itemCounter = 0;\n    const mainCoursePrice = ['$7.50', '$6.50', '$7', '$9.50'];\n    mainCourseWrap.querySelectorAll('span').forEach(element => {\n      element.innerText = mainCoursePrice[itemCounter];\n      itemCounter++;\n    });\n\n    // add main course text\n    itemCounter = 0;\n    const mainCourseText = [\n      \"Cheese burger with tomatto and lettuce\",\n      \"Homemade mustard added\",\n      \"With Bolognese sauce\",\n      \"500g pure beef\"\n    ];\n    mainCourseWrap.querySelectorAll('p').forEach(element => {\n      element.innerText = mainCourseText[itemCounter];\n      itemCounter++;\n    });\n  })();\n\n  // Add desert info\n  (() => {\n    // Add desert icons\n    const desertIcons = ['🥞', '🧇', '🍨', '🥧']\n    itemCounter = 0;\n    let desertsWrap = document.querySelector('.desert');\n    desertsWrap.querySelectorAll('.menuIcon').forEach(element => {\n      element.innerHTML = desertIcons[itemCounter];\n      itemCounter++\n    });\n\n    // add desert names\n    itemCounter = 0;\n    const desertsName = ['Pancakes', 'Waffle', 'Ice Cream', 'Pie'];\n    desertsWrap.querySelectorAll('H4').forEach(element => {\n      element.innerText = desertsName[itemCounter];\n      itemCounter++;\n    });\n\n    // add desert prices\n    itemCounter = 0;\n    const desertsPrice = ['$4.50', '$4', '$3.50', '$4'];\n    desertsWrap.querySelectorAll('span').forEach(element => {\n      element.innerText = desertsPrice[itemCounter];\n      itemCounter++;\n    });\n\n    // add desert text\n    itemCounter = 0;\n    const desertsText = [\n      \"Drenched in maple syrup\",\n      \"Served with ice cream\",\n      \"Vanilla, cholocolate, or strawberry\",\n      \"Chocolate chip pecan pie\"\n    ];\n    desertsWrap.querySelectorAll('p').forEach(element => {\n      element.innerText = desertsText[itemCounter];\n      itemCounter++;\n    });\n  })();\n\n  // Add drinks info\n  (() => {\n    // Add drinks icons\n    const drinksIcons = ['🍹', '🍺', '🍷', '☕']\n    itemCounter = 0;\n    let drinksWrap = document.querySelector('.drinks');\n    drinksWrap.querySelectorAll('.menuIcon').forEach(element => {\n      element.innerHTML = drinksIcons[itemCounter];\n      itemCounter++\n    });\n\n    // add drinks names\n    itemCounter = 0;\n    const drinksName = ['Fruit Coctail', 'Beer', 'Wine', 'Coffee'];\n    drinksWrap.querySelectorAll('H4').forEach(element => {\n      element.innerText = drinksName[itemCounter]\n      itemCounter++;\n    });\n\n    // add drinks prices\n    itemCounter = 0;\n    const drinksPrice = ['$2.50', '$3', '$2.50', '$2.50'];\n    drinksWrap.querySelectorAll('span').forEach(element => {\n      element.innerText = drinksPrice[itemCounter]\n      itemCounter++;\n    });\n\n    // add drink text\n    itemCounter = 0;\n    const drinksText = [\n      \"Orange, mango, apple\",\n      \"Home brewed\",\n      \"Red or white\",\n      \"Cappuccino or Late Macchiato\"\n    ];\n    drinksWrap.querySelectorAll('p').forEach(element => {\n      element.innerText = drinksText[itemCounter];\n      itemCounter++;\n    })\n  })();\n}\n\nconst menu = () => {\n  addMenuContent();\n};\n\n\n\n//# sourceURL=webpack://10-restaurant-page/./src/pages/menu.js?");

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