webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\n\n\n\nvar _jsxFileName = \"/Users/rjshoemaker/Documents/code/projects/goal-reminder-app/pages/home.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    email: '',\n    displayName: ''\n  }),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loggedIn = _useState2[0],\n      setLoggedIn = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var userId;\n\n    if (_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().currentUser === null) {\n      return router.push('/login');\n    } else {\n      userId = _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().currentUser.uid;\n    }\n\n    _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].database().ref(\"users/\".concat(userId)).once('value').then(function (snapshot) {\n      console.log(snapshot.val());\n      setUser(snapshot.val());\n      setLoggedIn(true);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: loggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Dashboard\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: [\"Welcome, \", user.displayName]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Please wait...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false)\n  }, void 0, false);\n};\n\n_s(Home, \"1tZKk1X53taumhfqwoLd5qk1Fh0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3g/Mjg4ZSJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJlbWFpbCIsImRpc3BsYXlOYW1lIiwidXNlciIsInNldFVzZXIiLCJsb2dnZWRJbiIsInNldExvZ2dlZEluIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlcklkIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJwdXNoIiwidWlkIiwiZGF0YWJhc2UiLCJyZWYiLCJvbmNlIiwidGhlbiIsInNuYXBzaG90IiwiY29uc29sZSIsImxvZyIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsZUFBVyxFQUFFO0FBQTFCLEdBQUQsQ0FEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUFBLG1CQUVlSixzREFBUSxDQUFDLEtBQUQsQ0FGdkI7QUFBQSxNQUVWSyxRQUZVO0FBQUEsTUFFQUMsV0FGQTs7QUFHakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQVc7QUFDbkIsUUFBSUMsTUFBSjs7QUFFQSxRQUFJQyxpREFBUSxDQUFDQyxJQUFULEdBQWdCQyxXQUFoQixLQUFnQyxJQUFwQyxFQUEwQztBQUN4QyxhQUFPTixNQUFNLENBQUNPLElBQVAsQ0FBWSxRQUFaLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTEosWUFBTSxHQUFHQyxpREFBUSxDQUFDQyxJQUFULEdBQWdCQyxXQUFoQixDQUE0QkUsR0FBckM7QUFDRDs7QUFFREoscURBQVEsQ0FDTEssUUFESCxHQUVHQyxHQUZILGlCQUVnQlAsTUFGaEIsR0FHR1EsSUFISCxDQUdRLE9BSFIsRUFJR0MsSUFKSCxDQUlRLFVBQUNDLFFBQUQsRUFBYztBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csR0FBVCxFQUFaO0FBQ0FuQixhQUFPLENBQUNnQixRQUFRLENBQUNHLEdBQVQsRUFBRCxDQUFQO0FBQ0FqQixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBUkg7QUFTRCxHQWxCUSxFQWtCTixFQWxCTSxDQUFUO0FBb0JBLHNCQUNFO0FBQUEsY0FDR0QsUUFBUSxnQkFDUDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGdDQUFjRixJQUFJLENBQUNELFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBRE8sZ0JBTVA7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBUEosbUJBREY7QUFjRCxDQXZDRDs7R0FBTUgsSTtVQUdXUyxxRDs7O0tBSFhULEk7O0FBeUNTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UnXG5pbXBvcnQgeyBnZXRDb25uZWN0aW9uIH0gZnJvbSAndHlwZW9ybSdcbmltcG9ydCB7IEdvYWwgfSBmcm9tICcuLi9kYXRhYmFzZS9zcmMvZW50aXR5L0dvYWwuZW50aXR5J1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnZG9tYWluJ1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVDb25uZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbm4gPSBhd2FpdCBnZXRPckNyZWF0ZUNvbm5lY3Rpb24oKVxuICBjb25zb2xlLmxvZyhjb25uKVxuICByZXR1cm4geyBwcm9wczogeyBjb25uOiBKU09OLnN0cmluZ2lmeShjb25uKSB9IH1cbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoeyBlbWFpbDogJycsIGRpc3BsYXlOYW1lOiAnJyB9KVxuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKTogYW55ID0+IHtcbiAgICBsZXQgdXNlcklkXG5cbiAgICBpZiAoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJJZCA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWRcbiAgICB9XG5cbiAgICBmaXJlYmFzZVxuICAgICAgLmRhdGFiYXNlKClcbiAgICAgIC5yZWYoYHVzZXJzLyR7dXNlcklkfWApXG4gICAgICAub25jZSgndmFsdWUnKVxuICAgICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKVxuICAgICAgICBzZXRVc2VyKHNuYXBzaG90LnZhbCgpKVxuICAgICAgICBzZXRMb2dnZWRJbih0cnVlKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvZ2dlZEluID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgIDxoMj5XZWxjb21lLCB7dXNlci5kaXNwbGF5TmFtZX08L2gyPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyPlBsZWFzZSB3YWl0Li4uPC9oMj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.tsx\n");

/***/ })

})