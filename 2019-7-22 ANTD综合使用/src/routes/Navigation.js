import React, { Component } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import Style from './IndexPage.css'

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.form)
        this.groupName = React.createRef();
        this.pageDomain = React.createRef();
        // props.onRef(this.props.form)
    }
    resetIput() {
        this.props.form.resetFields();
        this.props.form.setFieldsValue({
            groupname: '',
            pageDomain: ''
        })
    }
    search() {
        const { getFieldsValue, getFieldsError } = this.props.form;
        console.log(getFieldsValue());
        console.log(getFieldsError());
        // this.props.onSearch();
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div style={{ padding: "10px 0 20px 0" }}>
                <Row>
                    <Col span={1}></Col>
                    <Form layout="inline"  >
                        <Col span={6}>
                            <Form.Item label="集团名称">
                                {
                                    getFieldDecorator("groupName", {
                                        validateTrigger: 'onBlur',
                                        rules: [
                                            {
                                                required: true,
                                                message: '集团名称不能为空',
                                            }
                                        ]
                                    })(<Input ref={this.groupName} />)
                                }
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="二级页面域名">
                                {
                                    getFieldDecorator('pageDomain', {
                                        validateTrigger: 'onBlur',
                                        rules: [
                                            {
                                                required: true,
                                                message: '域名不能为空'
                                            }
                                        ]
                                    })(<Input ref={this.pageDomain} />)
                                }
                            </Form.Item>
                        </Col>
                    </Form>
                    <Col span={4} offset={5}>
                        <Button style={{ marginRight: '12px' }} onClick={this.resetIput.bind(this)}>重置</Button>
                        <Button type="primary" onClick={
                            this.search.bind(this)
                        }>查询</Button>
                    </Col>

                </Row>
            </div>
        )
    }
}

Navigation = Form.create()(Navigation);

