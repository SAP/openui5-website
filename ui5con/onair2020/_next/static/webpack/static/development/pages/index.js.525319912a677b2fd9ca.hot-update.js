webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/agenda/index.js":
/*!****************************************!*\
  !*** ./src/components/agenda/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Agenda.module.css */ "./src/components/agenda/Agenda.module.css");
/* harmony import */ var _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Agenda_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog */ "./src/components/dialog/index.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section */ "./src/components/section/index.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../title */ "./src/components/title/index.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../avatar */ "./src/components/avatar/index.js");
/* harmony import */ var _toggleButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../toggleButton */ "./src/components/toggleButton/index.js");
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Session */ "./src/components/agenda/Session.js");
/* harmony import */ var _SessionIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SessionIcon */ "./src/components/agenda/SessionIcon.js");


var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/agenda/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var AgendaJSON = __webpack_require__(/*! ../../../data/agenda.json */ "./data/agenda.json").map(function (s) {
  var startTime = new Date(s.startTime.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"));
  var endTime = new Date(s.endTime.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"));
  s.startTime = startTime;
  s.endTime = endTime;
  return s;
}).sort(function (s1, s2) {
  return s1.startTime - s2.startTime;
});

var venueTimeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "Europe/Berlin"
});
var userTimeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23"
});

var fnGetSession = function fnGetSession(bUserTime, selectedDate) {
  return AgendaJSON.filter(function (s) {
    var relatedDate = bUserTime ? s.startTime.getDate() : s.startTime.getUTCDate();
    return relatedDate === selectedDate;
  }).sort(function (s1, s2) {
    return s1.startTime - s2.startTime;
  });
};

var getDateButtonState = function getDateButtonState(bUserTime, selectedKey) {
  var firstSessionTime = AgendaJSON[0].startTime;
  var lastSessionTime = AgendaJSON[AgendaJSON.length - 1].startTime;

  if (bUserTime && firstSessionTime.getDate() === lastSessionTime.getDate()) {
    return {
      selectedKey: firstSessionTime.getDate(),
      buttons: [{
        key: firstSessionTime.getDate(),
        title: "Day 1",
        subtitle: "JUL ".concat(firstSessionTime.getDate())
      }]
    };
  } else {
    return {
      selectedKey: selectedKey !== undefined ? selectedKey : Date.now() > (bUserTime ? new Date(2020, 6, 10) : Date.UTC(2020, 6, 10, 2)) ? 10 : 9,
      buttons: [{
        key: 9,
        title: "Day 1",
        subtitle: "JUL 9"
      }, {
        key: 10,
        title: "Day 2",
        subtitle: "JUL 10"
      }]
    };
  }
};

