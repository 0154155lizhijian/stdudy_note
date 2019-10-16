import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Form, Row, Col, Input, Button, Table, Spin } from 'antd';

export default function UserListNew() {
  const [ list, setList] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ name, setName ] = useState('');
  const [ search, setSearch ] = useState({name: ''});

  const getUserList = async (search={}) => {
    const result = await axios.get('/getUserList',{
      ...search
    });
    setList(result.list);
    setLoading(false);
  };

  // 每次渲染都会执行，类似componentDidMount 和 componentDidUpdate
  useEffect(() => {
    console.log('useEffect');
    setLoading(true);
    getUserList(search);
    // 返回一个函数(可选的)，该函数会在组件卸载时执行，类似componentWillUnmount
    return function cleanUp() {
      setList([]);
    }
  },[search.name]);


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
        <p>Function Component + Hook</p>
      </Header>
      <Content>
        <Form layout="inline">
          <Row gutter={12}>
            <Col span={6}>
              <Form.Item
                label={'姓名'}
                {...formLayout}
              >
                <Input onChange={ e => {setName(e.target.value)} } />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Button onClick={ () => {setSearch({name})}}>查询</Button>
            </Col>
          </Row>
        </Form>
        <Spin spinning={loading}>
          <Table
            dataSource={list}
            columns={columns}
            rowKey={'id'}
          />
        </Spin>
      </Content>
    </React.Fragment>
  );
};
