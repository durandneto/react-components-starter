"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireWildcard(require("../../../Components/Grid"));

var _input = _interopRequireDefault(require("../../../Components/input"));

var _Button = _interopRequireDefault(require("../../../Components/Button"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GRSearchHeader = function GRSearchHeader(props) {
  return /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    alignCenter: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, props.preloading ? /*#__PURE__*/_react["default"].createElement(_reactPreloadSkeleton.InputSkeleton, null) : /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: props.value,
    onEvent: props.onEvent,
    data: props.data,
    disabled: props.loading
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, !props.preloading && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    xs: true,
    label: "Search",
    onEvent: props.onEvent,
    data: props.data,
    loading: props.loading,
    primary: true
  })));
};

GRSearchHeader.propTypes = {
  onEvent: _propTypes["default"].func.isRequired
};
GRSearchHeader.defaultProps = {
  onEvent: _propTypes["default"].func.isRequired
};
var _default = GRSearchHeader;
exports["default"] = _default;