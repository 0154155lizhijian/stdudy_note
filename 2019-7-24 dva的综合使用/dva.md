- 安装
```
$ npm install dva-cli -g
$ dva new my-dva

//或者新建一个文件夹 再文件夹下面输入命令
$ dva init   //这种情况下创建的dva项目可能存在缺包的情况，需要yarn安装依赖
```
- 结合Antd
```
$ npm install antd babel-plugin-import --save   //按需加载
//配置antd按需加载,再.webpackrc文件下加入代码
{
   "extraBabelPlugins": [
     ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
   ]
}
```
- 项目结构  
```
├── assets                //这个文件夹存储静态资源 
│   └── yay.jpg           
├── components            //在这个文件夹下些公共组件或者函数式组件
│   └── Example.js  
├── index.css            //自定义样式文件          
├── index.js             //入口文件 可以在这里加入路由router和数据model
├── models              //数据仓库，相当于store
│   └── example.js  
├── router.js           //路由的配置文件
├── routes              //在这里写功能组件
│   ├── IndexPage.css  
│   └── IndexPage.js  
├── services           //全局服务 主要负责数据的异步请求
│   └── example.js  
├── tests              //测试文件夹
│   └── models  
│       └── example-test.js  
└── utils              //全局的类或者函数
    └── request.js  
```

- 数据和组件的结合  connect函数
  - 它是一个高阶组件，返回自身以外，给组件传递了一个store
  - store的唯一标识符是model里面的namespace,可以通过namespace选择相对应的数据仓库
  ```
  export default connect(({info})=>({info}))(IndexPage)  
  //结构info作为回调函数传值给IndexPage
  ```
- 组件使用model数据的方法
  - 因为在上面connect已经拿到了info,所以在组件的this.props上有5个函数
  1. dispatch  //使得组件可以派发事件给model
  2. history   //控制路由的跳转
  3. info      //数据源
  4. local     //配置的路由
  5. match     //匹配到的路由

- 项目搭建
1. index.js  配置路由和model
2. router下配置路径
3. 定义model
4. route下创建组件并挂载到页面上 
5. connect Model


- model组成
  1. state 数据源
  2. reducers  执行同步操作的函数，内容为dispatch
  3. effect    执行异步操作的函数，运行机制就和react-saga一样
  4. Subscription 用于订阅一个数据源，然后根据条件 dispatch 需要的 action
  ```
   subscriptions: {   
    keyEvent({dispatch}) {   //监听键盘操作
      key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
    },
  ```