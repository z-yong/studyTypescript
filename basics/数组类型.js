// 规定类型的数组中不允许出现其他类型
var nums = [1, 2, 3, 4, 5];
var strings = ['1', '2', '3'];
//数组泛型
var fibonacci = [1, 1, 2, 3, 5];
//类数组
function sum() {
    var args = arguments;
}
console.log(sum.arguments);
