"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Link_1 = require("@material-ui/core/Link");
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = require("@material-ui/core/Typography");
var preventDefault = function (event) {
    event.preventDefault();
};
var useStyles = styles_1.makeStyles({
    depositContext: {
        flex: 1
    }
});
var Deposits = function () {
    var classes = useStyles();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("title", null, "Recent Deposits"),
        react_1["default"].createElement(Typography_1["default"], { component: "p", variant: "h4" }, "$3,024.00"),
        react_1["default"].createElement(Typography_1["default"], { color: "textSecondary", className: classes.depositContext }, "on 15 March, 2019"),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(Link_1["default"], { color: "primary", href: "#", onClick: preventDefault }, "View balance"))));
};
exports["default"] = Deposits;
