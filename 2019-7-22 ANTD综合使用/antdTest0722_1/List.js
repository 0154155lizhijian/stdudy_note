import { Component } from 'react';
import { Layout, PageHeader, Button, Table, Input } from 'antd';

const UPDATE = 'UPDATE';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    //  _status: 'UPDATE',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

export default class List extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: dataSource,
    };
  }

  edit(id){
    const { data } = this.state;
    data[id]._status = UPDATE;
    this.setState({data});
  }

  cancle(id){
    const { data } =this.state;
    delete data[id]._status;
    this.setState({data});
  }


  render(){
  //  const { getFieldDecorator }  = this.props.form;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: ( text, record, index) =>{
          if(record._status){
            return (
              <Input />
            );
          }else{
            return text;
          }
        }
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
      {
        title: '操作',
        key: 'operation',
        render: ( text, record, index) => {
          if(record._status){
            return(
              <div>
                <a style={{marginRight: '10px'}}>保存</a>
                <a onClick={this.cancle.bind(this, index)}>取消</a>
              </div>
              )
          }else{
            return(
              <div>
                <a style={{marginRight: '10px'}}>编辑1</a>
                <a onClick={this.edit.bind(this, index)}>编辑</a>
              </div>
            )
          }
        }
      }
    ];
    return(
        <Table
          dataSource={this.state.data}
          bordered={true}
          columns={columns}
          pagination={{
            total: 85,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            pageSize: 20,
            defaultCurrent: 1,
          }}
        />
    )
  }

}

