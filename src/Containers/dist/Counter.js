"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Counter = void 0;
var react_1 = require("react");
var Button_1 = require("../Components/Button");
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            counter: 0
        };
        _this.decrement = function () {
            _this.setState({ counter: _this.state.counter - 1 });
        };
        _this.increment = function () {
            _this.setState({ counter: _this.state.counter + 1 });
        };
        return _this;
    }
    Counter.prototype.render = function () {
        var counter = this.state.counter;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Button_1["default"], { label: "DECREMENT", handleClick: this.decrement }),
            react_1["default"].createElement("p", null,
                "Counter: ",
                counter,
                " "),
            react_1["default"].createElement(Button_1["default"], { label: "INCREMENT", handleClick: this.increment })));
    };
    return Counter;
}(react_1.Component));
exports.Counter = Counter;
