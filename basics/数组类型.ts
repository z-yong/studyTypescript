// 规定类型的数组中不允许出现其他类型
let nums: number[] = [1,2,3,4,5];
let strings: string[] = ['1','2','3'];
let arr: any[] = [1,2,3,'1','a', {a: 1, b: 2}];

//数组泛型
let fibonacci: Array<number> = [1, 1, 2, 3, 5];

//类数组
function sum() {
  let args: {
      [index: number]: any; //any表示此数组可包含任意类型
      length: number;
      callee: Function;
  } = arguments;
}