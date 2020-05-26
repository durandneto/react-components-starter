"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 12px;\n    border-radius: 3px;\n    font-size: 14px;\n    cursor: pointer;\n    position: relative;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    :before {\n        content: '';\n        box-sizing: border-box;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 20px;\n        height: 20px;\n        margin-top: -10px;\n        margin-left: -10000px;\n        border-radius: 50%;\n        border: 1px solid ", ";\n        border-top-color: ", ";\n        animation: ", " .6s linear infinite;\n        ", "\n      }\n\n      ", "\n\n      ", "\n\n      ", "\n\n      ", "\n      ", "\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    to {\n        transform: rotate(360deg)\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var buttonLoadingAnimation = (0, _styledComponents.keyframes)(_templateObject());

var generateButtonColor = function generateButtonColor(color) {
  return "\n    background-color: ".concat(_Colors["default"]["".concat(color, "-A700")], ";\n    border: solid 1px ").concat(_Colors["default"]["".concat(color, "-800")], ";\n\n    :hover {\n        background-color: ").concat(_Colors["default"]["".concat(color, "-500")], ";\n        border: solid 1px ").concat(_Colors["default"]["".concat(color, "-500")], ";\n    }\n\n    :active {\n        background-color: ").concat(_Colors["default"]["".concat(color, "-500")], ";\n        border: solid 1px ").concat(_Colors["default"]["".concat(color, "-500")], ";\n        color: ").concat(_Colors["default"]["".concat(color, "-800")], "\n    }\n");
};

var generateDisabledButton = function generateDisabledButton(props) {
  var color = 'Blue';

  switch (true) {
    case props.secondary:
      color = 'Orange';
      break;

    case props.success:
      color = 'Green';
      break;

    case props.danger:
      color = 'Red';
      break;

    default:
      color = 'Blue';
  }

  return "\n    background-color: ".concat(_Colors["default"]["".concat(color, "-50")], ";\n    border: 1px solid ").concat(_Colors["default"]["".concat(color, "-50")], ";\n    color: ").concat(_Colors["default"]["".concat(color, "-200")], ";\n\n    :hover {\n        background-color: ").concat(_Colors["default"]["".concat(color, "-50")], ";\n        border: 1px solid ").concat(_Colors["default"]["".concat(color, "-50")], ";\n        cursor: ").concat(props.loading ? 'wait' : 'not-allowed', ";\n    }\n");
};

var _default = _styledComponents["default"].button(_templateObject2(), function (_ref) {
  var xs = _ref.xs;
  return xs && "\n        padding: 4px;\n    ";
}, function (_ref2) {
  var sm = _ref2.sm;
  return sm && "\n        padding: 6px;\n    ";
}, function (_ref3) {
  var md = _ref3.md;
  return md && "\n        padding: 8px;\n    ";
}, function (_ref4) {
  var lg = _ref4.lg;
  return lg && "\n        padding: 10px;\n    ";
}, function (_ref5) {
  var full = _ref5.full;
  return full && "\n        width: 100%;\n    ";
}, _Colors["default"]['Blue-Grey-200'], _Colors["default"]['Blue-500'], buttonLoadingAnimation, function (_ref6) {
  var loading = _ref6.loading;
  return loading && "\n            margin-left: -10px;\n        ";
}, function (_ref7) {
  var primary = _ref7.primary;
  return primary && "\n        ".concat(generateButtonColor('Blue'), "\n      ");
}, function (_ref8) {
  var danger = _ref8.danger;
  return danger && "\n        ".concat(generateButtonColor('Red'), "\n      ");
}, function (_ref9) {
  var success = _ref9.success;
  return success && "\n        ".concat(generateButtonColor('Green'), "\n      ");
}, function (_ref10) {
  var secondary = _ref10.secondary;
  return secondary && "\n        ".concat(generateButtonColor('Orange'), "\n      ");
}, function (props) {
  return props.disabled && "\n        ".concat(generateDisabledButton(props), "\n      ");
});

exports["default"] = _default;