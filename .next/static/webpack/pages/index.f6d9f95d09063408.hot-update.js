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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-react */ \"./node_modules/ag-grid-react/main.js\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-community/styles/ag-grid.css */ \"./node_modules/ag-grid-community/styles/ag-grid.css\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-community/styles/ag-theme-alpine.css */ \"./node_modules/ag-grid-community/styles/ag-theme-alpine.css\");\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst getApiData = async ()=>{\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/todos/\").then((response)=>response.json());\n    // update the state\n    setUsers(response);\n};\nfunction EmployeeSPA() {\n    _s();\n    const containerStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            width: \"100%\",\n            height: \"100%\"\n        }), []);\n    const gridStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            height: \"100%\",\n            width: \"100%\"\n        }), []);\n    const [rowData, setRowData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [columnDefs, setColumnDefs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            field: \"country\",\n            rowGroup: true,\n            hide: true\n        },\n        {\n            field: \"year\",\n            rowGroup: true,\n            hide: true\n        },\n        {\n            field: \"athlete\",\n            minWidth: 250,\n            cellRenderer: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        marginLeft: 60\n                    },\n                    children: params.value\n                }, void 0, false, {\n                    fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            field: \"sport\",\n            minWidth: 200\n        },\n        {\n            field: \"gold\"\n        },\n        {\n            field: \"silver\"\n        },\n        {\n            field: \"bronze\"\n        }\n    ]);\n    const defaultColDef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            flex: 1,\n            minWidth: 100,\n            sortable: true,\n            resizable: true\n        };\n    }, []);\n    const getApiData = async ()=>{\n        const response = await fetch(\"https://www.ag-grid.com/example-assets/olympic-winners.json\").then((response)=>response.json());\n        // update the state\n        setRowData(response);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApiData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: containerStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: gridStyle,\n            className: \"ag-theme-alpine\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__.AgGridReact, {\n                rowData: rowData,\n                columnDefs: columnDefs,\n                defaultColDef: defaultColDef,\n                groupDisplayType: \"groupRows\",\n                animateRows: true\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n            lineNumber: 59,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(EmployeeSPA, \"cyqxXlhzbpxnZY2DN1yG1nPK5sI=\");\n_c = EmployeeSPA;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmployeeSPA);\nvar _c;\n$RefreshReg$(_c, \"EmployeeSPA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdFO0FBQzVCO0FBRUU7QUFDUTtBQUM5QjtBQUV4QixNQUFNTyxhQUFhLFVBQVk7SUFDN0IsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FDQUMsSUFBSSxDQUFDLENBQUNGLFdBQWFBLFNBQVNHLElBQUk7SUFFbEMsbUJBQW1CO0lBQ25CQyxTQUFTSjtBQUNYO0FBRUEsU0FBU0ssY0FBYzs7SUFDckIsTUFBTUMsaUJBQWlCWCw4Q0FBT0EsQ0FBQyxJQUFPO1lBQUVZLE9BQU87WUFBUUMsUUFBUTtRQUFPLElBQUksRUFBRTtJQUM1RSxNQUFNQyxZQUFZZCw4Q0FBT0EsQ0FBQyxJQUFPO1lBQUVhLFFBQVE7WUFBUUQsT0FBTztRQUFPLElBQUksRUFBRTtJQUN2RSxNQUFNLENBQUNHLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQTtJQUN0QyxNQUFNLENBQUNtQixZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBQztRQUMzQztZQUFFcUIsT0FBTztZQUFXQyxVQUFVLElBQUk7WUFBRUMsTUFBTSxJQUFJO1FBQUM7UUFDL0M7WUFBRUYsT0FBTztZQUFRQyxVQUFVLElBQUk7WUFBRUMsTUFBTSxJQUFJO1FBQUM7UUFDNUM7WUFDRUYsT0FBTztZQUNQRyxVQUFVO1lBQ1ZDLGNBQWMsQ0FBQ0MsU0FBVztnQkFDeEIscUJBQU8sOERBQUNDO29CQUFLQyxPQUFPO3dCQUFFQyxZQUFZO29CQUFHOzhCQUFJSCxPQUFPSSxLQUFLOzs7Ozs7WUFDdkQ7UUFDRjtRQUNBO1lBQUVULE9BQU87WUFBU0csVUFBVTtRQUFJO1FBQ2hDO1lBQUVILE9BQU87UUFBTztRQUNoQjtZQUFFQSxPQUFPO1FBQVM7UUFDbEI7WUFBRUEsT0FBTztRQUFTO0tBQ25CO0lBQ0QsTUFBTVUsZ0JBQWdCN0IsOENBQU9BLENBQUMsSUFBTTtRQUNsQyxPQUFPO1lBQ0w4QixNQUFNO1lBQ05SLFVBQVU7WUFDVlMsVUFBVSxJQUFJO1lBQ2RDLFdBQVcsSUFBSTtRQUNqQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU01QixhQUFhLFVBQVk7UUFDN0IsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrREFDQUMsSUFBSSxDQUFDLENBQUNGLFdBQWFBLFNBQVNHLElBQUk7UUFFbEMsbUJBQW1CO1FBQ25CUSxXQUFXWDtJQUNiO0lBQ0FKLGdEQUFTQSxDQUFDLElBQU07UUFDZEc7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzZCO1FBQUlQLE9BQU9mO2tCQUNaLDRFQUFDc0I7WUFBSVAsT0FBT1o7WUFBV29CLFdBQVU7c0JBQy9CLDRFQUFDaEMsc0RBQVdBO2dCQUNWYSxTQUFTQTtnQkFDVEUsWUFBWUE7Z0JBQ1pZLGVBQWVBO2dCQUNmTSxrQkFBa0I7Z0JBQ2xCQyxhQUFhLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0FyRFMxQjtLQUFBQTtBQXVEVCwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWdHcmlkUmVhY3QgfSBmcm9tICdhZy1ncmlkLXJlYWN0JztcblxuaW1wb3J0ICdhZy1ncmlkLWNvbW11bml0eS9zdHlsZXMvYWctZ3JpZC5jc3MnO1xuaW1wb3J0ICdhZy1ncmlkLWNvbW11bml0eS9zdHlsZXMvYWctdGhlbWUtYWxwaW5lLmNzcyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZ2V0QXBpRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy9cIlxuICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gIC8vIHVwZGF0ZSB0aGUgc3RhdGVcbiAgc2V0VXNlcnMocmVzcG9uc2UpO1xufTtcblxuZnVuY3Rpb24gRW1wbG95ZWVTUEEoKSB7XG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0gdXNlTWVtbygoKSA9PiAoeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9KSwgW10pO1xuICBjb25zdCBncmlkU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH0pLCBbXSk7XG4gIGNvbnN0IFtyb3dEYXRhLCBzZXRSb3dEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjb2x1bW5EZWZzLCBzZXRDb2x1bW5EZWZzXSA9IHVzZVN0YXRlKFtcbiAgICB7IGZpZWxkOiAnY291bnRyeScsIHJvd0dyb3VwOiB0cnVlLCBoaWRlOiB0cnVlIH0sXG4gICAgeyBmaWVsZDogJ3llYXInLCByb3dHcm91cDogdHJ1ZSwgaGlkZTogdHJ1ZSB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAnYXRobGV0ZScsXG4gICAgICBtaW5XaWR0aDogMjUwLFxuICAgICAgY2VsbFJlbmRlcmVyOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA2MCB9fT57cGFyYW1zLnZhbHVlfTwvc3Bhbj47XG4gICAgICB9LFxuICAgIH0sXG4gICAgeyBmaWVsZDogJ3Nwb3J0JywgbWluV2lkdGg6IDIwMCB9LFxuICAgIHsgZmllbGQ6ICdnb2xkJyB9LFxuICAgIHsgZmllbGQ6ICdzaWx2ZXInIH0sXG4gICAgeyBmaWVsZDogJ2Jyb256ZScgfSxcbiAgXSk7XG4gIGNvbnN0IGRlZmF1bHRDb2xEZWYgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmxleDogMSxcbiAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICB9O1xuICB9LCBbXSk7XG4gICAgXG4gIGNvbnN0IGdldEFwaURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly93d3cuYWctZ3JpZC5jb20vZXhhbXBsZS1hc3NldHMvb2x5bXBpYy13aW5uZXJzLmpzb25cIlxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIFxuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGVcbiAgICBzZXRSb3dEYXRhKHJlc3BvbnNlKVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFwaURhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgIDxkaXYgc3R5bGU9e2dyaWRTdHlsZX0gY2xhc3NOYW1lPVwiYWctdGhlbWUtYWxwaW5lXCI+XG4gICAgICA8QWdHcmlkUmVhY3RcbiAgICAgICAgcm93RGF0YT17cm93RGF0YX1cbiAgICAgICAgY29sdW1uRGVmcz17Y29sdW1uRGVmc31cbiAgICAgICAgZGVmYXVsdENvbERlZj17ZGVmYXVsdENvbERlZn1cbiAgICAgICAgZ3JvdXBEaXNwbGF5VHlwZT17J2dyb3VwUm93cyd9XG4gICAgICAgIGFuaW1hdGVSb3dzPXt0cnVlfVxuICAgICAgPjwvQWdHcmlkUmVhY3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlU1BBIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJBZ0dyaWRSZWFjdCIsInVzZVNXUiIsImdldEFwaURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwidGhlbiIsImpzb24iLCJzZXRVc2VycyIsIkVtcGxveWVlU1BBIiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImdyaWRTdHlsZSIsInJvd0RhdGEiLCJzZXRSb3dEYXRhIiwiY29sdW1uRGVmcyIsInNldENvbHVtbkRlZnMiLCJmaWVsZCIsInJvd0dyb3VwIiwiaGlkZSIsIm1pbldpZHRoIiwiY2VsbFJlbmRlcmVyIiwicGFyYW1zIiwic3BhbiIsInN0eWxlIiwibWFyZ2luTGVmdCIsInZhbHVlIiwiZGVmYXVsdENvbERlZiIsImZsZXgiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImRpdiIsImNsYXNzTmFtZSIsImdyb3VwRGlzcGxheVR5cGUiLCJhbmltYXRlUm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});