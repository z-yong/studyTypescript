// 当参数/变量/函数返回值不确定类型时, 可以使用any 但使用any也就违背了ts语言本身的意义 
// 这种时候可以使用泛型

class Person<P> {
  private _value: P;
  constructor(val: P) {
    this._value = val;
    console.log(val);
  }
}
new Person(1)

function fn<T>(arg: T): T {
  return arg;
}
console.log(fn<number>(10));
console.log(fn<string>("1-0"));
console.log(fn("字符串"));

function fn2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg
}
fn2([1, 2, 3])

function fn3<T>(arg: T): T {
  if (typeof arg === "string" || arg instanceof Array) {
    console.log(arg.length);
  } else if (typeof arg === "number") {
    console.log(arg.toString().length);
  }
  return arg
}
fn3([1, 2, 3, 4, 5])

let func: <T>(arg: T) => T = fn3;

// 泛型也可以“继承”，但表示的是限制范围
class Animal<T extends Date>{
  private _value: T;
  constructor(val: T) {
    this._value = val;
    console.log(val);
  }
}
let A1 = new Animal(new Date())

class MyDate extends Date { }
let A2 = new Animal(new MyDate())
