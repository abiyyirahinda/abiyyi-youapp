"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/profile/page",{

/***/ "(app-pages-browser)/./app/(routes)/profile/components/interest.tsx":
/*!******************************************************!*\
  !*** ./app/(routes)/profile/components/interest.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Interest = ()=>{\n    _s();\n    const [isFormVisible, setIsFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSaveAndUpdate = async ()=>{\n        try {\n            if (!accessToken) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"No access token\");\n                return;\n            }\n            const response = await fetch(\"https://techtest.youapp.ai/api/updateProfile\", {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"x-access-token\": accessToken\n                },\n                body: JSON.stringify({\n                    interest: \"\"\n                })\n            });\n            if (response.ok) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Profile updated successfully\");\n                setIsFormVisible(false);\n                window.location.reload();\n            } else {\n                const errorMessage = await response.text();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to update profile: \".concat(errorMessage));\n            }\n        } catch (error) {\n            console.error(\"Update profile error:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"An error occurred while updating the profile\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Interest\"\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJEKAN\\\\youapp\\\\app\\\\(routes)\\\\profile\\\\components\\\\interest.tsx\",\n        lineNumber: 46,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Interest, \"Y0f+xIRlfDb9ilguM4E3bRwZuI0=\");\n_c = Interest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Interest);\nvar _c;\n$RefreshReg$(_c, \"Interest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9wcm9maWxlL2NvbXBvbmVudHMvaW50ZXJlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDSjtBQUtwQyxNQUFNRyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBa0I7SUFDMUQsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFnQjtJQUU5RCxNQUFNUyxzQkFBc0I7UUFDMUIsSUFBSTtZQUNGLElBQUksQ0FBQ0YsYUFBYTtnQkFDaEJOLHVEQUFLQSxDQUFDUyxLQUFLLENBQUM7Z0JBQ1o7WUFDRjtZQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsZ0RBQ0E7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO29CQUNoQixrQkFBa0JQO2dCQUNwQjtnQkFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQkMsVUFBVTtnQkFDWjtZQUNGO1lBRUYsSUFBSVAsU0FBU1EsRUFBRSxFQUFFO2dCQUNmbEIsdURBQUtBLENBQUNtQixPQUFPLENBQUM7Z0JBQ2RoQixpQkFBaUI7Z0JBQ2pCaUIsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1lBQ3hCLE9BQU87Z0JBQ0wsTUFBTUMsZUFBZSxNQUFNYixTQUFTYyxJQUFJO2dCQUN4Q3hCLHVEQUFLQSxDQUFDUyxLQUFLLENBQUMsNkJBQTBDLE9BQWJjO1lBQzNDO1FBQ0YsRUFBRSxPQUFPZCxPQUFPO1lBQ2RnQixRQUFRaEIsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNULHVEQUFLQSxDQUFDUyxLQUFLLENBQUM7UUFDZDtJQUNGO0lBQ0EscUJBQU8sOERBQUNpQjtrQkFBSTs7Ozs7O0FBQ2Q7R0F2Q016QjtLQUFBQTtBQXlDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvcHJvZmlsZS9jb21wb25lbnRzL2ludGVyZXN0LnRzeD8zM2QzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW50ZXJmYWNlIFVzZXJEYXRhIHtcclxuICBpbnRlcmVzdHM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBJbnRlcmVzdCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNGb3JtVmlzaWJsZSwgc2V0SXNGb3JtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxVc2VyRGF0YSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVBbmRVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJObyBhY2Nlc3MgdG9rZW5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cHM6Ly90ZWNodGVzdC55b3VhcHAuYWkvYXBpL3VwZGF0ZVByb2ZpbGVcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaW50ZXJlc3Q6IFwiXCIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHNldElzRm9ybVZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoYEZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZTogJHtlcnJvck1lc3NhZ2V9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGRhdGUgcHJvZmlsZSBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHRoZSBwcm9maWxlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIDxkaXY+SW50ZXJlc3Q8L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRlcmVzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIkludGVyZXN0IiwiaXNGb3JtVmlzaWJsZSIsInNldElzRm9ybVZpc2libGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiYWNjZXNzVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsImhhbmRsZVNhdmVBbmRVcGRhdGUiLCJlcnJvciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnRlcmVzdCIsIm9rIiwic3VjY2VzcyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3JNZXNzYWdlIiwidGV4dCIsImNvbnNvbGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/profile/components/interest.tsx\n"));

/***/ })

});