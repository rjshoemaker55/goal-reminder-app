module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getGoals.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next-connect/dist/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/next-connect/dist/index.cjs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Trouter = __webpack_require__(/*! trouter */ \"trouter\");\n\nfunction onerror(err, req, res) {\n  res.statusCode = err.status || 500;\n  res.end(err.message);\n}\n\nconst isResSent = (res) => res.finished || res.headersSent || res.writableEnded;\n\nmodule.exports = function factory({\n  onError = onerror,\n  onNoMatch = onerror.bind(null, { status: 404, message: \"not found\" }),\n  attachParams = false,\n} = {}) {\n  function nc(req, res) {\n    return nc.run(req, res).then(\n      () => !isResSent(res) && onNoMatch(req, res),\n      (err) => onError(err, req, res)\n    );\n  }\n  nc.routes = [];\n  const _use = Trouter.prototype.use.bind(nc);\n  const _find = Trouter.prototype.find.bind(nc);\n  const _add = Trouter.prototype.add.bind(nc);\n  function add(method, base, ...fns) {\n    if (typeof base !== \"string\") return add(method, \"*\", base, ...fns);\n    _add(method, base, ...fns);\n    return nc;\n  }\n  nc.use = function use(base, ...fns) {\n    if (typeof base !== \"string\") return this.use(\"/\", base, ...fns);\n    if (base !== \"/\") {\n      let slashAdded = false;\n      fns.unshift((req, _, next) => {\n        req.url = req.url.substring(base.length);\n        if ((slashAdded = req.url[0] !== \"/\")) req.url = \"/\" + req.url;\n        next();\n      });\n      fns.push(\n        (req, _, next) =>\n          (req.url = base + (slashAdded ? req.url.substring(1) : req.url)) &&\n          next()\n      );\n    }\n    const mount = (fn) => (fn.routes ? fn.handle.bind(fn) : fn);\n    _use(base, ...fns.map(mount));\n    return nc;\n  };\n  nc.all = add.bind(nc, \"\");\n  nc.get = add.bind(nc, \"GET\");\n  nc.head = add.bind(nc, \"HEAD\");\n  nc.post = add.bind(nc, \"POST\");\n  nc.put = add.bind(nc, \"PUT\");\n  nc.delete = add.bind(nc, \"DELETE\");\n  nc.options = add.bind(nc, \"OPTIONS\");\n  nc.trace = add.bind(nc, \"TRACE\");\n  nc.patch = add.bind(nc, \"PATCH\");\n  nc.run = function run(req, res) {\n    return new Promise((resolve, reject) => {\n      this.handle(req, res, (err) => (err ? reject(err) : resolve()));\n    });\n  };\n  nc.handle = function handle(req, res, done) {\n    const idx = req.url.indexOf(\"?\");\n    const { handlers, params } = _find(\n      req.method,\n      idx !== -1 ? req.url.substring(0, idx) : req.url\n    );\n    if (attachParams) req.params = params;\n    let i = 0;\n    const len = handlers.length;\n    const loop = async (next) => handlers[i++](req, res, next);\n    const next = (err) => {\n      i < len\n        ? err\n          ? onError(err, req, res, next)\n          : loop(next).catch(next)\n        : done && done(err);\n    };\n    next();\n  };\n  return nc;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC1jb25uZWN0L2Rpc3QvaW5kZXguY2pzPzAwMmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLG1CQUFPLENBQUMsd0JBQVM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DO0FBQ3RFO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC1jb25uZWN0L2Rpc3QvaW5kZXguY2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHJvdXRlciA9IHJlcXVpcmUoJ3Ryb3V0ZXInKTtcblxuZnVuY3Rpb24gb25lcnJvcihlcnIsIHJlcSwgcmVzKSB7XG4gIHJlcy5zdGF0dXNDb2RlID0gZXJyLnN0YXR1cyB8fCA1MDA7XG4gIHJlcy5lbmQoZXJyLm1lc3NhZ2UpO1xufVxuXG5jb25zdCBpc1Jlc1NlbnQgPSAocmVzKSA9PiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50IHx8IHJlcy53cml0YWJsZUVuZGVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhY3Rvcnkoe1xuICBvbkVycm9yID0gb25lcnJvcixcbiAgb25Ob01hdGNoID0gb25lcnJvci5iaW5kKG51bGwsIHsgc3RhdHVzOiA0MDQsIG1lc3NhZ2U6IFwibm90IGZvdW5kXCIgfSksXG4gIGF0dGFjaFBhcmFtcyA9IGZhbHNlLFxufSA9IHt9KSB7XG4gIGZ1bmN0aW9uIG5jKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIG5jLnJ1bihyZXEsIHJlcykudGhlbihcbiAgICAgICgpID0+ICFpc1Jlc1NlbnQocmVzKSAmJiBvbk5vTWF0Y2gocmVxLCByZXMpLFxuICAgICAgKGVycikgPT4gb25FcnJvcihlcnIsIHJlcSwgcmVzKVxuICAgICk7XG4gIH1cbiAgbmMucm91dGVzID0gW107XG4gIGNvbnN0IF91c2UgPSBUcm91dGVyLnByb3RvdHlwZS51c2UuYmluZChuYyk7XG4gIGNvbnN0IF9maW5kID0gVHJvdXRlci5wcm90b3R5cGUuZmluZC5iaW5kKG5jKTtcbiAgY29uc3QgX2FkZCA9IFRyb3V0ZXIucHJvdG90eXBlLmFkZC5iaW5kKG5jKTtcbiAgZnVuY3Rpb24gYWRkKG1ldGhvZCwgYmFzZSwgLi4uZm5zKSB7XG4gICAgaWYgKHR5cGVvZiBiYXNlICE9PSBcInN0cmluZ1wiKSByZXR1cm4gYWRkKG1ldGhvZCwgXCIqXCIsIGJhc2UsIC4uLmZucyk7XG4gICAgX2FkZChtZXRob2QsIGJhc2UsIC4uLmZucyk7XG4gICAgcmV0dXJuIG5jO1xuICB9XG4gIG5jLnVzZSA9IGZ1bmN0aW9uIHVzZShiYXNlLCAuLi5mbnMpIHtcbiAgICBpZiAodHlwZW9mIGJhc2UgIT09IFwic3RyaW5nXCIpIHJldHVybiB0aGlzLnVzZShcIi9cIiwgYmFzZSwgLi4uZm5zKTtcbiAgICBpZiAoYmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIGxldCBzbGFzaEFkZGVkID0gZmFsc2U7XG4gICAgICBmbnMudW5zaGlmdCgocmVxLCBfLCBuZXh0KSA9PiB7XG4gICAgICAgIHJlcS51cmwgPSByZXEudXJsLnN1YnN0cmluZyhiYXNlLmxlbmd0aCk7XG4gICAgICAgIGlmICgoc2xhc2hBZGRlZCA9IHJlcS51cmxbMF0gIT09IFwiL1wiKSkgcmVxLnVybCA9IFwiL1wiICsgcmVxLnVybDtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgICBmbnMucHVzaChcbiAgICAgICAgKHJlcSwgXywgbmV4dCkgPT5cbiAgICAgICAgICAocmVxLnVybCA9IGJhc2UgKyAoc2xhc2hBZGRlZCA/IHJlcS51cmwuc3Vic3RyaW5nKDEpIDogcmVxLnVybCkpICYmXG4gICAgICAgICAgbmV4dCgpXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBtb3VudCA9IChmbikgPT4gKGZuLnJvdXRlcyA/IGZuLmhhbmRsZS5iaW5kKGZuKSA6IGZuKTtcbiAgICBfdXNlKGJhc2UsIC4uLmZucy5tYXAobW91bnQpKTtcbiAgICByZXR1cm4gbmM7XG4gIH07XG4gIG5jLmFsbCA9IGFkZC5iaW5kKG5jLCBcIlwiKTtcbiAgbmMuZ2V0ID0gYWRkLmJpbmQobmMsIFwiR0VUXCIpO1xuICBuYy5oZWFkID0gYWRkLmJpbmQobmMsIFwiSEVBRFwiKTtcbiAgbmMucG9zdCA9IGFkZC5iaW5kKG5jLCBcIlBPU1RcIik7XG4gIG5jLnB1dCA9IGFkZC5iaW5kKG5jLCBcIlBVVFwiKTtcbiAgbmMuZGVsZXRlID0gYWRkLmJpbmQobmMsIFwiREVMRVRFXCIpO1xuICBuYy5vcHRpb25zID0gYWRkLmJpbmQobmMsIFwiT1BUSU9OU1wiKTtcbiAgbmMudHJhY2UgPSBhZGQuYmluZChuYywgXCJUUkFDRVwiKTtcbiAgbmMucGF0Y2ggPSBhZGQuYmluZChuYywgXCJQQVRDSFwiKTtcbiAgbmMucnVuID0gZnVuY3Rpb24gcnVuKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlKHJlcSwgcmVzLCAoZXJyKSA9PiAoZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKCkpKTtcbiAgICB9KTtcbiAgfTtcbiAgbmMuaGFuZGxlID0gZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzLCBkb25lKSB7XG4gICAgY29uc3QgaWR4ID0gcmVxLnVybC5pbmRleE9mKFwiP1wiKTtcbiAgICBjb25zdCB7IGhhbmRsZXJzLCBwYXJhbXMgfSA9IF9maW5kKFxuICAgICAgcmVxLm1ldGhvZCxcbiAgICAgIGlkeCAhPT0gLTEgPyByZXEudXJsLnN1YnN0cmluZygwLCBpZHgpIDogcmVxLnVybFxuICAgICk7XG4gICAgaWYgKGF0dGFjaFBhcmFtcykgcmVxLnBhcmFtcyA9IHBhcmFtcztcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbGVuID0gaGFuZGxlcnMubGVuZ3RoO1xuICAgIGNvbnN0IGxvb3AgPSBhc3luYyAobmV4dCkgPT4gaGFuZGxlcnNbaSsrXShyZXEsIHJlcywgbmV4dCk7XG4gICAgY29uc3QgbmV4dCA9IChlcnIpID0+IHtcbiAgICAgIGkgPCBsZW5cbiAgICAgICAgPyBlcnJcbiAgICAgICAgICA/IG9uRXJyb3IoZXJyLCByZXEsIHJlcywgbmV4dClcbiAgICAgICAgICA6IGxvb3AobmV4dCkuY2F0Y2gobmV4dClcbiAgICAgICAgOiBkb25lICYmIGRvbmUoZXJyKTtcbiAgICB9O1xuICAgIG5leHQoKTtcbiAgfTtcbiAgcmV0dXJuIG5jO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next-connect/dist/index.cjs\n");

