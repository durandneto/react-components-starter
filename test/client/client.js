(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    function AliceDBClient() {
      var _this = this;

      this.db = null;

      var connect = function connect(config) {
        _this.socket = new WebSocket("ws://".concat(config.address, ":").concat(config.port));
        return new Promise(function (resolve, reject) {
          _this.socket.onopen = function () {
            resolve(new AliceDBClientFunctions(_this.socket));
          };
        });
      };

      return {
        connect: connect
      };
    }

    var _default = AliceDBClient;
    exports["default"] = _default;
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    function AliceDBClientFunctions(socket) {
      console.log('new AliceDBClientFunctions');
      var cb = [];
      var tables = [];

      var handleMessage = function handleMessage(message) {
        console.log('AliceDBClientFunctions received message');
        var decodedMessage = JSON.parse(message.data);
        console.log('received: ', message);

        if (cb[decodedMessage.message]) {
          cb[decodedMessage.message](decodedMessage.data);
        }
      };

      var subscribe = function subscribe(message, _cb) {
        cb[message] = _cb;
      };

      var sendMessage = function sendMessage(message, data) {
        return socket.send(JSON.stringify({
          message: message,
          data: data
        }));
      };

      var createTable = function createTable(name) {
        socket.onmessage = handleMessage;
        return new Promise(function (resolve, reject) {
          sendMessage('create-table', name);
          subscribe('on-created-table-success', function (tableName) {
            tables[tableName] = new AliceDBTable(tableName, socket);
            resolve(tables[tableName]);
          });
          subscribe('on-created-table-error', function (error) {
            reject(error);
          });
        });
      };

      var use = function use(tableName) {
        if (tables[tableName]) {
          return tables[tableName];
        } else {
          tables[tableName] = new AliceDBTable(tableName, socket);
          return tables[tableName];
        }
      };

      return {
        createTable: createTable,
        use: use
      };
    }

    var _default = AliceDBClientFunctions;
    exports["default"] = _default;
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function AliceDBTable(tableName, socket) {
      var records = [];
      var index = [];
      var cb = [];

      var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      };

      var createUUID = function createUUID() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      };

      var handleMessage = function handleMessage(message) {
        console.log('AliceDBTable received message');
        var decodedMessage = JSON.parse(message.data);
        console.log('received: ', message);

        if (cb[decodedMessage.message]) {
          cb[decodedMessage.message](decodedMessage.data);
        }
      };

      var subscribe = function subscribe(message, _cb) {
        cb[message] = _cb;
      };

      var sendMessage = function sendMessage(message, data) {
        return socket.send(JSON.stringify({
          message: message,
          data: data
        }));
      };

      var find = function find(uuid) {
        return records[index[uuid]];
      };

      var getAll = function getAll() {
        socket.onmessage = handleMessage;
        return new Promise(function (resolve, reject) {
          sendMessage('table-get-all-records', {
            tableName: tableName
          });
          subscribe('on-table-get-all-records-success', function (Rows) {
            resolve(Rows);
          });
          subscribe('on-table-get-all-records-error', function (error) {
            reject(error);
          });
        });
      };

      var addAsync = function addAsync(record) {
        var uuid = createUUID();
        index[uuid] = records.length;

        var row = _objectSpread({}, record, {
          uuid: uuid
        });

        records.push(row);
        return row;
      };

      var add = function add(record) {
        socket.onmessage = handleMessage;
        return new Promise(function (resolve, reject) {
          sendMessage('table-add-record', {
            record: record,
            tableName: tableName
          });
          subscribe('on-table-added-record-success', function (newRow) {
            resolve(newRow);
          });
          subscribe('on-table-added-record-error', function (error) {
            reject(error);
          });
        });
      };

      var remove = function remove(uuid) {
        return delete records[index[uuid]];
      };

      var update = function update(uuid, record) {
        return records[index[uuid]] = record;
      };

      return {
        getAll: getAll,
        find: find,
        add: add,
        addAsync: addAsync,
        remove: remove,
        update: update
      };
    }

    var _default = AliceDBTable;
    exports["default"] = _default;

    },{}]},{},[1]);
