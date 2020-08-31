declare const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
  public getName(){
    return this.name
  }
}

let a = new Animal('Jack');
// console.log(a.name); // 报错
// a.name = 'Tom';// 报错
console.log(a.getName())

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(super.getName());
  }
}
new Cat('123')