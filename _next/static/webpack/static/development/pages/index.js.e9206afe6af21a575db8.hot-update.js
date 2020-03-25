webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/counter.js":
/*!*******************************!*\
  !*** ./components/counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/components/counter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Counter = function Counter(_ref) {
  var value = _ref.value,
      label = _ref.label,
      color = _ref.color,
      previousValue = _ref.previousValue;
  var difference = Number.isInteger(value) && Number.isInteger(previousValue) && value - previousValue !== 0 ? value - previousValue : null;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["94883904", [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"][color]]]]) + " " + 'counter-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["94883904", [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"][color]]]]) + " " + 'counter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["94883904", [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"][color]]]]) + " " + 'value',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, typeof value === 'number' ? value : '?'), difference && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["94883904", [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"][color]]]]) + " " + 'difference',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "( ", Math.sign(difference) === 1 ? '+' : '', difference, " )"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["94883904", [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"][color]]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, label)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "94883904",
    dynamic: [_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"][color]],
    __self: this
  }, ".counter.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-align:center;margin:1em 0;color:".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"][color], ";}.counter-container.__jsx-style-dynamic-selector{background-color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.difference.__jsx-style-dynamic-selector{font-size:small;font-style:italic;}.value.__jsx-style-dynamic-selector{font-size:xx-large;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvY291bnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBR3dCLEFBU1UsQUFPUCxBQUtHLGdCQUpELEdBS0QsSUFaSixXQVFmLEVBS0Esc0NBdEJ3Qix1QkFVSCx1REFUVSxjQVVBLDZHQVRYLGNBVXBCLElBVGUsYUFDc0IsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL2NvbXBvbmVudHMvY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJ1xuXG5jb25zdCBDb3VudGVyID0gKHt2YWx1ZSwgbGFiZWwsIGNvbG9yLCBwcmV2aW91c1ZhbHVlfSkgPT4ge1xuICBjb25zdCBkaWZmZXJlbmNlID0gKE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmIE51bWJlci5pc0ludGVnZXIocHJldmlvdXNWYWx1ZSkgJiYgdmFsdWUgLSBwcmV2aW91c1ZhbHVlICE9PSAwKSA/IHZhbHVlIC0gcHJldmlvdXNWYWx1ZSA6IG51bGxcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb3VudGVyLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY291bnRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2YWx1ZSc+e3R5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6ICc/J308L2Rpdj5cbiAgICAgICAge2RpZmZlcmVuY2UgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWZmZXJlbmNlJz5cbiAgICAgICAgICAgICgge01hdGguc2lnbihkaWZmZXJlbmNlKSA9PT0gMSA/ICcrJyA6ICcnfXtkaWZmZXJlbmNlfSApXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXY+e2xhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvdW50ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnNbY29sb3JdfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpZmZlcmVuY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Db3VudGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFsdWU6IG51bGwsXG4gIGxhYmVsOiBudWxsLFxuICBjb2xvcjogJ2FsbW9zdEJsYWNrJyxcbiAgcHJldmlvdXNWYWx1ZTogbnVsbFxufVxuXG5Db3VudGVyLnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJldmlvdXNWYWx1ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyXG4iXX0= */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/components/counter.js */")));
};

Counter.defaultProps = {
  value: null,
  label: null,
  color: 'almostBlack',
  previousValue: null
};
Counter.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  previousValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ })

})
//# sourceMappingURL=index.js.e9206afe6af21a575db8.hot-update.js.map