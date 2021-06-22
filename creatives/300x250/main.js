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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/campaigns/tentativeName/300x250/shell.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-ad/lib/vanilla/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-ad/lib/vanilla/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ad = exports.setupAd = void 0;

var _loadResources = __webpack_require__(/*! @hugemde/admire-dev-tools-tools/lib/loadResources */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/loadResources/index.js");

var _createLogger = __webpack_require__(/*! @hugemde/admire-dev-tools-tools/lib/createLogger */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/createLogger/index.js");

var _makeSetupAd = __webpack_require__(/*! ./makeSetupAd */ "./node_modules/@hugemde/admire-dev-tools-ad/lib/vanilla/makeSetupAd.js");

var env = typeof process !== 'undefined' && "development";
var logLevel = env === 'production' ? 2 : 3;
var log = (0, _createLogger.createLogger)('ad', {
  level: logLevel
});
var setupAd = (0, _makeSetupAd.makeSetupAd)({
  window: window,
  loadResources: _loadResources.loadResources,
  log: log
});
exports.setupAd = setupAd;
var ad = setupAd;
exports.ad = ad;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-ad/lib/vanilla/makeSetupAd.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-ad/lib/vanilla/makeSetupAd.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetupAd = makeSetupAd;
// The total number of lists of resources to load for the ad.
var RESOURCES_LISTS_LENGTH = 2;

function makeSetupAd() {
  var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var window = dependencies.window,
      loadResources = dependencies.loadResources,
      log = dependencies.log;
  /**
   * Basic ad setup process with no dependencies.
   *
   * @name vanilla.setupAd
   * @alias vanilla.ad
   *
   * @see [tools/loadResources](../../packages/tools/API.md#loadresources) module.
   *
   * @param  {Object} [settings={}] - Ad settings.
   * @param  {string} [settings.version] - The ad version.
   * @param  {Object[]} [settings.initialResources] - Resources to load right away.
   * It is passed to "tools/loadResources" module.
   * @param  {Object[]} [settings.politeResources] - Resources to load after
   * the ad page is loaded. It is passed to "tools/loadResources" module.
   * @param  {Function} [settings.onInit] - Called right away.
   * @param  {Function} [settings.onInitialLoad] - When the "initialResources"
   * provided have been loaded. It is not called if no resources were provided.
   * @param  {Function} [settings.onReady] - The provided resources have been loaded.
   * @param  {Function} [settings.onError] - An error occurred while loading resources.
   * @param  {Function} [settings.onComplete] - Always called when either "onReady" or "onError".
   */

  return function setupAd() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var version = settings.version,
        initialResources = settings.initialResources,
        politeResources = settings.politeResources,
        onInit = settings.onInit,
        onInitialLoad = settings.onInitialLoad,
        onReady = settings.onReady,
        onError = settings.onError,
        onComplete = settings.onComplete;
    var resourcesListsLoaded = 0;
    var ocurredError = false;

    function whenComplete() {
      if (onComplete) {
        onComplete();
      }
    }

    function whenResourceError(err) {
      // Only handle the first error.
      if (ocurredError) {
        return;
      }

      ocurredError = true;
      log.error("Failed to fetch the following resource \"".concat(err, "\"."));

      if (onError) {
        onError(err);
      }

      whenComplete();
    }

    function whenReady() {
      log.debug('The ad is ready.');

      if (onReady) {
        onReady();
      }
    }

    function whenResourcesListLoaded() {
      // We need to wait for the two lists ("initialResources" and "politeResources")
      // to be loaded to call the "onReady" and "onComplete" callbacks. We use a
      // counter to count for both of them.
      resourcesListsLoaded++;

      if (resourcesListsLoaded !== RESOURCES_LISTS_LENGTH) {
        return;
      } // Get out from the promise chain (if in one) to prevent possible
      // callback errors to leak in the chain.


      setTimeout(function () {
        whenReady();
        whenComplete();
      }, 0);
    }

    function whenInitialLoad() {
      if (onInitialLoad) {
        // Get out from the promise chain (if in one) to prevent possible
        // callback errors to leak in the chain.
        setTimeout(onInitialLoad, 0);
      }
    }

    function whenInit() {
      log.debug('The ad is initialized.');

      if (onInit) {
        onInit();
      }

      if (initialResources) {
        loadResources(initialResources).then(whenInitialLoad).then(whenResourcesListLoaded).catch(whenResourceError);
      } else {
        whenResourcesListLoaded();
      }
    }

    function whenLoad() {
      log.debug('The ad is loaded.');

      if (politeResources) {
        loadResources(politeResources).then(whenResourcesListLoaded).catch(whenResourceError);
      } else {
        whenResourcesListLoaded();
      }
    }

    if (version) {
      log.info("Version ".concat(version));
    }

    whenInit();

    if (window.document.readyState === 'complete') {
      whenLoad();
    } else {
      window.addEventListener('load', whenLoad);
    }
  };
}

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/changeTabEvent/changeTabEvent.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/changeTabEvent/changeTabEvent.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offChangeTabEvent = exports.onChangeTabEvent = void 0;

/**
 * Set a window event to listen for window visibility changes
 * if [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)
 * is supported.
 * It calls the callback at registration time.
 * It sets the attribute `data-visibility` with the value `hidden` or `visible`
 * according to the case when it changes to the body element.
 * @param {Function} callback - Receives `hidden` or `visible` according to
 * the case.
 */
var onChangeTabEvent = function onChangeTabEvent(callback) {
  var handler = function handler() {
    var isHidden = 'hidden' in document ? document.hidden : document.webkitHidden;
    var visibility = isHidden ? 'hidden' : 'visible';
    document.body.setAttribute('data-visibility', visibility);
    callback(visibility);
  };

  if ('hidden' in document) {
    document.addEventListener('visibilitychange', handler);
  } else {
    document.addEventListener('webkitvisibilitychange', handler);
  }

  handler();
  return handler;
};
/**
 * Remove change tab event listener.
 * Usually, this lets you remove a handler created with `onChangeTabEvent`.
 * @param  {Function} handler
 * @example
 * // Create handler
 * const handler = onChangeTabEvent(function () {});
 * // Remove handler
 * offChangeTabEvent(handler);
 */


exports.onChangeTabEvent = onChangeTabEvent;

var offChangeTabEvent = function offChangeTabEvent(handler) {
  if ('hidden' in document) {
    document.removeEventListener('visibilitychange', handler);
  } else {
    document.removeEventListener('webkitvisibilitychange', handler);
  }
};

exports.offChangeTabEvent = offChangeTabEvent;

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/changeTabEvent/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/changeTabEvent/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _changeTabEvent = __webpack_require__(/*! ./changeTabEvent */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/changeTabEvent/changeTabEvent.js");

Object.keys(_changeTabEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _changeTabEvent[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/createLogger/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/createLogger/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLogger = void 0;

var _makeCreateLogger = __webpack_require__(/*! ./makeCreateLogger.js */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/createLogger/makeCreateLogger.js");

// In some older browsers, object `console` does not exist, so accessing it
// throws and error. We get it from window for safety.
var console = window.console;
var createLogger = (0, _makeCreateLogger.makeCreateLogger)({
  console: console
});
exports.createLogger = createLogger;

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/createLogger/makeCreateLogger.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/createLogger/makeCreateLogger.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateLogger = makeCreateLogger;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _types = __webpack_require__(/*! ../types */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/types/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Factory function to create createLogger tool.
 * @param  {Object} dependencies
 * @param  {Object} dependencies.console - Browser global object
 * @return {Function}
 */
function makeCreateLogger() {
  var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var console = dependencies.console || {};
  /**
   * Creates a logger instance for the browser with four log methods
   * corresponding to four different severity levels:
   * - level 0: `error`
   * - level 1: `warn`
   * - level 2: `info`
   * - level 3: `debug`
   *
   * The available log methods will depend on the severity level passed as an
   * argument in `settings.level`.
   *
   * If the log method doesn't exist in the browser, it will fallback the
   * log method by default i.e `console.log`.
   *
   * @param  {string} namespace - prefix to group logs
   * @param  {Object} [settings = {}]
   * @param  {number} [settings.level = 3] - max number of log levels allowed
   * @return {Object} - contains all the log methods to be used
   *
   * @example
   * const log = createLogger('myApp');
   * log.debug('Loading App');
   * // Logs in the console: "[myApp] Loading App"
   *
   * @example
   * // The available log levels will be error, warn and info.
   * const log = createLogger('myApp', { level: 2 });
   * log.debug('Loading App');
   * // Logs nothing into the console since that level is not allowed.
   */

  return function createLogger(namespace) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!(0, _types.isString)(namespace) || !namespace.trim()) {
      throw new Error('A valid namespace is required!');
    }

    settings = _objectSpread({
      level: 3
    }, settings); // Function to factorize common tasks in displaying messages

    function displayLogs(data) {
      var level = data.level,
          messages = data.messages;
      var logMethods = [console.error, console.warn, console.info, console.debug];
      var logMethod = logMethods[level] || console.log;
      var allowedLevel = settings.level;

      if (logMethod && logMethod.apply && level <= allowedLevel) {
        // We run directly .apply() explicitely to set the context of the call
        // to be the `console` object. If not, IE throws an error.
        logMethod.apply(console, ["[".concat(namespace, "]")].concat((0, _toConsumableArray2.default)(messages)));
      }
    }

    return {
      debug: function debug() {
        var level = 3;

        for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
          messages[_key] = arguments[_key];
        }

        displayLogs({
          level: level,
          messages: messages
        });
      },
      info: function info() {
        var level = 2;

        for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          messages[_key2] = arguments[_key2];
        }

        displayLogs({
          level: level,
          messages: messages
        });
      },
      warn: function warn() {
        var level = 1;

        for (var _len3 = arguments.length, messages = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          messages[_key3] = arguments[_key3];
        }

        displayLogs({
          level: level,
          messages: messages
        });
      },
      error: function error() {
        var level = 0;

        for (var _len4 = arguments.length, messages = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          messages[_key4] = arguments[_key4];
        }

        displayLogs({
          level: level,
          messages: messages
        });
      }
    };
  };
}

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/loadResources/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/loadResources/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadResources = __webpack_require__(/*! ./loadResources */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/loadResources/loadResources.js");

Object.keys(_loadResources).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loadResources[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/loadResources/loadResources.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/loadResources/loadResources.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadResources = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _promiseSerial = __webpack_require__(/*! ../promiseSerial */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/promiseSerial/index.js");

var _loading = __webpack_require__(/*! ../loading */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/loading/index.js");

/* eslint-env browser */

/**
 * Load a set of resources organized in serial and parallel.
 * @param  {Object[]} resources
 * @param  {string[]} [resources[].images]
 * @param  {string[]} [resources[].scripts]
 * @param  {string[]} [resources[].styles]
 * @return {Promise}
 * @example
 * // This will load 'script1' and 'style1' first in parallel and then
 * // 'img1' and 'img2' after in parallel.
 * loadResources([
 *   { scripts: ['script1.js'], styles: ['style1.css'] },
 *   { images: ['img1.png', 'img2.png'] }
 * ]);
 */
var loadResources = function loadResources(resources) {
  return (0, _promiseSerial.promiseSerial)(resources.map(function (resourcesSet) {
    var _resourcesSet$styles = resourcesSet.styles,
        styles = _resourcesSet$styles === void 0 ? [] : _resourcesSet$styles,
        _resourcesSet$scripts = resourcesSet.scripts,
        scripts = _resourcesSet$scripts === void 0 ? [] : _resourcesSet$scripts,
        _resourcesSet$images = resourcesSet.images,
        images = _resourcesSet$images === void 0 ? [] : _resourcesSet$images;
    return function () {
      return Promise.all([].concat((0, _toConsumableArray2.default)(styles.map(_loading.loadStyle)), (0, _toConsumableArray2.default)(scripts.map(_loading.loadScript)), (0, _toConsumableArray2.default)(images.map(_loading.loadImage))));
    };
  }));
};

exports.loadResources = loadResources;

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/loading/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/loading/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loading = __webpack_require__(/*! ./loading */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/loading/loading.js");

Object.keys(_loading).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loading[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/loading/loading.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/loading/loading.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadImage = exports.loadStyle = exports.loadScript = void 0;

/* eslint-env browser */

/**
 * Load a JavaScript file by URL.
 * @param  {string} url
 * @return {Promise}
 * @example
 * loadScript('app.js').then(() => console.log('Loaded.'));
 */
var loadScript = function loadScript(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');

    script.onload = function () {
      return resolve(script);
    };

    script.onerror = script.onabort = function () {
      return reject(url);
    };

    script.type = 'application/javascript';
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
/**
 * Load a CSS file by URL.
 * @param  {string} url
 * @return {Promise}
 * @example
 * loadStyle('app.css').then(() => console.log('Loaded.'));
 */


exports.loadScript = loadScript;

var loadStyle = function loadStyle(url) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');

    link.onload = function () {
      return resolve(link);
    };

    link.onerror = link.onabort = function () {
      return reject(url);
    };

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
  });
};
/**
 * Load an image file by URL.
 * @param  {string} url
 * @return {Promise}
 * @example
 * loadImage('logo.png').then(() => console.log('Loaded.'));
 */


exports.loadStyle = loadStyle;

var loadImage = function loadImage(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();

    img.onload = function () {
      return resolve(img);
    };

    img.onerror = img.onabort = function () {
      return reject(url);
    };

    img.src = url;
  });
};

exports.loadImage = loadImage;

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/promiseSerial/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/promiseSerial/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promiseSerial = __webpack_require__(/*! ./promiseSerial */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/promiseSerial/promiseSerial.js");

Object.keys(_promiseSerial).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _promiseSerial[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/promiseSerial/promiseSerial.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/promiseSerial/promiseSerial.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseSerial = void 0;

/**
 * Run a list of functions in serial in a chain of promises.
 * This is like `Promise.all()` but in serial.
 * The value received in a promise is the value of the previous promise.
 * @param  {Function[]} fns
 * @return {Promise}
 * @example
 * promiseSerial([
  *   fetch('image1.png'),
  *   fetch('image2.png'),
  *   fetch('image3.png')
  * ]).then(lastRes => {
  *   // Receives last promise result.
  * });
  */
var promiseSerial = function promiseSerial(fns) {
  var initialPromise = Promise.resolve();
  return fns.reduce(function (serial, fn) {
    return serial.then(fn);
  }, initialPromise);
};

exports.promiseSerial = promiseSerial;

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/types/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/types/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(/*! ./types */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/types/types.js");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/@hugemde/admire-dev-tools-tools/lib/types/types.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@hugemde/admire-dev-tools-tools/lib/types/types.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = exports.isString = exports.isPlainObject = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

/**
 * If the provided data is a plain object.
 * @param  {*}  data
 * @return {boolean}
 */
var isPlainObject = function isPlainObject(data) {
  return !!data && (0, _typeof2.default)(data) === 'object' && !Array.isArray(data);
};
/**
 * If the provided data is a string.
 * @param  {*}  data
 * @return {boolean}
 */


exports.isPlainObject = isPlainObject;

var isString = function isString(data) {
  return typeof data === 'string';
};
/**
 * If the provided data is a number.
 * @param  {*}  data
 * @return {boolean}
 */


exports.isString = isString;

var isNumber = function isNumber(data) {
  return typeof data === 'number';
};

exports.isNumber = isNumber;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/promise-polyfill/src/allSettled.js":
/*!*********************************************************!*\
  !*** ./node_modules/promise-polyfill/src/allSettled.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function allSettled(arr) {
  var P = this;
  return new P(function(resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(
        new TypeError(
          typeof arr +
            ' ' +
            arr +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        var then = val.then;
        if (typeof then === 'function') {
          then.call(
            val,
            function(val) {
              res(i, val);
            },
            function(e) {
              args[i] = { status: 'rejected', reason: e };
              if (--remaining === 0) {
                resolve(args);
              }
            }
          );
          return;
        }
      }
      args[i] = { status: 'fulfilled', value: val };
      if (--remaining === 0) {
        resolve(args);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (allSettled);


/***/ }),

/***/ "./node_modules/promise-polyfill/src/finally.js":
/*!******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/finally.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (finallyConstructor);


/***/ }),

/***/ "./node_modules/promise-polyfill/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "./node_modules/promise-polyfill/src/finally.js");
/* harmony import */ var _allSettled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allSettled */ "./node_modules/promise-polyfill/src/allSettled.js");



// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.allSettled = _allSettled__WEBPACK_IMPORTED_MODULE_1__["default"];

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/promise-polyfill/src/polyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/polyfill.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/promise-polyfill/src/index.js");
/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finally */ "./node_modules/promise-polyfill/src/finally.js");
/* harmony import */ var _allSettled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allSettled */ "./node_modules/promise-polyfill/src/allSettled.js");




/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

// Expose the polyfill if Promise is undefined or set to a
// non-function value. The latter can be due to a named HTMLElement
// being exposed by browsers for legacy reasons.
// https://github.com/taylorhakes/promise-polyfill/issues/114
if (typeof globalNS['Promise'] !== 'function') {
  globalNS['Promise'] = _index__WEBPACK_IMPORTED_MODULE_0__["default"];
} else if (!globalNS.Promise.prototype['finally']) {
  globalNS.Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_1__["default"];
} else if (!globalNS.Promise.allSettled) {
  globalNS.Promise.allSettled = _allSettled__WEBPACK_IMPORTED_MODULE_2__["default"];
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/campaigns/tentativeName/300x250/modules/animations.js":
/*!*******************************************************************!*\
  !*** ./src/campaigns/tentativeName/300x250/modules/animations.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainTimeline = getMainTimeline;

var _elements = __webpack_require__(/*! src/core/elements */ "./src/core/elements/index.js");

