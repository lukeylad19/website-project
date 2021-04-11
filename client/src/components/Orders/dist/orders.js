"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Link_1 = require("@material-ui/core/Link");
var styles_1 = require("@material-ui/core/styles");
var Table_1 = require("@material-ui/core/Table");
var TableBody_1 = require("@material-ui/core/TableBody");
var TableCell_1 = require("@material-ui/core/TableCell");
var TableHead_1 = require("@material-ui/core/TableHead");
var TableRow_1 = require("@material-ui/core/TableRow");
// Generate Order Data
var createData = function (id, date, name, shipTo, paymentMethod, amount) {
    return { id: id, date: date, name: name, shipTo: shipTo, paymentMethod: paymentMethod, amount: amount };
};
var rows = [
    createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS", "VISA ⠀•••• 3719", 312.44),
    createData(1, "16 Mar, 2019", "Paul McCartney", "London, UK", "VISA ⠀•••• 2574", 866.99),
    createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "MC ⠀•••• 1253", 100.81),
    createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN", "AMEX ⠀•••• 2000", 654.39),
    createData(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ", "VISA ⠀•••• 5919", 212.79),
];
var preventDefault = function (event) {
    event.preventDefault();
};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    seeMore: {
        marginTop: theme.spacing(3)
    }
}); });
var Orders = function () {
    var classes = useStyles();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("title", null, "Recent Orders"),
        react_1["default"].createElement(Table_1["default"], { size: "small" },
            react_1["default"].createElement(TableHead_1["default"], null,
                react_1["default"].createElement(TableRow_1["default"], null,
                    react_1["default"].createElement(TableCell_1["default"], null, "Date"),
                    react_1["default"].createElement(TableCell_1["default"], null, "Name"),
                    react_1["default"].createElement(TableCell_1["default"], null, "Ship To"),
                    react_1["default"].createElement(TableCell_1["default"], null, "Payment Method"),
                    react_1["default"].createElement(TableCell_1["default"], { align: "right" }, "Sale Amount"))),
            react_1["default"].createElement(TableBody_1["default"], null, rows.map(function (row) { return (react_1["default"].createElement(TableRow_1["default"], { key: row.id },
                react_1["default"].createElement(TableCell_1["default"], null, row.date),
                react_1["default"].createElement(TableCell_1["default"], null, row.name),
                react_1["default"].createElement(TableCell_1["default"], null, row.shipTo),
                react_1["default"].createElement(TableCell_1["default"], null, row.paymentMethod),
                react_1["default"].createElement(TableCell_1["default"], { align: "right" }, row.amount))); }))),
        react_1["default"].createElement("div", { className: classes.seeMore },
            react_1["default"].createElement(Link_1["default"], { color: "primary", href: "#", onClick: preventDefault }, "See more orders"))));
};
exports["default"] = Orders;
