import React, { Component } from 'react'
import Style from './IndexPage.css'
import { Table, Divider, Pagination,Input,Form } from 'antd'

const UPDATE = 'UPDATE'
export default class Body extends Component {
    constructor(props) {
        super(props)
        const dataSource = [];
        for (let i = 0; i < 46; i++) {
            dataSource.push({
                key: i,
                groupCode: 'BG000000',
                groupName: `SRM平台${i}`,
                companyCode: '330000',
                companyName: '汉德信息',
                pageDomain: '192.168.1.1',
                pageAddress: 'www.baidu.com',
                use: '启用',
            });
        }
        this.state = {
            dataSource: dataSource
        }

    }

    edit(index, text, record) { 
        this.state.dataSource[index].status = UPDATE
        this.setState({ dataSource: this.state.dataSource })
    }
    onUpdate = (record,flag) => {
        const {onDrawerUpdat} = this.props
        const onClose = this.props.onClose
        const {onSetDrawDataSwitch} = this.props
        onClose()
        onDrawerUpdat(record,flag)
        // onSetDrawDataSwitch()
    }
    save(index,text){
        const {dataSource} = this.state
        delete dataSource[index].status;
        this.setState({
            dataSource
        })
    }
    cancle(index,text){
        const {dataSource} = this.state
        delete dataSource[index].status;
        this.setState({
            dataSource
        })
    }
  
    render() {
        const columns = [
            {
                title: '集团编码',
                dataIndex: 'groupCode',
                key: 'clusterCoding',
                render:(text,record,index)=>{
                    if (this.state.dataSource[index].status) {
                        return(<Input defaultValue={text} />)
                    }else{
                        return  text
                    }
                }
            },
            {
                title: '集团名称',
                dataIndex: 'groupName',
                key: 'groupName',
                render:(text,record,index)=>{
                    if (this.state.dataSource[index].status) {
                        return(<Input defaultValue={text} />)
                    }else{
                        return  text
                    }
                }
            },
            {
                title: '公司编码',
                dataIndex: 'companyCode',
                key: 'companyCode',
                render:(text,record,index)=>{
                    if (this.state.dataSource[index].status) {
                        return(<Input defaultValue={text} />)
                    }else{
                        return  text
                    }
                }
            },
            {
                title: '公司名称',
                dataIndex: 'companyName',
                key: 'companyName',
                render:(text,record,index)=>{
                    if (this.state.dataSource[index].status) {
                        return(<Input defaultValue={text} />)
                    }else{
                        return  text
                    }
                }
            },
            {
                title: '二级页面域名',
                dataIndex: 'pageDomain',
                key: 'pageDomain',
                render:(text,record,index)=>{
                    if (this.state.dataSource[index].status) {
                        return(<Input defaultValue={text} />)
                    }else{
                        return  text
                    }
                }
            },
            {
                title: '二级页面地址',
                dataIndex: 'pageAddress',
                key: 'pageAddress',
                render:(text,record,index)=>{
                    if (this.state.dataSource[index].status) {
                        return(<Input defaultValue={text} />)
                    }else{
                        return  text
                    }
                }
            },
            {
                title: '启用',
                dataIndex: 'use',
                key: 'use',
                render:(text,record,index)=>{
                    if (this.state.dataSource[index].status) {
                        return(<Input defaultValue={text} />)
                    }else{
                        return  text
                    }
                }
            },
            {
                title: '操作',
                key: 'opration',
                render: (text, record, index) => {
                    if (this.state.dataSource[index].status) {
                        return (
                            <span>
                                <a href="javascript:;" onClick={this.save.bind(this, index, text)}>保存</a>
                                <Divider type="vertical" />
                                <a href="javascript:;" onClick={this.cancle.bind(this,index,text)}>取消</a>
                            </span>
                        )
                    } else {
                        return (
                            <span>
                                <a href="javascript:;" onClick={this.edit.bind(this, index, text)}>编辑1</a>
                                <Divider type="vertical" />
                                <a href="javascript:;" onClick={()=> {this.onUpdate(record,false)}}>编辑2</a>
                            </span>
                        )
                    }
                }



            }
        ];
        return (
            <div>
                <Table dataSource={this.state.dataSource} columns={columns} />;
                <br />
            </div>
        )
    }
}

Body = Form.create()(Body);
