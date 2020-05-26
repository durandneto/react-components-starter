"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = _interopRequireWildcard(require("../Grid"));

var _Header = _interopRequireDefault(require("../Typography/Header"));

var _ = _interopRequireDefault(require("."));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Components|Checkbox", module).add("Variations", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-700",
    h1: true,
    label: "Checkbox"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h3: true,
    label: "Default value"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h3: true,
    label: "Default value checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    checked: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h2: true,
    label: "Loading"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h5: true,
    label: "Not checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    loading: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    loading: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    loading: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h5: true,
    label: "Checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    loading: true,
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    loading: true,
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    loading: true,
    checked: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h2: true,
    label: "Success"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h5: true,
    label: "Not checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    success: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    success: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    success: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h5: true,
    label: "Checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    success: true,
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    success: true,
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    success: true,
    checked: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h2: true,
    label: "Error"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h5: true,
    label: "Not checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    error: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    error: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    error: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h5: true,
    label: "Checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    error: true,
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    error: true,
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    error: true,
    checked: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h2: true,
    label: "Disabled"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h5: true,
    label: "Not checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    disabled: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    disabled: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    disabled: true
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h5: true,
    label: "Checked"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    disabled: true,
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "I want to receive e-mails",
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    disabled: true,
    checked: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    disabled: true,
    checked: true
  }))));
}).add("Default", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h3: true,
    label: "Checkbox"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "asdas8",
      user: {
        id: 97
      }
    },
    value: 2,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))));
}).add("With Label", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))));
}).add("Without Label", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))));
}).add("Multiple", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h3: true,
    label: "Side by side"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h3: true,
    label: "List"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h3: true,
    label: "Side by side"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h3: true,
    label: "List"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    color: "Blue-Grey-500",
    h3: true,
    label: "Auto Column"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    autoColumn: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Click here to receive notifications",
    data: {
      gtmData: "aiao23987b7998g28",
      user: {
        id: 37
      }
    },
    value: 1,
    name: "input-checkbox-gtm",
    id: "input-checkbox-gtm-1",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }))));
});