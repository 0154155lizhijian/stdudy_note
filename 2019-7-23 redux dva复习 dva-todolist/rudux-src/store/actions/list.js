import * as types from '../action-types'

export default {
    addToDo(text){
        return {type:types.ADD_TODO,
        text:text}
    },
    delToDo(index){
        return {type:types.DEL_TODO,
        index:index}
    },
    toggleToDo(index){
        return {type:types.TOGGLE_TODO,
        index:index}
    },
    switch_type(status){
        return{
            type:types.SWITCH_TYPE,
            status:status
        }
    },
    change(text){
        return{
            type:types.CHANGE_ACTIONTEXT,
            text:text
        }
    }
}