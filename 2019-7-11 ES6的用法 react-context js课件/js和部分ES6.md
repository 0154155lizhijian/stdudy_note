- 讲述BOM和DOM关系
![DOM和BOM](https://upload-images.jianshu.io/upload_images/9240001-25b5021d50825119.jpg?imageMogr2/auto-orient/''BOM和DOM'')

- 数据类型
1. 六种基本数据类型
  - Undefined
  - Null
  - Boolean
  - Number
  - String
  - Symbol
2. 一种复杂数据类型
  - Object 

- 常见的HTML事件  

事件 | 描述
:-|:-
onchange| HTML元素已被改变 |
onclick	| 用户点击了 HTML 元素 |
onmouseover | 用户把鼠标移动到 HTML元素上 |
onmouseout | 用户把鼠标移开 HTML 元素 |
onkeydown | 用户按下键盘按键 |
onload | 浏览器已经完成页面加载 |

- 常用函数
  - constructor  构造函数
```
<script type="text/javascript">
  function employee(name,job,born){
    this.name=name;
    this.job=job;
    this.born=born;
  }

var bill=new employee("Bill Gates","Engineer",1985);
document.write(bill.constructor);
</script>
```
```
  function employee(name, job, born)
  {this.name = name; this.job = job; this.born = born;}
```
  - hasOwnProperty 判断属性是否存在
```
Student={
    name:"gaoming",
    age:22,
    sex:"男"
}

console.log(Student.hasOwnProperty('sex')) //true
```
  - propertyIsEnumerable()   
  可for in 即可枚举 不同在于for in 可以枚举原型链上的属性 而他不能
```
function Person(){
    this.name="我是实例属性";
    this.age=19;
  }
  var p=new Person();
  console.log(p.propertyIsEnumerable("name")); //true
  
  Person.prototype.prop="我是原型属性";//添加一个原型属性
  console.log(p.propertyIsEnumerable("prop"));//false prop是继承自原型上的属性，所以返回的是false
  
  for(var k in p){
    console.log(k+","+p[k]);//name,我是实例属性  age,19  prop,我是原型属性
  }
```

  - isPrototypeof()  用于指示对象是否存在于另一个对象的原型链中
```
  function Site(){
	this.name = "CodePlayer";
	this.url = "https://codeplayer.vip/";

	this.sayHello = function(){
		document.writeln("欢迎来到" + this.name);
	};
}

var s =  new Site();
console.log(Site.prototype.isPrototypeOf(s)) //true
console.log(Site.isPrototypeOf(s)) //false
```
  - toString()
  ```
  var arr=[1,2,3,4];console.log(arr.toString())//1234
  ```
  - toLocalString() 返回指定格式
```
new Date().toLocaleString()
```
  - valueOf()  方法可返回 Boolean 对象的原始值，特定值返回。
  ```
  Integer x =Integer.valueOf(9);
        Double c = Double.valueOf(5);
        Float a = Float.valueOf("80");
  ```

- ## ES6新增的字符串方法
1. `startWith(str, index)`: 判断是否以str为开头,index是开始搜索的位置，默认为0
2. `endWith(str, index)`: 判断结尾是否有str，index为从后往前的坐标
3. `includes(str, index)` index开始是否包含
```
let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```
4. `str.repeat(n)`: 
```
str='string';str.repeat(3)
//"stringstringstring"
```
5. `padStart(length, padStr)`: 用padStr补全到n位字符串,补全开始
6. `padEnd`  补全后面
```
'abc'.padStart(5,1234)
//"12abc"
'abc'.padEnd(5,1234)
//"abc12"
```
7. `for...of遍历字符串`
```
string="abcd";for(let i of string){console.log(i)}
VM14242:1 a
VM14242:1 b
VM14242:1 c
VM14242:1 d
```
- ## 字符串增删操作
2. `substring(start,end)`:区别去slice就是start可以>end,会自动转换
3. `substr(start[,length])`:返回一个从指定位置开始的**指定长度**的子字符串
4. `concat([string1,[string2...]])`:返回字符串值，该值包含了两个或多个提供的字符串的连接  ```string1.cancat(string2,string3,...) ```
5. `split([separator[,limit]])`:字符串分成数组,separator字符串或正则表达式对象,**分割点**,limit该值用来设置返回数组中的元素个数
6. `replace('old','new')`:返回被替换的新的对象

- ## 字符的位置
1. `charCodeAt`:返回指定位置字符的Unicode编码
2. `indexOf(substr[,startIndex])`:startIndex该整数值指出在String对象内开始查找的索引
3. `lastIndexOf(substr[,startIndex])`:从被检查字符串的后面检测substr出现的位置，但是同上都是从左的位置索引
4. `search(reExp)`:返回与正则表达式查找内容匹配的第一个字符串的位置

- 大小写转换
1. `str.toLowerCase()`  小写
2. `str.toUpperCase()`  大写


- ## 数组增删操作
1. `slice(start,end)`: [start,end],不动原对象,返回截取后的对象,如果是负数则加上长度  **不会改变原来的数组**
2. `splice`:(直接操作原数组，同时返回删除的数组)  
splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
	* 删除: splice(start,num)
	* 插入: splice(start,0,params)
	* 替换: splice(start,num,params)
  ```arr.splice(2, 3, 'Google', 'Facebook')```  从2开始删除3个元素，在2的位置添加两个元素‘google’ ‘facebook’
如果不进行删除操作，只添加 则arr.spilce(下标，删除的个数，增加的元素)

3. join(separator):数组串成字符串,数组以separator分割为字符串
4. concat([string1[,string2...]]):返回连接的数组
5. pop()
6. shift()

- ## 迭代方法
1. every:
every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。  
every() 方法使用指定函数检测数组中的所有元素：  
- 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
- 如果所有元素都满足条件，则返回 true。
注意： every() 不会对空数组进行检测。
注意： every() 不会改变原始数组。
```
var ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
};ages.every(checkAdult)
//false
```
2. some:判断数组中某项符合函数返回true，则整个返回true
```
var ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
};ages.some(checkAdult)
//true
```
3. filter()：过滤并返回符合元素
```
var ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
};ages.filter(checkAdult)
//(3) [32, 33, 40]
```
4. forEach()：对数组中的每一项运行给定函数。这个方法没有返回值
```
var numbers = [4, 9, 16, 25];
function myFunction(item, index) {
      console.log( item+"+"+index) 
};
numbers.forEach(myFunction)
 4+0
 9+1
 16+2
 25+3
```
5. map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
```
let res=[1,2,3];
res.map(item => {
      console.log(item)
    })
//
 1
 2
 3
```

```
//熟练使用数组的map,filter,some,every等方法
const dataSource = [
    {
        _status: "create",
        prLineId: "20c7d139-71ab-4615-b15f-3d6ffc78519c",
    },
    {
        _status: "update",
        prLineId: "20c7d139-71ab-4615-b15f-3d6ffc785132",
    },
    {
        _status: "update",
        prLineId: '1405040113',
        objectVersionNumber: 1,
        _token: "EHLrOXw0cbtxw8QUcaCG9+bfIbOsDT+Ba0u3Hs0mDeFf2JCMC/sNow9JhVHpYfxUnVRjwUGeiHrjf5ZrKetQDw=="
    }
];  // 数据源

const selectRowKeys = ['20c7d139-71ab-4615-b15f-3d6ffc785132', '20c7d139-71ab-4615-b15f-3d6ffc78519c']; // 选中行

//1. 过滤出数据源中选中行中的_status为create的数据（当删除这些数据时，不会调用接口）
// reslut = dataSource.filter((data) => {
//     selectRowKeys.forEach((item)=>{
//        selectRowKey = item
//     }) 
//     return !(data._status == "create" && selectRowKey== data.prLineId)
// })
// console.log(reslut)
//2. 为数据源的每个_status为'update'的对象添加上自己的名字和年龄，并返回新数组
// newDataSource = dataSource.map((item,index)=>{
//     if(item._status=="update"){
//         item.name = 'add'
//         item.age = 12
//     }
//     return item
// })
// console.log(newDataSource)
//3. 判断数据源_staus是不是都是update，并输出结果
// result = dataSource.every((item)=>{
//     return item._status == "update"
// })
// console.log(result)
```

- ## ES6新增的数组方法
1. `Array.from({})`: 把类数组对象转换成数组，iterable+Map+Set
  - 类数组(可能是对象,字符串)转化为数组
  - 任何有length属性的对象，都可以通过Array.from方法转为数组
  ```
  Array.from({ length: 3 });
  (3) [undefined, undefined, undefined]
  ```
  - 对于没有此方法的浏览器 `Array.prototype.slice()`
  ```
  const toArray = (() =>
    Array.from ? Array.from : obj => [].slice.call(obj)
  )();
  ```
  - Arrar.from(arr,fun) 除了类数组以外还可以接收一个fun，对数据进行处理
  ```
  Array.from(arrayLike, x => x * x);
  // 等同于
  Array.from(arrayLike).map(x => x * x);

  Array.from([1, 2, 3], (x) => x * x)
  // [1, 4, 9]
  ```
2. `Array.of([])`: 将一组数据转换成数组
```
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```
3. `find`  找出第一个符合条件的数组成员 `arr.find(function(value,index,arr){})` ,没有则返回undefined
```
[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```
4. `findIndex` 找出第一个符合条件的素组的位置，没有则返回-1，用法和find相似
5. `fill(str,start,end)`: 把一个数组填充指定对象和字符串，注意如果是对象是浅拷贝
```
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
['a', 'b', 'c'].fill(7, 1, 3)
// ['a', 7, 7]
```
6. `entries`：对键值对的遍历
7. `keys` 键名的遍历
8. `values` 对键值的遍历
```
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

9. `includes`：arr.includes(param,idnex) 区别于indexOf是可以找到NaN h函数会返回一个boolen值
```
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```

10. `flat()`: `[1, 2, [3, 4]].flat()=>// [1, 2, 3, 4]` arr.flat(infinity) 参数是需要拉平的层数
```
[1, [2, [3]]].flat(Infinity) //以Infinity作为参数，无论多少层都会转化为一维数组
//[1,2,3]
```
11. `flatMap()`: 不改变原数组 拉平并执行一个map函数,只会执行一层
```
// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
[1, 2, 3, 4].flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]
```

