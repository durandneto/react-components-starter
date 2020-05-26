"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireWildcard(require("../Grid"));

var _Header = _interopRequireDefault(require("../Typography/Header"));

var _Body = _interopRequireDefault(require("../Typography/Body"));

var _input = _interopRequireDefault(require("../input"));

var _Button = _interopRequireDefault(require("../Button"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Form = function Form(props) {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    label: "Formul\xE1rio Responsivo"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    alignCenter: true,
    autoColumn: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    label: "Name:"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], _extends({
    data: {
      User: {
        id: 1
      }
    }
  }, props.controls.name, {
    onEvent: props.onEvent,
    placeholder: "Input",
    testMessage: "",
    type: "text",
    value: ""
  })))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    alignCenter: true,
    autoColumn: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    label: "Email:"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], _extends({
    data: {
      User: {
        id: 1
      }
    },
    onEvent: props.onEvent,
    placeholder: "Type your E-mail",
    testMessage: "E-mail inv\xE1lido.",
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    type: "text",
    value: ""
  }, props.controls.email)))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], _extends({
    data: {
      gtmData: 'aiao23987b7998g28',
      user: {
        id: 37
      }
    },
    id: "input-checkbox-gtm-1",
    label: "Subscribe no Canal",
    name: "input-checkbox-gtm",
    onEvent: props.onEvent,
    value: 1
  }, props.controls.subscribe)))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    autoColumn: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    label: "Select your age:"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    noPadding: true
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], _extends({
    data: {
      groupBy: 'age',
      id: 'checkbox-1'
    },
    groupBy: "age",
    label: "Eu sou menor do que 18",
    onEvent: props.onEvent,
    value: "18-"
  }, props.controls.age))), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    noPadding: true
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], _extends({
    data: {
      groupBy: 'age',
      id: 'checkbox-1'
    },
    groupBy: "age",
    label: "Eu sou maior do que 18",
    onEvent: props.onEvent,
    value: "18+"
  }, props.controls.age)))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    justifyRight: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    autoColumnFullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
    data: {
      user: {
        id: 1
      }
    },
    label: "Enviar",
    onEvent: props.onEvent,
    success: true
  }, props.controls.cta)))));
};

var _default = Form;
exports["default"] = _default;