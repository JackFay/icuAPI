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

var _SettingsComponent = require("../components/settings/SettingsComponent");

var _SettingsComponent2 = _interopRequireDefault(_SettingsComponent);

var _reactRedux = require("react-redux");

var _settingsActions = require("../actions/settingsActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        notifications: store.settings.notifications,
        userId: store.user.userId
    };
}), _dec(_class = function (_React$Component) {
    _inherits(Settings, _React$Component);

    function Settings() {
        _classCallCheck(this, Settings);

        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

        _this.state = {
            notifications: [],
            settingsComponents: []
        };
        return _this;
    }

    _createClass(Settings, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.dispatch((0, _settingsActions.get_notifications)(this.props.userId));
        }
    }, {
        key: "addSetting",
        value: function addSetting() {
            this.props.dispatch((0, _settingsActions.create_notification)());
        }
    }, {
        key: "onSave",
        value: function onSave(settings) {
            console.log(settings);
            this.props.dispatch((0, _settingsActions.save_notifications)(settings));
        }
    }, {
        key: "notificationChange",
        value: function notificationChange(e) {
            console.log(e);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var SettingsComponents = this.props.notifications.map(function (notification) {
                return _react2.default.createElement(_SettingsComponent2.default, _extends({ key: notification.setting_id }, notification, { onChange: _this2.notificationChange.bind(_this2) }));
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
                        _react2.default.createElement(
                            "div",
                            { "class": "centerDiv" },
                            _react2.default.createElement(
                                "div",
                                { "class": "notificationRule" },
                                " Take control of your home security by adding a notification rule.",
                                _react2.default.createElement("br", null),
                                " Provide a ",
                                _react2.default.createElement(
                                    "b",
                                    null,
                                    "start time"
                                ),
                                ", ",
                                _react2.default.createElement(
                                    "b",
                                    null,
                                    "end time"
                                ),
                                ", and ",
                                _react2.default.createElement(
                                    "b",
                                    null,
                                    "notification preference"
                                ),
                                ". We'll take care of the rest!",
                                _react2.default.createElement("br", null),
                                SettingsComponents,
                                _react2.default.createElement(
                                    "button",
                                    { id: "addButton", "class": "ui-button ui-widget ui-corner-all", onClick: this.addSetting.bind(this) },
                                    _react2.default.createElement(
                                        "b",
                                        null,
                                        "Add "
                                    )
                                ),
                                _react2.default.createElement(
                                    "button",
                                    { id: "saveButton", "class": "ui-button ui-widget ui-corner-all", onClick: function onClick() {
                                            return _this2.onSave(SettingsComponents.map(function (setting) {
                                                return setting.props;
                                            }));
                                        } },
                                    _react2.default.createElement(
                                        "b",
                                        null,
                                        "Save"
                                    )
                                )
                            ),
                            _react2.default.createElement("div", { "class": "notificationRule", id: "notificationContainer" })
                        )
                    )
                )
            );
        }
    }]);

    return Settings;
}(_react2.default.Component)) || _class);
exports.default = Settings;
//# sourceMappingURL=Settings.js.map