当处理多个input输入的时候，我们可以给每个元素添加name元素，并处理函数根据event.target.name 的值选择要执行的操作

```
 handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
```


- 进行数据和状态更新时 函数运行最好放在生命周期函数中 进行数据的更新

- 在表单`<section></section>` 中要改变显示的内容 尽量不要使用selected属性  可以在每个选项中赋予value值  
  通过改变value的值来改变索要显示的内容

- 表单提交 onSubmit 要放在`<form> </form>`标签上 而不能放在 input标签上  
  在这里要注意：此时要阻止提交的默认事件 e.preventDefalut()

- 事件绑定的时候要注意是否需要重新绑定this指向