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

var DashboardComponent = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        store: store,
        user: store.user,
        loggedIn: store.user.loggedIn,
        error: store.error
    };
}), _dec(_class = function (_React$Component) {
    _inherits(DashboardComponent, _React$Component);

    function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);

        return _possibleConstructorReturn(this, (DashboardComponent.__proto__ || Object.getPrototypeOf(DashboardComponent)).call(this));
    }

    _createClass(DashboardComponent, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { "class": "MainContent" },
                _react2.default.createElement(
                    "section",
                    { "class": "FirstSection" },
                    _react2.default.createElement(
                        "div",
                        { "class": "MarketingContainer" },
                        _react2.default.createElement(
                            "h1",
                            { "class": "IntroHeading" },
                            "Dashboard"
                        ),
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "a",
                            { href: "Register.html" },
                            _react2.default.createElement(
                                "div",
                                { "class": "Marketing DashButton" },
                                _react2.default.createElement("div", { "class": "MarketingPic Pic2" }),
                                _react2.default.createElement(
                                    "div",
                                    { "class": "MarketingHeading" },
                                    "Register Device"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { "class": "MarketingContent" },
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "settings" },
                            _react2.default.createElement(
                                "div",
                                { "class": "Marketing DashButton" },
                                _react2.default.createElement("div", { "class": "MarketingPic Pic1" }),
                                _react2.default.createElement(
                                    "div",
                                    { "class": "MarketingHeading" },
                                    "Settings"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { "class": "MarketingContent" },
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "images" },
                            _react2.default.createElement(
                                "div",
                                { "class": "Marketing DashButton" },
                                _react2.default.createElement("div", { "class": "MarketingPic Pic3" }),
                                _react2.default.createElement(
                                    "div",
                                    { "class": "MarketingHeading" },
                                    "View Photos"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { "class": "MarketingContent" },
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DashboardComponent;
}(_react2.default.Component)) || _class);
exports.default = DashboardComponent;
//# sourceMappingURL=DashboardComponent.js.map