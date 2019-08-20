### Lov常用API
1. `lovOptions: { displayField, valueField }`: Lov设置显示字段和真是值字段，优先级高于后端配置的设置
   1. displayField: 设置显示值字段
   2. valueField: 设置表单绑定的字段
2. `textValue: ''`渲染时前端传入显示的值
3. `textField: ''`Lov组件会帮你在表单空间去注册这个字段并缓存，下次返回lov所在页面时会重新显示这个值
4. `queryParams: {}`传给接口的查询参数对象

### 行内编辑
1. 只有行上`_status = 'create' || 'update'`才会为当前行绑定form，才能取到$form
1. `getEditTableData(dataSource, filterFields, options)`: 
   1. dataSource: 源数据
   2. 要过滤的参数数组(例如主键和_status)
   3. 校验函数的options