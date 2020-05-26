"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = _interopRequireWildcard(require("../Grid"));

var _Header = _interopRequireDefault(require("../Typography/Header"));

var _Body = _interopRequireDefault(require("../Typography/Body"));

var _ = _interopRequireDefault(require("."));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Components|Radio Button", module).add("default", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    label: "Aula 7 Radio Buttons"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h3: true,
    color: "Blue-Grey-500",
    label: "Qual sua idade?"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    groupBy: "age",
    value: "18-",
    label: "Eu sou menor do que 18",
    checked: true,
    disabled: true,
    data: {
      id: "checkbox-1",
      groupBy: "age"
    },
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    groupBy: "age",
    value: "18+",
    label: "Eu sou maior do que 18",
    checked: true,
    data: {
      id: "checkbox-2",
      groupBy: "age"
    },
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h3: true,
    color: "Blue-Grey-500",
    label: "Qual sua profiss\xE3o?"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    groupBy: "profissao",
    value: "developer",
    label: "Sou desenvolvedor",
    checked: true,
    data: {
      id: "checkbox-3",
      groupBy: "profissao"
    },
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    groupBy: "profissao",
    value: "not-developer",
    label: "Eu sou n\xE3o sou desenvolvedor",
    data: {
      id: "checkbox-4",
      groupBy: "profissao"
    },
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))));
});