webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\Mook\\Documents\\web-readaright\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color : red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject());
_c = StyledH1;

var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      person = _useState[0],
      setPerson = _useState[1];

  function fetch() {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://jsonplaceholder.typicode.com/users").then(function (res) {
      var persons = res.data;
      setPerson(persons);
      console.log(person);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Home",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledH1, {
      children: ["Hello \uD83D\uDC4B$", person]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      children: person.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlN0eWxlZEgxIiwic3R5bGVkIiwiaDEiLCJJbmRleCIsInVzZVN0YXRlIiwicGVyc29uIiwic2V0UGVyc29uIiwiZmV0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJwZXJzb25zIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJtYXAiLCJpdGVtIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG1CQUFkO0tBQU1GLFE7O0FBSU4sSUFBTUcsS0FBOEIsR0FBRyxTQUFqQ0EsS0FBaUMsR0FBTTtBQUFBOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQ3BDQyxNQURvQztBQUFBLE1BQzVCQyxTQUQ0Qjs7QUFHM0MsV0FBU0MsS0FBVCxHQUFpQjtBQUNmQyxnREFBSyxDQUFDQyxHQUFOLCtDQUNHQyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFJO0FBQ1gsVUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNFLElBQXBCO0FBQ0FQLGVBQVMsQ0FBQ00sT0FBRCxDQUFUO0FBRUFFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFaO0FBQ0QsS0FOSDtBQVFEOztBQUNEVyx5REFBUyxDQUFDLFlBQU07QUFDZFQsU0FBSztBQUNOLEdBRlEsQ0FBVDtBQUdBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBQSw0QkFDRSxxRUFBQyxRQUFEO0FBQUEsd0NBQW9CRixNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQ0dBLE1BQU0sQ0FBQ1ksR0FBUCxDQUFXLFVBQUFDLElBQUk7QUFBQSw0QkFBSTtBQUFBLG9CQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBLE9BQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQXhCRDs7R0FBTWhCLEs7O01BQUFBLEs7QUF5QlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxZDBkYTk0OTk4YzhkMmY0NGI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBTdHlsZWRIMSA9IHN0eWxlZC5oMWBcclxuICBjb2xvciA6IHJlZDtcclxuYFxyXG5cclxuY29uc3QgSW5kZXg6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwZXJzb24sIHNldFBlcnNvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGZldGNoKCkge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNgKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBlcnNvbnMgPSByZXMuZGF0YTtcclxuICAgICAgICBzZXRQZXJzb24ocGVyc29ucylcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocGVyc29uKVxyXG4gICAgICB9KVxyXG5cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKClcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkhvbWVcIj5cclxuICAgICAgPFN0eWxlZEgxPkhlbGxvIPCfkYske3BlcnNvbn08L1N0eWxlZEgxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3BlcnNvbi5tYXAoaXRlbSA9PiA8bGk+e2l0ZW0ubmFtZX08L2xpPil9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9