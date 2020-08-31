/**
 * 什么情况下可以类型断言?
 *  要使得 A类 能够被断言为 B类，只需要 A 兼容 B 或 B 兼容 A 即可
 *  联合类型可以被断言为其中一个类型
 *  父类可以断言为子类 子类也可以断言为父类
 *  any类型可以断言为任意类型 任意类型都可以断言为any类型
 */


interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}
// 当我们想要调用swim方法且不确定类型时, 将类型断言成Fish 那么就不会报错
// 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误
function swim(animal: Cat|Fish){
  // return animal.swim() //error TS2339: Property 'swim' does not exist on type 'Cat | Fish'
  return (animal as Fish).swim()
}
const Hanly: Fish = {
  name: 'Tom',
  swim(): void{
    console.log('那只Hanly鱼在游泳')
  }
}
swim(Hanly)

const Tom: Cat = {
  name: 'Tom',
  run(): void{
    console.log('那只Tom猫在奔跑')
  }
}
// swim(Tom);// 这里编译不会报错 运行会报错
// 原因: 此时的swim返回值已被断言成Fish类型, Typescript编译器信任了这个断言,所以调用swim没有报错
// 但这里传的参数是Cat类型, 而Cat类中没有swim方法 故而运行报错



// 将父类断言为更加具体的子类
class ApiError extends Error{
  code:number = 1;
}
class OtherError extends Error{
  statusCode:number = 2;
}

function isApi(error: Error): boolean{
  // error.code = 2; //由于父类 Error 中没有 code 属性，故直接获取 error.code 会报错
  if(typeof (error as ApiError).code === 'number'){
    return true
  }else{
    return false
  }
}

// 子类断言为父类
class Person {
  name:string;
  age:number;
}
class Teacher extends Person {
  eat():void{
    console.log('在吃饭')
  }
}
const tt = new Teacher();
(tt as Person).name = 'zy';



// 当我们引用一个在此类型上不存在的属性或方法时，就会报错
const foo:number = 1;
// foo.length; // 编译报错

// 因为window下没有foo属性 所以直接给window加foo属性会编译出错 
// window.foo = 1;
// 需要使用类型断言 将window临时断言成any类型
// (window as any).foo = 1

// TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系
interface Paper{
  color:string;
}
interface Book extends Paper{
  see():void;
}
// 下面写法与Book继承与Paper是等价的
// interface Book{
//   color:string;
//   see():void;
// }
let xiyouji:Book = {
  color: 'white',
  // see():void{
  //   console.log('我是吴承恩所写')
  // }
  see:() => console.log('我是吴承恩所写')
}
let book:Paper = xiyouji; //子类实例指向父类对象 即Paper兼容Book



// 双重断言 --> 
//  即打破 (要使得 A类 能够被断言为 B类，只需要 A 兼容 B 或 B 兼容 A 即可) 的规则, 
//  使任何类型可被断言为任何另一个类型
// 若使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。
// 除非迫不得已，千万别用双重断言
class A {
  name:string = 'zy';
}
class B {
  age:number = 18;
}
function assertAny(a:A):void{
  const age = (a as any as B).age;
  console.log(age)
}
assertAny({name: 'z-yong'})



function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Rabbit {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Rabbit;
tom.run();
