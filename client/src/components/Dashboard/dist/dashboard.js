"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var clsx_1 = require("clsx");
var styles_1 = require("@material-ui/core/styles");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var Drawer_1 = require("@material-ui/core/Drawer");
var Box_1 = require("@material-ui/core/Box");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var List_1 = require("@material-ui/core/List");
var Typography_1 = require("@material-ui/core/Typography");
var Divider_1 = require("@material-ui/core/Divider");
var IconButton_1 = require("@material-ui/core/IconButton");
var Badge_1 = require("@material-ui/core/Badge");
var Container_1 = require("@material-ui/core/Container");
var Grid_1 = require("@material-ui/core/Grid");
var Paper_1 = require("@material-ui/core/Paper");
var Link_1 = require("@material-ui/core/Link");
var Menu_1 = require("@material-ui/icons/Menu");
var ChevronLeft_1 = require("@material-ui/icons/ChevronLeft");
var Notifications_1 = require("@material-ui/icons/Notifications");
var listItems_1 = require("../ListItems/listItems");
var chart_1 = require("../Chart/chart");
var deposits_1 = require("../Deposits/deposits");
var orders_1 = require("../Orders/orders");
function Copyright() {
    return (react_1["default"].createElement(Typography_1["default"], { variant: "body2", color: "textSecondary", align: "center" },
        "Copyright © ",
        react_1["default"].createElement(Link_1["default"], { color: "inherit", href: "https://material-ui.com/" }, "Your Website"),
        " ",
        new Date().getFullYear(),
        "."));
}
var drawerWidth = 240;
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            display: "flex"
        },
        toolbar: {
            paddingRight: 24
        },
        toolbarIcon: __assign({ display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 8px" }, theme.mixins.toolbar),
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: "calc(100% - " + drawerWidth + "px)",
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        menuButton: {
            marginRight: 36
        },
        menuButtonHidden: {
            display: "none"
        },
        title: {
            flexGrow: 1
        },
        drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        drawerPaperClose: (_a = {
                overflowX: "hidden",
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                width: theme.spacing(7)
            },
            _a[theme.breakpoints.up("sm")] = {
                width: theme.spacing(9)
            },
            _a),
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        },
        paper: {
            padding: theme.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column"
        },
        fixedHeight: {
            height: 240
        }
    });
});
var Dashboard = function () {
    var classes = useStyles();
    var _a = react_1["default"].useState(true), open = _a[0], setOpen = _a[1];
    var handleDrawerOpen = function () {
        setOpen(true);
    };
    var handleDrawerClose = function () {
        setOpen(false);
    };
    var fixedHeightPaper = clsx_1["default"](classes.paper, classes.fixedHeight);
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(AppBar_1["default"], { position: "absolute", className: clsx_1["default"](classes.appBar, open && classes.appBarShift) },
            react_1["default"].createElement(Toolbar_1["default"], { className: classes.toolbar },
                react_1["default"].createElement(IconButton_1["default"], { edge: "start", color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, className: clsx_1["default"](classes.menuButton, open && classes.menuButtonHidden) },
                    react_1["default"].createElement(Menu_1["default"], null)),
                react_1["default"].createElement(Typography_1["default"], { component: "h1", variant: "h6", color: "inherit", noWrap: true, className: classes.title }, "Dashboard"),
                react_1["default"].createElement(IconButton_1["default"], { color: "inherit" },
                    react_1["default"].createElement(Badge_1["default"], { badgeContent: 4, color: "secondary" },
                        react_1["default"].createElement(Notifications_1["default"], null))))),
        react_1["default"].createElement(Drawer_1["default"], { variant: "permanent", classes: {
                paper: clsx_1["default"](classes.drawerPaper, !open && classes.drawerPaperClose)
            }, open: open },
            react_1["default"].createElement("div", { className: classes.toolbarIcon },
                react_1["default"].createElement(IconButton_1["default"], { onClick: handleDrawerClose },
                    react_1["default"].createElement(ChevronLeft_1["default"], null))),
            react_1["default"].createElement(Divider_1["default"], null),
            react_1["default"].createElement(List_1["default"], null, listItems_1.mainListItems),
            react_1["default"].createElement(Divider_1["default"], null),
            react_1["default"].createElement(List_1["default"], null, listItems_1.secondaryListItems)),
        react_1["default"].createElement("main", { className: classes.content },
            react_1["default"].createElement("div", { className: classes.appBarSpacer }),
            react_1["default"].createElement(Container_1["default"], { maxWidth: "lg", className: classes.container },
                react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3 },
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, md: 8, lg: 9 },
                        react_1["default"].createElement(Paper_1["default"], { className: fixedHeightPaper },
                            react_1["default"].createElement(chart_1["default"], null))),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, md: 4, lg: 3 },
                        react_1["default"].createElement(Paper_1["default"], { className: fixedHeightPaper },
                            react_1["default"].createElement(deposits_1["default"], null))),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                        react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
                            react_1["default"].createElement(orders_1["default"], null)))),
                react_1["default"].createElement(Box_1["default"], { pt: 4 },
                    react_1["default"].createElement(Copyright, null))))));
};
exports["default"] = Dashboard;
