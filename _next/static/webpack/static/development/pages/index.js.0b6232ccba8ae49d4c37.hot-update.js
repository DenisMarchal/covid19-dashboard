webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: AppContext, ThemeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_indexOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/indexOf */ "./node_modules/lodash/indexOf.js");
/* harmony import */ var lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_indexOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _chiffres_cles_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chiffres-cles.json */ "./chiffres-cles.json");
var _chiffres_cles_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../chiffres-cles.json */ "./chiffres-cles.json", 1);
/* harmony import */ var _centers_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../centers.json */ "./centers.json");
var _centers_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../centers.json */ "./centers.json", 1);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/react-map-gl/layers */ "./components/react-map-gl/layers.js");
/* harmony import */ var _layouts_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layouts/screen */ "./layouts/screen.js");
/* harmony import */ var _layouts_mobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../layouts/mobile */ "./layouts/mobile.js");





var _jsxFileName = "/Users/jerome/opencovid19-fr/dashboard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var AppContext = react__WEBPACK_IMPORTED_MODULE_6___default.a.createContext();
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_6___default.a.createContext('theme.default');

var reportToGeoJSON = function reportToGeoJSON(report, date) {
  return {
    type: 'FeatureCollection',
    features: Object.keys(report).filter(function (code) {
      return Boolean(_centers_json__WEBPACK_IMPORTED_MODULE_10__[code]);
    }).map(function (code) {
      var selectedDateAvailable = report[code].find(function (r) {
        return r.date === date;
      });
      var properties = selectedDateAvailable ? selectedDateAvailable : {
        code: code
      };
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: _centers_json__WEBPACK_IMPORTED_MODULE_10__[code]
        },
        properties: _objectSpread({}, properties, {}, report[code].find(function (r) {
          return r.date === date;
        }), {
          history: report[code].filter(function (r) {
            return date >= r.date;
          })
        })
      };
    }).filter(function (i) {
      return Boolean(i);
    })
  };
};

var defaultViewport = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5
};

