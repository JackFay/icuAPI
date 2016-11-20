"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_state = get_state;
exports.fetchUser = fetchUser;
exports.user_login = user_login;
exports.logout = logout;
exports.get_images = get_images;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get_state() {
    return function (dispatch) {
        dispatch({ type: "INIT" });
    };
}

function fetchUser() {
    return function (dispatch) {
        _axios2.default.get("http://rest.learncode.academy/api/wstern/users").then(function (response) {
            dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data });
        }).catch(function (error) {
            dispatch({ type: "FETCH_USER_REJECTED", payload: error });
        });
    };
}

function user_login(userData) {
    return function (dispatch) {
        _axios2.default.post('http://localhost:8000/api/login', userData).then(function (response) {
            if (response.data != "failure") {
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            } else {
                dispatch({ type: "LOGIN_FAILURE", payload: false });
            }
        }).catch(function (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error });
        });
    };
}

function logout() {
    return function (dispatch) {
        dispatch({ type: "LOGOUT" });
    };
}

function get_images(userId) {
    return function (dispatch) {
        var req = "http://localhost:8000/api/image/" + userId;
        _axios2.default.get(req).then(function (response) {
            dispatch({ type: "GET_IMAGES", payload: response.data });
        }).catch(function (error) {
            console.log(error);
        });
    };
}
//# sourceMappingURL=userActions.js.map