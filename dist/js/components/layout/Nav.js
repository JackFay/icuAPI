"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRedux = require("react-redux");

var _userActions = require("../../actions/userActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        user: store.user.user,
        loggedIn: store.user.loggedIn
    };
}), _dec(_class = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));
    }

    _createClass(Nav, [{
        key: "handleLogIn",
        value: function handleLogIn() {
            if (this.props.loggedIn) {
                this.props.dispatch((0, _userActions.logout)());
            }
        }
    }, {
        key: "render",
        value: function render() {
            var location = this.props.location;

            var loggedIn = this.props.loggedIn ? "Log Out" : "Log In";
            var dashboardOrHome = this.props.loggedIn ? "dashboard" : "/";
            return _react2.default.createElement(
                "header",
                { "class": "Header" },
                _react2.default.createElement(
                    "div",
                    { "class": "GrayBar" },
                    _react2.default.createElement(
                        "div",
                        { "class": "GrayBarContents" },
                        _react2.default.createElement(
                            "div",
                            { "class": "PhonNum" },
                            "816-555-5555"
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "signup" },
                            _react2.default.createElement(
                                "div",
                                { "class": "SignUp" },
                                "Sign Up"
                            )
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "dashboard", onClick: this.handleLogIn.bind(this) },
                            _react2.default.createElement(
                                "div",
                                { "class": "LogIn" },
                                loggedIn
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { "class": "WhiteBar" },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: dashboardOrHome },
                        _react2.default.createElement("div", { "class": "Logo" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { "class": "NavUL" },
                        _react2.default.createElement(
                            "div",
                            { "class": "NavTab" },
                            "Plans / Pricing"
                        ),
                        _react2.default.createElement(
                            "div",
                            { "class": "NavTab" },
                            "Equipment"
                        ),
                        _react2.default.createElement(
                            "div",
                            { "class": "NavTab" },
                            "Support"
                        )
                    )
                )
            );
        }
    }]);

    return Nav;
}(_react2.default.Component)) || _class);
exports.default = Nav;
//# sourceMappingURL=Nav.js.map