var Agenda = function Agenda() {
  var userOffest = new Date().getTimezoneOffset() / -60;
  var timeButtons = [{
    key: "venueTime",
    title: "Venue time",
    subtitle: "(UTC+2)"
  }, {
    key: "userTime",
    title: "Your time",
    subtitle: "(UTC".concat(userOffest < 0 ? "" : "+").concat(userOffest, ")")
  }];
  var timeSettings = "userTime";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (localStorage && localStorage.getItem && localStorage.getItem("userSelection")) {
      fnUpdateSelectedTime(localStorage.getItem("userSelection"), true);
    }
  }, []);
  var bUserTime = timeSettings === "userTime";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(timeSettings),
      selectedTime = _useState[0],
      setSelectedTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getDateButtonState(bUserTime)),
      dateButton = _useState2[0],
      setDateButton = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(fnGetSession(bUserTime, dateButton.selectedKey)),
      sessions = _useState3[0],
      setSessions = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedSession = _useState4[0],
      setSelectedSession = _useState4[1];

  var fnUpdateSelectedTime = function fnUpdateSelectedTime(key, bResetDate) {
    if (localStorage && localStorage.setItem) {
      localStorage.setItem("userSelection", key);
    }

    setSelectedTime(key);
    var newDateButtonState = getDateButtonState(key === "userTime", bResetDate ? undefined : dateButton.selectedKey);
    setDateButton(newDateButtonState);
    setSessions(fnGetSession(key === "userTime", newDateButtonState.selectedKey));
  };

  var fnUpdateSelectedDay = function fnUpdateSelectedDay(key) {
    setDateButton(_objectSpread({}, dateButton, {
      selectedKey: key
    }));
    setSessions(fnGetSession(selectedTime === "userTime", key));
  };

  return __jsx(_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cssClass: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Agenda,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "agenda",
    className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.agenda__title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "white",
    size: "medium",
    text: "Agenda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), __jsx(_toggleButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    buttons: timeButtons,
    selectedKey: selectedTime,
    onClick: fnUpdateSelectedTime,
    verticalAlign: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.agenda__dayToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(_toggleButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    buttons: dateButton.buttons,
    selectedKey: dateButton.selectedKey,
    onClick: fnUpdateSelectedDay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  })), sessions.map(function (session, index) {
    return __jsx("div", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.AgendaItem, session.type === 'break' ? _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.view_break : null),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.agenda__startTime,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }, selectedTime === "venueTime" ? venueTimeFormatter.format(session.startTime) : userTimeFormatter.format(session.startTime)), __jsx("div", {
      className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.AgendaAvatars,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, session.type === 'break' || session.type === 'pre_event' ? __jsx(_SessionIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      type: session.type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 37
      }
    }) : session.speakers.map(function (speaker, speakerIndex) {
      return __jsx(_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: function onClick() {
          return setSelectedSession(session);
        },
        key: speakerIndex,
        src: speaker.photoUrl,
        alt: "".concat(speaker.firstName, " ").concat(speaker.lastName),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 41
        }
      });
    })), __jsx("div", {
      className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.agenda__desctiption,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    }, __jsx(_Session__WEBPACK_IMPORTED_MODULE_9__["default"], {
      session: session,
      full: false,
      onClick: session.type !== 'break' ? function () {
        return setSelectedSession(session);
      } : null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 25
      }
    })));
  }), selectedSession ? __jsx(_dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: true,
    onClose: function onClose() {
      return setSelectedSession(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, __jsx(_Session__WEBPACK_IMPORTED_MODULE_9__["default"], {
    session: selectedSession,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Agenda);

/***/ }),

/***/ "./src/components/grid/index.js":
/*!**************************************!*\
  !*** ./src/components/grid/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sticker */ "./src/components/sticker/index.js");
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Grid.module.css */ "./src/components/grid/Grid.module.css");
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Grid_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/grid/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Grid = function Grid(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0, 0]),
      grid = _useState[0],
      setGrid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dispayedItems = _useState2[0],
      setDisplayedItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array.from(Array(26), function (_, i) {
    return i + 1;
  })),
      cachedItems = _useState3[0],
      setCachedItems = _useState3[1]; //resize listener


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var queries = ['(max-width: 767px)', '(max-width: 1023px)'];
    var relatedGrid = [[2, 3], [3, 4]];
    var mediaQueryLists = queries.map(function (q) {
      return window.matchMedia(q);
    });

    var getValue = function getValue() {
      var index = mediaQueryLists.findIndex(function (mql) {
        return mql.matches;
      });
      return typeof relatedGrid[index] !== 'undefined' ? relatedGrid[index] : [4, 4];
    };

    var handler = function handler() {
      return setGrid(getValue());
    };

    mediaQueryLists.forEach(function (mql) {
      return mql.addListener(handler);
    });
    handler();
    return function () {
      mediaQueryLists.forEach(function (mql) {
        return mql.removeListener(handler);
      });
    };
  }, []); //handle resize

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var gridSize = grid[0] * grid[1];

    if (dispayedItems.length > gridSize) {
      var removedItems = dispayedItems.splice(gridSize);
      setCachedItems(cachedItems.concat(removedItems));
      setDisplayedItems(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dispayedItems));
      setGrid(grid);
    } else if (dispayedItems.length < gridSize) {
      var addedItems = cachedItems.splice(0, gridSize - dispayedItems.length);
      setCachedItems(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cachedItems));
      setDisplayedItems(dispayedItems.concat(addedItems));
      setGrid(grid);
    }
  }); //rotation

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      if (dispayedItems.length !== grid[0] * grid[1]) {
        return;
      }

      var index = Math.floor(Math.random() * dispayedItems.length);
      var relacedItem = dispayedItems[index];
      dispayedItems[index] = cachedItems.splice(0, 1)[0];
      cachedItems.push(relacedItem);
      setDisplayedItems(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dispayedItems));
      setCachedItems(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cachedItems));
    }, 5000);
    return function () {
      clearInterval(interval);
    };
  });
  return __jsx("div", {
    className: _Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.grid,
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, dispayedItems.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.grid__item, _Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["col-".concat(grid[1])], _Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["row-".concat(grid[0])]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, __jsx(_sticker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      frontImageUrl: "./hero/".concat(item, ".jpg"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }));
  }));
};

Grid.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ })

})
//# sourceMappingURL=index.js.525319912a677b2fd9ca.hot-update.js.map