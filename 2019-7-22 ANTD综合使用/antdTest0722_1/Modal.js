import { Component } from 'react';
import { Drawer, Button, Form, Input, Switch } from 'antd';

export default class Index extends Component{

  render(){
    return(
      <div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          width={300}
          onClose={this.onClose}
          visible={this.props.visiable}
        >
          <Form layout={'inline'}>
            <Form.Item label={'名称'}>
              <Input/>
            </Form.Item>
            <Form.Item label={'域名'}>
              <Input/>
            </Form.Item>
            <Form.Item label={'启用'}>
              <Switch/>
            </Form.Item>
          </Form>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    )
  }

}

