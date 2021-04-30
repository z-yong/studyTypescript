/**
 * 什么情况下可以类型断言?
 *  要使得 A类 能够被断言为 B类，只需要 A 兼容 B 或 B 兼容 A 即可
 *  联合类型可以被断言为其中一个类型
 *  父类可以断言为子类 子类也可以断言为父类
 *  any类型可以断言为任意类型 任意类型都可以断言为any类型
 */
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
// 当我们想要调用swim方法且不确定类型时, 将类型断言成Fish 那么就不会报错
// 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误
function swim(animal) {
    // return animal.swim() // error TS2339: Property 'swim' does not exist on type 'Cat | Fish'
    return animal.swim();
}
var Hanly = {
    name: 'Tom',
    swim: function () {
        console.log('那只Hanly鱼在游泳');
    }
};
swim(Hanly);
var Tom = {
    name: 'Tom',
    run: function () {
        console.log('那只Tom猫在奔跑');
    }
};
// swim(Tom);// 这里编译不会报错 运行会报错
// 原因: 此时的swim返回值已被断言成Fish类型, Typescript编译器信任了这个断言,所以调用swim没有报错
// 但这里传的参数是Cat类型, 而Cat类中没有swim方法 故而运行报错
// 将父类断言为更加具体的子类
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 1;
        return _this;
    }
    return ApiError;
}(Error));
var OtherError = /** @class */ (function (_super) {
    __extends(OtherError, _super);
    function OtherError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 2;
        return _this;
    }
    return OtherError;
}(Error));
function isApi(error) {
    // error.code = 2; //由于父类 Error 中没有 code 属性，故直接获取 error.code 会报错
    if (typeof error.code === 'number') {
        return true;
    }
    else {
        return false;
    }
}
// 子类断言为父类
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.eat = function () {
        console.log('在吃饭');
    };
    return Teacher;
}(Person));
var tt = new Teacher();
tt.name = 'zy';
// 当我们引用一个在此类型上不存在的属性或方法时，就会报错
function fn(val) {
    if (val.length) {
        return val.length;
    }
    else {
        return val.toString().length;
    }
}
console.log(fn(1));
console.log(fn("1"));
// 下面写法与Book继承与Paper是等价的
// interface Book{
//   color:string;
//   see():void;
// }
var xiyouji = {
    color: 'white',
    // see():void{
    //   console.log('我是吴承恩所写')
    // }
    see: function () { return console.log('我是吴承恩所写'); }
};
var book = xiyouji; //子类实例指向父类对象 即Paper兼容Book
// 双重断言 --> 
//  即打破 (要使得 A类 能够被断言为 B类，只需要 A 兼容 B 或 B 兼容 A 即可) 的规则, 
//  使任何类型可被断言为任何另一个类型
// 若使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。
// 除非迫不得已，千万别用双重断言
var A = /** @class */ (function () {
    function A() {
        this.name = 'zy';
    }
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.age = 18;
    }
    return B;
}());
function assertAny(a) {
    var age = a.age;
    console.log(age);
}
assertAny({ name: 'z-yong' });
function getCacheData(key) {
    return window.cache[key];
}
var tom = getCacheData('tom');
tom.run();
