"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireWildcard(require("."));

var _input = _interopRequireDefault(require("../input"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _Header = _interopRequireDefault(require("../Typography/Header"));

var _Button = _interopRequireDefault(require("../Button"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Grid|Flexbox', module).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], null, /*#__PURE__*/_react["default"].createElement(_.Row, {
    spaceBetween: true
  }, /*#__PURE__*/_react["default"].createElement(_.Column, null, "1"), /*#__PURE__*/_react["default"].createElement(_.Column, null, "2")), /*#__PURE__*/_react["default"].createElement(_.Row, {
    spaceAround: true
  }, /*#__PURE__*/_react["default"].createElement(_.Column, null, "3"), /*#__PURE__*/_react["default"].createElement(_.Column, null, "4")), /*#__PURE__*/_react["default"].createElement(_.Row, null, /*#__PURE__*/_react["default"].createElement(_.Column, null, "5"), /*#__PURE__*/_react["default"].createElement(_.Column, null, "6")), /*#__PURE__*/_react["default"].createElement(_.Row, {
    justifyCenter: true
  }, /*#__PURE__*/_react["default"].createElement(_.Column, null, "7"), /*#__PURE__*/_react["default"].createElement(_.Column, null, "8")), /*#__PURE__*/_react["default"].createElement(_.Row, {
    justifyRight: true
  }, /*#__PURE__*/_react["default"].createElement(_.Column, null, "9"), /*#__PURE__*/_react["default"].createElement(_.Column, null, "10")));
}).add('fullHeight', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    fullHeight: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('FullHeight Justify Content Center', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    fullHeight: true,
    justifyCenter: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('FullHeight Align Items Center', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    fullHeight: true,
    alignCenter: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('FullHeight Justify Content End and Align Items center', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    fullHeight: true,
    justifyRight: true,
    alignCenter: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('FullHeight Justify Content End', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    fullHeight: true,
    justifyRight: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('Container LG', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    lg: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('Container MD', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    md: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('Container SM', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    sm: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('Container XS', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 1"), /*#__PURE__*/_react["default"].createElement(_.Row, null, "Linha 2"));
}).add('Media Query', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], null, /*#__PURE__*/_react["default"].createElement(_.Row, null, /*#__PURE__*/_react["default"].createElement(_.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    label: "Fomul\xE1rio Responsivo"
  }))));
});