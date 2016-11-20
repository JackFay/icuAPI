"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _settingsActions = require("../../actions/settingsActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SettingsComponent = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        notifications: store.settings.notifications
    };
}), _dec(_class = function (_React$Component) {
    _inherits(SettingsComponent, _React$Component);

    function SettingsComponent() {
        _classCallCheck(this, SettingsComponent);

        var _this = _possibleConstructorReturn(this, (SettingsComponent.__proto__ || Object.getPrototypeOf(SettingsComponent)).call(this));

        _this.state = {
            start_time: null,
            end_time: null,
            notification_option_id: null
        };
        return _this;
    }

    _createClass(SettingsComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                setting_id: this.props.setting_id,
                start_time: this.props.start_time,
                end_time: this.props.end_time,
                notification_option_id: this.props.notification_option_id
            });
        }
    }, {
        key: "notificationChange",
        value: function notificationChange() {
            this.state.notification_option_id = parseInt(this.state.notification_option_id);
            this.props.dispatch((0, _settingsActions.notification_change)(this.state));
        }
    }, {
        key: "startTimeChange",
        value: function startTimeChange(e) {
            this.state.start_time = e.target.value;
            this.notificationChange();
        }
    }, {
        key: "endTimeChange",
        value: function endTimeChange(e) {
            this.state.end_time = e.target.value;
            this.notificationChange();
        }
    }, {
        key: "preferenceChange",
        value: function preferenceChange(e) {
            this.state.notification_option_id = e.target.value;
            this.notificationChange();
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                start_time = _state.start_time,
                end_time = _state.end_time,
                notification_option_id = _state.notification_option_id;

            return _react2.default.createElement(
                "div",
                { "class": "notification" },
                _react2.default.createElement(
                    "label",
                    { "for": "start_time" },
                    "Start: "
                ),
                _react2.default.createElement("input", { type: "time", name: "start_time", defaultValue: start_time, onChange: this.startTimeChange.bind(this) }),
                _react2.default.createElement(
                    "label",
                    { "for": "end_time" },
                    "End: "
                ),
                _react2.default.createElement("input", { type: "time", name: "end_time", defaultValue: end_time, onChange: this.endTimeChange.bind(this) }),
                _react2.default.createElement(
                    "label",
                    { "for": "notification_preference" },
                    "Preference: "
                ),
                _react2.default.createElement(
                    "select",
                    { name: "notification_preference", defaultValue: notification_option_id, onChange: this.preferenceChange.bind(this) },
                    _react2.default.createElement(
                        "option",
                        { value: "1" },
                        "Email"
                    ),
                    _react2.default.createElement(
                        "option",
                        { value: "2" },
                        "Text"
                    ),
                    _react2.default.createElement(
                        "option",
                        { value: "3" },
                        "Both"
                    )
                )
            );
        }
    }]);

    return SettingsComponent;
}(_react2.default.Component)) || _class);
exports.default = SettingsComponent;
//# sourceMappingURL=SettingsComponent.js.map