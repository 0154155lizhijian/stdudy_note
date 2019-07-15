## - Map
1. Map 结构提供了“值—值”的对应,其上面有几种方法
  - 获取数据map.get()
  - 插入数据map.set()
  - 判断属性是否存在 map.has()
  - 删除数据 map.delete()
  - 获取数据的长度 map.size
```
let arr = [['one',1],['two',2],['three',3],['four',4]]
let map = new Map(arr);
console.log(map)
// 遍历 key 值
for (let key of map.keys()) {
  console.log(key);
}

// 遍历 value 值
for (let value of map.values()) {
  console.log(value);
}

// 遍历 key 和 value 值(一)
for (let item of map.entries()) {
  console.log(item[0], item[1]);
}

// 遍历 key 和 value 值(二)
for (let [key, value] of arr) {
  console.log(key)
}
```