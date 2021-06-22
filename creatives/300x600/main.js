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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/campaigns/tentativeName/300x600/shell.js");
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

/***/ "./src/campaigns/tentativeName/300x600/modules/animations.js":
/*!*******************************************************************!*\
  !*** ./src/campaigns/tentativeName/300x600/modules/animations.js ***!
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
      bgPattern = domElements.bgPattern,
      bgOfferPattern = domElements.bgOfferPattern,
      bgOfferPattern2 = domElements.bgOfferPattern2; // eslint-disable-next-line camelcase

  var F1_overwrite_edge_case = dynamicOptions.F1_overwrite_edge_case,
      imageVersion = dynamicOptions.imageVersion;
  return gsap.timeline().call(_utils.setContainerClass, [{
    overwrite: F1_overwrite_edge_case,
    shrinkOptions: {
      elements: [headlineText1, subheadlineF1],
      container: headline1,
      parent: _elements.ad
    }
  }]).add([!imageVersion && gsap.set([bgOfferPattern, bgOfferPattern2], {
    opacity: 0
  }), (0, _animation.animateInOut)(bgPattern, 'bottom', 'in'), (0, _animation.animateShowX)(logo, -20).delay(1.5), gsap.to(imageFrame1, {
    opacity: 1
  }).delay(1.7), (0, _animation.animateShowX)(headlineText1, -20).delay(2), (0, _animation.animateShowX)(subheadlineF1, -20).delay(2.2)]).to([subheadlineF1, headlineText1], {
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

  var F2_overwrite_edge_case = dynamicOptions.F2_overwrite_edge_case;
  return gsap.timeline().call(_utils.setContainerClass, [{
    overwrite: F2_overwrite_edge_case,
    shrinkOptions: {
      elements: [headlineText2, subheadlineF2],
      container: headline2,
      parent: _elements.ad
    }
  }]).add([gsap.to(imageFrame2, {
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
      ctaContainer = domElements.ctaContainer,
      subheadlineF3 = domElements.subheadlineF3,
      disclaimerButton = domElements.disclaimerButton,
      imageFrame1 = domElements.imageFrame1,
      imageFrame2 = domElements.imageFrame2,
      imageFrame3 = domElements.imageFrame3,
      bgPattern = domElements.bgPattern,
      bgOfferPattern = domElements.bgOfferPattern,
      bgOfferPattern2 = domElements.bgOfferPattern2,
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
  }]).add(imageVersion && [gsap.to([imageFrame1, imageFrame2], {
    opacity: 0
  }), gsap.to(logo, {
    top: 102
  }).delay(0.2), (0, _animation.animateInOut)(bgOfferPattern, 'top', 'in').delay(0.2), (0, _animation.animateInOut)(bgOfferPattern2, 'bottom', 'in').delay(0.4), (0, _animation.animateInOut)(bgPattern, 'bottom', 'out').delay(0.5), (0, _animation.animateShowX)(imageFrame3, 20).delay(1.5)]).add([(0, _animation.animateShowX)(headlineText3, -20), (0, _animation.animateShowX)(subheadlineF3, -20).delay(0.2), (0, _animation.animateShowX)(ctaContainer, -20).delay(0.4), gsap.to(disclaimerButton, {
    opacity: 1
  }).delay(1.5)], '>-0.5');
}

function getMainTimeline(domElementsParam, dynamicOptions) {
  return gsap.timeline().to(_elements.ad, {
    duration: 1,
    opacity: 1,
    ease: 'power4.out'
  }, 'in').add(animateFrame1(domElementsParam, dynamicOptions), '-=2').add(animateFrame2(domElementsParam, dynamicOptions)).add(animateFrame3(domElementsParam, dynamicOptions));
}

/***/ }),

/***/ "./src/campaigns/tentativeName/300x600/modules/settings.js":
/*!*****************************************************************!*\
  !*** ./src/campaigns/tentativeName/300x600/modules/settings.js ***!
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
  url: 'images/imageFrame1_300x600.png'
}, {
  key: 'asset__image-frame-2',
  url: 'images/imageFrame1_300x600.png'
}, {
  key: 'asset__image-frame3',
  url: 'images/imageFrame3_300x600.png'
}, {
  key: 'asset__bg-pattern',
  url: 'images/bgPattern_300x600.png'
}, {
  key: 'asset__bg-offer-pattern',
  url: 'images/bgOfferPattern_300x600.png'
}, {
  key: 'asset__bg-offer-pattern-2',
  url: 'images/bgOfferPattern2_300x600.png'
}, {
  key: 'asset__logo',
  url: 'images/logo_300x600.png'
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
  selector: '.asset__bg-offer-pattern-2',
  type: 'image',
  valueKey: 'bgOfferPattern2'
}, {
  selector: '.asset__image-frame-1',
  type: 'image',
  valueKey: 'imageFrame1'
}, {
  selector: '.asset__image-frame-2',
  type: 'image',
  valueKey: 'imageFrame2'
}, {
  selector: '.asset__image-frame-3',
  type: 'image',
  valueKey: 'imageFrame3'
}, {
  selector: '.asset__bg-shape',
  type: 'image',
  valueKey: 'bgShape'
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

/***/ "./src/campaigns/tentativeName/300x600/shell.js":
/*!******************************************************!*\
  !*** ./src/campaigns/tentativeName/300x600/shell.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

__webpack_require__(/*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");

var _masterTemplateV = __webpack_require__(/*! src/templates/masterTemplateV2 */ "./src/templates/masterTemplateV2/index.js");

var _dom = __webpack_require__(/*! src/core/dom */ "./src/core/dom/index.js");

__webpack_require__(/*! ./shell.scss */ "./src/campaigns/tentativeName/300x600/shell.scss");

var _storeLocator = __webpack_require__(/*! src/core/modules/store-locator */ "./src/core/modules/store-locator.js");

var _settings = __webpack_require__(/*! ./modules/settings */ "./src/campaigns/tentativeName/300x600/modules/settings.js");

var _animations = __webpack_require__(/*! ./modules/animations */ "./src/campaigns/tentativeName/300x600/modules/animations.js");

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
  domElements: domElements,
  extraValues: {
    bgShape: 'images/bg-shape.png',
    bgPattern: 'images/bgPattern_300x600.png',
    bgOfferPattern: 'images/bgOfferPattern_300x600.png',
    bgOfferPattern2: 'images/bgOfferPattern2_300x600.png'
  }
});

/***/ }),

