import { fromJS } from 'immutable';
import * as types from './type'

const defaultState = fromJS({
    articleList:[
    ],
    isShowScroll: false
})

export default (state=defaultState, action)=>{
    let {value} = action
    switch (action.type){
        case types.SET_ARTICLE_DATA:
            return state.merge({'articleList': state.get('articleList').concat(value)})
        case types.SET_HOME_DATA:
            return state.set('articleList', action.value)
        case types.SET_SHOW_SCROLL_STATUS:
            return state.set('isShowScroll', action.value)
        default:
            return state;
    }
}