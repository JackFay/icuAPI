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

var LoginComponent = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        store: store,
        user: store.user,
        loggedIn: store.user.loggedIn,
        error: store.error
    };
}), _dec(_class = function (_React$Component) {
    _inherits(LoginComponent, _React$Component);

    function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        var _this = _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call(this));

        _this.state = {
            data: {
                username: "",
                hash: ""
            },
            error: ""
        };
        return _this;
    }

    _createClass(LoginComponent, [{
        key: "usernameChange",
        value: function usernameChange(e) {
            this.state.data.username = e.target.value;
        }
    }, {
        key: "passwordChange",
        value: function passwordChange(e) {
            this.state.data.hash = e.target.value;
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            this.props.dispatch((0, _userActions.user_login)(this.state.data));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { "class": "MainContent" },
                _react2.default.createElement(
                    "section",
                    { "class": "SignUpSection" },
                    _react2.default.createElement(
                        "h1",
                        { "class": "IntroHeading" },
                        "Log In"
                    ),
                    _react2.default.createElement(
                        "div",
                        { "class": "SignUpContainer" },
                        _react2.default.createElement(
                            "div",
                            { "class": "SignUpContentContainer" },
                            _react2.default.createElement(
                                "h4",
                                { "class": "BillingH4" },
                                "Account Info"
                            ),
                            _react2.default.createElement(
                                "h5",
                                null,
                                this.props.error
                            ),
                            _react2.default.createElement(
                                "div",
                                { "class": "TextboxLableContainer2" },
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    "User Name"
                                ),
                                _react2.default.createElement("input", { id: "username", type: "text", name: "lname", "class": "textbox", onChange: this.usernameChange.bind(this) })
                            ),
                            _react2.default.createElement(
                                "div",
                                { "class": "TextboxLableContainer2" },
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    "Password"
                                ),
                                _react2.default.createElement("input", { id: "password", type: "password", name: "lname", "class": "textbox", onChange: this.passwordChange.bind(this) })
                            ),
                            _react2.default.createElement(
                                "button",
                                { type: "button", "class": "SubmitBtn", onClick: this.onSubmit.bind(this) },
                                "Submit"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component)) || _class);
exports.default = LoginComponent;
//# sourceMappingURL=LoginComponent.js.map