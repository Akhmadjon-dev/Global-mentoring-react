"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Button(_a) {
    var handleClick = _a.handleClick, label = _a.label;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { onClick: handleClick }, label)));
}
exports["default"] = Button;
