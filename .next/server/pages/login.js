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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Error.tsx":
/*!******************************!*\
  !*** ./components/Error.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/rjshoemaker/Documents/code/projects/goal-reminder-app/components/Error.tsx\";\n\nconst Error = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"error-wrapper\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"error-text\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Vycm9yLnRzeD8xM2FlIl0sIm5hbWVzIjpbIkVycm9yIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM5QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLGdCQUE2QkE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUWVELG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FcnJvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFcnJvciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZXJyb3Itd3JhcHBlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZXJyb3ItdGV4dCc+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Error.tsx\n");

/***/ }),

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  apiKey: 'AIzaSyBOp3iVvlRq-BYhB49BoV66Aa6dbOTLexE',\n  authDomain: 'goal-tracker-67393.firebaseapp.com',\n  projectId: 'goal-tracker-67393',\n  storageBucket: 'goal-tracker-67393.appspot.com',\n  messagingSenderId: '177978554355',\n  appId: '1:177978554355:web:2ee245dfe6d639fcdfc486',\n  measurementId: 'G-NZ9LQC0FFZ'\n};\n\nif (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\n} else {\n  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS50cz9kZDBhIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUUseUNBREs7QUFFYkMsWUFBVSxFQUFFLG9DQUZDO0FBR2JDLFdBQVMsRUFBRSxvQkFIRTtBQUliQyxlQUFhLEVBQUUsZ0NBSkY7QUFLYkMsbUJBQWlCLEVBQUUsY0FMTjtBQU1iQyxPQUFLLEVBQUUsMkNBTk07QUFPYkMsZUFBYSxFQUFFO0FBUEYsQ0FBZjs7QUFVQSxJQUFJLENBQUNDLCtDQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekJGLGlEQUFRLENBQUNHLGFBQVQsQ0FBdUJYLE1BQXZCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xRLGlEQUFRLENBQUNJLEdBQVQ7QUFDRDs7QUFFY0osOEdBQWYiLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcblxuY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6ICdBSXphU3lCT3AzaVZ2bFJxLUJZaEI0OUJvVjY2QWE2ZGJPVExleEUnLFxuICBhdXRoRG9tYWluOiAnZ29hbC10cmFja2VyLTY3MzkzLmZpcmViYXNlYXBwLmNvbScsXG4gIHByb2plY3RJZDogJ2dvYWwtdHJhY2tlci02NzM5MycsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdnb2FsLXRyYWNrZXItNjczOTMuYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzE3Nzk3ODU1NDM1NScsXG4gIGFwcElkOiAnMToxNzc5Nzg1NTQzNTU6d2ViOjJlZTI0NWRmZTZkNjM5ZmNkZmM0ODYnLFxuICBtZWFzdXJlbWVudElkOiAnRy1OWjlMUUMwRkZaJ1xufVxuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKVxufSBlbHNlIHtcbiAgZmlyZWJhc2UuYXBwKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Error */ \"./components/Error.tsx\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.ts\");\n\n\nvar _jsxFileName = \"/Users/rjshoemaker/Documents/code/projects/goal-reminder-app/pages/login.tsx\";\n\n\n\n\n\n\nconst Login = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    0: page,\n    1: setPage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('login');\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: errors,\n    1: setErrors\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: '',\n    email: '',\n    password: ''\n  });\n  const {\n    0: loginError,\n    1: setLoginError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''); // Capture form submit\n\n  const submitRegister = e => {\n    e.preventDefault();\n    let newUser = {\n      name,\n      email,\n      password\n    }; // Validate user object\n\n    const validationResult = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"validate\"])(newUser); // If no errors, add new user to auth database\n\n    if (validationResult.noErrors) {\n      _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then(userCredential => {\n        let newAuthUser = userCredential.user; // Create new user object in realtime database\n\n        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"writeUserData\"])(newAuthUser.uid, newUser.name, newAuthUser.email); // Redirect to dashboard\n\n        router.push('/home');\n      }).catch(error => {\n        console.log(error);\n      });\n    } // Set errrors state to match errors returned from validate\n\n\n    return setErrors({\n      name: validationResult.name === '' ? '' : validationResult.name,\n      email: validationResult.email === '' ? '' : validationResult.email,\n      password: validationResult.password === '' ? '' : validationResult.password\n    });\n  };\n\n  const submitLogin = e => {\n    e.preventDefault();\n    _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signInWithEmailAndPassword(email, password).then(userCredential => {\n      let existAuthUser = userCredential.user;\n      router.push('/home');\n    }).catch(error => {\n      console.log(error);\n      setLoginError(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"handleError\"])(error));\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    onSubmit: page === 'register' ? submitRegister : submitLogin,\n    children: [page === 'register' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        placeholder: \"Name\",\n        onChange: e => setName(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: errors.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      placeholder: \"Email\",\n      onChange: e => setEmail(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: errors.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      placeholder: \"Password\",\n      type: \"password\",\n      onChange: e => setPassword(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: errors.password\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: loginError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      children: page === 'register' ? 'Register' : 'Login'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => setPage(page === 'login' ? 'register' : 'login'),\n      children: page === 'register' ? 'login' : 'Register'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi50c3g/ZDc1ZiJdLCJuYW1lcyI6WyJMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInBhZ2UiLCJzZXRQYWdlIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwibG9naW5FcnJvciIsInNldExvZ2luRXJyb3IiLCJzdWJtaXRSZWdpc3RlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1VzZXIiLCJ2YWxpZGF0aW9uUmVzdWx0IiwidmFsaWRhdGUiLCJub0Vycm9ycyIsImZpcmViYXNlIiwiYXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsIm5ld0F1dGhVc2VyIiwidXNlciIsIndyaXRlVXNlckRhdGEiLCJ1aWQiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRMb2dpbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZXhpc3RBdXRoVXNlciIsImhhbmRsZUVycm9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsT0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CSixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7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b0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UnXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvcidcbmltcG9ydCB7IE5ld1VzZXIsIEV4aXN0VXNlciB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJ1xuaW1wb3J0IHsgdmFsaWRhdGUsIHdyaXRlVXNlckRhdGEsIGhhbmRsZUVycm9yIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycydcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKCdsb2dpbicpXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoeyBuYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfSlcbiAgY29uc3QgW2xvZ2luRXJyb3IsIHNldExvZ2luRXJyb3JdID0gdXNlU3RhdGUoJycpXG5cbiAgLy8gQ2FwdHVyZSBmb3JtIHN1Ym1pdFxuICBjb25zdCBzdWJtaXRSZWdpc3RlciA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBuZXdVc2VyOiBOZXdVc2VyID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmRcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSB1c2VyIG9iamVjdFxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZShuZXdVc2VyKVxuXG4gICAgLy8gSWYgbm8gZXJyb3JzLCBhZGQgbmV3IHVzZXIgdG8gYXV0aCBkYXRhYmFzZVxuICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0Lm5vRXJyb3JzKSB7XG4gICAgICBmaXJlYmFzZVxuICAgICAgICAuYXV0aCgpXG4gICAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQobmV3VXNlci5lbWFpbCwgbmV3VXNlci5wYXNzd29yZClcbiAgICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XG4gICAgICAgICAgbGV0IG5ld0F1dGhVc2VyID0gdXNlckNyZWRlbnRpYWwudXNlclxuXG4gICAgICAgICAgLy8gQ3JlYXRlIG5ldyB1c2VyIG9iamVjdCBpbiByZWFsdGltZSBkYXRhYmFzZVxuICAgICAgICAgIHdyaXRlVXNlckRhdGEobmV3QXV0aFVzZXIudWlkLCBuZXdVc2VyLm5hbWUsIG5ld0F1dGhVc2VyLmVtYWlsKVxuXG4gICAgICAgICAgLy8gUmVkaXJlY3QgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFNldCBlcnJyb3JzIHN0YXRlIHRvIG1hdGNoIGVycm9ycyByZXR1cm5lZCBmcm9tIHZhbGlkYXRlXG4gICAgcmV0dXJuIHNldEVycm9ycyh7XG4gICAgICBuYW1lOiB2YWxpZGF0aW9uUmVzdWx0Lm5hbWUgPT09ICcnID8gJycgOiB2YWxpZGF0aW9uUmVzdWx0Lm5hbWUsXG4gICAgICBlbWFpbDogdmFsaWRhdGlvblJlc3VsdC5lbWFpbCA9PT0gJycgPyAnJyA6IHZhbGlkYXRpb25SZXN1bHQuZW1haWwsXG4gICAgICBwYXNzd29yZDpcbiAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5wYXNzd29yZCA9PT0gJycgPyAnJyA6IHZhbGlkYXRpb25SZXN1bHQucGFzc3dvcmRcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc3VibWl0TG9naW4gPSAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBmaXJlYmFzZVxuICAgICAgLmF1dGgoKVxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICBsZXQgZXhpc3RBdXRoVXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXJcblxuICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHNldExvZ2luRXJyb3IoaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3BhZ2UgPT09ICdyZWdpc3RlcicgPyBzdWJtaXRSZWdpc3RlciA6IHN1Ym1pdExvZ2lufT5cbiAgICAgIHtwYWdlID09PSAncmVnaXN0ZXInICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J05hbWUnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPEVycm9yPntlcnJvcnMubmFtZX08L0Vycm9yPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J0VtYWlsJyBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxFcnJvcj57ZXJyb3JzLmVtYWlsfTwvRXJyb3I+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPEVycm9yPntlcnJvcnMucGFzc3dvcmR9PC9FcnJvcj5cbiAgICAgIDxFcnJvcj57bG9naW5FcnJvcn08L0Vycm9yPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICB7cGFnZSA9PT0gJ3JlZ2lzdGVyJyA/ICdSZWdpc3RlcicgOiAnTG9naW4nfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSA9PT0gJ2xvZ2luJyA/ICdyZWdpc3RlcicgOiAnbG9naW4nKX0+XG4gICAgICAgIHtwYWdlID09PSAncmVnaXN0ZXInID8gJ2xvZ2luJyA6ICdSZWdpc3Rlcid9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "./utils/helpers.ts":
/*!**************************!*\
  !*** ./utils/helpers.ts ***!
  \**************************/
/*! exports provided: validate, writeUserData, handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"writeUserData\", function() { return writeUserData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleError\", function() { return handleError; });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\n // validate - Takes in a user object and returns any validation errors and a noErrors boolean\n\nfunction validate(user) {\n  let tempErrors = {\n    name: '',\n    email: '',\n    password: '',\n    noErrors: true\n  };\n  if (user.name === '') tempErrors.name = 'You must enter your name.';\n  let emailPattern = new RegExp(/^((\"[\\w-\\s]+\")|([\\w-]+(?:\\.[\\w-]+)*)|(\"[\\w-\\s]+\")([\\w-]+(?:\\.[\\w-]+)*))(@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)/);\n  if (!emailPattern.test(user.email)) tempErrors.email = 'You must enter a valid email.';\n  let passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');\n  if (!passwordPattern.test(user.password)) tempErrors.password = 'Your password must contain at least 6 characters, one uppercase and one lowercase letter, a number, and a special character.';\n  tempErrors.noErrors = tempErrors.name === '' && tempErrors.email === '' && tempErrors.password === '';\n  return tempErrors;\n} // writeUserdata - takes in a userId (from firebase auth), name, and email, and creates a new\n// profile in the realtime database\n\nfunction writeUserData(userId, name, email) {\n  try {\n    _firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].database().ref('users/' + userId).set({\n      displayName: name,\n      email: email\n    });\n  } catch (err) {\n    console.log(err);\n  }\n} // handleError - takes in an error and returns an error message\n\nfunction handleError(error) {\n  if (error.code === 'auth/user-not-found') {\n    return 'A user with this email does not exist.';\n  }\n\n  if (error.code === 'auth/wrong-password') {\n    return 'Incorrect password.';\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9oZWxwZXJzLnRzP2M5ZWUiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ1c2VyIiwidGVtcEVycm9ycyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibm9FcnJvcnMiLCJlbWFpbFBhdHRlcm4iLCJSZWdFeHAiLCJ0ZXN0IiwicGFzc3dvcmRQYXR0ZXJuIiwid3JpdGVVc2VyRGF0YSIsInVzZXJJZCIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJzZXQiLCJkaXNwbGF5TmFtZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFcnJvciIsImVycm9yIiwiY29kZSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLFNBQVNBLFFBQVQsQ0FBa0JDLElBQWxCLEVBQTBDO0FBQy9DLE1BQUlDLFVBQXNCLEdBQUc7QUFDM0JDLFFBQUksRUFBRSxFQURxQjtBQUUzQkMsU0FBSyxFQUFFLEVBRm9CO0FBRzNCQyxZQUFRLEVBQUUsRUFIaUI7QUFJM0JDLFlBQVEsRUFBRTtBQUppQixHQUE3QjtBQU9BLE1BQUlMLElBQUksQ0FBQ0UsSUFBTCxLQUFjLEVBQWxCLEVBQXNCRCxVQUFVLENBQUNDLElBQVgsR0FBa0IsMkJBQWxCO0FBRXRCLE1BQUlJLFlBQVksR0FBRyxJQUFJQyxNQUFKLENBQ2pCLGdTQURpQixDQUFuQjtBQUdBLE1BQUksQ0FBQ0QsWUFBWSxDQUFDRSxJQUFiLENBQWtCUixJQUFJLENBQUNHLEtBQXZCLENBQUwsRUFDRUYsVUFBVSxDQUFDRSxLQUFYLEdBQW1CLCtCQUFuQjtBQUVGLE1BQUlNLGVBQWUsR0FBRyxJQUFJRixNQUFKLENBQ3BCLDZEQURvQixDQUF0QjtBQUdBLE1BQUksQ0FBQ0UsZUFBZSxDQUFDRCxJQUFoQixDQUFxQlIsSUFBSSxDQUFDSSxRQUExQixDQUFMLEVBQ0VILFVBQVUsQ0FBQ0csUUFBWCxHQUNFLDhIQURGO0FBR0ZILFlBQVUsQ0FBQ0ksUUFBWCxHQUNFSixVQUFVLENBQUNDLElBQVgsS0FBb0IsRUFBcEIsSUFDQUQsVUFBVSxDQUFDRSxLQUFYLEtBQXFCLEVBRHJCLElBRUFGLFVBQVUsQ0FBQ0csUUFBWCxLQUF3QixFQUgxQjtBQUtBLFNBQU9ILFVBQVA7QUFDRCxDLENBRUQ7QUFDQTs7QUFDTyxTQUFTUyxhQUFULENBQXVCQyxNQUF2QixFQUErQlQsSUFBL0IsRUFBcUNDLEtBQXJDLEVBQTRDO0FBQ2pELE1BQUk7QUFDRlMscURBQVEsQ0FDTEMsUUFESCxHQUVHQyxHQUZILENBRU8sV0FBV0gsTUFGbEIsRUFHR0ksR0FISCxDQUdPO0FBQ0hDLGlCQUFXLEVBQUVkLElBRFY7QUFFSEMsV0FBSyxFQUFFQTtBQUZKLEtBSFA7QUFPRCxHQVJELENBUUUsT0FBT2MsR0FBUCxFQUFZO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFDRixDLENBRUQ7O0FBQ08sU0FBU0csV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDakMsTUFBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUscUJBQW5CLEVBQTBDO0FBQ3hDLFdBQU8sd0NBQVA7QUFDRDs7QUFDRCxNQUFJRCxLQUFLLENBQUNDLElBQU4sS0FBZSxxQkFBbkIsRUFBMEM7QUFDeEMsV0FBTyxxQkFBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiLi91dGlscy9oZWxwZXJzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciwgVXNlckVycm9ycyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UnXG5cbi8vIHZhbGlkYXRlIC0gVGFrZXMgaW4gYSB1c2VyIG9iamVjdCBhbmQgcmV0dXJucyBhbnkgdmFsaWRhdGlvbiBlcnJvcnMgYW5kIGEgbm9FcnJvcnMgYm9vbGVhblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKHVzZXI6IFVzZXIpOiBVc2VyRXJyb3JzIHtcbiAgbGV0IHRlbXBFcnJvcnM6IFVzZXJFcnJvcnMgPSB7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBub0Vycm9yczogdHJ1ZVxuICB9XG5cbiAgaWYgKHVzZXIubmFtZSA9PT0gJycpIHRlbXBFcnJvcnMubmFtZSA9ICdZb3UgbXVzdCBlbnRlciB5b3VyIG5hbWUuJ1xuXG4gIGxldCBlbWFpbFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgIC9eKChcIltcXHctXFxzXStcIil8KFtcXHctXSsoPzpcXC5bXFx3LV0rKSopfChcIltcXHctXFxzXStcIikoW1xcdy1dKyg/OlxcLltcXHctXSspKikpKEAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkKXwoQFxcWz8oKDI1WzAtNV1cXC58MlswLTRdWzAtOV1cXC58MVswLTldezJ9XFwufFswLTldezEsMn1cXC4pKSgoMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXC4pezJ9KDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFxdPyQpL1xuICApXG4gIGlmICghZW1haWxQYXR0ZXJuLnRlc3QodXNlci5lbWFpbCkpXG4gICAgdGVtcEVycm9ycy5lbWFpbCA9ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLidcblxuICBsZXQgcGFzc3dvcmRQYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS4qWyFAIyQlXiYqXSkoPz0uezgsfSknXG4gIClcbiAgaWYgKCFwYXNzd29yZFBhdHRlcm4udGVzdCh1c2VyLnBhc3N3b3JkKSlcbiAgICB0ZW1wRXJyb3JzLnBhc3N3b3JkID1cbiAgICAgICdZb3VyIHBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCA2IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgYW5kIG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBhIG51bWJlciwgYW5kIGEgc3BlY2lhbCBjaGFyYWN0ZXIuJ1xuXG4gIHRlbXBFcnJvcnMubm9FcnJvcnMgPVxuICAgIHRlbXBFcnJvcnMubmFtZSA9PT0gJycgJiZcbiAgICB0ZW1wRXJyb3JzLmVtYWlsID09PSAnJyAmJlxuICAgIHRlbXBFcnJvcnMucGFzc3dvcmQgPT09ICcnXG5cbiAgcmV0dXJuIHRlbXBFcnJvcnNcbn1cblxuLy8gd3JpdGVVc2VyZGF0YSAtIHRha2VzIGluIGEgdXNlcklkIChmcm9tIGZpcmViYXNlIGF1dGgpLCBuYW1lLCBhbmQgZW1haWwsIGFuZCBjcmVhdGVzIGEgbmV3XG4vLyBwcm9maWxlIGluIHRoZSByZWFsdGltZSBkYXRhYmFzZVxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlVXNlckRhdGEodXNlcklkLCBuYW1lLCBlbWFpbCkge1xuICB0cnkge1xuICAgIGZpcmViYXNlXG4gICAgICAuZGF0YWJhc2UoKVxuICAgICAgLnJlZigndXNlcnMvJyArIHVzZXJJZClcbiAgICAgIC5zZXQoe1xuICAgICAgICBkaXNwbGF5TmFtZTogbmFtZSxcbiAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gIH1cbn1cblxuLy8gaGFuZGxlRXJyb3IgLSB0YWtlcyBpbiBhbiBlcnJvciBhbmQgcmV0dXJucyBhbiBlcnJvciBtZXNzYWdlXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgaWYgKGVycm9yLmNvZGUgPT09ICdhdXRoL3VzZXItbm90LWZvdW5kJykge1xuICAgIHJldHVybiAnQSB1c2VyIHdpdGggdGhpcyBlbWFpbCBkb2VzIG5vdCBleGlzdC4nXG4gIH1cbiAgaWYgKGVycm9yLmNvZGUgPT09ICdhdXRoL3dyb25nLXBhc3N3b3JkJykge1xuICAgIHJldHVybiAnSW5jb3JyZWN0IHBhc3N3b3JkLidcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/helpers.ts\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });