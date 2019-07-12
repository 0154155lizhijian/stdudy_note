1. 谷歌查找redux-devtool
2. 安装插件 ```npm install  redux-devtools-extension --save-dev ```
3. 在创建数据仓库的时候  ```import { composeWithDevTools } from 'redux-devtools-extension' ```

4.compose中间件
```
 const store = createStore(reducer,compose(  
     applyMiddleware(sagaMiddleware),  
     composeWithDevTools()  
))
```