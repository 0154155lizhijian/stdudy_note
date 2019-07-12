## redux  
### 数据状态数的创建：
- const store = createStore(reducer);
- 其中提供了三个方法分别是：
1. getState(): 存储的数据，状态树
2. dispatch(action):分发action，并返回一个action，这是唯一可以改变store中数据的方式
3. subscrible(listener):注册一个就监听者，数据发生改变时进行调用
***

## react-redux
### 提供了两个方法：
1. connect：连接React和redux store.  
- connect实际上是一个高阶组件，返回一个与redux store连接的组件类  
```<connect ([mapStateToprops],[mapDispatchToProps],[mergeProps],[options])>```  
- Provider：实现store的全局访问，将store传个每个组件  
```<Provider store={store}>```


因此在使用时可以有以下步骤

1. 引入store store作为参数传递 同时store连接到了组件  
```<Provider store={store}></Provider>```
2. 创建store
3. 编写reducers
4. 剥离actions
5. 选取需要的数据和方法  
```
    mapstateToProps = (state) => {}
    mapDispatchToProps={} 
```
