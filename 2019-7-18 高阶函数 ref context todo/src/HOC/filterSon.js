import React, { Component } from 'react'

function OuterFn(ClassComponent) {

    class OuterClass extends Component {
        obj = {}

        render() {
             console.log(this.props) 
             let s = this.props
            for(let item in s){
                 if(typeof s[item] !== 'string') {
                    this.obj[item] = s[item]
                }   
            }
            
            return (
                <ClassComponent {...this.obj}  />
            )
        }
        
    } 
   return OuterClass
}

class Focus extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
             <input defaultValue="defaultValue" />
        )
    }
}
export default OuterFn(Focus)