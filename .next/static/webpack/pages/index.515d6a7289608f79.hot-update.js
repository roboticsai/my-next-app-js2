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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-react */ \"./node_modules/ag-grid-react/main.js\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-community/styles/ag-grid.css */ \"./node_modules/ag-grid-community/styles/ag-grid.css\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-community/styles/ag-theme-alpine.css */ \"./node_modules/ag-grid-community/styles/ag-theme-alpine.css\");\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst getApiData = async ()=>{\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/todos/\").then((response)=>response.json());\n    // update the state\n    setUsers(response);\n};\nfunction EmployeeSPA() {\n    _s();\n    const containerStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            width: \"100%\",\n            height: \"100%\"\n        }), []);\n    const gridStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            height: \"100%\",\n            width: \"100%\"\n        }), []);\n    const [rowData, setRowData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [columnDefs, setColumnDefs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            field: \"country\"\n        },\n        {\n            field: \"year\"\n        },\n        {\n            field: \"athlete\",\n            minWidth: 250,\n            cellRenderer: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        marginLeft: 60\n                    },\n                    children: params.value\n                }, void 0, false, {\n                    fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            field: \"sport\",\n            minWidth: 200\n        },\n        {\n            field: \"gold\"\n        },\n        {\n            field: \"silver\"\n        },\n        {\n            field: \"bronze\"\n        }\n    ]);\n    const defaultColDef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            flex: 1,\n            minWidth: 100,\n            sortable: true,\n            resizable: true\n        };\n    }, []);\n    const getApiData = async ()=>{\n        const response = await fetch(\"https://www.ag-grid.com/example-assets/olympic-winners.json\").then((response)=>response.json());\n        // update the state\n        setRowData(response);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"hello\");\n        getApiData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__.AgGridReact, {\n        rowData: rowData,\n        columnDefs: columnDefs\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(EmployeeSPA, \"MZYk2NLnvI/q0V83s95x3dEQ5dg=\");\n_c = EmployeeSPA;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmployeeSPA);\nvar _c;\n$RefreshReg$(_c, \"EmployeeSPA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdFO0FBQzVCO0FBRUU7QUFDUTtBQUM5QjtBQUV4QixNQUFNTyxhQUFhLFVBQVk7SUFDN0IsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FDQUMsSUFBSSxDQUFDLENBQUNGLFdBQWFBLFNBQVNHLElBQUk7SUFFbEMsbUJBQW1CO0lBQ25CQyxTQUFTSjtBQUNYO0FBRUEsU0FBU0ssY0FBYzs7SUFDckIsTUFBTUMsaUJBQWlCWCw4Q0FBT0EsQ0FBQyxJQUFPO1lBQUVZLE9BQU87WUFBUUMsUUFBUTtRQUFPLElBQUksRUFBRTtJQUM1RSxNQUFNQyxZQUFZZCw4Q0FBT0EsQ0FBQyxJQUFPO1lBQUVhLFFBQVE7WUFBUUQsT0FBTztRQUFPLElBQUksRUFBRTtJQUN2RSxNQUFNLENBQUNHLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQTtJQUN0QyxNQUFNLENBQUNtQixZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBQztRQUMzQztZQUFFcUIsT0FBTztRQUFVO1FBQ25CO1lBQUVBLE9BQU87UUFBTztRQUNoQjtZQUNFQSxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsY0FBYyxDQUFDQyxTQUFXO2dCQUN4QixxQkFBTyw4REFBQ0M7b0JBQUtDLE9BQU87d0JBQUVDLFlBQVk7b0JBQUc7OEJBQUlILE9BQU9JLEtBQUs7Ozs7OztZQUN2RDtRQUNGO1FBQ0E7WUFBRVAsT0FBTztZQUFTQyxVQUFVO1FBQUk7UUFDaEM7WUFBRUQsT0FBTztRQUFPO1FBQ2hCO1lBQUVBLE9BQU87UUFBUztRQUNsQjtZQUFFQSxPQUFPO1FBQVM7S0FDbkI7SUFDRCxNQUFNUSxnQkFBZ0IzQiw4Q0FBT0EsQ0FBQyxJQUFNO1FBQ2xDLE9BQU87WUFDTDRCLE1BQU07WUFDTlIsVUFBVTtZQUNWUyxVQUFVLElBQUk7WUFDZEMsV0FBVyxJQUFJO1FBQ2pCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTTFCLGFBQWEsVUFBWTtRQUM3QixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLCtEQUNBQyxJQUFJLENBQUMsQ0FBQ0YsV0FBYUEsU0FBU0csSUFBSTtRQUVsQyxtQkFBbUI7UUFDbkJRLFdBQVdYO0lBQ2I7SUFFQUosZ0RBQVNBLENBQUMsSUFBTTtRQUNkOEIsUUFBUUMsR0FBRyxDQUFDO1FBQ1o1QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRixzREFBV0E7UUFDVmEsU0FBU0E7UUFDVEUsWUFBWUE7Ozs7OztBQUdsQjtHQWhEU1A7S0FBQUE7QUFrRFQsK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFnR3JpZFJlYWN0IH0gZnJvbSAnYWctZ3JpZC1yZWFjdCc7XG5cbmltcG9ydCAnYWctZ3JpZC1jb21tdW5pdHkvc3R5bGVzL2FnLWdyaWQuY3NzJztcbmltcG9ydCAnYWctZ3JpZC1jb21tdW5pdHkvc3R5bGVzL2FnLXRoZW1lLWFscGluZS5jc3MnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmNvbnN0IGdldEFwaURhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvXCJcbiAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuICAvLyB1cGRhdGUgdGhlIHN0YXRlXG4gIHNldFVzZXJzKHJlc3BvbnNlKTtcbn07XG5cbmZ1bmN0aW9uIEVtcGxveWVlU1BBKCkge1xuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfSksIFtdKTtcbiAgY29uc3QgZ3JpZFN0eWxlID0gdXNlTWVtbygoKSA9PiAoeyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9KSwgW10pO1xuICBjb25zdCBbcm93RGF0YSwgc2V0Um93RGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY29sdW1uRGVmcywgc2V0Q29sdW1uRGVmc10gPSB1c2VTdGF0ZShbXG4gICAgeyBmaWVsZDogJ2NvdW50cnknIH0sXG4gICAgeyBmaWVsZDogJ3llYXInIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdhdGhsZXRlJyxcbiAgICAgIG1pbldpZHRoOiAyNTAsXG4gICAgICBjZWxsUmVuZGVyZXI6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDYwIH19PntwYXJhbXMudmFsdWV9PC9zcGFuPjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGZpZWxkOiAnc3BvcnQnLCBtaW5XaWR0aDogMjAwIH0sXG4gICAgeyBmaWVsZDogJ2dvbGQnIH0sXG4gICAgeyBmaWVsZDogJ3NpbHZlcicgfSxcbiAgICB7IGZpZWxkOiAnYnJvbnplJyB9LFxuICBdKTtcbiAgY29uc3QgZGVmYXVsdENvbERlZiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBmbGV4OiAxLFxuICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIH07XG4gIH0sIFtdKTtcbiAgICBcbiAgY29uc3QgZ2V0QXBpRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL3d3dy5hZy1ncmlkLmNvbS9leGFtcGxlLWFzc2V0cy9vbHltcGljLXdpbm5lcnMuanNvblwiXG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgXG4gICAgLy8gdXBkYXRlIHRoZSBzdGF0ZVxuICAgIHNldFJvd0RhdGEocmVzcG9uc2UpXG4gIH07XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG4gICAgZ2V0QXBpRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWdHcmlkUmVhY3RcbiAgICAgIHJvd0RhdGE9e3Jvd0RhdGF9XG4gICAgICBjb2x1bW5EZWZzPXtjb2x1bW5EZWZzfVxuICAgID48L0FnR3JpZFJlYWN0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlU1BBIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJBZ0dyaWRSZWFjdCIsInVzZVNXUiIsImdldEFwaURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwidGhlbiIsImpzb24iLCJzZXRVc2VycyIsIkVtcGxveWVlU1BBIiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImdyaWRTdHlsZSIsInJvd0RhdGEiLCJzZXRSb3dEYXRhIiwiY29sdW1uRGVmcyIsInNldENvbHVtbkRlZnMiLCJmaWVsZCIsIm1pbldpZHRoIiwiY2VsbFJlbmRlcmVyIiwicGFyYW1zIiwic3BhbiIsInN0eWxlIiwibWFyZ2luTGVmdCIsInZhbHVlIiwiZGVmYXVsdENvbERlZiIsImZsZXgiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});