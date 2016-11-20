"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.get_notifications = get_notifications;
exports.create_notification = create_notification;
exports.save_notifications = save_notifications;
exports.notification_change = notification_change;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get_notifications(userId) {
    return function (dispatch) {
        var req = "http://localhost:8000/api/notification_settings/" + userId;
        _axios2.default.get(req).then(function (response) {
            response.data = response.data.map(function (setting) {
                return _extends({}, setting, {
                    new: false
                });
            });
            response.data.user_id = userId;
            dispatch({ type: "GET_NOTIFICATIONS", payload: response.data });
        }).catch(function (error) {
            console.log("Error connecting to db " + error);
        });
    };
}

function create_notification() {
    return function (dispatch) {
        dispatch({ type: "CREATE_NOTIFICATION" });
    };
}

function save_notifications(notifications) {
    return function (dispatch) {
        _axios2.default.post("http://localhost:8000/api/notification_settings", notifications).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
        dispatch({ type: "SAVE_NOTIFICATIONS", payload: notifications });
    };
}

function notification_change(settings) {
    return function (dispatch) {
        dispatch({ type: "NOTIFICATION_CHANGE", payload: settings });
    };
}
//# sourceMappingURL=settingsActions.js.map