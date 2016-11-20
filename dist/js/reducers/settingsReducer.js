"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        notifications: [],
        user_id: null
    };
    var action = arguments[1];


    switch (action.type) {
        case "GET_NOTIFICATIONS":
            {
                console.log(action.payload);
                return _extends({}, state, {
                    notifications: action.payload,
                    user_id: action.payload.user_id
                });
            }
        case "CREATE_NOTIFICATION":
            {
                return _extends({}, state, {
                    notifications: state.notifications.concat({ setting_id: Date.now(), start_time: null, end_time: null, notification_option_id: null, new: true, user_id: state.user_id })
                });
            }
        case "SAVE_NOTIFICATIONS":
            {}
        case "NOTIFICATION_CHANGE":
            {
                var updatedNotifications = state.notifications.map(function (setting) {
                    if (setting.setting_id == action.payload.setting_id) {
                        setting.notification_option_id = action.payload.notification_option_id;
                        setting.start_time = action.payload.start_time;
                        setting.end_time = action.payload.end_time;
                        return setting;
                    } else {
                        return setting;
                    }
                });
                return _extends({}, state, {
                    notifications: updatedNotifications
                });
            }
    }

    return state;
}
//# sourceMappingURL=settingsReducer.js.map