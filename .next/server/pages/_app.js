module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-block-ui/style.css":
/*!***********************************************!*\
  !*** ./node_modules/react-block-ui/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_block_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-block-ui */ "react-block-ui");
/* harmony import */ var react_block_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_block_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_block_ui_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-block-ui/style.css */ "./node_modules/react-block-ui/style.css");
/* harmony import */ var react_block_ui_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_block_ui_style_css__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "D:\\Projects\\client\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 //nprogress module

 //styles of nprogress



 //Binding events. 

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done());

function MyApp({
  Component,
  pageProps
}) {
  const store = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useStore"])();
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    0: blockUi,
    1: setBlockUi
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  axios__WEBPACK_IMPORTED_MODULE_9___default.a.interceptors.request.use(con => {
    let config = store.getState().config;
    setBlockUi(true);
    if (config.auth) if (config.auth.token) con.headers.Authorization = `${config.auth.token}`;
    return con;
  }, err => Promise.reject(err));
  axios__WEBPACK_IMPORTED_MODULE_9___default.a.interceptors.response.use(response => {
    setBlockUi(false);
    return response;
  }, error => {
    if (error.response && error.response.status === 401) {
      store.dispatch({
        type: "SIGN_OUT"
      });
      route.push("/account?redirect=" + window.location.pathname);
    }

    setBlockUi(false);
    return Promise.reject(error);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/owl.carousel.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/style.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/animate.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/responsive.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "/css/additional.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/owl.carousel.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/tabheader.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/wow.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/js/scripts.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__["PersistGate"], {
      persistor: store.__persistor,
      loading: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Initializing application..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 59
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_block_ui__WEBPACK_IMPORTED_MODULE_10___default.a, {
        tag: "div",
        blocking: blockUi,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_3__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let initState = {
  currency: {
    code: "INR",
    id: 4,
    status: 1,
    title: "INR",
    value: 1
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      let nextState = _objectSpread({}, state);

      return nextState;

    case 'SET_CURRENCY':
      let nextStateup = _objectSpread(_objectSpread({}, state), {
        currency: action.payload
      });

      return nextStateup;

    case 'ADD_TO_CART':
      let cartAfterAdd = _objectSpread(_objectSpread({}, state), {
        cart: action.payload
      });

      return cartAfterAdd;

    case 'REMOVE_FROM_CART':
      let cartAfterRemove = _objectSpread(_objectSpread({}, state), {
        cart: action.payload
      });

      return cartAfterRemove;

    case 'USER_LOGIN':
      let afterLogin = _objectSpread(_objectSpread({}, state), {
        auth: action.payload
      });

      return afterLogin;

    case 'SET_ORDER':
      let afterOrder = _objectSpread(_objectSpread({}, state), {
        order: action.payload
      });

      return afterOrder;

    case 'SIGN_OUT':
      let afterLogout = _objectSpread({}, state);

      delete afterLogout.auth;
      return afterLogout;

    default:
      return state;
  }
};

const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  config: reducer
}); // BINDING MIDDLEWARE

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const makeStore = ({
  isServer
}) => {
  if (isServer) {
    //If it's on server side, create a store
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(combinedReducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a]));
  } else {
    //If it's on client side, create a store which will persist
    const {
      persistStore,
      persistReducer
    } = __webpack_require__(/*! redux-persist */ "redux-persist");

    const storage = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage").default;

    const persistConfig = {
      key: "gandhiStore",
      whitelist: ["config"],
      // only counter will be persisted, add other reducers if needed
      storage // if needed, use a safer storage

    };
    const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

    const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a])); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
}; // export an assembled wrapper


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-block-ui":
/*!*********************************!*\
  !*** external "react-block-ui" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-block-ui");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJsb2NrLXVpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiUm91dGVyIiwiZXZlbnRzIiwib24iLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJyb3V0ZSIsInVzZVJvdXRlciIsImJsb2NrVWkiLCJzZXRCbG9ja1VpIiwidXNlU3RhdGUiLCJheGlvcyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb24iLCJjb25maWciLCJnZXRTdGF0ZSIsImF1dGgiLCJ0b2tlbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiZXJyb3IiLCJzdGF0dXMiLCJkaXNwYXRjaCIsInR5cGUiLCJwdXNoIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl9fcGVyc2lzdG9yIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImluaXRTdGF0ZSIsImN1cnJlbmN5IiwiY29kZSIsImlkIiwidGl0bGUiLCJ2YWx1ZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJuZXh0U3RhdGV1cCIsInBheWxvYWQiLCJjYXJ0QWZ0ZXJBZGQiLCJjYXJ0IiwiY2FydEFmdGVyUmVtb3ZlIiwiYWZ0ZXJMb2dpbiIsImFmdGVyT3JkZXIiLCJvcmRlciIsImFmdGVyTG9nb3V0IiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJtYWtlU3RvcmUiLCJpc1NlcnZlciIsImNyZWF0ZVN0b3JlIiwidGh1bmtNaWRkbGV3YXJlIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJzdG9yYWdlIiwiZGVmYXVsdCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FB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QSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyAvL25wcm9ncmVzcyBtb2R1bGVcbmltcG9ydCAnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnOyAvL3N0eWxlcyBvZiBucHJvZ3Jlc3NcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBCbG9ja1VpIGZyb20gJ3JlYWN0LWJsb2NrLXVpJztcbmltcG9ydCAncmVhY3QtYmxvY2stdWkvc3R5bGUuY3NzJztcblxuLy9CaW5kaW5nIGV2ZW50cy4gXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYmxvY2tVaSwgc2V0QmxvY2tVaV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb24pID0+IHtcbiAgICBsZXQgY29uZmlnID0gc3RvcmUuZ2V0U3RhdGUoKS5jb25maWdcbiAgICBzZXRCbG9ja1VpKHRydWUpO1xuICAgIGlmIChjb25maWcuYXV0aClcbiAgICAgIGlmIChjb25maWcuYXV0aC50b2tlbilcbiAgICAgICAgY29uLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGAke2NvbmZpZy5hdXRoLnRva2VufWA7XG5cbiAgICByZXR1cm4gY29uO1xuICB9LFxuICAgIChlcnIpID0+IFByb21pc2UucmVqZWN0KGVycilcbiAgKTtcblxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0QmxvY2tVaShmYWxzZSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSxcbiAgICBlcnJvciA9PiB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBcIlNJR05fT1VUXCIgfSk7XG4gICAgICAgIHJvdXRlLnB1c2goXCIvYWNjb3VudD9yZWRpcmVjdD1cIiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICB9XG4gICAgICBzZXRCbG9ja1VpKGZhbHNlKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9vd2wuY2Fyb3VzZWwuY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3N0eWxlLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4yLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2FuaW1hdGUubWluLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9yZXNwb25zaXZlLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9hZGRpdGlvbmFsLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL293bC5jYXJvdXNlbC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy90YWJoZWFkZXIuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvd293LmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL3NjcmlwdHMuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQZXJzaXN0R2F0ZSBwZXJzaXN0b3I9e3N0b3JlLl9fcGVyc2lzdG9yfSBsb2FkaW5nPXs8ZGl2PkluaXRpYWxpemluZyBhcHBsaWNhdGlvbi4uLjwvZGl2Pn0+XG4gICAgICAgIDxCbG9ja1VpIHRhZz1cImRpdlwiIGJsb2NraW5nPXtibG9ja1VpfT5cblxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgICAgICA8L0Jsb2NrVWk+XG4gICAgICA8L1BlcnNpc3RHYXRlPlxuICAgIDwvRnJhZ21lbnQ+KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5cclxubGV0IGluaXRTdGF0ZSA9IHtcclxuICAgIGN1cnJlbmN5OiB7XHJcbiAgICAgICAgY29kZTogXCJJTlJcIixcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBzdGF0dXM6IDEsXHJcbiAgICAgICAgdGl0bGU6IFwiSU5SXCIsXHJcbiAgICAgICAgdmFsdWU6IDFcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICBsZXQgbmV4dFN0YXRlID0geyAuLi5zdGF0ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGVcclxuICAgICAgICBjYXNlICdTRVRfQ1VSUkVOQ1knOlxyXG4gICAgICAgICAgICBsZXQgbmV4dFN0YXRldXAgPSB7IC4uLnN0YXRlLCAuLi57IGN1cnJlbmN5OiBhY3Rpb24ucGF5bG9hZCB9IH1cclxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZXVwXHJcbiAgICAgICAgY2FzZSAnQUREX1RPX0NBUlQnOlxyXG4gICAgICAgICAgICBsZXQgY2FydEFmdGVyQWRkID0geyAuLi5zdGF0ZSwgLi4ueyBjYXJ0OiBhY3Rpb24ucGF5bG9hZCB9IH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhcnRBZnRlckFkZFxyXG4gICAgICAgIGNhc2UgJ1JFTU9WRV9GUk9NX0NBUlQnOlxyXG4gICAgICAgICAgICBsZXQgY2FydEFmdGVyUmVtb3ZlID0geyAuLi5zdGF0ZSwgLi4ueyBjYXJ0OiBhY3Rpb24ucGF5bG9hZCB9IH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhcnRBZnRlclJlbW92ZVxyXG4gICAgICAgIGNhc2UgJ1VTRVJfTE9HSU4nOlxyXG4gICAgICAgICAgICBsZXQgYWZ0ZXJMb2dpbiA9IHsgLi4uc3RhdGUsIC4uLnsgYXV0aDogYWN0aW9uLnBheWxvYWQgfSB9XHJcbiAgICAgICAgICAgIHJldHVybiBhZnRlckxvZ2luO1xyXG4gICAgICAgIGNhc2UgJ1NFVF9PUkRFUic6XHJcbiAgICAgICAgICAgIGxldCBhZnRlck9yZGVyID0geyAuLi5zdGF0ZSwgLi4ueyBvcmRlcjogYWN0aW9uLnBheWxvYWQgfSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gYWZ0ZXJPcmRlcjtcclxuICAgICAgICBjYXNlICdTSUdOX09VVCc6XHJcbiAgICAgICAgICAgIGxldCBhZnRlckxvZ291dCA9IHsgLi4uc3RhdGUgfVxyXG4gICAgICAgICAgICBkZWxldGUgYWZ0ZXJMb2dvdXQuYXV0aDtcclxuICAgICAgICAgICAgcmV0dXJuIGFmdGVyTG9nb3V0O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb25maWc6IHJlZHVjZXJcclxufSlcclxuXHJcblxyXG4vLyBCSU5ESU5HIE1JRERMRVdBUkVcclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTtcclxuICAgICAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcclxufTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICh7IGlzU2VydmVyIH0pID0+IHtcclxuICAgIGlmIChpc1NlcnZlcikge1xyXG4gICAgICAgIC8vSWYgaXQncyBvbiBzZXJ2ZXIgc2lkZSwgY3JlYXRlIGEgc3RvcmVcclxuICAgICAgICByZXR1cm4gY3JlYXRlU3RvcmUoY29tYmluZWRSZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbdGh1bmtNaWRkbGV3YXJlXSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL0lmIGl0J3Mgb24gY2xpZW50IHNpZGUsIGNyZWF0ZSBhIHN0b3JlIHdoaWNoIHdpbGwgcGVyc2lzdFxyXG4gICAgICAgIGNvbnN0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9ID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpLmRlZmF1bHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICAgICAgICAgIGtleTogXCJnYW5kaGlTdG9yZVwiLFxyXG4gICAgICAgICAgICB3aGl0ZWxpc3Q6IFtcImNvbmZpZ1wiXSwgLy8gb25seSBjb3VudGVyIHdpbGwgYmUgcGVyc2lzdGVkLCBhZGQgb3RoZXIgcmVkdWNlcnMgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgIHN0b3JhZ2UsIC8vIGlmIG5lZWRlZCwgdXNlIGEgc2FmZXIgc3RvcmFnZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCBjb21iaW5lZFJlZHVjZXIpOyAvLyBDcmVhdGUgYSBuZXcgcmVkdWNlciB3aXRoIG91ciBleGlzdGluZyByZWR1Y2VyXHJcblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgICAgIHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICAgICAgICAgIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKVxyXG4gICAgICAgICk7IC8vIENyZWF0aW5nIHRoZSBzdG9yZSBhZ2FpblxyXG5cclxuICAgICAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7IC8vIFRoaXMgY3JlYXRlcyBhIHBlcnNpc3RvciBvYmplY3QgJiBwdXNoIHRoYXQgcGVyc2lzdGVkIG9iamVjdCB0byAuX19wZXJzaXN0b3IsIHNvIHRoYXQgd2UgY2FuIGF2YWlsIHRoZSBwZXJzaXN0YWJpbGl0eSBmZWF0dXJlXHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ibG9jay11aVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=