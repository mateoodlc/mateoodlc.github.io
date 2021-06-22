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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/campaigns/tentativeName/320x50/shell.js");
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

/***/ "./src/campaigns/tentativeName/320x50/modules/animations.js":
/*!******************************************************************!*\
  !*** ./src/campaigns/tentativeName/320x50/modules/animations.js ***!
  \******************************************************************/
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
      bgPattern = domElements.bgPattern,
      disclaimerButton = domElements.disclaimerButton,
      ctaText = domElements.ctaText; // eslint-disable-next-line camelcase

  var F1_overwrite_edge_case = dynamicOptions.F1_overwrite_edge_case;
  console.log(headline1);
  return gsap.timeline().call(_utils.setContainerClass, [{
    overwrite: F1_overwrite_edge_case,
    shrinkOptions: {
      elements: [headlineText1, subheadlineF1],
      container: headline1,
      parent: _elements.ad
    }
  }]).add([(0, _animation.animateInOut)(bgPattern, 'left', 'in'), (0, _animation.animateShowX)(logo, -20).delay(1.5), (0, _animation.animateShowX)(headlineText1, -20).delay(1.7), gsap.to(subheadlineF1, 0.5, {
    opacity: 1
  }).delay(2.1), gsap.to(ctaText, 0.5, {
    opacity: 1
  }).delay(2.2), gsap.to(disclaimerButton, 0.5, {
    opacity: 1
  }).delay(2.2)]).to([subheadlineF1, headlineText1], {
    opacity: 0,
    x: 20,
    stagger: 0.2,
    delay: 2
  });
}

function animateFrame2(domElements, dynamicOptions) {
  var headline2 = domElements.headline2,
      headlineText2 = domElements.headlineText2,
      subheadlineF2 = domElements.subheadlineF2; // eslint-disable-next-line camelcase

  var F2_overwrite_edge_case = dynamicOptions.F2_overwrite_edge_case;
  return gsap.timeline().call(_utils.setContainerClass, [{
    overwrite: F2_overwrite_edge_case,
    shrinkOptions: {
      elements: [headlineText2, subheadlineF2],
      container: headline2,
      parent: _elements.ad
    }
  }]).add([(0, _animation.animateShowX)(headlineText2, -20), gsap.to(subheadlineF2, 0.5, {
    opacity: 1
  }).delay(0.3)]).to([headline2], {
    opacity: 0,
    x: 20,
    stagger: 0.2,
    delay: 2
  });
}

function animateFrame3(domElements, dynamicOptions) {
  var headline3 = domElements.headline3,
      headlineText3 = domElements.headlineText3,
      subheadlineF3 = domElements.subheadlineF3; // eslint-disable-next-line camelcase

  var F2_overwrite_edge_case = dynamicOptions.F2_overwrite_edge_case;
  return gsap.timeline().call(_utils.setContainerClass, [{
    remove: 'main-headline-frame-1',
    add: 'main-headline-frame-3',
    overwrite: F2_overwrite_edge_case,
    shrinkOptions: {
      elements: [headlineText3, subheadlineF3],
      container: headline3,
      parent: _elements.ad
    }
  }]).add([(0, _animation.animateShowX)(headlineText3, -20), gsap.to(subheadlineF3, 0.5, {
    opacity: 1
  }).delay(0.3)]);
}

function getMainTimeline(domElementsParam, dynamicOptions) {
  return gsap.timeline().to(_elements.ad, {
    duration: 1,
    opacity: 1,
    ease: 'power4.out'
  }, 'in').add(animateFrame1(domElementsParam, dynamicOptions)).add(animateFrame2(domElementsParam, dynamicOptions)).add(animateFrame3(domElementsParam, dynamicOptions));
}

/***/ }),

/***/ "./src/campaigns/tentativeName/320x50/modules/settings.js":
/*!****************************************************************!*\
  !*** ./src/campaigns/tentativeName/320x50/modules/settings.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIELDS = exports.IMAGE_ASSETS = void 0;
var IMAGE_ASSETS = [{
  key: 'asset__bg-pattern',
  url: 'images/bgPattern_320x50.png'
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
  selector: '.cta__text',
  type: 'text',
  valueKey: 'ctaText',
  colorKey: 'ctaColor'
}, {
  selector: '.asset__bg-pattern',
  type: 'image',
  valueKey: 'bgPattern'
}, {
  selector: '.logo',
  type: 'element',
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

/***/ "./src/campaigns/tentativeName/320x50/shell.js":
/*!*****************************************************!*\
  !*** ./src/campaigns/tentativeName/320x50/shell.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

__webpack_require__(/*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");

var _masterTemplateV = __webpack_require__(/*! src/templates/masterTemplateV2 */ "./src/templates/masterTemplateV2/index.js");

var _dom = __webpack_require__(/*! src/core/dom */ "./src/core/dom/index.js");

__webpack_require__(/*! ./shell.scss */ "./src/campaigns/tentativeName/320x50/shell.scss");

var _storeLocator = __webpack_require__(/*! src/core/modules/store-locator */ "./src/core/modules/store-locator.js");

var _settings = __webpack_require__(/*! ./modules/settings */ "./src/campaigns/tentativeName/320x50/modules/settings.js");

var _animations = __webpack_require__(/*! ./modules/animations */ "./src/campaigns/tentativeName/320x50/modules/animations.js");

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
    bgPattern: 'images/bgPattern_320x50.png'
  }
});

/***/ }),

