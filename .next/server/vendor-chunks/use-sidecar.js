"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sidecar";
exports.ids = ["vendor-chunks/use-sidecar"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-sidecar/dist/es5/config.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es5/config.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setConfig = exports.config = void 0;\nexports.config = {\n    onError: function (e) { return console.error(e); },\n};\nvar setConfig = function (conf) {\n    Object.assign(exports.config, conf);\n};\nexports.setConfig = setConfig;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvY29uZmlnLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixHQUFHLGNBQWM7QUFDbEMsY0FBYztBQUNkLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3VhcHAvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvY29uZmlnLmpzP2Y3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldENvbmZpZyA9IGV4cG9ydHMuY29uZmlnID0gdm9pZCAwO1xuZXhwb3J0cy5jb25maWcgPSB7XG4gICAgb25FcnJvcjogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZSk7IH0sXG59O1xudmFyIHNldENvbmZpZyA9IGZ1bmN0aW9uIChjb25mKSB7XG4gICAgT2JqZWN0LmFzc2lnbihleHBvcnRzLmNvbmZpZywgY29uZik7XG59O1xuZXhwb3J0cy5zZXRDb25maWcgPSBzZXRDb25maWc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sidecar/dist/es5/config.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sidecar/dist/es5/env.js":
/*!**************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es5/env.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.env = void 0;\nvar detect_node_es_1 = __webpack_require__(/*! detect-node-es */ \"(ssr)/./node_modules/detect-node-es/es5/node.js\");\nexports.env = {\n    isNode: detect_node_es_1.isNode,\n    forceCache: false,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvZW52LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFdBQVc7QUFDWCx1QkFBdUIsbUJBQU8sQ0FBQyx1RUFBZ0I7QUFDL0MsV0FBVztBQUNYO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3lvdWFwcC8uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzNS9lbnYuanM/OTk1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZW52ID0gdm9pZCAwO1xudmFyIGRldGVjdF9ub2RlX2VzXzEgPSByZXF1aXJlKFwiZGV0ZWN0LW5vZGUtZXNcIik7XG5leHBvcnRzLmVudiA9IHtcbiAgICBpc05vZGU6IGRldGVjdF9ub2RlX2VzXzEuaXNOb2RlLFxuICAgIGZvcmNlQ2FjaGU6IGZhbHNlLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sidecar/dist/es5/env.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sidecar/dist/es5/exports.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es5/exports.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.exportSidecar = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar React = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar SideCar = function (_a) {\n    var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, [\"sideCar\"]);\n    if (!sideCar) {\n        throw new Error('Sidecar: please provide `sideCar` property to import the right car');\n    }\n    var Target = sideCar.read();\n    if (!Target) {\n        throw new Error('Sidecar medium not found');\n    }\n    return React.createElement(Target, tslib_1.__assign({}, rest));\n};\nSideCar.isSideCarExport = true;\nfunction exportSidecar(medium, exported) {\n    medium.useMedium(exported);\n    return SideCar;\n}\nexports.exportSidecar = exportSidecar;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvZXhwb3J0cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckIsY0FBYyxtQkFBTyxDQUFDLHVEQUFPO0FBQzdCLGlDQUFpQyxtQkFBTyxDQUFDLHdHQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3VhcHAvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvZXhwb3J0cy5qcz9kNDViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5leHBvcnRTaWRlY2FyID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgUmVhY3QgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFNpZGVDYXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgc2lkZUNhciA9IF9hLnNpZGVDYXIsIHJlc3QgPSB0c2xpYl8xLl9fcmVzdChfYSwgW1wic2lkZUNhclwiXSk7XG4gICAgaWYgKCFzaWRlQ2FyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2lkZWNhcjogcGxlYXNlIHByb3ZpZGUgYHNpZGVDYXJgIHByb3BlcnR5IHRvIGltcG9ydCB0aGUgcmlnaHQgY2FyJyk7XG4gICAgfVxuICAgIHZhciBUYXJnZXQgPSBzaWRlQ2FyLnJlYWQoKTtcbiAgICBpZiAoIVRhcmdldCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NpZGVjYXIgbWVkaXVtIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYXJnZXQsIHRzbGliXzEuX19hc3NpZ24oe30sIHJlc3QpKTtcbn07XG5TaWRlQ2FyLmlzU2lkZUNhckV4cG9ydCA9IHRydWU7XG5mdW5jdGlvbiBleHBvcnRTaWRlY2FyKG1lZGl1bSwgZXhwb3J0ZWQpIHtcbiAgICBtZWRpdW0udXNlTWVkaXVtKGV4cG9ydGVkKTtcbiAgICByZXR1cm4gU2lkZUNhcjtcbn1cbmV4cG9ydHMuZXhwb3J0U2lkZWNhciA9IGV4cG9ydFNpZGVjYXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sidecar/dist/es5/exports.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sidecar/dist/es5/hoc.js":
/*!**************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es5/hoc.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sidecar = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar React = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar hook_1 = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/use-sidecar/dist/es5/hook.js\");\n// eslint-disable-next-line @typescript-eslint/ban-types\nfunction sidecar(importer, errorComponent) {\n    var ErrorCase = function () { return errorComponent; };\n    return function Sidecar(props) {\n        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];\n        if (error && errorComponent) {\n            return ErrorCase;\n        }\n        // @ts-expect-error type shenanigans\n        return Car ? React.createElement(Car, tslib_1.__assign({}, props)) : null;\n    };\n}\nexports.sidecar = sidecar;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvaG9jLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZixjQUFjLG1CQUFPLENBQUMsdURBQU87QUFDN0IsaUNBQWlDLG1CQUFPLENBQUMsd0dBQU87QUFDaEQsYUFBYSxtQkFBTyxDQUFDLGlFQUFRO0FBQzdCO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW91YXBwLy4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXM1L2hvYy5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zaWRlY2FyID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgUmVhY3QgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGhvb2tfMSA9IHJlcXVpcmUoXCIuL2hvb2tcIik7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZnVuY3Rpb24gc2lkZWNhcihpbXBvcnRlciwgZXJyb3JDb21wb25lbnQpIHtcbiAgICB2YXIgRXJyb3JDYXNlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JDb21wb25lbnQ7IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNpZGVjYXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF9hID0gKDAsIGhvb2tfMS51c2VTaWRlY2FyKShpbXBvcnRlciwgcHJvcHMuc2lkZUNhciksIENhciA9IF9hWzBdLCBlcnJvciA9IF9hWzFdO1xuICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3JDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBFcnJvckNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0eXBlIHNoZW5hbmlnYW5zXG4gICAgICAgIHJldHVybiBDYXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KENhciwgdHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJvcHMpKSA6IG51bGw7XG4gICAgfTtcbn1cbmV4cG9ydHMuc2lkZWNhciA9IHNpZGVjYXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sidecar/dist/es5/hoc.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sidecar/dist/es5/hook.js":
/*!***************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es5/hook.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useSidecar = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nvar env_1 = __webpack_require__(/*! ./env */ \"(ssr)/./node_modules/use-sidecar/dist/es5/env.js\");\nvar cache = new WeakMap();\nvar NO_OPTIONS = {};\nfunction useSidecar(importer, effect) {\n    var options = (effect && effect.options) || NO_OPTIONS;\n    if (env_1.env.isNode && !options.ssr) {\n        return [null, null];\n    }\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    return useRealSidecar(importer, effect);\n}\nexports.useSidecar = useSidecar;\nfunction useRealSidecar(importer, effect) {\n    var options = (effect && effect.options) || NO_OPTIONS;\n    var couldUseCache = env_1.env.forceCache || (env_1.env.isNode && !!options.ssr) || !options.async;\n    var _a = (0, react_1.useState)(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];\n    var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];\n    (0, react_1.useEffect)(function () {\n        if (!Car) {\n            importer().then(function (car) {\n                var resolved = effect ? effect.read() : car.default || car;\n                if (!resolved) {\n                    console.error('Sidecar error: with importer', importer);\n                    var error_1;\n                    if (effect) {\n                        console.error('Sidecar error: with medium', effect);\n                        error_1 = new Error('Sidecar medium was not found');\n                    }\n                    else {\n                        error_1 = new Error('Sidecar was not found in exports');\n                    }\n                    setError(function () { return error_1; });\n                    throw error_1;\n                }\n                cache.set(importer, resolved);\n                setCar(function () { return resolved; });\n            }, function (e) { return setError(function () { return e; }); });\n        }\n    }, []);\n    return [Car, error];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvaG9vay5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsY0FBYyxtQkFBTyxDQUFDLHdHQUFPO0FBQzdCLFlBQVksbUJBQU8sQ0FBQywrREFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsOEJBQThCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpQkFBaUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RCxhQUFhLGlCQUFpQiw4QkFBOEIsV0FBVyxJQUFJO0FBQzNFO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3VhcHAvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvaG9vay5qcz8yMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VTaWRlY2FyID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgZW52XzEgPSByZXF1aXJlKFwiLi9lbnZcIik7XG52YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xudmFyIE5PX09QVElPTlMgPSB7fTtcbmZ1bmN0aW9uIHVzZVNpZGVjYXIoaW1wb3J0ZXIsIGVmZmVjdCkge1xuICAgIHZhciBvcHRpb25zID0gKGVmZmVjdCAmJiBlZmZlY3Qub3B0aW9ucykgfHwgTk9fT1BUSU9OUztcbiAgICBpZiAoZW52XzEuZW52LmlzTm9kZSAmJiAhb3B0aW9ucy5zc3IpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgcmV0dXJuIHVzZVJlYWxTaWRlY2FyKGltcG9ydGVyLCBlZmZlY3QpO1xufVxuZXhwb3J0cy51c2VTaWRlY2FyID0gdXNlU2lkZWNhcjtcbmZ1bmN0aW9uIHVzZVJlYWxTaWRlY2FyKGltcG9ydGVyLCBlZmZlY3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IChlZmZlY3QgJiYgZWZmZWN0Lm9wdGlvbnMpIHx8IE5PX09QVElPTlM7XG4gICAgdmFyIGNvdWxkVXNlQ2FjaGUgPSBlbnZfMS5lbnYuZm9yY2VDYWNoZSB8fCAoZW52XzEuZW52LmlzTm9kZSAmJiAhIW9wdGlvbnMuc3NyKSB8fCAhb3B0aW9ucy5hc3luYztcbiAgICB2YXIgX2EgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoY291bGRVc2VDYWNoZSA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhY2hlLmdldChpbXBvcnRlcik7IH0gOiB1bmRlZmluZWQpLCBDYXIgPSBfYVswXSwgc2V0Q2FyID0gX2FbMV07XG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKG51bGwpLCBlcnJvciA9IF9iWzBdLCBzZXRFcnJvciA9IF9iWzFdO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUNhcikge1xuICAgICAgICAgICAgaW1wb3J0ZXIoKS50aGVuKGZ1bmN0aW9uIChjYXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSBlZmZlY3QgPyBlZmZlY3QucmVhZCgpIDogY2FyLmRlZmF1bHQgfHwgY2FyO1xuICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2lkZWNhciBlcnJvcjogd2l0aCBpbXBvcnRlcicsIGltcG9ydGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yXzE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlZmZlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NpZGVjYXIgZXJyb3I6IHdpdGggbWVkaXVtJywgZWZmZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBuZXcgRXJyb3IoJ1NpZGVjYXIgbWVkaXVtIHdhcyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBuZXcgRXJyb3IoJ1NpZGVjYXIgd2FzIG5vdCBmb3VuZCBpbiBleHBvcnRzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JfMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yXzE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhY2hlLnNldChpbXBvcnRlciwgcmVzb2x2ZWQpO1xuICAgICAgICAgICAgICAgIHNldENhcihmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlZDsgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZTsgfSk7IH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbQ2FyLCBlcnJvcl07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sidecar/dist/es5/hook.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sidecar/dist/es5/index.js":
/*!****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es5/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;\nvar hoc_1 = __webpack_require__(/*! ./hoc */ \"(ssr)/./node_modules/use-sidecar/dist/es5/hoc.js\");\nObject.defineProperty(exports, \"sidecar\", ({ enumerable: true, get: function () { return hoc_1.sidecar; } }));\nvar hook_1 = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/use-sidecar/dist/es5/hook.js\");\nObject.defineProperty(exports, \"useSidecar\", ({ enumerable: true, get: function () { return hook_1.useSidecar; } }));\nvar config_1 = __webpack_require__(/*! ./config */ \"(ssr)/./node_modules/use-sidecar/dist/es5/config.js\");\nObject.defineProperty(exports, \"setConfig\", ({ enumerable: true, get: function () { return config_1.setConfig; } }));\nvar medium_1 = __webpack_require__(/*! ./medium */ \"(ssr)/./node_modules/use-sidecar/dist/es5/medium.js\");\nObject.defineProperty(exports, \"createMedium\", ({ enumerable: true, get: function () { return medium_1.createMedium; } }));\nObject.defineProperty(exports, \"createSidecarMedium\", ({ enumerable: true, get: function () { return medium_1.createSidecarMedium; } }));\nvar renderProp_1 = __webpack_require__(/*! ./renderProp */ \"(ssr)/./node_modules/use-sidecar/dist/es5/renderProp.js\");\nObject.defineProperty(exports, \"renderCar\", ({ enumerable: true, get: function () { return renderProp_1.renderCar; } }));\nvar exports_1 = __webpack_require__(/*! ./exports */ \"(ssr)/./node_modules/use-sidecar/dist/es5/exports.js\");\nObject.defineProperty(exports, \"exportSidecar\", ({ enumerable: true, get: function () { return exports_1.exportSidecar; } }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCLEdBQUcsaUJBQWlCLEdBQUcsMkJBQTJCLEdBQUcsb0JBQW9CLEdBQUcsaUJBQWlCLEdBQUcsa0JBQWtCLEdBQUcsZUFBZTtBQUN6SixZQUFZLG1CQUFPLENBQUMsK0RBQU87QUFDM0IsMkNBQTBDLEVBQUUscUNBQXFDLHlCQUF5QixFQUFDO0FBQzNHLGFBQWEsbUJBQU8sQ0FBQyxpRUFBUTtBQUM3Qiw4Q0FBNkMsRUFBRSxxQ0FBcUMsNkJBQTZCLEVBQUM7QUFDbEgsZUFBZSxtQkFBTyxDQUFDLHFFQUFVO0FBQ2pDLDZDQUE0QyxFQUFFLHFDQUFxQyw4QkFBOEIsRUFBQztBQUNsSCxlQUFlLG1CQUFPLENBQUMscUVBQVU7QUFDakMsZ0RBQStDLEVBQUUscUNBQXFDLGlDQUFpQyxFQUFDO0FBQ3hILHVEQUFzRCxFQUFFLHFDQUFxQyx3Q0FBd0MsRUFBQztBQUN0SSxtQkFBbUIsbUJBQU8sQ0FBQyw2RUFBYztBQUN6Qyw2Q0FBNEMsRUFBRSxxQ0FBcUMsa0NBQWtDLEVBQUM7QUFDdEgsZ0JBQWdCLG1CQUFPLENBQUMsdUVBQVc7QUFDbkMsaURBQWdELEVBQUUscUNBQXFDLG1DQUFtQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW91YXBwLy4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXM1L2luZGV4LmpzP2JkZWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmV4cG9ydFNpZGVjYXIgPSBleHBvcnRzLnJlbmRlckNhciA9IGV4cG9ydHMuY3JlYXRlU2lkZWNhck1lZGl1bSA9IGV4cG9ydHMuY3JlYXRlTWVkaXVtID0gZXhwb3J0cy5zZXRDb25maWcgPSBleHBvcnRzLnVzZVNpZGVjYXIgPSBleHBvcnRzLnNpZGVjYXIgPSB2b2lkIDA7XG52YXIgaG9jXzEgPSByZXF1aXJlKFwiLi9ob2NcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzaWRlY2FyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBob2NfMS5zaWRlY2FyOyB9IH0pO1xudmFyIGhvb2tfMSA9IHJlcXVpcmUoXCIuL2hvb2tcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VTaWRlY2FyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBob29rXzEudXNlU2lkZWNhcjsgfSB9KTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldENvbmZpZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnXzEuc2V0Q29uZmlnOyB9IH0pO1xudmFyIG1lZGl1bV8xID0gcmVxdWlyZShcIi4vbWVkaXVtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlTWVkaXVtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtZWRpdW1fMS5jcmVhdGVNZWRpdW07IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjcmVhdGVTaWRlY2FyTWVkaXVtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtZWRpdW1fMS5jcmVhdGVTaWRlY2FyTWVkaXVtOyB9IH0pO1xudmFyIHJlbmRlclByb3BfMSA9IHJlcXVpcmUoXCIuL3JlbmRlclByb3BcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZW5kZXJDYXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbmRlclByb3BfMS5yZW5kZXJDYXI7IH0gfSk7XG52YXIgZXhwb3J0c18xID0gcmVxdWlyZShcIi4vZXhwb3J0c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4cG9ydFNpZGVjYXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4cG9ydHNfMS5leHBvcnRTaWRlY2FyOyB9IH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sidecar/dist/es5/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sidecar/dist/es5/medium.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es5/medium.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createSidecarMedium = exports.createMedium = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nfunction ItoI(a) {\n    return a;\n}\nfunction innerCreateMedium(defaults, middleware) {\n    if (middleware === void 0) { middleware = ItoI; }\n    var buffer = [];\n    var assigned = false;\n    var medium = {\n        read: function () {\n            if (assigned) {\n                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');\n            }\n            if (buffer.length) {\n                return buffer[buffer.length - 1];\n            }\n            return defaults;\n        },\n        useMedium: function (data) {\n            var item = middleware(data, assigned);\n            buffer.push(item);\n            return function () {\n                buffer = buffer.filter(function (x) { return x !== item; });\n            };\n        },\n        assignSyncMedium: function (cb) {\n            assigned = true;\n            while (buffer.length) {\n                var cbs = buffer;\n                buffer = [];\n                cbs.forEach(cb);\n            }\n            buffer = {\n                push: function (x) { return cb(x); },\n                filter: function () { return buffer; },\n            };\n        },\n        assignMedium: function (cb) {\n            assigned = true;\n            var pendingQueue = [];\n            if (buffer.length) {\n                var cbs = buffer;\n                buffer = [];\n                cbs.forEach(cb);\n                pendingQueue = buffer;\n            }\n            var executeQueue = function () {\n                var cbs = pendingQueue;\n                pendingQueue = [];\n                cbs.forEach(cb);\n            };\n            var cycle = function () { return Promise.resolve().then(executeQueue); };\n            cycle();\n            buffer = {\n                push: function (x) {\n                    pendingQueue.push(x);\n                    cycle();\n                },\n                filter: function (filter) {\n                    pendingQueue = pendingQueue.filter(filter);\n                    return buffer;\n                },\n            };\n        },\n    };\n    return medium;\n}\nfunction createMedium(defaults, middleware) {\n    if (middleware === void 0) { middleware = ItoI; }\n    return innerCreateMedium(defaults, middleware);\n}\nexports.createMedium = createMedium;\n// eslint-disable-next-line @typescript-eslint/ban-types\nfunction createSidecarMedium(options) {\n    if (options === void 0) { options = {}; }\n    var medium = innerCreateMedium(null);\n    medium.options = tslib_1.__assign({ async: true, ssr: false }, options);\n    return medium;\n}\nexports.createSidecarMedium = createSidecarMedium;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvbWVkaXVtLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixHQUFHLG9CQUFvQjtBQUNsRCxjQUFjLG1CQUFPLENBQUMsdURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxvQkFBb0I7QUFDMUU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BELHNDQUFzQyxnQkFBZ0I7QUFDdEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3VhcHAvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvbWVkaXVtLmpzPzlhNTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZVNpZGVjYXJNZWRpdW0gPSBleHBvcnRzLmNyZWF0ZU1lZGl1bSA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuZnVuY3Rpb24gSXRvSShhKSB7XG4gICAgcmV0dXJuIGE7XG59XG5mdW5jdGlvbiBpbm5lckNyZWF0ZU1lZGl1bShkZWZhdWx0cywgbWlkZGxld2FyZSkge1xuICAgIGlmIChtaWRkbGV3YXJlID09PSB2b2lkIDApIHsgbWlkZGxld2FyZSA9IEl0b0k7IH1cbiAgICB2YXIgYnVmZmVyID0gW107XG4gICAgdmFyIGFzc2lnbmVkID0gZmFsc2U7XG4gICAgdmFyIG1lZGl1bSA9IHtcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFzc2lnbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaWRlY2FyOiBjb3VsZCBub3QgYHJlYWRgIGZyb20gYW4gYGFzc2lnbmVkYCBtZWRpdW0uIGByZWFkYCBjb3VsZCBiZSB1c2VkIG9ubHkgd2l0aCBgdXNlTWVkaXVtYC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcltidWZmZXIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZU1lZGl1bTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gbWlkZGxld2FyZShkYXRhLCBhc3NpZ25lZCk7XG4gICAgICAgICAgICBidWZmZXIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAhPT0gaXRlbTsgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBhc3NpZ25TeW5jTWVkaXVtOiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGFzc2lnbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlIChidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNicyA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBbXTtcbiAgICAgICAgICAgICAgICBjYnMuZm9yRWFjaChjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWZmZXIgPSB7XG4gICAgICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGNiKHgpOyB9LFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVmZmVyOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgYXNzaWduTWVkaXVtOiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGFzc2lnbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBwZW5kaW5nUXVldWUgPSBbXTtcbiAgICAgICAgICAgIGlmIChidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNicyA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBbXTtcbiAgICAgICAgICAgICAgICBjYnMuZm9yRWFjaChjYik7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1F1ZXVlID0gYnVmZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGV4ZWN1dGVRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2JzID0gcGVuZGluZ1F1ZXVlO1xuICAgICAgICAgICAgICAgIHBlbmRpbmdRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGNicy5mb3JFYWNoKGNiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY3ljbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGV4ZWN1dGVRdWV1ZSk7IH07XG4gICAgICAgICAgICBjeWNsZSgpO1xuICAgICAgICAgICAgYnVmZmVyID0ge1xuICAgICAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdRdWV1ZS5wdXNoKHgpO1xuICAgICAgICAgICAgICAgICAgICBjeWNsZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdRdWV1ZSA9IHBlbmRpbmdRdWV1ZS5maWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBtZWRpdW07XG59XG5mdW5jdGlvbiBjcmVhdGVNZWRpdW0oZGVmYXVsdHMsIG1pZGRsZXdhcmUpIHtcbiAgICBpZiAobWlkZGxld2FyZSA9PT0gdm9pZCAwKSB7IG1pZGRsZXdhcmUgPSBJdG9JOyB9XG4gICAgcmV0dXJuIGlubmVyQ3JlYXRlTWVkaXVtKGRlZmF1bHRzLCBtaWRkbGV3YXJlKTtcbn1cbmV4cG9ydHMuY3JlYXRlTWVkaXVtID0gY3JlYXRlTWVkaXVtO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIGNyZWF0ZVNpZGVjYXJNZWRpdW0ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIG1lZGl1bSA9IGlubmVyQ3JlYXRlTWVkaXVtKG51bGwpO1xuICAgIG1lZGl1bS5vcHRpb25zID0gdHNsaWJfMS5fX2Fzc2lnbih7IGFzeW5jOiB0cnVlLCBzc3I6IGZhbHNlIH0sIG9wdGlvbnMpO1xuICAgIHJldHVybiBtZWRpdW07XG59XG5leHBvcnRzLmNyZWF0ZVNpZGVjYXJNZWRpdW0gPSBjcmVhdGVTaWRlY2FyTWVkaXVtO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sidecar/dist/es5/medium.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sidecar/dist/es5/renderProp.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es5/renderProp.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderCar = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar React = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nfunction renderCar(WrappedComponent, defaults) {\n    function State(_a) {\n        var stateRef = _a.stateRef, props = _a.props;\n        var renderTarget = (0, react_1.useCallback)(function SideTarget() {\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            (0, react_1.useLayoutEffect)(function () {\n                stateRef.current(args);\n            });\n            return null;\n        }, []);\n        // @ts-ignore\n        return React.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));\n    }\n    var Children = React.memo(function (_a) {\n        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;\n        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];\n        (0, react_1.useEffect)(function () {\n            stateRef.current = setState;\n        }, []);\n        return children.apply(void 0, state);\n    }, function () { return true; });\n    return function Combiner(props) {\n        var defaultState = React.useRef(defaults(props));\n        var ref = React.useRef(function (state) { return (defaultState.current = state); });\n        return (React.createElement(React.Fragment, null,\n            React.createElement(State, { stateRef: ref, props: props }),\n            React.createElement(Children, { stateRef: ref, defaultState: defaultState, children: props.children })));\n    };\n}\nexports.renderCar = renderCar;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvcmVuZGVyUHJvcC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsY0FBYyxtQkFBTyxDQUFDLHVEQUFPO0FBQzdCLGlDQUFpQyxtQkFBTyxDQUFDLHdHQUFPO0FBQ2hELGNBQWMsbUJBQU8sQ0FBQyx3R0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLHdFQUF3RSxXQUFXLHdCQUF3QjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLLGdCQUFnQixjQUFjO0FBQ25DO0FBQ0E7QUFDQSxrREFBa0Qsd0NBQXdDO0FBQzFGO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSw0Q0FBNEMscUVBQXFFO0FBQ2pIO0FBQ0E7QUFDQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3VhcHAvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczUvcmVuZGVyUHJvcC5qcz8yMzQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW5kZXJDYXIgPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBSZWFjdCA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmZ1bmN0aW9uIHJlbmRlckNhcihXcmFwcGVkQ29tcG9uZW50LCBkZWZhdWx0cykge1xuICAgIGZ1bmN0aW9uIFN0YXRlKF9hKSB7XG4gICAgICAgIHZhciBzdGF0ZVJlZiA9IF9hLnN0YXRlUmVmLCBwcm9wcyA9IF9hLnByb3BzO1xuICAgICAgICB2YXIgcmVuZGVyVGFyZ2V0ID0gKDAsIHJlYWN0XzEudXNlQ2FsbGJhY2spKGZ1bmN0aW9uIFNpZGVUYXJnZXQoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoMCwgcmVhY3RfMS51c2VMYXlvdXRFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVJlZi5jdXJyZW50KGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHRzbGliXzEuX19hc3NpZ24oe30sIHByb3BzLCB7IGNoaWxkcmVuOiByZW5kZXJUYXJnZXQgfSkpO1xuICAgIH1cbiAgICB2YXIgQ2hpbGRyZW4gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc3RhdGVSZWYgPSBfYS5zdGF0ZVJlZiwgZGVmYXVsdFN0YXRlID0gX2EuZGVmYXVsdFN0YXRlLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgICAgICB2YXIgX2IgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoZGVmYXVsdFN0YXRlLmN1cnJlbnQpLCBzdGF0ZSA9IF9iWzBdLCBzZXRTdGF0ZSA9IF9iWzFdO1xuICAgICAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBzZXRTdGF0ZTtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4uYXBwbHkodm9pZCAwLCBzdGF0ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIENvbWJpbmVyKHByb3BzKSB7XG4gICAgICAgIHZhciBkZWZhdWx0U3RhdGUgPSBSZWFjdC51c2VSZWYoZGVmYXVsdHMocHJvcHMpKTtcbiAgICAgICAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZihmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIChkZWZhdWx0U3RhdGUuY3VycmVudCA9IHN0YXRlKTsgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdGUsIHsgc3RhdGVSZWY6IHJlZiwgcHJvcHM6IHByb3BzIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGlsZHJlbiwgeyBzdGF0ZVJlZjogcmVmLCBkZWZhdWx0U3RhdGU6IGRlZmF1bHRTdGF0ZSwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pKSk7XG4gICAgfTtcbn1cbmV4cG9ydHMucmVuZGVyQ2FyID0gcmVuZGVyQ2FyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sidecar/dist/es5/renderProp.js\n");

/***/ })

};
;