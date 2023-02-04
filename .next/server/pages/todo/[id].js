"use strict";
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
exports.id = "pages/todo/[id]";
exports.ids = ["pages/todo/[id]"];
exports.modules = {

/***/ "./pages/todo/[id].js":
/*!****************************!*\
  !*** ./pages/todo/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoInfo),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction TodoInfo({ todo  }) {\n    console.log(todo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: todo.title\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/my-next-app-js/pages/todo/[id].js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                readOnly: true,\n                checked: todo.completed\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/my-next-app-js/pages/todo/[id].js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                for: \"completed\",\n                children: \"Completed\"\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/my-next-app-js/pages/todo/[id].js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst getStaticProps = async (context)=>{\n    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.id}`);\n    const todo = await res.json();\n    return {\n        props: {\n            todo\n        }\n    };\n};\nconst getStaticPaths = async ()=>{\n    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);\n    const todos = await res.json();\n    const paths = todos.map((item)=>({\n            params: {\n                id: item.id.toString()\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n//to only show two paths:\n/* return {\r\n      paths: [{ params: { id: \"1\" } }, { params: { id: \"2\" } }],\r\n      fallback: false,\r\n    }; */ };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2RvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWUsU0FBU0EsU0FBUyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtJQUN2Q0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFOzswQkFDRSw4REFBQ0c7MEJBQUlILEtBQUtJLEtBQUs7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVdDLFFBQVE7Z0JBQUNDLFNBQVNSLEtBQUtTLFNBQVM7Ozs7OzswQkFDdkQsOERBQUNDO2dCQUFNQyxLQUFJOzBCQUFZOzs7Ozs7OztBQUc3QixDQUFDO0FBRU0sTUFBTUMsaUJBQWlCLE9BQU9DLFVBQVk7SUFDL0MsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixDQUFDLDJDQUEyQyxFQUFFRixRQUFRRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFDO0lBRW5FLE1BQU1qQixPQUFPLE1BQU1jLElBQUlJLElBQUk7SUFFM0IsT0FBTztRQUNMQyxPQUFPO1lBQ0xuQjtRQUNGO0lBQ0Y7QUFDRixFQUFFO0FBQ0ssTUFBTW9CLGlCQUFpQixVQUFZO0lBQ3hDLE1BQU1OLE1BQU0sTUFBTUMsTUFBTSxDQUFDLDJDQUEyQyxDQUFDO0lBQ3JFLE1BQU1NLFFBQVEsTUFBTVAsSUFBSUksSUFBSTtJQUU1QixNQUFNSSxRQUFRRCxNQUFNRSxHQUFHLENBQUMsQ0FBQ0MsT0FBVTtZQUNqQ1IsUUFBUTtnQkFBRUMsSUFBSU8sS0FBS1AsRUFBRSxDQUFDUSxRQUFRO1lBQUc7UUFDbkM7SUFFQSxPQUFPO1FBQ0xIO1FBQ0FJLFVBQVUsS0FBSztJQUNqQjtBQUNBLHlCQUF5QjtBQUN6Qjs7O09BR0csR0FDTCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAtanMvLi9wYWdlcy90b2RvL1tpZF0uanM/Yzc3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvSW5mbyh7IHRvZG8gfSkge1xyXG4gICAgY29uc29sZS5sb2codG9kbyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoMT57dG9kby50aXRsZX08L2gxPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiByZWFkT25seSBjaGVja2VkPXt0b2RvLmNvbXBsZXRlZH0+PC9pbnB1dD5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiY29tcGxldGVkXCI+Q29tcGxldGVkPC9sYWJlbD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvJHtjb250ZXh0LnBhcmFtcy5pZH1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgdG9kbyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHRvZG8sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy9gKTtcclxuICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBcclxuICAgIGNvbnN0IHBhdGhzID0gdG9kb3MubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgaWQ6IGl0ZW0uaWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGF0aHMsXHJcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICAvL3RvIG9ubHkgc2hvdyB0d28gcGF0aHM6XHJcbiAgICAvKiByZXR1cm4ge1xyXG4gICAgICBwYXRoczogW3sgcGFyYW1zOiB7IGlkOiBcIjFcIiB9IH0sIHsgcGFyYW1zOiB7IGlkOiBcIjJcIiB9IH1dLFxyXG4gICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9OyAqL1xyXG4gIH07Il0sIm5hbWVzIjpbIlRvZG9JbmZvIiwidG9kbyIsImNvbnNvbGUiLCJsb2ciLCJoMSIsInRpdGxlIiwiaW5wdXQiLCJ0eXBlIiwicmVhZE9ubHkiLCJjaGVja2VkIiwiY29tcGxldGVkIiwibGFiZWwiLCJmb3IiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJmZXRjaCIsInBhcmFtcyIsImlkIiwianNvbiIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJ0b2RvcyIsInBhdGhzIiwibWFwIiwiaXRlbSIsInRvU3RyaW5nIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/todo/[id].js"));
module.exports = __webpack_exports__;

})();