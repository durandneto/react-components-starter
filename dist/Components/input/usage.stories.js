"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = _interopRequireWildcard(require("../Grid"));

var _Header = _interopRequireDefault(require("../Typography/Header"));

var _Button = _interopRequireDefault(require("../Button"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _ = _interopRequireDefault(require("."));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _react2.storiesOf)("Components|Input/Usage/Login", module).add("Login default", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Login Form"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "E-mail"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid email",
    value: "",
    type: "email",
    placeholder: "Type a email",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h5: true,
    color: "Blue-A200",
    label: "Password"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "password",
    placeholder: "Type your password",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "I Agreed",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    primary: true,
    onEvent: function onEvent(e) {
      console.log(e);
    },
    data: {
      user: {
        id: 1
      }
    },
    label: "Login"
  }))));
}).add("Login Loading", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Login Form"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "E-mail"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true,
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid email",
    value: "xxxx@ggg.com",
    placeholder: "Type a email",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h5: true,
    color: "Blue-A200",
    label: "Password"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true,
    type: "password",
    value: "asdasas",
    placeholder: "Type your password",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    disabled: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "I Agreed",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    disabled: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    primary: true,
    loading: true,
    onEvent: function onEvent(e) {
      console.log(e);
    },
    data: {
      user: {
        id: 1
      }
    },
    label: "Login",
    loadingLabel: "Wait..."
  }))));
}).add("Login checking email in realtime", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Login Form"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "E-mail"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    loading: true,
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid email",
    value: "xxxx@ggg.com",
    placeholder: "Type a email",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h5: true,
    color: "Blue-A200",
    label: "Password"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    type: "password",
    value: "",
    placeholder: "Type your password",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "I Agreed",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    loading: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    primary: true,
    onEvent: function onEvent(e) {
      console.log(e);
    },
    data: {
      user: {
        id: 1
      }
    },
    label: "Login"
  }))));
}).add("Login error on realtime", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Login Form"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "E-mail"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    error: "Real-time:: The server is busy",
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid email",
    value: "xxxx@ggg.com",
    placeholder: "Type a email",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h5: true,
    color: "Blue-A200",
    label: "Password"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    type: "password",
    value: "",
    placeholder: "Type your password",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    checked: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "I Agreed",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    error: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    primary: true,
    onEvent: function onEvent(e) {
      console.log(e);
    },
    data: {
      user: {
        id: 1
      }
    },
    label: "Login"
  }))));
});