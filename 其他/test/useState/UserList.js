import React, { Component } from 'react';
import { Bind } from 'lodash-decorators';
import {  Layout, Input, Button, Table, Form, Row, Col, Spin } from 'antd';
import { connect } from 'dva';

@connect(({ userList, loading }) => ({
  userList,
  getUserListLoading: loading.effects['userList/getUserList'],
}))
export default class UserList extends Component{

  constructor(props){
    super(props);
    this.state = {
      query: {
        name: ''
      }, query: {
        name: ''
      }
      query: {
        name: ''
      }
      query: {
        name: ''
      } query: {
        name: ''
      }

    };
  }

  componentDidMount() {
    // 获取数据
    this.getUserList();
  }

  componentWillUnmount(){
    // 卸载时清除数据
    this.clearUserList();
  }

  @Bind()
  getUserList(query= {}){
    const { dispatch } = this.props;
    dispatch({
      type: 'userList/getUserList',
      payload: {
        ...query
      },
    });
  }

  @Bind()
  clearUserList(){
    const { dispatch } = this.props;
    dispatch({
      type: 'userList/save',
      payload: {
        list: []
      }
    });
  }

  @Bind
  query(){
    const { query } = this.state;
    this.getUserList(query);
  }

  render(){
    const { userList, getUserListLoading } = this.props;
    const { list } = userList;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    const formLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    };
    const { Header, Content } = Layout;
    return(
      <React.Fragment>
        <Header style={{backgroundColor : "#ccc", marginBottom:'16px', fontSize :'20px'}} >
          <p>Class Component</p>
        </Header>
        <Content>
          <Form layout="inline">
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item
                  label={'姓名'}
                  {...formLayout}
                >
                  <Input onChange={ e => this.setState({query:{name: e.target.value}})}  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Button onClick={this.query}>查询</Button>
              </Col>
            </Row>
          </Form>
          <Spin spinning={getUserListLoading}>
            <Table
              dataSource={list}
              columns={columns}
              rowKey={'id'}
            />
          </Spin>
        </Content>
      </React.Fragment>
    );
  }

};
