webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Mook\\Documents\\web-readaright\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color : red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1(_templateObject());
_c = StyledH1;

var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      person = _useState[0],
      setPerson = _useState[1];

  function fetch() {
    return _fetch.apply(this, arguments);
  }

  function _fetch() {
    _fetch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default()('https://jsonplaceholder.typicode.com/users');

            case 2:
              result = _context.sent;
              setPerson(result.data); // console.log(person)

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetch.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetch();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Home",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledH1, {
      children: "Hello \uD83D\uDC4B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
      children: person.hits.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            href: item.url,
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, _this)
        }, item.objectID, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(Index, "TfHKu4DmutjCpCuV7KNDEBJoWyE=");

_c2 = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2;

$RefreshReg$(_c, "StyledH1");
$RefreshReg$(_c2, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlN0eWxlZEgxIiwic3R5bGVkIiwiaDEiLCJJbmRleCIsInVzZVN0YXRlIiwicGVyc29uIiwic2V0UGVyc29uIiwiZmV0Y2giLCJheGlvcyIsInJlc3VsdCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJoaXRzIiwibWFwIiwiaXRlbSIsInVybCIsInRpdGxlIiwib2JqZWN0SUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG1CQUFkO0tBQU1GLFE7O0FBS04sSUFBTUcsS0FBOEIsR0FBRyxTQUFqQ0EsS0FBaUMsR0FBTTtBQUFBOztBQUFBLGtCQUVmQyxzREFBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRXBDQyxNQUZvQztBQUFBLE1BRTVCQyxTQUY0Qjs7QUFBQSxXQUk1QkMsS0FKNEI7QUFBQTtBQUFBOztBQUFBO0FBQUEsOExBSTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR3VCQyw0Q0FBSyxDQUN4Qiw0Q0FEd0IsQ0FINUI7O0FBQUE7QUFHUUMsb0JBSFI7QUFPRUgsdUJBQVMsQ0FBQ0csTUFBTSxDQUFDQyxJQUFSLENBQVQsQ0FQRixDQVFFOztBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSjJDO0FBQUE7QUFBQTs7QUFlM0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkSixTQUFLO0FBQ04sR0FGUSxDQUFUO0FBR0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBLDRCQUNFLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQ0NGLE1BQU0sQ0FBQ08sSUFBUCxDQUFZQyxHQUFaLENBQWdCLFVBQUFDLElBQUk7QUFBQSw0QkFDbkI7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLEVBQUVBLElBQUksQ0FBQ0MsR0FBZDtBQUFBLHNCQUFvQkQsSUFBSSxDQUFDRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU0YsSUFBSSxDQUFDRyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBcEI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQTlCRDs7R0FBTWQsSzs7TUFBQUEsSztBQStCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTE3OGE0Nzg5YWJiMGFlYWQ3YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlZEgxID0gc3R5bGVkLmgxYFxyXG4gIGNvbG9yIDogcmVkO1xyXG5gXHJcblxyXG5cclxuY29uc3QgSW5kZXg6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbcGVyc29uLCBzZXRQZXJzb25dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaCgpIHtcclxuXHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXHJcbiAgICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnLFxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQZXJzb24ocmVzdWx0LmRhdGEpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGVyc29uKVxyXG5cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKClcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkhvbWVcIj5cclxuICAgICAgPFN0eWxlZEgxPkhlbGxvIPCfkYs8L1N0eWxlZEgxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgIHtwZXJzb24uaGl0cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17aXRlbS5vYmplY3RJRH0+XHJcbiAgICAgICAgICA8YSBocmVmPXtpdGVtLnVybH0+e2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=