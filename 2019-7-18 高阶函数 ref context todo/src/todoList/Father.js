import React, { Component } from 'react'
import Son from './Son'

export default class Father extends Component {
    constructor(props){
        super(props)
        this.state={
            todos:[
                {type:'未完成',content:'吃饭',id:1},
                {type:'进行中',content:'睡觉',id:2},
                {type:'已完成',content:'打豆豆',id:3,}
            ],
            inputValue:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbmit = this.handleSumbmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.changeType = this.changeType.bind(this);
    }
    handleChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }   

    handleSumbmit(){
        const newTodos = {type:'未完成',content:this.state.inputValue,id:Date.now()};
        this.state.todos.push(newTodos);
        const todos = this.state.todos
        this.setState({
            todos:todos,
            inputValue:''
        })
    }
    handleDelete(id){
        console.log(id)
        const todoList = this.state.todos;
        todoList.map((item,index)=>{
           return item.id === id ? todoList.splice(index, 1) : ''
        })

        this.setState({
            todos:todoList
        })
    }
    changeType(type,id){
        if(type === "未完成"){
            const todoList = this.state.todos;
            todoList.map((item,index)=>{
                return item.id === id? item.type = '进行中' : ''
            })
            this.setState({
                todos:todoList
            })
        }
        if(type === "进行中"){
            const todoList = this.state.todos;
            todoList.map((item,index)=>{
                return item.id === id? item.type = '已完成' : ''
            })
            this.setState({
                todos:todoList
            })
        }
    } 
    render() {
        return (
            <div>
                <div style={{margin:'0 auto',height:'100px',width:'800px',border:'1px solid black'}}>
                    <div style={{margin:'40px 250px'}}>
                        Todos:<input placeholder="输入要做的事情" onChange={this.handleChange} value={this.state.inputValue}></input> <button onClick={this.handleSumbmit}>提交</button>
                    </div>
                </div>
                <Son todos={this.state.todos} handleDelete={this.handleDelete} changeType={this.changeType}/>
            </div>
        )
    }
}
