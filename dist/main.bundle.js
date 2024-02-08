/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

eval("const article_links = document.querySelectorAll('a');\r\nconst image_wrapper = document.querySelectorAll('.aybn_img-wrapper');\r\n\r\n\r\narticle_links.forEach(links => {\r\n    links.addEventListener('click', event => {\r\n        event.preventDefault();\r\n        console.log(event.target.dataset.title);\r\n    })\r\n})\r\n\r\nimage_wrapper.forEach(iw => {\r\n    iw.addEventListener('click', event => {\r\n        if(iw.classList.contains('popup')){\r\n            removePopupClass();\r\n        }\r\n        else{\r\n            iw.querySelector('img').style.width = '0px';\r\n            setTimeout(()=> {\r\n                iw.classList.add('popup');\r\n                iw.querySelector('img').style.width = ''; // reset width to default\r\n            }, 0);\r\n        }\r\n    })\r\n});\r\n\r\n\r\nfunction removePopupClass(){\r\n    image_wrapper.forEach(iw => {\r\n        iw.classList.remove('popup');\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/main.js"]();
/******/ 	
/******/ })()
;