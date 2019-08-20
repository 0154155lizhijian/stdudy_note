# generator
- 函数声明
```
function* foo(x=1,y=2){
    yield x;
    yield y;
    return 0
}
```

- yield是暂停标志，只有调用next方法才会遍历下一个内部状态
- next如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
- 若没有return ，则返回值为undefined

- Symbol.iterator和generater symbol.iterator等于该对象的遍历生成函数，返回对象的遍历器对象，使得对象具有Iterator接口
```
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```

- yield本身没有返回值，默认值返回undefined,但是可以在next中，传一个参数来作为yield的返回值
```
function* f() {
    for(var i = 0; true; i++) {
      var reset = yield i;  //g.next()
      console.log(reset)  ;  //g.next()  undefined true undefined 等于true是因为传入了一个true
      if(reset) { i = -1; };
    }
  }
  
  var g = f();
  console.log(g.next(),g.next(),g.next(true),g.next())
```

  - 在传递参数时，next(params)中传递的参数params即代表上一次yeild的返回值，**第一次next()不用传递参数，即使传递了也会自动忽略**

  - for of 可以自动遍历Generator函数运行时生成的Iterator对象，且此时不再需要调用next方法。
  - return 后面的yeild不会在执行,利用解构或者遍历的方法只会取到return 之前的数据,return的返回值是作为遍历器对象的结果
  ```
  function* numbers () {
    yield 1
    yield 2
    return 3
    yield 4  //无效数据，不会再执行
  }
    [...numbers()] // [1, 2]
    Array.from(numbers()) // [1, 2]
    let [x, y] = numbers();  //x=1,y=1
    for (let n of numbers()) {
    console.log(n)    //1, 2
    }
  ```

  - yeild *表达式，作为解决办法，在一个generator函数执行另一个generator函数
  ```
  function* foo() {
    yield 'a';
    yield 'b';
    }
  function* bar() {
    yield 'x';
    yield* foo();
    yield 'y';
    }

    // 等同于
    function* bar() {
    yield 'x';
    yield 'a';
    yield 'b';
    yield 'y';
    }

    console.log(b.next(),b.next(),b.next())   // value: 'x', done: false } { value: 'a', done: false } { value: 'b', done: false }
  ```
  - yield*后面的 Generator 函数（没有return语句时），等同于在 Generator 函数内部，部署一个for...of循环。
```
  function* concat(iter1, iter2) {
  yield* iter1;
  yield* iter2;
}

// 等同于

function* concat(iter1, iter2) {
  for (var value of iter1) {
    yield value;
  }
  for (var value of iter2) {
    yield value;
  }
}
```


## example
- 读取两个文件B.txt和test.txt  b.txt文件读取时间明显大于test
```
//若是一般读取
fs = require('fs')

fs.readFile('B.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });

fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });     //test的内容要快于B的内容先出现
 //方法一 回调函数
 fs.readFile('B.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
    fs.readFile('test.txt', 'utf-8', function (err, data) {
        if (err) throw err;
        console.log(data);
      });
  });

  //方法二 promise
const fileB=(resolve,reject) =>{
    fs.readFile('B.txt', 'utf-8', function (err, data) {
        if (err) throw err;
        resolve(data)
      });
} 
const fileTest=(resolve,reject)=>{
    fs.readFile('test.txt', 'utf-8', function (err, data) {
        if (err) throw err;
        resolve(data)
        })
} ;

new Promise(fileB)
    .then((data)=>{
        console.log(data);
        return new Promise(fileTest)
    })
    .then((data)=>{
        console.log(data)
    })
    .finally(()=>{
        console.log('任务完成')
    })
  //方法三 generator
  const fs = require('fs');

    const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName,'utf-8',function(error, data) {
        if (error) return reject(error);
        resolve(data);
        });
    });
    };

    function* asyncFile() {
    const f1 = yield readFile('B.txt');
    const f2 = yield readFile('test.txt');

    };
    const gen = asyncFile();

    gen.next().value.then(data=>{
        console.log(data)
        return gen.next().value
    }).then((data)=>{
        console.log(data)
    })
    //方法四 async await
  
 	const fs = require('fs');

	const readFile = function (fileName) {
	  return new Promise(function (resolve, reject) {
	    fs.readFile(fileName,'utf-8',function(error, data) {
	      if (error) return reject(error);
	      resolve(data);
	    });
	  });
	};
	
	const fileAsync = async asyncFile() {
	  const f1 = await readFile('B.txt');
	  const f2 = await readFile('test.txt');
	  console.log(f1,f2)
	};
	fileAsync()
	
```

## Class
- 生成类的实例的写法,**必须先new这个类** 才能调用class
- 采用 Class 表达式，可以写出立即执行的 Class。
```
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName(); // "张三"
```

- 不存在提升   //啥叫变量提升，通俗的说就是你定义变量的时候，就算你是后面定义的，也会提升到头部定义，可以做到未定义先使用，因此也会产生一些问题

- 实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。也就是说
```
class Point{
    constructor(){
        this.name = 'point'
    }
}
console.log(Point.name)
//等同于
class Obj {  
    x=5;
    y=6;
    constructor() {
      console.log(this.x)
    }
  }
  
  const myObj = new Obj();
console.log(myObj)
```


- class继承的时候必须先super才可以使用this


