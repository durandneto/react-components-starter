"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Input = exports.StyledIconLoading = exports.StyledIconError = exports.StyledErrorMessage = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  border: 1px solid ", ";\n  border-radius: 6px;\n  color: ", ";\n  font-size: 14px;\n  padding: 9px 12px;\n  width: 100%;\n  box-sizing: border-box;\n\n  ::placeholder {\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.53;\n    letter-spacing: normal;\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  cursor: wait;\n  :before {\n    content: '';\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    right: 12px;\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    margin-left: -10px;\n    border-radius: 50%;\n    border: 1px solid ", ";\n    border-top-color: ", ";\n    animation: ", " .6s linear infinite;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    top: 45px;\n    position: absolute;\n    width: 100%;\n    :before {\n        content: '!';\n        color: #fff ;\n        padding-left: 6px;\n        box-sizing: border-box;\n        position: absolute;\n        top: -21px;;\n        right: 21px;\n        width: 20px;\n        height: 20px;\n        margin-top: -10px;\n        margin-left: -10px;\n        border-radius: 50%;\n        border: 2px solid #fff;\n        background-color: ", ";\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  top: 45px;\n  position: absolute;\n  width: 100%;\n  overflow: hidden;\n  height: 15px;\n  font-size: 12px;\n"]);

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

var inputLoadingAnimation = (0, _styledComponents.keyframes)(_templateObject());

var StyledErrorMessage = _styledComponents["default"].span(_templateObject2(), _Colors["default"]['Red-600']);

exports.StyledErrorMessage = StyledErrorMessage;

var StyledIconError = _styledComponents["default"].span(_templateObject3(), _Colors["default"]['Red-700'], _Colors["default"]['Red-500']);

exports.StyledIconError = StyledIconError;

var StyledIconLoading = _styledComponents["default"].span(_templateObject4(), _Colors["default"]['Blue-Grey-200'], _Colors["default"]['Blue-500'], inputLoadingAnimation);

exports.StyledIconLoading = StyledIconLoading;

var Input = _styledComponents["default"].input(_templateObject5(), _Colors["default"]["Blue-Grey-100"], _Colors["default"]["Blue-Grey-500"], _Colors["default"]["Blue-Grey-100"], function (_ref) {
  var disabled = _ref.disabled;
  return disabled && "\n    color: ".concat(_Colors["default"]["Blue-Gray-500"], ";\n    background-color: ").concat(_Colors["default"]['Blue-Grey-50'], ";\n    border-color: ").concat(_Colors["default"]["Blue-Gray-500"], ";\n    cursor: not-allowed;\n    ::placeholder {\n        color: ").concat(_Colors["default"]["Blue-Gray-100"], ";\n    }");
}, function (_ref2) {
  var loading = _ref2.loading;
  return loading && "\n    color: ".concat(_Colors["default"]["Light-Blue-500"], ";\n    background-color: ").concat(_Colors["default"]['Blue-50'], ";\n    border-color: ").concat(_Colors["default"]["Light-Blue-500"], ";\n    cursor: wait;\n    ::placeholder {\n        color: ").concat(_Colors["default"]["Light-Blue-100"], ";\n    }");
}, function (_ref3) {
  var error = _ref3.error;
  return error && "\n    color: ".concat(_Colors["default"]["Red-500"], ";\n    border-color: ").concat(_Colors["default"]["Red-500"], ";\n    ::placeholder {\n        color: ").concat(_Colors["default"]["Red-100"], ";\n    }");
}, function (_ref4) {
  var success = _ref4.success;
  return success && "\n    color: ".concat(_Colors["default"]["Green-500"], ";\n    border-color: ").concat(_Colors["default"]["Green-500"], ";\n    ::placeholder {\n        color: ").concat(_Colors["default"]["Green-100"], ";\n    }");
});

exports.Input = Input;
var _default = Input;
exports["default"] = _default;