"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents["default"].span(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color && "\n        color: ".concat(_Colors["default"][color], ";\n    ");
}, function (_ref2) {
  var xs = _ref2.xs;
  return xs && "\n        font-size: 12px;\n    ";
}, function (_ref3) {
  var sm = _ref3.sm;
  return sm && "\n        font-size: 14px;\n    ";
}, function (_ref4) {
  var md = _ref4.md;
  return md && "\n        font-size: 16px;\n    ";
}, function (_ref5) {
  var lg = _ref5.lg;
  return lg && "\n        font-size: 18px;\n    ";
}, function (_ref6) {
  var nowrap = _ref6.nowrap;
  return nowrap && "\n        white-space: nowrap;\n    ";
});

exports["default"] = _default;