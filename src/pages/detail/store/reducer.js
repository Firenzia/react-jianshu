import * as types from './type'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    'title':'',
    'cont':''
})

export default (state= defaultState, action)=>{
    switch (action.type){
        case types.SET_DETAIL:
            let {title, cont} = action
            return state.merge({
                'title': title,
                'cont': cont
            })
        default:
            return state
    }
}