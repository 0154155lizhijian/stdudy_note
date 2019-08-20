## connect 到底传了什么东西？得到的是什么？
经常可以`connect(({store})=>({store}))(Componect)`

connect的第一个参数可以做到数据按需分配，传入的是全部的store，假如我数据源中有{user,login,loading}如下，后面return的是我们需要的数据
```
export default connect(({ user, login, global = {}, loading }) => ({
    currentUser: user.currentUser,
    collapsed: global.collapsed,
    fetchingNotices: loading.effects['global/fetchNotices'],
    notices: global.notices
}))(BasicLayout);

// 简化版
export default connect( 
  ({ user, login, global = {}, loading }) => {
        return {
          currentUser: user.currentUser,
          collapsed: global.collapsed,
          fetchingNotices: loading.effects['global/fetchNotices'],
          notices: global.notices
        }
  }
)(BasicLayout);

//因为键值同名：则有
connect(({store})=>({store：store}))(Componect)
或者
connect(({store})=> return {store:store})(Componect)
```