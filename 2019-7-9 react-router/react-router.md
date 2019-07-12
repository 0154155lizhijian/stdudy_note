## react-Router
- ## 其中路由分为两种 一种是HashRouter 另外一种是 BrowserRouter 

  1. hashHistory 使用 URL 中的 hash（#）部分去创建路由，举例来说，用户访问http://www.example.com/，实际会看到的是http://www.example.com/#/  
  2. browserHistory是使用 React-Router 的应用推荐的 history方案。它使用浏览器中的 History API 用于处理 URL，创建一个像example.com/list/123这样真实的 URL 。

  3. <BrowserRouter> 属于比较常用的路由，<HashRouter> 适用于页面比较少的小型项目。如果要使用 <BrowserRouter> 的话，让后端服务器配置下路由就行。

- ## 配置路径  Route Redirect Switch
```
    <Router>
        <Route path='/' exact component={App}></Route>
        <Route path='/erying' component={Erying}></Route>
        <Route path='/qibinglian' component={Qibinglian}>
    </Route>
```
  - 其中exact表示完全匹配
  - 匹配方式均为模糊匹配
  - 参数传递 ``` <Route path='/:location component={Test}'></Route> ``` 可以在```this.props.match.params.location```找到参数
  - 重定向 Redirect ``` <Redirect to='/'></Redirect> ```
  - Switch 匹配到了即不在匹配
  - ```<Route path="*" component={NoMatch}/>``` 404notFound 


- ## 链接跳转 Link
```
    <li>
        <Link to='/'>一营</Link>
    </li>
    <li>
        <Link to='/erying'>二营</Link>
    </li>
    <li>
        <Link to='/qibinglian'>骑兵连</Link>
    </li>
```
