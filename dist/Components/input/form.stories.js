"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = _interopRequireWildcard(require("../Grid"));

var _Header = _interopRequireDefault(require("../Typography/Header"));

var _Button = _interopRequireDefault(require("../Button"));

var _ = _interopRequireDefault(require("."));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _react2.storiesOf)("Components|Input/Usage/form", module).add("Real-time form", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    sm: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Real-time form"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Full name"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type a Full name",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "E-mail"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid E-mail",
    value: "",
    type: "email",
    placeholder: "Type a E-mail",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Username"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type your Username",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Full address"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type a Full address",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
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
}).add("Real-time checking username on server", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    sm: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Real-time form"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Full name"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type a Full name",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "E-mail"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid E-mail",
    value: "",
    type: "email",
    placeholder: "Type a E-mail",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Username"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    loading: true,
    value: "durand.neto",
    type: "text",
    placeholder: "Type your Username",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Full address"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type a Full address",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
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
}).add("Real-time success | checking username on server", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    sm: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Real-time form"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Full name"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type a Full name",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "E-mail"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid E-mail",
    value: "",
    type: "email",
    placeholder: "Type a E-mail",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h5: true,
    color: "Green-500",
    label: "Username"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    success: true,
    value: "durand.neto",
    type: "text",
    placeholder: "Type your Username",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Full address"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type a Full address",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
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
}).add("Real-time username error on server", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    sm: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Real-time form"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Full name"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type a Full name",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "E-mail"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid E-mail",
    value: "",
    type: "email",
    placeholder: "Type a E-mail",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h5: true,
    color: "Red-500",
    label: "Username"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    error: "Username already exists",
    value: "durand.neto",
    type: "text",
    placeholder: "Type your Username",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], _defineProperty({
    h5: true,
    color: "Blue-Grey-500",
    label: "Full address"
  }, "color", "Blue-A200")))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    type: "text",
    placeholder: "Type a Full address",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
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