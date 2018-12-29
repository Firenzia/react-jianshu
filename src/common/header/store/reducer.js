import * as types from './type'
import { fromJS } from 'immutable';
const defalutState = fromJS(
    {
        focus: false,
        trending_list: [],
        trending_list_index:0,
        totalPage: 0 ,
        mouseIn: false
    }
)

export default (state = defalutState, action)=>{
    switch (action.type){
        case types.FOCUS:
            return state.set('focus',true)
        case types.BLUR:
            return state.set('focus',false)
        case types.SET_TRENDING_LIST:
            return state.set('trending_list',action.value)
        case types.SET_TRENDING_LIST_INDEX:
            let newIndex = action.value
            if( newIndex>state.get('totalPage')){
                newIndex= 1
            }
            return state.set('trending_list_index', newIndex )
        case types.SET_TOTAL_PAGE:
            return state.set('totalPage', action.value)
        case types.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case types.MOUSE_ENTER:
            return state.set('mouseIn', true)
        default:
            return state
    }
}