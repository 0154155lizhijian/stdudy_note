## 通过Form.create({})(CustomizedForm) 和getFieldDecorator方法将表单数据双向绑定后在 getFieldDecorator方法利用rlues对数据进行校验时，正所谓表单校验，一定要放在form.Item 中，而不能单独存在，rlue校验将会失效

```
//错误代码
 {getFieldDecorator('select', {
    rules: [{ required: true, message: 'Please select your country!' }],
  	})(<Input>
}
//正确代码
<Form.item>
	{
		 {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
           <Input>
          )}		
	}
</Form.item>
```



