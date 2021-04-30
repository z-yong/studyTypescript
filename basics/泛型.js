// 当参数/变量/函数返回值不确定类型时, 可以使用any 但使用any也就违背了ts语言本身的意义 
// 这种时候可以使用泛型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(val) {
        this._value = val;
        console.log(val);
    }
    return Person;
}());
new Person(1);
function fn(arg) {
    return arg;
}
console.log(fn(10));
console.log(fn("1-0"));
console.log(fn("字符串"));
function fn2(arg) {
    console.log(arg.length);
    return arg;
}
fn2([1, 2, 3]);
function fn3(arg) {
    if (typeof arg === "string" || arg instanceof Array) {
        console.log(arg.length);
    }
    else if (typeof arg === "number") {
        console.log(arg.toString().length);
    }
    return arg;
}
fn3([1, 2, 3, 4, 5]);
var func = fn3;
// 泛型也可以“继承”，但表示的是限制范围
var Animal = /** @class */ (function () {
    function Animal(val) {
        this._value = val;
        console.log(val);
    }
    return Animal;
}());
var A1 = new Animal(new Date());
var MyDate = /** @class */ (function (_super) {
    __extends(MyDate, _super);
    function MyDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyDate;
}(Date));
var A2 = new Animal(new MyDate());
