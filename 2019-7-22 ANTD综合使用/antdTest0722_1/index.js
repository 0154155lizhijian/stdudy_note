import { Component } from 'react';
import { Layout, PageHeader, Button } from 'antd';

import FilterForm from './FilterForm';
import List from './List';
import Modal from './Modal';

const { Header, Content } = Layout;
export default class Index extends Component{
  form;

  constructor(props){
    super(props);
    this.state = {
      visiable: false,
    };
  }

  handleOnClick(){
    const { visiable }  = this.state;
    this.setState(({
      visiable: !visiable
    }));
  }

  handleOnRef(form){
    this.form = form;
  }

  handleOnSearch(){
    console.log(this.form.getFieldsValue());
  }

  render(){
    return(
       <div>
         <Layout>
           <Header style={{background:'#fff'}}>
             <PageHeader
               title="门户分配"
               extra={[
                 <Button key="1" type="primary" icon='plus' onClick={this.handleOnClick.bind(this)}>
                   新建
                 </Button>
               ]}
             />
           </Header>
           <Content>
             <FilterForm onRef={this.handleOnRef.bind(this)} onSearch={this.handleOnSearch.bind(this)} />
             <List />
             <Modal visiable={this.state.visiable}/>
           </Content>
         </Layout>
       </div>
    )
  }

}

