```
Function.prototype.apply2 = function(context,arr){
  var context = context || window;
  context.fn = this;
  var result;
  if(!arr){
    result = context.fn();
  }
  else{
    var args = [];
    for(var i=0; i<arr.length; i++){
      args.push('arr['+i+']');
    }
    // console.log(args);
    result = eval('context.fn('+args+')') //args自动调用tostring方法
    // context.fn()
  }
  delete context.fn
  return result;
}

//测试
var foo = {
  value: 1
};
function bar(name, age){
  console.log(name)
  console.log(age)
  console.log(this.value)
}

bar.apply2(foo,['xiumin',23]);
```