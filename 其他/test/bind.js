Function.prototype.bind2 = function(context){
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments,1);

  var fNOP = function(){};
  var fBound = function(){
    //这个时候的arguments是bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP? this : context, args.concat(bindArgs)); 
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP();
  return fBound;
}



//测试
var foo = {
  value: 2
};

function bar() {
  console.log(this.value);
}

var bindFoo = bar.bind2(foo); 

bindFoo(); 