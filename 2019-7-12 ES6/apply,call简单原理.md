# call
```
Function.prototype.call2 = function(context) {
    context.fn = this;
    console.log(arguments)
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']'); 
        // console.log(args)  //[ 'arguments[1]' ] [ 'arguments[1]', 'arguments[2]' ]
    }
    console.log('context.fn(' + args +')');  //context.fn(arguments[1],arguments[2])
    eval('context.fn(' + args +')');
    console.log(context.fn)
    delete context.fn;
  }
  // 测试一下
  var foo = {
    value: 1
  };
  
  function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
  }
  
  bar.call2(foo, 'kevin', 18); 
```

# apply
```
Function.prototype.apply2 = function (context, arr) {
    console.log(arr)
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        console.log(args)
        result = eval('context.fn(' + args+ ')')
    }

    delete context.fn
    return result;
}

var foo = {
    value: 1
  };
  
  function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
  }
  
  bar.apply2(foo, ['kevin', 18]); 
```