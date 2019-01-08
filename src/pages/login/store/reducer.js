import {fromJS} from 'immutable'
import * as types from './type'

const defaultState = fromJS({
    login: false
})

export default (state=defaultState, action) =>{
    if(action.type === types.CHANGE_LOGIN_STATUS){
        return state.set('login',action.value)
    }else{
        return state
    }
}