var _animation = __webpack_require__(/*! src/core/animation */ "./src/core/animation/index.js");

var _utils = __webpack_require__(/*! src/core/utils */ "./src/core/utils/index.js");

function animateFrame1(domElements, dynamicOptions) {
  var headline1 = domElements.headline1,
      headlineText1 = domElements.headlineText1,
      subheadlineF1 = domElements.subheadlineF1,
      logo = domElements.logo,
      imageFrame1 = domElements.imageFrame1,
      bgPattern = domElements.bgPattern; // eslint-disable-next-line camelcase

  var F1_overwrite_edge_case = dynamicOptions.F1_overwrite_edge_case,
      imageVersion = dynamicOptions.imageVersion;
  return gsap.timeline().call(_utils.setContainerClass, [{
    overwrite: F1_overwrite_edge_case,
    shrinkOptions: {
      elements: [headlineText1, subheadlineF1],
      container: headline1,
      parent: _elements.ad
    }
  }]).add([imageVersion && [gsap.set(bgPattern, {
    opacity: 0
  }), gsap.to(imageFrame1, {
    opacity: 1
  })], !imageVersion && [(0, _animation.animateInOut)(bgPattern, 'right', 'in'), (0, _animation.animateShowX)(logo, -20).delay(0.2)]]).add([(0, _animation.animateShowX)(headlineText1, -20).delay(0.2), (0, _animation.animateShowX)(subheadlineF1, -20).delay(0.4)], '>0.4').to([subheadlineF1, headlineText1], {
    opacity: 0,
    x: 20,
    stagger: 0.2,
    delay: 2
  });
}

function animateFrame2(domElements, dynamicOptions) {
  var headline2 = domElements.headline2,
      headlineText2 = domElements.headlineText2,
      subheadlineF2 = domElements.subheadlineF2,
      imageFrame2 = domElements.imageFrame2; // eslint-disable-next-line camelcase

  var F2_overwrite_edge_case = dynamicOptions.F2_overwrite_edge_case,
      imageVersion = dynamicOptions.imageVersion;
  return gsap.timeline().call(_utils.setContainerClass, [{
    overwrite: F2_overwrite_edge_case,
    shrinkOptions: {
      elements: [headlineText2, subheadlineF2],
      container: headline2,
      parent: _elements.ad
    }
  }]).add([imageVersion && gsap.to(imageFrame2, {
    opacity: 1
  }), (0, _animation.animateShowX)(headlineText2, -20).delay(0.2), (0, _animation.animateShowX)(subheadlineF2, -20).delay(0.4)]).to([subheadlineF2, headline2], {
    opacity: 0,
    x: 20,
    stagger: 0.2,
    delay: 2
  });
}

function animateFrame3(domElements, dynamicOptions) {
  var headline3 = domElements.headline3,
      headlineText3 = domElements.headlineText3,
      imageFrame1 = domElements.imageFrame1,
      imageFrame2 = domElements.imageFrame2,
      imageFrame3 = domElements.imageFrame3,
      ctaContainer = domElements.ctaContainer,
      subheadlineF3 = domElements.subheadlineF3,
      bgOfferPattern = domElements.bgOfferPattern,
      bgPattern = domElements.bgPattern,
      disclaimerButton = domElements.disclaimerButton,
      logo = domElements.logo; // eslint-disable-next-line camelcase

  var F2_overwrite_edge_case = dynamicOptions.F2_overwrite_edge_case,
      imageVersion = dynamicOptions.imageVersion;
  return gsap.timeline().call(_utils.setContainerClass, [{
    remove: 'main-headline-frame-1',
    add: 'main-headline-frame-3',
    overwrite: F2_overwrite_edge_case,
    shrinkOptions: {
      elements: [headlineText3, subheadlineF3],
      container: headline3,
      parent: _elements.ad
    }
  }]).add([imageVersion && gsap.to([imageFrame1, imageFrame2], {
    opacity: 0
  }), !imageVersion && (0, _animation.animateInOut)(bgPattern, 'right', 'out'), (0, _animation.animateInOut)(bgOfferPattern, 'right', 'in').delay(0.2), imageVersion && (0, _animation.animateShowX)(logo, -20).delay(0.7), (0, _animation.animateShowX)(headlineText3, -20).delay(2), (0, _animation.animateShowX)(subheadlineF3, -20).delay(2.1), (0, _animation.animateShowX)(imageFrame3, 20).delay(1.8), (0, _animation.animateShowX)(ctaContainer, -20).delay(2.1), gsap.to(disclaimerButton, {
    opacity: 1
  }).delay(2.5)]);
}

function getMainTimeline(domElementsParam, dynamicOptions) {
  return gsap.timeline().to(_elements.ad, {
    duration: 1,
    opacity: 1,
    ease: 'power4.out'
  }, 'in').add(animateFrame1(domElementsParam, dynamicOptions), '=-2').add(animateFrame2(domElementsParam, dynamicOptions)).add(animateFrame3(domElementsParam, dynamicOptions));
}

/***/ }),

/***/ "./src/campaigns/tentativeName/300x250/modules/settings.js":
/*!*****************************************************************!*\
  !*** ./src/campaigns/tentativeName/300x250/modules/settings.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIELDS = exports.IMAGE_ASSETS = void 0;
var IMAGE_ASSETS = [{
  key: 'asset__image-frame-1',
  url: 'images/imageFrame1.png'
}, {
  key: 'asset__image-frame-2',
  url: 'images/imageFrame2.png'
}, {
  key: 'asset__image-frame3',
  url: 'images/imageFrame3.png'
}, {
  key: 'asset__bg-pattern',
  url: 'images/bgPattern.png'
}, {
  key: 'asset__bg-offer-pattern',
  url: 'images/bgOfferPattern.png'
}, {
  key: 'asset__logo',
  url: 'images/logo.png'
}];
exports.IMAGE_ASSETS = IMAGE_ASSETS;
var FIELDS = [{
  selector: '.headline-1',
  type: 'element',
  valueKey: 'headline1'
}, {
  selector: '.headline-2',
  type: 'element',
  valueKey: 'headline2'
}, {
  selector: '.headline-3',
  type: 'element',
  valueKey: 'headline3'
}, {
  selector: '.headline__text-1',
  type: 'text',
  valueKey: 'headlineText1'
}, {
  selector: '.headline__text-2',
  type: 'text',
  valueKey: 'headlineText2'
}, {
  selector: '.headline__text-3',
  type: 'text',
  valueKey: 'headlineText3'
}, {
  selector: '.subheadline__f1',
  type: 'text',
  valueKey: 'subheadlineF1'
}, {
  selector: '.subheadline__f2',
  type: 'text',
  valueKey: 'subheadlineF2'
}, {
  selector: '.subheadline__f3',
  type: 'text',
  valueKey: 'subheadlineF3'
}, {
  selector: '.cta__container',
  type: 'element',
  valueKey: 'ctaContainer'
}, {
  selector: '.cta__text',
  type: 'text',
  valueKey: 'ctaText',
  colorKey: 'ctaColor'
}, {
  selector: '.asset__bg-pattern',
  type: 'image',
  valueKey: 'bgPattern'
}, {
  selector: '.asset__bg-offer-pattern',
  type: 'image',
  valueKey: 'bgOfferPattern'
}, {
  selector: '.asset__image-frame-1',
  type: 'image',
  valueKey: 'imageFrame1',
  altText: 'atlTextFrame1'
}, {
  selector: '.asset__image-frame-2',
  type: 'image',
  valueKey: 'imageFrame2'
}, {
  selector: '.asset__image-frame-3',
  type: 'image',
  valueKey: 'imageFrame3'
}, {
  selector: '.logo',
  type: 'image',
  valueKey: 'logo'
}, {
  selector: '.exit',
  type: 'element',
  valueKey: 'exit'
}, {
  selector: '.disclaimer__container',
  type: 'element',
  valueKey: 'disclaimerContainer'
}, {
  selector: '.disclaimer__button',
  type: 'element',
  valueKey: 'disclaimerButton'
}, {
  selector: '.disclaimer__close-button',
  type: 'element',
  valueKey: 'disclaimerCloseButton'
}, {
  selector: '.disclaimer__text',
  type: 'text',
  valueKey: 'disclaimerContent'
}];
exports.FIELDS = FIELDS;

/***/ }),

/***/ "./src/campaigns/tentativeName/300x250/shell.js":
/*!******************************************************!*\
  !*** ./src/campaigns/tentativeName/300x250/shell.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

__webpack_require__(/*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");

var _masterTemplateV = __webpack_require__(/*! src/templates/masterTemplateV2 */ "./src/templates/masterTemplateV2/index.js");

var _dom = __webpack_require__(/*! src/core/dom */ "./src/core/dom/index.js");

__webpack_require__(/*! ./shell.scss */ "./src/campaigns/tentativeName/300x250/shell.scss");

var _storeLocator = __webpack_require__(/*! src/core/modules/store-locator */ "./src/core/modules/store-locator.js");

var _settings = __webpack_require__(/*! ./modules/settings */ "./src/campaigns/tentativeName/300x250/modules/settings.js");

var _animations = __webpack_require__(/*! ./modules/animations */ "./src/campaigns/tentativeName/300x250/modules/animations.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var domElements = _settings.FIELDS.reduce(function (accumulator, element) {
  return _objectSpread(_objectSpread({}, accumulator), {}, (0, _defineProperty2.default)({}, element.valueKey, (0, _dom.$)(element.selector)));
}, {});

function extendedFunction() {
  if (myFT.instantAds.imageVersion) {
    document.body.classList.add('image-version');
  }

  (0, _storeLocator.storeLocator)();
}

(0, _masterTemplateV.initializeFTApp)({
  fields: _settings.FIELDS,
  imageAssets: _settings.IMAGE_ASSETS,
  extendedFunction: extendedFunction,
  getMainTimeline: _animations.getMainTimeline,
  domElements: domElements
});

/***/ }),

/***/ "./src/campaigns/tentativeName/300x250/shell.scss":
/*!********************************************************!*\
  !*** ./src/campaigns/tentativeName/300x250/shell.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/core/animation/animation.js":
/*!*****************************************!*\
  !*** ./src/core/animation/animation.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateShapes = animateShapes;
exports.animateShowY = animateShowY;
exports.animateShowX = animateShowX;
exports.animateInOut = animateInOut;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _dom = __webpack_require__(/*! src/core/dom */ "./src/core/dom/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function animateShapes(shapes) {
  var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var repeatDelay = arguments.length > 2 ? arguments[2] : undefined;
  var tweens = shapes.map(function (_ref) {
    var shapeSelector = _ref.shapeSelector,
        origin = _ref.origin,
        color = _ref.color;
    var bgShape = (0, _dom.$)(shapeSelector);

    if (color) {
      bgShape.style.color = color;
    }

    return gsap.fromTo(bgShape, {
      scale: 0,
      transformOrigin: origin
    }, {
      duration: 0.4,
      scale: 1,
      opacity: 1,
      transformOrigin: origin,
      ease: 'power3.out',
      repeat: repeat,
      yoyo: true
    }).repeatDelay(repeatDelay);
  });
  return gsap.timeline().add(tweens);
}

function animateShowY(element, origin) {
  return gsap.timeline().fromTo(element, {
    y: origin
  }, {
    y: 0,
    opacity: 1
  });
}

function animateShowX(element, origin) {
  return gsap.timeline().fromTo(element, {
    x: origin,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  });
}

function animateInOut(element, directionKey, animationOrigin) {
  var transitionSetup = {
    top: {
      translate: {
        yPercent: -100
      },
      scale: {
        scaleY: 0,
        transformOrigin: 'top'
      }
    },
    right: {
      translate: {
        xPercent: 100
      },
      scale: {
        scaleX: 0,
        transformOrigin: 'right'
      }
    },
    left: {
      translate: {
        xPercent: -100
      },
      scale: {
        scaleX: 0,
        transformOrigin: 'left'
      }
    },
    bottom: {
      translate: {
        yPercent: 100
      },
      scale: {
        scaleY: 0,
        transformOrigin: 'bottom'
      }
    }
  };
  var _transitionSetup$dire = transitionSetup[directionKey],
      translate = _transitionSetup$dire.translate,
      scale = _transitionSetup$dire.scale;
  var animation = {
    in: function _in() {
      return gsap.timeline().from(element, 2, _objectSpread(_objectSpread({}, translate), {}, {
        opacity: 0,
        ease: 'expo.inOut'
      })).add(gsap.from(element, 1, _objectSpread(_objectSpread({}, scale), {}, {
        ease: 'expo.out'
      })), '-=1');
    },
    out: function out() {
      return gsap.timeline().to(element, 1, _objectSpread(_objectSpread({}, translate), {}, {
        opacity: 0,
        ease: 'expo.in'
      })).add(gsap.to(element, 0.8, _objectSpread(_objectSpread({}, scale), {}, {
        ease: 'expo.in'
      })), '-=1');
    }
  };
  return animation[animationOrigin]();
}

;

/***/ }),

/***/ "./src/core/animation/index.js":
/*!*************************************!*\
  !*** ./src/core/animation/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animation = __webpack_require__(/*! ./animation */ "./src/core/animation/animation.js");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _animation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animation[key];
    }
  });
});

/***/ }),

/***/ "./src/core/dom/dom.js":
/*!*****************************!*\
  !*** ./src/core/dom/dom.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.$$ = $$;

/**
 * Finds an HTMLElement by CSS selector in the document or inside
 * the provided element.
 * @param  {string} selector - CSS selector.
 * @param  {HTMLElement} [node=document]
 * @return {HTMLElement}
 */
function $(selector) {
  var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return node.querySelector(selector);
}
/**
 * Finds a list of HTMLElements by CSS selector in the document or inside
 * the provided element.
 * @param  {string} selector - CSS selector.
 * @param  {HTMLElement} [node=document]
 * @return {HTMLElement[]}
 */


function $$(selector) {
  var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return [].slice.call(node.querySelectorAll(selector));
}

/***/ }),

/***/ "./src/core/dom/index.js":
/*!*******************************!*\
  !*** ./src/core/dom/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(/*! ./dom */ "./src/core/dom/dom.js");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dom[key];
    }
  });
});

/***/ }),

/***/ "./src/core/elements/elements.js":
/*!***************************************!*\
  !*** ./src/core/elements/elements.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disclaimerClose = exports.disclaimer = exports.mainCTA = exports.hoverHeadline = exports.mainHeadline = exports.headlines = exports.ad = void 0;

var _dom = __webpack_require__(/*! src/core/dom */ "./src/core/dom/index.js");

var ad = (0, _dom.$)('.ad');
exports.ad = ad;
var headlines = (0, _dom.$$)('.headline');
exports.headlines = headlines;
var mainHeadline = (0, _dom.$)('.main-headline');
exports.mainHeadline = mainHeadline;
var hoverHeadline = (0, _dom.$)('.hover-headline');
exports.hoverHeadline = hoverHeadline;
var mainCTA = (0, _dom.$)('.main-cta');
exports.mainCTA = mainCTA;
var disclaimer = (0, _dom.$)('.disclaimer-container');
exports.disclaimer = disclaimer;
var disclaimerClose = (0, _dom.$)('.disclaimer__button-close');
exports.disclaimerClose = disclaimerClose;

/***/ }),

/***/ "./src/core/elements/index.js":
/*!************************************!*\
  !*** ./src/core/elements/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elements = __webpack_require__(/*! ./elements */ "./src/core/elements/elements.js");

Object.keys(_elements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _elements[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _elements[key];
    }
  });
});

/***/ }),

/***/ "./src/core/modules/store-locator.js":
/*!*******************************************!*\
  !*** ./src/core/modules/store-locator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeLocator = storeLocator;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _dom = __webpack_require__(/*! src/core/dom */ "./src/core/dom/index.js");

var DEFAULT_FEED_PATH = 'feeds/uscellular/FBI-4464/stores/';
var REPLACE_QUERY = '[place]';
var FALLBACK_QUERY = 'your town';

function storeLocator() {
  return new Promise(function (resolve) {
    var locatorPath = myFT.instantAds.feedPath || DEFAULT_FEED_PATH;

    myFT.require(['storelocator'], function (StoreLocator) {
      var sl = new StoreLocator({
        locatorPath: locatorPath,
        // feed path dynamic variable named feedPath with backup
        numberToReturn: 1,
        // optional
        maxDistanceMiles: 880,
        // optional--adjust to max distance the storelocator will return results for. If no results returned/no location within maxDistanceMiles, then the storelocator 'error' handler will trigger (below)
        locationOrder: ['impression'] // optional

      });
      sl.on('storesfound', function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
            stores = _ref2[0];

        var isMaxCharacter = stores.cityname.length <= 13;
        findMutableHeadings().forEach(function (element) {
          element.innerHTML = replaceHeadingValue(element, isMaxCharacter ? stores.cityname : FALLBACK_QUERY);
        });
        console.info('Store Value Returned: ', stores);
        resolve();
      });
      sl.on('error', function () {
        findMutableHeadings().forEach(function (element) {
          element.innerHTML = replaceHeadingValue(element, FALLBACK_QUERY);
        });
        resolve();
      });
      sl.init();
    });
  });
}

