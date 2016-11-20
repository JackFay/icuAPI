"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            var query = this.props.location.query;
            var params = this.props.params;


            return _react2.default.createElement(
                "div",
                { "class": "MainContent" },
                _react2.default.createElement(
                    "section",
                    { "class": "FirstSection" },
                    _react2.default.createElement(
                        "h1",
                        { "class": "IntroHeading" },
                        "Advanced Home Security"
                    ),
                    _react2.default.createElement(
                        "h4",
                        { "class": "IntroSlogan" },
                        "For Peace of Mind"
                    ),
                    _react2.default.createElement(
                        "div",
                        { "class": "MarketingContainer" },
                        _react2.default.createElement(
                            "div",
                            { "class": "Marketing" },
                            _react2.default.createElement("div", { "class": "MarketingPic Pic1" }),
                            _react2.default.createElement(
                                "div",
                                { "class": "MarketingHeading" },
                                "Proffesional Installation"
                            ),
                            _react2.default.createElement(
                                "p",
                                { "class": "MarketingContent" },
                                "Jacka Fay ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { "class": "Marketing" },
                            _react2.default.createElement("div", { "class": "MarketingPic Pic2" }),
                            _react2.default.createElement(
                                "div",
                                { "class": "MarketingHeading" },
                                "Reliable Technology"
                            ),
                            _react2.default.createElement(
                                "p",
                                { "class": "MarketingContent" },
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { "class": "Marketing" },
                            _react2.default.createElement("div", { "class": "MarketingPic Pic3" }),
                            _react2.default.createElement(
                                "div",
                                { "class": "MarketingHeading" },
                                "24/7 Monitoring"
                            ),
                            _react2.default.createElement(
                                "p",
                                { "class": "MarketingContent" },
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "section",
                    { "class": "SecondSection" },
                    _react2.default.createElement(
                        "h1",
                        { "class": "FiveStar" },
                        "5 Star Service"
                    ),
                    _react2.default.createElement("div", { "class": "FiveStarImage" })
                ),
                _react2.default.createElement(
                    "section",
                    { "class": "ThirdSection" },
                    _react2.default.createElement(
                        "h4",
                        { "class": "ReviewHeading" },
                        "Reviews"
                    ),
                    _react2.default.createElement(
                        "p",
                        { "class": "ReviewContent" },
                        "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
                    ),
                    _react2.default.createElement(
                        "div",
                        { "class": "v" },
                        "John Doe"
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=Home.js.map