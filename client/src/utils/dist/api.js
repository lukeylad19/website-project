"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var apiConfig = {
    withCredentials: false,
    timeout: 30000,
    baseURL: "http://localhost:8080",
    headers: {
        "Access-Control-Allow-Origin": "*",
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }
};
var api = axios_1["default"].create(apiConfig);
exports["default"] = api;
