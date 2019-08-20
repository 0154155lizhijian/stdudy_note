import React, { Component } from 'react'
import Child from './Child'
import Context from './UserContext'

export default class ContextText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // inputText:'输入内容',
            inputName: '',
            inputAge:'',
            inputSex:'',
            inputLists:[],
        }
        this.add = this.add.bind(this);
        this.change = this.change.bind(this);
        this.del = this.del.bind(this);
    }
    add() {
        let inputList = [
           this.state.inputName,
           this.state.inputAge,
           this.state.inputSex
        ]
        // console.log(inputList)
        this.state.inputLists.push(inputList) ;
        const inputLists = this.state.inputLists;
       

        this.setState({
            inputLists: inputLists,
            inputName: '',
            inputAge:'',
            inputSex:''
        })
    }
    
    change(type,e) {
        this.setState({
            [type]: e.target.value
        })
    }
    del(index){
        const delInputList = this.state.inputLists;
        delInputList.splice(index,1)
        this.setState({
            inputLists:delInputList,
        })
    }

    render() {
        return (
            <div>
                <Context.Provider value={{
                    inputText: this.state.inputValue,
                    add: this.add,
                    change: this.change,
                    inputLists:this.state.inputLists,
                    del:this.del
                }}>
                    <Child></Child>
                </Context.Provider>
            </div>
        )
    }
}

