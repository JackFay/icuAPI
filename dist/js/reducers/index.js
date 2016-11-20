"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require("redux");

var _userReducer = require("./userReducer");

var _userReducer2 = _interopRequireDefault(_userReducer);

var _settingsReducer = require("./settingsReducer");

var _settingsReducer2 = _interopRequireDefault(_settingsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    user: _userReducer2.default,
    settings: _settingsReducer2.default
});
//# sourceMappingURL=index.js.map