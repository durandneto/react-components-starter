"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireWildcard(require("../../Components/Grid"));

var _Header = _interopRequireDefault(require("../../Components/Typography/Header"));

var _Body = _interopRequireDefault(require("../../Components/Typography/Body"));

var _GRSearchHeader = _interopRequireDefault(require("./GRSearchHeader"));

var _GRTweetsBody = _interopRequireDefault(require("./GRTweetsBody"));

var _GRSavedTweets = _interopRequireDefault(require("./GRSavedTweets"));

var _Colors = _interopRequireDefault(require("../../Components/Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TweetSaverTemplate = function TweetSaverTemplate(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragging = _useState2[0],
      setDragging = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dropZoneTweet = _useState4[0],
      setDropZoneTweet = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      dropZoneLocalStorage = _useState6[0],
      setDropZoneLocalStorage = _useState6[1];

  (0, _react.useEffect)(function () {
    setDropZoneTweet(dropZoneTweet);
    setDropZoneLocalStorage(dropZoneLocalStorage);
  }, [dropZoneTweet, dropZoneLocalStorage]);
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h1: true,
    label: props.label,
    color: "Blue-Grey-700"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    spaceBetween: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    fullHeight: true,
    full: true,
    noPadding: true,
    style: {
      border: "solid 1px ".concat(_Colors["default"]["Blue-200"])
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      setDragging(false);
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_GRSearchHeader["default"], {
    loading: props.loading,
    preloading: props.preloading,
    data: "GRSearchHeader",
    onEvent: props.onEvent
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_GRTweetsBody["default"], {
    onDrag: props.drag,
    dropeZone: dropZoneTweet,
    draggable: true,
    message: "No tweets found!",
    loading: props.loading,
    preloading: props.preloading,
    tweets: props.tweets,
    data: "GRTweetsBody",
    onEvent: function onEvent(e) {
      if (e.type === 'onDragStart') {
        setDragging(true);
      }

      props.onEvent(e);
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    fullHeight: true,
    justifyCenter: true
  }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    nowrap: true,
    label: "Drag Tweets to save",
    color: "Grey-400"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    id: "Drag2",
    fullHeight: true,
    full: true,
    onDrop: function onDrop(e) {
      e.preventDefault();
      props.onEvent({
        type: 'onDrop'
      });
      setDragging(false);
      var data = e.dataTransfer.getData("text");
      document.getElementById("Drag2").appendChild(document.getElementById(data));
      props.onEvent({
        type: 'onDragOver1'
      });
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
    },
    style: {
      border: "solid 1px ".concat(_Colors["default"]["Pink-100"])
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h2: true,
    label: "Saved Tweets (".concat(props.savedTweets.length, ")"),
    color: "Pink-400"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: props.preloading
  }, /*#__PURE__*/_react["default"].createElement(_GRSavedTweets["default"], {
    message: "No tweets saved yet!",
    loading: props.loading,
    dragging: dragging,
    preloading: props.preloading,
    tweets: props.savedTweets,
    data: "GRSavedTweets",
    onEvent: function onEvent(e) {
      props.onEvent(e);
    }
  }))))));
};

TweetSaverTemplate.propTypes = {
  label: _propTypes["default"].string.isRequired,
  onEvent: _propTypes["default"].func.isRequired
};
TweetSaverTemplate.defaultProps = {
  label: _propTypes["default"].string.isRequired,
  onEvent: _propTypes["default"].func.isRequired
};
var _default = TweetSaverTemplate;
exports["default"] = _default;