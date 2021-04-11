"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var recharts_1 = require("recharts");
var title_1 = require("../Title/title");
// Generate Sales Data
var createData = function (time, amount) {
    return { time: time, amount: amount };
};
var data = [
    createData("00:00", 0),
    createData("03:00", 300),
    createData("06:00", 600),
    createData("09:00", 800),
    createData("12:00", 1500),
    createData("15:00", 2000),
    createData("18:00", 2400),
    createData("21:00", 2400),
    createData("24:00", undefined),
];
var Chart = function () {
    var theme = styles_1.useTheme();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(title_1["default"], null, "Today"),
        react_1["default"].createElement(recharts_1.ResponsiveContainer, null,
            react_1["default"].createElement(recharts_1.LineChart, { data: data, margin: {
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24
                } },
                react_1["default"].createElement(recharts_1.XAxis, { dataKey: "time", stroke: theme.palette.text.secondary }),
                react_1["default"].createElement(recharts_1.YAxis, { stroke: theme.palette.text.secondary },
                    react_1["default"].createElement(recharts_1.Label, { angle: 270, position: "left", style: { textAnchor: "middle", fill: theme.palette.text.primary } }, "Sales ($)")),
                react_1["default"].createElement(recharts_1.Line, { type: "monotone", dataKey: "amount", stroke: theme.palette.primary.main, dot: false })))));
};
exports["default"] = Chart;
