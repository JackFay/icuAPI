"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _userActions = require("../actions/userActions");

var _LoginComponent = require("../components/login/LoginComponent");

var _LoginComponent2 = _interopRequireDefault(_LoginComponent);

var _Image = require("../components/dashboard/Image");

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Images = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        images: store.user.images,
        userId: store.user.userId,
        loggedIn: store.user.loggedIn
    };
}), _dec(_class = function (_React$Component) {
    _inherits(Images, _React$Component);

    function Images() {
        _classCallCheck(this, Images);

        return _possibleConstructorReturn(this, (Images.__proto__ || Object.getPrototypeOf(Images)).apply(this, arguments));
    }

    _createClass(Images, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            if (!this.props.loggedIn) {
                _reactRouter.hashHistory.push('dashboard');
                return;
            }
            this.props.dispatch((0, _userActions.get_images)(this.props.userId));
        }
    }, {
        key: "render",
        value: function render() {
            var images = this.props.images;

            var ImageComponents = images.map(function (image) {
                return _react2.default.createElement(_Image2.default, _extends({ key: image.image_id }, image));
            });
            return _react2.default.createElement(
                "div",
                { "class": "MainContent" },
                _react2.default.createElement(
                    "section",
                    { "class": "FirstSection" },
                    _react2.default.createElement(
                        "div",
                        { "class": "MarketingContainer" },
                        ImageComponents
                    )
                )
            );
        }
    }]);

    return Images;
}(_react2.default.Component)) || _class);
exports.default = Images;
//# sourceMappingURL=Images.js.map