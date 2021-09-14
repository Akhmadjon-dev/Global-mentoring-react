"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Counter_1 = require("./Containers/Counter");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("h1", null, "Welcome global mentoring react"),
        react_1["default"].createElement("p", null, "Hello world!"),
        react_1["default"].createElement(Counter_1.Counter, null)));
}
exports["default"] = App;
