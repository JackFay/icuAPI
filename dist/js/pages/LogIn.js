"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = require("react-redux");

var _LoginComponent = require("../components/login/LoginComponent");

var _LoginComponent2 = _interopRequireDefault(_LoginComponent);

var _DashboardComponent = require("../components/dashboard/DashboardComponent");

var _DashboardComponent2 = _interopRequireDefault(_DashboardComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogIn = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        loggedIn: store.user.loggedIn,
        userId: store.user.userId
    };
}), _dec(_class = function (_React$Component) {
    _inherits(LogIn, _React$Component);

    function LogIn() {
        _classCallCheck(this, LogIn);

        return _possibleConstructorReturn(this, (LogIn.__proto__ || Object.getPrototypeOf(LogIn)).call(this));
    }

    _createClass(LogIn, [{
        key: "render",
        value: function render() {
            console.log(this.props);
            if (!this.props.loggedIn) {
                return _react2.default.createElement(_LoginComponent2.default, null);
            } else {
                return _react2.default.createElement(_DashboardComponent2.default, null);
            }
        }
    }]);

    return LogIn;
}(_react2.default.Component)) || _class);
exports.default = LogIn;
//# sourceMappingURL=LogIn.js.map