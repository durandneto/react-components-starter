"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? "\n    opacity: 0.3;\n    :hover {\n        * {\n            cursor: not-allowed;\n        }\n    }\n  " : "\n    :hover {\n        * {\n            cursor: pointer;\n            opacity: 0.8;\n        }\n    }\n  ";
});

exports.StyledContainer = StyledContainer;