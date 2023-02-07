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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-react */ \"./node_modules/ag-grid-react/main.js\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-community/styles/ag-grid.css */ \"./node_modules/ag-grid-community/styles/ag-grid.css\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-community/styles/ag-theme-alpine.css */ \"./node_modules/ag-grid-community/styles/ag-theme-alpine.css\");\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nfunction EmployeeSPA() {\n    _s();\n    const containerStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            width: \"100%\",\n            height: \"100%\"\n        }), []);\n    const gridStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            height: \"100%\",\n            width: \"100%\"\n        }), []);\n    const [rowData, setRowData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [columnDefs, setColumnDefs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            field: \"country\",\n            rowGroup: true,\n            hide: true\n        },\n        {\n            field: \"year\",\n            rowGroup: true,\n            hide: true\n        },\n        {\n            field: \"athlete\",\n            minWidth: 250,\n            cellRenderer: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        marginLeft: 60\n                    },\n                    children: params.value\n                }, void 0, false, {\n                    fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            field: \"sport\",\n            minWidth: 200\n        },\n        {\n            field: \"gold\"\n        },\n        {\n            field: \"silver\"\n        },\n        {\n            field: \"bronze\"\n        }\n    ]);\n    const defaultColDef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            flex: 1,\n            minWidth: 100,\n            sortable: true,\n            resizable: true\n        };\n    }, []);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"https://localhost:7115/api/employees\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 21\n    }, this);\n    if (data) {\n        setRowData(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: containerStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: gridStyle,\n            className: \"ag-theme-alpine\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__.AgGridReact, {\n                rowData: rowData,\n                columnDefs: columnDefs,\n                defaultColDef: defaultColDef,\n                groupDisplayType: \"groupRows\",\n                animateRows: true\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(EmployeeSPA, \"gD6j0dykhpSJtq9qkZfs/y9BX/4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = EmployeeSPA;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmployeeSPA);\nvar _c;\n$RefreshReg$(_c, \"EmployeeSPA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ3pCO0FBRUU7QUFDUTtBQUM5QjtBQUV4QixNQUFNTyxVQUFVLFdBQWFDO3FDQUFUQztRQUFBQTs7V0FBU0QsU0FBU0MsTUFBTUMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7QUFBRTtBQUVwRSxTQUFTQyxjQUFjOztJQUNyQixNQUFNQyxpQkFBaUJYLDhDQUFPQSxDQUFDLElBQU87WUFBRVksT0FBTztZQUFRQyxRQUFRO1FBQU8sSUFBSSxFQUFFO0lBQzVFLE1BQU1DLFlBQVlkLDhDQUFPQSxDQUFDLElBQU87WUFBRWEsUUFBUTtZQUFRRCxPQUFPO1FBQU8sSUFBSSxFQUFFO0lBQ3ZFLE1BQU0sQ0FBQ0csU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ21CLFlBQVlDLGNBQWMsR0FBR3BCLCtDQUFRQSxDQUFDO1FBQzNDO1lBQUVxQixPQUFPO1lBQVdDLFVBQVUsSUFBSTtZQUFFQyxNQUFNLElBQUk7UUFBQztRQUMvQztZQUFFRixPQUFPO1lBQVFDLFVBQVUsSUFBSTtZQUFFQyxNQUFNLElBQUk7UUFBQztRQUM1QztZQUNFRixPQUFPO1lBQ1BHLFVBQVU7WUFDVkMsY0FBYyxDQUFDQyxTQUFXO2dCQUN4QixxQkFBTyw4REFBQ0M7b0JBQUtDLE9BQU87d0JBQUVDLFlBQVk7b0JBQUc7OEJBQUlILE9BQU9JLEtBQUs7Ozs7OztZQUN2RDtRQUNGO1FBQ0E7WUFBRVQsT0FBTztZQUFTRyxVQUFVO1FBQUk7UUFDaEM7WUFBRUgsT0FBTztRQUFPO1FBQ2hCO1lBQUVBLE9BQU87UUFBUztRQUNsQjtZQUFFQSxPQUFPO1FBQVM7S0FDbkI7SUFDRCxNQUFNVSxnQkFBZ0I3Qiw4Q0FBT0EsQ0FBQyxJQUFNO1FBQ2xDLE9BQU87WUFDTDhCLE1BQU07WUFDTlIsVUFBVTtZQUNWUyxVQUFVLElBQUk7WUFDZEMsV0FBVyxJQUFJO1FBQ2pCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHL0IsK0NBQU1BLENBQUMsd0NBQXdDQztJQUV2RSxJQUFJOEIsT0FBTyxxQkFBTyw4REFBQ0M7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNGLE1BQU0scUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDdkIsSUFBR0YsTUFBTTtRQUNQakIsV0FBV2lCO0lBQ2IsQ0FBQztJQUVELHFCQUNFLDhEQUFDRTtRQUFJVCxPQUFPZjtrQkFDWiw0RUFBQ3dCO1lBQUlULE9BQU9aO1lBQVdzQixXQUFVO3NCQUMvQiw0RUFBQ2xDLHNEQUFXQTtnQkFDVmEsU0FBU0E7Z0JBQ1RFLFlBQVlBO2dCQUNaWSxlQUFlQTtnQkFDZlEsa0JBQWtCO2dCQUNsQkMsYUFBYSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0dBakRTNUI7O1FBNEJpQlAsMkNBQU1BOzs7S0E1QnZCTztBQW1EVCwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWdHcmlkUmVhY3QgfSBmcm9tICdhZy1ncmlkLXJlYWN0JztcblxuaW1wb3J0ICdhZy1ncmlkLWNvbW11bml0eS9zdHlsZXMvYWctZ3JpZC5jc3MnO1xuaW1wb3J0ICdhZy1ncmlkLWNvbW11bml0eS9zdHlsZXMvYWctdGhlbWUtYWxwaW5lLmNzcyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cbmZ1bmN0aW9uIEVtcGxveWVlU1BBKCkge1xuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfSksIFtdKTtcbiAgY29uc3QgZ3JpZFN0eWxlID0gdXNlTWVtbygoKSA9PiAoeyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9KSwgW10pO1xuICBjb25zdCBbcm93RGF0YSwgc2V0Um93RGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY29sdW1uRGVmcywgc2V0Q29sdW1uRGVmc10gPSB1c2VTdGF0ZShbXG4gICAgeyBmaWVsZDogJ2NvdW50cnknLCByb3dHcm91cDogdHJ1ZSwgaGlkZTogdHJ1ZSB9LFxuICAgIHsgZmllbGQ6ICd5ZWFyJywgcm93R3JvdXA6IHRydWUsIGhpZGU6IHRydWUgfSxcbiAgICB7XG4gICAgICBmaWVsZDogJ2F0aGxldGUnLFxuICAgICAgbWluV2lkdGg6IDI1MCxcbiAgICAgIGNlbGxSZW5kZXJlcjogKHBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogNjAgfX0+e3BhcmFtcy52YWx1ZX08L3NwYW4+O1xuICAgICAgfSxcbiAgICB9LFxuICAgIHsgZmllbGQ6ICdzcG9ydCcsIG1pbldpZHRoOiAyMDAgfSxcbiAgICB7IGZpZWxkOiAnZ29sZCcgfSxcbiAgICB7IGZpZWxkOiAnc2lsdmVyJyB9LFxuICAgIHsgZmllbGQ6ICdicm9uemUnIH0sXG4gIF0pO1xuICBjb25zdCBkZWZhdWx0Q29sRGVmID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZsZXg6IDEsXG4gICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignaHR0cHM6Ly9sb2NhbGhvc3Q6NzExNS9hcGkvZW1wbG95ZWVzJywgZmV0Y2hlcilcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICBpZihkYXRhKSB7XG4gICAgc2V0Um93RGF0YShkYXRhKVxuICB9XG4gICAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgIDxkaXYgc3R5bGU9e2dyaWRTdHlsZX0gY2xhc3NOYW1lPVwiYWctdGhlbWUtYWxwaW5lXCI+XG4gICAgICA8QWdHcmlkUmVhY3RcbiAgICAgICAgcm93RGF0YT17cm93RGF0YX1cbiAgICAgICAgY29sdW1uRGVmcz17Y29sdW1uRGVmc31cbiAgICAgICAgZGVmYXVsdENvbERlZj17ZGVmYXVsdENvbERlZn1cbiAgICAgICAgZ3JvdXBEaXNwbGF5VHlwZT17J2dyb3VwUm93cyd9XG4gICAgICAgIGFuaW1hdGVSb3dzPXt0cnVlfVxuICAgICAgPjwvQWdHcmlkUmVhY3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlU1BBIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWYiLCJBZ0dyaWRSZWFjdCIsInVzZVNXUiIsImZldGNoZXIiLCJmZXRjaCIsImFyZ3MiLCJ0aGVuIiwicmVzIiwianNvbiIsIkVtcGxveWVlU1BBIiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImdyaWRTdHlsZSIsInJvd0RhdGEiLCJzZXRSb3dEYXRhIiwiY29sdW1uRGVmcyIsInNldENvbHVtbkRlZnMiLCJmaWVsZCIsInJvd0dyb3VwIiwiaGlkZSIsIm1pbldpZHRoIiwiY2VsbFJlbmRlcmVyIiwicGFyYW1zIiwic3BhbiIsInN0eWxlIiwibWFyZ2luTGVmdCIsInZhbHVlIiwiZGVmYXVsdENvbERlZiIsImZsZXgiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImRhdGEiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImdyb3VwRGlzcGxheVR5cGUiLCJhbmltYXRlUm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});