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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Interest = ()=>{\n    _s();\n    const [isFormVisible, setIsFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSaveAndUpdate = async ()=>{\n        try {\n            if (!accessToken) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"No access token\");\n                return;\n            }\n            const response = await fetch(\"https://techtest.youapp.ai/api/updateProfile\", {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"x-access-token\": accessToken\n                },\n                body: JSON.stringify({\n                    interest: \"\"\n                })\n            });\n            if (response.ok) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Profile updated successfully\");\n                setIsFormVisible(false);\n                window.location.reload();\n            } else {\n                const errorMessage = await response.text();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to update profile: \".concat(errorMessage));\n            }\n        } catch (error) {\n            console.error(\"Update profile error:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"An error occurred while updating the profile\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(isFormVisible, \"  relative p-2 \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#0e191f] rounded-[14px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between px-6 py-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-lg\",\n                        children: \"Inter\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\PROJEKAN\\\\youapp\\\\app\\\\(routes)\\\\profile\\\\components\\\\interest.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJEKAN\\\\youapp\\\\app\\\\(routes)\\\\profile\\\\components\\\\interest.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\PROJEKAN\\\\youapp\\\\app\\\\(routes)\\\\profile\\\\components\\\\interest.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\PROJEKAN\\\\youapp\\\\app\\\\(routes)\\\\profile\\\\components\\\\interest.tsx\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJEKAN\\\\youapp\\\\app\\\\(routes)\\\\profile\\\\components\\\\interest.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Interest, \"Y0f+xIRlfDb9ilguM4E3bRwZuI0=\");\n_c = Interest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Interest);\nvar _c;\n$RefreshReg$(_c, \"Interest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9wcm9maWxlL2NvbXBvbmVudHMvaW50ZXJlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDSjtBQUtwQyxNQUFNRyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBa0I7SUFDMUQsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFnQjtJQUU5RCxNQUFNUyxzQkFBc0I7UUFDMUIsSUFBSTtZQUNGLElBQUksQ0FBQ0YsYUFBYTtnQkFDaEJOLHVEQUFLQSxDQUFDUyxLQUFLLENBQUM7Z0JBQ1o7WUFDRjtZQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsZ0RBQ0E7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO29CQUNoQixrQkFBa0JQO2dCQUNwQjtnQkFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQkMsVUFBVTtnQkFDWjtZQUNGO1lBRUYsSUFBSVAsU0FBU1EsRUFBRSxFQUFFO2dCQUNmbEIsdURBQUtBLENBQUNtQixPQUFPLENBQUM7Z0JBQ2RoQixpQkFBaUI7Z0JBQ2pCaUIsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1lBQ3hCLE9BQU87Z0JBQ0wsTUFBTUMsZUFBZSxNQUFNYixTQUFTYyxJQUFJO2dCQUN4Q3hCLHVEQUFLQSxDQUFDUyxLQUFLLENBQUMsNkJBQTBDLE9BQWJjO1lBQzNDO1FBQ0YsRUFBRSxPQUFPZCxPQUFPO1lBQ2RnQixRQUFRaEIsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNULHVEQUFLQSxDQUFDUyxLQUFLLENBQUM7UUFDZDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFXLEdBQWlCLE9BQWR6QixlQUFjO2tCQUM3Qiw0RUFBQ3dCO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNmLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUVELFdBQVU7a0NBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuRDtHQXBETTFCO0tBQUFBO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS9wcm9maWxlL2NvbXBvbmVudHMvaW50ZXJlc3QudHN4PzMzZDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbnRlcmZhY2UgVXNlckRhdGEge1xyXG4gIGludGVyZXN0czogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IEludGVyZXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0Zvcm1WaXNpYmxlLCBzZXRJc0Zvcm1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlPFVzZXJEYXRhIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUFuZFVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIk5vIGFjY2VzcyB0b2tlblwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgXCJodHRwczovL3RlY2h0ZXN0LnlvdWFwcC5haS9hcGkvdXBkYXRlUHJvZmlsZVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBpbnRlcmVzdDogXCJcIixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlByb2ZpbGUgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0SXNGb3JtVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICB0b2FzdC5lcnJvcihgRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlVwZGF0ZSBwcm9maWxlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIHByb2ZpbGVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNGb3JtVmlzaWJsZX0gIHJlbGF0aXZlIHAtMiBgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMGUxOTFmXSByb3VuZGVkLVsxNHB4XVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCI+SW50ZXI8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludGVyZXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiSW50ZXJlc3QiLCJpc0Zvcm1WaXNpYmxlIiwic2V0SXNGb3JtVmlzaWJsZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiaGFuZGxlU2F2ZUFuZFVwZGF0ZSIsImVycm9yIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImludGVyZXN0Iiwib2siLCJzdWNjZXNzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvck1lc3NhZ2UiLCJ0ZXh0IiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/profile/components/interest.tsx\n"));

/***/ })

});