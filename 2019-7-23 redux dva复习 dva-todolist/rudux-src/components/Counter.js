import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import store from '../store'
import actions from '../store/actions/counter'

export class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    }
    constructor(props){
        super(props)
    }
    componentWillMount() {
        this.unsubscribe=store.subscribe(()=>{})
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    

    render() {
        return (
            <div style={{border:'1px solid red'}}>
                <p>{this.props.count}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.counter
}

const mapDispatchToProps = {
    increment:actions.increment,
    decrement:actions.decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

