interface Person {
  readonly id: number; //只读属性
  name: string;
  age?: number; //可选属性
  [propName: string]: string | number //可以拥有任意属性
}

let p: Person = {
  id: 1,
  name: 'zy',
  age: 18,
  sex: '男'
}

// p.id = 2; //报错 Cannot assign to 'id' because it is a constant or a read-only property.