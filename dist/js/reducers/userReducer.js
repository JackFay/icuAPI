"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        user: {
            id: null,
            name: null,
            age: null
        },
        fetching: false,
        fetched: false,
        error: null,
        loggedIn: false,
        userId: null,
        images: [],
        notifications: []
    };
    var action = arguments[1];


    switch (action.type) {
        case "INIT":
            {
                //console.log(JSON.parse(localStorage.getItem('user')))
                return JSON.parse(localStorage.getItem('user'));
            }
        case "FETCH_USER":
            {
                return _extends({}, state, { fetching: true });
            }
        case "FETCH_USER_REJECTED":
            {
                return _extends({}, state, { fetching: false, error: action.payload });
            }
        case "FETCH_USER_FULFILLED":
            {
                return _extends({}, state, {
                    fetching: false,
                    fetched: true,
                    user: action.payload[0]
                });
            }
        case "LOGIN_SUCCESS":
            {
                if (typeof Storage !== "undefined") {
                    localStorage.setItem('user', JSON.stringify(_extends({}, state, {
                        loggedIn: true,
                        userId: action.payload.user_id
                    })));
                }
                return _extends({}, state, {
                    loggedIn: true,
                    userId: action.payload.user_id
                });
            }
        case "LOGOUT":
            {
                if (typeof Storage !== "undefined") {
                    localStorage.setItem('user', JSON.stringify(_extends({}, state, {
                        user: {
                            id: null,
                            name: null,
                            age: null
                        },
                        fetching: false,
                        fetched: false,
                        error: null,
                        loggedIn: false,
                        userId: null,
                        images: [],
                        notifications: []
                    })));
                }
                return _extends({}, state, {
                    user: {
                        id: null,
                        name: null,
                        age: null
                    },
                    fetching: false,
                    fetched: false,
                    error: null,
                    loggedIn: false,
                    userId: null,
                    images: [],
                    notifications: []
                });
            }
        case "GET_IMAGES":
            {
                return _extends({}, state, {
                    images: action.payload
                });
            }
    }

    return state;
}
//# sourceMappingURL=userReducer.js.map