/***/ "./src/campaigns/tentativeName/300x600/shell.scss":
/*!********************************************************!*\
  !*** ./src/campaigns/tentativeName/300x600/shell.scss ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy1hZC9saWIvdmFuaWxsYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy1hZC9saWIvdmFuaWxsYS9tYWtlU2V0dXBBZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvY2hhbmdlVGFiRXZlbnQvY2hhbmdlVGFiRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NoYW5nZVRhYkV2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9jcmVhdGVMb2dnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NyZWF0ZUxvZ2dlci9tYWtlQ3JlYXRlTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9sb2FkUmVzb3VyY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9sb2FkUmVzb3VyY2VzL2xvYWRSZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2xvYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2xvYWRpbmcvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvcHJvbWlzZVNlcmlhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvcHJvbWlzZVNlcmlhbC9wcm9taXNlU2VyaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvdHlwZXMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvYWxsU2V0dGxlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzAweDYwMC9tb2R1bGVzL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbXBhaWducy90ZW50YXRpdmVOYW1lLzMwMHg2MDAvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzAweDYwMC9zaGVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzAweDYwMC9zaGVsbC5zY3NzP2YwOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hbmltYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZG9tL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZWxlbWVudHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZWxlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbW9kdWxlcy9zdG9yZS1sb2NhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWxzL3V0bGlzLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvbWFzdGVyVGVtcGxhdGVWMi9pbmRleC5qcyJdLCJuYW1lcyI6WyJhbmltYXRlRnJhbWUxIiwiZG9tRWxlbWVudHMiLCJkeW5hbWljT3B0aW9ucyIsImhlYWRsaW5lMSIsImhlYWRsaW5lVGV4dDEiLCJzdWJoZWFkbGluZUYxIiwibG9nbyIsImltYWdlRnJhbWUxIiwiYmdQYXR0ZXJuIiwiYmdPZmZlclBhdHRlcm4iLCJiZ09mZmVyUGF0dGVybjIiLCJGMV9vdmVyd3JpdGVfZWRnZV9jYXNlIiwiaW1hZ2VWZXJzaW9uIiwiZ3NhcCIsInRpbWVsaW5lIiwiY2FsbCIsInNldENvbnRhaW5lckNsYXNzIiwib3ZlcndyaXRlIiwic2hyaW5rT3B0aW9ucyIsImVsZW1lbnRzIiwiY29udGFpbmVyIiwicGFyZW50IiwiYWQiLCJhZGQiLCJzZXQiLCJvcGFjaXR5IiwiZGVsYXkiLCJ0byIsIngiLCJzdGFnZ2VyIiwiYW5pbWF0ZUZyYW1lMiIsImhlYWRsaW5lMiIsImhlYWRsaW5lVGV4dDIiLCJzdWJoZWFkbGluZUYyIiwiaW1hZ2VGcmFtZTIiLCJGMl9vdmVyd3JpdGVfZWRnZV9jYXNlIiwiYW5pbWF0ZUZyYW1lMyIsImhlYWRsaW5lMyIsImhlYWRsaW5lVGV4dDMiLCJjdGFDb250YWluZXIiLCJzdWJoZWFkbGluZUYzIiwiZGlzY2xhaW1lckJ1dHRvbiIsImltYWdlRnJhbWUzIiwicmVtb3ZlIiwidG9wIiwiZ2V0TWFpblRpbWVsaW5lIiwiZG9tRWxlbWVudHNQYXJhbSIsImR1cmF0aW9uIiwiZWFzZSIsIklNQUdFX0FTU0VUUyIsImtleSIsInVybCIsIkZJRUxEUyIsInNlbGVjdG9yIiwidHlwZSIsInZhbHVlS2V5IiwiY29sb3JLZXkiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsImVsZW1lbnQiLCJleHRlbmRlZEZ1bmN0aW9uIiwibXlGVCIsImluc3RhbnRBZHMiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJmaWVsZHMiLCJpbWFnZUFzc2V0cyIsImV4dHJhVmFsdWVzIiwiYmdTaGFwZSIsImFuaW1hdGVTaGFwZXMiLCJzaGFwZXMiLCJyZXBlYXQiLCJyZXBlYXREZWxheSIsInR3ZWVucyIsIm1hcCIsInNoYXBlU2VsZWN0b3IiLCJvcmlnaW4iLCJjb2xvciIsInN0eWxlIiwiZnJvbVRvIiwic2NhbGUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ5b3lvIiwiYW5pbWF0ZVNob3dZIiwieSIsImFuaW1hdGVTaG93WCIsImFuaW1hdGVJbk91dCIsImRpcmVjdGlvbktleSIsImFuaW1hdGlvbk9yaWdpbiIsInRyYW5zaXRpb25TZXR1cCIsInRyYW5zbGF0ZSIsInlQZXJjZW50Iiwic2NhbGVZIiwicmlnaHQiLCJ4UGVyY2VudCIsInNjYWxlWCIsImxlZnQiLCJib3R0b20iLCJhbmltYXRpb24iLCJpbiIsImZyb20iLCJvdXQiLCIkIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInNsaWNlIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRsaW5lcyIsIm1haW5IZWFkbGluZSIsImhvdmVySGVhZGxpbmUiLCJtYWluQ1RBIiwiZGlzY2xhaW1lciIsImRpc2NsYWltZXJDbG9zZSIsIkRFRkFVTFRfRkVFRF9QQVRIIiwiUkVQTEFDRV9RVUVSWSIsIkZBTExCQUNLX1FVRVJZIiwic3RvcmVMb2NhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJsb2NhdG9yUGF0aCIsImZlZWRQYXRoIiwicmVxdWlyZSIsIlN0b3JlTG9jYXRvciIsInNsIiwibnVtYmVyVG9SZXR1cm4iLCJtYXhEaXN0YW5jZU1pbGVzIiwibG9jYXRpb25PcmRlciIsIm9uIiwic3RvcmVzIiwiaXNNYXhDaGFyYWN0ZXIiLCJjaXR5bmFtZSIsImxlbmd0aCIsImZpbmRNdXRhYmxlSGVhZGluZ3MiLCJmb3JFYWNoIiwiaW5uZXJIVE1MIiwicmVwbGFjZUhlYWRpbmdWYWx1ZSIsImNvbnNvbGUiLCJpbmZvIiwiaW5pdCIsInN0b3JlTG9jYXRvclZhbHVlIiwicmVwbGFjZSIsImhlYWRpbmdzIiwiaW5jbHVkZXNQbGFjZXMiLCJpbm5lclRleHQiLCJpbmRleE9mIiwiZmlsdGVyIiwic2hyaW5rQ2xhc3NlcyIsInNldFNocmlua0NsYXNzIiwic3RyaW5nQ2xhc3MiLCJzaHJpbmtQaGFzZSIsImNhbGNTaHJpbmsiLCJlbGVtZW50c0hlaWdodCIsInRvdGFsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudHNXaWR0aCIsIk1hdGgiLCJtYXgiLCJvZmZzZXRXaWR0aCIsIm1lZGl1bSIsInNtYWxsIiwiZXh0cmFTbWFsbCIsIm92ZXJ3cml0ZU9wdGlvbnMiLCJvdmVyd3JpdGVDbGFzcyIsInNldER5bmFtaWNWYWx1ZXMiLCJ2YWx1ZXMiLCJhbHRUZXh0IiwiZG9tRWxlbWVudCIsInNyYyIsImFsdCIsInRvZ2dsZURpc2NsYWltZXIiLCJvcGVuIiwiZGlzY2xhaW1lckNvbnRhaW5lciIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiZGlzY2xhaW1lckNsb3NlQnV0dG9uIiwiZm9jdXMiLCJleGl0Iiwic2V0dXBFdmVudHMiLCJhcHBseUNsaWNrVGFncyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2aXNpYmlsaXR5Iiwid2luZG93IiwicHJvZ3Jlc3MiLCJhZGRGVENsaWNrVGFncyIsImFwcGx5Q2xpY2tUYWciLCJiZ1VSTCIsImN0YSIsImN0YVVSTCIsImFkZENsaWNrVGFncyIsImNsaWNrVGFnMSIsImNsaWNrVGFnMiIsImluaXRpYWxpemVGVEFwcCIsInBvbGl0ZVJlc291cmNlcyIsImltYWdlcyIsIm9uQ29tcGxldGUiLCJpbml0aWFsaXplQXBwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FB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QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENB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QVksRUFBWjtBQUNBK0ksZ0NBQWdCLENBQUNuRyxNQUFELEVBQVNvRyxNQUFULEVBQWlCckssV0FBakIsQ0FBaEIsQ0FGVSxDQUdWOztBQUhVO0FBQUEsdUJBSUoyRCxnQkFKSSxhQUlKQSxnQkFKSSx1QkFJSkEsZ0JBQWdCLEVBSlo7O0FBQUE7QUFLVnVILDJCQUFXLENBQUNXLFlBQUQsRUFBZXhCLE1BQWYsRUFBdUJ6SCxlQUF2QixFQUF3QzVDLFdBQXhDLENBQVg7O0FBTFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUpKLEdBQVI7QUFZRCxDIiwiZmlsZSI6IjMwMHg2MDAvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NhbXBhaWducy90ZW50YXRpdmVOYW1lLzMwMHg2MDAvc2hlbGwuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hZCA9IGV4cG9ydHMuc2V0dXBBZCA9IHZvaWQgMDtcblxudmFyIF9sb2FkUmVzb3VyY2VzID0gcmVxdWlyZShcIkBodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2xvYWRSZXNvdXJjZXNcIik7XG5cbnZhciBfY3JlYXRlTG9nZ2VyID0gcmVxdWlyZShcIkBodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NyZWF0ZUxvZ2dlclwiKTtcblxudmFyIF9tYWtlU2V0dXBBZCA9IHJlcXVpcmUoXCIuL21ha2VTZXR1cEFkXCIpO1xuXG52YXIgZW52ID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WO1xudmFyIGxvZ0xldmVsID0gZW52ID09PSAncHJvZHVjdGlvbicgPyAyIDogMztcbnZhciBsb2cgPSAoMCwgX2NyZWF0ZUxvZ2dlci5jcmVhdGVMb2dnZXIpKCdhZCcsIHtcbiAgbGV2ZWw6IGxvZ0xldmVsXG59KTtcbnZhciBzZXR1cEFkID0gKDAsIF9tYWtlU2V0dXBBZC5tYWtlU2V0dXBBZCkoe1xuICB3aW5kb3c6IHdpbmRvdyxcbiAgbG9hZFJlc291cmNlczogX2xvYWRSZXNvdXJjZXMubG9hZFJlc291cmNlcyxcbiAgbG9nOiBsb2dcbn0pO1xuZXhwb3J0cy5zZXR1cEFkID0gc2V0dXBBZDtcbnZhciBhZCA9IHNldHVwQWQ7XG5leHBvcnRzLmFkID0gYWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1ha2VTZXR1cEFkID0gbWFrZVNldHVwQWQ7XG4vLyBUaGUgdG90YWwgbnVtYmVyIG9mIGxpc3RzIG9mIHJlc291cmNlcyB0byBsb2FkIGZvciB0aGUgYWQuXG52YXIgUkVTT1VSQ0VTX0xJU1RTX0xFTkdUSCA9IDI7XG5cbmZ1bmN0aW9uIG1ha2VTZXR1cEFkKCkge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIHdpbmRvdyA9IGRlcGVuZGVuY2llcy53aW5kb3csXG4gICAgICBsb2FkUmVzb3VyY2VzID0gZGVwZW5kZW5jaWVzLmxvYWRSZXNvdXJjZXMsXG4gICAgICBsb2cgPSBkZXBlbmRlbmNpZXMubG9nO1xuICAvKipcbiAgICogQmFzaWMgYWQgc2V0dXAgcHJvY2VzcyB3aXRoIG5vIGRlcGVuZGVuY2llcy5cbiAgICpcbiAgICogQG5hbWUgdmFuaWxsYS5zZXR1cEFkXG4gICAqIEBhbGlhcyB2YW5pbGxhLmFkXG4gICAqXG4gICAqIEBzZWUgW3Rvb2xzL2xvYWRSZXNvdXJjZXNdKC4uLy4uL3BhY2thZ2VzL3Rvb2xzL0FQSS5tZCNsb2FkcmVzb3VyY2VzKSBtb2R1bGUuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gW3NldHRpbmdzPXt9XSAtIEFkIHNldHRpbmdzLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IFtzZXR0aW5ncy52ZXJzaW9uXSAtIFRoZSBhZCB2ZXJzaW9uLlxuICAgKiBAcGFyYW0gIHtPYmplY3RbXX0gW3NldHRpbmdzLmluaXRpYWxSZXNvdXJjZXNdIC0gUmVzb3VyY2VzIHRvIGxvYWQgcmlnaHQgYXdheS5cbiAgICogSXQgaXMgcGFzc2VkIHRvIFwidG9vbHMvbG9hZFJlc291cmNlc1wiIG1vZHVsZS5cbiAgICogQHBhcmFtICB7T2JqZWN0W119IFtzZXR0aW5ncy5wb2xpdGVSZXNvdXJjZXNdIC0gUmVzb3VyY2VzIHRvIGxvYWQgYWZ0ZXJcbiAgICogdGhlIGFkIHBhZ2UgaXMgbG9hZGVkLiBJdCBpcyBwYXNzZWQgdG8gXCJ0b29scy9sb2FkUmVzb3VyY2VzXCIgbW9kdWxlLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gW3NldHRpbmdzLm9uSW5pdF0gLSBDYWxsZWQgcmlnaHQgYXdheS5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IFtzZXR0aW5ncy5vbkluaXRpYWxMb2FkXSAtIFdoZW4gdGhlIFwiaW5pdGlhbFJlc291cmNlc1wiXG4gICAqIHByb3ZpZGVkIGhhdmUgYmVlbiBsb2FkZWQuIEl0IGlzIG5vdCBjYWxsZWQgaWYgbm8gcmVzb3VyY2VzIHdlcmUgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbc2V0dGluZ3Mub25SZWFkeV0gLSBUaGUgcHJvdmlkZWQgcmVzb3VyY2VzIGhhdmUgYmVlbiBsb2FkZWQuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbc2V0dGluZ3Mub25FcnJvcl0gLSBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHJlc291cmNlcy5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IFtzZXR0aW5ncy5vbkNvbXBsZXRlXSAtIEFsd2F5cyBjYWxsZWQgd2hlbiBlaXRoZXIgXCJvblJlYWR5XCIgb3IgXCJvbkVycm9yXCIuXG4gICAqL1xuXG4gIHJldHVybiBmdW5jdGlvbiBzZXR1cEFkKCkge1xuICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIHZlcnNpb24gPSBzZXR0aW5ncy52ZXJzaW9uLFxuICAgICAgICBpbml0aWFsUmVzb3VyY2VzID0gc2V0dGluZ3MuaW5pdGlhbFJlc291cmNlcyxcbiAgICAgICAgcG9saXRlUmVzb3VyY2VzID0gc2V0dGluZ3MucG9saXRlUmVzb3VyY2VzLFxuICAgICAgICBvbkluaXQgPSBzZXR0aW5ncy5vbkluaXQsXG4gICAgICAgIG9uSW5pdGlhbExvYWQgPSBzZXR0aW5ncy5vbkluaXRpYWxMb2FkLFxuICAgICAgICBvblJlYWR5ID0gc2V0dGluZ3Mub25SZWFkeSxcbiAgICAgICAgb25FcnJvciA9IHNldHRpbmdzLm9uRXJyb3IsXG4gICAgICAgIG9uQ29tcGxldGUgPSBzZXR0aW5ncy5vbkNvbXBsZXRlO1xuICAgIHZhciByZXNvdXJjZXNMaXN0c0xvYWRlZCA9IDA7XG4gICAgdmFyIG9jdXJyZWRFcnJvciA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gd2hlbkNvbXBsZXRlKCkge1xuICAgICAgaWYgKG9uQ29tcGxldGUpIHtcbiAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdoZW5SZXNvdXJjZUVycm9yKGVycikge1xuICAgICAgLy8gT25seSBoYW5kbGUgdGhlIGZpcnN0IGVycm9yLlxuICAgICAgaWYgKG9jdXJyZWRFcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9jdXJyZWRFcnJvciA9IHRydWU7XG4gICAgICBsb2cuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdGhlIGZvbGxvd2luZyByZXNvdXJjZSBcXFwiXCIuY29uY2F0KGVyciwgXCJcXFwiLlwiKSk7XG5cbiAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgIH1cblxuICAgICAgd2hlbkNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2hlblJlYWR5KCkge1xuICAgICAgbG9nLmRlYnVnKCdUaGUgYWQgaXMgcmVhZHkuJyk7XG5cbiAgICAgIGlmIChvblJlYWR5KSB7XG4gICAgICAgIG9uUmVhZHkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuUmVzb3VyY2VzTGlzdExvYWRlZCgpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHR3byBsaXN0cyAoXCJpbml0aWFsUmVzb3VyY2VzXCIgYW5kIFwicG9saXRlUmVzb3VyY2VzXCIpXG4gICAgICAvLyB0byBiZSBsb2FkZWQgdG8gY2FsbCB0aGUgXCJvblJlYWR5XCIgYW5kIFwib25Db21wbGV0ZVwiIGNhbGxiYWNrcy4gV2UgdXNlIGFcbiAgICAgIC8vIGNvdW50ZXIgdG8gY291bnQgZm9yIGJvdGggb2YgdGhlbS5cbiAgICAgIHJlc291cmNlc0xpc3RzTG9hZGVkKys7XG5cbiAgICAgIGlmIChyZXNvdXJjZXNMaXN0c0xvYWRlZCAhPT0gUkVTT1VSQ0VTX0xJU1RTX0xFTkdUSCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEdldCBvdXQgZnJvbSB0aGUgcHJvbWlzZSBjaGFpbiAoaWYgaW4gb25lKSB0byBwcmV2ZW50IHBvc3NpYmxlXG4gICAgICAvLyBjYWxsYmFjayBlcnJvcnMgdG8gbGVhayBpbiB0aGUgY2hhaW4uXG5cblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoZW5SZWFkeSgpO1xuICAgICAgICB3aGVuQ29tcGxldGUoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdoZW5Jbml0aWFsTG9hZCgpIHtcbiAgICAgIGlmIChvbkluaXRpYWxMb2FkKSB7XG4gICAgICAgIC8vIEdldCBvdXQgZnJvbSB0aGUgcHJvbWlzZSBjaGFpbiAoaWYgaW4gb25lKSB0byBwcmV2ZW50IHBvc3NpYmxlXG4gICAgICAgIC8vIGNhbGxiYWNrIGVycm9ycyB0byBsZWFrIGluIHRoZSBjaGFpbi5cbiAgICAgICAgc2V0VGltZW91dChvbkluaXRpYWxMb2FkLCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuSW5pdCgpIHtcbiAgICAgIGxvZy5kZWJ1ZygnVGhlIGFkIGlzIGluaXRpYWxpemVkLicpO1xuXG4gICAgICBpZiAob25Jbml0KSB7XG4gICAgICAgIG9uSW5pdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5pdGlhbFJlc291cmNlcykge1xuICAgICAgICBsb2FkUmVzb3VyY2VzKGluaXRpYWxSZXNvdXJjZXMpLnRoZW4od2hlbkluaXRpYWxMb2FkKS50aGVuKHdoZW5SZXNvdXJjZXNMaXN0TG9hZGVkKS5jYXRjaCh3aGVuUmVzb3VyY2VFcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGVuUmVzb3VyY2VzTGlzdExvYWRlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdoZW5Mb2FkKCkge1xuICAgICAgbG9nLmRlYnVnKCdUaGUgYWQgaXMgbG9hZGVkLicpO1xuXG4gICAgICBpZiAocG9saXRlUmVzb3VyY2VzKSB7XG4gICAgICAgIGxvYWRSZXNvdXJjZXMocG9saXRlUmVzb3VyY2VzKS50aGVuKHdoZW5SZXNvdXJjZXNMaXN0TG9hZGVkKS5jYXRjaCh3aGVuUmVzb3VyY2VFcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGVuUmVzb3VyY2VzTGlzdExvYWRlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICBsb2cuaW5mbyhcIlZlcnNpb24gXCIuY29uY2F0KHZlcnNpb24pKTtcbiAgICB9XG5cbiAgICB3aGVuSW5pdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5kb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICB3aGVuTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHdoZW5Mb2FkKTtcbiAgICB9XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9mZkNoYW5nZVRhYkV2ZW50ID0gZXhwb3J0cy5vbkNoYW5nZVRhYkV2ZW50ID0gdm9pZCAwO1xuXG4vKipcbiAqIFNldCBhIHdpbmRvdyBldmVudCB0byBsaXN0ZW4gZm9yIHdpbmRvdyB2aXNpYmlsaXR5IGNoYW5nZXNcbiAqIGlmIFtQYWdlIFZpc2liaWxpdHkgQVBJXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUGFnZV9WaXNpYmlsaXR5X0FQSSlcbiAqIGlzIHN1cHBvcnRlZC5cbiAqIEl0IGNhbGxzIHRoZSBjYWxsYmFjayBhdCByZWdpc3RyYXRpb24gdGltZS5cbiAqIEl0IHNldHMgdGhlIGF0dHJpYnV0ZSBgZGF0YS12aXNpYmlsaXR5YCB3aXRoIHRoZSB2YWx1ZSBgaGlkZGVuYCBvciBgdmlzaWJsZWBcbiAqIGFjY29yZGluZyB0byB0aGUgY2FzZSB3aGVuIGl0IGNoYW5nZXMgdG8gdGhlIGJvZHkgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gUmVjZWl2ZXMgYGhpZGRlbmAgb3IgYHZpc2libGVgIGFjY29yZGluZyB0b1xuICogdGhlIGNhc2UuXG4gKi9cbnZhciBvbkNoYW5nZVRhYkV2ZW50ID0gZnVuY3Rpb24gb25DaGFuZ2VUYWJFdmVudChjYWxsYmFjaykge1xuICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgdmFyIGlzSGlkZGVuID0gJ2hpZGRlbicgaW4gZG9jdW1lbnQgPyBkb2N1bWVudC5oaWRkZW4gOiBkb2N1bWVudC53ZWJraXRIaWRkZW47XG4gICAgdmFyIHZpc2liaWxpdHkgPSBpc0hpZGRlbiA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2liaWxpdHknLCB2aXNpYmlsaXR5KTtcbiAgICBjYWxsYmFjayh2aXNpYmlsaXR5KTtcbiAgfTtcblxuICBpZiAoJ2hpZGRlbicgaW4gZG9jdW1lbnQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlcik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0dmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgaGFuZGxlcigpO1xuICByZXR1cm4gaGFuZGxlcjtcbn07XG4vKipcbiAqIFJlbW92ZSBjaGFuZ2UgdGFiIGV2ZW50IGxpc3RlbmVyLlxuICogVXN1YWxseSwgdGhpcyBsZXRzIHlvdSByZW1vdmUgYSBoYW5kbGVyIGNyZWF0ZWQgd2l0aCBgb25DaGFuZ2VUYWJFdmVudGAuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSBoYW5kbGVyXG4gKiBjb25zdCBoYW5kbGVyID0gb25DaGFuZ2VUYWJFdmVudChmdW5jdGlvbiAoKSB7fSk7XG4gKiAvLyBSZW1vdmUgaGFuZGxlclxuICogb2ZmQ2hhbmdlVGFiRXZlbnQoaGFuZGxlcik7XG4gKi9cblxuXG5leHBvcnRzLm9uQ2hhbmdlVGFiRXZlbnQgPSBvbkNoYW5nZVRhYkV2ZW50O1xuXG52YXIgb2ZmQ2hhbmdlVGFiRXZlbnQgPSBmdW5jdGlvbiBvZmZDaGFuZ2VUYWJFdmVudChoYW5kbGVyKSB7XG4gIGlmICgnaGlkZGVuJyBpbiBkb2N1bWVudCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlcik7XG4gIH1cbn07XG5cbmV4cG9ydHMub2ZmQ2hhbmdlVGFiRXZlbnQgPSBvZmZDaGFuZ2VUYWJFdmVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jaGFuZ2VUYWJFdmVudCA9IHJlcXVpcmUoXCIuL2NoYW5nZVRhYkV2ZW50XCIpO1xuXG5PYmplY3Qua2V5cyhfY2hhbmdlVGFiRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGFuZ2VUYWJFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlTG9nZ2VyID0gdm9pZCAwO1xuXG52YXIgX21ha2VDcmVhdGVMb2dnZXIgPSByZXF1aXJlKFwiLi9tYWtlQ3JlYXRlTG9nZ2VyLmpzXCIpO1xuXG4vLyBJbiBzb21lIG9sZGVyIGJyb3dzZXJzLCBvYmplY3QgYGNvbnNvbGVgIGRvZXMgbm90IGV4aXN0LCBzbyBhY2Nlc3NpbmcgaXRcbi8vIHRocm93cyBhbmQgZXJyb3IuIFdlIGdldCBpdCBmcm9tIHdpbmRvdyBmb3Igc2FmZXR5LlxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbnZhciBjcmVhdGVMb2dnZXIgPSAoMCwgX21ha2VDcmVhdGVMb2dnZXIubWFrZUNyZWF0ZUxvZ2dlcikoe1xuICBjb25zb2xlOiBjb25zb2xlXG59KTtcbmV4cG9ydHMuY3JlYXRlTG9nZ2VyID0gY3JlYXRlTG9nZ2VyOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFrZUNyZWF0ZUxvZ2dlciA9IG1ha2VDcmVhdGVMb2dnZXI7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgY3JlYXRlTG9nZ2VyIHRvb2wuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlcGVuZGVuY2llc1xuICogQHBhcmFtICB7T2JqZWN0fSBkZXBlbmRlbmNpZXMuY29uc29sZSAtIEJyb3dzZXIgZ2xvYmFsIG9iamVjdFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIG1ha2VDcmVhdGVMb2dnZXIoKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgY29uc29sZSA9IGRlcGVuZGVuY2llcy5jb25zb2xlIHx8IHt9O1xuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvZ2dlciBpbnN0YW5jZSBmb3IgdGhlIGJyb3dzZXIgd2l0aCBmb3VyIGxvZyBtZXRob2RzXG4gICAqIGNvcnJlc3BvbmRpbmcgdG8gZm91ciBkaWZmZXJlbnQgc2V2ZXJpdHkgbGV2ZWxzOlxuICAgKiAtIGxldmVsIDA6IGBlcnJvcmBcbiAgICogLSBsZXZlbCAxOiBgd2FybmBcbiAgICogLSBsZXZlbCAyOiBgaW5mb2BcbiAgICogLSBsZXZlbCAzOiBgZGVidWdgXG4gICAqXG4gICAqIFRoZSBhdmFpbGFibGUgbG9nIG1ldGhvZHMgd2lsbCBkZXBlbmQgb24gdGhlIHNldmVyaXR5IGxldmVsIHBhc3NlZCBhcyBhblxuICAgKiBhcmd1bWVudCBpbiBgc2V0dGluZ3MubGV2ZWxgLlxuICAgKlxuICAgKiBJZiB0aGUgbG9nIG1ldGhvZCBkb2Vzbid0IGV4aXN0IGluIHRoZSBicm93c2VyLCBpdCB3aWxsIGZhbGxiYWNrIHRoZVxuICAgKiBsb2cgbWV0aG9kIGJ5IGRlZmF1bHQgaS5lIGBjb25zb2xlLmxvZ2AuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbmFtZXNwYWNlIC0gcHJlZml4IHRvIGdyb3VwIGxvZ3NcbiAgICogQHBhcmFtICB7T2JqZWN0fSBbc2V0dGluZ3MgPSB7fV1cbiAgICogQHBhcmFtICB7bnVtYmVyfSBbc2V0dGluZ3MubGV2ZWwgPSAzXSAtIG1heCBudW1iZXIgb2YgbG9nIGxldmVscyBhbGxvd2VkXG4gICAqIEByZXR1cm4ge09iamVjdH0gLSBjb250YWlucyBhbGwgdGhlIGxvZyBtZXRob2RzIHRvIGJlIHVzZWRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgbG9nID0gY3JlYXRlTG9nZ2VyKCdteUFwcCcpO1xuICAgKiBsb2cuZGVidWcoJ0xvYWRpbmcgQXBwJyk7XG4gICAqIC8vIExvZ3MgaW4gdGhlIGNvbnNvbGU6IFwiW215QXBwXSBMb2FkaW5nIEFwcFwiXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFRoZSBhdmFpbGFibGUgbG9nIGxldmVscyB3aWxsIGJlIGVycm9yLCB3YXJuIGFuZCBpbmZvLlxuICAgKiBjb25zdCBsb2cgPSBjcmVhdGVMb2dnZXIoJ215QXBwJywgeyBsZXZlbDogMiB9KTtcbiAgICogbG9nLmRlYnVnKCdMb2FkaW5nIEFwcCcpO1xuICAgKiAvLyBMb2dzIG5vdGhpbmcgaW50byB0aGUgY29uc29sZSBzaW5jZSB0aGF0IGxldmVsIGlzIG5vdCBhbGxvd2VkLlxuICAgKi9cblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKG5hbWVzcGFjZSkge1xuICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBpZiAoISgwLCBfdHlwZXMuaXNTdHJpbmcpKG5hbWVzcGFjZSkgfHwgIW5hbWVzcGFjZS50cmltKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSB2YWxpZCBuYW1lc3BhY2UgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgc2V0dGluZ3MgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGxldmVsOiAzXG4gICAgfSwgc2V0dGluZ3MpOyAvLyBGdW5jdGlvbiB0byBmYWN0b3JpemUgY29tbW9uIHRhc2tzIGluIGRpc3BsYXlpbmcgbWVzc2FnZXNcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlMb2dzKGRhdGEpIHtcbiAgICAgIHZhciBsZXZlbCA9IGRhdGEubGV2ZWwsXG4gICAgICAgICAgbWVzc2FnZXMgPSBkYXRhLm1lc3NhZ2VzO1xuICAgICAgdmFyIGxvZ01ldGhvZHMgPSBbY29uc29sZS5lcnJvciwgY29uc29sZS53YXJuLCBjb25zb2xlLmluZm8sIGNvbnNvbGUuZGVidWddO1xuICAgICAgdmFyIGxvZ01ldGhvZCA9IGxvZ01ldGhvZHNbbGV2ZWxdIHx8IGNvbnNvbGUubG9nO1xuICAgICAgdmFyIGFsbG93ZWRMZXZlbCA9IHNldHRpbmdzLmxldmVsO1xuXG4gICAgICBpZiAobG9nTWV0aG9kICYmIGxvZ01ldGhvZC5hcHBseSAmJiBsZXZlbCA8PSBhbGxvd2VkTGV2ZWwpIHtcbiAgICAgICAgLy8gV2UgcnVuIGRpcmVjdGx5IC5hcHBseSgpIGV4cGxpY2l0ZWx5IHRvIHNldCB0aGUgY29udGV4dCBvZiB0aGUgY2FsbFxuICAgICAgICAvLyB0byBiZSB0aGUgYGNvbnNvbGVgIG9iamVjdC4gSWYgbm90LCBJRSB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgIGxvZ01ldGhvZC5hcHBseShjb25zb2xlLCBbXCJbXCIuY29uY2F0KG5hbWVzcGFjZSwgXCJdXCIpXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTIuZGVmYXVsdCkobWVzc2FnZXMpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlYnVnOiBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAgICAgdmFyIGxldmVsID0gMztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgbWVzc2FnZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwbGF5TG9ncyh7XG4gICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBpbmZvOiBmdW5jdGlvbiBpbmZvKCkge1xuICAgICAgICB2YXIgbGV2ZWwgPSAyO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZXMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBtZXNzYWdlc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGxheUxvZ3Moe1xuICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgd2FybjogZnVuY3Rpb24gd2FybigpIHtcbiAgICAgICAgdmFyIGxldmVsID0gMTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2VzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgICAgbWVzc2FnZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXlMb2dzKHtcbiAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgdmFyIGxldmVsID0gMDtcblxuICAgICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2VzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgICAgbWVzc2FnZXNbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXlMb2dzKHtcbiAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbG9hZFJlc291cmNlcyA9IHJlcXVpcmUoXCIuL2xvYWRSZXNvdXJjZXNcIik7XG5cbk9iamVjdC5rZXlzKF9sb2FkUmVzb3VyY2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfbG9hZFJlc291cmNlc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmxvYWRSZXNvdXJjZXMgPSB2b2lkIDA7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSk7XG5cbnZhciBfcHJvbWlzZVNlcmlhbCA9IHJlcXVpcmUoXCIuLi9wcm9taXNlU2VyaWFsXCIpO1xuXG52YXIgX2xvYWRpbmcgPSByZXF1aXJlKFwiLi4vbG9hZGluZ1wiKTtcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogTG9hZCBhIHNldCBvZiByZXNvdXJjZXMgb3JnYW5pemVkIGluIHNlcmlhbCBhbmQgcGFyYWxsZWwuXG4gKiBAcGFyYW0gIHtPYmplY3RbXX0gcmVzb3VyY2VzXG4gKiBAcGFyYW0gIHtzdHJpbmdbXX0gW3Jlc291cmNlc1tdLmltYWdlc11cbiAqIEBwYXJhbSAge3N0cmluZ1tdfSBbcmVzb3VyY2VzW10uc2NyaXB0c11cbiAqIEBwYXJhbSAge3N0cmluZ1tdfSBbcmVzb3VyY2VzW10uc3R5bGVzXVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBleGFtcGxlXG4gKiAvLyBUaGlzIHdpbGwgbG9hZCAnc2NyaXB0MScgYW5kICdzdHlsZTEnIGZpcnN0IGluIHBhcmFsbGVsIGFuZCB0aGVuXG4gKiAvLyAnaW1nMScgYW5kICdpbWcyJyBhZnRlciBpbiBwYXJhbGxlbC5cbiAqIGxvYWRSZXNvdXJjZXMoW1xuICogICB7IHNjcmlwdHM6IFsnc2NyaXB0MS5qcyddLCBzdHlsZXM6IFsnc3R5bGUxLmNzcyddIH0sXG4gKiAgIHsgaW1hZ2VzOiBbJ2ltZzEucG5nJywgJ2ltZzIucG5nJ10gfVxuICogXSk7XG4gKi9cbnZhciBsb2FkUmVzb3VyY2VzID0gZnVuY3Rpb24gbG9hZFJlc291cmNlcyhyZXNvdXJjZXMpIHtcbiAgcmV0dXJuICgwLCBfcHJvbWlzZVNlcmlhbC5wcm9taXNlU2VyaWFsKShyZXNvdXJjZXMubWFwKGZ1bmN0aW9uIChyZXNvdXJjZXNTZXQpIHtcbiAgICB2YXIgX3Jlc291cmNlc1NldCRzdHlsZXMgPSByZXNvdXJjZXNTZXQuc3R5bGVzLFxuICAgICAgICBzdHlsZXMgPSBfcmVzb3VyY2VzU2V0JHN0eWxlcyA9PT0gdm9pZCAwID8gW10gOiBfcmVzb3VyY2VzU2V0JHN0eWxlcyxcbiAgICAgICAgX3Jlc291cmNlc1NldCRzY3JpcHRzID0gcmVzb3VyY2VzU2V0LnNjcmlwdHMsXG4gICAgICAgIHNjcmlwdHMgPSBfcmVzb3VyY2VzU2V0JHNjcmlwdHMgPT09IHZvaWQgMCA/IFtdIDogX3Jlc291cmNlc1NldCRzY3JpcHRzLFxuICAgICAgICBfcmVzb3VyY2VzU2V0JGltYWdlcyA9IHJlc291cmNlc1NldC5pbWFnZXMsXG4gICAgICAgIGltYWdlcyA9IF9yZXNvdXJjZXNTZXQkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZXNvdXJjZXNTZXQkaW1hZ2VzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKHN0eWxlcy5tYXAoX2xvYWRpbmcubG9hZFN0eWxlKSksICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKHNjcmlwdHMubWFwKF9sb2FkaW5nLmxvYWRTY3JpcHQpKSwgKDAsIF90b0NvbnN1bWFibGVBcnJheTIuZGVmYXVsdCkoaW1hZ2VzLm1hcChfbG9hZGluZy5sb2FkSW1hZ2UpKSkpO1xuICAgIH07XG4gIH0pKTtcbn07XG5cbmV4cG9ydHMubG9hZFJlc291cmNlcyA9IGxvYWRSZXNvdXJjZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbG9hZGluZyA9IHJlcXVpcmUoXCIuL2xvYWRpbmdcIik7XG5cbk9iamVjdC5rZXlzKF9sb2FkaW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfbG9hZGluZ1trZXldO1xuICAgIH1cbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubG9hZEltYWdlID0gZXhwb3J0cy5sb2FkU3R5bGUgPSBleHBvcnRzLmxvYWRTY3JpcHQgPSB2b2lkIDA7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIExvYWQgYSBKYXZhU2NyaXB0IGZpbGUgYnkgVVJMLlxuICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAZXhhbXBsZVxuICogbG9hZFNjcmlwdCgnYXBwLmpzJykudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTG9hZGVkLicpKTtcbiAqL1xudmFyIGxvYWRTY3JpcHQgPSBmdW5jdGlvbiBsb2FkU2NyaXB0KHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShzY3JpcHQpO1xuICAgIH07XG5cbiAgICBzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlamVjdCh1cmwpO1xuICAgIH07XG5cbiAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfSk7XG59O1xuLyoqXG4gKiBMb2FkIGEgQ1NTIGZpbGUgYnkgVVJMLlxuICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAZXhhbXBsZVxuICogbG9hZFN0eWxlKCdhcHAuY3NzJykudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTG9hZGVkLicpKTtcbiAqL1xuXG5cbmV4cG9ydHMubG9hZFNjcmlwdCA9IGxvYWRTY3JpcHQ7XG5cbnZhciBsb2FkU3R5bGUgPSBmdW5jdGlvbiBsb2FkU3R5bGUodXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBsaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKGxpbmspO1xuICAgIH07XG5cbiAgICBsaW5rLm9uZXJyb3IgPSBsaW5rLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KHVybCk7XG4gICAgfTtcblxuICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobGluayk7XG4gIH0pO1xufTtcbi8qKlxuICogTG9hZCBhbiBpbWFnZSBmaWxlIGJ5IFVSTC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGV4YW1wbGVcbiAqIGxvYWRJbWFnZSgnbG9nby5wbmcnKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdMb2FkZWQuJykpO1xuICovXG5cblxuZXhwb3J0cy5sb2FkU3R5bGUgPSBsb2FkU3R5bGU7XG5cbnZhciBsb2FkSW1hZ2UgPSBmdW5jdGlvbiBsb2FkSW1hZ2UodXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKGltZyk7XG4gICAgfTtcblxuICAgIGltZy5vbmVycm9yID0gaW1nLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KHVybCk7XG4gICAgfTtcblxuICAgIGltZy5zcmMgPSB1cmw7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5sb2FkSW1hZ2UgPSBsb2FkSW1hZ2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcHJvbWlzZVNlcmlhbCA9IHJlcXVpcmUoXCIuL3Byb21pc2VTZXJpYWxcIik7XG5cbk9iamVjdC5rZXlzKF9wcm9taXNlU2VyaWFsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfcHJvbWlzZVNlcmlhbFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvbWlzZVNlcmlhbCA9IHZvaWQgMDtcblxuLyoqXG4gKiBSdW4gYSBsaXN0IG9mIGZ1bmN0aW9ucyBpbiBzZXJpYWwgaW4gYSBjaGFpbiBvZiBwcm9taXNlcy5cbiAqIFRoaXMgaXMgbGlrZSBgUHJvbWlzZS5hbGwoKWAgYnV0IGluIHNlcmlhbC5cbiAqIFRoZSB2YWx1ZSByZWNlaXZlZCBpbiBhIHByb21pc2UgaXMgdGhlIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBwcm9taXNlLlxuICogQHBhcmFtICB7RnVuY3Rpb25bXX0gZm5zXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGV4YW1wbGVcbiAqIHByb21pc2VTZXJpYWwoW1xuICAqICAgZmV0Y2goJ2ltYWdlMS5wbmcnKSxcbiAgKiAgIGZldGNoKCdpbWFnZTIucG5nJyksXG4gICogICBmZXRjaCgnaW1hZ2UzLnBuZycpXG4gICogXSkudGhlbihsYXN0UmVzID0+IHtcbiAgKiAgIC8vIFJlY2VpdmVzIGxhc3QgcHJvbWlzZSByZXN1bHQuXG4gICogfSk7XG4gICovXG52YXIgcHJvbWlzZVNlcmlhbCA9IGZ1bmN0aW9uIHByb21pc2VTZXJpYWwoZm5zKSB7XG4gIHZhciBpbml0aWFsUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICByZXR1cm4gZm5zLnJlZHVjZShmdW5jdGlvbiAoc2VyaWFsLCBmbikge1xuICAgIHJldHVybiBzZXJpYWwudGhlbihmbik7XG4gIH0sIGluaXRpYWxQcm9taXNlKTtcbn07XG5cbmV4cG9ydHMucHJvbWlzZVNlcmlhbCA9IHByb21pc2VTZXJpYWw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcblxuT2JqZWN0LmtleXMoX3R5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdHlwZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc051bWJlciA9IGV4cG9ydHMuaXNTdHJpbmcgPSBleHBvcnRzLmlzUGxhaW5PYmplY3QgPSB2b2lkIDA7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpKTtcblxuLyoqXG4gKiBJZiB0aGUgcHJvdmlkZWQgZGF0YSBpcyBhIHBsYWluIG9iamVjdC5cbiAqIEBwYXJhbSAgeyp9ICBkYXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QoZGF0YSkge1xuICByZXR1cm4gISFkYXRhICYmICgwLCBfdHlwZW9mMi5kZWZhdWx0KShkYXRhKSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoZGF0YSk7XG59O1xuLyoqXG4gKiBJZiB0aGUgcHJvdmlkZWQgZGF0YSBpcyBhIHN0cmluZy5cbiAqIEBwYXJhbSAgeyp9ICBkYXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5cblxuZXhwb3J0cy5pc1BsYWluT2JqZWN0ID0gaXNQbGFpbk9iamVjdDtcblxudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcoZGF0YSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnO1xufTtcbi8qKlxuICogSWYgdGhlIHByb3ZpZGVkIGRhdGEgaXMgYSBudW1iZXIuXG4gKiBAcGFyYW0gIHsqfSAgZGF0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG5cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxudmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIoZGF0YSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09ICdudW1iZXInO1xufTtcblxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJmdW5jdGlvbiBhbGxTZXR0bGVkKGFycikge1xuICB2YXIgUCA9IHRoaXM7XG4gIHJldHVybiBuZXcgUChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIShhcnIgJiYgdHlwZW9mIGFyci5sZW5ndGggIT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICB0eXBlb2YgYXJyICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBhcnIgK1xuICAgICAgICAgICAgJyBpcyBub3QgaXRlcmFibGUoY2Fubm90IHJlYWQgcHJvcGVydHkgU3ltYm9sKFN5bWJvbC5pdGVyYXRvcikpJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgYXJnc1tpXSA9IHsgc3RhdHVzOiAncmVqZWN0ZWQnLCByZWFzb246IGUgfTtcbiAgICAgICAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcmdzW2ldID0geyBzdGF0dXM6ICdmdWxmaWxsZWQnLCB2YWx1ZTogdmFsIH07XG4gICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGxTZXR0bGVkO1xuIiwiLyoqXG4gKiBAdGhpcyB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gZmluYWxseUNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluYWxseUNvbnN0cnVjdG9yO1xuIiwiaW1wb3J0IHByb21pc2VGaW5hbGx5IGZyb20gJy4vZmluYWxseSc7XG5pbXBvcnQgYWxsU2V0dGxlZCBmcm9tICcuL2FsbFNldHRsZWQnO1xuXG4vLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBwcm9taXNlLXBvbHlmaWxsIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXG52YXIgc2V0VGltZW91dEZ1bmMgPSBzZXRUaW1lb3V0O1xuXG5mdW5jdGlvbiBpc0FycmF5KHgpIHtcbiAgcmV0dXJuIEJvb2xlYW4oeCAmJiB0eXBlb2YgeC5sZW5ndGggIT09ICd1bmRlZmluZWQnKTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICAvKiogQHR5cGUgeyFudW1iZXJ9ICovXG4gIHRoaXMuX3N0YXRlID0gMDtcbiAgLyoqIEB0eXBlIHshYm9vbGVhbn0gKi9cbiAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xuICAvKiogQHR5cGUge1Byb21pc2V8dW5kZWZpbmVkfSAqL1xuICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgLyoqIEB0eXBlIHshQXJyYXk8IUZ1bmN0aW9uPn0gKi9cbiAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cbiAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlKHNlbGYsIGRlZmVycmVkKSB7XG4gIHdoaWxlIChzZWxmLl9zdGF0ZSA9PT0gMykge1xuICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcbiAgfVxuICBpZiAoc2VsZi5fc3RhdGUgPT09IDApIHtcbiAgICBzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xuICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcbiAgICB2YXIgY2IgPSBzZWxmLl9zdGF0ZSA9PT0gMSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcbiAgICBpZiAoY2IgPT09IG51bGwpIHtcbiAgICAgIChzZWxmLl9zdGF0ZSA9PT0gMSA/IHJlc29sdmUgOiByZWplY3QpKGRlZmVycmVkLnByb21pc2UsIHNlbGYuX3ZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJldDtcbiAgICB0cnkge1xuICAgICAgcmV0ID0gY2Ioc2VsZi5fdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuICB0cnkge1xuICAgIC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG4gICAgaWYgKG5ld1ZhbHVlID09PSBzZWxmKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICBpZiAoXG4gICAgICBuZXdWYWx1ZSAmJlxuICAgICAgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICkge1xuICAgICAgdmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xuICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBzZWxmLl9zdGF0ZSA9IDM7XG4gICAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGZpbmFsZShzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIHNlbGYpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHNlbGYuX3N0YXRlID0gMTtcbiAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpbmFsZShzZWxmKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdChzZWxmLCBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcbiAgc2VsZi5fc3RhdGUgPSAyO1xuICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICBmaW5hbGUoc2VsZik7XG59XG5cbmZ1bmN0aW9uIGZpbmFsZShzZWxmKSB7XG4gIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG4gICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXNlbGYuX2hhbmRsZWQpIHtcbiAgICAgICAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oc2VsZi5fdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGhhbmRsZShzZWxmLCBzZWxmLl9kZWZlcnJlZHNbaV0pO1xuICB9XG4gIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcbiAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcbiAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxuICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxuICovXG5mdW5jdGlvbiBkb1Jlc29sdmUoZm4sIHNlbGYpIHtcbiAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICBmbihcbiAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIHJlamVjdChzZWxmLCByZWFzb24pO1xuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3Qoc2VsZiwgZXgpO1xuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgdmFyIHByb20gPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcbiAgcmV0dXJuIHByb207XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddID0gcHJvbWlzZUZpbmFsbHk7XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24oYXJyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5JykpO1xuICAgIH1cblxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgcmVzKGksIHZhbCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJnc1tpXSA9IHZhbDtcbiAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICB9XG4gIH0pO1xufTtcblxuUHJvbWlzZS5hbGxTZXR0bGVkID0gYWxsU2V0dGxlZDtcblxuUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24oYXJyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdQcm9taXNlLnJhY2UgYWNjZXB0cyBhbiBhcnJheScpKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoYXJyW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xuUHJvbWlzZS5faW1tZWRpYXRlRm4gPVxuICAvLyBAdHMtaWdub3JlXG4gICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmXG4gICAgZnVuY3Rpb24oZm4pIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgfSkgfHxcbiAgZnVuY3Rpb24oZm4pIHtcbiAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG4gIH07XG5cblByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZnVuY3Rpb24gX3VuaGFuZGxlZFJlamVjdGlvbkZuKGVycikge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTtcbiIsImltcG9ydCBQcm9taXNlIGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHByb21pc2VGaW5hbGx5IGZyb20gJy4vZmluYWxseSc7XG5pbXBvcnQgYWxsU2V0dGxlZCBmcm9tICcuL2FsbFNldHRsZWQnO1xuXG4vKiogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzfSAqL1xudmFyIGdsb2JhbE5TID0gKGZ1bmN0aW9uKCkge1xuICAvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcbiAgLy8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG4gIC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZ2xvYmFsO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG59KSgpO1xuXG4vLyBFeHBvc2UgdGhlIHBvbHlmaWxsIGlmIFByb21pc2UgaXMgdW5kZWZpbmVkIG9yIHNldCB0byBhXG4vLyBub24tZnVuY3Rpb24gdmFsdWUuIFRoZSBsYXR0ZXIgY2FuIGJlIGR1ZSB0byBhIG5hbWVkIEhUTUxFbGVtZW50XG4vLyBiZWluZyBleHBvc2VkIGJ5IGJyb3dzZXJzIGZvciBsZWdhY3kgcmVhc29ucy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YXlsb3JoYWtlcy9wcm9taXNlLXBvbHlmaWxsL2lzc3Vlcy8xMTRcbmlmICh0eXBlb2YgZ2xvYmFsTlNbJ1Byb21pc2UnXSAhPT0gJ2Z1bmN0aW9uJykge1xuICBnbG9iYWxOU1snUHJvbWlzZSddID0gUHJvbWlzZTtcbn0gZWxzZSBpZiAoIWdsb2JhbE5TLlByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10pIHtcbiAgZ2xvYmFsTlMuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IHByb21pc2VGaW5hbGx5O1xufSBlbHNlIGlmICghZ2xvYmFsTlMuUHJvbWlzZS5hbGxTZXR0bGVkKSB7XG4gIGdsb2JhbE5TLlByb21pc2UuYWxsU2V0dGxlZCA9IGFsbFNldHRsZWQ7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgYWQgfSBmcm9tICdzcmMvY29yZS9lbGVtZW50cyc7XG5pbXBvcnQgeyBhbmltYXRlU2hvd1gsIGFuaW1hdGVJbk91dCB9IGZyb20gJ3NyYy9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBzZXRDb250YWluZXJDbGFzcyB9IGZyb20gJ3NyYy9jb3JlL3V0aWxzJztcblxuZnVuY3Rpb24gYW5pbWF0ZUZyYW1lMSAoZG9tRWxlbWVudHMsIGR5bmFtaWNPcHRpb25zKSB7XG4gIGNvbnN0IHsgaGVhZGxpbmUxLCBoZWFkbGluZVRleHQxLCBzdWJoZWFkbGluZUYxLCBsb2dvLCBpbWFnZUZyYW1lMSwgYmdQYXR0ZXJuLCBiZ09mZmVyUGF0dGVybiwgYmdPZmZlclBhdHRlcm4yIH0gPSBkb21FbGVtZW50cztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBjb25zdCB7IEYxX292ZXJ3cml0ZV9lZGdlX2Nhc2UsIGltYWdlVmVyc2lvbiB9ID0gZHluYW1pY09wdGlvbnM7XG5cbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKVxuICAgIC5jYWxsKHNldENvbnRhaW5lckNsYXNzLCBbe1xuICAgICAgb3ZlcndyaXRlOiBGMV9vdmVyd3JpdGVfZWRnZV9jYXNlLFxuICAgICAgc2hyaW5rT3B0aW9uczoge1xuICAgICAgICBlbGVtZW50czogW2hlYWRsaW5lVGV4dDEsIHN1YmhlYWRsaW5lRjFdLFxuICAgICAgICBjb250YWluZXI6IGhlYWRsaW5lMSxcbiAgICAgICAgcGFyZW50OiBhZFxuICAgICAgfVxuICAgIH1dKVxuICAgIC5hZGQoW1xuICAgICAgIWltYWdlVmVyc2lvbiAmJiBnc2FwLnNldChbYmdPZmZlclBhdHRlcm4sIGJnT2ZmZXJQYXR0ZXJuMl0sIHsgb3BhY2l0eTogMCB9KSxcbiAgICAgIGFuaW1hdGVJbk91dChiZ1BhdHRlcm4sICdib3R0b20nLCAnaW4nKSxcbiAgICAgIGFuaW1hdGVTaG93WChsb2dvLCAtMjApLmRlbGF5KDEuNSksXG4gICAgICBnc2FwLnRvKGltYWdlRnJhbWUxLCB7IG9wYWNpdHk6IDEgfSkuZGVsYXkoMS43KSxcbiAgICAgIGFuaW1hdGVTaG93WChoZWFkbGluZVRleHQxLCAtMjApLmRlbGF5KDIpLFxuICAgICAgYW5pbWF0ZVNob3dYKHN1YmhlYWRsaW5lRjEsIC0yMCkuZGVsYXkoMi4yKVxuICAgIF0pXG4gICAgLnRvKFtzdWJoZWFkbGluZUYxLCBoZWFkbGluZVRleHQxXSwgeyBvcGFjaXR5OiAwLCB4OiAyMCwgc3RhZ2dlcjogMC4yLCBkZWxheTogMiB9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUZyYW1lMiAoZG9tRWxlbWVudHMsIGR5bmFtaWNPcHRpb25zKSB7XG4gIGNvbnN0IHsgaGVhZGxpbmUyLCBoZWFkbGluZVRleHQyLCBzdWJoZWFkbGluZUYyLCBpbWFnZUZyYW1lMiB9ID0gZG9tRWxlbWVudHM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY29uc3QgeyBGMl9vdmVyd3JpdGVfZWRnZV9jYXNlIH0gPSBkeW5hbWljT3B0aW9ucztcblxuICByZXR1cm4gZ3NhcC50aW1lbGluZSgpXG4gICAgLmNhbGwoc2V0Q29udGFpbmVyQ2xhc3MsIFt7XG4gICAgICBvdmVyd3JpdGU6IEYyX292ZXJ3cml0ZV9lZGdlX2Nhc2UsXG4gICAgICBzaHJpbmtPcHRpb25zOiB7XG4gICAgICAgIGVsZW1lbnRzOiBbaGVhZGxpbmVUZXh0Miwgc3ViaGVhZGxpbmVGMl0sXG4gICAgICAgIGNvbnRhaW5lcjogaGVhZGxpbmUyLFxuICAgICAgICBwYXJlbnQ6IGFkXG4gICAgICB9XG4gICAgfV0pXG4gICAgLmFkZChbXG4gICAgICBnc2FwLnRvKGltYWdlRnJhbWUyLCB7IG9wYWNpdHk6IDEgfSksXG4gICAgICBhbmltYXRlU2hvd1goaGVhZGxpbmVUZXh0MiwgLTIwKS5kZWxheSgwLjIpLFxuICAgICAgYW5pbWF0ZVNob3dYKHN1YmhlYWRsaW5lRjIsIC0yMCkuZGVsYXkoMC40KVxuICAgIF0pXG4gICAgLnRvKFtzdWJoZWFkbGluZUYyLCBoZWFkbGluZTJdLCB7IG9wYWNpdHk6IDAsIHg6IDIwLCBzdGFnZ2VyOiAwLjIsIGRlbGF5OiAyIH0pO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlRnJhbWUzIChkb21FbGVtZW50cywgZHluYW1pY09wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGhlYWRsaW5lMyxcbiAgICBoZWFkbGluZVRleHQzLFxuICAgIGN0YUNvbnRhaW5lcixcbiAgICBzdWJoZWFkbGluZUYzLFxuICAgIGRpc2NsYWltZXJCdXR0b24sXG4gICAgaW1hZ2VGcmFtZTEsXG4gICAgaW1hZ2VGcmFtZTIsXG4gICAgaW1hZ2VGcmFtZTMsXG4gICAgYmdQYXR0ZXJuLFxuICAgIGJnT2ZmZXJQYXR0ZXJuLFxuICAgIGJnT2ZmZXJQYXR0ZXJuMixcbiAgICBsb2dvXG4gIH0gPSBkb21FbGVtZW50cztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBjb25zdCB7IEYyX292ZXJ3cml0ZV9lZGdlX2Nhc2UsIGltYWdlVmVyc2lvbiB9ID0gZHluYW1pY09wdGlvbnM7XG5cbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKVxuICAgIC5jYWxsKHNldENvbnRhaW5lckNsYXNzLCBbe1xuICAgICAgcmVtb3ZlOiAnbWFpbi1oZWFkbGluZS1mcmFtZS0xJyxcbiAgICAgIGFkZDogJ21haW4taGVhZGxpbmUtZnJhbWUtMycsXG4gICAgICBvdmVyd3JpdGU6IEYyX292ZXJ3cml0ZV9lZGdlX2Nhc2UsXG4gICAgICBzaHJpbmtPcHRpb25zOiB7XG4gICAgICAgIGVsZW1lbnRzOiBbaGVhZGxpbmVUZXh0Mywgc3ViaGVhZGxpbmVGM10sXG4gICAgICAgIGNvbnRhaW5lcjogaGVhZGxpbmUzLFxuICAgICAgICBwYXJlbnQ6IGFkXG4gICAgICB9XG4gICAgfV0pXG4gICAgLmFkZChcbiAgICAgIGltYWdlVmVyc2lvbiAmJiBbXG4gICAgICAgIGdzYXAudG8oW2ltYWdlRnJhbWUxLCBpbWFnZUZyYW1lMl0sIHsgb3BhY2l0eTogMCB9KSxcbiAgICAgICAgZ3NhcC50byhsb2dvLCB7IHRvcDogMTAyIH0pLmRlbGF5KDAuMiksXG4gICAgICAgIGFuaW1hdGVJbk91dChiZ09mZmVyUGF0dGVybiwgJ3RvcCcsICdpbicpLmRlbGF5KDAuMiksXG4gICAgICAgIGFuaW1hdGVJbk91dChiZ09mZmVyUGF0dGVybjIsICdib3R0b20nLCAnaW4nKS5kZWxheSgwLjQpLFxuICAgICAgICBhbmltYXRlSW5PdXQoYmdQYXR0ZXJuLCAnYm90dG9tJywgJ291dCcpLmRlbGF5KDAuNSksXG4gICAgICAgIGFuaW1hdGVTaG93WChpbWFnZUZyYW1lMywgMjApLmRlbGF5KDEuNSlcbiAgICAgIF1cbiAgICApXG4gICAgLmFkZChbXG4gICAgICBhbmltYXRlU2hvd1goaGVhZGxpbmVUZXh0MywgLTIwKSxcbiAgICAgIGFuaW1hdGVTaG93WChzdWJoZWFkbGluZUYzLCAtMjApLmRlbGF5KDAuMiksXG4gICAgICBhbmltYXRlU2hvd1goY3RhQ29udGFpbmVyLCAtMjApLmRlbGF5KDAuNCksXG4gICAgICBnc2FwLnRvKGRpc2NsYWltZXJCdXR0b24sIHsgb3BhY2l0eTogMSB9KS5kZWxheSgxLjUpXG4gICAgXSwgJz4tMC41Jyk7XG59XG5cbmZ1bmN0aW9uIGdldE1haW5UaW1lbGluZSAoZG9tRWxlbWVudHNQYXJhbSwgZHluYW1pY09wdGlvbnMpIHtcbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKVxuICAgIC50byhcbiAgICAgIGFkLFxuICAgICAge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnXG4gICAgICB9LFxuICAgICAgJ2luJ1xuICAgIClcbiAgICAuYWRkKGFuaW1hdGVGcmFtZTEoZG9tRWxlbWVudHNQYXJhbSwgZHluYW1pY09wdGlvbnMpLCAnLT0yJylcbiAgICAuYWRkKGFuaW1hdGVGcmFtZTIoZG9tRWxlbWVudHNQYXJhbSwgZHluYW1pY09wdGlvbnMpKVxuICAgIC5hZGQoYW5pbWF0ZUZyYW1lMyhkb21FbGVtZW50c1BhcmFtLCBkeW5hbWljT3B0aW9ucykpO1xufVxuXG5leHBvcnQgeyBnZXRNYWluVGltZWxpbmUgfTtcbiIsImV4cG9ydCBjb25zdCBJTUFHRV9BU1NFVFMgPSBbXG4gIHsga2V5OiAnYXNzZXRfX2ltYWdlLWZyYW1lLTEnLCB1cmw6ICdpbWFnZXMvaW1hZ2VGcmFtZTFfMzAweDYwMC5wbmcnIH0sXG4gIHsga2V5OiAnYXNzZXRfX2ltYWdlLWZyYW1lLTInLCB1cmw6ICdpbWFnZXMvaW1hZ2VGcmFtZTFfMzAweDYwMC5wbmcnIH0sXG4gIHsga2V5OiAnYXNzZXRfX2ltYWdlLWZyYW1lMycsIHVybDogJ2ltYWdlcy9pbWFnZUZyYW1lM18zMDB4NjAwLnBuZycgfSxcbiAgeyBrZXk6ICdhc3NldF9fYmctcGF0dGVybicsIHVybDogJ2ltYWdlcy9iZ1BhdHRlcm5fMzAweDYwMC5wbmcnIH0sXG4gIHsga2V5OiAnYXNzZXRfX2JnLW9mZmVyLXBhdHRlcm4nLCB1cmw6ICdpbWFnZXMvYmdPZmZlclBhdHRlcm5fMzAweDYwMC5wbmcnIH0sXG4gIHsga2V5OiAnYXNzZXRfX2JnLW9mZmVyLXBhdHRlcm4tMicsIHVybDogJ2ltYWdlcy9iZ09mZmVyUGF0dGVybjJfMzAweDYwMC5wbmcnIH0sXG4gIHsga2V5OiAnYXNzZXRfX2xvZ28nLCB1cmw6ICdpbWFnZXMvbG9nb18zMDB4NjAwLnBuZycgfVxuXTtcblxuZXhwb3J0IGNvbnN0IEZJRUxEUyA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lLTEnLFxuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lMSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lLTInLFxuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lMidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lLTMnLFxuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lMydcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lX190ZXh0LTEnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lVGV4dDEnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5oZWFkbGluZV9fdGV4dC0yJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWVLZXk6ICdoZWFkbGluZVRleHQyJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuaGVhZGxpbmVfX3RleHQtMycsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnaGVhZGxpbmVUZXh0MydcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLnN1YmhlYWRsaW5lX19mMScsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnc3ViaGVhZGxpbmVGMSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLnN1YmhlYWRsaW5lX19mMicsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnc3ViaGVhZGxpbmVGMidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLnN1YmhlYWRsaW5lX19mMycsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnc3ViaGVhZGxpbmVGMydcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmN0YV9fY29udGFpbmVyJyxcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdmFsdWVLZXk6ICdjdGFDb250YWluZXInXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5jdGFfX3RleHQnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB2YWx1ZUtleTogJ2N0YVRleHQnLFxuICAgIGNvbG9yS2V5OiAnY3RhQ29sb3InXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5hc3NldF9fYmctcGF0dGVybicsXG4gICAgdHlwZTogJ2ltYWdlJyxcbiAgICB2YWx1ZUtleTogJ2JnUGF0dGVybidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmFzc2V0X19iZy1vZmZlci1wYXR0ZXJuJyxcbiAgICB0eXBlOiAnaW1hZ2UnLFxuICAgIHZhbHVlS2V5OiAnYmdPZmZlclBhdHRlcm4nXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5hc3NldF9fYmctb2ZmZXItcGF0dGVybi0yJyxcbiAgICB0eXBlOiAnaW1hZ2UnLFxuICAgIHZhbHVlS2V5OiAnYmdPZmZlclBhdHRlcm4yJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuYXNzZXRfX2ltYWdlLWZyYW1lLTEnLFxuICAgIHR5cGU6ICdpbWFnZScsXG4gICAgdmFsdWVLZXk6ICdpbWFnZUZyYW1lMSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmFzc2V0X19pbWFnZS1mcmFtZS0yJyxcbiAgICB0eXBlOiAnaW1hZ2UnLFxuICAgIHZhbHVlS2V5OiAnaW1hZ2VGcmFtZTInXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5hc3NldF9faW1hZ2UtZnJhbWUtMycsXG4gICAgdHlwZTogJ2ltYWdlJyxcbiAgICB2YWx1ZUtleTogJ2ltYWdlRnJhbWUzJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuYXNzZXRfX2JnLXNoYXBlJyxcbiAgICB0eXBlOiAnaW1hZ2UnLFxuICAgIHZhbHVlS2V5OiAnYmdTaGFwZSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmxvZ28nLFxuICAgIHR5cGU6ICdpbWFnZScsXG4gICAgdmFsdWVLZXk6ICdsb2dvJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuZXhpdCcsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnZXhpdCdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmRpc2NsYWltZXJfX2NvbnRhaW5lcicsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnZGlzY2xhaW1lckNvbnRhaW5lcidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmRpc2NsYWltZXJfX2J1dHRvbicsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnZGlzY2xhaW1lckJ1dHRvbidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmRpc2NsYWltZXJfX2Nsb3NlLWJ1dHRvbicsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnZGlzY2xhaW1lckNsb3NlQnV0dG9uJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuZGlzY2xhaW1lcl9fdGV4dCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnZGlzY2xhaW1lckNvbnRlbnQnXG4gIH1cbl07XG4iLCJpbXBvcnQgJ3Byb21pc2UtcG9seWZpbGwvc3JjL3BvbHlmaWxsJztcbmltcG9ydCB7IGluaXRpYWxpemVGVEFwcCB9IGZyb20gJ3NyYy90ZW1wbGF0ZXMvbWFzdGVyVGVtcGxhdGVWMic7XG5pbXBvcnQgeyAkIH0gZnJvbSAnc3JjL2NvcmUvZG9tJztcbmltcG9ydCAnLi9zaGVsbC5zY3NzJztcbmltcG9ydCB7IHN0b3JlTG9jYXRvciB9IGZyb20gJ3NyYy9jb3JlL21vZHVsZXMvc3RvcmUtbG9jYXRvcic7XG5pbXBvcnQgeyBGSUVMRFMsIElNQUdFX0FTU0VUUyB9IGZyb20gJy4vbW9kdWxlcy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBnZXRNYWluVGltZWxpbmUgfSBmcm9tICcuL21vZHVsZXMvYW5pbWF0aW9ucyc7XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gRklFTERTLnJlZHVjZSgoYWNjdW11bGF0b3IsIGVsZW1lbnQpID0+IChcbiAge1xuICAgIC4uLmFjY3VtdWxhdG9yLFxuICAgIFtlbGVtZW50LnZhbHVlS2V5XTogJChlbGVtZW50LnNlbGVjdG9yKVxuICB9KSwge30pO1xuXG5mdW5jdGlvbiBleHRlbmRlZEZ1bmN0aW9uICgpIHtcbiAgaWYgKG15RlQuaW5zdGFudEFkcy5pbWFnZVZlcnNpb24pIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXZlcnNpb24nKTtcbiAgfVxuICBzdG9yZUxvY2F0b3IoKTtcbn1cblxuaW5pdGlhbGl6ZUZUQXBwKHtcbiAgZmllbGRzOiBGSUVMRFMsXG4gIGltYWdlQXNzZXRzOiBJTUFHRV9BU1NFVFMsXG4gIGV4dGVuZGVkRnVuY3Rpb24sXG4gIGdldE1haW5UaW1lbGluZSxcbiAgZG9tRWxlbWVudHMsXG4gIGV4dHJhVmFsdWVzOiB7XG4gICAgYmdTaGFwZTogJ2ltYWdlcy9iZy1zaGFwZS5wbmcnLFxuICAgIGJnUGF0dGVybjogJ2ltYWdlcy9iZ1BhdHRlcm5fMzAweDYwMC5wbmcnLFxuICAgIGJnT2ZmZXJQYXR0ZXJuOiAnaW1hZ2VzL2JnT2ZmZXJQYXR0ZXJuXzMwMHg2MDAucG5nJyxcbiAgICBiZ09mZmVyUGF0dGVybjI6ICdpbWFnZXMvYmdPZmZlclBhdHRlcm4yXzMwMHg2MDAucG5nJ1xuICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7ICQgfSBmcm9tICdzcmMvY29yZS9kb20nO1xuXG5mdW5jdGlvbiBhbmltYXRlU2hhcGVzIChzaGFwZXMsIHJlcGVhdCA9IDEsIHJlcGVhdERlbGF5KSB7XG4gIGNvbnN0IHR3ZWVucyA9IHNoYXBlcy5tYXAoKHsgc2hhcGVTZWxlY3Rvciwgb3JpZ2luLCBjb2xvciB9KSA9PiB7XG4gICAgY29uc3QgYmdTaGFwZSA9ICQoc2hhcGVTZWxlY3Rvcik7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBiZ1NoYXBlLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIHJldHVybiBnc2FwLmZyb21UbyhiZ1NoYXBlLCB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgZWFzZTogJ3Bvd2VyMy5vdXQnLFxuICAgICAgcmVwZWF0LFxuICAgICAgeW95bzogdHJ1ZVxuICAgIH0pLnJlcGVhdERlbGF5KHJlcGVhdERlbGF5KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKS5hZGQodHdlZW5zKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVNob3dZIChlbGVtZW50LCBvcmlnaW4pIHtcbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKS5mcm9tVG8oZWxlbWVudCwge1xuICAgIHk6IG9yaWdpblxuICB9LCB7XG4gICAgeTogMCxcbiAgICBvcGFjaXR5OiAxXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlU2hvd1ggKGVsZW1lbnQsIG9yaWdpbikge1xuICByZXR1cm4gZ3NhcC50aW1lbGluZSgpLmZyb21UbyhlbGVtZW50LCB7XG4gICAgeDogb3JpZ2luLFxuICAgIG9wYWNpdHk6IDBcbiAgfSwge1xuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUluT3V0IChlbGVtZW50LCBkaXJlY3Rpb25LZXksIGFuaW1hdGlvbk9yaWdpbikge1xuICBjb25zdCB0cmFuc2l0aW9uU2V0dXAgPSB7XG4gICAgdG9wOiB7XG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeVBlcmNlbnQ6IC0xMDBcbiAgICAgIH0sXG4gICAgICBzY2FsZToge1xuICAgICAgICBzY2FsZVk6IDAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCdcbiAgICAgIH1cbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeFBlcmNlbnQ6IDEwMFxuICAgICAgfSxcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHNjYWxlWDogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAncmlnaHQnXG4gICAgICB9XG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeFBlcmNlbnQ6IC0xMDBcbiAgICAgIH0sXG4gICAgICBzY2FsZToge1xuICAgICAgICBzY2FsZVg6IDAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnXG4gICAgICB9XG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICB5UGVyY2VudDogMTAwXG4gICAgICB9LFxuICAgICAgc2NhbGU6IHtcbiAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20nXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlLCBzY2FsZSB9ID0gdHJhbnNpdGlvblNldHVwW2RpcmVjdGlvbktleV07XG4gIGNvbnN0IGFuaW1hdGlvbiA9IHtcbiAgICBpbjogKCkgPT4gZ3NhcC50aW1lbGluZSgpXG4gICAgICAuZnJvbShlbGVtZW50LCAyLCB7IC4uLnRyYW5zbGF0ZSwgb3BhY2l0eTogMCwgZWFzZTogJ2V4cG8uaW5PdXQnIH0pXG4gICAgICAuYWRkKGdzYXAuZnJvbShlbGVtZW50LCAxLCB7IC4uLnNjYWxlLCBlYXNlOiAnZXhwby5vdXQnIH0pLCAnLT0xJyksXG4gICAgb3V0OiAoKSA9PiBnc2FwLnRpbWVsaW5lKCkudG8oZWxlbWVudCwgMSwgeyAuLi50cmFuc2xhdGUsIG9wYWNpdHk6IDAsIGVhc2U6ICdleHBvLmluJyB9KVxuICAgICAgLmFkZChnc2FwLnRvKGVsZW1lbnQsIDAuOCwgeyAuLi5zY2FsZSwgZWFzZTogJ2V4cG8uaW4nIH0pLCAnLT0xJylcbiAgfTtcblxuICByZXR1cm4gYW5pbWF0aW9uW2FuaW1hdGlvbk9yaWdpbl0oKTtcbn07XG5cbmV4cG9ydCB7IGFuaW1hdGVTaGFwZXMsIGFuaW1hdGVTaG93WSwgYW5pbWF0ZVNob3dYLCBhbmltYXRlSW5PdXQgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uJztcbiIsIi8qKlxuICogRmluZHMgYW4gSFRNTEVsZW1lbnQgYnkgQ1NTIHNlbGVjdG9yIGluIHRoZSBkb2N1bWVudCBvciBpbnNpZGVcbiAqIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvciAtIENTUyBzZWxlY3Rvci5cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBbbm9kZT1kb2N1bWVudF1cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiAkIChzZWxlY3Rvciwgbm9kZSA9IGRvY3VtZW50KSB7XG4gIHJldHVybiBub2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG4vKipcbiAqIEZpbmRzIGEgbGlzdCBvZiBIVE1MRWxlbWVudHMgYnkgQ1NTIHNlbGVjdG9yIGluIHRoZSBkb2N1bWVudCBvciBpbnNpZGVcbiAqIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvciAtIENTUyBzZWxlY3Rvci5cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBbbm9kZT1kb2N1bWVudF1cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50W119XG4gKi9cbmZ1bmN0aW9uICQkIChzZWxlY3Rvciwgbm9kZSA9IGRvY3VtZW50KSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuXG5leHBvcnQgeyAkLCAkJCB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9kb20nO1xuIiwiaW1wb3J0IHsgJCwgJCQgfSBmcm9tICdzcmMvY29yZS9kb20nO1xuXG5jb25zdCBhZCA9ICQoJy5hZCcpO1xuY29uc3QgaGVhZGxpbmVzID0gJCQoJy5oZWFkbGluZScpO1xuY29uc3QgbWFpbkhlYWRsaW5lID0gJCgnLm1haW4taGVhZGxpbmUnKTtcbmNvbnN0IGhvdmVySGVhZGxpbmUgPSAkKCcuaG92ZXItaGVhZGxpbmUnKTtcbmNvbnN0IG1haW5DVEEgPSAkKCcubWFpbi1jdGEnKTtcbmNvbnN0IGRpc2NsYWltZXIgPSAkKCcuZGlzY2xhaW1lci1jb250YWluZXInKTtcbmNvbnN0IGRpc2NsYWltZXJDbG9zZSA9ICQoJy5kaXNjbGFpbWVyX19idXR0b24tY2xvc2UnKTtcblxuZXhwb3J0IHsgYWQsIGhlYWRsaW5lcywgbWFpbkhlYWRsaW5lLCBob3ZlckhlYWRsaW5lLCBtYWluQ1RBLCBkaXNjbGFpbWVyLCBkaXNjbGFpbWVyQ2xvc2UgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMnO1xuIiwiaW1wb3J0IHsgJCQgfSBmcm9tICdzcmMvY29yZS9kb20nO1xuXG5jb25zdCBERUZBVUxUX0ZFRURfUEFUSCA9ICdmZWVkcy91c2NlbGx1bGFyL0ZCSS00NDY0L3N0b3Jlcy8nO1xuY29uc3QgUkVQTEFDRV9RVUVSWSA9ICdbcGxhY2VdJztcbmNvbnN0IEZBTExCQUNLX1FVRVJZID0gJ3lvdXIgdG93bic7XG5cbmZ1bmN0aW9uIHN0b3JlTG9jYXRvciAoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBsb2NhdG9yUGF0aCA9IG15RlQuaW5zdGFudEFkcy5mZWVkUGF0aCB8fCBERUZBVUxUX0ZFRURfUEFUSDtcbiAgICBteUZULnJlcXVpcmUoWydzdG9yZWxvY2F0b3InXSwgKFN0b3JlTG9jYXRvcikgPT4ge1xuICAgICAgY29uc3Qgc2wgPSBuZXcgU3RvcmVMb2NhdG9yKHtcbiAgICAgICAgbG9jYXRvclBhdGgsIC8vIGZlZWQgcGF0aCBkeW5hbWljIHZhcmlhYmxlIG5hbWVkIGZlZWRQYXRoIHdpdGggYmFja3VwXG4gICAgICAgIG51bWJlclRvUmV0dXJuOiAxLCAvLyBvcHRpb25hbFxuICAgICAgICBtYXhEaXN0YW5jZU1pbGVzOiA4ODAsIC8vIG9wdGlvbmFsLS1hZGp1c3QgdG8gbWF4IGRpc3RhbmNlIHRoZSBzdG9yZWxvY2F0b3Igd2lsbCByZXR1cm4gcmVzdWx0cyBmb3IuIElmIG5vIHJlc3VsdHMgcmV0dXJuZWQvbm8gbG9jYXRpb24gd2l0aGluIG1heERpc3RhbmNlTWlsZXMsIHRoZW4gdGhlIHN0b3JlbG9jYXRvciAnZXJyb3InIGhhbmRsZXIgd2lsbCB0cmlnZ2VyIChiZWxvdylcbiAgICAgICAgbG9jYXRpb25PcmRlcjogWydpbXByZXNzaW9uJ10gLy8gb3B0aW9uYWxcbiAgICAgIH0pO1xuICAgICAgc2wub24oJ3N0b3Jlc2ZvdW5kJywgKFtzdG9yZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTWF4Q2hhcmFjdGVyID0gc3RvcmVzLmNpdHluYW1lLmxlbmd0aCA8PSAxMztcbiAgICAgICAgZmluZE11dGFibGVIZWFkaW5ncygpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSByZXBsYWNlSGVhZGluZ1ZhbHVlKGVsZW1lbnQsIGlzTWF4Q2hhcmFjdGVyID8gc3RvcmVzLmNpdHluYW1lIDogRkFMTEJBQ0tfUVVFUlkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5pbmZvKCdTdG9yZSBWYWx1ZSBSZXR1cm5lZDogJywgc3RvcmVzKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgICBzbC5vbignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIGZpbmRNdXRhYmxlSGVhZGluZ3MoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVwbGFjZUhlYWRpbmdWYWx1ZShlbGVtZW50LCBGQUxMQkFDS19RVUVSWSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICAgIHNsLmluaXQoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIZWFkaW5nVmFsdWUgKGVsZW1lbnQsIHN0b3JlTG9jYXRvclZhbHVlKSB7XG4gIHJldHVybiBlbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKFJFUExBQ0VfUVVFUlksIHN0b3JlTG9jYXRvclZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZmluZE11dGFibGVIZWFkaW5ncyAoKSB7XG4gIGNvbnN0IGhlYWRpbmdzID0gJCQoJy5oZWFkbGluZV9fdGV4dCcpO1xuICBjb25zdCBpbmNsdWRlc1BsYWNlcyA9IChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dC5pbmRleE9mKCdbcGxhY2VdJykgPiAtMTtcbiAgcmV0dXJuIGhlYWRpbmdzLmZpbHRlcihpbmNsdWRlc1BsYWNlcyk7XG59XG5cbmV4cG9ydCB7IHN0b3JlTG9jYXRvciB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi91dGxpcyc7XG4iLCJpbXBvcnQgeyBhZCwgbWFpbkhlYWRsaW5lIH0gZnJvbSAnLi4vZWxlbWVudHMnO1xuXG5jb25zdCBzaHJpbmtDbGFzc2VzID0gWydhZC0tc2hyaW5rLW1lZGl1bScsICdhZC0tc2hyaW5rLXNtYWxsJywgJ2FkLS1zaHJpbmstZXh0cmEtc21hbGwnXTtcblxuLyoqXG4gKiBMb29wIHRvIGZpbmQgZWRnZSBjYXNlIGNsYXNzIHVudGlsIGNvbnRlbnQgZG9lcyBub3Qgb3ZlcmZsb3cgb3IgaXQgZ2V0cyB0aGUgc21hbGxlc3QgY2xhc3NcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD59IGVsZW1lbnRzIFRoZSBlbG1lbnQgb3IgZWxtZW50cyB0byBnZXQgdGhlIHRvdGFsIGhlaWdodCBhbmQgd2lkdGhcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBwYXJlbnQgVGhlIGVsZW1lbnQgdG8gYWRkIHRoZSBmaW5hbCBjbGFzc1xuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciBUaGUgZWxlbWVudCB0byBjaGVjayBpZiBpdHMgY2hpbGRyZW4gb3ZlcmZsb3cgaXRcbiAqL1xuXG5mdW5jdGlvbiBzZXRTaHJpbmtDbGFzcyAoZWxlbWVudHMsIHBhcmVudCA9IGFkLCBjb250YWluZXIgPSBtYWluSGVhZGxpbmUpIHtcbiAgLy8gSXQgaGFzIHRvIGJlIHRoaXMgd2F5IGJlY2F1c2UgSUUgZG9lcyBub3Qgc3VwcG9ydCByZW1vdmUoLi5bXSkgaXQgYXBwZWFyIHRvIGJlIGEgcG9seWZpbGwgaXNzdWVcbiAgc2hyaW5rQ2xhc3Nlcy5mb3JFYWNoKHN0cmluZ0NsYXNzID0+IHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKHN0cmluZ0NsYXNzKSk7XG4gIGxldCBzaHJpbmtQaGFzZSA9IDA7XG5cbiAgZnVuY3Rpb24gY2FsY1NocmluayAoKSB7XG4gICAgLy8gR2V0IHRoZSB0b3RhbCBoZWlnaHQgb2YgY2hpbGRyZW4gZWxlbWVudHMuXG4gICAgY29uc3QgZWxlbWVudHNIZWlnaHQgPSBlbGVtZW50cy5yZWR1Y2U/LigodG90YWxIZWlnaHQsIGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiB0b3RhbEhlaWdodCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0sIDApIHx8IGVsZW1lbnRzLm9mZnNldEhlaWdodDtcblxuICAgIC8vIEdldCB0aGUgd2lkZXIgZWxlbWVudCB2YWx1ZVxuICAgIGNvbnN0IGVsZW1lbnRzV2lkdGggPSBNYXRoLm1heCguLi4oZWxlbWVudHMubWFwPy4oKHsgb2Zmc2V0V2lkdGggfSkgPT4ge1xuICAgICAgcmV0dXJuIG9mZnNldFdpZHRoO1xuICAgIH0pIHx8IFtlbGVtZW50cy5vZmZzZXRXaWR0aF0pKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGNoaWxkcmVuIHNpemVzIG92ZXJmbG93cyBjb250YWluZXIgYW5kIGFwcGx5XG4gICAgICogVGhlIHByb2Nlc3MgaXMgcmVwZWF0ZSB0aGUgcHJvY2Nlc3MgdW50aWwgY2hpbGRyZW5kIGRvbnQgb3ZlcmZsb3cgb3IgdGhlIGxhc3QgY2xhc3MgaXMgYXBwbGllZFxuICAgICAqL1xuICAgIGlmIChjb250YWluZXIub2Zmc2V0SGVpZ2h0IDwgZWxlbWVudHNIZWlnaHQgfHwgY29udGFpbmVyLm9mZnNldFdpZHRoIDwgZWxlbWVudHNXaWR0aCkge1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoc2hyaW5rQ2xhc3Nlc1tzaHJpbmtQaGFzZV0pO1xuICAgICAgc2hyaW5rUGhhc2UgKz0gMTtcbiAgICAgIGlmIChzaHJpbmtQaGFzZSA8IHNocmlua0NsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIGNhbGNTaHJpbmsoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FsY1NocmluaygpO1xufVxuXG5mdW5jdGlvbiBzZXRDb250YWluZXJDbGFzcyAoeyByZW1vdmUsIGFkZCwgc2hyaW5rT3B0aW9ucywgb3ZlcndyaXRlIH0pIHtcbiAgY29uc3QgWyBtZWRpdW0sIHNtYWxsLCBleHRyYVNtYWxsIF0gPSBzaHJpbmtDbGFzc2VzO1xuICBjb25zdCB7IGVsZW1lbnRzLCBwYXJlbnQsIGNvbnRhaW5lciB9ID0gc2hyaW5rT3B0aW9ucztcbiAgY29uc3Qgb3ZlcndyaXRlT3B0aW9ucyA9IHtcbiAgICAnTCc6ICdkZWZhdWx0JyxcbiAgICAnTSc6IG1lZGl1bSxcbiAgICAnUyc6IHNtYWxsLFxuICAgICdYUyc6IGV4dHJhU21hbGxcbiAgfTtcbiAgY29uc3Qgb3ZlcndyaXRlQ2xhc3MgPSBvdmVyd3JpdGVPcHRpb25zW292ZXJ3cml0ZV07XG4gIGlmIChyZW1vdmUpIG1haW5IZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKHJlbW92ZSk7XG4gIGlmIChhZGQpIG1haW5IZWFkbGluZS5jbGFzc0xpc3QuYWRkKGFkZCk7XG4gIGlmIChvdmVyd3JpdGVDbGFzcykge1xuICAgIHNocmlua0NsYXNzZXMuZm9yRWFjaChzdHJpbmdDbGFzcyA9PiBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShzdHJpbmdDbGFzcykpO1xuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKG92ZXJ3cml0ZUNsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRTaHJpbmtDbGFzcyhlbGVtZW50cywgcGFyZW50LCBjb250YWluZXIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHNldFNocmlua0NsYXNzLCBzaHJpbmtDbGFzc2VzLCBzZXRDb250YWluZXJDbGFzcyB9O1xuIiwiaW1wb3J0IHsgc2V0dXBBZCB9IGZyb20gJ0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtYWQvbGliL3ZhbmlsbGEnO1xuaW1wb3J0IHsgb25DaGFuZ2VUYWJFdmVudCB9IGZyb20gJ0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NoYW5nZVRhYkV2ZW50JztcblxuZnVuY3Rpb24gc2V0RHluYW1pY1ZhbHVlcyAoZmllbGRzLCB2YWx1ZXMsIGRvbUVsZW1lbnRzKSB7XG4gIGZpZWxkcy5mb3JFYWNoKCh7IHR5cGUsIHZhbHVlS2V5LCBhbHRUZXh0LCBjb2xvcktleSB9KSA9PiB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRzW3ZhbHVlS2V5XTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBkb21FbGVtZW50LmlubmVySFRNTCA9IHZhbHVlc1t2YWx1ZUtleV0gfHwgJyc7XG4gICAgICAgIGlmIChjb2xvcktleSkge1xuICAgICAgICAgIGRvbUVsZW1lbnQuc3R5bGUuY29sb3IgPSB2YWx1ZXNbY29sb3JLZXldO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICBkb21FbGVtZW50LnNyYyA9IHZhbHVlc1t2YWx1ZUtleV07XG4gICAgICAgIGlmIChteUZULmluc3RhbnRBZHNbYCR7dmFsdWVLZXl9QWx0VGV4dGBdKSBkb21FbGVtZW50LmFsdCA9IG15RlQuaW5zdGFudEFkc1tgJHt2YWx1ZUtleX1BbHRUZXh0YF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzY2xhaW1lciAob3BlbiwgZG9tRWxlbWVudHMpIHtcbiAgaWYgKG9wZW4pIHtcbiAgICBkb21FbGVtZW50cy5kaXNjbGFpbWVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNjbGFpbWVyX19jb250YWluZXItLW9wZW4nKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb21FbGVtZW50cy5kaXNjbGFpbWVyQ2xvc2VCdXR0b24uZm9jdXMoKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSwgMjAwKTtcbiAgfSBlbHNlIHtcbiAgICBkb21FbGVtZW50cy5kaXNjbGFpbWVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2NsYWltZXJfX2NvbnRhaW5lci0tb3BlbicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9tRWxlbWVudHMuZXhpdC5mb2N1cygpO1xuICAgIH0sIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBFdmVudHMgKGFwcGx5Q2xpY2tUYWdzLCB2YWx1ZXMsIGdldE1haW5UaW1lbGluZSwgZG9tRWxlbWVudHMpIHtcbiAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZURpc2NsYWltZXIodHJ1ZSwgZG9tRWxlbWVudHMpKTtcbiAgZG9tRWxlbWVudHMubG9nby5mb2N1cygpO1xuICBkb21FbGVtZW50cy5kaXNjbGFpbWVyQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVEaXNjbGFpbWVyKGZhbHNlLCBkb21FbGVtZW50cykpO1xuICBhcHBseUNsaWNrVGFncyhkb21FbGVtZW50cyk7XG5cbiAgb25DaGFuZ2VUYWJFdmVudCh2aXNpYmlsaXR5ID0+IHtcbiAgICBjb25zdCB7IHRpbWVsaW5lIH0gPSB3aW5kb3cuYWQ7XG5cbiAgICBpZiAodmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIC8vIElmIHRhYiBpcyBoaWRkZW4gd2hlbiB0aGUgYWQgd2FzIGluIHRoZSBtaWRkbGUgb2Ygc2hvd2luZyxcbiAgICAgIC8vIGdvIHRvIHRoZSBlbmQgb2YgdGhlIGFuaW1hdGlvbi5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIHRpbWVsaW5lPy5wcm9ncmVzcygxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGFiIGlzIHZpc2libGUgYW5kIGFuaW1hdGlvbiBub3QgY3JlYXRlZCwgY3JlYXRlIGl0LlxuICAgICAgaWYgKCF0aW1lbGluZSkge1xuICAgICAgICB3aW5kb3cuYWQudGltZWxpbmUgPSBnZXRNYWluVGltZWxpbmUoZG9tRWxlbWVudHMsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRlRDbGlja1RhZ3MgKGRvbUVsZW1lbnRzKSB7XG4gIG15RlQuYXBwbHlDbGlja1RhZyhkb21FbGVtZW50cy5leGl0LCAxLCBteUZULmluc3RhbnRBZHMuYmdVUkwpO1xuICBteUZULmFwcGx5Q2xpY2tUYWcoZG9tRWxlbWVudHM/LmN0YSwgMiwgbXlGVC5pbnN0YW50QWRzLmN0YVVSTCk7XG59XG5cbmZ1bmN0aW9uIGFkZENsaWNrVGFncyAoZG9tRWxlbWVudHMpIHtcbiAgZG9tRWxlbWVudHMuZXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5vcGVuKHdpbmRvdy5jbGlja1RhZzEpKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICBkb21FbGVtZW50cz8uY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gd2luZG93Lm9wZW4od2luZG93LmNsaWNrVGFnMikpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRlRBcHAgKHsgZmllbGRzLCBleHRlbmRlZEZ1bmN0aW9uLCBleHRyYVZhbHVlcywgZ2V0TWFpblRpbWVsaW5lLCBpbWFnZUFzc2V0cywgZG9tRWxlbWVudHMgfSkge1xuICBteUZULm9uKCdpbnN0YW50YWRzJywgKCkgPT4ge1xuICAgIHNldHVwQWQoe1xuICAgICAgcG9saXRlUmVzb3VyY2VzOiBbe1xuICAgICAgICBpbWFnZXM6IGltYWdlQXNzZXRzLm1hcCgoeyB1cmwgfSkgPT4gdXJsKVxuICAgICAgfV0sXG4gICAgICBvbkNvbXBsZXRlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHsgLi4ubXlGVC5pbnN0YW50QWRzLCAuLi5leHRyYVZhbHVlcyB9O1xuICAgICAgICB3aW5kb3cuYWQgPSB7fTtcbiAgICAgICAgc2V0RHluYW1pY1ZhbHVlcyhmaWVsZHMsIHZhbHVlcywgZG9tRWxlbWVudHMpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIGF3YWl0IGV4dGVuZGVkRnVuY3Rpb24/LigpO1xuICAgICAgICBzZXR1cEV2ZW50cyhhZGRGVENsaWNrVGFncywgdmFsdWVzLCBnZXRNYWluVGltZWxpbmUsIGRvbUVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVBcHAgKHsgZmllbGRzLCBleHRlbmRlZEZ1bmN0aW9uLCB2YWx1ZXMsIGltYWdlQXNzZXRzLCBnZXRNYWluVGltZWxpbmUsIGRvbUVsZW1lbnRzIH0pIHtcbiAgc2V0dXBBZCh7XG4gICAgcG9saXRlUmVzb3VyY2VzOiBbe1xuICAgICAgaW1hZ2VzOiBpbWFnZUFzc2V0cy5tYXAoKHsgdXJsIH0pID0+IHVybClcbiAgICB9XSxcbiAgICBvbkNvbXBsZXRlOiBhc3luYyAoKSA9PiB7XG4gICAgICB3aW5kb3cuYWQgPSB7fTtcbiAgICAgIHNldER5bmFtaWNWYWx1ZXMoZmllbGRzLCB2YWx1ZXMsIGRvbUVsZW1lbnRzKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIGF3YWl0IGV4dGVuZGVkRnVuY3Rpb24/LigpO1xuICAgICAgc2V0dXBFdmVudHMoYWRkQ2xpY2tUYWdzLCB2YWx1ZXMsIGdldE1haW5UaW1lbGluZSwgZG9tRWxlbWVudHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVBcHAsIGluaXRpYWxpemVGVEFwcCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==