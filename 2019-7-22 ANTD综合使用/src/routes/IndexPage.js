import React, { Component } from 'react'
import { Layout , Drawer, Form, Input, Switch, Button,PageHeader} from 'antd'
import Navigation from './Navigation'
import Body from './Body'
import Style from './IndexPage.css'
const { Header, Content } = Layout
export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      visible: false,
      formItemLayout: {
        labelCol: {
          sm: { span: 7 },
        },
        wrapperCol: {
          sm: { span: 16 },
        },
      }
    }
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  getForm(form) {
    console.log(form.getFieldsValue())
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className={Style.header}>
          <PageHeader
           title="用户分配" 
           extra={[
             <Button key="1" type="primary" onClick={this.showDrawer}>
               +新建
                 </Button>
           ]}
           style={{ margin: "0px -30px 0px -50px" }}></PageHeader>
          </Header>
          <Content className={Style.bodyContent}>
            <Navigation ></Navigation>
            <Body onRef={this.getForm.bind(this)}></Body>
          </Content>
          <Drawer
            width={400}
            title="新建门户分配"
            placement='right'
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Form {...this.state.formItemLayout} >
              <Form.Item label="集团名称" required><Input></Input></Form.Item>
              <Form.Item label="集团编码" ><Input ></Input></Form.Item>
              <Form.Item label="公司名称"><Input ></Input></Form.Item>
              <Form.Item label="公司编码"><Input ></Input></Form.Item>
              <Form.Item label="二级页面域名" required><Input></Input></Form.Item>
              <Form.Item label="模块名称" required><Input></Input></Form.Item>
              <Form.Item label="启用"><Switch defaultChecked /></Form.Item>
            </Form>
            <div
              className={Style.drawerButton}
            >
              <Button style={{ marginRight: 8 }}>
                取消
            </Button>
              <Button type="primary" onClick={this.onClose}>
                确定
            </Button>
            </div>
          </Drawer> 
        </Layout>
      </div>
    )
  }
}

   


         