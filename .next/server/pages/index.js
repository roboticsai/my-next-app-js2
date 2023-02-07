/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-react */ \"ag-grid-react\");\n/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-community/styles/ag-grid.css */ \"./node_modules/ag-grid-community/styles/ag-grid.css\");\n/* harmony import */ var ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-community/styles/ag-theme-alpine.css */ \"./node_modules/ag-grid-community/styles/ag-theme-alpine.css\");\n/* harmony import */ var ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_styles_ag_theme_alpine_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_5__]);\nswr__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst getApiData = async ()=>{\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/todos/\").then((response)=>response.json());\n    // update the state\n    setUsers(response);\n};\nfunction EmployeeSPA() {\n    const [rowData, setRowData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [columnDefs, setColumnDefs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            field: \"country\",\n            sortable: true,\n            filter: true\n        },\n        {\n            field: \"year\"\n        },\n        {\n            field: \"athlete\",\n            minWidth: 250,\n            cellRenderer: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        marginLeft: 60\n                    },\n                    children: params.value\n                }, void 0, false, {\n                    fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            field: \"sport\",\n            minWidth: 200\n        },\n        {\n            field: \"gold\"\n        },\n        {\n            field: \"silver\"\n        },\n        {\n            field: \"bronze\"\n        }\n    ]);\n    const getApiData = async ()=>{\n        const response = await fetch(\"https://www.ag-grid.com/example-assets/olympic-winners.json\").then((response)=>response.json());\n        // update the state\n        setRowData(response);\n        console.log(response);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApiData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ag-theme-alpine\",\n        style: {\n            height: 400,\n            width: 600\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__.AgGridReact, {\n            rowData: rowData,\n            columnDefs: columnDefs\n        }, void 0, false, {\n            fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/my-next-app-js2/pages/index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeSPA);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdFO0FBQzVCO0FBRUU7QUFDUTtBQUM5QjtBQUV4QixNQUFNTyxhQUFhLFVBQVk7SUFDN0IsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FDQUMsSUFBSSxDQUFDLENBQUNGLFdBQWFBLFNBQVNHLElBQUk7SUFFbEMsbUJBQW1CO0lBQ25CQyxTQUFTSjtBQUNYO0FBRUEsU0FBU0ssY0FBYztJQUNyQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7UUFDM0M7WUFBRWlCLE9BQU87WUFBV0MsVUFBVSxJQUFJO1lBQUVDLFFBQVEsSUFBSTtRQUFDO1FBQ2pEO1lBQUVGLE9BQU87UUFBTztRQUNoQjtZQUNFQSxPQUFPO1lBQ1BHLFVBQVU7WUFDVkMsY0FBYyxDQUFDQyxTQUFXO2dCQUN4QixxQkFBTyw4REFBQ0M7b0JBQUtDLE9BQU87d0JBQUVDLFlBQVk7b0JBQUc7OEJBQUlILE9BQU9JLEtBQUs7Ozs7OztZQUN2RDtRQUNGO1FBQ0E7WUFBRVQsT0FBTztZQUFTRyxVQUFVO1FBQUk7UUFDaEM7WUFBRUgsT0FBTztRQUFPO1FBQ2hCO1lBQUVBLE9BQU87UUFBUztRQUNsQjtZQUFFQSxPQUFPO1FBQVM7S0FDbkI7SUFFRCxNQUFNWCxhQUFhLFVBQVk7UUFDN0IsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrREFDQUMsSUFBSSxDQUFDLENBQUNGLFdBQWFBLFNBQVNHLElBQUk7UUFFbEMsbUJBQW1CO1FBQ25CSSxXQUFXUDtRQUNYb0IsUUFBUUMsR0FBRyxDQUFDckI7SUFDZDtJQUVBSixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RHO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVO1FBQWtCTixPQUFPO1lBQUNPLFFBQVE7WUFBS0MsT0FBTztRQUFHO2tCQUM5RCw0RUFBQzVCLHNEQUFXQTtZQUNSUyxTQUFTQTtZQUNURSxZQUFZQTs7Ozs7Ozs7Ozs7QUFJdEI7QUFFQSxpRUFBZUgsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYXBwLWpzLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFnR3JpZFJlYWN0IH0gZnJvbSAnYWctZ3JpZC1yZWFjdCc7XG5cbmltcG9ydCAnYWctZ3JpZC1jb21tdW5pdHkvc3R5bGVzL2FnLWdyaWQuY3NzJztcbmltcG9ydCAnYWctZ3JpZC1jb21tdW5pdHkvc3R5bGVzL2FnLXRoZW1lLWFscGluZS5jc3MnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmNvbnN0IGdldEFwaURhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvXCJcbiAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuICAvLyB1cGRhdGUgdGhlIHN0YXRlXG4gIHNldFVzZXJzKHJlc3BvbnNlKTtcbn07XG5cbmZ1bmN0aW9uIEVtcGxveWVlU1BBKCkge1xuICBjb25zdCBbcm93RGF0YSwgc2V0Um93RGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY29sdW1uRGVmcywgc2V0Q29sdW1uRGVmc10gPSB1c2VTdGF0ZShbXG4gICAgeyBmaWVsZDogJ2NvdW50cnknLCBzb3J0YWJsZTogdHJ1ZSwgZmlsdGVyOiB0cnVlIH0sXG4gICAgeyBmaWVsZDogJ3llYXInIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdhdGhsZXRlJyxcbiAgICAgIG1pbldpZHRoOiAyNTAsXG4gICAgICBjZWxsUmVuZGVyZXI6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDYwIH19PntwYXJhbXMudmFsdWV9PC9zcGFuPjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGZpZWxkOiAnc3BvcnQnLCBtaW5XaWR0aDogMjAwIH0sXG4gICAgeyBmaWVsZDogJ2dvbGQnIH0sXG4gICAgeyBmaWVsZDogJ3NpbHZlcicgfSxcbiAgICB7IGZpZWxkOiAnYnJvbnplJyB9LFxuICBdKTtcbiAgICBcbiAgY29uc3QgZ2V0QXBpRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL3d3dy5hZy1ncmlkLmNvbS9leGFtcGxlLWFzc2V0cy9vbHltcGljLXdpbm5lcnMuanNvblwiXG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgXG4gICAgLy8gdXBkYXRlIHRoZSBzdGF0ZVxuICAgIHNldFJvd0RhdGEocmVzcG9uc2UpXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gIH07XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFwaURhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhZy10aGVtZS1hbHBpbmVcIiBzdHlsZT17e2hlaWdodDogNDAwLCB3aWR0aDogNjAwfX0+XG4gICAgICA8QWdHcmlkUmVhY3RcbiAgICAgICAgICByb3dEYXRhPXtyb3dEYXRhfVxuICAgICAgICAgIGNvbHVtbkRlZnM9e2NvbHVtbkRlZnN9PlxuICAgICAgPC9BZ0dyaWRSZWFjdD5cbiAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVTUEEiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZUVmZmVjdCIsIkFnR3JpZFJlYWN0IiwidXNlU1dSIiwiZ2V0QXBpRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsInNldFVzZXJzIiwiRW1wbG95ZWVTUEEiLCJyb3dEYXRhIiwic2V0Um93RGF0YSIsImNvbHVtbkRlZnMiLCJzZXRDb2x1bW5EZWZzIiwiZmllbGQiLCJzb3J0YWJsZSIsImZpbHRlciIsIm1pbldpZHRoIiwiY2VsbFJlbmRlcmVyIiwicGFyYW1zIiwic3BhbiIsInN0eWxlIiwibWFyZ2luTGVmdCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/ag-grid-community/styles/ag-grid.css":
/*!***********************************************************!*\
  !*** ./node_modules/ag-grid-community/styles/ag-grid.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/ag-grid-community/styles/ag-theme-alpine.css":
/*!*******************************************************************!*\
  !*** ./node_modules/ag-grid-community/styles/ag-theme-alpine.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "ag-grid-react":
/*!********************************!*\
  !*** external "ag-grid-react" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("ag-grid-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();