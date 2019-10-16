import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { Layout, Form, Row, Col, Input, Button, Table, Spin } from 'antd';


import { initialState, myReducer} from './UserListReducer';
import { useCount, ContextProvider } from './UserListContext';

export default function UserListReducerNew() {

    const [state, dispatch]  = useCount(myContext);
 // const [state, dispatch] = useCount();
  const { list, loading, name, search } = state;

  const getUserList = async (search={}) => {
    const result = await axios.get('/getUserList',{
      ...search
    });
    dispatch({
      type: 'setList',
      payload: {
        list: result.list,
      }
    });
    // setList(result.list);
    //  setLoading(false);
  };

  // 每次渲染都会执行，类似componentDidMount 和 componentDidUpdate
  useEffect(() => {
    console.log('useEffect');
    dispatch({
      type: 'showLoading',
    });
    //  setLoading(true);
    getUserList(search);
    // 返回一个函数(可选的)，该函数会在组件卸载时执行，类似componentWillUnmount
    return function cleanUp() {
      dispatch({
        type: 'clearList',
        payload : {
          list : []
        }
      })
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
                <Input
                  onChange={ e =>
                    dispatch({type: 'setName', payload:{name: e.target.value}})
                  }
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Button
                onClick={ () =>
                  dispatch({type: 'setSearch'})
                }
              >查询</Button>
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
        <ContextProvider>
          <ChildrenOne />
          <ChildrenTwo />
        </ContextProvider>
      </Content>
    </React.Fragment>
  );
};
