import React, { Component } from 'react'
import {createStore} from 'redux'


const reducer = (state = {count: 0}, action) => {   //2
  switch (action.type){
    case 'INCREASE': return {count: state.count + 1};
    case 'DECREASE': return {count: state.count - 1};
    default: return state;
  }
}

const actions = {                      //3
  increase: () => ({type: 'INCREASE'}),
  decrease: () => ({type: 'DECREASE'})
}

const store = createStore(reducer);    //1

store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(actions.increase()) // {count: 1}
store.dispatch(actions.increase()) // {count: 2}
store.dispatch(actions.increase()) // {count: 3}


export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


