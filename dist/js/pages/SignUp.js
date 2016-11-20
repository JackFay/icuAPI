"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_React$Component) {
    _inherits(SignUp, _React$Component);

    function SignUp() {
        _classCallCheck(this, SignUp);

        var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this));

        _this.state = {
            username: "",
            hash: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            email: ""
        };
        return _this;
    }

    _createClass(SignUp, [{
        key: "userNameChange",
        value: function userNameChange(e) {
            this.state.username = e.target.value;
        }
    }, {
        key: "passwordChange",
        value: function passwordChange(e) {
            this.state.hash = e.target.value;
        }
    }, {
        key: "firstNameChange",
        value: function firstNameChange(e) {
            this.state.first_name = e.target.value;
        }
    }, {
        key: "lastNameChange",
        value: function lastNameChange(e) {
            this.state.last_name = e.target.value;
        }
    }, {
        key: "phoneNumChange",
        value: function phoneNumChange(e) {
            this.state.phone_number = e.target.value;
        }
    }, {
        key: "emailChange",
        value: function emailChange(e) {
            this.state.email = e.target.value;
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            console.log(this.state);
            _axios2.default.post('http://localhost:8000/api/new_user', this.state);
            _reactRouter.hashHistory.push('dashboard');
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
                        "Sign Up"
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
                                "div",
                                { "class": "TextboxLableContainer2" },
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    "User Name"
                                ),
                                _react2.default.createElement("input", { id: "username", type: "text", name: "lname", "class": "textbox", onChange: this.userNameChange.bind(this) })
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
                                "h4",
                                { "class": "BillingH4" },
                                "Personal Info"
                            ),
                            _react2.default.createElement(
                                "div",
                                { "class": "TextboxLableContainer2" },
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    "First Name"
                                ),
                                _react2.default.createElement("input", { id: "fname", type: "text", name: "lname", "class": "textbox", onChange: this.firstNameChange.bind(this) })
                            ),
                            _react2.default.createElement(
                                "div",
                                { "class": "TextboxLableContainer2" },
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    "Last Name"
                                ),
                                _react2.default.createElement("input", { id: "lname", type: "text", name: "lname", "class": "textbox", onChange: this.lastNameChange.bind(this) })
                            ),
                            _react2.default.createElement("br", null),
                            _react2.default.createElement(
                                "div",
                                { "class": "TextboxLableContainer2" },
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    "Phone Number"
                                ),
                                _react2.default.createElement("input", { id: "phoneNum", type: "text", name: "lname", "class": "textbox", onChange: this.phoneNumChange.bind(this) })
                            ),
                            _react2.default.createElement(
                                "div",
                                { "class": "TextboxLableContainer2" },
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    "E-Mail"
                                ),
                                _react2.default.createElement("input", { id: "email", type: "text", name: "lname", "class": "textbox", onChange: this.emailChange.bind(this) })
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

    return SignUp;
}(_react2.default.Component);

exports.default = SignUp;
//# sourceMappingURL=SignUp.js.map