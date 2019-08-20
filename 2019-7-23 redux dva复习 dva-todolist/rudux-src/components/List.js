import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../store/actions/list'
import store from '../store'

export class List extends Component {
    static propTypes = {
        lists: PropTypes.array
    }
    constructor(props){
        super(props)
        this.state={
            inputValue:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleBtn = this.handleBtn.bind(this)
    }
    componentWillMount(){
        
        this.unsubscribe = store.subscribe(()=>{})   //进行订阅
    }
    componentWillUnmount(){
        this.unsubscribe()   //订阅结束
    }
    handleAdd = (e)=>{
        let code = e.keyCode
        if(code == 13){
            this.props.addToDo(this.todo.value)
            this.todo.value = ''
        }
    }
 
    handleChange(e){
        this.setState({
            inputValue:e.target.value
        })
        console.log(this.state)
    }
    handleBtn(){
        this.props.addToDo(this.state.inputValue)
        this.setState({
            inputValue:''
        })
    }
    render() {
        return (
            <div>
                <label>要做的事情<input onChange={this.handleChange} value={this.state.inputValue} onKeyDown={this.handleAdd}/></label>
                <button onClick={this.handleBtn}>提交</button>
                <ul>
                    {
                        this.props.lists.map((list,index)=>(
                            <li key={index} style={{textDecoration:list.completed?'line-through':''}}>
                                <span onDoubleClick={()=>this.props.toggle_todo(index)}>{list.text}</span>
                                <button onClick={()=>this.props.delToDo(index)}>删除</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.todos
}

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, actions)(List)
