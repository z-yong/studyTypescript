// 函数声明
function sum(x, y) {
    return x + y;
}
// 函数表达式
//在typescript类型定义中, =>用来表示函数的定义, 左边是输入类型,需要用括号括起来,右边表示输出类型
var mySum = function (x, y) {
    return x + y;
};
var myIsSame = function (source1, source2) {
    return source1 == source2;
};
// 可选参数
// 需要注意的是: 可选参数后面不允许再出现必选参数, 也就是说可选参数必须在所有的必选参数后面
function printParam(str, num) {
    console.log(str, num);
}
printParam('1', 1);
// 参数默认值 TypeScript 会将添加了默认值的参数识别为可选参数
// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName(age, name) {
    console.log('age',age === void 0);
    if (age === void 0) { age = 18; }
    return [name, age];
}
// age如果没有传值, 则会编译与void 0比较
// void 0 表示undefined void后跟任何值都会返回undefined
// 为什么是void 0而不是undefined?
// 因为undefined在局部作用域中可以被重写 而void不会, 而且void 0代替undefined可以节省字节
console.log(buildName(undefined, 'zy'));
