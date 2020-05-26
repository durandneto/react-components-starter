"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIconLoading = exports.StyledCheckbox = exports.StyledContainer = exports.StyledInput = exports.StyledText = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Colors"));

var _Body = _interopRequireDefault(require("../Typography/Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: wait;\n  :before {\n    content: '';\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 12px;\n    height: 12px;\n    margin-top: -6px;\n    margin-left: -6px;\n    border-radius: 50%;\n    border: 1px solid ", ";\n    border-top-color: ", ";\n    animation: ", " .6s linear infinite;\n    ", "\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  width: 15px;\n  height: 15px;\n  border-radius: 3px;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  * {\n    color: ", ";\n    cursor: pointer;\n  }\n  :hover {\n    * {\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* babel-plugin-inline-import './checked.svg' */
var checkedIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzAiIGhlaWdodD0iMjcwIj4NCiAgICA8cGF0aCBkPSJNIDMwLDE4MCA5MCwyNDAgMjQwLDMwIiBzdHlsZT0ic3Ryb2tlOiM2MDdEOEI7IHN0cm9rZS13aWR0aDozMDsgZmlsbDpub25lIiAvPg0KPC9zdmc+";
var inputLoadingAnimation = (0, _styledComponents.keyframes)(_templateObject());
var StyledText = (0, _styledComponents["default"])(_Body["default"])(_templateObject2(), _Colors["default"]["Blue-Grey-500"], function (_ref) {
  var checked = _ref.checked;
  return checked && "\n    color: ".concat(_Colors["default"]["Blue-Grey-900"], ";\n  ");
});
exports.StyledText = StyledText;

var StyledInput = _styledComponents["default"].input(_templateObject3());

exports.StyledInput = StyledInput;

var StyledContainer = _styledComponents["default"].div(_templateObject4(), _Colors["default"]["Blue-Grey-500"], _Colors["default"]["Blue-Grey-200"], function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && "\n    * {\n      color: ".concat(_Colors["default"]["Blue-Grey-100"], ";\n      cursor: not-allowed;\n    }\n    :hover {\n      * {\n        color: ").concat(_Colors["default"]["Blue-Grey-100"], ";\n        cursor: not-allowed;\n      }\n    }\n  ");
}, function (_ref3) {
  var error = _ref3.error;
  return error && "\n    * {\n      color: ".concat(_Colors["default"]["Red-500"], ";\n      cursor: pointer;\n    }\n    :hover {\n      * {\n        color: ").concat(_Colors["default"]["Red-200"], ";\n        cursor: pointer;\n      }\n    }\n  ");
}, function (_ref4) {
  var loading = _ref4.loading;
  return loading && "\n    * {\n      color: ".concat(_Colors["default"]["Blue-200"], ";\n      cursor: wait;\n    }\n    :hover {\n      * {\n        color: ").concat(_Colors["default"]["Blue-200"], ";\n        cursor: wait;\n      }\n    }\n  ");
}, function (_ref5) {
  var success = _ref5.success;
  return success && "\n    * {\n      color: ".concat(_Colors["default"]["Green-500"], ";\n      cursor: pointer;\n    }\n    :hover {\n      * {\n        color: ").concat(_Colors["default"]["Green-200"], ";\n        cursor: pointer;\n      }\n    }\n  ");
});

exports.StyledContainer = StyledContainer;

var StyledCheckbox = _styledComponents["default"].span(_templateObject5(), _Colors["default"]["Blue-Grey-50"], _Colors["default"]["Blue-Grey-100"], function (_ref6) {
  var checked = _ref6.checked;
  return checked && "\n    :before {\n      content: \"\";\n      background-image:url(".concat(checkedIcon, ");\n      background-size: 100% 100%;\n      display: inline-block;\n      height: 18px;\n      width: 18px;\n      position: relative;\n      top: -5px;\n      left: 2px;\n    }\n  ");
}, function (_ref7) {
  var error = _ref7.error;
  return error && "\n    background-color: ".concat(_Colors["default"]["Red-50"], ";\n    border: 1px solid ").concat(_Colors["default"]["Red-200"], ";\n  ");
}, function (_ref8) {
  var loading = _ref8.loading;
  return loading && "\n    background-color: ".concat(_Colors["default"]["Blue-50"], ";\n    border: 1px solid ").concat(_Colors["default"]["Blue-200"], ";\n  ");
}, function (_ref9) {
  var success = _ref9.success;
  return success && "\n    background-color: ".concat(_Colors["default"]["Green-50"], ";\n    border: 1px solid ").concat(_Colors["default"]["Green-200"], ";\n  ");
});

exports.StyledCheckbox = StyledCheckbox;

var StyledIconLoading = _styledComponents["default"].span(_templateObject6(), _Colors["default"]['Blue-Grey-200'], _Colors["default"]['Blue-500'], inputLoadingAnimation, function (_ref10) {
  var label = _ref10.label;
  return label && "\n      width: 20px;\n      height: 20px;\n      margin-top: -10px;\n      margin-left: -10px;\n    ";
});

exports.StyledIconLoading = StyledIconLoading;