"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireWildcard(require("../../../Components/Grid"));

var _Avatar = _interopRequireDefault(require("../../../Components/Avatar"));

var _Body = _interopRequireDefault(require("../../../Components/Typography/Body"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

var _styles = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ParsedTweetText = function ParsedTweetText(props) {
  var mentionParseText = "INSERT_MENTION_HERE";

  if (!props.mentions) {
    return /*#__PURE__*/_react["default"].createElement(_Body["default"], {
      color: "Blue-Grey-500",
      label: props.text
    });
  }

  var outText = props.text;
  var arrMentions = [];
  props.mentions.map(function (mention) {
    arrMentions.push("@".concat(mention.screenName));
    outText = outText.replace(props.text.substring(mention.start, mention.end), mentionParseText);
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, outText.split(mentionParseText).map(function (text, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
      color: text.indexOf('RT') !== -1 ? "Cyan-600" : "Blue-Grey-600",
      label: text
    }), arrMentions[index] && /*#__PURE__*/_react["default"].createElement("a", {
      href: "#",
      title: "Follow ".concat(props.mentions[index].name, " on twitter ").concat(arrMentions[index]),
      alt: "Follow ".concat(props.mentions[index].name, " on twitter ").concat(arrMentions[index])
    }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
      color: "Blue-600",
      label: arrMentions[index]
    })));
  }));
};

var GRSearchHeader = function GRSearchHeader(props) {
  if (props.tweets.length === 0) {
    return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      style: {
        opacity: props.loading ? 0.2 : 1
      }
    }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
      justifyCenter: true
    }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
      alignCenter: true
    }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
      color: "Blue-Grey-500",
      label: props.message
    }))));
  }

  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    style: {
      opacity: props.loading ? 0.2 : 1
    }
  }, props.tweets.map(function (tweet, index) {
    return /*#__PURE__*/_react["default"].createElement(_styles["default"], {
      id: "draggable-".concat(props.data, "-").concat(index),
      key: "draggable-".concat(props.data, "-").concat(index),
      draggable: props.draggable,
      onDragStart: function onDragStart(e) {
        e.dataTransfer.setData("text", "draggable-".concat(props.data, "-").concat(index));
        props.onEvent({
          type: 'onDragStart',
          data: props.data,
          id: tweet.id
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
      full: true
    }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
      noPadding: true
    }, props.preloading ? /*#__PURE__*/_react["default"].createElement(_reactPreloadSkeleton.AvatarSkeleton, null) : /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      src: tweet.user.miniProfileImageURL
    })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
      full: true
    }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
      noPadding: true
    }, !props.preloading && /*#__PURE__*/_react["default"].createElement(_Body["default"], {
      color: "Grey-900",
      label: tweet.user.name
    })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
      full: true,
      noPadding: true
    }, !props.preloading && /*#__PURE__*/_react["default"].createElement("a", {
      href: "#"
    }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
      color: "Blue-600",
      title: tweet.user.name,
      alt: tweet.user.name,
      label: "@".concat(tweet.user.screenName)
    }))), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
      justifyRight: true,
      noPadding: true
    }, !props.preloading && /*#__PURE__*/_react["default"].createElement(_Body["default"], {
      color: "Purple-300",
      nowrap: true,
      label: new Date(tweet.createdAt).toDateString()
    }))), props.preloading ? /*#__PURE__*/_react["default"].createElement(_reactPreloadSkeleton.TitleDescriptionSkeleton, null) : /*#__PURE__*/_react["default"].createElement(ParsedTweetText, {
      text: tweet.text,
      mentions: tweet.userMentionEntities
    }))))));
  }), props.dragging && /*#__PURE__*/_react["default"].createElement(_styles.DropZone, null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    justifyCenter: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    alignCenter: true
  }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    xl: true,
    color: "Pink-500",
    label: "Drop Zone"
  })))));
};

GRSearchHeader.propTypes = {
  onEvent: _propTypes["default"].func.isRequired
};
GRSearchHeader.defaultProps = {
  onEvent: _propTypes["default"].func.isRequired
};
var _default = GRSearchHeader;
exports["default"] = _default;