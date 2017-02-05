/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Juraj\\Desktop\\github\\travel-site\\package.json'\n    at Error (native)\n    at Object.fs.openSync (fs.js:640:18)\n    at Object.fs.readFileSync (fs.js:508:33)\n    at ConfigChainBuilder.addConfig (C:\\Users\\Juraj\\Desktop\\github\\travel-site\\node_modules\\babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:146:32)\n    at ConfigChainBuilder.findConfigs (C:\\Users\\Juraj\\Desktop\\github\\travel-site\\node_modules\\babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:102:30)\n    at buildConfigChain (C:\\Users\\Juraj\\Desktop\\github\\travel-site\\node_modules\\babel-core\\lib\\transformation\\file\\options\\build-config-chain.js:61:13)\n    at OptionManager.init (C:\\Users\\Juraj\\Desktop\\github\\travel-site\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:353:58)\n    at File.initOptions (C:\\Users\\Juraj\\Desktop\\github\\travel-site\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:216:65)\n    at new File (C:\\Users\\Juraj\\Desktop\\github\\travel-site\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:139:24)\n    at Pipeline.transform (C:\\Users\\Juraj\\Desktop\\github\\travel-site\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(0);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobilMenu = new _MobileMenu2.default();

/*var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from "./modules/Person";

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " owes 0$ in taxes");
	}
}

alert("this is a 1f3");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Doe", "orange");
jane.greet();
jane.payTaxes();*/

/***/ })
/******/ ]);