function replaceHeadingValue(element, storeLocatorValue) {
  return element.innerHTML.replace(REPLACE_QUERY, storeLocatorValue);
}

function findMutableHeadings() {
  var headings = (0, _dom.$$)('.headline__text');

  var includesPlaces = function includesPlaces(element) {
    return element.innerText.indexOf('[place]') > -1;
  };

  return headings.filter(includesPlaces);
}

/***/ }),

/***/ "./src/core/utils/index.js":
/*!*********************************!*\
  !*** ./src/core/utils/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utlis = __webpack_require__(/*! ./utlis */ "./src/core/utils/utlis.js");

Object.keys(_utlis).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utlis[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utlis[key];
    }
  });
});

/***/ }),

/***/ "./src/core/utils/utlis.js":
/*!*********************************!*\
  !*** ./src/core/utils/utlis.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setShrinkClass = setShrinkClass;
exports.setContainerClass = setContainerClass;
exports.shrinkClasses = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _elements = __webpack_require__(/*! ../elements */ "./src/core/elements/index.js");

var shrinkClasses = ['ad--shrink-medium', 'ad--shrink-small', 'ad--shrink-extra-small'];
/**
 * Loop to find edge case class until content does not overflow or it gets the smallest class
 * @param  {HTMLElement|Array.<HTMLElement>} elements The elment or elments to get the total height and width
 * @param  {HTMLElement} parent The element to add the final class
 * @param  {HTMLElement} container The element to check if its children overflow it
 */

exports.shrinkClasses = shrinkClasses;

function setShrinkClass(elements) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _elements.ad;
  var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _elements.mainHeadline;
  // It has to be this way because IE does not support remove(..[]) it appear to be a polyfill issue
  shrinkClasses.forEach(function (stringClass) {
    return parent.classList.remove(stringClass);
  });
  var shrinkPhase = 0;

  function calcShrink() {
    var _elements$reduce, _elements$map;

    // Get the total height of children elements.
    var elementsHeight = ((_elements$reduce = elements.reduce) === null || _elements$reduce === void 0 ? void 0 : _elements$reduce.call(elements, function (totalHeight, element) {
      return totalHeight + element.offsetHeight;
    }, 0)) || elements.offsetHeight; // Get the wider element value

    var elementsWidth = Math.max.apply(Math, (0, _toConsumableArray2.default)(((_elements$map = elements.map) === null || _elements$map === void 0 ? void 0 : _elements$map.call(elements, function (_ref) {
      var offsetWidth = _ref.offsetWidth;
      return offsetWidth;
    })) || [elements.offsetWidth]));
    /**
     * Check if children sizes overflows container and apply
     * The process is repeate the proccess until childrend dont overflow or the last class is applied
     */

    if (container.offsetHeight < elementsHeight || container.offsetWidth < elementsWidth) {
      parent.classList.add(shrinkClasses[shrinkPhase]);
      shrinkPhase += 1;

      if (shrinkPhase < shrinkClasses.length) {
        calcShrink();
      }
    }
  }

  calcShrink();
}

function setContainerClass(_ref2) {
  var remove = _ref2.remove,
      add = _ref2.add,
      shrinkOptions = _ref2.shrinkOptions,
      overwrite = _ref2.overwrite;
  var medium = shrinkClasses[0],
      small = shrinkClasses[1],
      extraSmall = shrinkClasses[2];
  var elements = shrinkOptions.elements,
      parent = shrinkOptions.parent,
      container = shrinkOptions.container;
  var overwriteOptions = {
    'L': 'default',
    'M': medium,
    'S': small,
    'XS': extraSmall
  };
  var overwriteClass = overwriteOptions[overwrite];
  if (remove) _elements.mainHeadline.classList.remove(remove);
  if (add) _elements.mainHeadline.classList.add(add);

  if (overwriteClass) {
    shrinkClasses.forEach(function (stringClass) {
      return parent.classList.remove(stringClass);
    });
    parent.classList.add(overwriteClass);
  } else {
    setShrinkClass(elements, parent, container);
  }
}

/***/ }),

/***/ "./src/templates/masterTemplateV2/index.js":
/*!*************************************************!*\
  !*** ./src/templates/masterTemplateV2/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeApp = initializeApp;
exports.initializeFTApp = initializeFTApp;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _vanilla = __webpack_require__(/*! @hugemde/admire-dev-tools-ad/lib/vanilla */ "./node_modules/@hugemde/admire-dev-tools-ad/lib/vanilla/index.js");

var _changeTabEvent = __webpack_require__(/*! @hugemde/admire-dev-tools-tools/lib/changeTabEvent */ "./node_modules/@hugemde/admire-dev-tools-tools/lib/changeTabEvent/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function setDynamicValues(fields, values, domElements) {
  fields.forEach(function (_ref) {
    var type = _ref.type,
        valueKey = _ref.valueKey,
        altText = _ref.altText,
        colorKey = _ref.colorKey;
    var domElement = domElements[valueKey];

    switch (type) {
      case 'text':
        domElement.innerHTML = values[valueKey] || '';

        if (colorKey) {
          domElement.style.color = values[colorKey];
        }

        break;

      case 'image':
        domElement.src = values[valueKey];
        if (myFT.instantAds["".concat(valueKey, "AltText")]) domElement.alt = myFT.instantAds["".concat(valueKey, "AltText")];
        break;

      default:
        break;
    }
  });
}

function toggleDisclaimer(open, domElements) {
  if (open) {
    domElements.disclaimerContainer.style.display = 'block';
    setTimeout(function () {
      domElements.disclaimerContainer.classList.add('disclaimer__container--open');
      setTimeout(function () {
        domElements.disclaimerCloseButton.focus();
      }, 100);
    }, 200);
  } else {
    domElements.disclaimerContainer.classList.remove('disclaimer__container--open');
    setTimeout(function () {
      domElements.disclaimerContainer.style.display = 'none';
      domElements.exit.focus();
    }, 200);
  }
}

function setupEvents(applyClickTags, values, getMainTimeline, domElements) {
  domElements.disclaimerButton.addEventListener('click', function () {
    return toggleDisclaimer(true, domElements);
  });
  domElements.logo.focus();
  domElements.disclaimerCloseButton.addEventListener('click', function () {
    return toggleDisclaimer(false, domElements);
  });
  applyClickTags(domElements);
  (0, _changeTabEvent.onChangeTabEvent)(function (visibility) {
    var timeline = window.ad.timeline;

    if (visibility === 'hidden') {
      // If tab is hidden when the ad was in the middle of showing,
      // go to the end of the animation.
      // eslint-disable-next-line no-unused-expressions
      timeline === null || timeline === void 0 ? void 0 : timeline.progress(1);
    } else {
      // If tab is visible and animation not created, create it.
      if (!timeline) {
        window.ad.timeline = getMainTimeline(domElements, values);
      }
    }
  });
}

function addFTClickTags(domElements) {
  myFT.applyClickTag(domElements.exit, 1, myFT.instantAds.bgURL);
  myFT.applyClickTag(domElements === null || domElements === void 0 ? void 0 : domElements.cta, 2, myFT.instantAds.ctaURL);
}

function addClickTags(domElements) {
  domElements.exit.addEventListener('click', function () {
    return window.open(window.clickTag1);
  }); // eslint-disable-next-line no-unused-expressions

  domElements === null || domElements === void 0 ? void 0 : domElements.cta.addEventListener('click', function () {
    return window.open(window.clickTag2);
  });
}

function initializeFTApp(_ref2) {
  var fields = _ref2.fields,
      extendedFunction = _ref2.extendedFunction,
      extraValues = _ref2.extraValues,
      getMainTimeline = _ref2.getMainTimeline,
      imageAssets = _ref2.imageAssets,
      domElements = _ref2.domElements;
  myFT.on('instantads', function () {
    (0, _vanilla.setupAd)({
      politeResources: [{
        images: imageAssets.map(function (_ref3) {
          var url = _ref3.url;
          return url;
        })
      }],
      onComplete: function () {
        var _onComplete = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
          var values;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  values = _objectSpread(_objectSpread({}, myFT.instantAds), extraValues);
                  window.ad = {};
                  setDynamicValues(fields, values, domElements); // eslint-disable-next-line no-unused-expressions

                  _context.next = 5;
                  return extendedFunction === null || extendedFunction === void 0 ? void 0 : extendedFunction();

                case 5:
                  setupEvents(addFTClickTags, values, getMainTimeline, domElements);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function onComplete() {
          return _onComplete.apply(this, arguments);
        }

        return onComplete;
      }()
    });
  });
}

