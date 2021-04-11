"use strict";
exports.__esModule = true;
exports.secondaryListItems = exports.mainListItems = void 0;
var react_1 = require("react");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var ListSubheader_1 = require("@material-ui/core/ListSubheader");
var Dashboard_1 = require("@material-ui/icons/Dashboard");
var ShoppingCart_1 = require("@material-ui/icons/ShoppingCart");
var People_1 = require("@material-ui/icons/People");
var BarChart_1 = require("@material-ui/icons/BarChart");
var Layers_1 = require("@material-ui/icons/Layers");
var Assignment_1 = require("@material-ui/icons/Assignment");
exports.mainListItems = (react_1["default"].createElement("div", null,
    react_1["default"].createElement(ListItem_1["default"], { button: true },
        react_1["default"].createElement(ListItemIcon_1["default"], null,
            react_1["default"].createElement(Dashboard_1["default"], null)),
        react_1["default"].createElement(ListItemText_1["default"], { primary: "Dashboard" })),
    react_1["default"].createElement(ListItem_1["default"], { button: true },
        react_1["default"].createElement(ListItemIcon_1["default"], null,
            react_1["default"].createElement(ShoppingCart_1["default"], null)),
        react_1["default"].createElement(ListItemText_1["default"], { primary: "Orders" })),
    react_1["default"].createElement(ListItem_1["default"], { button: true },
        react_1["default"].createElement(ListItemIcon_1["default"], null,
            react_1["default"].createElement(People_1["default"], null)),
        react_1["default"].createElement(ListItemText_1["default"], { primary: "Customers" })),
    react_1["default"].createElement(ListItem_1["default"], { button: true },
        react_1["default"].createElement(ListItemIcon_1["default"], null,
            react_1["default"].createElement(BarChart_1["default"], null)),
        react_1["default"].createElement(ListItemText_1["default"], { primary: "Reports" })),
    react_1["default"].createElement(ListItem_1["default"], { button: true },
        react_1["default"].createElement(ListItemIcon_1["default"], null,
            react_1["default"].createElement(Layers_1["default"], null)),
        react_1["default"].createElement(ListItemText_1["default"], { primary: "Integrations" }))));
exports.secondaryListItems = (react_1["default"].createElement("div", null,
    react_1["default"].createElement(ListSubheader_1["default"], { inset: true }, "Saved reports"),
    react_1["default"].createElement(ListItem_1["default"], { button: true },
        react_1["default"].createElement(ListItemIcon_1["default"], null,
            react_1["default"].createElement(Assignment_1["default"], null)),
        react_1["default"].createElement(ListItemText_1["default"], { primary: "Current month" })),
    react_1["default"].createElement(ListItem_1["default"], { button: true },
        react_1["default"].createElement(ListItemIcon_1["default"], null,
            react_1["default"].createElement(Assignment_1["default"], null)),
        react_1["default"].createElement(ListItemText_1["default"], { primary: "Last quarter" })),
    react_1["default"].createElement(ListItem_1["default"], { button: true },
        react_1["default"].createElement(ListItemIcon_1["default"], null,
            react_1["default"].createElement(Assignment_1["default"], null)),
        react_1["default"].createElement(ListItemText_1["default"], { primary: "Year-end sale" }))));
