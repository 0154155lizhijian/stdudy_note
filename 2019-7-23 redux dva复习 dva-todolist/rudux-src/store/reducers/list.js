import * as types from '../action-types'

export default function(state={lists:[{text:'默认',completed:false}],status:'all'},actions){
    switch (actions.type) {
        case types.ADD_TODO:
            return {...state,lists:[...state.lists,{text:actions.text}]};
        case types.DEL_TODO:
            return {...state,lists:[...state.lists.slice(0,actions.index),...state.lists.slice(actions.index+1)]};
        case types.TOGGLE_TODO:
            return{...state,lists:state.lists.map((item,index)=>{
                if(index === actions.index){
                    item.completed = !item.completed
                }
                return item
            })};
        case types.CHANGE_ACTIONTEXT:
            return {lists:[{text:actions.text,completed:false}]}
        case types.SWITCH_TYPE:
            return {...state,status:actions.status}
        default:
            return state
    }
}