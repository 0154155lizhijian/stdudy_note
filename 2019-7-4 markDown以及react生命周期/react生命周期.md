## 1. 组件传递
1. 父组件向子组件传值
- 通过props组层传递
2. 子组件向父组件传值
- 父组件给子组件传递一个调用的方法，向上冒泡的方式，子组件调用方法，改变父组件的值
## 2. 生命周期  
![](https://upload-images.jianshu.io/upload_images/9478188-00c0c67931a36a5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/740/format/webp "react生命周期")

从数据的源头出发分为 挂载 更新 和卸载三个过程
1. 挂载
- getDefaultProps 获得外来props  
- getinitialState 初始化数据
- componentWillMount 组件即将挂载
前面三步一般在construtor中执行
    ``` 
    constructor(props){
    super(props);
    this.state={
    }
    }
    ```
- render 渲染页面
- componentDidMount 组件挂载完成 

2. 更新
- componentWillReceiveProps 是否需要接收props
- shouldComponentUpdate state或者props的值的变化是否需要页面更新
- componentWillUpdate  组件更新
- render  重新渲染
- componentDidUpdate 组件更新完成 

3. 卸载
- componentWillUnmount 组件卸载