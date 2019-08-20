import React, { Component } from 'react'
import FilterSon from './filterSon'

export default class filter extends Component {
    constructor(props){
        super(props);
        this.ref = React.createRef()
    }

    componentDidMount(){
        console.log(this.ref.current.obj)
    }

    render() {
        return (
            <div>
                <FilterSon str="blue" num={123}  ref={this.ref}/>
            </div>
        )
    }
}
