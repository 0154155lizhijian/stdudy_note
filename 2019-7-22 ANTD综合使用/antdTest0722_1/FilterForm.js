import React, { Component } from 'react';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
class FilterForm extends Component{

  constructor(props){
    super(props);
    this.name = React.createRef();
    this.ipAddr = React.createRef();
    props.onRef(this.props.form);
  }

  resetInput() {
    this.props.form.resetFields();
    this.props.form.setFieldsValue({
      name:'',
      ipAddr:'',
    });
  }

  search(){
      const { getFieldsValue, getFieldsError }  =this.props.form;
      // console.log(getFieldsValue());
  //    console.log(getFieldsError());
  }

  render(){
    const { getFieldDecorator }  = this.props.form;
    return(
      <Form layout="inline">
        <Form.Item label={"集团名称"} {...formItemLayout}>
          {
            getFieldDecorator("name", {
              validateTrigger:'onBlur',
              rules:[
                {
                  required: true,
                  message:'集团名称不能为空',
                },
              ]
            })(
              <Select style={{ width: 120 }} ref={this.name} name='name' >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            )
          }

        </Form.Item>
        <Form.Item label={"域名"} {...formItemLayout}>
          { getFieldDecorator('ipAddr',{
            validateTrigger:'onBlur',
            rules:[
              {
                required: true,
                message:'域名不能为空',
              },
              {
                max: 15,

              },{
                validator: (rule, value, callback) =>{
                  if(value ===  'www.baidu.com'){
                    callback("域名不能为百度","域名1212");
                  }else{
                    callback();
                  }
                },
              }
            ]
          })
          (<Input ref={this.ipAddr}/>)
          }

        </Form.Item>
        <Form.Item>
          <Button onClick={this.resetInput.bind(this)} ty>重置</Button>
          <Button onClick={this.search.bind(this)}>查询</Button>
        </Form.Item>
      </Form>
    )
  }

}

FilterForm = Form.create()(FilterForm);
export default FilterForm;