function initializeApp(_ref4) {
  var fields = _ref4.fields,
      extendedFunction = _ref4.extendedFunction,
      values = _ref4.values,
      imageAssets = _ref4.imageAssets,
      getMainTimeline = _ref4.getMainTimeline,
      domElements = _ref4.domElements;
  (0, _vanilla.setupAd)({
    politeResources: [{
      images: imageAssets.map(function (_ref5) {
        var url = _ref5.url;
        return url;
      })
    }],
    onComplete: function () {
      var _onComplete2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.ad = {};
                setDynamicValues(fields, values, domElements); // eslint-disable-next-line no-unused-expressions

                _context2.next = 4;
                return extendedFunction === null || extendedFunction === void 0 ? void 0 : extendedFunction();

              case 4:
                setupEvents(addClickTags, values, getMainTimeline, domElements);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onComplete() {
        return _onComplete2.apply(this, arguments);
      }

      return onComplete;
    }()
  });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy1hZC9saWIvdmFuaWxsYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy1hZC9saWIvdmFuaWxsYS9tYWtlU2V0dXBBZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvY2hhbmdlVGFiRXZlbnQvY2hhbmdlVGFiRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NoYW5nZVRhYkV2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9jcmVhdGVMb2dnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NyZWF0ZUxvZ2dlci9tYWtlQ3JlYXRlTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9sb2FkUmVzb3VyY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9sb2FkUmVzb3VyY2VzL2xvYWRSZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2xvYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2xvYWRpbmcvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvcHJvbWlzZVNlcmlhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvcHJvbWlzZVNlcmlhbC9wcm9taXNlU2VyaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvdHlwZXMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvYWxsU2V0dGxlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzAweDI1MC9tb2R1bGVzL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbXBhaWducy90ZW50YXRpdmVOYW1lLzMwMHgyNTAvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzAweDI1MC9zaGVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzAweDI1MC9zaGVsbC5zY3NzP2Y2ZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hbmltYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZG9tL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZWxlbWVudHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZWxlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbW9kdWxlcy9zdG9yZS1sb2NhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWxzL3V0bGlzLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvbWFzdGVyVGVtcGxhdGVWMi9pbmRleC5qcyJdLCJuYW1lcyI6WyJhbmltYXRlRnJhbWUxIiwiZG9tRWxlbWVudHMiLCJkeW5hbWljT3B0aW9ucyIsImhlYWRsaW5lMSIsImhlYWRsaW5lVGV4dDEiLCJzdWJoZWFkbGluZUYxIiwibG9nbyIsImltYWdlRnJhbWUxIiwiYmdQYXR0ZXJuIiwiRjFfb3ZlcndyaXRlX2VkZ2VfY2FzZSIsImltYWdlVmVyc2lvbiIsImdzYXAiLCJ0aW1lbGluZSIsImNhbGwiLCJzZXRDb250YWluZXJDbGFzcyIsIm92ZXJ3cml0ZSIsInNocmlua09wdGlvbnMiLCJlbGVtZW50cyIsImNvbnRhaW5lciIsInBhcmVudCIsImFkIiwiYWRkIiwic2V0Iiwib3BhY2l0eSIsInRvIiwiZGVsYXkiLCJ4Iiwic3RhZ2dlciIsImFuaW1hdGVGcmFtZTIiLCJoZWFkbGluZTIiLCJoZWFkbGluZVRleHQyIiwic3ViaGVhZGxpbmVGMiIsImltYWdlRnJhbWUyIiwiRjJfb3ZlcndyaXRlX2VkZ2VfY2FzZSIsImFuaW1hdGVGcmFtZTMiLCJoZWFkbGluZTMiLCJoZWFkbGluZVRleHQzIiwiaW1hZ2VGcmFtZTMiLCJjdGFDb250YWluZXIiLCJzdWJoZWFkbGluZUYzIiwiYmdPZmZlclBhdHRlcm4iLCJkaXNjbGFpbWVyQnV0dG9uIiwicmVtb3ZlIiwiZ2V0TWFpblRpbWVsaW5lIiwiZG9tRWxlbWVudHNQYXJhbSIsImR1cmF0aW9uIiwiZWFzZSIsIklNQUdFX0FTU0VUUyIsImtleSIsInVybCIsIkZJRUxEUyIsInNlbGVjdG9yIiwidHlwZSIsInZhbHVlS2V5IiwiY29sb3JLZXkiLCJhbHRUZXh0IiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJlbGVtZW50IiwiZXh0ZW5kZWRGdW5jdGlvbiIsIm15RlQiLCJpbnN0YW50QWRzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiZmllbGRzIiwiaW1hZ2VBc3NldHMiLCJhbmltYXRlU2hhcGVzIiwic2hhcGVzIiwicmVwZWF0IiwicmVwZWF0RGVsYXkiLCJ0d2VlbnMiLCJtYXAiLCJzaGFwZVNlbGVjdG9yIiwib3JpZ2luIiwiY29sb3IiLCJiZ1NoYXBlIiwic3R5bGUiLCJmcm9tVG8iLCJzY2FsZSIsInRyYW5zZm9ybU9yaWdpbiIsInlveW8iLCJhbmltYXRlU2hvd1kiLCJ5IiwiYW5pbWF0ZVNob3dYIiwiYW5pbWF0ZUluT3V0IiwiZGlyZWN0aW9uS2V5IiwiYW5pbWF0aW9uT3JpZ2luIiwidHJhbnNpdGlvblNldHVwIiwidG9wIiwidHJhbnNsYXRlIiwieVBlcmNlbnQiLCJzY2FsZVkiLCJyaWdodCIsInhQZXJjZW50Iiwic2NhbGVYIiwibGVmdCIsImJvdHRvbSIsImFuaW1hdGlvbiIsImluIiwiZnJvbSIsIm91dCIsIiQiLCJub2RlIiwicXVlcnlTZWxlY3RvciIsIiQkIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVhZGxpbmVzIiwibWFpbkhlYWRsaW5lIiwiaG92ZXJIZWFkbGluZSIsIm1haW5DVEEiLCJkaXNjbGFpbWVyIiwiZGlzY2xhaW1lckNsb3NlIiwiREVGQVVMVF9GRUVEX1BBVEgiLCJSRVBMQUNFX1FVRVJZIiwiRkFMTEJBQ0tfUVVFUlkiLCJzdG9yZUxvY2F0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsImxvY2F0b3JQYXRoIiwiZmVlZFBhdGgiLCJyZXF1aXJlIiwiU3RvcmVMb2NhdG9yIiwic2wiLCJudW1iZXJUb1JldHVybiIsIm1heERpc3RhbmNlTWlsZXMiLCJsb2NhdGlvbk9yZGVyIiwib24iLCJzdG9yZXMiLCJpc01heENoYXJhY3RlciIsImNpdHluYW1lIiwibGVuZ3RoIiwiZmluZE11dGFibGVIZWFkaW5ncyIsImZvckVhY2giLCJpbm5lckhUTUwiLCJyZXBsYWNlSGVhZGluZ1ZhbHVlIiwiY29uc29sZSIsImluZm8iLCJpbml0Iiwic3RvcmVMb2NhdG9yVmFsdWUiLCJyZXBsYWNlIiwiaGVhZGluZ3MiLCJpbmNsdWRlc1BsYWNlcyIsImlubmVyVGV4dCIsImluZGV4T2YiLCJmaWx0ZXIiLCJzaHJpbmtDbGFzc2VzIiwic2V0U2hyaW5rQ2xhc3MiLCJzdHJpbmdDbGFzcyIsInNocmlua1BoYXNlIiwiY2FsY1NocmluayIsImVsZW1lbnRzSGVpZ2h0IiwidG90YWxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50c1dpZHRoIiwiTWF0aCIsIm1heCIsIm9mZnNldFdpZHRoIiwibWVkaXVtIiwic21hbGwiLCJleHRyYVNtYWxsIiwib3ZlcndyaXRlT3B0aW9ucyIsIm92ZXJ3cml0ZUNsYXNzIiwic2V0RHluYW1pY1ZhbHVlcyIsInZhbHVlcyIsImRvbUVsZW1lbnQiLCJzcmMiLCJhbHQiLCJ0b2dnbGVEaXNjbGFpbWVyIiwib3BlbiIsImRpc2NsYWltZXJDb250YWluZXIiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsImRpc2NsYWltZXJDbG9zZUJ1dHRvbiIsImZvY3VzIiwiZXhpdCIsInNldHVwRXZlbnRzIiwiYXBwbHlDbGlja1RhZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwidmlzaWJpbGl0eSIsIndpbmRvdyIsInByb2dyZXNzIiwiYWRkRlRDbGlja1RhZ3MiLCJhcHBseUNsaWNrVGFnIiwiYmdVUkwiLCJjdGEiLCJjdGFVUkwiLCJhZGRDbGlja1RhZ3MiLCJjbGlja1RhZzEiLCJjbGlja1RhZzIiLCJpbml0aWFsaXplRlRBcHAiLCJleHRyYVZhbHVlcyIsInBvbGl0ZVJlc291cmNlcyIsImltYWdlcyIsIm9uQ29tcGxldGUiLCJpbml0aWFsaXplQXBwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ0pBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFvQjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUM7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDSkEscUJBQXFCLG1CQUFPLENBQUMsaUZBQWtCOztBQUUvQywyQkFBMkIsbUJBQU8sQ0FBQyw2RkFBd0I7O0FBRTNELGlDQUFpQyxtQkFBTyxDQUFDLHlHQUE4Qjs7QUFFdkUsc0JBQXNCLG1CQUFPLENBQUMsbUZBQW1COztBQUVqRDtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7Ozs7O0FDWkEsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRCxzQkFBc0IsbUJBQU8sQ0FBQyxtRkFBbUI7O0FBRWpELGlDQUFpQyxtQkFBTyxDQUFDLHlHQUE4Qjs7QUFFdkUsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7OztBQ2hCQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkM7Ozs7Ozs7Ozs7O0FDWEEsaUJBQWlCLG1CQUFPLENBQUMsMEVBQXFCOzs7Ozs7Ozs7Ozs7O0FDQTlDLCtDQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEscUJBQXFCLG1CQUFPLENBQUMsb0lBQW1EOztBQUVoRixvQkFBb0IsbUJBQU8sQ0FBQyxrSUFBa0Q7O0FBRTlFLG1CQUFtQixtQkFBTyxDQUFDLDZGQUFlOztBQUUxQyw0Q0FBNEMsYUFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQjs7Ozs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxhQUFhO0FBQ2xDLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3SWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw4Qzs7Ozs7Ozs7Ozs7O0FDeERhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELHNCQUFzQixtQkFBTyxDQUFDLDZHQUFrQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNoQlk7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyxrSEFBdUI7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0M7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxpREFBaUQsbUJBQU8sQ0FBQyw0R0FBMEM7O0FBRW5HLDhDQUE4QyxtQkFBTyxDQUFDLHNHQUF1Qzs7QUFFN0YsYUFBYSxtQkFBTyxDQUFDLG1GQUFVOztBQUUvQiwwQ0FBMEMsZ0NBQWdDLG9DQUFvQyxvREFBb0QsOERBQThELGdFQUFnRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFblYsZ0NBQWdDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx1REFBdUQseURBQXlELEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLGlEQUFpRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUVsaUI7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU8sZUFBZTtBQUNwQyxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssWUFBWTs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0VBQStFLGFBQWE7QUFDNUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUEsa0ZBQWtGLGVBQWU7QUFDakc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUEsa0ZBQWtGLGVBQWU7QUFDakc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUEsa0ZBQWtGLGVBQWU7QUFDakc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdklhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELHFCQUFxQixtQkFBTyxDQUFDLDBHQUFpQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNoQlk7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGlEQUFpRCxtQkFBTyxDQUFDLDRHQUEwQzs7QUFFbkcscUJBQXFCLG1CQUFPLENBQUMsbUdBQWtCOztBQUUvQyxlQUFlLG1CQUFPLENBQUMsdUZBQVk7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWSxTQUFTO0FBQ3JCLFlBQVksU0FBUztBQUNyQixZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBa0Q7QUFDeEQsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7QUM5Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZUFBZSxtQkFBTyxDQUFDLHdGQUFXOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ2hCWTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7QUN6RmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQscUJBQXFCLG1CQUFPLENBQUMsMEdBQWlCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ2hCWTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7QUM3QmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsYUFBYSxtQkFBTyxDQUFDLGtGQUFTOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ2hCWTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsc0NBQXNDLG1CQUFPLENBQUMsc0ZBQStCOztBQUU3RTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVk7QUFDWjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVk7QUFDWjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCOzs7Ozs7Ozs7OztBQzVDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hEMUI7QUFBQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFZSxpRkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RCbEM7QUFBQTtBQUFBO0FBQXVDO0FBQ0Q7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLGdEQUFjOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEscUJBQXFCLG1EQUFVOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFZSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7OztBQzlQdkI7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDUztBQUNEOztBQUV0QyxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBTztBQUMvQixDQUFDO0FBQ0QsMENBQTBDLGdEQUFjO0FBQ3hELENBQUM7QUFDRCxnQ0FBZ0MsbURBQVU7QUFDMUM7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7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bkksTUFBK0UsU0FBL0VBLE1BQStFO0FBQUEsTUFBdkVOLGdCQUF1RSxTQUF2RUEsZ0JBQXVFO0FBQUEsTUFBckQwRyxNQUFxRCxTQUFyREEsTUFBcUQ7QUFBQSxNQUE3Q25HLFdBQTZDLFNBQTdDQSxXQUE2QztBQUFBLE1BQWhDdkIsZUFBZ0MsU0FBaENBLGVBQWdDO0FBQUEsTUFBZjFDLFdBQWUsU0FBZkEsV0FBZTtBQUN2Ryx3QkFBUTtBQUNOZ00sbUJBQWUsRUFBRSxDQUFDO0FBQ2hCQyxZQUFNLEVBQUVoSSxXQUFXLENBQUNNLEdBQVosQ0FBZ0I7QUFBQSxZQUFHdkIsR0FBSCxTQUFHQSxHQUFIO0FBQUEsZUFBYUEsR0FBYjtBQUFBLE9BQWhCO0FBRFEsS0FBRCxDQURYO0FBSU5rSixjQUFVO0FBQUEsaUdBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWZCxzQkFBTSxDQUFDakssRUFBUCxHQUFZLEVBQVo7QUFDQWdKLGdDQUFnQixDQUFDbkcsTUFBRCxFQUFTb0csTUFBVCxFQUFpQnBLLFdBQWpCLENBQWhCLENBRlUsQ0FHVjs7QUFIVTtBQUFBLHVCQUlKMEQsZ0JBSkksYUFJSkEsZ0JBSkksdUJBSUpBLGdCQUFnQixFQUpaOztBQUFBO0FBS1ZzSCwyQkFBVyxDQUFDVyxZQUFELEVBQWV2QixNQUFmLEVBQXVCMUgsZUFBdkIsRUFBd0MxQyxXQUF4QyxDQUFYOztBQUxVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFKSixHQUFSO0FBWUQsQyIsImZpbGUiOiIzMDB4MjUwL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jYW1wYWlnbnMvdGVudGF0aXZlTmFtZS8zMDB4MjUwL3NoZWxsLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYWQgPSBleHBvcnRzLnNldHVwQWQgPSB2b2lkIDA7XG5cbnZhciBfbG9hZFJlc291cmNlcyA9IHJlcXVpcmUoXCJAaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9sb2FkUmVzb3VyY2VzXCIpO1xuXG52YXIgX2NyZWF0ZUxvZ2dlciA9IHJlcXVpcmUoXCJAaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9jcmVhdGVMb2dnZXJcIik7XG5cbnZhciBfbWFrZVNldHVwQWQgPSByZXF1aXJlKFwiLi9tYWtlU2V0dXBBZFwiKTtcblxudmFyIGVudiA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbnZhciBsb2dMZXZlbCA9IGVudiA9PT0gJ3Byb2R1Y3Rpb24nID8gMiA6IDM7XG52YXIgbG9nID0gKDAsIF9jcmVhdGVMb2dnZXIuY3JlYXRlTG9nZ2VyKSgnYWQnLCB7XG4gIGxldmVsOiBsb2dMZXZlbFxufSk7XG52YXIgc2V0dXBBZCA9ICgwLCBfbWFrZVNldHVwQWQubWFrZVNldHVwQWQpKHtcbiAgd2luZG93OiB3aW5kb3csXG4gIGxvYWRSZXNvdXJjZXM6IF9sb2FkUmVzb3VyY2VzLmxvYWRSZXNvdXJjZXMsXG4gIGxvZzogbG9nXG59KTtcbmV4cG9ydHMuc2V0dXBBZCA9IHNldHVwQWQ7XG52YXIgYWQgPSBzZXR1cEFkO1xuZXhwb3J0cy5hZCA9IGFkOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYWtlU2V0dXBBZCA9IG1ha2VTZXR1cEFkO1xuLy8gVGhlIHRvdGFsIG51bWJlciBvZiBsaXN0cyBvZiByZXNvdXJjZXMgdG8gbG9hZCBmb3IgdGhlIGFkLlxudmFyIFJFU09VUkNFU19MSVNUU19MRU5HVEggPSAyO1xuXG5mdW5jdGlvbiBtYWtlU2V0dXBBZCgpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciB3aW5kb3cgPSBkZXBlbmRlbmNpZXMud2luZG93LFxuICAgICAgbG9hZFJlc291cmNlcyA9IGRlcGVuZGVuY2llcy5sb2FkUmVzb3VyY2VzLFxuICAgICAgbG9nID0gZGVwZW5kZW5jaWVzLmxvZztcbiAgLyoqXG4gICAqIEJhc2ljIGFkIHNldHVwIHByb2Nlc3Mgd2l0aCBubyBkZXBlbmRlbmNpZXMuXG4gICAqXG4gICAqIEBuYW1lIHZhbmlsbGEuc2V0dXBBZFxuICAgKiBAYWxpYXMgdmFuaWxsYS5hZFxuICAgKlxuICAgKiBAc2VlIFt0b29scy9sb2FkUmVzb3VyY2VzXSguLi8uLi9wYWNrYWdlcy90b29scy9BUEkubWQjbG9hZHJlc291cmNlcykgbW9kdWxlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtzZXR0aW5ncz17fV0gLSBBZCBzZXR0aW5ncy5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBbc2V0dGluZ3MudmVyc2lvbl0gLSBUaGUgYWQgdmVyc2lvbi5cbiAgICogQHBhcmFtICB7T2JqZWN0W119IFtzZXR0aW5ncy5pbml0aWFsUmVzb3VyY2VzXSAtIFJlc291cmNlcyB0byBsb2FkIHJpZ2h0IGF3YXkuXG4gICAqIEl0IGlzIHBhc3NlZCB0byBcInRvb2xzL2xvYWRSZXNvdXJjZXNcIiBtb2R1bGUuXG4gICAqIEBwYXJhbSAge09iamVjdFtdfSBbc2V0dGluZ3MucG9saXRlUmVzb3VyY2VzXSAtIFJlc291cmNlcyB0byBsb2FkIGFmdGVyXG4gICAqIHRoZSBhZCBwYWdlIGlzIGxvYWRlZC4gSXQgaXMgcGFzc2VkIHRvIFwidG9vbHMvbG9hZFJlc291cmNlc1wiIG1vZHVsZS5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IFtzZXR0aW5ncy5vbkluaXRdIC0gQ2FsbGVkIHJpZ2h0IGF3YXkuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbc2V0dGluZ3Mub25Jbml0aWFsTG9hZF0gLSBXaGVuIHRoZSBcImluaXRpYWxSZXNvdXJjZXNcIlxuICAgKiBwcm92aWRlZCBoYXZlIGJlZW4gbG9hZGVkLiBJdCBpcyBub3QgY2FsbGVkIGlmIG5vIHJlc291cmNlcyB3ZXJlIHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gW3NldHRpbmdzLm9uUmVhZHldIC0gVGhlIHByb3ZpZGVkIHJlc291cmNlcyBoYXZlIGJlZW4gbG9hZGVkLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gW3NldHRpbmdzLm9uRXJyb3JdIC0gQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyByZXNvdXJjZXMuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbc2V0dGluZ3Mub25Db21wbGV0ZV0gLSBBbHdheXMgY2FsbGVkIHdoZW4gZWl0aGVyIFwib25SZWFkeVwiIG9yIFwib25FcnJvclwiLlxuICAgKi9cblxuICByZXR1cm4gZnVuY3Rpb24gc2V0dXBBZCgpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciB2ZXJzaW9uID0gc2V0dGluZ3MudmVyc2lvbixcbiAgICAgICAgaW5pdGlhbFJlc291cmNlcyA9IHNldHRpbmdzLmluaXRpYWxSZXNvdXJjZXMsXG4gICAgICAgIHBvbGl0ZVJlc291cmNlcyA9IHNldHRpbmdzLnBvbGl0ZVJlc291cmNlcyxcbiAgICAgICAgb25Jbml0ID0gc2V0dGluZ3Mub25Jbml0LFxuICAgICAgICBvbkluaXRpYWxMb2FkID0gc2V0dGluZ3Mub25Jbml0aWFsTG9hZCxcbiAgICAgICAgb25SZWFkeSA9IHNldHRpbmdzLm9uUmVhZHksXG4gICAgICAgIG9uRXJyb3IgPSBzZXR0aW5ncy5vbkVycm9yLFxuICAgICAgICBvbkNvbXBsZXRlID0gc2V0dGluZ3Mub25Db21wbGV0ZTtcbiAgICB2YXIgcmVzb3VyY2VzTGlzdHNMb2FkZWQgPSAwO1xuICAgIHZhciBvY3VycmVkRXJyb3IgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHdoZW5Db21wbGV0ZSgpIHtcbiAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuUmVzb3VyY2VFcnJvcihlcnIpIHtcbiAgICAgIC8vIE9ubHkgaGFuZGxlIHRoZSBmaXJzdCBlcnJvci5cbiAgICAgIGlmIChvY3VycmVkRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvY3VycmVkRXJyb3IgPSB0cnVlO1xuICAgICAgbG9nLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHRoZSBmb2xsb3dpbmcgcmVzb3VyY2UgXFxcIlwiLmNvbmNhdChlcnIsIFwiXFxcIi5cIikpO1xuXG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICB9XG5cbiAgICAgIHdoZW5Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdoZW5SZWFkeSgpIHtcbiAgICAgIGxvZy5kZWJ1ZygnVGhlIGFkIGlzIHJlYWR5LicpO1xuXG4gICAgICBpZiAob25SZWFkeSkge1xuICAgICAgICBvblJlYWR5KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2hlblJlc291cmNlc0xpc3RMb2FkZWQoKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSB0d28gbGlzdHMgKFwiaW5pdGlhbFJlc291cmNlc1wiIGFuZCBcInBvbGl0ZVJlc291cmNlc1wiKVxuICAgICAgLy8gdG8gYmUgbG9hZGVkIHRvIGNhbGwgdGhlIFwib25SZWFkeVwiIGFuZCBcIm9uQ29tcGxldGVcIiBjYWxsYmFja3MuIFdlIHVzZSBhXG4gICAgICAvLyBjb3VudGVyIHRvIGNvdW50IGZvciBib3RoIG9mIHRoZW0uXG4gICAgICByZXNvdXJjZXNMaXN0c0xvYWRlZCsrO1xuXG4gICAgICBpZiAocmVzb3VyY2VzTGlzdHNMb2FkZWQgIT09IFJFU09VUkNFU19MSVNUU19MRU5HVEgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBHZXQgb3V0IGZyb20gdGhlIHByb21pc2UgY2hhaW4gKGlmIGluIG9uZSkgdG8gcHJldmVudCBwb3NzaWJsZVxuICAgICAgLy8gY2FsbGJhY2sgZXJyb3JzIHRvIGxlYWsgaW4gdGhlIGNoYWluLlxuXG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGVuUmVhZHkoKTtcbiAgICAgICAgd2hlbkNvbXBsZXRlKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuSW5pdGlhbExvYWQoKSB7XG4gICAgICBpZiAob25Jbml0aWFsTG9hZCkge1xuICAgICAgICAvLyBHZXQgb3V0IGZyb20gdGhlIHByb21pc2UgY2hhaW4gKGlmIGluIG9uZSkgdG8gcHJldmVudCBwb3NzaWJsZVxuICAgICAgICAvLyBjYWxsYmFjayBlcnJvcnMgdG8gbGVhayBpbiB0aGUgY2hhaW4uXG4gICAgICAgIHNldFRpbWVvdXQob25Jbml0aWFsTG9hZCwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2hlbkluaXQoKSB7XG4gICAgICBsb2cuZGVidWcoJ1RoZSBhZCBpcyBpbml0aWFsaXplZC4nKTtcblxuICAgICAgaWYgKG9uSW5pdCkge1xuICAgICAgICBvbkluaXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluaXRpYWxSZXNvdXJjZXMpIHtcbiAgICAgICAgbG9hZFJlc291cmNlcyhpbml0aWFsUmVzb3VyY2VzKS50aGVuKHdoZW5Jbml0aWFsTG9hZCkudGhlbih3aGVuUmVzb3VyY2VzTGlzdExvYWRlZCkuY2F0Y2god2hlblJlc291cmNlRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hlblJlc291cmNlc0xpc3RMb2FkZWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuTG9hZCgpIHtcbiAgICAgIGxvZy5kZWJ1ZygnVGhlIGFkIGlzIGxvYWRlZC4nKTtcblxuICAgICAgaWYgKHBvbGl0ZVJlc291cmNlcykge1xuICAgICAgICBsb2FkUmVzb3VyY2VzKHBvbGl0ZVJlc291cmNlcykudGhlbih3aGVuUmVzb3VyY2VzTGlzdExvYWRlZCkuY2F0Y2god2hlblJlc291cmNlRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hlblJlc291cmNlc0xpc3RMb2FkZWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbikge1xuICAgICAgbG9nLmluZm8oXCJWZXJzaW9uIFwiLmNvbmNhdCh2ZXJzaW9uKSk7XG4gICAgfVxuXG4gICAgd2hlbkluaXQoKTtcblxuICAgIGlmICh3aW5kb3cuZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgd2hlbkxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB3aGVuTG9hZCk7XG4gICAgfVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5vZmZDaGFuZ2VUYWJFdmVudCA9IGV4cG9ydHMub25DaGFuZ2VUYWJFdmVudCA9IHZvaWQgMDtcblxuLyoqXG4gKiBTZXQgYSB3aW5kb3cgZXZlbnQgdG8gbGlzdGVuIGZvciB3aW5kb3cgdmlzaWJpbGl0eSBjaGFuZ2VzXG4gKiBpZiBbUGFnZSBWaXNpYmlsaXR5IEFQSV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1BhZ2VfVmlzaWJpbGl0eV9BUEkpXG4gKiBpcyBzdXBwb3J0ZWQuXG4gKiBJdCBjYWxscyB0aGUgY2FsbGJhY2sgYXQgcmVnaXN0cmF0aW9uIHRpbWUuXG4gKiBJdCBzZXRzIHRoZSBhdHRyaWJ1dGUgYGRhdGEtdmlzaWJpbGl0eWAgd2l0aCB0aGUgdmFsdWUgYGhpZGRlbmAgb3IgYHZpc2libGVgXG4gKiBhY2NvcmRpbmcgdG8gdGhlIGNhc2Ugd2hlbiBpdCBjaGFuZ2VzIHRvIHRoZSBib2R5IGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFJlY2VpdmVzIGBoaWRkZW5gIG9yIGB2aXNpYmxlYCBhY2NvcmRpbmcgdG9cbiAqIHRoZSBjYXNlLlxuICovXG52YXIgb25DaGFuZ2VUYWJFdmVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlVGFiRXZlbnQoY2FsbGJhY2spIHtcbiAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgIHZhciBpc0hpZGRlbiA9ICdoaWRkZW4nIGluIGRvY3VtZW50ID8gZG9jdW1lbnQuaGlkZGVuIDogZG9jdW1lbnQud2Via2l0SGlkZGVuO1xuICAgIHZhciB2aXNpYmlsaXR5ID0gaXNIaWRkZW4gPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmlsaXR5JywgdmlzaWJpbGl0eSk7XG4gICAgY2FsbGJhY2sodmlzaWJpbGl0eSk7XG4gIH07XG5cbiAgaWYgKCdoaWRkZW4nIGluIGRvY3VtZW50KSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIGhhbmRsZXIoKTtcbiAgcmV0dXJuIGhhbmRsZXI7XG59O1xuLyoqXG4gKiBSZW1vdmUgY2hhbmdlIHRhYiBldmVudCBsaXN0ZW5lci5cbiAqIFVzdWFsbHksIHRoaXMgbGV0cyB5b3UgcmVtb3ZlIGEgaGFuZGxlciBjcmVhdGVkIHdpdGggYG9uQ2hhbmdlVGFiRXZlbnRgLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXJcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgaGFuZGxlclxuICogY29uc3QgaGFuZGxlciA9IG9uQ2hhbmdlVGFiRXZlbnQoZnVuY3Rpb24gKCkge30pO1xuICogLy8gUmVtb3ZlIGhhbmRsZXJcbiAqIG9mZkNoYW5nZVRhYkV2ZW50KGhhbmRsZXIpO1xuICovXG5cblxuZXhwb3J0cy5vbkNoYW5nZVRhYkV2ZW50ID0gb25DaGFuZ2VUYWJFdmVudDtcblxudmFyIG9mZkNoYW5nZVRhYkV2ZW50ID0gZnVuY3Rpb24gb2ZmQ2hhbmdlVGFiRXZlbnQoaGFuZGxlcikge1xuICBpZiAoJ2hpZGRlbicgaW4gZG9jdW1lbnQpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlcik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0dmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZXIpO1xuICB9XG59O1xuXG5leHBvcnRzLm9mZkNoYW5nZVRhYkV2ZW50ID0gb2ZmQ2hhbmdlVGFiRXZlbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2hhbmdlVGFiRXZlbnQgPSByZXF1aXJlKFwiLi9jaGFuZ2VUYWJFdmVudFwiKTtcblxuT2JqZWN0LmtleXMoX2NoYW5nZVRhYkV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2hhbmdlVGFiRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZUxvZ2dlciA9IHZvaWQgMDtcblxudmFyIF9tYWtlQ3JlYXRlTG9nZ2VyID0gcmVxdWlyZShcIi4vbWFrZUNyZWF0ZUxvZ2dlci5qc1wiKTtcblxuLy8gSW4gc29tZSBvbGRlciBicm93c2Vycywgb2JqZWN0IGBjb25zb2xlYCBkb2VzIG5vdCBleGlzdCwgc28gYWNjZXNzaW5nIGl0XG4vLyB0aHJvd3MgYW5kIGVycm9yLiBXZSBnZXQgaXQgZnJvbSB3aW5kb3cgZm9yIHNhZmV0eS5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG52YXIgY3JlYXRlTG9nZ2VyID0gKDAsIF9tYWtlQ3JlYXRlTG9nZ2VyLm1ha2VDcmVhdGVMb2dnZXIpKHtcbiAgY29uc29sZTogY29uc29sZVxufSk7XG5leHBvcnRzLmNyZWF0ZUxvZ2dlciA9IGNyZWF0ZUxvZ2dlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1ha2VDcmVhdGVMb2dnZXIgPSBtYWtlQ3JlYXRlTG9nZ2VyO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGNyZWF0ZUxvZ2dlciB0b29sLlxuICogQHBhcmFtICB7T2JqZWN0fSBkZXBlbmRlbmNpZXNcbiAqIEBwYXJhbSAge09iamVjdH0gZGVwZW5kZW5jaWVzLmNvbnNvbGUgLSBCcm93c2VyIGdsb2JhbCBvYmplY3RcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBtYWtlQ3JlYXRlTG9nZ2VyKCkge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGNvbnNvbGUgPSBkZXBlbmRlbmNpZXMuY29uc29sZSB8fCB7fTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb2dnZXIgaW5zdGFuY2UgZm9yIHRoZSBicm93c2VyIHdpdGggZm91ciBsb2cgbWV0aG9kc1xuICAgKiBjb3JyZXNwb25kaW5nIHRvIGZvdXIgZGlmZmVyZW50IHNldmVyaXR5IGxldmVsczpcbiAgICogLSBsZXZlbCAwOiBgZXJyb3JgXG4gICAqIC0gbGV2ZWwgMTogYHdhcm5gXG4gICAqIC0gbGV2ZWwgMjogYGluZm9gXG4gICAqIC0gbGV2ZWwgMzogYGRlYnVnYFxuICAgKlxuICAgKiBUaGUgYXZhaWxhYmxlIGxvZyBtZXRob2RzIHdpbGwgZGVwZW5kIG9uIHRoZSBzZXZlcml0eSBsZXZlbCBwYXNzZWQgYXMgYW5cbiAgICogYXJndW1lbnQgaW4gYHNldHRpbmdzLmxldmVsYC5cbiAgICpcbiAgICogSWYgdGhlIGxvZyBtZXRob2QgZG9lc24ndCBleGlzdCBpbiB0aGUgYnJvd3NlciwgaXQgd2lsbCBmYWxsYmFjayB0aGVcbiAgICogbG9nIG1ldGhvZCBieSBkZWZhdWx0IGkuZSBgY29uc29sZS5sb2dgLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVzcGFjZSAtIHByZWZpeCB0byBncm91cCBsb2dzXG4gICAqIEBwYXJhbSAge09iamVjdH0gW3NldHRpbmdzID0ge31dXG4gICAqIEBwYXJhbSAge251bWJlcn0gW3NldHRpbmdzLmxldmVsID0gM10gLSBtYXggbnVtYmVyIG9mIGxvZyBsZXZlbHMgYWxsb3dlZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gY29udGFpbnMgYWxsIHRoZSBsb2cgbWV0aG9kcyB0byBiZSB1c2VkXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGxvZyA9IGNyZWF0ZUxvZ2dlcignbXlBcHAnKTtcbiAgICogbG9nLmRlYnVnKCdMb2FkaW5nIEFwcCcpO1xuICAgKiAvLyBMb2dzIGluIHRoZSBjb25zb2xlOiBcIltteUFwcF0gTG9hZGluZyBBcHBcIlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBUaGUgYXZhaWxhYmxlIGxvZyBsZXZlbHMgd2lsbCBiZSBlcnJvciwgd2FybiBhbmQgaW5mby5cbiAgICogY29uc3QgbG9nID0gY3JlYXRlTG9nZ2VyKCdteUFwcCcsIHsgbGV2ZWw6IDIgfSk7XG4gICAqIGxvZy5kZWJ1ZygnTG9hZGluZyBBcHAnKTtcbiAgICogLy8gTG9ncyBub3RoaW5nIGludG8gdGhlIGNvbnNvbGUgc2luY2UgdGhhdCBsZXZlbCBpcyBub3QgYWxsb3dlZC5cbiAgICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihuYW1lc3BhY2UpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgaWYgKCEoMCwgX3R5cGVzLmlzU3RyaW5nKShuYW1lc3BhY2UpIHx8ICFuYW1lc3BhY2UudHJpbSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdmFsaWQgbmFtZXNwYWNlIGlzIHJlcXVpcmVkIScpO1xuICAgIH1cblxuICAgIHNldHRpbmdzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBsZXZlbDogM1xuICAgIH0sIHNldHRpbmdzKTsgLy8gRnVuY3Rpb24gdG8gZmFjdG9yaXplIGNvbW1vbiB0YXNrcyBpbiBkaXNwbGF5aW5nIG1lc3NhZ2VzXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5TG9ncyhkYXRhKSB7XG4gICAgICB2YXIgbGV2ZWwgPSBkYXRhLmxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VzID0gZGF0YS5tZXNzYWdlcztcbiAgICAgIHZhciBsb2dNZXRob2RzID0gW2NvbnNvbGUuZXJyb3IsIGNvbnNvbGUud2FybiwgY29uc29sZS5pbmZvLCBjb25zb2xlLmRlYnVnXTtcbiAgICAgIHZhciBsb2dNZXRob2QgPSBsb2dNZXRob2RzW2xldmVsXSB8fCBjb25zb2xlLmxvZztcbiAgICAgIHZhciBhbGxvd2VkTGV2ZWwgPSBzZXR0aW5ncy5sZXZlbDtcblxuICAgICAgaWYgKGxvZ01ldGhvZCAmJiBsb2dNZXRob2QuYXBwbHkgJiYgbGV2ZWwgPD0gYWxsb3dlZExldmVsKSB7XG4gICAgICAgIC8vIFdlIHJ1biBkaXJlY3RseSAuYXBwbHkoKSBleHBsaWNpdGVseSB0byBzZXQgdGhlIGNvbnRleHQgb2YgdGhlIGNhbGxcbiAgICAgICAgLy8gdG8gYmUgdGhlIGBjb25zb2xlYCBvYmplY3QuIElmIG5vdCwgSUUgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICBsb2dNZXRob2QuYXBwbHkoY29uc29sZSwgW1wiW1wiLmNvbmNhdChuYW1lc3BhY2UsIFwiXVwiKV0uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKG1lc3NhZ2VzKSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZWJ1ZzogZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgICAgIHZhciBsZXZlbCA9IDM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2VzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIG1lc3NhZ2VzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGxheUxvZ3Moe1xuICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaW5mbzogZnVuY3Rpb24gaW5mbygpIHtcbiAgICAgICAgdmFyIGxldmVsID0gMjtcblxuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2VzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgbWVzc2FnZXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXlMb2dzKHtcbiAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHdhcm46IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgICAgIHZhciBsZXZlbCA9IDE7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBtZXNzYWdlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgIG1lc3NhZ2VzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwbGF5TG9ncyh7XG4gICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICAgIHZhciBsZXZlbCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBtZXNzYWdlcyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICAgIG1lc3NhZ2VzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwbGF5TG9ncyh7XG4gICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2xvYWRSZXNvdXJjZXMgPSByZXF1aXJlKFwiLi9sb2FkUmVzb3VyY2VzXCIpO1xuXG5PYmplY3Qua2V5cyhfbG9hZFJlc291cmNlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2xvYWRSZXNvdXJjZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5sb2FkUmVzb3VyY2VzID0gdm9pZCAwO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX3Byb21pc2VTZXJpYWwgPSByZXF1aXJlKFwiLi4vcHJvbWlzZVNlcmlhbFwiKTtcblxudmFyIF9sb2FkaW5nID0gcmVxdWlyZShcIi4uL2xvYWRpbmdcIik7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIExvYWQgYSBzZXQgb2YgcmVzb3VyY2VzIG9yZ2FuaXplZCBpbiBzZXJpYWwgYW5kIHBhcmFsbGVsLlxuICogQHBhcmFtICB7T2JqZWN0W119IHJlc291cmNlc1xuICogQHBhcmFtICB7c3RyaW5nW119IFtyZXNvdXJjZXNbXS5pbWFnZXNdXG4gKiBAcGFyYW0gIHtzdHJpbmdbXX0gW3Jlc291cmNlc1tdLnNjcmlwdHNdXG4gKiBAcGFyYW0gIHtzdHJpbmdbXX0gW3Jlc291cmNlc1tdLnN0eWxlc11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAZXhhbXBsZVxuICogLy8gVGhpcyB3aWxsIGxvYWQgJ3NjcmlwdDEnIGFuZCAnc3R5bGUxJyBmaXJzdCBpbiBwYXJhbGxlbCBhbmQgdGhlblxuICogLy8gJ2ltZzEnIGFuZCAnaW1nMicgYWZ0ZXIgaW4gcGFyYWxsZWwuXG4gKiBsb2FkUmVzb3VyY2VzKFtcbiAqICAgeyBzY3JpcHRzOiBbJ3NjcmlwdDEuanMnXSwgc3R5bGVzOiBbJ3N0eWxlMS5jc3MnXSB9LFxuICogICB7IGltYWdlczogWydpbWcxLnBuZycsICdpbWcyLnBuZyddIH1cbiAqIF0pO1xuICovXG52YXIgbG9hZFJlc291cmNlcyA9IGZ1bmN0aW9uIGxvYWRSZXNvdXJjZXMocmVzb3VyY2VzKSB7XG4gIHJldHVybiAoMCwgX3Byb21pc2VTZXJpYWwucHJvbWlzZVNlcmlhbCkocmVzb3VyY2VzLm1hcChmdW5jdGlvbiAocmVzb3VyY2VzU2V0KSB7XG4gICAgdmFyIF9yZXNvdXJjZXNTZXQkc3R5bGVzID0gcmVzb3VyY2VzU2V0LnN0eWxlcyxcbiAgICAgICAgc3R5bGVzID0gX3Jlc291cmNlc1NldCRzdHlsZXMgPT09IHZvaWQgMCA/IFtdIDogX3Jlc291cmNlc1NldCRzdHlsZXMsXG4gICAgICAgIF9yZXNvdXJjZXNTZXQkc2NyaXB0cyA9IHJlc291cmNlc1NldC5zY3JpcHRzLFxuICAgICAgICBzY3JpcHRzID0gX3Jlc291cmNlc1NldCRzY3JpcHRzID09PSB2b2lkIDAgPyBbXSA6IF9yZXNvdXJjZXNTZXQkc2NyaXB0cyxcbiAgICAgICAgX3Jlc291cmNlc1NldCRpbWFnZXMgPSByZXNvdXJjZXNTZXQuaW1hZ2VzLFxuICAgICAgICBpbWFnZXMgPSBfcmVzb3VyY2VzU2V0JGltYWdlcyA9PT0gdm9pZCAwID8gW10gOiBfcmVzb3VyY2VzU2V0JGltYWdlcztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5Mi5kZWZhdWx0KShzdHlsZXMubWFwKF9sb2FkaW5nLmxvYWRTdHlsZSkpLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5Mi5kZWZhdWx0KShzY3JpcHRzLm1hcChfbG9hZGluZy5sb2FkU2NyaXB0KSksICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKGltYWdlcy5tYXAoX2xvYWRpbmcubG9hZEltYWdlKSkpKTtcbiAgICB9O1xuICB9KSk7XG59O1xuXG5leHBvcnRzLmxvYWRSZXNvdXJjZXMgPSBsb2FkUmVzb3VyY2VzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2xvYWRpbmcgPSByZXF1aXJlKFwiLi9sb2FkaW5nXCIpO1xuXG5PYmplY3Qua2V5cyhfbG9hZGluZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2xvYWRpbmdba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmxvYWRJbWFnZSA9IGV4cG9ydHMubG9hZFN0eWxlID0gZXhwb3J0cy5sb2FkU2NyaXB0ID0gdm9pZCAwO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBMb2FkIGEgSmF2YVNjcmlwdCBmaWxlIGJ5IFVSTC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGV4YW1wbGVcbiAqIGxvYWRTY3JpcHQoJ2FwcC5qcycpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0xvYWRlZC4nKSk7XG4gKi9cbnZhciBsb2FkU2NyaXB0ID0gZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUoc2NyaXB0KTtcbiAgICB9O1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWplY3QodXJsKTtcbiAgICB9O1xuXG4gICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH0pO1xufTtcbi8qKlxuICogTG9hZCBhIENTUyBmaWxlIGJ5IFVSTC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGV4YW1wbGVcbiAqIGxvYWRTdHlsZSgnYXBwLmNzcycpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0xvYWRlZC4nKSk7XG4gKi9cblxuXG5leHBvcnRzLmxvYWRTY3JpcHQgPSBsb2FkU2NyaXB0O1xuXG52YXIgbG9hZFN0eWxlID0gZnVuY3Rpb24gbG9hZFN0eWxlKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShsaW5rKTtcbiAgICB9O1xuXG4gICAgbGluay5vbmVycm9yID0gbGluay5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlamVjdCh1cmwpO1xuICAgIH07XG5cbiAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxpbmspO1xuICB9KTtcbn07XG4vKipcbiAqIExvYWQgYW4gaW1hZ2UgZmlsZSBieSBVUkwuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBleGFtcGxlXG4gKiBsb2FkSW1hZ2UoJ2xvZ28ucG5nJykudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTG9hZGVkLicpKTtcbiAqL1xuXG5cbmV4cG9ydHMubG9hZFN0eWxlID0gbG9hZFN0eWxlO1xuXG52YXIgbG9hZEltYWdlID0gZnVuY3Rpb24gbG9hZEltYWdlKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xuICAgIH07XG5cbiAgICBpbWcub25lcnJvciA9IGltZy5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlamVjdCh1cmwpO1xuICAgIH07XG5cbiAgICBpbWcuc3JjID0gdXJsO1xuICB9KTtcbn07XG5cbmV4cG9ydHMubG9hZEltYWdlID0gbG9hZEltYWdlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Byb21pc2VTZXJpYWwgPSByZXF1aXJlKFwiLi9wcm9taXNlU2VyaWFsXCIpO1xuXG5PYmplY3Qua2V5cyhfcHJvbWlzZVNlcmlhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3Byb21pc2VTZXJpYWxba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnByb21pc2VTZXJpYWwgPSB2b2lkIDA7XG5cbi8qKlxuICogUnVuIGEgbGlzdCBvZiBmdW5jdGlvbnMgaW4gc2VyaWFsIGluIGEgY2hhaW4gb2YgcHJvbWlzZXMuXG4gKiBUaGlzIGlzIGxpa2UgYFByb21pc2UuYWxsKClgIGJ1dCBpbiBzZXJpYWwuXG4gKiBUaGUgdmFsdWUgcmVjZWl2ZWQgaW4gYSBwcm9taXNlIGlzIHRoZSB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgcHJvbWlzZS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9uW119IGZuc1xuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBleGFtcGxlXG4gKiBwcm9taXNlU2VyaWFsKFtcbiAgKiAgIGZldGNoKCdpbWFnZTEucG5nJyksXG4gICogICBmZXRjaCgnaW1hZ2UyLnBuZycpLFxuICAqICAgZmV0Y2goJ2ltYWdlMy5wbmcnKVxuICAqIF0pLnRoZW4obGFzdFJlcyA9PiB7XG4gICogICAvLyBSZWNlaXZlcyBsYXN0IHByb21pc2UgcmVzdWx0LlxuICAqIH0pO1xuICAqL1xudmFyIHByb21pc2VTZXJpYWwgPSBmdW5jdGlvbiBwcm9taXNlU2VyaWFsKGZucykge1xuICB2YXIgaW5pdGlhbFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHNlcmlhbCwgZm4pIHtcbiAgICByZXR1cm4gc2VyaWFsLnRoZW4oZm4pO1xuICB9LCBpbml0aWFsUHJvbWlzZSk7XG59O1xuXG5leHBvcnRzLnByb21pc2VTZXJpYWwgPSBwcm9taXNlU2VyaWFsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNOdW1iZXIgPSBleHBvcnRzLmlzU3RyaW5nID0gZXhwb3J0cy5pc1BsYWluT2JqZWN0ID0gdm9pZCAwO1xuXG52YXIgX3R5cGVvZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKSk7XG5cbi8qKlxuICogSWYgdGhlIHByb3ZpZGVkIGRhdGEgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcGFyYW0gIHsqfSAgZGF0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KGRhdGEpIHtcbiAgcmV0dXJuICEhZGF0YSAmJiAoMCwgX3R5cGVvZjIuZGVmYXVsdCkoZGF0YSkgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGRhdGEpO1xufTtcbi8qKlxuICogSWYgdGhlIHByb3ZpZGVkIGRhdGEgaXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gIHsqfSAgZGF0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG5cbmV4cG9ydHMuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3Q7XG5cbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKGRhdGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJztcbn07XG4vKipcbiAqIElmIHRoZSBwcm92aWRlZCBkYXRhIGlzIGEgbnVtYmVyLlxuICogQHBhcmFtICB7Kn0gIGRhdGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuXG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbnZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKGRhdGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJztcbn07XG5cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiZnVuY3Rpb24gYWxsU2V0dGxlZChhcnIpIHtcbiAgdmFyIFAgPSB0aGlzO1xuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCEoYXJyICYmIHR5cGVvZiBhcnIubGVuZ3RoICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgIG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgdHlwZW9mIGFyciArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgYXJyICtcbiAgICAgICAgICAgICcgaXMgbm90IGl0ZXJhYmxlKGNhbm5vdCByZWFkIHByb3BlcnR5IFN5bWJvbChTeW1ib2wuaXRlcmF0b3IpKSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcbiAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoZW4uY2FsbChcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGFyZ3NbaV0gPSB7IHN0YXR1czogJ3JlamVjdGVkJywgcmVhc29uOiBlIH07XG4gICAgICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJnc1tpXSA9IHsgc3RhdHVzOiAnZnVsZmlsbGVkJywgdmFsdWU6IHZhbCB9O1xuICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxsU2V0dGxlZDtcbiIsIi8qKlxuICogQHRoaXMge1Byb21pc2V9XG4gKi9cbmZ1bmN0aW9uIGZpbmFsbHlDb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmFsbHlDb25zdHJ1Y3RvcjtcbiIsImltcG9ydCBwcm9taXNlRmluYWxseSBmcm9tICcuL2ZpbmFsbHknO1xuaW1wb3J0IGFsbFNldHRsZWQgZnJvbSAnLi9hbGxTZXR0bGVkJztcblxuLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbi8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxudmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblxuZnVuY3Rpb24gaXNBcnJheSh4KSB7XG4gIHJldHVybiBCb29sZWFuKHggJiYgdHlwZW9mIHgubGVuZ3RoICE9PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5mdW5jdGlvbiBQcm9taXNlKGZuKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgLyoqIEB0eXBlIHshbnVtYmVyfSAqL1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIC8qKiBAdHlwZSB7IWJvb2xlYW59ICovXG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgLyoqIEB0eXBlIHtQcm9taXNlfHVuZGVmaW5lZH0gKi9cbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAvLyBAdHMtaWdub3JlXG4gIHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XG4gIHJldHVybiBwcm9tO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IHByb21pc2VGaW5hbGx5O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpKTtcbiAgICB9XG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJlamVjdChleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UuYWxsU2V0dGxlZCA9IGFsbFNldHRsZWQ7XG5cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5yYWNlIGFjY2VwdHMgYW4gYXJyYXknKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGFycltpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblByb21pc2UuX2ltbWVkaWF0ZUZuID1cbiAgLy8gQHRzLWlnbm9yZVxuICAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGZ1bmN0aW9uKGZuKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0pIHx8XG4gIGZ1bmN0aW9uKGZuKSB7XG4gICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICB9O1xuXG5Qcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7XG4iLCJpbXBvcnQgUHJvbWlzZSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBwcm9taXNlRmluYWxseSBmcm9tICcuL2ZpbmFsbHknO1xuaW1wb3J0IGFsbFNldHRsZWQgZnJvbSAnLi9hbGxTZXR0bGVkJztcblxuLyoqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFyc30gKi9cbnZhciBnbG9iYWxOUyA9IChmdW5jdGlvbigpIHtcbiAgLy8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXG4gIC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuICAvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGdsb2JhbDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xufSkoKTtcblxuLy8gRXhwb3NlIHRoZSBwb2x5ZmlsbCBpZiBQcm9taXNlIGlzIHVuZGVmaW5lZCBvciBzZXQgdG8gYVxuLy8gbm9uLWZ1bmN0aW9uIHZhbHVlLiBUaGUgbGF0dGVyIGNhbiBiZSBkdWUgdG8gYSBuYW1lZCBIVE1MRWxlbWVudFxuLy8gYmVpbmcgZXhwb3NlZCBieSBicm93c2VycyBmb3IgbGVnYWN5IHJlYXNvbnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGF5bG9yaGFrZXMvcHJvbWlzZS1wb2x5ZmlsbC9pc3N1ZXMvMTE0XG5pZiAodHlwZW9mIGdsb2JhbE5TWydQcm9taXNlJ10gIT09ICdmdW5jdGlvbicpIHtcbiAgZ2xvYmFsTlNbJ1Byb21pc2UnXSA9IFByb21pc2U7XG59IGVsc2UgaWYgKCFnbG9iYWxOUy5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG4gIGdsb2JhbE5TLlByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBwcm9taXNlRmluYWxseTtcbn0gZWxzZSBpZiAoIWdsb2JhbE5TLlByb21pc2UuYWxsU2V0dGxlZCkge1xuICBnbG9iYWxOUy5Qcm9taXNlLmFsbFNldHRsZWQgPSBhbGxTZXR0bGVkO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IGFkIH0gZnJvbSAnc3JjL2NvcmUvZWxlbWVudHMnO1xuaW1wb3J0IHsgYW5pbWF0ZVNob3dYLCBhbmltYXRlSW5PdXQgfSBmcm9tICdzcmMvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgc2V0Q29udGFpbmVyQ2xhc3MgfSBmcm9tICdzcmMvY29yZS91dGlscyc7XG5cbmZ1bmN0aW9uIGFuaW1hdGVGcmFtZTEgKGRvbUVsZW1lbnRzLCBkeW5hbWljT3B0aW9ucykge1xuICBjb25zdCB7IGhlYWRsaW5lMSwgaGVhZGxpbmVUZXh0MSwgc3ViaGVhZGxpbmVGMSwgbG9nbywgaW1hZ2VGcmFtZTEsIGJnUGF0dGVybiB9ID0gZG9tRWxlbWVudHM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY29uc3QgeyBGMV9vdmVyd3JpdGVfZWRnZV9jYXNlLCBpbWFnZVZlcnNpb24gfSA9IGR5bmFtaWNPcHRpb25zO1xuXG4gIHJldHVybiBnc2FwLnRpbWVsaW5lKClcbiAgICAuY2FsbChzZXRDb250YWluZXJDbGFzcywgW3tcbiAgICAgIG92ZXJ3cml0ZTogRjFfb3ZlcndyaXRlX2VkZ2VfY2FzZSxcbiAgICAgIHNocmlua09wdGlvbnM6IHtcbiAgICAgICAgZWxlbWVudHM6IFtoZWFkbGluZVRleHQxLCBzdWJoZWFkbGluZUYxXSxcbiAgICAgICAgY29udGFpbmVyOiBoZWFkbGluZTEsXG4gICAgICAgIHBhcmVudDogYWRcbiAgICAgIH1cbiAgICB9XSlcbiAgICAuYWRkKFtcbiAgICAgIGltYWdlVmVyc2lvbiAmJiBbXG4gICAgICAgIGdzYXAuc2V0KGJnUGF0dGVybiwgeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICBnc2FwLnRvKGltYWdlRnJhbWUxLCB7IG9wYWNpdHk6IDEgfSlcbiAgICAgIF0sXG4gICAgICAhaW1hZ2VWZXJzaW9uICYmIFtcbiAgICAgICAgYW5pbWF0ZUluT3V0KGJnUGF0dGVybiwgJ3JpZ2h0JywgJ2luJyksXG4gICAgICAgIGFuaW1hdGVTaG93WChsb2dvLCAtMjApLmRlbGF5KDAuMilcbiAgICAgIF1cbiAgICBdKVxuICAgIC5hZGQoW1xuICAgICAgYW5pbWF0ZVNob3dYKGhlYWRsaW5lVGV4dDEsIC0yMCkuZGVsYXkoMC4yKSxcbiAgICAgIGFuaW1hdGVTaG93WChzdWJoZWFkbGluZUYxLCAtMjApLmRlbGF5KDAuNClcbiAgICBdLCAnPjAuNCcpXG4gICAgLnRvKFtzdWJoZWFkbGluZUYxLCBoZWFkbGluZVRleHQxXSwgeyBvcGFjaXR5OiAwLCB4OiAyMCwgc3RhZ2dlcjogMC4yLCBkZWxheTogMiB9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUZyYW1lMiAoZG9tRWxlbWVudHMsIGR5bmFtaWNPcHRpb25zKSB7XG4gIGNvbnN0IHsgaGVhZGxpbmUyLCBoZWFkbGluZVRleHQyLCBzdWJoZWFkbGluZUYyLCBpbWFnZUZyYW1lMiB9ID0gZG9tRWxlbWVudHM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY29uc3QgeyBGMl9vdmVyd3JpdGVfZWRnZV9jYXNlLCBpbWFnZVZlcnNpb24gfSA9IGR5bmFtaWNPcHRpb25zO1xuXG4gIHJldHVybiBnc2FwLnRpbWVsaW5lKClcbiAgICAuY2FsbChzZXRDb250YWluZXJDbGFzcywgW3tcbiAgICAgIG92ZXJ3cml0ZTogRjJfb3ZlcndyaXRlX2VkZ2VfY2FzZSxcbiAgICAgIHNocmlua09wdGlvbnM6IHtcbiAgICAgICAgZWxlbWVudHM6IFtoZWFkbGluZVRleHQyLCBzdWJoZWFkbGluZUYyXSxcbiAgICAgICAgY29udGFpbmVyOiBoZWFkbGluZTIsXG4gICAgICAgIHBhcmVudDogYWRcbiAgICAgIH1cbiAgICB9XSlcbiAgICAuYWRkKFtcbiAgICAgIGltYWdlVmVyc2lvbiAmJiBnc2FwLnRvKGltYWdlRnJhbWUyLCB7IG9wYWNpdHk6IDEgfSksXG4gICAgICBhbmltYXRlU2hvd1goaGVhZGxpbmVUZXh0MiwgLTIwKS5kZWxheSgwLjIpLFxuICAgICAgYW5pbWF0ZVNob3dYKHN1YmhlYWRsaW5lRjIsIC0yMCkuZGVsYXkoMC40KVxuICAgIF0pXG4gICAgLnRvKFtzdWJoZWFkbGluZUYyLCBoZWFkbGluZTJdLCB7IG9wYWNpdHk6IDAsIHg6IDIwLCBzdGFnZ2VyOiAwLjIsIGRlbGF5OiAyIH0pO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlRnJhbWUzIChkb21FbGVtZW50cywgZHluYW1pY09wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGhlYWRsaW5lMyxcbiAgICBoZWFkbGluZVRleHQzLFxuICAgIGltYWdlRnJhbWUxLFxuICAgIGltYWdlRnJhbWUyLFxuICAgIGltYWdlRnJhbWUzLFxuICAgIGN0YUNvbnRhaW5lcixcbiAgICBzdWJoZWFkbGluZUYzLFxuICAgIGJnT2ZmZXJQYXR0ZXJuLFxuICAgIGJnUGF0dGVybixcbiAgICBkaXNjbGFpbWVyQnV0dG9uLFxuICAgIGxvZ29cbiAgfSA9IGRvbUVsZW1lbnRzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGNvbnN0IHsgRjJfb3ZlcndyaXRlX2VkZ2VfY2FzZSwgaW1hZ2VWZXJzaW9uIH0gPSBkeW5hbWljT3B0aW9ucztcblxuICByZXR1cm4gZ3NhcC50aW1lbGluZSgpXG4gICAgLmNhbGwoc2V0Q29udGFpbmVyQ2xhc3MsIFt7XG4gICAgICByZW1vdmU6ICdtYWluLWhlYWRsaW5lLWZyYW1lLTEnLFxuICAgICAgYWRkOiAnbWFpbi1oZWFkbGluZS1mcmFtZS0zJyxcbiAgICAgIG92ZXJ3cml0ZTogRjJfb3ZlcndyaXRlX2VkZ2VfY2FzZSxcbiAgICAgIHNocmlua09wdGlvbnM6IHtcbiAgICAgICAgZWxlbWVudHM6IFtoZWFkbGluZVRleHQzLCBzdWJoZWFkbGluZUYzXSxcbiAgICAgICAgY29udGFpbmVyOiBoZWFkbGluZTMsXG4gICAgICAgIHBhcmVudDogYWRcbiAgICAgIH1cbiAgICB9XSlcbiAgICAuYWRkKFxuICAgICAgW1xuICAgICAgICBpbWFnZVZlcnNpb24gJiYgZ3NhcC50byhbaW1hZ2VGcmFtZTEsIGltYWdlRnJhbWUyXSwgeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICAhaW1hZ2VWZXJzaW9uICYmIGFuaW1hdGVJbk91dChiZ1BhdHRlcm4sICdyaWdodCcsICdvdXQnKSxcbiAgICAgICAgYW5pbWF0ZUluT3V0KGJnT2ZmZXJQYXR0ZXJuLCAncmlnaHQnLCAnaW4nKS5kZWxheSgwLjIpLFxuICAgICAgICBpbWFnZVZlcnNpb24gJiYgYW5pbWF0ZVNob3dYKGxvZ28sIC0yMCkuZGVsYXkoMC43KSxcbiAgICAgICAgYW5pbWF0ZVNob3dYKGhlYWRsaW5lVGV4dDMsIC0yMCkuZGVsYXkoMiksXG4gICAgICAgIGFuaW1hdGVTaG93WChzdWJoZWFkbGluZUYzLCAtMjApLmRlbGF5KDIuMSksXG4gICAgICAgIGFuaW1hdGVTaG93WChpbWFnZUZyYW1lMywgMjApLmRlbGF5KDEuOCksXG4gICAgICAgIGFuaW1hdGVTaG93WChjdGFDb250YWluZXIsIC0yMCkuZGVsYXkoMi4xKSxcbiAgICAgICAgZ3NhcC50byhkaXNjbGFpbWVyQnV0dG9uLCB7IG9wYWNpdHk6IDEgfSkuZGVsYXkoMi41KVxuICAgICAgXVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldE1haW5UaW1lbGluZSAoZG9tRWxlbWVudHNQYXJhbSwgZHluYW1pY09wdGlvbnMpIHtcbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKVxuICAgIC50byhcbiAgICAgIGFkLFxuICAgICAge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnXG4gICAgICB9LFxuICAgICAgJ2luJ1xuICAgIClcbiAgICAuYWRkKGFuaW1hdGVGcmFtZTEoZG9tRWxlbWVudHNQYXJhbSwgZHluYW1pY09wdGlvbnMpLCAnPS0yJylcbiAgICAuYWRkKGFuaW1hdGVGcmFtZTIoZG9tRWxlbWVudHNQYXJhbSwgZHluYW1pY09wdGlvbnMpKVxuICAgIC5hZGQoYW5pbWF0ZUZyYW1lMyhkb21FbGVtZW50c1BhcmFtLCBkeW5hbWljT3B0aW9ucykpO1xufVxuXG5leHBvcnQgeyBnZXRNYWluVGltZWxpbmUgfTtcbiIsImV4cG9ydCBjb25zdCBJTUFHRV9BU1NFVFMgPSBbXG4gIHsga2V5OiAnYXNzZXRfX2ltYWdlLWZyYW1lLTEnLCB1cmw6ICdpbWFnZXMvaW1hZ2VGcmFtZTEucG5nJyB9LFxuICB7IGtleTogJ2Fzc2V0X19pbWFnZS1mcmFtZS0yJywgdXJsOiAnaW1hZ2VzL2ltYWdlRnJhbWUyLnBuZycgfSxcbiAgeyBrZXk6ICdhc3NldF9faW1hZ2UtZnJhbWUzJywgdXJsOiAnaW1hZ2VzL2ltYWdlRnJhbWUzLnBuZycgfSxcbiAgeyBrZXk6ICdhc3NldF9fYmctcGF0dGVybicsIHVybDogJ2ltYWdlcy9iZ1BhdHRlcm4ucG5nJyB9LFxuICB7IGtleTogJ2Fzc2V0X19iZy1vZmZlci1wYXR0ZXJuJywgdXJsOiAnaW1hZ2VzL2JnT2ZmZXJQYXR0ZXJuLnBuZycgfSxcbiAgeyBrZXk6ICdhc3NldF9fbG9nbycsIHVybDogJ2ltYWdlcy9sb2dvLnBuZycgfVxuXTtcblxuZXhwb3J0IGNvbnN0IEZJRUxEUyA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lLTEnLFxuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lMSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lLTInLFxuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lMidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lLTMnLFxuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lMydcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lX190ZXh0LTEnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lVGV4dDEnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5oZWFkbGluZV9fdGV4dC0yJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWVLZXk6ICdoZWFkbGluZVRleHQyJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuaGVhZGxpbmVfX3RleHQtMycsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnaGVhZGxpbmVUZXh0MydcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLnN1YmhlYWRsaW5lX19mMScsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnc3ViaGVhZGxpbmVGMSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLnN1YmhlYWRsaW5lX19mMicsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnc3ViaGVhZGxpbmVGMidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLnN1YmhlYWRsaW5lX19mMycsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnc3ViaGVhZGxpbmVGMydcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmN0YV9fY29udGFpbmVyJyxcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdmFsdWVLZXk6ICdjdGFDb250YWluZXInXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5jdGFfX3RleHQnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB2YWx1ZUtleTogJ2N0YVRleHQnLFxuICAgIGNvbG9yS2V5OiAnY3RhQ29sb3InXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5hc3NldF9fYmctcGF0dGVybicsXG4gICAgdHlwZTogJ2ltYWdlJyxcbiAgICB2YWx1ZUtleTogJ2JnUGF0dGVybidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmFzc2V0X19iZy1vZmZlci1wYXR0ZXJuJyxcbiAgICB0eXBlOiAnaW1hZ2UnLFxuICAgIHZhbHVlS2V5OiAnYmdPZmZlclBhdHRlcm4nXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5hc3NldF9faW1hZ2UtZnJhbWUtMScsXG4gICAgdHlwZTogJ2ltYWdlJyxcbiAgICB2YWx1ZUtleTogJ2ltYWdlRnJhbWUxJyxcbiAgICBhbHRUZXh0OiAnYXRsVGV4dEZyYW1lMSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmFzc2V0X19pbWFnZS1mcmFtZS0yJyxcbiAgICB0eXBlOiAnaW1hZ2UnLFxuICAgIHZhbHVlS2V5OiAnaW1hZ2VGcmFtZTInXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5hc3NldF9faW1hZ2UtZnJhbWUtMycsXG4gICAgdHlwZTogJ2ltYWdlJyxcbiAgICB2YWx1ZUtleTogJ2ltYWdlRnJhbWUzJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcubG9nbycsXG4gICAgdHlwZTogJ2ltYWdlJyxcbiAgICB2YWx1ZUtleTogJ2xvZ28nXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5leGl0JyxcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdmFsdWVLZXk6ICdleGl0J1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuZGlzY2xhaW1lcl9fY29udGFpbmVyJyxcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdmFsdWVLZXk6ICdkaXNjbGFpbWVyQ29udGFpbmVyJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuZGlzY2xhaW1lcl9fYnV0dG9uJyxcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdmFsdWVLZXk6ICdkaXNjbGFpbWVyQnV0dG9uJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuZGlzY2xhaW1lcl9fY2xvc2UtYnV0dG9uJyxcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdmFsdWVLZXk6ICdkaXNjbGFpbWVyQ2xvc2VCdXR0b24nXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5kaXNjbGFpbWVyX190ZXh0JyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWVLZXk6ICdkaXNjbGFpbWVyQ29udGVudCdcbiAgfVxuXTtcbiIsImltcG9ydCAncHJvbWlzZS1wb2x5ZmlsbC9zcmMvcG9seWZpbGwnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUZUQXBwIH0gZnJvbSAnc3JjL3RlbXBsYXRlcy9tYXN0ZXJUZW1wbGF0ZVYyJztcbmltcG9ydCB7ICQgfSBmcm9tICdzcmMvY29yZS9kb20nO1xuaW1wb3J0ICcuL3NoZWxsLnNjc3MnO1xuaW1wb3J0IHsgc3RvcmVMb2NhdG9yIH0gZnJvbSAnc3JjL2NvcmUvbW9kdWxlcy9zdG9yZS1sb2NhdG9yJztcbmltcG9ydCB7IEZJRUxEUywgSU1BR0VfQVNTRVRTIH0gZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJztcbmltcG9ydCB7IGdldE1haW5UaW1lbGluZSB9IGZyb20gJy4vbW9kdWxlcy9hbmltYXRpb25zJztcblxuY29uc3QgZG9tRWxlbWVudHMgPSBGSUVMRFMucmVkdWNlKChhY2N1bXVsYXRvciwgZWxlbWVudCkgPT4gKFxuICB7XG4gICAgLi4uYWNjdW11bGF0b3IsXG4gICAgW2VsZW1lbnQudmFsdWVLZXldOiAkKGVsZW1lbnQuc2VsZWN0b3IpXG4gIH0pLCB7fSk7XG5cbmZ1bmN0aW9uIGV4dGVuZGVkRnVuY3Rpb24gKCkge1xuICBpZiAobXlGVC5pbnN0YW50QWRzLmltYWdlVmVyc2lvbikge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtdmVyc2lvbicpO1xuICB9XG4gIHN0b3JlTG9jYXRvcigpO1xufVxuXG5pbml0aWFsaXplRlRBcHAoe1xuICBmaWVsZHM6IEZJRUxEUyxcbiAgaW1hZ2VBc3NldHM6IElNQUdFX0FTU0VUUyxcbiAgZXh0ZW5kZWRGdW5jdGlvbixcbiAgZ2V0TWFpblRpbWVsaW5lLFxuICBkb21FbGVtZW50c1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnc3JjL2NvcmUvZG9tJztcblxuZnVuY3Rpb24gYW5pbWF0ZVNoYXBlcyAoc2hhcGVzLCByZXBlYXQgPSAxLCByZXBlYXREZWxheSkge1xuICBjb25zdCB0d2VlbnMgPSBzaGFwZXMubWFwKCh7IHNoYXBlU2VsZWN0b3IsIG9yaWdpbiwgY29sb3IgfSkgPT4ge1xuICAgIGNvbnN0IGJnU2hhcGUgPSAkKHNoYXBlU2VsZWN0b3IpO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgYmdTaGFwZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gZ3NhcC5mcm9tVG8oYmdTaGFwZSwge1xuICAgICAgc2NhbGU6IDAsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpblxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICBzY2FsZTogMSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpbixcbiAgICAgIGVhc2U6ICdwb3dlcjMub3V0JyxcbiAgICAgIHJlcGVhdCxcbiAgICAgIHlveW86IHRydWVcbiAgICB9KS5yZXBlYXREZWxheShyZXBlYXREZWxheSk7XG4gIH0pO1xuXG4gIHJldHVybiBnc2FwLnRpbWVsaW5lKCkuYWRkKHR3ZWVucyk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVTaG93WSAoZWxlbWVudCwgb3JpZ2luKSB7XG4gIHJldHVybiBnc2FwLnRpbWVsaW5lKCkuZnJvbVRvKGVsZW1lbnQsIHtcbiAgICB5OiBvcmlnaW5cbiAgfSwge1xuICAgIHk6IDAsXG4gICAgb3BhY2l0eTogMVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVNob3dYIChlbGVtZW50LCBvcmlnaW4pIHtcbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKS5mcm9tVG8oZWxlbWVudCwge1xuICAgIHg6IG9yaWdpbixcbiAgICBvcGFjaXR5OiAwXG4gIH0sIHtcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDFcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVJbk91dCAoZWxlbWVudCwgZGlyZWN0aW9uS2V5LCBhbmltYXRpb25PcmlnaW4pIHtcbiAgY29uc3QgdHJhbnNpdGlvblNldHVwID0ge1xuICAgIHRvcDoge1xuICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgIHlQZXJjZW50OiAtMTAwXG4gICAgICB9LFxuICAgICAgc2NhbGU6IHtcbiAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnXG4gICAgICB9XG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgIHhQZXJjZW50OiAxMDBcbiAgICAgIH0sXG4gICAgICBzY2FsZToge1xuICAgICAgICBzY2FsZVg6IDAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3JpZ2h0J1xuICAgICAgfVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgIHhQZXJjZW50OiAtMTAwXG4gICAgICB9LFxuICAgICAgc2NhbGU6IHtcbiAgICAgICAgc2NhbGVYOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0J1xuICAgICAgfVxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeVBlcmNlbnQ6IDEwMFxuICAgICAgfSxcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHNjYWxlWTogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCB7IHRyYW5zbGF0ZSwgc2NhbGUgfSA9IHRyYW5zaXRpb25TZXR1cFtkaXJlY3Rpb25LZXldO1xuICBjb25zdCBhbmltYXRpb24gPSB7XG4gICAgaW46ICgpID0+IGdzYXAudGltZWxpbmUoKVxuICAgICAgLmZyb20oZWxlbWVudCwgMiwgeyAuLi50cmFuc2xhdGUsIG9wYWNpdHk6IDAsIGVhc2U6ICdleHBvLmluT3V0JyB9KVxuICAgICAgLmFkZChnc2FwLmZyb20oZWxlbWVudCwgMSwgeyAuLi5zY2FsZSwgZWFzZTogJ2V4cG8ub3V0JyB9KSwgJy09MScpLFxuICAgIG91dDogKCkgPT4gZ3NhcC50aW1lbGluZSgpLnRvKGVsZW1lbnQsIDEsIHsgLi4udHJhbnNsYXRlLCBvcGFjaXR5OiAwLCBlYXNlOiAnZXhwby5pbicgfSlcbiAgICAgIC5hZGQoZ3NhcC50byhlbGVtZW50LCAwLjgsIHsgLi4uc2NhbGUsIGVhc2U6ICdleHBvLmluJyB9KSwgJy09MScpXG4gIH07XG5cbiAgcmV0dXJuIGFuaW1hdGlvblthbmltYXRpb25PcmlnaW5dKCk7XG59O1xuXG5leHBvcnQgeyBhbmltYXRlU2hhcGVzLCBhbmltYXRlU2hvd1ksIGFuaW1hdGVTaG93WCwgYW5pbWF0ZUluT3V0IH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbic7XG4iLCIvKipcbiAqIEZpbmRzIGFuIEhUTUxFbGVtZW50IGJ5IENTUyBzZWxlY3RvciBpbiB0aGUgZG9jdW1lbnQgb3IgaW5zaWRlXG4gKiB0aGUgcHJvdmlkZWQgZWxlbWVudC5cbiAqIEBwYXJhbSAge3N0cmluZ30gc2VsZWN0b3IgLSBDU1Mgc2VsZWN0b3IuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gW25vZGU9ZG9jdW1lbnRdXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gJCAoc2VsZWN0b3IsIG5vZGUgPSBkb2N1bWVudCkge1xuICByZXR1cm4gbm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuLyoqXG4gKiBGaW5kcyBhIGxpc3Qgb2YgSFRNTEVsZW1lbnRzIGJ5IENTUyBzZWxlY3RvciBpbiB0aGUgZG9jdW1lbnQgb3IgaW5zaWRlXG4gKiB0aGUgcHJvdmlkZWQgZWxlbWVudC5cbiAqIEBwYXJhbSAge3N0cmluZ30gc2VsZWN0b3IgLSBDU1Mgc2VsZWN0b3IuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gW25vZGU9ZG9jdW1lbnRdXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICovXG5mdW5jdGlvbiAkJCAoc2VsZWN0b3IsIG5vZGUgPSBkb2N1bWVudCkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cblxuZXhwb3J0IHsgJCwgJCQgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZG9tJztcbiIsImltcG9ydCB7ICQsICQkIH0gZnJvbSAnc3JjL2NvcmUvZG9tJztcblxuY29uc3QgYWQgPSAkKCcuYWQnKTtcbmNvbnN0IGhlYWRsaW5lcyA9ICQkKCcuaGVhZGxpbmUnKTtcbmNvbnN0IG1haW5IZWFkbGluZSA9ICQoJy5tYWluLWhlYWRsaW5lJyk7XG5jb25zdCBob3ZlckhlYWRsaW5lID0gJCgnLmhvdmVyLWhlYWRsaW5lJyk7XG5jb25zdCBtYWluQ1RBID0gJCgnLm1haW4tY3RhJyk7XG5jb25zdCBkaXNjbGFpbWVyID0gJCgnLmRpc2NsYWltZXItY29udGFpbmVyJyk7XG5jb25zdCBkaXNjbGFpbWVyQ2xvc2UgPSAkKCcuZGlzY2xhaW1lcl9fYnV0dG9uLWNsb3NlJyk7XG5cbmV4cG9ydCB7IGFkLCBoZWFkbGluZXMsIG1haW5IZWFkbGluZSwgaG92ZXJIZWFkbGluZSwgbWFpbkNUQSwgZGlzY2xhaW1lciwgZGlzY2xhaW1lckNsb3NlIH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzJztcbiIsImltcG9ydCB7ICQkIH0gZnJvbSAnc3JjL2NvcmUvZG9tJztcblxuY29uc3QgREVGQVVMVF9GRUVEX1BBVEggPSAnZmVlZHMvdXNjZWxsdWxhci9GQkktNDQ2NC9zdG9yZXMvJztcbmNvbnN0IFJFUExBQ0VfUVVFUlkgPSAnW3BsYWNlXSc7XG5jb25zdCBGQUxMQkFDS19RVUVSWSA9ICd5b3VyIHRvd24nO1xuXG5mdW5jdGlvbiBzdG9yZUxvY2F0b3IgKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgbG9jYXRvclBhdGggPSBteUZULmluc3RhbnRBZHMuZmVlZFBhdGggfHwgREVGQVVMVF9GRUVEX1BBVEg7XG4gICAgbXlGVC5yZXF1aXJlKFsnc3RvcmVsb2NhdG9yJ10sIChTdG9yZUxvY2F0b3IpID0+IHtcbiAgICAgIGNvbnN0IHNsID0gbmV3IFN0b3JlTG9jYXRvcih7XG4gICAgICAgIGxvY2F0b3JQYXRoLCAvLyBmZWVkIHBhdGggZHluYW1pYyB2YXJpYWJsZSBuYW1lZCBmZWVkUGF0aCB3aXRoIGJhY2t1cFxuICAgICAgICBudW1iZXJUb1JldHVybjogMSwgLy8gb3B0aW9uYWxcbiAgICAgICAgbWF4RGlzdGFuY2VNaWxlczogODgwLCAvLyBvcHRpb25hbC0tYWRqdXN0IHRvIG1heCBkaXN0YW5jZSB0aGUgc3RvcmVsb2NhdG9yIHdpbGwgcmV0dXJuIHJlc3VsdHMgZm9yLiBJZiBubyByZXN1bHRzIHJldHVybmVkL25vIGxvY2F0aW9uIHdpdGhpbiBtYXhEaXN0YW5jZU1pbGVzLCB0aGVuIHRoZSBzdG9yZWxvY2F0b3IgJ2Vycm9yJyBoYW5kbGVyIHdpbGwgdHJpZ2dlciAoYmVsb3cpXG4gICAgICAgIGxvY2F0aW9uT3JkZXI6IFsnaW1wcmVzc2lvbiddIC8vIG9wdGlvbmFsXG4gICAgICB9KTtcbiAgICAgIHNsLm9uKCdzdG9yZXNmb3VuZCcsIChbc3RvcmVzXSkgPT4ge1xuICAgICAgICBjb25zdCBpc01heENoYXJhY3RlciA9IHN0b3Jlcy5jaXR5bmFtZS5sZW5ndGggPD0gMTM7XG4gICAgICAgIGZpbmRNdXRhYmxlSGVhZGluZ3MoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVwbGFjZUhlYWRpbmdWYWx1ZShlbGVtZW50LCBpc01heENoYXJhY3RlciA/IHN0b3Jlcy5jaXR5bmFtZSA6IEZBTExCQUNLX1FVRVJZKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnU3RvcmUgVmFsdWUgUmV0dXJuZWQ6ICcsIHN0b3Jlcyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgICAgc2wub24oJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICBmaW5kTXV0YWJsZUhlYWRpbmdzKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHJlcGxhY2VIZWFkaW5nVmFsdWUoZWxlbWVudCwgRkFMTEJBQ0tfUVVFUlkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgICBzbC5pbml0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGVhZGluZ1ZhbHVlIChlbGVtZW50LCBzdG9yZUxvY2F0b3JWYWx1ZSkge1xuICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUwucmVwbGFjZShSRVBMQUNFX1FVRVJZLCBzdG9yZUxvY2F0b3JWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRNdXRhYmxlSGVhZGluZ3MgKCkge1xuICBjb25zdCBoZWFkaW5ncyA9ICQkKCcuaGVhZGxpbmVfX3RleHQnKTtcbiAgY29uc3QgaW5jbHVkZXNQbGFjZXMgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQuaW5kZXhPZignW3BsYWNlXScpID4gLTE7XG4gIHJldHVybiBoZWFkaW5ncy5maWx0ZXIoaW5jbHVkZXNQbGFjZXMpO1xufVxuXG5leHBvcnQgeyBzdG9yZUxvY2F0b3IgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdXRsaXMnO1xuIiwiaW1wb3J0IHsgYWQsIG1haW5IZWFkbGluZSB9IGZyb20gJy4uL2VsZW1lbnRzJztcblxuY29uc3Qgc2hyaW5rQ2xhc3NlcyA9IFsnYWQtLXNocmluay1tZWRpdW0nLCAnYWQtLXNocmluay1zbWFsbCcsICdhZC0tc2hyaW5rLWV4dHJhLXNtYWxsJ107XG5cbi8qKlxuICogTG9vcCB0byBmaW5kIGVkZ2UgY2FzZSBjbGFzcyB1bnRpbCBjb250ZW50IGRvZXMgbm90IG92ZXJmbG93IG9yIGl0IGdldHMgdGhlIHNtYWxsZXN0IGNsYXNzXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudHxBcnJheS48SFRNTEVsZW1lbnQ+fSBlbGVtZW50cyBUaGUgZWxtZW50IG9yIGVsbWVudHMgdG8gZ2V0IHRoZSB0b3RhbCBoZWlnaHQgYW5kIHdpZHRoXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gcGFyZW50IFRoZSBlbGVtZW50IHRvIGFkZCB0aGUgZmluYWwgY2xhc3NcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBjb250YWluZXIgVGhlIGVsZW1lbnQgdG8gY2hlY2sgaWYgaXRzIGNoaWxkcmVuIG92ZXJmbG93IGl0XG4gKi9cblxuZnVuY3Rpb24gc2V0U2hyaW5rQ2xhc3MgKGVsZW1lbnRzLCBwYXJlbnQgPSBhZCwgY29udGFpbmVyID0gbWFpbkhlYWRsaW5lKSB7XG4gIC8vIEl0IGhhcyB0byBiZSB0aGlzIHdheSBiZWNhdXNlIElFIGRvZXMgbm90IHN1cHBvcnQgcmVtb3ZlKC4uW10pIGl0IGFwcGVhciB0byBiZSBhIHBvbHlmaWxsIGlzc3VlXG4gIHNocmlua0NsYXNzZXMuZm9yRWFjaChzdHJpbmdDbGFzcyA9PiBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShzdHJpbmdDbGFzcykpO1xuICBsZXQgc2hyaW5rUGhhc2UgPSAwO1xuXG4gIGZ1bmN0aW9uIGNhbGNTaHJpbmsgKCkge1xuICAgIC8vIEdldCB0aGUgdG90YWwgaGVpZ2h0IG9mIGNoaWxkcmVuIGVsZW1lbnRzLlxuICAgIGNvbnN0IGVsZW1lbnRzSGVpZ2h0ID0gZWxlbWVudHMucmVkdWNlPy4oKHRvdGFsSGVpZ2h0LCBlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gdG90YWxIZWlnaHQgKyBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9LCAwKSB8fCBlbGVtZW50cy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAvLyBHZXQgdGhlIHdpZGVyIGVsZW1lbnQgdmFsdWVcbiAgICBjb25zdCBlbGVtZW50c1dpZHRoID0gTWF0aC5tYXgoLi4uKGVsZW1lbnRzLm1hcD8uKCh7IG9mZnNldFdpZHRoIH0pID0+IHtcbiAgICAgIHJldHVybiBvZmZzZXRXaWR0aDtcbiAgICB9KSB8fCBbZWxlbWVudHMub2Zmc2V0V2lkdGhdKSk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBjaGlsZHJlbiBzaXplcyBvdmVyZmxvd3MgY29udGFpbmVyIGFuZCBhcHBseVxuICAgICAqIFRoZSBwcm9jZXNzIGlzIHJlcGVhdGUgdGhlIHByb2NjZXNzIHVudGlsIGNoaWxkcmVuZCBkb250IG92ZXJmbG93IG9yIHRoZSBsYXN0IGNsYXNzIGlzIGFwcGxpZWRcbiAgICAgKi9cbiAgICBpZiAoY29udGFpbmVyLm9mZnNldEhlaWdodCA8IGVsZW1lbnRzSGVpZ2h0IHx8IGNvbnRhaW5lci5vZmZzZXRXaWR0aCA8IGVsZW1lbnRzV2lkdGgpIHtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKHNocmlua0NsYXNzZXNbc2hyaW5rUGhhc2VdKTtcbiAgICAgIHNocmlua1BoYXNlICs9IDE7XG4gICAgICBpZiAoc2hyaW5rUGhhc2UgPCBzaHJpbmtDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICBjYWxjU2hyaW5rKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhbGNTaHJpbmsoKTtcbn1cblxuZnVuY3Rpb24gc2V0Q29udGFpbmVyQ2xhc3MgKHsgcmVtb3ZlLCBhZGQsIHNocmlua09wdGlvbnMsIG92ZXJ3cml0ZSB9KSB7XG4gIGNvbnN0IFsgbWVkaXVtLCBzbWFsbCwgZXh0cmFTbWFsbCBdID0gc2hyaW5rQ2xhc3NlcztcbiAgY29uc3QgeyBlbGVtZW50cywgcGFyZW50LCBjb250YWluZXIgfSA9IHNocmlua09wdGlvbnM7XG4gIGNvbnN0IG92ZXJ3cml0ZU9wdGlvbnMgPSB7XG4gICAgJ0wnOiAnZGVmYXVsdCcsXG4gICAgJ00nOiBtZWRpdW0sXG4gICAgJ1MnOiBzbWFsbCxcbiAgICAnWFMnOiBleHRyYVNtYWxsXG4gIH07XG4gIGNvbnN0IG92ZXJ3cml0ZUNsYXNzID0gb3ZlcndyaXRlT3B0aW9uc1tvdmVyd3JpdGVdO1xuICBpZiAocmVtb3ZlKSBtYWluSGVhZGxpbmUuY2xhc3NMaXN0LnJlbW92ZShyZW1vdmUpO1xuICBpZiAoYWRkKSBtYWluSGVhZGxpbmUuY2xhc3NMaXN0LmFkZChhZGQpO1xuICBpZiAob3ZlcndyaXRlQ2xhc3MpIHtcbiAgICBzaHJpbmtDbGFzc2VzLmZvckVhY2goc3RyaW5nQ2xhc3MgPT4gcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoc3RyaW5nQ2xhc3MpKTtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChvdmVyd3JpdGVDbGFzcyk7XG4gIH0gZWxzZSB7XG4gICAgc2V0U2hyaW5rQ2xhc3MoZWxlbWVudHMsIHBhcmVudCwgY29udGFpbmVyKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzZXRTaHJpbmtDbGFzcywgc2hyaW5rQ2xhc3Nlcywgc2V0Q29udGFpbmVyQ2xhc3MgfTtcbiIsImltcG9ydCB7IHNldHVwQWQgfSBmcm9tICdAaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLWFkL2xpYi92YW5pbGxhJztcbmltcG9ydCB7IG9uQ2hhbmdlVGFiRXZlbnQgfSBmcm9tICdAaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9jaGFuZ2VUYWJFdmVudCc7XG5cbmZ1bmN0aW9uIHNldER5bmFtaWNWYWx1ZXMgKGZpZWxkcywgdmFsdWVzLCBkb21FbGVtZW50cykge1xuICBmaWVsZHMuZm9yRWFjaCgoeyB0eXBlLCB2YWx1ZUtleSwgYWx0VGV4dCwgY29sb3JLZXkgfSkgPT4ge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1t2YWx1ZUtleV07XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZXNbdmFsdWVLZXldIHx8ICcnO1xuICAgICAgICBpZiAoY29sb3JLZXkpIHtcbiAgICAgICAgICBkb21FbGVtZW50LnN0eWxlLmNvbG9yID0gdmFsdWVzW2NvbG9yS2V5XTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgZG9tRWxlbWVudC5zcmMgPSB2YWx1ZXNbdmFsdWVLZXldO1xuICAgICAgICBpZiAobXlGVC5pbnN0YW50QWRzW2Ake3ZhbHVlS2V5fUFsdFRleHRgXSkgZG9tRWxlbWVudC5hbHQgPSBteUZULmluc3RhbnRBZHNbYCR7dmFsdWVLZXl9QWx0VGV4dGBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc2NsYWltZXIgKG9wZW4sIGRvbUVsZW1lbnRzKSB7XG4gIGlmIChvcGVuKSB7XG4gICAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvbUVsZW1lbnRzLmRpc2NsYWltZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzY2xhaW1lcl9fY29udGFpbmVyLS1vcGVuJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckNsb3NlQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9LCAxMDApO1xuICAgIH0sIDIwMCk7XG4gIH0gZWxzZSB7XG4gICAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNjbGFpbWVyX19jb250YWluZXItLW9wZW4nKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvbUVsZW1lbnRzLmRpc2NsYWltZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvbUVsZW1lbnRzLmV4aXQuZm9jdXMoKTtcbiAgICB9LCAyMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRzIChhcHBseUNsaWNrVGFncywgdmFsdWVzLCBnZXRNYWluVGltZWxpbmUsIGRvbUVsZW1lbnRzKSB7XG4gIGRvbUVsZW1lbnRzLmRpc2NsYWltZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVEaXNjbGFpbWVyKHRydWUsIGRvbUVsZW1lbnRzKSk7XG4gIGRvbUVsZW1lbnRzLmxvZ28uZm9jdXMoKTtcbiAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlRGlzY2xhaW1lcihmYWxzZSwgZG9tRWxlbWVudHMpKTtcbiAgYXBwbHlDbGlja1RhZ3MoZG9tRWxlbWVudHMpO1xuXG4gIG9uQ2hhbmdlVGFiRXZlbnQodmlzaWJpbGl0eSA9PiB7XG4gICAgY29uc3QgeyB0aW1lbGluZSB9ID0gd2luZG93LmFkO1xuXG4gICAgaWYgKHZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgICAvLyBJZiB0YWIgaXMgaGlkZGVuIHdoZW4gdGhlIGFkIHdhcyBpbiB0aGUgbWlkZGxlIG9mIHNob3dpbmcsXG4gICAgICAvLyBnbyB0byB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb24uXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICB0aW1lbGluZT8ucHJvZ3Jlc3MoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRhYiBpcyB2aXNpYmxlIGFuZCBhbmltYXRpb24gbm90IGNyZWF0ZWQsIGNyZWF0ZSBpdC5cbiAgICAgIGlmICghdGltZWxpbmUpIHtcbiAgICAgICAgd2luZG93LmFkLnRpbWVsaW5lID0gZ2V0TWFpblRpbWVsaW5lKGRvbUVsZW1lbnRzLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEZUQ2xpY2tUYWdzIChkb21FbGVtZW50cykge1xuICBteUZULmFwcGx5Q2xpY2tUYWcoZG9tRWxlbWVudHMuZXhpdCwgMSwgbXlGVC5pbnN0YW50QWRzLmJnVVJMKTtcbiAgbXlGVC5hcHBseUNsaWNrVGFnKGRvbUVsZW1lbnRzPy5jdGEsIDIsIG15RlQuaW5zdGFudEFkcy5jdGFVUkwpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGlja1RhZ3MgKGRvbUVsZW1lbnRzKSB7XG4gIGRvbUVsZW1lbnRzLmV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB3aW5kb3cub3Blbih3aW5kb3cuY2xpY2tUYWcxKSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgZG9tRWxlbWVudHM/LmN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5vcGVuKHdpbmRvdy5jbGlja1RhZzIpKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZUQXBwICh7IGZpZWxkcywgZXh0ZW5kZWRGdW5jdGlvbiwgZXh0cmFWYWx1ZXMsIGdldE1haW5UaW1lbGluZSwgaW1hZ2VBc3NldHMsIGRvbUVsZW1lbnRzIH0pIHtcbiAgbXlGVC5vbignaW5zdGFudGFkcycsICgpID0+IHtcbiAgICBzZXR1cEFkKHtcbiAgICAgIHBvbGl0ZVJlc291cmNlczogW3tcbiAgICAgICAgaW1hZ2VzOiBpbWFnZUFzc2V0cy5tYXAoKHsgdXJsIH0pID0+IHVybClcbiAgICAgIH1dLFxuICAgICAgb25Db21wbGV0ZTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7IC4uLm15RlQuaW5zdGFudEFkcywgLi4uZXh0cmFWYWx1ZXMgfTtcbiAgICAgICAgd2luZG93LmFkID0ge307XG4gICAgICAgIHNldER5bmFtaWNWYWx1ZXMoZmllbGRzLCB2YWx1ZXMsIGRvbUVsZW1lbnRzKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICBhd2FpdCBleHRlbmRlZEZ1bmN0aW9uPy4oKTtcbiAgICAgICAgc2V0dXBFdmVudHMoYWRkRlRDbGlja1RhZ3MsIHZhbHVlcywgZ2V0TWFpblRpbWVsaW5lLCBkb21FbGVtZW50cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwICh7IGZpZWxkcywgZXh0ZW5kZWRGdW5jdGlvbiwgdmFsdWVzLCBpbWFnZUFzc2V0cywgZ2V0TWFpblRpbWVsaW5lLCBkb21FbGVtZW50cyB9KSB7XG4gIHNldHVwQWQoe1xuICAgIHBvbGl0ZVJlc291cmNlczogW3tcbiAgICAgIGltYWdlczogaW1hZ2VBc3NldHMubWFwKCh7IHVybCB9KSA9PiB1cmwpXG4gICAgfV0sXG4gICAgb25Db21wbGV0ZTogYXN5bmMgKCkgPT4ge1xuICAgICAgd2luZG93LmFkID0ge307XG4gICAgICBzZXREeW5hbWljVmFsdWVzKGZpZWxkcywgdmFsdWVzLCBkb21FbGVtZW50cyk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICBhd2FpdCBleHRlbmRlZEZ1bmN0aW9uPy4oKTtcbiAgICAgIHNldHVwRXZlbnRzKGFkZENsaWNrVGFncywgdmFsdWVzLCBnZXRNYWluVGltZWxpbmUsIGRvbUVsZW1lbnRzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplQXBwLCBpbml0aWFsaXplRlRBcHAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=