"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-react */ \"./node_modules/ag-grid-react/main.js\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-community/styles/ag-grid.css */ \"./node_modules/ag-grid-community/styles/ag-grid.css\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-community/styles/ag-theme-alpine.css */ \"./node_modules/ag-grid-community/styles/ag-theme-alpine.css\");\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((r)=>r.json());\nfunction EmployeeSPA() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const containerStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            width: \"100%\",\n            height: \"100%\"\n        }), []);\n    const gridStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            height: \"100%\",\n            width: \"100%\"\n        }), []);\n    const [rowData, setRowData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [columnDefs, setColumnDefs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            field: \"country\",\n            rowGroup: true,\n            hide: true\n        },\n        {\n            field: \"year\",\n            rowGroup: true,\n            hide: true\n        },\n        {\n            field: \"athlete\",\n            minWidth: 250,\n            cellRenderer: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        marginLeft: 60\n                    },\n                    children: params.value\n                }, void 0, false, {\n                    fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            field: \"sport\",\n            minWidth: 200\n        },\n        {\n            field: \"gold\"\n        },\n        {\n            field: \"silver\"\n        },\n        {\n            field: \"bronze\"\n        }\n    ]);\n    const defaultColDef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            flex: 1,\n            minWidth: 100,\n            sortable: true,\n            resizable: true\n        };\n    }, []);\n    const onGridReady = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(_s1((params)=>{\n        _s1();\n        const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"https://www.ag-grid.com/example-assets/olympic-winners.json\", fetcher);\n        if (data) {\n            setRowData(data);\n        }\n    }, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n        return [\n            swr__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        ];\n    }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: gridStyle,\n        className: \"ag-theme-alpine\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_grid_react__WEBPACK_IMPORTED_MODULE_3__.AgGridReact, {\n            rowData: rowData,\n            columnDefs: columnDefs,\n            defaultColDef: defaultColDef,\n            groupDisplayType: \"groupRows\",\n            animateRows: true,\n            onGridReady: onGridReady\n        }, void 0, false, {\n            fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n            lineNumber: 50,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(EmployeeSPA, \"xU9bs1OS2qt5MblcvpauD5GnmKU=\");\n_c = EmployeeSPA;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmployeeSPA);\nvar _c;\n$RefreshReg$(_c, \"EmployeeSPA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDbEM7QUFDUztBQUVFO0FBQ1E7QUFDOUI7QUFFeEIsTUFBTVEsVUFBVUMsQ0FBQUEsTUFBT0MsTUFBTUQsS0FBS0UsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxJQUFJO0FBRWxELFNBQVNDLGNBQWM7OztJQUNyQixNQUFNQyxpQkFBaUJaLDhDQUFPQSxDQUFDLElBQU87WUFBRWEsT0FBTztZQUFRQyxRQUFRO1FBQU8sSUFBSSxFQUFFO0lBQzVFLE1BQU1DLFlBQVlmLDhDQUFPQSxDQUFDLElBQU87WUFBRWMsUUFBUTtZQUFRRCxPQUFPO1FBQU8sSUFBSSxFQUFFO0lBQ3ZFLE1BQU0sQ0FBQ0csU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ29CLFlBQVlDLGNBQWMsR0FBR3JCLCtDQUFRQSxDQUFDO1FBQzNDO1lBQUVzQixPQUFPO1lBQVdDLFVBQVUsSUFBSTtZQUFFQyxNQUFNLElBQUk7UUFBQztRQUMvQztZQUFFRixPQUFPO1lBQVFDLFVBQVUsSUFBSTtZQUFFQyxNQUFNLElBQUk7UUFBQztRQUM1QztZQUNFRixPQUFPO1lBQ1BHLFVBQVU7WUFDVkMsY0FBYyxDQUFDQyxTQUFXO2dCQUN4QixxQkFBTyw4REFBQ0M7b0JBQUtDLE9BQU87d0JBQUVDLFlBQVk7b0JBQUc7OEJBQUlILE9BQU9JLEtBQUs7Ozs7OztZQUN2RDtRQUNGO1FBQ0E7WUFBRVQsT0FBTztZQUFTRyxVQUFVO1FBQUk7UUFDaEM7WUFBRUgsT0FBTztRQUFPO1FBQ2hCO1lBQUVBLE9BQU87UUFBUztRQUNsQjtZQUFFQSxPQUFPO1FBQVM7S0FDbkI7SUFDRCxNQUFNVSxnQkFBZ0I5Qiw4Q0FBT0EsQ0FBQyxJQUFNO1FBQ2xDLE9BQU87WUFDTCtCLE1BQU07WUFDTlIsVUFBVTtZQUNWUyxVQUFVLElBQUk7WUFDZEMsV0FBVyxJQUFJO1FBQ2pCO0lBQ0YsR0FBRyxFQUFFO0lBSUwsTUFBTUMsY0FBY25DLGtEQUFXQSxLQUFDLENBQUMwQixTQUFXOztRQUMxQyxNQUFNLEVBQUVVLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdoQywrQ0FBTUEsQ0FBQywrREFBK0RDO1FBQzlGLElBQUc4QixNQUFNO1lBQ1BsQixXQUFXa0I7UUFDYixDQUFDO0lBQ0g7O1lBSjBCL0IsMkNBQU1BOztRQUk3QixFQUFFO0lBRUwscUJBQ0UsOERBQUNpQztRQUFJVixPQUFPWjtRQUFXdUIsV0FBVTtrQkFDakMsNEVBQUNuQyxzREFBV0E7WUFDVmEsU0FBU0E7WUFDVEUsWUFBWUE7WUFDWlksZUFBZUE7WUFDZlMsa0JBQWtCO1lBQ2xCQyxhQUFhLElBQUk7WUFDakJOLGFBQWFBOzs7Ozs7Ozs7OztBQUluQjtHQWpEU3ZCO0tBQUFBO0FBbURULCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayx1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQWdHcmlkUmVhY3QgfSBmcm9tICdhZy1ncmlkLXJlYWN0JztcblxuaW1wb3J0ICdhZy1ncmlkLWNvbW11bml0eS9zdHlsZXMvYWctZ3JpZC5jc3MnO1xuaW1wb3J0ICdhZy1ncmlkLWNvbW11bml0eS9zdHlsZXMvYWctdGhlbWUtYWxwaW5lLmNzcyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcblxuZnVuY3Rpb24gRW1wbG95ZWVTUEEoKSB7XG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0gdXNlTWVtbygoKSA9PiAoeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9KSwgW10pO1xuICBjb25zdCBncmlkU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH0pLCBbXSk7XG4gIGNvbnN0IFtyb3dEYXRhLCBzZXRSb3dEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjb2x1bW5EZWZzLCBzZXRDb2x1bW5EZWZzXSA9IHVzZVN0YXRlKFtcbiAgICB7IGZpZWxkOiAnY291bnRyeScsIHJvd0dyb3VwOiB0cnVlLCBoaWRlOiB0cnVlIH0sXG4gICAgeyBmaWVsZDogJ3llYXInLCByb3dHcm91cDogdHJ1ZSwgaGlkZTogdHJ1ZSB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAnYXRobGV0ZScsXG4gICAgICBtaW5XaWR0aDogMjUwLFxuICAgICAgY2VsbFJlbmRlcmVyOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA2MCB9fT57cGFyYW1zLnZhbHVlfTwvc3Bhbj47XG4gICAgICB9LFxuICAgIH0sXG4gICAgeyBmaWVsZDogJ3Nwb3J0JywgbWluV2lkdGg6IDIwMCB9LFxuICAgIHsgZmllbGQ6ICdnb2xkJyB9LFxuICAgIHsgZmllbGQ6ICdzaWx2ZXInIH0sXG4gICAgeyBmaWVsZDogJ2Jyb256ZScgfSxcbiAgXSk7XG4gIGNvbnN0IGRlZmF1bHRDb2xEZWYgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmxleDogMSxcbiAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICB9O1xuICB9LCBbXSk7XG5cblxuXG4gIGNvbnN0IG9uR3JpZFJlYWR5ID0gdXNlQ2FsbGJhY2soKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignaHR0cHM6Ly93d3cuYWctZ3JpZC5jb20vZXhhbXBsZS1hc3NldHMvb2x5bXBpYy13aW5uZXJzLmpzb24nLCBmZXRjaGVyKVxuICAgIGlmKGRhdGEpIHtcbiAgICAgIHNldFJvd0RhdGEoZGF0YSlcbiAgICB9XG4gIH0sIFtdKTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtncmlkU3R5bGV9IGNsYXNzTmFtZT1cImFnLXRoZW1lLWFscGluZVwiPlxuICAgIDxBZ0dyaWRSZWFjdFxuICAgICAgcm93RGF0YT17cm93RGF0YX1cbiAgICAgIGNvbHVtbkRlZnM9e2NvbHVtbkRlZnN9XG4gICAgICBkZWZhdWx0Q29sRGVmPXtkZWZhdWx0Q29sRGVmfVxuICAgICAgZ3JvdXBEaXNwbGF5VHlwZT17J2dyb3VwUm93cyd9XG4gICAgICBhbmltYXRlUm93cz17dHJ1ZX1cbiAgICAgIG9uR3JpZFJlYWR5PXtvbkdyaWRSZWFkeX1cbiAgICA+PC9BZ0dyaWRSZWFjdD5cbiAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVTUEEiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZiIsInJlbmRlciIsIkFnR3JpZFJlYWN0IiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiRW1wbG95ZWVTUEEiLCJjb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ3JpZFN0eWxlIiwicm93RGF0YSIsInNldFJvd0RhdGEiLCJjb2x1bW5EZWZzIiwic2V0Q29sdW1uRGVmcyIsImZpZWxkIiwicm93R3JvdXAiLCJoaWRlIiwibWluV2lkdGgiLCJjZWxsUmVuZGVyZXIiLCJwYXJhbXMiLCJzcGFuIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwidmFsdWUiLCJkZWZhdWx0Q29sRGVmIiwiZmxleCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwib25HcmlkUmVhZHkiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJncm91cERpc3BsYXlUeXBlIiwiYW5pbWF0ZVJvd3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});