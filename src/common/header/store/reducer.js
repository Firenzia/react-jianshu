import * as types from './type'
import { fromJS } from 'immutable';
const defalutState = fromJS(
    {
        focus: false
    }
)

export default (state = defalutState, action)=>{
    switch (action.type){
        case types.FOCUS:
            return state.set('focus',true)
        case types.BLUR:
            return state.set('focus',false)
        default:
            return state
    }
}