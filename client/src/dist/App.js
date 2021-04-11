"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var mainPage_1 = require("./components/mainPage/mainPage");
var App = function () {
    var state = react_redux_1.useSelector(function (state) { return state; });
    return react_1["default"].createElement(mainPage_1["default"], null);
};
exports["default"] = App;
