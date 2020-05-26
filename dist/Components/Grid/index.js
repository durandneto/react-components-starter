"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Row = exports.Column = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin: initial;\n    padding: 6px;\n    width: fit-content;\n    position: relative;\n\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    margin: initial;\n    width: 100%;\n    position: relative;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    width: 100%;\n    margin: 0 auto;\n    padding: 0;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var spaceAround = _ref.spaceAround;
  return spaceAround && "\n        justify-content: space-around;\n    ";
}, function (_ref2) {
  var spaceBetween = _ref2.spaceBetween;
  return spaceBetween && "\n        justify-content: space-between;\n    ";
}, function (_ref3) {
  var justifyCenter = _ref3.justifyCenter;
  return justifyCenter && "\n        justify-content: center;\n    ";
}, function (_ref4) {
  var justifyRight = _ref4.justifyRight;
  return justifyRight && "\n        justify-content: flex-end;\n    ";
}, function (_ref5) {
  var alignCenter = _ref5.alignCenter;
  return alignCenter && "\n        align-items: center;\n    ";
}, function (_ref6) {
  var fullHeight = _ref6.fullHeight;
  return fullHeight && "\n        height: 100vh;\n    ";
}, function (_ref7) {
  var lg = _ref7.lg;
  return lg && "\n        width: 1280px;\n    ";
}, function (_ref8) {
  var md = _ref8.md;
  return md && "\n        width: 1024px;\n    ";
}, function (_ref9) {
  var sm = _ref9.sm;
  return sm && "\n        width: 768px;\n    ";
}, function (_ref10) {
  var xs = _ref10.xs;
  return xs && "\n        width: 320px;\n    ";
});

var Container = function Container(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledContainer, props, props.children);
};

exports.Container = Container;
Container.propTypes = {
  alignCenter: _propTypes["default"].bool,
  justifyCenter: _propTypes["default"].bool,
  justifyRight: _propTypes["default"].bool,
  fullHeight: _propTypes["default"].bool,
  spaceAround: _propTypes["default"].bool,
  spaceBetween: _propTypes["default"].bool,
  lg: _propTypes["default"].bool,
  md: _propTypes["default"].bool,
  sm: _propTypes["default"].bool,
  xs: _propTypes["default"].bool
};
Container.defaultProps = {
  alignCenter: false,
  justifyCenter: false,
  justifyRight: false,
  fullHeight: false,
  spaceAround: false,
  spaceBetween: false,
  lg: false,
  md: false,
  sm: false,
  xs: false
};
var StyledRow = (0, _styledComponents["default"])(StyledContainer)(_templateObject2(), function (_ref11) {
  var wrap = _ref11.wrap;
  return wrap && "\n        flex-flow: wrap;\n    ";
}, function (_ref12) {
  var margin = _ref12.margin;
  return margin && "\n        margin: 6px 0;\n    ";
}, function (_ref13) {
  var column = _ref13.column;
  return column && "\n        flex-direction: column;\n    ";
}, function (_ref14) {
  var autoColumn = _ref14.autoColumn;
  return autoColumn && "\n        @media only screen and (max-width: 768px) {\n            flex-direction: column;\n            align-items: flex-start;\n        }\n    ";
}, function (_ref15) {
  var fitContent = _ref15.fitContent;
  return fitContent && "\n        width: fit-content;\n    ";
});
var StyledColumn = (0, _styledComponents["default"])(StyledContainer)(_templateObject3(), function (_ref16) {
  var noPadding = _ref16.noPadding;
  return noPadding && "\n        padding: 0px;\n    ";
}, function (_ref17) {
  var marginRight = _ref17.marginRight;
  return marginRight && "\n        margin-right: 6px ;\n    ";
}, function (_ref18) {
  var autoColumnFullWidth = _ref18.autoColumnFullWidth;
  return autoColumnFullWidth && "\n        @media only screen and (max-width: 768px) {\n            width: 100%;\n        }\n    ";
}, function (_ref19) {
  var full = _ref19.full;
  return full && "\n    width: 100%;\n";
});

var Column = function Column(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledColumn, props, props.children);
};

exports.Column = Column;

var Row = function Row(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledRow, props, props.children);
};

exports.Row = Row;
Row.propTypes = Container.propTypes;
Row.defaultProps = Container.defaultProps;
Column.propTypes = Container.propTypes;
Column.defaultProps = Container.defaultProps;
var _default = Container;
exports["default"] = _default;