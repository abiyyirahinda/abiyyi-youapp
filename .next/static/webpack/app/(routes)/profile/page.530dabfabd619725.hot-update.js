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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\nconst Interest = ()=>{\n    _s();\n    const [isFormVisible, setIsFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const handleSaveAndUpdate = async ()=>{\n        try {\n            if (!accessToken) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"No access token\");\n                return;\n            }\n            const response = await fetch(\"https://techtest.youapp.ai/api/updateProfile\", {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"x-access-token\": accessToken\n                },\n                body: JSON.stringify({\n                    interest: \"\"\n                })\n            });\n            if (response.ok) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].success(\"Profile updated successfully\");\n                setIsFormVisible(false);\n                window.location.reload();\n            } else {\n                const errorMessage = await response.text();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"Failed to update profile: \".concat(errorMessage));\n            }\n        } catch (error) {\n            console.error(\"Update profile error:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"An error occurred while updating the profile\");\n        }\n    };\n    return d;\n};\n_s(Interest, \"Y0f+xIRlfDb9ilguM4E3bRwZuI0=\");\n_c = Interest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Interest);\nvar _c;\n$RefreshReg$(_c, \"Interest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9wcm9maWxlL2NvbXBvbmVudHMvaW50ZXJlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3dDO0FBQ0o7QUFLcEMsTUFBTUcsV0FBVzs7SUFDZixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQWtCO0lBQzFELE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBZ0I7SUFFOUQsTUFBTVMsc0JBQXNCO1FBQzFCLElBQUk7WUFDRixJQUFJLENBQUNGLGFBQWE7Z0JBQ2hCTix1REFBS0EsQ0FBQ1MsS0FBSyxDQUFDO2dCQUNaO1lBQ0Y7WUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLGdEQUNBO2dCQUNFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtvQkFDaEIsa0JBQWtCUDtnQkFDcEI7Z0JBQ0FRLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkJDLFVBQVU7Z0JBQ1o7WUFDRjtZQUVGLElBQUlQLFNBQVNRLEVBQUUsRUFBRTtnQkFDZmxCLHVEQUFLQSxDQUFDbUIsT0FBTyxDQUFDO2dCQUNkaEIsaUJBQWlCO2dCQUNqQmlCLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtZQUN4QixPQUFPO2dCQUNMLE1BQU1DLGVBQWUsTUFBTWIsU0FBU2MsSUFBSTtnQkFDeEN4Qix1REFBS0EsQ0FBQ1MsS0FBSyxDQUFDLDZCQUEwQyxPQUFiYztZQUMzQztRQUNGLEVBQUUsT0FBT2QsT0FBTztZQUNkZ0IsUUFBUWhCLEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3ZDVCx1REFBS0EsQ0FBQ1MsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUNBLE9BQ0VpQjtBQUVKO0dBekNNekI7S0FBQUE7QUEyQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb3V0ZXMpL3Byb2ZpbGUvY29tcG9uZW50cy9pbnRlcmVzdC50c3g/MzNkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmludGVyZmFjZSBVc2VyRGF0YSB7XHJcbiAgaW50ZXJlc3RzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3QgSW50ZXJlc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzRm9ybVZpc2libGUsIHNldElzRm9ybVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGU8VXNlckRhdGEgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQW5kVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFhY2Nlc3NUb2tlbikge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiTm8gYWNjZXNzIHRva2VuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vdGVjaHRlc3QueW91YXBwLmFpL2FwaS91cGRhdGVQcm9maWxlXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiBhY2Nlc3NUb2tlbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGludGVyZXN0OiBcIlwiLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRJc0Zvcm1WaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIHRvYXN0LmVycm9yKGBGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVXBkYXRlIHByb2ZpbGUgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB1cGRhdGluZyB0aGUgcHJvZmlsZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybihcclxuICAgIGRcclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRlcmVzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIkludGVyZXN0IiwiaXNGb3JtVmlzaWJsZSIsInNldElzRm9ybVZpc2libGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiYWNjZXNzVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsImhhbmRsZVNhdmVBbmRVcGRhdGUiLCJlcnJvciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnRlcmVzdCIsIm9rIiwic3VjY2VzcyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3JNZXNzYWdlIiwidGV4dCIsImNvbnNvbGUiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/profile/components/interest.tsx\n"));

/***/ })

});