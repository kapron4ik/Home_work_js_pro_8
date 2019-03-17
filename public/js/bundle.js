/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classwork_classwork__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classwork/classwork */ \"./classwork/classwork.js\");\n// import testing from './testing';\r\n// import command from './command';\r\n\r\n\r\nObject(_classwork_classwork__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) ()\r\n// command();\r\n// testing();\r\n\r\n  // function *gen(){\r\n  //   console.log(1);\r\n  //   yield 1;\r\n  //   console.log(2);\r\n  //   return 2;\r\n  // };\r\n\r\n  // const genResult = gen();\r\n  // console.log( genResult );\r\n  // const res1 = genResult.next();\r\n  // console.log( res1 );\r\n\r\n  // const res2 = genResult.next();\r\n  // console.log( res2 );\r\n\r\n  // const retruned = genResult.return();\r\n  // console.log(retruned);\r\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./classwork/classwork.js":
/*!********************************!*\
  !*** ./classwork/classwork.js ***!
  \********************************/
/*! exports provided: Calc, AddCommand, SubCommand, MulCommand, DivCommand, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calc\", function() { return Calc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddCommand\", function() { return AddCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubCommand\", function() { return SubCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MulCommand\", function() { return MulCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivCommand\", function() { return DivCommand; });\nclass Calc {\r\n  constructor(){\r\n    this.currentValue = 0;\r\n    this.history = [];\r\n  }\r\n  undo (){\r\n    const cmd = this.history.pop();\r\n    this.currentValue = cmd.undo(this.currentValue);\r\n  }\r\n  execute(command){\r\n    this.currentValue = command.execute(this.currentValue);\r\n    this.history.push(command);\r\n  }\r\n  getCurrentValue(){\r\n    return this.currentValue;\r\n  }\r\n}\r\n\r\nfunction Command  (fn, undo, value){\r\n  this.execute = fn;\r\n  this.value = value;\r\n  this.undo = undo;\r\n}\r\n\r\nfunction add(value){\r\n  return value + this.value\r\n}\r\n\r\nfunction sub(value){\r\n  return value - this.value\r\n}\r\n\r\nfunction multiply(value){\r\n  return value * this.value\r\n}\r\n\r\nfunction dividy(value){\r\n  return value / this.value\r\n}\r\n\r\nfunction AddCommand (value){\r\n  Command.call(this, add, sub, value);\r\n}\r\n\r\nfunction SubCommand (value){\r\n  Command.call(this, sub, add, value);\r\n}\r\n\r\nfunction MulCommand (value){\r\n  Command.call(this, multiply, dividy, value);\r\n}\r\n\r\nfunction DivCommand (value){\r\n  Command.call(this, dividy, multiply, value);\r\n}\r\n\r\n\r\nconst undoCalc = () => {\r\n\r\n  const calcExmp = new Calc\r\n  calcExmp.execute (new AddCommand (20));\r\n  calcExmp.execute (new SubCommand (3));\r\n  calcExmp.execute (new MulCommand (2));\r\n\r\n\r\n  console.log('---- current value ----');\r\n  console.log('before undo:', calcExmp.getCurrentValue() );\r\n  calcExmp.undo();\r\n  console.log('first undo:', calcExmp.getCurrentValue() );\r\n  calcExmp.undo();\r\n  console.log('second undo:', calcExmp.getCurrentValue() );\r\n  calcExmp.undo();\r\n  console.log('after undo:', calcExmp.getCurrentValue() );\r\n  \r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (undoCalc);\n\n//# sourceURL=webpack:///./classwork/classwork.js?");

/***/ })

/******/ });