/***/ }),

/***/ "./pages/api/database/src/entity/Goal.entity.ts":
/*!******************************************************!*\
  !*** ./pages/api/database/src/entity/Goal.entity.ts ***!
  \******************************************************/
/*! exports provided: Goal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Goal\", function() { return Goal; });\n/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ \"typeorm\");\n/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);\nvar _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;\n\nfunction _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nfunction _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }\n\n\nlet Goal = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__[\"PrimaryGeneratedColumn\"])(), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__[\"Column\"])('varchar'), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__[\"Column\"])('varchar'), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__[\"Column\"])('varchar'), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__[\"Column\"])('varchar'), _dec(_class = (_class2 = (_temp = class Goal {\n  constructor() {\n    _initializerDefineProperty(this, \"id\", _descriptor, this);\n\n    _initializerDefineProperty(this, \"title\", _descriptor2, this);\n\n    _initializerDefineProperty(this, \"description\", _descriptor3, this);\n\n    _initializerDefineProperty(this, \"completed_date\", _descriptor4, this);\n\n    _initializerDefineProperty(this, \"annotation\", _descriptor5, this);\n  }\n\n}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, \"id\", [_dec2], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, \"title\", [_dec3], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, \"description\", [_dec4], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, \"completed_date\", [_dec5], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, \"annotation\", [_dec6], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: null\n})), _class2)) || _class);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L0dvYWwudHM/Yjk1MiJdLCJuYW1lcyI6WyJHb2FsIiwiRW50aXR5IiwiUHJpbWFyeUdlbmVyYXRlZENvbHVtbiIsIkNvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1BLElBQWIsV0FEQ0Msc0RBQU0sRUFDUCxVQUNHQyxzRUFBc0IsRUFEekIsVUFHR0Msc0RBQU0sQ0FBQyxTQUFELENBSFQsVUFLR0Esc0RBQU0sQ0FBQyxTQUFELENBTFQsVUFPR0Esc0RBQU0sQ0FBQyxTQUFELENBUFQsVUFTR0Esc0RBQU0sQ0FBQyxTQUFELENBVFQsb0NBREEsTUFDYUgsSUFEYixDQUNrQjtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2RhdGFiYXNlL3NyYy9lbnRpdHkvR29hbC5lbnRpdHkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIENvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gJ3R5cGVvcm0nXG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIEdvYWwge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXJcbiAgQENvbHVtbigndmFyY2hhcicpXG4gIHRpdGxlOiBzdHJpbmdcbiAgQENvbHVtbigndmFyY2hhcicpXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgQENvbHVtbigndmFyY2hhcicpXG4gIGNvbXBsZXRlZF9kYXRlOiBzdHJpbmdcbiAgQENvbHVtbigndmFyY2hhcicpXG4gIGFubm90YXRpb246IHN0cmluZ1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/database/src/entity/Goal.entity.ts\n");

/***/ }),

