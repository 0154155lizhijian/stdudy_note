Function.prototype.call2 = function(context){
  var context = context || window;
  context.fn = this;
  var args = [];
  for(var i =1, len=arguments.length; i<len; i++){
    args.push('arguments['+i+']');
  }
  var result = eval('context.fn('+args+')'); //在这里会调用Array.tostring()方法，数组转化为字符串
  // context.fn();
  delete context.fn;
  // return result;
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

bar.call2(foo,'xiumin',23);

