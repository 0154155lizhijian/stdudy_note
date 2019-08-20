## - let const  
let 不允许在相同作用域内，重复声明同一个变量,不能重新声明参数
```
function func(){
    let a =10;
    var a =1;
    console.log(a)
}
func() //SyntaxError: Identifier 'a' has already been declared  

function func(arg) {
  let arg;
}
func() // 报错
```
const 声明了一个只读的常量，一旦声明，常量的值就不能发生改变
- const 一旦声明必须立刻初始化,同时也是作用于块级


## - 变量解构赋值
```
let a=1;
let b=2;
let c=3;  //效果等同于
let [a,b,c] =[1,2,3]
```

- 数值的结构是按次序排列的,对象的属性没有次序，因此变量必须与属性同名，才可以取到值
```
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined
```

- 对象的解构赋值可以取到继承的属性。
```
    const obj1 = {};
    const obj2 = { foo: 'bar' };
    Object.setPrototypeOf(obj1, obj2);

    const { foo } = obj1;
    foo // "bar"
```
上面代码中，对象obj1的原型对象是obj2。foo属性不是obj1自身的属性，而是继承自obj2的属性，解构赋值可以取到这个属性

- 利用结构可以实现 `字符串转化为数值`
```
const [...abc] = "hello"
console.log(abc)
//[ 'h', 'e', 'l', 'l', 'o' ]
```

- 用途
1. 变换变量的值
```
let x = 1;
let y = 2;

[x, y] = [y, x];
```
2. 从函数返回多个值
```
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```
3. `提取JSON数据`
```
let Student = [{
    age: 22,
    sex: "男",
    name: "xiaoming"
  },{
    age:20,
    sex:"女",
    name:"xiaohong"
  }];
  
Student.map((item)=>{
    let {age,sex,name} = item
    console.log(age+sex+name)
}) //22男xiaoming
20女xiaohong
```

4. Map遍历时可以只获取key或者键值
```
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
```

5. 模块输入
```
import {Button,Input} from 'antd'
```

## - 字符串拓展
-  使用for-of字符串遍历
```
const string = "gao ming"
for(let s of string){
    console.log(s)
}  // g a o  m i n g
```
- ${param} 代替  + param +

## - 字符串方法
- includes()：返回布尔值，表示是否找到了参数字符串。
- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
```
let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

- repeat(n)  n为重复的次数，当它为小数时，会只读取整数部分
- padStart(),padEnd() 补全函数 ,Start为字符串的末端，反之End为字符串的头端
```
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```
- trimStart(),trimEnd(),trim() ;分别是消除头部空格，消除尾部空格，trim()消除前后空格 
```
const s = '  abc  ';
s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"
```

- Symbol  它表示独一无二的值 (这个先不了解)
```
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```
```
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

## - Set 它类似于数组，但是成员的值都是唯一的，没有重复的值
1. Set本身是一个构造函数，用来生成 Set 数据结构。
```
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```
2. 利用不会重复的原理，可以做到**数组去重**
```
// 去除数组的重复成员
[...new Set(array)]
```
同时将字符串set也可以做到字符去重
```
[...new Set('ababbc')].join('')
// "abc"
```

3. set在处理对象的时候，两个对象总是不相等的
```
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```

4. 数组去重方法2
```
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
```
5. 遍历Set结构有4种方法 key() ,value(),entries() 但是Set结构没有键名，因此key对应value的值相等  或者使用`forEach`方法

6. Set结构也可以用 ... 展开运算符进行展开

## - Map