/***/ "./src/campaigns/tentativeName/320x50/shell.scss":
/*!*******************************************************!*\
  !*** ./src/campaigns/tentativeName/320x50/shell.scss ***!
  \*******************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy1hZC9saWIvdmFuaWxsYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy1hZC9saWIvdmFuaWxsYS9tYWtlU2V0dXBBZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvY2hhbmdlVGFiRXZlbnQvY2hhbmdlVGFiRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NoYW5nZVRhYkV2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9jcmVhdGVMb2dnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NyZWF0ZUxvZ2dlci9tYWtlQ3JlYXRlTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9sb2FkUmVzb3VyY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9sb2FkUmVzb3VyY2VzL2xvYWRSZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2xvYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2xvYWRpbmcvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvcHJvbWlzZVNlcmlhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvcHJvbWlzZVNlcmlhbC9wcm9taXNlU2VyaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh1Z2VtZGUvYWRtaXJlLWRldi10b29scy10b29scy9saWIvdHlwZXMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvYWxsU2V0dGxlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzIweDUwL21vZHVsZXMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzIweDUwL21vZHVsZXMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbXBhaWducy90ZW50YXRpdmVOYW1lLzMyMHg1MC9zaGVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzIweDUwL3NoZWxsLnNjc3M/MGQzNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hbmltYXRpb24vYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FuaW1hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kb20vZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9lbGVtZW50cy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9lbGVtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tb2R1bGVzL3N0b3JlLWxvY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbHMvdXRsaXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9tYXN0ZXJUZW1wbGF0ZVYyL2luZGV4LmpzIl0sIm5hbWVzIjpbImFuaW1hdGVGcmFtZTEiLCJkb21FbGVtZW50cyIsImR5bmFtaWNPcHRpb25zIiwiaGVhZGxpbmUxIiwiaGVhZGxpbmVUZXh0MSIsInN1YmhlYWRsaW5lRjEiLCJsb2dvIiwiYmdQYXR0ZXJuIiwiZGlzY2xhaW1lckJ1dHRvbiIsImN0YVRleHQiLCJGMV9vdmVyd3JpdGVfZWRnZV9jYXNlIiwiY29uc29sZSIsImxvZyIsImdzYXAiLCJ0aW1lbGluZSIsImNhbGwiLCJzZXRDb250YWluZXJDbGFzcyIsIm92ZXJ3cml0ZSIsInNocmlua09wdGlvbnMiLCJlbGVtZW50cyIsImNvbnRhaW5lciIsInBhcmVudCIsImFkIiwiYWRkIiwiZGVsYXkiLCJ0byIsIm9wYWNpdHkiLCJ4Iiwic3RhZ2dlciIsImFuaW1hdGVGcmFtZTIiLCJoZWFkbGluZTIiLCJoZWFkbGluZVRleHQyIiwic3ViaGVhZGxpbmVGMiIsIkYyX292ZXJ3cml0ZV9lZGdlX2Nhc2UiLCJhbmltYXRlRnJhbWUzIiwiaGVhZGxpbmUzIiwiaGVhZGxpbmVUZXh0MyIsInN1YmhlYWRsaW5lRjMiLCJyZW1vdmUiLCJnZXRNYWluVGltZWxpbmUiLCJkb21FbGVtZW50c1BhcmFtIiwiZHVyYXRpb24iLCJlYXNlIiwiSU1BR0VfQVNTRVRTIiwia2V5IiwidXJsIiwiRklFTERTIiwic2VsZWN0b3IiLCJ0eXBlIiwidmFsdWVLZXkiLCJjb2xvcktleSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiZWxlbWVudCIsImV4dGVuZGVkRnVuY3Rpb24iLCJteUZUIiwiaW5zdGFudEFkcyIsImltYWdlVmVyc2lvbiIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImZpZWxkcyIsImltYWdlQXNzZXRzIiwiZXh0cmFWYWx1ZXMiLCJhbmltYXRlU2hhcGVzIiwic2hhcGVzIiwicmVwZWF0IiwicmVwZWF0RGVsYXkiLCJ0d2VlbnMiLCJtYXAiLCJzaGFwZVNlbGVjdG9yIiwib3JpZ2luIiwiY29sb3IiLCJiZ1NoYXBlIiwic3R5bGUiLCJmcm9tVG8iLCJzY2FsZSIsInRyYW5zZm9ybU9yaWdpbiIsInlveW8iLCJhbmltYXRlU2hvd1kiLCJ5IiwiYW5pbWF0ZVNob3dYIiwiYW5pbWF0ZUluT3V0IiwiZGlyZWN0aW9uS2V5IiwiYW5pbWF0aW9uT3JpZ2luIiwidHJhbnNpdGlvblNldHVwIiwidG9wIiwidHJhbnNsYXRlIiwieVBlcmNlbnQiLCJzY2FsZVkiLCJyaWdodCIsInhQZXJjZW50Iiwic2NhbGVYIiwibGVmdCIsImJvdHRvbSIsImFuaW1hdGlvbiIsImluIiwiZnJvbSIsIm91dCIsIiQiLCJub2RlIiwicXVlcnlTZWxlY3RvciIsIiQkIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVhZGxpbmVzIiwibWFpbkhlYWRsaW5lIiwiaG92ZXJIZWFkbGluZSIsIm1haW5DVEEiLCJkaXNjbGFpbWVyIiwiZGlzY2xhaW1lckNsb3NlIiwiREVGQVVMVF9GRUVEX1BBVEgiLCJSRVBMQUNFX1FVRVJZIiwiRkFMTEJBQ0tfUVVFUlkiLCJzdG9yZUxvY2F0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsImxvY2F0b3JQYXRoIiwiZmVlZFBhdGgiLCJyZXF1aXJlIiwiU3RvcmVMb2NhdG9yIiwic2wiLCJudW1iZXJUb1JldHVybiIsIm1heERpc3RhbmNlTWlsZXMiLCJsb2NhdGlvbk9yZGVyIiwib24iLCJzdG9yZXMiLCJpc01heENoYXJhY3RlciIsImNpdHluYW1lIiwibGVuZ3RoIiwiZmluZE11dGFibGVIZWFkaW5ncyIsImZvckVhY2giLCJpbm5lckhUTUwiLCJyZXBsYWNlSGVhZGluZ1ZhbHVlIiwiaW5mbyIsImluaXQiLCJzdG9yZUxvY2F0b3JWYWx1ZSIsInJlcGxhY2UiLCJoZWFkaW5ncyIsImluY2x1ZGVzUGxhY2VzIiwiaW5uZXJUZXh0IiwiaW5kZXhPZiIsImZpbHRlciIsInNocmlua0NsYXNzZXMiLCJzZXRTaHJpbmtDbGFzcyIsInN0cmluZ0NsYXNzIiwic2hyaW5rUGhhc2UiLCJjYWxjU2hyaW5rIiwiZWxlbWVudHNIZWlnaHQiLCJ0b3RhbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRzV2lkdGgiLCJNYXRoIiwibWF4Iiwib2Zmc2V0V2lkdGgiLCJtZWRpdW0iLCJzbWFsbCIsImV4dHJhU21hbGwiLCJvdmVyd3JpdGVPcHRpb25zIiwib3ZlcndyaXRlQ2xhc3MiLCJzZXREeW5hbWljVmFsdWVzIiwidmFsdWVzIiwiYWx0VGV4dCIsImRvbUVsZW1lbnQiLCJzcmMiLCJhbHQiLCJ0b2dnbGVEaXNjbGFpbWVyIiwib3BlbiIsImRpc2NsYWltZXJDb250YWluZXIiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsImRpc2NsYWltZXJDbG9zZUJ1dHRvbiIsImZvY3VzIiwiZXhpdCIsInNldHVwRXZlbnRzIiwiYXBwbHlDbGlja1RhZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwidmlzaWJpbGl0eSIsIndpbmRvdyIsInByb2dyZXNzIiwiYWRkRlRDbGlja1RhZ3MiLCJhcHBseUNsaWNrVGFnIiwiYmdVUkwiLCJjdGEiLCJjdGFVUkwiLCJhZGRDbGlja1RhZ3MiLCJjbGlja1RhZzEiLCJjbGlja1RhZzIiLCJpbml0aWFsaXplRlRBcHAiLCJwb2xpdGVSZXNvdXJjZXMiLCJpbWFnZXMiLCJvbkNvbXBsZXRlIiwiaW5pdGlhbGl6ZUFwcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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RDtBQWVEOztBQUVELFNBQVMrTCxhQUFULFFBQXlHO0FBQUEsTUFBL0VuSSxNQUErRSxTQUEvRUEsTUFBK0U7QUFBQSxNQUF2RVAsZ0JBQXVFLFNBQXZFQSxnQkFBdUU7QUFBQSxNQUFyRDJHLE1BQXFELFNBQXJEQSxNQUFxRDtBQUFBLE1BQTdDbkcsV0FBNkMsU0FBN0NBLFdBQTZDO0FBQUEsTUFBaEN2QixlQUFnQyxTQUFoQ0EsZUFBZ0M7QUFBQSxNQUFmdEMsV0FBZSxTQUFmQSxXQUFlO0FBQ3ZHLHdCQUFRO0FBQ040TCxtQkFBZSxFQUFFLENBQUM7QUFDaEJDLFlBQU0sRUFBRWhJLFdBQVcsQ0FBQ08sR0FBWixDQUFnQjtBQUFBLFlBQUd4QixHQUFILFNBQUdBLEdBQUg7QUFBQSxlQUFhQSxHQUFiO0FBQUEsT0FBaEI7QUFEUSxLQUFELENBRFg7QUFJTmtKLGNBQVU7QUFBQSxpR0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1ZiLHNCQUFNLENBQUM1SixFQUFQLEdBQVksRUFBWjtBQUNBMEksZ0NBQWdCLENBQUNuRyxNQUFELEVBQVNvRyxNQUFULEVBQWlCaEssV0FBakIsQ0FBaEIsQ0FGVSxDQUdWOztBQUhVO0FBQUEsdUJBSUpxRCxnQkFKSSxhQUlKQSxnQkFKSSx1QkFJSkEsZ0JBQWdCLEVBSlo7O0FBQUE7QUFLVndILDJCQUFXLENBQUNXLFlBQUQsRUFBZXhCLE1BQWYsRUFBdUIxSCxlQUF2QixFQUF3Q3RDLFdBQXhDLENBQVg7O0FBTFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUpKLEdBQVI7QUFZRCxDIiwiZmlsZSI6IjMyMHg1MC9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2FtcGFpZ25zL3RlbnRhdGl2ZU5hbWUvMzIweDUwL3NoZWxsLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYWQgPSBleHBvcnRzLnNldHVwQWQgPSB2b2lkIDA7XG5cbnZhciBfbG9hZFJlc291cmNlcyA9IHJlcXVpcmUoXCJAaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9sb2FkUmVzb3VyY2VzXCIpO1xuXG52YXIgX2NyZWF0ZUxvZ2dlciA9IHJlcXVpcmUoXCJAaHVnZW1kZS9hZG1pcmUtZGV2LXRvb2xzLXRvb2xzL2xpYi9jcmVhdGVMb2dnZXJcIik7XG5cbnZhciBfbWFrZVNldHVwQWQgPSByZXF1aXJlKFwiLi9tYWtlU2V0dXBBZFwiKTtcblxudmFyIGVudiA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbnZhciBsb2dMZXZlbCA9IGVudiA9PT0gJ3Byb2R1Y3Rpb24nID8gMiA6IDM7XG52YXIgbG9nID0gKDAsIF9jcmVhdGVMb2dnZXIuY3JlYXRlTG9nZ2VyKSgnYWQnLCB7XG4gIGxldmVsOiBsb2dMZXZlbFxufSk7XG52YXIgc2V0dXBBZCA9ICgwLCBfbWFrZVNldHVwQWQubWFrZVNldHVwQWQpKHtcbiAgd2luZG93OiB3aW5kb3csXG4gIGxvYWRSZXNvdXJjZXM6IF9sb2FkUmVzb3VyY2VzLmxvYWRSZXNvdXJjZXMsXG4gIGxvZzogbG9nXG59KTtcbmV4cG9ydHMuc2V0dXBBZCA9IHNldHVwQWQ7XG52YXIgYWQgPSBzZXR1cEFkO1xuZXhwb3J0cy5hZCA9IGFkOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYWtlU2V0dXBBZCA9IG1ha2VTZXR1cEFkO1xuLy8gVGhlIHRvdGFsIG51bWJlciBvZiBsaXN0cyBvZiByZXNvdXJjZXMgdG8gbG9hZCBmb3IgdGhlIGFkLlxudmFyIFJFU09VUkNFU19MSVNUU19MRU5HVEggPSAyO1xuXG5mdW5jdGlvbiBtYWtlU2V0dXBBZCgpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciB3aW5kb3cgPSBkZXBlbmRlbmNpZXMud2luZG93LFxuICAgICAgbG9hZFJlc291cmNlcyA9IGRlcGVuZGVuY2llcy5sb2FkUmVzb3VyY2VzLFxuICAgICAgbG9nID0gZGVwZW5kZW5jaWVzLmxvZztcbiAgLyoqXG4gICAqIEJhc2ljIGFkIHNldHVwIHByb2Nlc3Mgd2l0aCBubyBkZXBlbmRlbmNpZXMuXG4gICAqXG4gICAqIEBuYW1lIHZhbmlsbGEuc2V0dXBBZFxuICAgKiBAYWxpYXMgdmFuaWxsYS5hZFxuICAgKlxuICAgKiBAc2VlIFt0b29scy9sb2FkUmVzb3VyY2VzXSguLi8uLi9wYWNrYWdlcy90b29scy9BUEkubWQjbG9hZHJlc291cmNlcykgbW9kdWxlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtzZXR0aW5ncz17fV0gLSBBZCBzZXR0aW5ncy5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBbc2V0dGluZ3MudmVyc2lvbl0gLSBUaGUgYWQgdmVyc2lvbi5cbiAgICogQHBhcmFtICB7T2JqZWN0W119IFtzZXR0aW5ncy5pbml0aWFsUmVzb3VyY2VzXSAtIFJlc291cmNlcyB0byBsb2FkIHJpZ2h0IGF3YXkuXG4gICAqIEl0IGlzIHBhc3NlZCB0byBcInRvb2xzL2xvYWRSZXNvdXJjZXNcIiBtb2R1bGUuXG4gICAqIEBwYXJhbSAge09iamVjdFtdfSBbc2V0dGluZ3MucG9saXRlUmVzb3VyY2VzXSAtIFJlc291cmNlcyB0byBsb2FkIGFmdGVyXG4gICAqIHRoZSBhZCBwYWdlIGlzIGxvYWRlZC4gSXQgaXMgcGFzc2VkIHRvIFwidG9vbHMvbG9hZFJlc291cmNlc1wiIG1vZHVsZS5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IFtzZXR0aW5ncy5vbkluaXRdIC0gQ2FsbGVkIHJpZ2h0IGF3YXkuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbc2V0dGluZ3Mub25Jbml0aWFsTG9hZF0gLSBXaGVuIHRoZSBcImluaXRpYWxSZXNvdXJjZXNcIlxuICAgKiBwcm92aWRlZCBoYXZlIGJlZW4gbG9hZGVkLiBJdCBpcyBub3QgY2FsbGVkIGlmIG5vIHJlc291cmNlcyB3ZXJlIHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gW3NldHRpbmdzLm9uUmVhZHldIC0gVGhlIHByb3ZpZGVkIHJlc291cmNlcyBoYXZlIGJlZW4gbG9hZGVkLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gW3NldHRpbmdzLm9uRXJyb3JdIC0gQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyByZXNvdXJjZXMuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbc2V0dGluZ3Mub25Db21wbGV0ZV0gLSBBbHdheXMgY2FsbGVkIHdoZW4gZWl0aGVyIFwib25SZWFkeVwiIG9yIFwib25FcnJvclwiLlxuICAgKi9cblxuICByZXR1cm4gZnVuY3Rpb24gc2V0dXBBZCgpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciB2ZXJzaW9uID0gc2V0dGluZ3MudmVyc2lvbixcbiAgICAgICAgaW5pdGlhbFJlc291cmNlcyA9IHNldHRpbmdzLmluaXRpYWxSZXNvdXJjZXMsXG4gICAgICAgIHBvbGl0ZVJlc291cmNlcyA9IHNldHRpbmdzLnBvbGl0ZVJlc291cmNlcyxcbiAgICAgICAgb25Jbml0ID0gc2V0dGluZ3Mub25Jbml0LFxuICAgICAgICBvbkluaXRpYWxMb2FkID0gc2V0dGluZ3Mub25Jbml0aWFsTG9hZCxcbiAgICAgICAgb25SZWFkeSA9IHNldHRpbmdzLm9uUmVhZHksXG4gICAgICAgIG9uRXJyb3IgPSBzZXR0aW5ncy5vbkVycm9yLFxuICAgICAgICBvbkNvbXBsZXRlID0gc2V0dGluZ3Mub25Db21wbGV0ZTtcbiAgICB2YXIgcmVzb3VyY2VzTGlzdHNMb2FkZWQgPSAwO1xuICAgIHZhciBvY3VycmVkRXJyb3IgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHdoZW5Db21wbGV0ZSgpIHtcbiAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuUmVzb3VyY2VFcnJvcihlcnIpIHtcbiAgICAgIC8vIE9ubHkgaGFuZGxlIHRoZSBmaXJzdCBlcnJvci5cbiAgICAgIGlmIChvY3VycmVkRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvY3VycmVkRXJyb3IgPSB0cnVlO1xuICAgICAgbG9nLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHRoZSBmb2xsb3dpbmcgcmVzb3VyY2UgXFxcIlwiLmNvbmNhdChlcnIsIFwiXFxcIi5cIikpO1xuXG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICB9XG5cbiAgICAgIHdoZW5Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdoZW5SZWFkeSgpIHtcbiAgICAgIGxvZy5kZWJ1ZygnVGhlIGFkIGlzIHJlYWR5LicpO1xuXG4gICAgICBpZiAob25SZWFkeSkge1xuICAgICAgICBvblJlYWR5KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2hlblJlc291cmNlc0xpc3RMb2FkZWQoKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSB0d28gbGlzdHMgKFwiaW5pdGlhbFJlc291cmNlc1wiIGFuZCBcInBvbGl0ZVJlc291cmNlc1wiKVxuICAgICAgLy8gdG8gYmUgbG9hZGVkIHRvIGNhbGwgdGhlIFwib25SZWFkeVwiIGFuZCBcIm9uQ29tcGxldGVcIiBjYWxsYmFja3MuIFdlIHVzZSBhXG4gICAgICAvLyBjb3VudGVyIHRvIGNvdW50IGZvciBib3RoIG9mIHRoZW0uXG4gICAgICByZXNvdXJjZXNMaXN0c0xvYWRlZCsrO1xuXG4gICAgICBpZiAocmVzb3VyY2VzTGlzdHNMb2FkZWQgIT09IFJFU09VUkNFU19MSVNUU19MRU5HVEgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBHZXQgb3V0IGZyb20gdGhlIHByb21pc2UgY2hhaW4gKGlmIGluIG9uZSkgdG8gcHJldmVudCBwb3NzaWJsZVxuICAgICAgLy8gY2FsbGJhY2sgZXJyb3JzIHRvIGxlYWsgaW4gdGhlIGNoYWluLlxuXG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGVuUmVhZHkoKTtcbiAgICAgICAgd2hlbkNvbXBsZXRlKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuSW5pdGlhbExvYWQoKSB7XG4gICAgICBpZiAob25Jbml0aWFsTG9hZCkge1xuICAgICAgICAvLyBHZXQgb3V0IGZyb20gdGhlIHByb21pc2UgY2hhaW4gKGlmIGluIG9uZSkgdG8gcHJldmVudCBwb3NzaWJsZVxuICAgICAgICAvLyBjYWxsYmFjayBlcnJvcnMgdG8gbGVhayBpbiB0aGUgY2hhaW4uXG4gICAgICAgIHNldFRpbWVvdXQob25Jbml0aWFsTG9hZCwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2hlbkluaXQoKSB7XG4gICAgICBsb2cuZGVidWcoJ1RoZSBhZCBpcyBpbml0aWFsaXplZC4nKTtcblxuICAgICAgaWYgKG9uSW5pdCkge1xuICAgICAgICBvbkluaXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluaXRpYWxSZXNvdXJjZXMpIHtcbiAgICAgICAgbG9hZFJlc291cmNlcyhpbml0aWFsUmVzb3VyY2VzKS50aGVuKHdoZW5Jbml0aWFsTG9hZCkudGhlbih3aGVuUmVzb3VyY2VzTGlzdExvYWRlZCkuY2F0Y2god2hlblJlc291cmNlRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hlblJlc291cmNlc0xpc3RMb2FkZWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuTG9hZCgpIHtcbiAgICAgIGxvZy5kZWJ1ZygnVGhlIGFkIGlzIGxvYWRlZC4nKTtcblxuICAgICAgaWYgKHBvbGl0ZVJlc291cmNlcykge1xuICAgICAgICBsb2FkUmVzb3VyY2VzKHBvbGl0ZVJlc291cmNlcykudGhlbih3aGVuUmVzb3VyY2VzTGlzdExvYWRlZCkuY2F0Y2god2hlblJlc291cmNlRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hlblJlc291cmNlc0xpc3RMb2FkZWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbikge1xuICAgICAgbG9nLmluZm8oXCJWZXJzaW9uIFwiLmNvbmNhdCh2ZXJzaW9uKSk7XG4gICAgfVxuXG4gICAgd2hlbkluaXQoKTtcblxuICAgIGlmICh3aW5kb3cuZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgd2hlbkxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB3aGVuTG9hZCk7XG4gICAgfVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5vZmZDaGFuZ2VUYWJFdmVudCA9IGV4cG9ydHMub25DaGFuZ2VUYWJFdmVudCA9IHZvaWQgMDtcblxuLyoqXG4gKiBTZXQgYSB3aW5kb3cgZXZlbnQgdG8gbGlzdGVuIGZvciB3aW5kb3cgdmlzaWJpbGl0eSBjaGFuZ2VzXG4gKiBpZiBbUGFnZSBWaXNpYmlsaXR5IEFQSV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1BhZ2VfVmlzaWJpbGl0eV9BUEkpXG4gKiBpcyBzdXBwb3J0ZWQuXG4gKiBJdCBjYWxscyB0aGUgY2FsbGJhY2sgYXQgcmVnaXN0cmF0aW9uIHRpbWUuXG4gKiBJdCBzZXRzIHRoZSBhdHRyaWJ1dGUgYGRhdGEtdmlzaWJpbGl0eWAgd2l0aCB0aGUgdmFsdWUgYGhpZGRlbmAgb3IgYHZpc2libGVgXG4gKiBhY2NvcmRpbmcgdG8gdGhlIGNhc2Ugd2hlbiBpdCBjaGFuZ2VzIHRvIHRoZSBib2R5IGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFJlY2VpdmVzIGBoaWRkZW5gIG9yIGB2aXNpYmxlYCBhY2NvcmRpbmcgdG9cbiAqIHRoZSBjYXNlLlxuICovXG52YXIgb25DaGFuZ2VUYWJFdmVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlVGFiRXZlbnQoY2FsbGJhY2spIHtcbiAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgIHZhciBpc0hpZGRlbiA9ICdoaWRkZW4nIGluIGRvY3VtZW50ID8gZG9jdW1lbnQuaGlkZGVuIDogZG9jdW1lbnQud2Via2l0SGlkZGVuO1xuICAgIHZhciB2aXNpYmlsaXR5ID0gaXNIaWRkZW4gPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmlsaXR5JywgdmlzaWJpbGl0eSk7XG4gICAgY2FsbGJhY2sodmlzaWJpbGl0eSk7XG4gIH07XG5cbiAgaWYgKCdoaWRkZW4nIGluIGRvY3VtZW50KSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIGhhbmRsZXIoKTtcbiAgcmV0dXJuIGhhbmRsZXI7XG59O1xuLyoqXG4gKiBSZW1vdmUgY2hhbmdlIHRhYiBldmVudCBsaXN0ZW5lci5cbiAqIFVzdWFsbHksIHRoaXMgbGV0cyB5b3UgcmVtb3ZlIGEgaGFuZGxlciBjcmVhdGVkIHdpdGggYG9uQ2hhbmdlVGFiRXZlbnRgLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXJcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgaGFuZGxlclxuICogY29uc3QgaGFuZGxlciA9IG9uQ2hhbmdlVGFiRXZlbnQoZnVuY3Rpb24gKCkge30pO1xuICogLy8gUmVtb3ZlIGhhbmRsZXJcbiAqIG9mZkNoYW5nZVRhYkV2ZW50KGhhbmRsZXIpO1xuICovXG5cblxuZXhwb3J0cy5vbkNoYW5nZVRhYkV2ZW50ID0gb25DaGFuZ2VUYWJFdmVudDtcblxudmFyIG9mZkNoYW5nZVRhYkV2ZW50ID0gZnVuY3Rpb24gb2ZmQ2hhbmdlVGFiRXZlbnQoaGFuZGxlcikge1xuICBpZiAoJ2hpZGRlbicgaW4gZG9jdW1lbnQpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlcik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0dmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZXIpO1xuICB9XG59O1xuXG5leHBvcnRzLm9mZkNoYW5nZVRhYkV2ZW50ID0gb2ZmQ2hhbmdlVGFiRXZlbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2hhbmdlVGFiRXZlbnQgPSByZXF1aXJlKFwiLi9jaGFuZ2VUYWJFdmVudFwiKTtcblxuT2JqZWN0LmtleXMoX2NoYW5nZVRhYkV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2hhbmdlVGFiRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZUxvZ2dlciA9IHZvaWQgMDtcblxudmFyIF9tYWtlQ3JlYXRlTG9nZ2VyID0gcmVxdWlyZShcIi4vbWFrZUNyZWF0ZUxvZ2dlci5qc1wiKTtcblxuLy8gSW4gc29tZSBvbGRlciBicm93c2Vycywgb2JqZWN0IGBjb25zb2xlYCBkb2VzIG5vdCBleGlzdCwgc28gYWNjZXNzaW5nIGl0XG4vLyB0aHJvd3MgYW5kIGVycm9yLiBXZSBnZXQgaXQgZnJvbSB3aW5kb3cgZm9yIHNhZmV0eS5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG52YXIgY3JlYXRlTG9nZ2VyID0gKDAsIF9tYWtlQ3JlYXRlTG9nZ2VyLm1ha2VDcmVhdGVMb2dnZXIpKHtcbiAgY29uc29sZTogY29uc29sZVxufSk7XG5leHBvcnRzLmNyZWF0ZUxvZ2dlciA9IGNyZWF0ZUxvZ2dlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1ha2VDcmVhdGVMb2dnZXIgPSBtYWtlQ3JlYXRlTG9nZ2VyO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGNyZWF0ZUxvZ2dlciB0b29sLlxuICogQHBhcmFtICB7T2JqZWN0fSBkZXBlbmRlbmNpZXNcbiAqIEBwYXJhbSAge09iamVjdH0gZGVwZW5kZW5jaWVzLmNvbnNvbGUgLSBCcm93c2VyIGdsb2JhbCBvYmplY3RcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBtYWtlQ3JlYXRlTG9nZ2VyKCkge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGNvbnNvbGUgPSBkZXBlbmRlbmNpZXMuY29uc29sZSB8fCB7fTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb2dnZXIgaW5zdGFuY2UgZm9yIHRoZSBicm93c2VyIHdpdGggZm91ciBsb2cgbWV0aG9kc1xuICAgKiBjb3JyZXNwb25kaW5nIHRvIGZvdXIgZGlmZmVyZW50IHNldmVyaXR5IGxldmVsczpcbiAgICogLSBsZXZlbCAwOiBgZXJyb3JgXG4gICAqIC0gbGV2ZWwgMTogYHdhcm5gXG4gICAqIC0gbGV2ZWwgMjogYGluZm9gXG4gICAqIC0gbGV2ZWwgMzogYGRlYnVnYFxuICAgKlxuICAgKiBUaGUgYXZhaWxhYmxlIGxvZyBtZXRob2RzIHdpbGwgZGVwZW5kIG9uIHRoZSBzZXZlcml0eSBsZXZlbCBwYXNzZWQgYXMgYW5cbiAgICogYXJndW1lbnQgaW4gYHNldHRpbmdzLmxldmVsYC5cbiAgICpcbiAgICogSWYgdGhlIGxvZyBtZXRob2QgZG9lc24ndCBleGlzdCBpbiB0aGUgYnJvd3NlciwgaXQgd2lsbCBmYWxsYmFjayB0aGVcbiAgICogbG9nIG1ldGhvZCBieSBkZWZhdWx0IGkuZSBgY29uc29sZS5sb2dgLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVzcGFjZSAtIHByZWZpeCB0byBncm91cCBsb2dzXG4gICAqIEBwYXJhbSAge09iamVjdH0gW3NldHRpbmdzID0ge31dXG4gICAqIEBwYXJhbSAge251bWJlcn0gW3NldHRpbmdzLmxldmVsID0gM10gLSBtYXggbnVtYmVyIG9mIGxvZyBsZXZlbHMgYWxsb3dlZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gY29udGFpbnMgYWxsIHRoZSBsb2cgbWV0aG9kcyB0byBiZSB1c2VkXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGxvZyA9IGNyZWF0ZUxvZ2dlcignbXlBcHAnKTtcbiAgICogbG9nLmRlYnVnKCdMb2FkaW5nIEFwcCcpO1xuICAgKiAvLyBMb2dzIGluIHRoZSBjb25zb2xlOiBcIltteUFwcF0gTG9hZGluZyBBcHBcIlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBUaGUgYXZhaWxhYmxlIGxvZyBsZXZlbHMgd2lsbCBiZSBlcnJvciwgd2FybiBhbmQgaW5mby5cbiAgICogY29uc3QgbG9nID0gY3JlYXRlTG9nZ2VyKCdteUFwcCcsIHsgbGV2ZWw6IDIgfSk7XG4gICAqIGxvZy5kZWJ1ZygnTG9hZGluZyBBcHAnKTtcbiAgICogLy8gTG9ncyBub3RoaW5nIGludG8gdGhlIGNvbnNvbGUgc2luY2UgdGhhdCBsZXZlbCBpcyBub3QgYWxsb3dlZC5cbiAgICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihuYW1lc3BhY2UpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgaWYgKCEoMCwgX3R5cGVzLmlzU3RyaW5nKShuYW1lc3BhY2UpIHx8ICFuYW1lc3BhY2UudHJpbSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdmFsaWQgbmFtZXNwYWNlIGlzIHJlcXVpcmVkIScpO1xuICAgIH1cblxuICAgIHNldHRpbmdzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBsZXZlbDogM1xuICAgIH0sIHNldHRpbmdzKTsgLy8gRnVuY3Rpb24gdG8gZmFjdG9yaXplIGNvbW1vbiB0YXNrcyBpbiBkaXNwbGF5aW5nIG1lc3NhZ2VzXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5TG9ncyhkYXRhKSB7XG4gICAgICB2YXIgbGV2ZWwgPSBkYXRhLmxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VzID0gZGF0YS5tZXNzYWdlcztcbiAgICAgIHZhciBsb2dNZXRob2RzID0gW2NvbnNvbGUuZXJyb3IsIGNvbnNvbGUud2FybiwgY29uc29sZS5pbmZvLCBjb25zb2xlLmRlYnVnXTtcbiAgICAgIHZhciBsb2dNZXRob2QgPSBsb2dNZXRob2RzW2xldmVsXSB8fCBjb25zb2xlLmxvZztcbiAgICAgIHZhciBhbGxvd2VkTGV2ZWwgPSBzZXR0aW5ncy5sZXZlbDtcblxuICAgICAgaWYgKGxvZ01ldGhvZCAmJiBsb2dNZXRob2QuYXBwbHkgJiYgbGV2ZWwgPD0gYWxsb3dlZExldmVsKSB7XG4gICAgICAgIC8vIFdlIHJ1biBkaXJlY3RseSAuYXBwbHkoKSBleHBsaWNpdGVseSB0byBzZXQgdGhlIGNvbnRleHQgb2YgdGhlIGNhbGxcbiAgICAgICAgLy8gdG8gYmUgdGhlIGBjb25zb2xlYCBvYmplY3QuIElmIG5vdCwgSUUgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICBsb2dNZXRob2QuYXBwbHkoY29uc29sZSwgW1wiW1wiLmNvbmNhdChuYW1lc3BhY2UsIFwiXVwiKV0uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKG1lc3NhZ2VzKSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZWJ1ZzogZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgICAgIHZhciBsZXZlbCA9IDM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2VzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIG1lc3NhZ2VzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGxheUxvZ3Moe1xuICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaW5mbzogZnVuY3Rpb24gaW5mbygpIHtcbiAgICAgICAgdmFyIGxldmVsID0gMjtcblxuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2VzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgbWVzc2FnZXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXlMb2dzKHtcbiAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHdhcm46IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgICAgIHZhciBsZXZlbCA9IDE7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBtZXNzYWdlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgIG1lc3NhZ2VzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwbGF5TG9ncyh7XG4gICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICAgIHZhciBsZXZlbCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBtZXNzYWdlcyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICAgIG1lc3NhZ2VzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwbGF5TG9ncyh7XG4gICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2xvYWRSZXNvdXJjZXMgPSByZXF1aXJlKFwiLi9sb2FkUmVzb3VyY2VzXCIpO1xuXG5PYmplY3Qua2V5cyhfbG9hZFJlc291cmNlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2xvYWRSZXNvdXJjZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5sb2FkUmVzb3VyY2VzID0gdm9pZCAwO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX3Byb21pc2VTZXJpYWwgPSByZXF1aXJlKFwiLi4vcHJvbWlzZVNlcmlhbFwiKTtcblxudmFyIF9sb2FkaW5nID0gcmVxdWlyZShcIi4uL2xvYWRpbmdcIik7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIExvYWQgYSBzZXQgb2YgcmVzb3VyY2VzIG9yZ2FuaXplZCBpbiBzZXJpYWwgYW5kIHBhcmFsbGVsLlxuICogQHBhcmFtICB7T2JqZWN0W119IHJlc291cmNlc1xuICogQHBhcmFtICB7c3RyaW5nW119IFtyZXNvdXJjZXNbXS5pbWFnZXNdXG4gKiBAcGFyYW0gIHtzdHJpbmdbXX0gW3Jlc291cmNlc1tdLnNjcmlwdHNdXG4gKiBAcGFyYW0gIHtzdHJpbmdbXX0gW3Jlc291cmNlc1tdLnN0eWxlc11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAZXhhbXBsZVxuICogLy8gVGhpcyB3aWxsIGxvYWQgJ3NjcmlwdDEnIGFuZCAnc3R5bGUxJyBmaXJzdCBpbiBwYXJhbGxlbCBhbmQgdGhlblxuICogLy8gJ2ltZzEnIGFuZCAnaW1nMicgYWZ0ZXIgaW4gcGFyYWxsZWwuXG4gKiBsb2FkUmVzb3VyY2VzKFtcbiAqICAgeyBzY3JpcHRzOiBbJ3NjcmlwdDEuanMnXSwgc3R5bGVzOiBbJ3N0eWxlMS5jc3MnXSB9LFxuICogICB7IGltYWdlczogWydpbWcxLnBuZycsICdpbWcyLnBuZyddIH1cbiAqIF0pO1xuICovXG52YXIgbG9hZFJlc291cmNlcyA9IGZ1bmN0aW9uIGxvYWRSZXNvdXJjZXMocmVzb3VyY2VzKSB7XG4gIHJldHVybiAoMCwgX3Byb21pc2VTZXJpYWwucHJvbWlzZVNlcmlhbCkocmVzb3VyY2VzLm1hcChmdW5jdGlvbiAocmVzb3VyY2VzU2V0KSB7XG4gICAgdmFyIF9yZXNvdXJjZXNTZXQkc3R5bGVzID0gcmVzb3VyY2VzU2V0LnN0eWxlcyxcbiAgICAgICAgc3R5bGVzID0gX3Jlc291cmNlc1NldCRzdHlsZXMgPT09IHZvaWQgMCA/IFtdIDogX3Jlc291cmNlc1NldCRzdHlsZXMsXG4gICAgICAgIF9yZXNvdXJjZXNTZXQkc2NyaXB0cyA9IHJlc291cmNlc1NldC5zY3JpcHRzLFxuICAgICAgICBzY3JpcHRzID0gX3Jlc291cmNlc1NldCRzY3JpcHRzID09PSB2b2lkIDAgPyBbXSA6IF9yZXNvdXJjZXNTZXQkc2NyaXB0cyxcbiAgICAgICAgX3Jlc291cmNlc1NldCRpbWFnZXMgPSByZXNvdXJjZXNTZXQuaW1hZ2VzLFxuICAgICAgICBpbWFnZXMgPSBfcmVzb3VyY2VzU2V0JGltYWdlcyA9PT0gdm9pZCAwID8gW10gOiBfcmVzb3VyY2VzU2V0JGltYWdlcztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5Mi5kZWZhdWx0KShzdHlsZXMubWFwKF9sb2FkaW5nLmxvYWRTdHlsZSkpLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5Mi5kZWZhdWx0KShzY3JpcHRzLm1hcChfbG9hZGluZy5sb2FkU2NyaXB0KSksICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKGltYWdlcy5tYXAoX2xvYWRpbmcubG9hZEltYWdlKSkpKTtcbiAgICB9O1xuICB9KSk7XG59O1xuXG5leHBvcnRzLmxvYWRSZXNvdXJjZXMgPSBsb2FkUmVzb3VyY2VzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2xvYWRpbmcgPSByZXF1aXJlKFwiLi9sb2FkaW5nXCIpO1xuXG5PYmplY3Qua2V5cyhfbG9hZGluZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2xvYWRpbmdba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmxvYWRJbWFnZSA9IGV4cG9ydHMubG9hZFN0eWxlID0gZXhwb3J0cy5sb2FkU2NyaXB0ID0gdm9pZCAwO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBMb2FkIGEgSmF2YVNjcmlwdCBmaWxlIGJ5IFVSTC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGV4YW1wbGVcbiAqIGxvYWRTY3JpcHQoJ2FwcC5qcycpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0xvYWRlZC4nKSk7XG4gKi9cbnZhciBsb2FkU2NyaXB0ID0gZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUoc2NyaXB0KTtcbiAgICB9O1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWplY3QodXJsKTtcbiAgICB9O1xuXG4gICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH0pO1xufTtcbi8qKlxuICogTG9hZCBhIENTUyBmaWxlIGJ5IFVSTC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGV4YW1wbGVcbiAqIGxvYWRTdHlsZSgnYXBwLmNzcycpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0xvYWRlZC4nKSk7XG4gKi9cblxuXG5leHBvcnRzLmxvYWRTY3JpcHQgPSBsb2FkU2NyaXB0O1xuXG52YXIgbG9hZFN0eWxlID0gZnVuY3Rpb24gbG9hZFN0eWxlKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShsaW5rKTtcbiAgICB9O1xuXG4gICAgbGluay5vbmVycm9yID0gbGluay5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlamVjdCh1cmwpO1xuICAgIH07XG5cbiAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxpbmspO1xuICB9KTtcbn07XG4vKipcbiAqIExvYWQgYW4gaW1hZ2UgZmlsZSBieSBVUkwuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBleGFtcGxlXG4gKiBsb2FkSW1hZ2UoJ2xvZ28ucG5nJykudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTG9hZGVkLicpKTtcbiAqL1xuXG5cbmV4cG9ydHMubG9hZFN0eWxlID0gbG9hZFN0eWxlO1xuXG52YXIgbG9hZEltYWdlID0gZnVuY3Rpb24gbG9hZEltYWdlKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xuICAgIH07XG5cbiAgICBpbWcub25lcnJvciA9IGltZy5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlamVjdCh1cmwpO1xuICAgIH07XG5cbiAgICBpbWcuc3JjID0gdXJsO1xuICB9KTtcbn07XG5cbmV4cG9ydHMubG9hZEltYWdlID0gbG9hZEltYWdlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Byb21pc2VTZXJpYWwgPSByZXF1aXJlKFwiLi9wcm9taXNlU2VyaWFsXCIpO1xuXG5PYmplY3Qua2V5cyhfcHJvbWlzZVNlcmlhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3Byb21pc2VTZXJpYWxba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnByb21pc2VTZXJpYWwgPSB2b2lkIDA7XG5cbi8qKlxuICogUnVuIGEgbGlzdCBvZiBmdW5jdGlvbnMgaW4gc2VyaWFsIGluIGEgY2hhaW4gb2YgcHJvbWlzZXMuXG4gKiBUaGlzIGlzIGxpa2UgYFByb21pc2UuYWxsKClgIGJ1dCBpbiBzZXJpYWwuXG4gKiBUaGUgdmFsdWUgcmVjZWl2ZWQgaW4gYSBwcm9taXNlIGlzIHRoZSB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgcHJvbWlzZS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9uW119IGZuc1xuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBleGFtcGxlXG4gKiBwcm9taXNlU2VyaWFsKFtcbiAgKiAgIGZldGNoKCdpbWFnZTEucG5nJyksXG4gICogICBmZXRjaCgnaW1hZ2UyLnBuZycpLFxuICAqICAgZmV0Y2goJ2ltYWdlMy5wbmcnKVxuICAqIF0pLnRoZW4obGFzdFJlcyA9PiB7XG4gICogICAvLyBSZWNlaXZlcyBsYXN0IHByb21pc2UgcmVzdWx0LlxuICAqIH0pO1xuICAqL1xudmFyIHByb21pc2VTZXJpYWwgPSBmdW5jdGlvbiBwcm9taXNlU2VyaWFsKGZucykge1xuICB2YXIgaW5pdGlhbFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHNlcmlhbCwgZm4pIHtcbiAgICByZXR1cm4gc2VyaWFsLnRoZW4oZm4pO1xuICB9LCBpbml0aWFsUHJvbWlzZSk7XG59O1xuXG5leHBvcnRzLnByb21pc2VTZXJpYWwgPSBwcm9taXNlU2VyaWFsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNOdW1iZXIgPSBleHBvcnRzLmlzU3RyaW5nID0gZXhwb3J0cy5pc1BsYWluT2JqZWN0ID0gdm9pZCAwO1xuXG52YXIgX3R5cGVvZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKSk7XG5cbi8qKlxuICogSWYgdGhlIHByb3ZpZGVkIGRhdGEgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcGFyYW0gIHsqfSAgZGF0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KGRhdGEpIHtcbiAgcmV0dXJuICEhZGF0YSAmJiAoMCwgX3R5cGVvZjIuZGVmYXVsdCkoZGF0YSkgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGRhdGEpO1xufTtcbi8qKlxuICogSWYgdGhlIHByb3ZpZGVkIGRhdGEgaXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gIHsqfSAgZGF0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG5cbmV4cG9ydHMuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3Q7XG5cbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKGRhdGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJztcbn07XG4vKipcbiAqIElmIHRoZSBwcm92aWRlZCBkYXRhIGlzIGEgbnVtYmVyLlxuICogQHBhcmFtICB7Kn0gIGRhdGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuXG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbnZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKGRhdGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJztcbn07XG5cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiZnVuY3Rpb24gYWxsU2V0dGxlZChhcnIpIHtcbiAgdmFyIFAgPSB0aGlzO1xuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCEoYXJyICYmIHR5cGVvZiBhcnIubGVuZ3RoICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgIG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgdHlwZW9mIGFyciArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgYXJyICtcbiAgICAgICAgICAgICcgaXMgbm90IGl0ZXJhYmxlKGNhbm5vdCByZWFkIHByb3BlcnR5IFN5bWJvbChTeW1ib2wuaXRlcmF0b3IpKSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcbiAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoZW4uY2FsbChcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGFyZ3NbaV0gPSB7IHN0YXR1czogJ3JlamVjdGVkJywgcmVhc29uOiBlIH07XG4gICAgICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJnc1tpXSA9IHsgc3RhdHVzOiAnZnVsZmlsbGVkJywgdmFsdWU6IHZhbCB9O1xuICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxsU2V0dGxlZDtcbiIsIi8qKlxuICogQHRoaXMge1Byb21pc2V9XG4gKi9cbmZ1bmN0aW9uIGZpbmFsbHlDb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmFsbHlDb25zdHJ1Y3RvcjtcbiIsImltcG9ydCBwcm9taXNlRmluYWxseSBmcm9tICcuL2ZpbmFsbHknO1xuaW1wb3J0IGFsbFNldHRsZWQgZnJvbSAnLi9hbGxTZXR0bGVkJztcblxuLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbi8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxudmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblxuZnVuY3Rpb24gaXNBcnJheSh4KSB7XG4gIHJldHVybiBCb29sZWFuKHggJiYgdHlwZW9mIHgubGVuZ3RoICE9PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5mdW5jdGlvbiBQcm9taXNlKGZuKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgLyoqIEB0eXBlIHshbnVtYmVyfSAqL1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIC8qKiBAdHlwZSB7IWJvb2xlYW59ICovXG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgLyoqIEB0eXBlIHtQcm9taXNlfHVuZGVmaW5lZH0gKi9cbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAvLyBAdHMtaWdub3JlXG4gIHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XG4gIHJldHVybiBwcm9tO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IHByb21pc2VGaW5hbGx5O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpKTtcbiAgICB9XG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJlamVjdChleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UuYWxsU2V0dGxlZCA9IGFsbFNldHRsZWQ7XG5cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5yYWNlIGFjY2VwdHMgYW4gYXJyYXknKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGFycltpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblByb21pc2UuX2ltbWVkaWF0ZUZuID1cbiAgLy8gQHRzLWlnbm9yZVxuICAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGZ1bmN0aW9uKGZuKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0pIHx8XG4gIGZ1bmN0aW9uKGZuKSB7XG4gICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICB9O1xuXG5Qcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7XG4iLCJpbXBvcnQgUHJvbWlzZSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBwcm9taXNlRmluYWxseSBmcm9tICcuL2ZpbmFsbHknO1xuaW1wb3J0IGFsbFNldHRsZWQgZnJvbSAnLi9hbGxTZXR0bGVkJztcblxuLyoqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFyc30gKi9cbnZhciBnbG9iYWxOUyA9IChmdW5jdGlvbigpIHtcbiAgLy8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXG4gIC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuICAvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGdsb2JhbDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xufSkoKTtcblxuLy8gRXhwb3NlIHRoZSBwb2x5ZmlsbCBpZiBQcm9taXNlIGlzIHVuZGVmaW5lZCBvciBzZXQgdG8gYVxuLy8gbm9uLWZ1bmN0aW9uIHZhbHVlLiBUaGUgbGF0dGVyIGNhbiBiZSBkdWUgdG8gYSBuYW1lZCBIVE1MRWxlbWVudFxuLy8gYmVpbmcgZXhwb3NlZCBieSBicm93c2VycyBmb3IgbGVnYWN5IHJlYXNvbnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGF5bG9yaGFrZXMvcHJvbWlzZS1wb2x5ZmlsbC9pc3N1ZXMvMTE0XG5pZiAodHlwZW9mIGdsb2JhbE5TWydQcm9taXNlJ10gIT09ICdmdW5jdGlvbicpIHtcbiAgZ2xvYmFsTlNbJ1Byb21pc2UnXSA9IFByb21pc2U7XG59IGVsc2UgaWYgKCFnbG9iYWxOUy5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG4gIGdsb2JhbE5TLlByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBwcm9taXNlRmluYWxseTtcbn0gZWxzZSBpZiAoIWdsb2JhbE5TLlByb21pc2UuYWxsU2V0dGxlZCkge1xuICBnbG9iYWxOUy5Qcm9taXNlLmFsbFNldHRsZWQgPSBhbGxTZXR0bGVkO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IGFkIH0gZnJvbSAnc3JjL2NvcmUvZWxlbWVudHMnO1xuaW1wb3J0IHsgYW5pbWF0ZVNob3dYLCBhbmltYXRlSW5PdXQgfSBmcm9tICdzcmMvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgc2V0Q29udGFpbmVyQ2xhc3MgfSBmcm9tICdzcmMvY29yZS91dGlscyc7XG5cbmZ1bmN0aW9uIGFuaW1hdGVGcmFtZTEgKGRvbUVsZW1lbnRzLCBkeW5hbWljT3B0aW9ucykge1xuICBjb25zdCB7IGhlYWRsaW5lMSwgaGVhZGxpbmVUZXh0MSwgc3ViaGVhZGxpbmVGMSwgbG9nbywgYmdQYXR0ZXJuLCBkaXNjbGFpbWVyQnV0dG9uLCBjdGFUZXh0IH0gPSBkb21FbGVtZW50cztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBjb25zdCB7IEYxX292ZXJ3cml0ZV9lZGdlX2Nhc2UgfSA9IGR5bmFtaWNPcHRpb25zO1xuXG4gIGNvbnNvbGUubG9nKGhlYWRsaW5lMSk7XG4gIHJldHVybiBnc2FwLnRpbWVsaW5lKClcbiAgICAuY2FsbChzZXRDb250YWluZXJDbGFzcywgW3tcbiAgICAgIG92ZXJ3cml0ZTogRjFfb3ZlcndyaXRlX2VkZ2VfY2FzZSxcbiAgICAgIHNocmlua09wdGlvbnM6IHtcbiAgICAgICAgZWxlbWVudHM6IFtoZWFkbGluZVRleHQxLCBzdWJoZWFkbGluZUYxXSxcbiAgICAgICAgY29udGFpbmVyOiBoZWFkbGluZTEsXG4gICAgICAgIHBhcmVudDogYWRcbiAgICAgIH1cbiAgICB9XSlcbiAgICAuYWRkKFtcbiAgICAgIGFuaW1hdGVJbk91dChiZ1BhdHRlcm4sICdsZWZ0JywgJ2luJyksXG4gICAgICBhbmltYXRlU2hvd1gobG9nbywgLTIwKS5kZWxheSgxLjUpLFxuICAgICAgYW5pbWF0ZVNob3dYKGhlYWRsaW5lVGV4dDEsIC0yMCkuZGVsYXkoMS43KSxcbiAgICAgIGdzYXAudG8oc3ViaGVhZGxpbmVGMSwgMC41LCB7IG9wYWNpdHk6IDEgfSkuZGVsYXkoMi4xKSxcbiAgICAgIGdzYXAudG8oY3RhVGV4dCwgMC41LCB7IG9wYWNpdHk6IDEgfSkuZGVsYXkoMi4yKSxcbiAgICAgIGdzYXAudG8oZGlzY2xhaW1lckJ1dHRvbiwgMC41LCB7IG9wYWNpdHk6IDEgfSkuZGVsYXkoMi4yKVxuICAgIF0pXG4gICAgLnRvKFtzdWJoZWFkbGluZUYxLCBoZWFkbGluZVRleHQxXSwgeyBvcGFjaXR5OiAwLCB4OiAyMCwgc3RhZ2dlcjogMC4yLCBkZWxheTogMiB9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUZyYW1lMiAoZG9tRWxlbWVudHMsIGR5bmFtaWNPcHRpb25zKSB7XG4gIGNvbnN0IHsgaGVhZGxpbmUyLCBoZWFkbGluZVRleHQyLCBzdWJoZWFkbGluZUYyIH0gPSBkb21FbGVtZW50cztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBjb25zdCB7IEYyX292ZXJ3cml0ZV9lZGdlX2Nhc2UgfSA9IGR5bmFtaWNPcHRpb25zO1xuXG4gIHJldHVybiBnc2FwLnRpbWVsaW5lKClcbiAgICAuY2FsbChzZXRDb250YWluZXJDbGFzcywgW3tcbiAgICAgIG92ZXJ3cml0ZTogRjJfb3ZlcndyaXRlX2VkZ2VfY2FzZSxcbiAgICAgIHNocmlua09wdGlvbnM6IHtcbiAgICAgICAgZWxlbWVudHM6IFtoZWFkbGluZVRleHQyLCBzdWJoZWFkbGluZUYyXSxcbiAgICAgICAgY29udGFpbmVyOiBoZWFkbGluZTIsXG4gICAgICAgIHBhcmVudDogYWRcbiAgICAgIH1cbiAgICB9XSlcbiAgICAuYWRkKFtcbiAgICAgIGFuaW1hdGVTaG93WChoZWFkbGluZVRleHQyLCAtMjApLFxuICAgICAgZ3NhcC50byhzdWJoZWFkbGluZUYyLCAwLjUsIHsgb3BhY2l0eTogMSB9KS5kZWxheSgwLjMpXG4gICAgXSlcbiAgICAudG8oW2hlYWRsaW5lMl0sIHsgb3BhY2l0eTogMCwgeDogMjAsIHN0YWdnZXI6IDAuMiwgZGVsYXk6IDIgfSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVGcmFtZTMgKGRvbUVsZW1lbnRzLCBkeW5hbWljT3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgaGVhZGxpbmUzLFxuICAgIGhlYWRsaW5lVGV4dDMsXG4gICAgc3ViaGVhZGxpbmVGM1xuICB9ID0gZG9tRWxlbWVudHM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY29uc3QgeyBGMl9vdmVyd3JpdGVfZWRnZV9jYXNlIH0gPSBkeW5hbWljT3B0aW9ucztcblxuICByZXR1cm4gZ3NhcC50aW1lbGluZSgpXG4gICAgLmNhbGwoc2V0Q29udGFpbmVyQ2xhc3MsIFt7XG4gICAgICByZW1vdmU6ICdtYWluLWhlYWRsaW5lLWZyYW1lLTEnLFxuICAgICAgYWRkOiAnbWFpbi1oZWFkbGluZS1mcmFtZS0zJyxcbiAgICAgIG92ZXJ3cml0ZTogRjJfb3ZlcndyaXRlX2VkZ2VfY2FzZSxcbiAgICAgIHNocmlua09wdGlvbnM6IHtcbiAgICAgICAgZWxlbWVudHM6IFtoZWFkbGluZVRleHQzLCBzdWJoZWFkbGluZUYzXSxcbiAgICAgICAgY29udGFpbmVyOiBoZWFkbGluZTMsXG4gICAgICAgIHBhcmVudDogYWRcbiAgICAgIH1cbiAgICB9XSlcbiAgICAuYWRkKFxuICAgICAgW1xuICAgICAgICBhbmltYXRlU2hvd1goaGVhZGxpbmVUZXh0MywgLTIwKSxcbiAgICAgICAgZ3NhcC50byhzdWJoZWFkbGluZUYzLCAwLjUsIHsgb3BhY2l0eTogMSB9KS5kZWxheSgwLjMpXG4gICAgICBdXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFpblRpbWVsaW5lIChkb21FbGVtZW50c1BhcmFtLCBkeW5hbWljT3B0aW9ucykge1xuICByZXR1cm4gZ3NhcC50aW1lbGluZSgpXG4gICAgLnRvKFxuICAgICAgYWQsXG4gICAgICB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiAncG93ZXI0Lm91dCdcbiAgICAgIH0sXG4gICAgICAnaW4nXG4gICAgKVxuICAgIC5hZGQoYW5pbWF0ZUZyYW1lMShkb21FbGVtZW50c1BhcmFtLCBkeW5hbWljT3B0aW9ucykpXG4gICAgLmFkZChhbmltYXRlRnJhbWUyKGRvbUVsZW1lbnRzUGFyYW0sIGR5bmFtaWNPcHRpb25zKSlcbiAgICAuYWRkKGFuaW1hdGVGcmFtZTMoZG9tRWxlbWVudHNQYXJhbSwgZHluYW1pY09wdGlvbnMpKTtcbn1cblxuZXhwb3J0IHsgZ2V0TWFpblRpbWVsaW5lIH07XG4iLCJleHBvcnQgY29uc3QgSU1BR0VfQVNTRVRTID0gW1xuICB7IGtleTogJ2Fzc2V0X19iZy1wYXR0ZXJuJywgdXJsOiAnaW1hZ2VzL2JnUGF0dGVybl8zMjB4NTAucG5nJyB9XG5dO1xuXG5leHBvcnQgY29uc3QgRklFTERTID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICcuaGVhZGxpbmUtMScsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnaGVhZGxpbmUxJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuaGVhZGxpbmUtMicsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnaGVhZGxpbmUyJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuaGVhZGxpbmUtMycsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnaGVhZGxpbmUzJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuaGVhZGxpbmVfX3RleHQtMScsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnaGVhZGxpbmVUZXh0MSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmhlYWRsaW5lX190ZXh0LTInLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB2YWx1ZUtleTogJ2hlYWRsaW5lVGV4dDInXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5oZWFkbGluZV9fdGV4dC0zJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWVLZXk6ICdoZWFkbGluZVRleHQzJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuc3ViaGVhZGxpbmVfX2YxJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWVLZXk6ICdzdWJoZWFkbGluZUYxJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuc3ViaGVhZGxpbmVfX2YyJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWVLZXk6ICdzdWJoZWFkbGluZUYyJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuc3ViaGVhZGxpbmVfX2YzJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWVLZXk6ICdzdWJoZWFkbGluZUYzJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuY3RhX190ZXh0JyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWVLZXk6ICdjdGFUZXh0JyxcbiAgICBjb2xvcktleTogJ2N0YUNvbG9yJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuYXNzZXRfX2JnLXBhdHRlcm4nLFxuICAgIHR5cGU6ICdpbWFnZScsXG4gICAgdmFsdWVLZXk6ICdiZ1BhdHRlcm4nXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJy5sb2dvJyxcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdmFsdWVLZXk6ICdsb2dvJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuZXhpdCcsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnZXhpdCdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmRpc2NsYWltZXJfX2NvbnRhaW5lcicsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnZGlzY2xhaW1lckNvbnRhaW5lcidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmRpc2NsYWltZXJfX2J1dHRvbicsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnZGlzY2xhaW1lckJ1dHRvbidcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnLmRpc2NsYWltZXJfX2Nsb3NlLWJ1dHRvbicsXG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHZhbHVlS2V5OiAnZGlzY2xhaW1lckNsb3NlQnV0dG9uJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcuZGlzY2xhaW1lcl9fdGV4dCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlS2V5OiAnZGlzY2xhaW1lckNvbnRlbnQnXG4gIH1cbl07XG4iLCJpbXBvcnQgJ3Byb21pc2UtcG9seWZpbGwvc3JjL3BvbHlmaWxsJztcbmltcG9ydCB7IGluaXRpYWxpemVGVEFwcCB9IGZyb20gJ3NyYy90ZW1wbGF0ZXMvbWFzdGVyVGVtcGxhdGVWMic7XG5pbXBvcnQgeyAkIH0gZnJvbSAnc3JjL2NvcmUvZG9tJztcbmltcG9ydCAnLi9zaGVsbC5zY3NzJztcbmltcG9ydCB7IHN0b3JlTG9jYXRvciB9IGZyb20gJ3NyYy9jb3JlL21vZHVsZXMvc3RvcmUtbG9jYXRvcic7XG5pbXBvcnQgeyBGSUVMRFMsIElNQUdFX0FTU0VUUyB9IGZyb20gJy4vbW9kdWxlcy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBnZXRNYWluVGltZWxpbmUgfSBmcm9tICcuL21vZHVsZXMvYW5pbWF0aW9ucyc7XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gRklFTERTLnJlZHVjZSgoYWNjdW11bGF0b3IsIGVsZW1lbnQpID0+IChcbiAge1xuICAgIC4uLmFjY3VtdWxhdG9yLFxuICAgIFtlbGVtZW50LnZhbHVlS2V5XTogJChlbGVtZW50LnNlbGVjdG9yKVxuICB9KSwge30pO1xuXG5mdW5jdGlvbiBleHRlbmRlZEZ1bmN0aW9uICgpIHtcbiAgaWYgKG15RlQuaW5zdGFudEFkcy5pbWFnZVZlcnNpb24pIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXZlcnNpb24nKTtcbiAgfVxuICBzdG9yZUxvY2F0b3IoKTtcbn1cblxuaW5pdGlhbGl6ZUZUQXBwKHtcbiAgZmllbGRzOiBGSUVMRFMsXG4gIGltYWdlQXNzZXRzOiBJTUFHRV9BU1NFVFMsXG4gIGV4dGVuZGVkRnVuY3Rpb24sXG4gIGdldE1haW5UaW1lbGluZSxcbiAgZG9tRWxlbWVudHMsXG4gIGV4dHJhVmFsdWVzOiB7XG4gICAgYmdQYXR0ZXJuOiAnaW1hZ2VzL2JnUGF0dGVybl8zMjB4NTAucG5nJ1xuICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7ICQgfSBmcm9tICdzcmMvY29yZS9kb20nO1xuXG5mdW5jdGlvbiBhbmltYXRlU2hhcGVzIChzaGFwZXMsIHJlcGVhdCA9IDEsIHJlcGVhdERlbGF5KSB7XG4gIGNvbnN0IHR3ZWVucyA9IHNoYXBlcy5tYXAoKHsgc2hhcGVTZWxlY3Rvciwgb3JpZ2luLCBjb2xvciB9KSA9PiB7XG4gICAgY29uc3QgYmdTaGFwZSA9ICQoc2hhcGVTZWxlY3Rvcik7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBiZ1NoYXBlLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIHJldHVybiBnc2FwLmZyb21UbyhiZ1NoYXBlLCB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgZWFzZTogJ3Bvd2VyMy5vdXQnLFxuICAgICAgcmVwZWF0LFxuICAgICAgeW95bzogdHJ1ZVxuICAgIH0pLnJlcGVhdERlbGF5KHJlcGVhdERlbGF5KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKS5hZGQodHdlZW5zKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVNob3dZIChlbGVtZW50LCBvcmlnaW4pIHtcbiAgcmV0dXJuIGdzYXAudGltZWxpbmUoKS5mcm9tVG8oZWxlbWVudCwge1xuICAgIHk6IG9yaWdpblxuICB9LCB7XG4gICAgeTogMCxcbiAgICBvcGFjaXR5OiAxXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlU2hvd1ggKGVsZW1lbnQsIG9yaWdpbikge1xuICByZXR1cm4gZ3NhcC50aW1lbGluZSgpLmZyb21UbyhlbGVtZW50LCB7XG4gICAgeDogb3JpZ2luLFxuICAgIG9wYWNpdHk6IDBcbiAgfSwge1xuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUluT3V0IChlbGVtZW50LCBkaXJlY3Rpb25LZXksIGFuaW1hdGlvbk9yaWdpbikge1xuICBjb25zdCB0cmFuc2l0aW9uU2V0dXAgPSB7XG4gICAgdG9wOiB7XG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeVBlcmNlbnQ6IC0xMDBcbiAgICAgIH0sXG4gICAgICBzY2FsZToge1xuICAgICAgICBzY2FsZVk6IDAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCdcbiAgICAgIH1cbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeFBlcmNlbnQ6IDEwMFxuICAgICAgfSxcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHNjYWxlWDogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAncmlnaHQnXG4gICAgICB9XG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeFBlcmNlbnQ6IC0xMDBcbiAgICAgIH0sXG4gICAgICBzY2FsZToge1xuICAgICAgICBzY2FsZVg6IDAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnXG4gICAgICB9XG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICB5UGVyY2VudDogMTAwXG4gICAgICB9LFxuICAgICAgc2NhbGU6IHtcbiAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20nXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlLCBzY2FsZSB9ID0gdHJhbnNpdGlvblNldHVwW2RpcmVjdGlvbktleV07XG4gIGNvbnN0IGFuaW1hdGlvbiA9IHtcbiAgICBpbjogKCkgPT4gZ3NhcC50aW1lbGluZSgpXG4gICAgICAuZnJvbShlbGVtZW50LCAyLCB7IC4uLnRyYW5zbGF0ZSwgb3BhY2l0eTogMCwgZWFzZTogJ2V4cG8uaW5PdXQnIH0pXG4gICAgICAuYWRkKGdzYXAuZnJvbShlbGVtZW50LCAxLCB7IC4uLnNjYWxlLCBlYXNlOiAnZXhwby5vdXQnIH0pLCAnLT0xJyksXG4gICAgb3V0OiAoKSA9PiBnc2FwLnRpbWVsaW5lKCkudG8oZWxlbWVudCwgMSwgeyAuLi50cmFuc2xhdGUsIG9wYWNpdHk6IDAsIGVhc2U6ICdleHBvLmluJyB9KVxuICAgICAgLmFkZChnc2FwLnRvKGVsZW1lbnQsIDAuOCwgeyAuLi5zY2FsZSwgZWFzZTogJ2V4cG8uaW4nIH0pLCAnLT0xJylcbiAgfTtcblxuICByZXR1cm4gYW5pbWF0aW9uW2FuaW1hdGlvbk9yaWdpbl0oKTtcbn07XG5cbmV4cG9ydCB7IGFuaW1hdGVTaGFwZXMsIGFuaW1hdGVTaG93WSwgYW5pbWF0ZVNob3dYLCBhbmltYXRlSW5PdXQgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uJztcbiIsIi8qKlxuICogRmluZHMgYW4gSFRNTEVsZW1lbnQgYnkgQ1NTIHNlbGVjdG9yIGluIHRoZSBkb2N1bWVudCBvciBpbnNpZGVcbiAqIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvciAtIENTUyBzZWxlY3Rvci5cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBbbm9kZT1kb2N1bWVudF1cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiAkIChzZWxlY3Rvciwgbm9kZSA9IGRvY3VtZW50KSB7XG4gIHJldHVybiBub2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG4vKipcbiAqIEZpbmRzIGEgbGlzdCBvZiBIVE1MRWxlbWVudHMgYnkgQ1NTIHNlbGVjdG9yIGluIHRoZSBkb2N1bWVudCBvciBpbnNpZGVcbiAqIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvciAtIENTUyBzZWxlY3Rvci5cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBbbm9kZT1kb2N1bWVudF1cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50W119XG4gKi9cbmZ1bmN0aW9uICQkIChzZWxlY3Rvciwgbm9kZSA9IGRvY3VtZW50KSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuXG5leHBvcnQgeyAkLCAkJCB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9kb20nO1xuIiwiaW1wb3J0IHsgJCwgJCQgfSBmcm9tICdzcmMvY29yZS9kb20nO1xuXG5jb25zdCBhZCA9ICQoJy5hZCcpO1xuY29uc3QgaGVhZGxpbmVzID0gJCQoJy5oZWFkbGluZScpO1xuY29uc3QgbWFpbkhlYWRsaW5lID0gJCgnLm1haW4taGVhZGxpbmUnKTtcbmNvbnN0IGhvdmVySGVhZGxpbmUgPSAkKCcuaG92ZXItaGVhZGxpbmUnKTtcbmNvbnN0IG1haW5DVEEgPSAkKCcubWFpbi1jdGEnKTtcbmNvbnN0IGRpc2NsYWltZXIgPSAkKCcuZGlzY2xhaW1lci1jb250YWluZXInKTtcbmNvbnN0IGRpc2NsYWltZXJDbG9zZSA9ICQoJy5kaXNjbGFpbWVyX19idXR0b24tY2xvc2UnKTtcblxuZXhwb3J0IHsgYWQsIGhlYWRsaW5lcywgbWFpbkhlYWRsaW5lLCBob3ZlckhlYWRsaW5lLCBtYWluQ1RBLCBkaXNjbGFpbWVyLCBkaXNjbGFpbWVyQ2xvc2UgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMnO1xuIiwiaW1wb3J0IHsgJCQgfSBmcm9tICdzcmMvY29yZS9kb20nO1xuXG5jb25zdCBERUZBVUxUX0ZFRURfUEFUSCA9ICdmZWVkcy91c2NlbGx1bGFyL0ZCSS00NDY0L3N0b3Jlcy8nO1xuY29uc3QgUkVQTEFDRV9RVUVSWSA9ICdbcGxhY2VdJztcbmNvbnN0IEZBTExCQUNLX1FVRVJZID0gJ3lvdXIgdG93bic7XG5cbmZ1bmN0aW9uIHN0b3JlTG9jYXRvciAoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBsb2NhdG9yUGF0aCA9IG15RlQuaW5zdGFudEFkcy5mZWVkUGF0aCB8fCBERUZBVUxUX0ZFRURfUEFUSDtcbiAgICBteUZULnJlcXVpcmUoWydzdG9yZWxvY2F0b3InXSwgKFN0b3JlTG9jYXRvcikgPT4ge1xuICAgICAgY29uc3Qgc2wgPSBuZXcgU3RvcmVMb2NhdG9yKHtcbiAgICAgICAgbG9jYXRvclBhdGgsIC8vIGZlZWQgcGF0aCBkeW5hbWljIHZhcmlhYmxlIG5hbWVkIGZlZWRQYXRoIHdpdGggYmFja3VwXG4gICAgICAgIG51bWJlclRvUmV0dXJuOiAxLCAvLyBvcHRpb25hbFxuICAgICAgICBtYXhEaXN0YW5jZU1pbGVzOiA4ODAsIC8vIG9wdGlvbmFsLS1hZGp1c3QgdG8gbWF4IGRpc3RhbmNlIHRoZSBzdG9yZWxvY2F0b3Igd2lsbCByZXR1cm4gcmVzdWx0cyBmb3IuIElmIG5vIHJlc3VsdHMgcmV0dXJuZWQvbm8gbG9jYXRpb24gd2l0aGluIG1heERpc3RhbmNlTWlsZXMsIHRoZW4gdGhlIHN0b3JlbG9jYXRvciAnZXJyb3InIGhhbmRsZXIgd2lsbCB0cmlnZ2VyIChiZWxvdylcbiAgICAgICAgbG9jYXRpb25PcmRlcjogWydpbXByZXNzaW9uJ10gLy8gb3B0aW9uYWxcbiAgICAgIH0pO1xuICAgICAgc2wub24oJ3N0b3Jlc2ZvdW5kJywgKFtzdG9yZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTWF4Q2hhcmFjdGVyID0gc3RvcmVzLmNpdHluYW1lLmxlbmd0aCA8PSAxMztcbiAgICAgICAgZmluZE11dGFibGVIZWFkaW5ncygpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSByZXBsYWNlSGVhZGluZ1ZhbHVlKGVsZW1lbnQsIGlzTWF4Q2hhcmFjdGVyID8gc3RvcmVzLmNpdHluYW1lIDogRkFMTEJBQ0tfUVVFUlkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5pbmZvKCdTdG9yZSBWYWx1ZSBSZXR1cm5lZDogJywgc3RvcmVzKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgICBzbC5vbignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIGZpbmRNdXRhYmxlSGVhZGluZ3MoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVwbGFjZUhlYWRpbmdWYWx1ZShlbGVtZW50LCBGQUxMQkFDS19RVUVSWSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICAgIHNsLmluaXQoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIZWFkaW5nVmFsdWUgKGVsZW1lbnQsIHN0b3JlTG9jYXRvclZhbHVlKSB7XG4gIHJldHVybiBlbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKFJFUExBQ0VfUVVFUlksIHN0b3JlTG9jYXRvclZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZmluZE11dGFibGVIZWFkaW5ncyAoKSB7XG4gIGNvbnN0IGhlYWRpbmdzID0gJCQoJy5oZWFkbGluZV9fdGV4dCcpO1xuICBjb25zdCBpbmNsdWRlc1BsYWNlcyA9IChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dC5pbmRleE9mKCdbcGxhY2VdJykgPiAtMTtcbiAgcmV0dXJuIGhlYWRpbmdzLmZpbHRlcihpbmNsdWRlc1BsYWNlcyk7XG59XG5cbmV4cG9ydCB7IHN0b3JlTG9jYXRvciB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi91dGxpcyc7XG4iLCJpbXBvcnQgeyBhZCwgbWFpbkhlYWRsaW5lIH0gZnJvbSAnLi4vZWxlbWVudHMnO1xuXG5jb25zdCBzaHJpbmtDbGFzc2VzID0gWydhZC0tc2hyaW5rLW1lZGl1bScsICdhZC0tc2hyaW5rLXNtYWxsJywgJ2FkLS1zaHJpbmstZXh0cmEtc21hbGwnXTtcblxuLyoqXG4gKiBMb29wIHRvIGZpbmQgZWRnZSBjYXNlIGNsYXNzIHVudGlsIGNvbnRlbnQgZG9lcyBub3Qgb3ZlcmZsb3cgb3IgaXQgZ2V0cyB0aGUgc21hbGxlc3QgY2xhc3NcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD59IGVsZW1lbnRzIFRoZSBlbG1lbnQgb3IgZWxtZW50cyB0byBnZXQgdGhlIHRvdGFsIGhlaWdodCBhbmQgd2lkdGhcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBwYXJlbnQgVGhlIGVsZW1lbnQgdG8gYWRkIHRoZSBmaW5hbCBjbGFzc1xuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciBUaGUgZWxlbWVudCB0byBjaGVjayBpZiBpdHMgY2hpbGRyZW4gb3ZlcmZsb3cgaXRcbiAqL1xuXG5mdW5jdGlvbiBzZXRTaHJpbmtDbGFzcyAoZWxlbWVudHMsIHBhcmVudCA9IGFkLCBjb250YWluZXIgPSBtYWluSGVhZGxpbmUpIHtcbiAgLy8gSXQgaGFzIHRvIGJlIHRoaXMgd2F5IGJlY2F1c2UgSUUgZG9lcyBub3Qgc3VwcG9ydCByZW1vdmUoLi5bXSkgaXQgYXBwZWFyIHRvIGJlIGEgcG9seWZpbGwgaXNzdWVcbiAgc2hyaW5rQ2xhc3Nlcy5mb3JFYWNoKHN0cmluZ0NsYXNzID0+IHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKHN0cmluZ0NsYXNzKSk7XG4gIGxldCBzaHJpbmtQaGFzZSA9IDA7XG5cbiAgZnVuY3Rpb24gY2FsY1NocmluayAoKSB7XG4gICAgLy8gR2V0IHRoZSB0b3RhbCBoZWlnaHQgb2YgY2hpbGRyZW4gZWxlbWVudHMuXG4gICAgY29uc3QgZWxlbWVudHNIZWlnaHQgPSBlbGVtZW50cy5yZWR1Y2U/LigodG90YWxIZWlnaHQsIGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiB0b3RhbEhlaWdodCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0sIDApIHx8IGVsZW1lbnRzLm9mZnNldEhlaWdodDtcblxuICAgIC8vIEdldCB0aGUgd2lkZXIgZWxlbWVudCB2YWx1ZVxuICAgIGNvbnN0IGVsZW1lbnRzV2lkdGggPSBNYXRoLm1heCguLi4oZWxlbWVudHMubWFwPy4oKHsgb2Zmc2V0V2lkdGggfSkgPT4ge1xuICAgICAgcmV0dXJuIG9mZnNldFdpZHRoO1xuICAgIH0pIHx8IFtlbGVtZW50cy5vZmZzZXRXaWR0aF0pKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGNoaWxkcmVuIHNpemVzIG92ZXJmbG93cyBjb250YWluZXIgYW5kIGFwcGx5XG4gICAgICogVGhlIHByb2Nlc3MgaXMgcmVwZWF0ZSB0aGUgcHJvY2Nlc3MgdW50aWwgY2hpbGRyZW5kIGRvbnQgb3ZlcmZsb3cgb3IgdGhlIGxhc3QgY2xhc3MgaXMgYXBwbGllZFxuICAgICAqL1xuICAgIGlmIChjb250YWluZXIub2Zmc2V0SGVpZ2h0IDwgZWxlbWVudHNIZWlnaHQgfHwgY29udGFpbmVyLm9mZnNldFdpZHRoIDwgZWxlbWVudHNXaWR0aCkge1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoc2hyaW5rQ2xhc3Nlc1tzaHJpbmtQaGFzZV0pO1xuICAgICAgc2hyaW5rUGhhc2UgKz0gMTtcbiAgICAgIGlmIChzaHJpbmtQaGFzZSA8IHNocmlua0NsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIGNhbGNTaHJpbmsoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FsY1NocmluaygpO1xufVxuXG5mdW5jdGlvbiBzZXRDb250YWluZXJDbGFzcyAoeyByZW1vdmUsIGFkZCwgc2hyaW5rT3B0aW9ucywgb3ZlcndyaXRlIH0pIHtcbiAgY29uc3QgWyBtZWRpdW0sIHNtYWxsLCBleHRyYVNtYWxsIF0gPSBzaHJpbmtDbGFzc2VzO1xuICBjb25zdCB7IGVsZW1lbnRzLCBwYXJlbnQsIGNvbnRhaW5lciB9ID0gc2hyaW5rT3B0aW9ucztcbiAgY29uc3Qgb3ZlcndyaXRlT3B0aW9ucyA9IHtcbiAgICAnTCc6ICdkZWZhdWx0JyxcbiAgICAnTSc6IG1lZGl1bSxcbiAgICAnUyc6IHNtYWxsLFxuICAgICdYUyc6IGV4dHJhU21hbGxcbiAgfTtcbiAgY29uc3Qgb3ZlcndyaXRlQ2xhc3MgPSBvdmVyd3JpdGVPcHRpb25zW292ZXJ3cml0ZV07XG4gIGlmIChyZW1vdmUpIG1haW5IZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKHJlbW92ZSk7XG4gIGlmIChhZGQpIG1haW5IZWFkbGluZS5jbGFzc0xpc3QuYWRkKGFkZCk7XG4gIGlmIChvdmVyd3JpdGVDbGFzcykge1xuICAgIHNocmlua0NsYXNzZXMuZm9yRWFjaChzdHJpbmdDbGFzcyA9PiBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShzdHJpbmdDbGFzcykpO1xuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKG92ZXJ3cml0ZUNsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRTaHJpbmtDbGFzcyhlbGVtZW50cywgcGFyZW50LCBjb250YWluZXIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHNldFNocmlua0NsYXNzLCBzaHJpbmtDbGFzc2VzLCBzZXRDb250YWluZXJDbGFzcyB9O1xuIiwiaW1wb3J0IHsgc2V0dXBBZCB9IGZyb20gJ0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtYWQvbGliL3ZhbmlsbGEnO1xuaW1wb3J0IHsgb25DaGFuZ2VUYWJFdmVudCB9IGZyb20gJ0BodWdlbWRlL2FkbWlyZS1kZXYtdG9vbHMtdG9vbHMvbGliL2NoYW5nZVRhYkV2ZW50JztcblxuZnVuY3Rpb24gc2V0RHluYW1pY1ZhbHVlcyAoZmllbGRzLCB2YWx1ZXMsIGRvbUVsZW1lbnRzKSB7XG4gIGZpZWxkcy5mb3JFYWNoKCh7IHR5cGUsIHZhbHVlS2V5LCBhbHRUZXh0LCBjb2xvcktleSB9KSA9PiB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRzW3ZhbHVlS2V5XTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBkb21FbGVtZW50LmlubmVySFRNTCA9IHZhbHVlc1t2YWx1ZUtleV0gfHwgJyc7XG4gICAgICAgIGlmIChjb2xvcktleSkge1xuICAgICAgICAgIGRvbUVsZW1lbnQuc3R5bGUuY29sb3IgPSB2YWx1ZXNbY29sb3JLZXldO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICBkb21FbGVtZW50LnNyYyA9IHZhbHVlc1t2YWx1ZUtleV07XG4gICAgICAgIGlmIChteUZULmluc3RhbnRBZHNbYCR7dmFsdWVLZXl9QWx0VGV4dGBdKSBkb21FbGVtZW50LmFsdCA9IG15RlQuaW5zdGFudEFkc1tgJHt2YWx1ZUtleX1BbHRUZXh0YF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzY2xhaW1lciAob3BlbiwgZG9tRWxlbWVudHMpIHtcbiAgaWYgKG9wZW4pIHtcbiAgICBkb21FbGVtZW50cy5kaXNjbGFpbWVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNjbGFpbWVyX19jb250YWluZXItLW9wZW4nKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb21FbGVtZW50cy5kaXNjbGFpbWVyQ2xvc2VCdXR0b24uZm9jdXMoKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSwgMjAwKTtcbiAgfSBlbHNlIHtcbiAgICBkb21FbGVtZW50cy5kaXNjbGFpbWVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2NsYWltZXJfX2NvbnRhaW5lci0tb3BlbicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9tRWxlbWVudHMuZXhpdC5mb2N1cygpO1xuICAgIH0sIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBFdmVudHMgKGFwcGx5Q2xpY2tUYWdzLCB2YWx1ZXMsIGdldE1haW5UaW1lbGluZSwgZG9tRWxlbWVudHMpIHtcbiAgZG9tRWxlbWVudHMuZGlzY2xhaW1lckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZURpc2NsYWltZXIodHJ1ZSwgZG9tRWxlbWVudHMpKTtcbiAgZG9tRWxlbWVudHMubG9nby5mb2N1cygpO1xuICBkb21FbGVtZW50cy5kaXNjbGFpbWVyQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVEaXNjbGFpbWVyKGZhbHNlLCBkb21FbGVtZW50cykpO1xuICBhcHBseUNsaWNrVGFncyhkb21FbGVtZW50cyk7XG5cbiAgb25DaGFuZ2VUYWJFdmVudCh2aXNpYmlsaXR5ID0+IHtcbiAgICBjb25zdCB7IHRpbWVsaW5lIH0gPSB3aW5kb3cuYWQ7XG5cbiAgICBpZiAodmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIC8vIElmIHRhYiBpcyBoaWRkZW4gd2hlbiB0aGUgYWQgd2FzIGluIHRoZSBtaWRkbGUgb2Ygc2hvd2luZyxcbiAgICAgIC8vIGdvIHRvIHRoZSBlbmQgb2YgdGhlIGFuaW1hdGlvbi5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIHRpbWVsaW5lPy5wcm9ncmVzcygxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGFiIGlzIHZpc2libGUgYW5kIGFuaW1hdGlvbiBub3QgY3JlYXRlZCwgY3JlYXRlIGl0LlxuICAgICAgaWYgKCF0aW1lbGluZSkge1xuICAgICAgICB3aW5kb3cuYWQudGltZWxpbmUgPSBnZXRNYWluVGltZWxpbmUoZG9tRWxlbWVudHMsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRlRDbGlja1RhZ3MgKGRvbUVsZW1lbnRzKSB7XG4gIG15RlQuYXBwbHlDbGlja1RhZyhkb21FbGVtZW50cy5leGl0LCAxLCBteUZULmluc3RhbnRBZHMuYmdVUkwpO1xuICBteUZULmFwcGx5Q2xpY2tUYWcoZG9tRWxlbWVudHM/LmN0YSwgMiwgbXlGVC5pbnN0YW50QWRzLmN0YVVSTCk7XG59XG5cbmZ1bmN0aW9uIGFkZENsaWNrVGFncyAoZG9tRWxlbWVudHMpIHtcbiAgZG9tRWxlbWVudHMuZXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5vcGVuKHdpbmRvdy5jbGlja1RhZzEpKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICBkb21FbGVtZW50cz8uY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gd2luZG93Lm9wZW4od2luZG93LmNsaWNrVGFnMikpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRlRBcHAgKHsgZmllbGRzLCBleHRlbmRlZEZ1bmN0aW9uLCBleHRyYVZhbHVlcywgZ2V0TWFpblRpbWVsaW5lLCBpbWFnZUFzc2V0cywgZG9tRWxlbWVudHMgfSkge1xuICBteUZULm9uKCdpbnN0YW50YWRzJywgKCkgPT4ge1xuICAgIHNldHVwQWQoe1xuICAgICAgcG9saXRlUmVzb3VyY2VzOiBbe1xuICAgICAgICBpbWFnZXM6IGltYWdlQXNzZXRzLm1hcCgoeyB1cmwgfSkgPT4gdXJsKVxuICAgICAgfV0sXG4gICAgICBvbkNvbXBsZXRlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHsgLi4ubXlGVC5pbnN0YW50QWRzLCAuLi5leHRyYVZhbHVlcyB9O1xuICAgICAgICB3aW5kb3cuYWQgPSB7fTtcbiAgICAgICAgc2V0RHluYW1pY1ZhbHVlcyhmaWVsZHMsIHZhbHVlcywgZG9tRWxlbWVudHMpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIGF3YWl0IGV4dGVuZGVkRnVuY3Rpb24/LigpO1xuICAgICAgICBzZXR1cEV2ZW50cyhhZGRGVENsaWNrVGFncywgdmFsdWVzLCBnZXRNYWluVGltZWxpbmUsIGRvbUVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVBcHAgKHsgZmllbGRzLCBleHRlbmRlZEZ1bmN0aW9uLCB2YWx1ZXMsIGltYWdlQXNzZXRzLCBnZXRNYWluVGltZWxpbmUsIGRvbUVsZW1lbnRzIH0pIHtcbiAgc2V0dXBBZCh7XG4gICAgcG9saXRlUmVzb3VyY2VzOiBbe1xuICAgICAgaW1hZ2VzOiBpbWFnZUFzc2V0cy5tYXAoKHsgdXJsIH0pID0+IHVybClcbiAgICB9XSxcbiAgICBvbkNvbXBsZXRlOiBhc3luYyAoKSA9PiB7XG4gICAgICB3aW5kb3cuYWQgPSB7fTtcbiAgICAgIHNldER5bmFtaWNWYWx1ZXMoZmllbGRzLCB2YWx1ZXMsIGRvbUVsZW1lbnRzKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIGF3YWl0IGV4dGVuZGVkRnVuY3Rpb24/LigpO1xuICAgICAgc2V0dXBFdmVudHMoYWRkQ2xpY2tUYWdzLCB2YWx1ZXMsIGdldE1haW5UaW1lbGluZSwgZG9tRWxlbWVudHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVBcHAsIGluaXRpYWxpemVGVEFwcCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==