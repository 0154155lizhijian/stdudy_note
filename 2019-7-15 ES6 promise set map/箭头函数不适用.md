1. 以下情况避免使用ES6的箭头函数
  - 使用箭头函数定义对象的方法
  ```
  let foo = {
    value: 1,
    getValue: () => console.log(this.value)  //除非这里你想要获取的是全局的this
    }

foo.getValue();//undefined
  ```
  - 定义原型方法
  ```
  function Foo() {
    this.value = 1
  }

  Foo.prototype.getValue = () => console.log(this.value)

  let foo = new Foo()
  foo.getValue();  // undefined
  ```
  - 作为事件的回调函数

