"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require("react-router");

var _reactRedux = require("react-redux");

var _userActions = require("./actions/userActions");

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

var _Dashboard = require("./pages/Dashboard");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Home = require("./pages/Home");

var _Home2 = _interopRequireDefault(_Home);

var _Images = require("./pages/Images");

var _Images2 = _interopRequireDefault(_Images);

var _Layout = require("./pages/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _LogIn = require("./pages/LogIn");

var _LogIn2 = _interopRequireDefault(_LogIn);

var _Settings = require("./pages/Settings");

var _Settings2 = _interopRequireDefault(_Settings);

var _SignUp = require("./pages/SignUp");

var _SignUp2 = _interopRequireDefault(_SignUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_store2.default.dispatch({ type: "INIT" });

/* Pages */


if (typeof window !== 'undefined') {
  var app = document.getElementById('app');

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      _reactRouter.Router,
      { history: _reactRouter.hashHistory },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: "/", component: _Layout2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "/signup", name: "signup", component: _SignUp2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "/dashboard", name: "dashboard", component: _LogIn2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "/settings", name: "settings", component: _Settings2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "/images", name: "images", component: _Images2.default })
      )
    )
  ), app);
}

//      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
//      <Route path="settings" name="settings" component={Settings}></Route>
//# sourceMappingURL=client.js.map