/***/ "./pages/api/getGoals.ts":
/*!*******************************!*\
  !*** ./pages/api/getGoals.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ \"typeorm\");\n/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-connect */ \"./node_modules/next-connect/dist/index.cjs\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_src_entity_Goal_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database/src/entity/Goal.entity */ \"./pages/api/database/src/entity/Goal.entity.ts\");\n\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_2___default()();\nObject(typeorm__WEBPACK_IMPORTED_MODULE_1__[\"createConnection\"])({\n  type: 'postgres',\n  host: 'localhost',\n  username: 'postgres',\n  password: 'postgres',\n  database: 'goal_keeper',\n  entities: [_database_src_entity_Goal_entity__WEBPACK_IMPORTED_MODULE_3__[\"Goal\"]],\n  synchronize: true,\n  logging: false\n}).then(async connection => {\n  let goalRepo = connection.getRepository(_database_src_entity_Goal_entity__WEBPACK_IMPORTED_MODULE_3__[\"Goal\"]);\n  handler.get(async (req, res) => {\n    let goals = await goalRepo.find();\n    res.statusCode = 200;\n    res.json({\n      status: 'success',\n      data: goals\n    });\n    connection.close();\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0R29hbHMudHM/ZjM5YiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwibmV4dENvbm5lY3QiLCJjcmVhdGVDb25uZWN0aW9uIiwidHlwZSIsImhvc3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJlbnRpdGllcyIsIkdvYWwiLCJzeW5jaHJvbml6ZSIsImxvZ2dpbmciLCJ0aGVuIiwiY29ubmVjdGlvbiIsImdvYWxSZXBvIiwiZ2V0UmVwb3NpdG9yeSIsImdldCIsInJlcSIsInJlcyIsImdvYWxzIiwiZmluZCIsInN0YXR1c0NvZGUiLCJqc29uIiwic3RhdHVzIiwiZGF0YSIsImNsb3NlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLG1EQUFXLEVBQTNCO0FBRUFDLGdFQUFnQixDQUFDO0FBQ2ZDLE1BQUksRUFBRSxVQURTO0FBRWZDLE1BQUksRUFBRSxXQUZTO0FBR2ZDLFVBQVEsRUFBRSxVQUhLO0FBSWZDLFVBQVEsRUFBRSxVQUpLO0FBS2ZDLFVBQVEsRUFBRSxhQUxLO0FBTWZDLFVBQVEsRUFBRSxDQUFDQyxxRUFBRCxDQU5LO0FBT2ZDLGFBQVcsRUFBRSxJQVBFO0FBUWZDLFNBQU8sRUFBRTtBQVJNLENBQUQsQ0FBaEIsQ0FTR0MsSUFUSCxDQVNRLE1BQU9DLFVBQVAsSUFBc0I7QUFDNUIsTUFBSUMsUUFBUSxHQUFHRCxVQUFVLENBQUNFLGFBQVgsQ0FBeUJOLHFFQUF6QixDQUFmO0FBRUFULFNBQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDOUIsUUFBSUMsS0FBSyxHQUFHLE1BQU1MLFFBQVEsQ0FBQ00sSUFBVCxFQUFsQjtBQUVBRixPQUFHLENBQUNHLFVBQUosR0FBaUIsR0FBakI7QUFDQUgsT0FBRyxDQUFDSSxJQUFKLENBQVM7QUFDUEMsWUFBTSxFQUFFLFNBREQ7QUFFUEMsVUFBSSxFQUFFTDtBQUZDLEtBQVQ7QUFJQU4sY0FBVSxDQUFDWSxLQUFYO0FBQ0QsR0FURDtBQVVELENBdEJEO0FBd0JlekIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0R29hbHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnXG5pbXBvcnQgeyBnZXRDb25uZWN0aW9uLCBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSAndHlwZW9ybSdcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IEdvYWwgfSBmcm9tICcuL2RhdGFiYXNlL3NyYy9lbnRpdHkvR29hbC5lbnRpdHknXG5cbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdDxOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlPigpXG5cbmNyZWF0ZUNvbm5lY3Rpb24oe1xuICB0eXBlOiAncG9zdGdyZXMnLFxuICBob3N0OiAnbG9jYWxob3N0JyxcbiAgdXNlcm5hbWU6ICdwb3N0Z3JlcycsXG4gIHBhc3N3b3JkOiAncG9zdGdyZXMnLFxuICBkYXRhYmFzZTogJ2dvYWxfa2VlcGVyJyxcbiAgZW50aXRpZXM6IFtHb2FsXSxcbiAgc3luY2hyb25pemU6IHRydWUsXG4gIGxvZ2dpbmc6IGZhbHNlXG59KS50aGVuKGFzeW5jIChjb25uZWN0aW9uKSA9PiB7XG4gIGxldCBnb2FsUmVwbyA9IGNvbm5lY3Rpb24uZ2V0UmVwb3NpdG9yeShHb2FsKVxuXG4gIGhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGxldCBnb2FscyA9IGF3YWl0IGdvYWxSZXBvLmZpbmQoKVxuXG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcbiAgICByZXMuanNvbih7XG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIGRhdGE6IGdvYWxzXG4gICAgfSlcbiAgICBjb25uZWN0aW9uLmNsb3NlKClcbiAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getGoals.ts\n");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflect-metadata\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWZsZWN0LW1ldGFkYXRhXCI/MGFiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWZsZWN0LW1ldGFkYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reflect-metadata\n");

/***/ }),

/***/ "trouter":
/*!**************************!*\
  !*** external "trouter" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"trouter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0cm91dGVyXCI/Y2FlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0cm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///trouter\n");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typeorm\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0eXBlb3JtXCI/OGE4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0eXBlb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///typeorm\n");

/***/ })

/******/ });