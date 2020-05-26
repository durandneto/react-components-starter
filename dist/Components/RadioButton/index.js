"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireWildcard(require("../Grid"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RabioButton = function RabioButton(props) {
  var checkbox = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (props.checked) {
      checkbox.current.checked = true;
    }
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_styles.StyledContainer, {
    disabled: props.disabled,
    onClick: function onClick(e) {
      if (!props.disabled && !checkbox.current.checked) {
        checkbox.current.checked = true;
        props.onEvent({
          type: "onClick",
          origin: "RadioButton",
          data: _objectSpread({}, props.data, {
            value: props.value
          })
        });
      }
    },
    onMouseEnter: function onMouseEnter(e) {
      props.onEvent({
        type: "onMouseEnter",
        origin: "RadioButton",
        data: _objectSpread({}, props.data, {
          value: props.value
        })
      });
    },
    onMouseOut: function onMouseOut(e) {
      props.onEvent({
        type: "onMouseOut",
        origin: "RadioButton",
        data: _objectSpread({}, props.data, {
          value: props.value
        })
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement("input", {
    ref: checkbox,
    type: "radio",
    value: props.value,
    onChange: function onChange(e) {},
    disabled: props.disabled,
    name: props.groupBy
  })), props.label && /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, props.label))));
};

RabioButton.defaultProps = {
  disabled: false,
  checked: false
};
RabioButton.propTypes = {
  disabled: _propTypes["default"].bool,
  value: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  groupBy: _propTypes["default"].string.isRequired,
  onEvent: _propTypes["default"].func.isRequired,
  data: _propTypes["default"].object,
  checked: _propTypes["default"].bool
};
var _default = RabioButton;
exports["default"] = _default;