var MainPage = function MainPage(_ref) {
  var data = _ref.data,
      dates = _ref.dates,
      isGouv = _ref.isGouv;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isIframe = _useState[0],
      setIsIframe = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isMobileDevice = _useState2[0],
      setIsMobileDevice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isTouchScreenDevice = _useState3[0],
      setIsTouchScreenDevice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(dates[dates.length - 1]),
      date = _useState4[0],
      setDate = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      selectedLocation = _useState5[0],
      setSelectedLocation = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      selectedLocationReport = _useState6[0],
      setSelectedLocationReport = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      selectedPreviousLocationReport = _useState7[0],
      setSelectedPreviousLocationReport = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      franceReport = _useState8[0],
      setFranceReport = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      previousFranceReport = _useState9[0],
      setPreviousFranceReport = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      regionsReport = _useState10[0],
      setRegionsReport = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      previousRegionsReport = _useState11[0],
      setPreviousRegionsReport = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      departementsReport = _useState12[0],
      setDepartementsReport = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      previousDepartementsReport = _useState13[0],
      setPreviousDepartementsReport = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(defaultViewport),
      viewport = _useState14[0],
      setViewport = _useState14[1];

  var dateIdx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

  var previousReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var idx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

    var previousIdx = idx - 1;

    if (previousIdx >= 0) {
      setDate(dates[previousIdx]);
    }
  }, [dates, date]);
  var nextReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var idx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

    var nextIdx = idx + 1;

    if (nextIdx <= dates.length - 1) {
      setDate(dates[nextIdx]);
    }
  }, [dates, date]);
  var getFranceReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var reports = data.filter(function (item) {
      return item.nom === 'France';
    });
    return _objectSpread({}, reports.find(function (r) {
      return r.date === date;
    }), {
      history: reports
    });
  }, [date, data]);
  var getPreviousFranceReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var reports = data.filter(function (item) {
      return item.nom === 'France';
    });

    var idx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

    var previousIdx = idx - 1;
    var previousDate = dates[previousIdx];
    return _objectSpread({}, reports.find(function (r) {
      return r.date === previousDate;
    }), {
      history: reports
    });
  }, [dates, date, data]);
  var getRegionsReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var regions = data.filter(function (item) {
      return item.code.includes('REG');
    });

    var byCode = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(regions, 'code');

    return reportToGeoJSON(byCode, date);
  }, [date, data]);
  var getPreviousRegionsReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var regions = data.filter(function (item) {
      return item.code.includes('REG');
    });

    var byCode = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(regions, 'code');

    var idx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

    var previousIdx = idx - 1;
    var previousDate = dates[previousIdx];
    return reportToGeoJSON(byCode, previousDate);
  }, [dates, date, data]);
  var getPreviousDepartementsReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var departements = data.filter(function (item) {
      return item.code.includes('DEP');
    });

    var byCode = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(departements, 'code');

    var idx = lodash_indexOf__WEBPACK_IMPORTED_MODULE_2___default()(dates, date);

    var previousIdx = idx - 1;
    var previousDate = dates[previousIdx];
    return reportToGeoJSON(byCode, previousDate);
  }, [dates, date, data]);
  var getDepartementsReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var departements = data.filter(function (item) {
      return item.code.includes('DEP');
    });

    var byCode = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(departements, 'code');

    return reportToGeoJSON(byCode, date);
  }, [date, data]);

  var handleResize = function handleResize() {
    var mobileWidth = parseInt(_styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].mobileDisplay.split('px')[0]);
    setIsMobileDevice(window.innerWidth < mobileWidth);
  };

  var getLocationReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (code) {
    var report;

    if (code.includes('REG')) {
      report = regionsReport;
    } else if (code.includes('DEP')) {
      report = departementsReport;
    }

    var feature = report.features.find(function (f) {
      return f.properties.code === code;
    });
    return _objectSpread({}, feature.properties);
  }, [regionsReport, departementsReport]);
  var getPreviousLocationReport = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (code) {
    var report;

    if (code.includes('REG')) {
      report = previousRegionsReport;
    } else if (code.includes('DEP')) {
      report = previousDepartementsReport;
    }

    var feature = report.features.find(function (f) {
      return f.properties.code === code;
    });
    return _objectSpread({}, feature.properties);
  }, [previousRegionsReport, previousDepartementsReport]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (selectedLocation) {
      var locationReport = getLocationReport(selectedLocation);
      setSelectedLocationReport(locationReport);
      setSelectedPreviousLocationReport(locationReport);
    } else {
      setSelectedLocationReport(null);
      setSelectedPreviousLocationReport(null);
    }
  }, [regionsReport, selectedLocation, getLocationReport]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (selectedLocation) {
      var locationReport = getPreviousLocationReport(selectedLocation);
      setSelectedPreviousLocationReport(locationReport);
    } else {
      setSelectedPreviousLocationReport(null);
    }
  }, [previousRegionsReport, selectedLocation, getPreviousLocationReport]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var latitude = viewport.latitude,
        longitude = viewport.longitude;
    setViewport({
      latitude: latitude,
      longitude: longitude,
      zoom: isMobileDevice ? 4.3 : 5
    });
  }, [isMobileDevice]); // eslint-disable-line react-hooks/exhaustive-deps

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var iframe = router.query.iframe;
    setIsIframe(Boolean(iframe === '1'));
  }, [router]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var franceReport = getFranceReport();
    setFranceReport(franceReport);
    var previousFranceReport = getPreviousFranceReport();
    setPreviousFranceReport(previousFranceReport);
    var regionsReport = getRegionsReport();
    setRegionsReport(regionsReport);
    var previousRegionsReport = getPreviousRegionsReport();
    setPreviousRegionsReport(previousRegionsReport);
    var previousDepartementsReport = getPreviousDepartementsReport();
    setPreviousDepartementsReport(previousDepartementsReport);
    var departementsReport = getDepartementsReport();
    setDepartementsReport(departementsReport);
  }, [date, getFranceReport, getPreviousFranceReport, getRegionsReport, getPreviousRegionsReport, getDepartementsReport, getPreviousDepartementsReport]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var mobileWidth = parseInt(_styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].mobileDisplay.split('px')[0]);

    if (window.innerWidth < mobileWidth) {
      setIsMobileDevice(true);
    }

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    setIsTouchScreenDevice('ontouchstart' in document.documentElement);
  }, []);
  var maps = [{
    name: 'Carte des cas confirmés',
    category: 'régionale',
    data: regionsReport,
    properties: 'casConfirmes',
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["casConfirmesLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["casConfirmesCountLayer"]]
  }, {
    name: 'Carte des décès à l’hôpital',
    category: 'régionale',
    data: regionsReport,
    properties: 'deces',
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["decesLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["decesCountLayer"]]
  }, {
    name: 'Carte des hospitalisations',
    category: 'régionale',
    properties: 'hospitalises',
    data: regionsReport,
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["hospitalisesLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["hospitalisesCountLayer"]]
  }, {
    name: 'Carte des patients en réanimation',
    category: 'régionale',
    properties: 'reanimation',
    data: regionsReport,
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["reanimationLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["reanimationCountLayer"]]
  }, {
    name: 'Carte des retours à domicile',
    category: 'régionale',
    properties: 'gueris',
    data: regionsReport,
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["guerisLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["guerisCountLayer"]]
  }, // {
  //   name: 'Carte des cas confirmés',
  //   category: 'départementale',
  //   data: departementsReport,
  //   properties: 'casConfirmes',
  //   layers: [casConfirmesLayer, casConfirmesCountLayer]
  // },
  {
    name: 'Carte des décès à l’hôpital',
    category: 'départementale',
    data: departementsReport,
    properties: 'deces',
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["decesLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["decesCountLayer"]]
  }, {
    name: 'Carte des hospitalisations',
    category: 'départementale',
    properties: 'hospitalises',
    data: departementsReport,
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["hospitalisesLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["hospitalisesCountLayer"]]
  }, {
    name: 'Carte des patients en réanimation',
    category: 'départementale',
    properties: 'reanimation',
    data: departementsReport,
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["reanimationLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["reanimationCountLayer"]]
  }, {
    name: 'Carte des retours à domicile',
    category: 'départementale',
    properties: 'gueris',
    data: departementsReport,
    layers: [_components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["guerisLayer"], _components_react_map_gl_layers__WEBPACK_IMPORTED_MODULE_13__["guerisCountLayer"]]
  }];
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "Tableau de bord de suivi de l\u2019\xE9pid\xE9mie de coronavirus en France",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3065482437" + " " + 'main-page-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx(AppContext.Provider, {
    value: {
      date: date,
      selectedLocationReport: selectedLocationReport,
      setSelectedLocation: setSelectedLocation,
      franceReport: franceReport,
      previousFranceReport: previousFranceReport,
      regionsReport: regionsReport,
      previousRegionsReport: previousRegionsReport,
      selectedPreviousLocationReport: selectedPreviousLocationReport,
      departementsReport: departementsReport,
      previousDepartementsReport: previousDepartementsReport,
      prev: dateIdx > 0 ? previousReport : null,
      next: dateIdx < dates.length - 1 ? nextReport : null,
      setViewport: setViewport,
      maps: maps,
      viewport: viewport,
      isIframe: isIframe,
      isMobileDevice: isMobileDevice,
      isTouchScreenDevice: isTouchScreenDevice
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx(ThemeContext.Provider, {
    value: isGouv ? _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].gouv : _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"]["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, isMobileDevice ? __jsx(_layouts_mobile__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }) : __jsx(_layouts_screen__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "3065482437",
    __self: this
  }, ".main-page-container.jsx-3065482437{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVXb0IsQUFHMEIsMEVBQ0ssa0JBQ1AsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9qZXJvbWUvb3BlbmNvdmlkMTktZnIvZGFzaGJvYXJkL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtncm91cEJ5LCB1bmlxLCBpbmRleE9mfSBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCByZWNvcmRzIGZyb20gJy4uL2NoaWZmcmVzLWNsZXMuanNvbidcbmltcG9ydCBjZW50ZXJzIGZyb20gJy4uL2NlbnRlcnMuanNvbidcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9tYWluJ1xuXG5pbXBvcnQge1xuICBjYXNDb25maXJtZXNMYXllcixcbiAgY2FzQ29uZmlybWVzQ291bnRMYXllcixcbiAgZGVjZXNMYXllcixcbiAgZGVjZXNDb3VudExheWVyLFxuICBob3NwaXRhbGlzZXNMYXllcixcbiAgaG9zcGl0YWxpc2VzQ291bnRMYXllcixcbiAgcmVhbmltYXRpb25MYXllcixcbiAgcmVhbmltYXRpb25Db3VudExheWVyLFxuICBndWVyaXNMYXllcixcbiAgZ3VlcmlzQ291bnRMYXllclxufSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9sYXllcnMnXG5cbmltcG9ydCBTY3JlZW5QYWdlIGZyb20gJy4uL2xheW91dHMvc2NyZWVuJ1xuaW1wb3J0IE1vYmlsZVBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9tb2JpbGUnXG5cbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgndGhlbWUuZGVmYXVsdCcpXG5cbmNvbnN0IHJlcG9ydFRvR2VvSlNPTiA9IChyZXBvcnQsIGRhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgIGZlYXR1cmVzOiBPYmplY3Qua2V5cyhyZXBvcnQpLmZpbHRlcihjb2RlID0+IEJvb2xlYW4oY2VudGVyc1tjb2RlXSkpLm1hcChjb2RlID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZUF2YWlsYWJsZSA9IHJlcG9ydFtjb2RlXS5maW5kKHIgPT4gci5kYXRlID09PSBkYXRlKVxuICAgICAgY29uc3QgcHJvcGVydGllcyA9IHNlbGVjdGVkRGF0ZUF2YWlsYWJsZSA/IHNlbGVjdGVkRGF0ZUF2YWlsYWJsZSA6IHtjb2RlfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgICBjb29yZGluYXRlczogY2VudGVyc1tjb2RlXVxuICAgICAgICB9LFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgLi4ucHJvcGVydGllcyxcbiAgICAgICAgICAuLi5yZXBvcnRbY29kZV0uZmluZChyID0+IHIuZGF0ZSA9PT0gZGF0ZSksXG4gICAgICAgICAgaGlzdG9yeTogcmVwb3J0W2NvZGVdLmZpbHRlcihyID0+IGRhdGUgPj0gci5kYXRlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuZmlsdGVyKGkgPT4gQm9vbGVhbihpKSlcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0Vmlld3BvcnQgPSB7XG4gIGxhdGl0dWRlOiA0Ni45LFxuICBsb25naXR1ZGU6IDEuNyxcbiAgem9vbTogNVxufVxuXG5jb25zdCBNYWluUGFnZSA9ICh7ZGF0YSwgZGF0ZXMsIGlzR291dn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBbaXNJZnJhbWUsIHNldElzSWZyYW1lXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNNb2JpbGVEZXZpY2UsIHNldElzTW9iaWxlRGV2aWNlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNUb3VjaFNjcmVlbkRldmljZSwgc2V0SXNUb3VjaFNjcmVlbkRldmljZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoZGF0ZXNbZGF0ZXMubGVuZ3RoIC0gMV0pXG4gIGNvbnN0IFtzZWxlY3RlZExvY2F0aW9uLCBzZXRTZWxlY3RlZExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtzZWxlY3RlZExvY2F0aW9uUmVwb3J0LCBzZXRTZWxlY3RlZExvY2F0aW9uUmVwb3J0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtzZWxlY3RlZFByZXZpb3VzTG9jYXRpb25SZXBvcnQsIHNldFNlbGVjdGVkUHJldmlvdXNMb2NhdGlvblJlcG9ydF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZnJhbmNlUmVwb3J0LCBzZXRGcmFuY2VSZXBvcnRdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtwcmV2aW91c0ZyYW5jZVJlcG9ydCwgc2V0UHJldmlvdXNGcmFuY2VSZXBvcnRdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtyZWdpb25zUmVwb3J0LCBzZXRSZWdpb25zUmVwb3J0XSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcHJldmlvdXNSZWdpb25zUmVwb3J0LCBzZXRQcmV2aW91c1JlZ2lvbnNSZXBvcnRdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtkZXBhcnRlbWVudHNSZXBvcnQsIHNldERlcGFydGVtZW50c1JlcG9ydF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3ByZXZpb3VzRGVwYXJ0ZW1lbnRzUmVwb3J0LCBzZXRQcmV2aW91c0RlcGFydGVtZW50c1JlcG9ydF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZShkZWZhdWx0Vmlld3BvcnQpXG5cbiAgY29uc3QgZGF0ZUlkeCA9IGluZGV4T2YoZGF0ZXMsIGRhdGUpXG5cbiAgY29uc3QgcHJldmlvdXNSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gaW5kZXhPZihkYXRlcywgZGF0ZSlcbiAgICBjb25zdCBwcmV2aW91c0lkeCA9IGlkeCAtIDFcblxuICAgIGlmIChwcmV2aW91c0lkeCA+PSAwKSB7XG4gICAgICBzZXREYXRlKGRhdGVzW3ByZXZpb3VzSWR4XSlcbiAgICB9XG4gIH0sIFtkYXRlcywgZGF0ZV0pXG5cbiAgY29uc3QgbmV4dFJlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBpZHggPSBpbmRleE9mKGRhdGVzLCBkYXRlKVxuICAgIGNvbnN0IG5leHRJZHggPSBpZHggKyAxXG4gICAgaWYgKG5leHRJZHggPD0gZGF0ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0RGF0ZShkYXRlc1tuZXh0SWR4XSlcbiAgICB9XG4gIH0sIFtkYXRlcywgZGF0ZV0pXG5cbiAgY29uc3QgZ2V0RnJhbmNlUmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9ydHMgPSBkYXRhLmZpbHRlcigoaXRlbSA9PiBpdGVtLm5vbSA9PT0gJ0ZyYW5jZScpKVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXBvcnRzLmZpbmQociA9PiByLmRhdGUgPT09IGRhdGUpLFxuICAgICAgaGlzdG9yeTogcmVwb3J0c1xuICAgIH1cbiAgfSwgW2RhdGUsIGRhdGFdKVxuXG4gIGNvbnN0IGdldFByZXZpb3VzRnJhbmNlUmVwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9ydHMgPSBkYXRhLmZpbHRlcigoaXRlbSA9PiBpdGVtLm5vbSA9PT0gJ0ZyYW5jZScpKVxuICAgIGNvbnN0IGlkeCA9IGluZGV4T2YoZGF0ZXMsIGRhdGUpXG4gICAgY29uc3QgcHJldmlvdXNJZHggPSBpZHggLSAxXG4gICAgY29uc3QgcHJldmlvdXNEYXRlID0gZGF0ZXNbcHJldmlvdXNJZHhdXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcG9ydHMuZmluZChyID0+IHIuZGF0ZSA9PT0gcHJldmlvdXNEYXRlKSxcbiAgICAgIGhpc3Rvcnk6IHJlcG9ydHNcbiAgICB9XG4gIH0sIFtkYXRlcywgZGF0ZSwgZGF0YV0pXG5cbiAgY29uc3QgZ2V0UmVnaW9uc1JlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCByZWdpb25zID0gZGF0YS5maWx0ZXIoKGl0ZW0gPT4gaXRlbS5jb2RlLmluY2x1ZGVzKCdSRUcnKSkpXG4gICAgY29uc3QgYnlDb2RlID0gZ3JvdXBCeShyZWdpb25zLCAnY29kZScpXG5cbiAgICByZXR1cm4gcmVwb3J0VG9HZW9KU09OKGJ5Q29kZSwgZGF0ZSlcbiAgfSwgW2RhdGUsIGRhdGFdKVxuXG4gIGNvbnN0IGdldFByZXZpb3VzUmVnaW9uc1JlcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCByZWdpb25zID0gZGF0YS5maWx0ZXIoKGl0ZW0gPT4gaXRlbS5jb2RlLmluY2x1ZGVzKCdSRUcnKSkpXG4gICAgY29uc3QgYnlDb2RlID0gZ3JvdXBCeShyZWdpb25zLCAnY29kZScpXG4gICAgY29uc3QgaWR4ID0gaW5kZXhPZihkYXRlcywgZGF0ZSlcbiAgICBjb25zdCBwcmV2aW91c0lkeCA9IGlkeCAtIDFcbiAgICBjb25zdCBwcmV2aW91c0RhdGUgPSBkYXRlc1twcmV2aW91c0lkeF1cblxuICAgIHJldHVybiByZXBvcnRUb0dlb0pTT04oYnlDb2RlLCBwcmV2aW91c0RhdGUpXG4gIH0sIFtkYXRlcywgZGF0ZSwgZGF0YV0pXG5cbiAgY29uc3QgZ2V0UHJldmlvdXNEZXBhcnRlbWVudHNSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgZGVwYXJ0ZW1lbnRzID0gZGF0YS5maWx0ZXIoKGl0ZW0gPT4gaXRlbS5jb2RlLmluY2x1ZGVzKCdERVAnKSkpXG4gICAgY29uc3QgYnlDb2RlID0gZ3JvdXBCeShkZXBhcnRlbWVudHMsICdjb2RlJylcbiAgICBjb25zdCBpZHggPSBpbmRleE9mKGRhdGVzLCBkYXRlKVxuICAgIGNvbnN0IHByZXZpb3VzSWR4ID0gaWR4IC0gMVxuICAgIGNvbnN0IHByZXZpb3VzRGF0ZSA9IGRhdGVzW3ByZXZpb3VzSWR4XVxuXG4gICAgcmV0dXJuIHJlcG9ydFRvR2VvSlNPTihieUNvZGUsIHByZXZpb3VzRGF0ZSlcbiAgfSwgW2RhdGVzLCBkYXRlLCBkYXRhXSlcblxuICBjb25zdCBnZXREZXBhcnRlbWVudHNSZXBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgZGVwYXJ0ZW1lbnRzID0gZGF0YS5maWx0ZXIoKGl0ZW0gPT4gaXRlbS5jb2RlLmluY2x1ZGVzKCdERVAnKSkpXG4gICAgY29uc3QgYnlDb2RlID0gZ3JvdXBCeShkZXBhcnRlbWVudHMsICdjb2RlJylcblxuICAgIHJldHVybiByZXBvcnRUb0dlb0pTT04oYnlDb2RlLCBkYXRlKVxuICB9LCBbZGF0ZSwgZGF0YV0pXG5cbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gcGFyc2VJbnQodGhlbWUubW9iaWxlRGlzcGxheS5zcGxpdCgncHgnKVswXSlcbiAgICBzZXRJc01vYmlsZURldmljZSh3aW5kb3cuaW5uZXJXaWR0aCA8IG1vYmlsZVdpZHRoKVxuICB9XG5cbiAgY29uc3QgZ2V0TG9jYXRpb25SZXBvcnQgPSB1c2VDYWxsYmFjayhjb2RlID0+IHtcbiAgICBsZXQgcmVwb3J0XG5cbiAgICBpZiAoY29kZS5pbmNsdWRlcygnUkVHJykpIHtcbiAgICAgIHJlcG9ydCA9IHJlZ2lvbnNSZXBvcnRcbiAgICB9IGVsc2UgaWYgKGNvZGUuaW5jbHVkZXMoJ0RFUCcpKSB7XG4gICAgICByZXBvcnQgPSBkZXBhcnRlbWVudHNSZXBvcnRcbiAgICB9XG4gICAgY29uc3QgZmVhdHVyZSA9IHJlcG9ydC5mZWF0dXJlcy5maW5kKGYgPT4gZi5wcm9wZXJ0aWVzLmNvZGUgPT09IGNvZGUpXG4gICAgcmV0dXJuIHsuLi5mZWF0dXJlLnByb3BlcnRpZXN9XG4gIH0sIFtyZWdpb25zUmVwb3J0LCBkZXBhcnRlbWVudHNSZXBvcnRdKVxuXG4gIGNvbnN0IGdldFByZXZpb3VzTG9jYXRpb25SZXBvcnQgPSB1c2VDYWxsYmFjayhjb2RlID0+IHtcbiAgICBsZXQgcmVwb3J0XG5cbiAgICBpZiAoY29kZS5pbmNsdWRlcygnUkVHJykpIHtcbiAgICAgIHJlcG9ydCA9IHByZXZpb3VzUmVnaW9uc1JlcG9ydFxuICAgIH0gZWxzZSBpZiAoY29kZS5pbmNsdWRlcygnREVQJykpIHtcbiAgICAgIHJlcG9ydCA9IHByZXZpb3VzRGVwYXJ0ZW1lbnRzUmVwb3J0XG4gICAgfVxuXG4gICAgY29uc3QgZmVhdHVyZSA9IHJlcG9ydC5mZWF0dXJlcy5maW5kKGYgPT4gZi5wcm9wZXJ0aWVzLmNvZGUgPT09IGNvZGUpXG4gICAgcmV0dXJuIHsuLi5mZWF0dXJlLnByb3BlcnRpZXN9XG4gIH0sIFtwcmV2aW91c1JlZ2lvbnNSZXBvcnQsIHByZXZpb3VzRGVwYXJ0ZW1lbnRzUmVwb3J0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICBjb25zdCBsb2NhdGlvblJlcG9ydCA9IGdldExvY2F0aW9uUmVwb3J0KHNlbGVjdGVkTG9jYXRpb24pXG4gICAgICBzZXRTZWxlY3RlZExvY2F0aW9uUmVwb3J0KGxvY2F0aW9uUmVwb3J0KVxuICAgICAgc2V0U2VsZWN0ZWRQcmV2aW91c0xvY2F0aW9uUmVwb3J0KGxvY2F0aW9uUmVwb3J0KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZExvY2F0aW9uUmVwb3J0KG51bGwpXG4gICAgICBzZXRTZWxlY3RlZFByZXZpb3VzTG9jYXRpb25SZXBvcnQobnVsbClcbiAgICB9XG4gIH0sIFtyZWdpb25zUmVwb3J0LCBzZWxlY3RlZExvY2F0aW9uLCBnZXRMb2NhdGlvblJlcG9ydF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgY29uc3QgbG9jYXRpb25SZXBvcnQgPSBnZXRQcmV2aW91c0xvY2F0aW9uUmVwb3J0KHNlbGVjdGVkTG9jYXRpb24pXG4gICAgICBzZXRTZWxlY3RlZFByZXZpb3VzTG9jYXRpb25SZXBvcnQobG9jYXRpb25SZXBvcnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkUHJldmlvdXNMb2NhdGlvblJlcG9ydChudWxsKVxuICAgIH1cbiAgfSwgW3ByZXZpb3VzUmVnaW9uc1JlcG9ydCwgc2VsZWN0ZWRMb2NhdGlvbiwgZ2V0UHJldmlvdXNMb2NhdGlvblJlcG9ydF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7bGF0aXR1ZGUsIGxvbmdpdHVkZX0gPSB2aWV3cG9ydFxuICAgIHNldFZpZXdwb3J0KHtcbiAgICAgIGxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlLFxuICAgICAgem9vbTogaXNNb2JpbGVEZXZpY2UgPyA0LjMgOiA1XG4gICAgfSlcbiAgfSwgW2lzTW9iaWxlRGV2aWNlXSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHtpZnJhbWV9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgICBzZXRJc0lmcmFtZShCb29sZWFuKGlmcmFtZSA9PT0gJzEnKSlcbiAgfSwgW3JvdXRlcl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmcmFuY2VSZXBvcnQgPSBnZXRGcmFuY2VSZXBvcnQoKVxuICAgIHNldEZyYW5jZVJlcG9ydChmcmFuY2VSZXBvcnQpXG5cbiAgICBjb25zdCBwcmV2aW91c0ZyYW5jZVJlcG9ydCA9IGdldFByZXZpb3VzRnJhbmNlUmVwb3J0KClcbiAgICBzZXRQcmV2aW91c0ZyYW5jZVJlcG9ydChwcmV2aW91c0ZyYW5jZVJlcG9ydClcblxuICAgIGNvbnN0IHJlZ2lvbnNSZXBvcnQgPSBnZXRSZWdpb25zUmVwb3J0KClcbiAgICBzZXRSZWdpb25zUmVwb3J0KHJlZ2lvbnNSZXBvcnQpXG5cbiAgICBjb25zdCBwcmV2aW91c1JlZ2lvbnNSZXBvcnQgPSBnZXRQcmV2aW91c1JlZ2lvbnNSZXBvcnQoKVxuICAgIHNldFByZXZpb3VzUmVnaW9uc1JlcG9ydChwcmV2aW91c1JlZ2lvbnNSZXBvcnQpXG5cbiAgICBjb25zdCBwcmV2aW91c0RlcGFydGVtZW50c1JlcG9ydCA9IGdldFByZXZpb3VzRGVwYXJ0ZW1lbnRzUmVwb3J0KClcbiAgICBzZXRQcmV2aW91c0RlcGFydGVtZW50c1JlcG9ydChwcmV2aW91c0RlcGFydGVtZW50c1JlcG9ydClcblxuICAgIGNvbnN0IGRlcGFydGVtZW50c1JlcG9ydCA9IGdldERlcGFydGVtZW50c1JlcG9ydCgpXG4gICAgc2V0RGVwYXJ0ZW1lbnRzUmVwb3J0KGRlcGFydGVtZW50c1JlcG9ydClcbiAgfSwgW2RhdGUsIGdldEZyYW5jZVJlcG9ydCwgZ2V0UHJldmlvdXNGcmFuY2VSZXBvcnQsIGdldFJlZ2lvbnNSZXBvcnQsIGdldFByZXZpb3VzUmVnaW9uc1JlcG9ydCwgZ2V0RGVwYXJ0ZW1lbnRzUmVwb3J0LCBnZXRQcmV2aW91c0RlcGFydGVtZW50c1JlcG9ydF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IHBhcnNlSW50KHRoZW1lLm1vYmlsZURpc3BsYXkuc3BsaXQoJ3B4JylbMF0pXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgbW9iaWxlV2lkdGgpIHtcbiAgICAgIHNldElzTW9iaWxlRGV2aWNlKHRydWUpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc1RvdWNoU2NyZWVuRGV2aWNlKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgfSwgW10pXG5cbiAgY29uc3QgbWFwcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FydGUgZGVzIGNhcyBjb25maXJtw6lzJyxcbiAgICAgIGNhdGVnb3J5OiAncsOpZ2lvbmFsZScsXG4gICAgICBkYXRhOiByZWdpb25zUmVwb3J0LFxuICAgICAgcHJvcGVydGllczogJ2Nhc0NvbmZpcm1lcycsXG4gICAgICBsYXllcnM6IFtjYXNDb25maXJtZXNMYXllciwgY2FzQ29uZmlybWVzQ291bnRMYXllcl1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYXJ0ZSBkZXMgZMOpY8OocyDDoCBs4oCZaMO0cGl0YWwnLFxuICAgICAgY2F0ZWdvcnk6ICdyw6lnaW9uYWxlJyxcbiAgICAgIGRhdGE6IHJlZ2lvbnNSZXBvcnQsXG4gICAgICBwcm9wZXJ0aWVzOiAnZGVjZXMnLFxuICAgICAgbGF5ZXJzOiBbZGVjZXNMYXllciwgZGVjZXNDb3VudExheWVyXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NhcnRlIGRlcyBob3NwaXRhbGlzYXRpb25zJyxcbiAgICAgIGNhdGVnb3J5OiAncsOpZ2lvbmFsZScsXG4gICAgICBwcm9wZXJ0aWVzOiAnaG9zcGl0YWxpc2VzJyxcbiAgICAgIGRhdGE6IHJlZ2lvbnNSZXBvcnQsXG4gICAgICBsYXllcnM6IFtob3NwaXRhbGlzZXNMYXllciwgaG9zcGl0YWxpc2VzQ291bnRMYXllcl1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYXJ0ZSBkZXMgcGF0aWVudHMgZW4gcsOpYW5pbWF0aW9uJyxcbiAgICAgIGNhdGVnb3J5OiAncsOpZ2lvbmFsZScsXG4gICAgICBwcm9wZXJ0aWVzOiAncmVhbmltYXRpb24nLFxuICAgICAgZGF0YTogcmVnaW9uc1JlcG9ydCxcbiAgICAgIGxheWVyczogW3JlYW5pbWF0aW9uTGF5ZXIsIHJlYW5pbWF0aW9uQ291bnRMYXllcl1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYXJ0ZSBkZXMgcmV0b3VycyDDoCBkb21pY2lsZScsXG4gICAgICBjYXRlZ29yeTogJ3LDqWdpb25hbGUnLFxuICAgICAgcHJvcGVydGllczogJ2d1ZXJpcycsXG4gICAgICBkYXRhOiByZWdpb25zUmVwb3J0LFxuICAgICAgbGF5ZXJzOiBbZ3VlcmlzTGF5ZXIsIGd1ZXJpc0NvdW50TGF5ZXJdXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBuYW1lOiAnQ2FydGUgZGVzIGNhcyBjb25maXJtw6lzJyxcbiAgICAvLyAgIGNhdGVnb3J5OiAnZMOpcGFydGVtZW50YWxlJyxcbiAgICAvLyAgIGRhdGE6IGRlcGFydGVtZW50c1JlcG9ydCxcbiAgICAvLyAgIHByb3BlcnRpZXM6ICdjYXNDb25maXJtZXMnLFxuICAgIC8vICAgbGF5ZXJzOiBbY2FzQ29uZmlybWVzTGF5ZXIsIGNhc0NvbmZpcm1lc0NvdW50TGF5ZXJdXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FydGUgZGVzIGTDqWPDqHMgw6AgbOKAmWjDtHBpdGFsJyxcbiAgICAgIGNhdGVnb3J5OiAnZMOpcGFydGVtZW50YWxlJyxcbiAgICAgIGRhdGE6IGRlcGFydGVtZW50c1JlcG9ydCxcbiAgICAgIHByb3BlcnRpZXM6ICdkZWNlcycsXG4gICAgICBsYXllcnM6IFtkZWNlc0xheWVyLCBkZWNlc0NvdW50TGF5ZXJdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FydGUgZGVzIGhvc3BpdGFsaXNhdGlvbnMnLFxuICAgICAgY2F0ZWdvcnk6ICdkw6lwYXJ0ZW1lbnRhbGUnLFxuICAgICAgcHJvcGVydGllczogJ2hvc3BpdGFsaXNlcycsXG4gICAgICBkYXRhOiBkZXBhcnRlbWVudHNSZXBvcnQsXG4gICAgICBsYXllcnM6IFtob3NwaXRhbGlzZXNMYXllciwgaG9zcGl0YWxpc2VzQ291bnRMYXllcl1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYXJ0ZSBkZXMgcGF0aWVudHMgZW4gcsOpYW5pbWF0aW9uJyxcbiAgICAgIGNhdGVnb3J5OiAnZMOpcGFydGVtZW50YWxlJyxcbiAgICAgIHByb3BlcnRpZXM6ICdyZWFuaW1hdGlvbicsXG4gICAgICBkYXRhOiBkZXBhcnRlbWVudHNSZXBvcnQsXG4gICAgICBsYXllcnM6IFtyZWFuaW1hdGlvbkxheWVyLCByZWFuaW1hdGlvbkNvdW50TGF5ZXJdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FydGUgZGVzIHJldG91cnMgw6AgZG9taWNpbGUnLFxuICAgICAgY2F0ZWdvcnk6ICdkw6lwYXJ0ZW1lbnRhbGUnLFxuICAgICAgcHJvcGVydGllczogJ2d1ZXJpcycsXG4gICAgICBkYXRhOiBkZXBhcnRlbWVudHNSZXBvcnQsXG4gICAgICBsYXllcnM6IFtndWVyaXNMYXllciwgZ3VlcmlzQ291bnRMYXllcl1cbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlIHRpdGxlPSdUYWJsZWF1IGRlIGJvcmQgZGUgc3VpdmkgZGUgbOKAmcOpcGlkw6ltaWUgZGUgY29yb25hdmlydXMgZW4gRnJhbmNlJz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tcGFnZS1jb250YWluZXInPlxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblJlcG9ydCxcbiAgICAgICAgICBzZXRTZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgIGZyYW5jZVJlcG9ydCxcbiAgICAgICAgICBwcmV2aW91c0ZyYW5jZVJlcG9ydCxcbiAgICAgICAgICByZWdpb25zUmVwb3J0LFxuICAgICAgICAgIHByZXZpb3VzUmVnaW9uc1JlcG9ydCxcbiAgICAgICAgICBzZWxlY3RlZFByZXZpb3VzTG9jYXRpb25SZXBvcnQsXG4gICAgICAgICAgZGVwYXJ0ZW1lbnRzUmVwb3J0LFxuICAgICAgICAgIHByZXZpb3VzRGVwYXJ0ZW1lbnRzUmVwb3J0LFxuICAgICAgICAgIHByZXY6IGRhdGVJZHggPiAwID8gcHJldmlvdXNSZXBvcnQgOiBudWxsLFxuICAgICAgICAgIG5leHQ6IGRhdGVJZHggPCBkYXRlcy5sZW5ndGggLSAxID8gbmV4dFJlcG9ydCA6IG51bGwsXG4gICAgICAgICAgc2V0Vmlld3BvcnQsXG4gICAgICAgICAgbWFwcyxcbiAgICAgICAgICB2aWV3cG9ydCxcbiAgICAgICAgICBpc0lmcmFtZSxcbiAgICAgICAgICBpc01vYmlsZURldmljZSxcbiAgICAgICAgICBpc1RvdWNoU2NyZWVuRGV2aWNlXG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpc0dvdXYgPyB0aGVtZS5nb3V2IDogdGhlbWUuZGVmYXVsdH0+XG4gICAgICAgICAgICB7aXNNb2JpbGVEZXZpY2UgPyAoXG4gICAgICAgICAgICAgIDxNb2JpbGVQYWdlIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U2NyZWVuUGFnZSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbi1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuTWFpblBhZ2UucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaXNHb3V2OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBkYXRlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuTWFpblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHJlY29yZHMsXG4gICAgaXNHb3V2OiBwcm9jZXNzLmVudi5HT1VWID09PSAnMScsXG4gICAgZGF0ZXM6IHVuaXEocmVjb3Jkcy5maWx0ZXIociA9PiByLmNvZGUgPT09ICdGUkEnKS5tYXAociA9PiByLmRhdGUpKS5zb3J0KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZVxuIl19 */\n/*@ sourceURL=/Users/jerome/opencovid19-fr/dashboard/pages/index.js */")));
};

MainPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  isGouv: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  dates: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired
};

MainPage.getInitialProps = function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            data: _chiffres_cles_json__WEBPACK_IMPORTED_MODULE_9__,
            isGouv: undefined === '1',
            dates: lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default()(_chiffres_cles_json__WEBPACK_IMPORTED_MODULE_9__.filter(function (r) {
              return r.code === 'FRA';
            }).map(function (r) {
              return r.date;
            })).sort()
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ })

})
//# sourceMappingURL=index.js.0b6232ccba8ae49d4c37.hot-update.js.map