import React, { Component } from 'react'
import Context from './UserContext'


export default class ChildChild extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {value => {
                        console.log(value)
                        return (
                            <div>
                                <label> 姓名：<input type="text" value={value.inputName} onChange={(e) => { value.change('inputName', e) }}></input></label>
                                <label> 年龄：<input type="text" value={value.inputAge} onChange={(e) => { value.change('inputAge', e) }}></input></label>
                                <label> 性别：<input type="text" value={value.inputSex} onChange={(e) => { value.change('inputSex', e) }}></input></label>
                                <button onClick={value.add}>增加一条数据</button>
                                <ul>
                                    {value.inputLists.map((item, index) => {
                                        return (<li key={index}>姓名：{item[0]} 年龄：{item[1]} 性别:{item[2]}
                                            <button onClick={()=>value.del(index)}>删除</button>
                                        </li>)
                                    })
                                    }
                                </ul>
                            </div>
                        )
                    }}
                </Context.Consumer>
            </div>
        )
    }
}
