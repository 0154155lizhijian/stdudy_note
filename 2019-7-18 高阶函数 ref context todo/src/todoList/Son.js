import React, { Component } from 'react'

export default class Son extends Component {
    constructor(props){
        super(props)
        console.log(props.todos)
        this.state={
            container:[{type:'未完成'},{type:'进行中'},{type:'已完成'}]
        }
    }

    handleDel = (index) =>{
      const {handleDelete} = this.props
      handleDelete(index)
    }
    handleChangeType = (type,index) => {
        const {changeType} = this.props
        changeType(type,index)
    }

    render() {
        const allList = this.state.container.map((item,index)=>{
            return(
                <div style={{paddingRight:'20px',height:'300px',width:'243px',border:'1px solid black',float:'left'}} key={index}>
                    <h2 >{item.type} </h2>
                    <ul>
                        {
                            this.props.todos.filter((todo)=>{

                                return todo.type == item.type
                            }).map((items,indexs)=>{
                                return (
                                    <li key={indexs}>
                                        {items.content}
                                        { item.type == "未完成" ? <button onClick={()=>this.props.changeType(item.type,items.id)}>进行中</button> : item.type == "进行中" ?  <button onClick={()=>this.props.changeType(item.type,items.id)}>已完成</button> : ''} 
                                        <button onClick={()=>this.handleDel(items.id)}>删除</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            ) 
        })
        return (
            <div style={{margin:'20px auto',height:'300px',width:'800px'}}>
                {allList}
            </div>
        )
    }
}
