"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var Typography_1 = require("@material-ui/core/Typography");
var Title = function (props) {
    return (react_1["default"].createElement(Typography_1["default"], { component: "h2", variant: "h6", color: "primary", gutterBottom: true }, props.children));
};
Title.propTypes = {
    children: prop_types_1["default"].node
};
exports["default"] = Title;
