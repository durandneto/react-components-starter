"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAvatar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 32px;\n  height: 32px;\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);\n  background-image: url(", ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n\n    ", "\n\n    ", ";\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledAvatar = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.src && props.src;
}, function (_ref) {
  var cursorPoniter = _ref.cursorPoniter;
  return cursorPoniter && "\n      cursor: pointer;\n  ";
}, function (_ref2) {
  var loading = _ref2.loading;
  return loading && "\n      filter: blur(4px);\n  ";
});

exports.StyledAvatar = StyledAvatar;