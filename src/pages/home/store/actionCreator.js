import * as types from './type'
import axios from 'axios';
import { fromJS } from 'immutable';


export const setArticleInfo = (list)=>({
    type: types.SET_ARTICLE_DATA,
    value: fromJS(list)
})

export const getMoreArticle = ()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then(
            (res)=>{
                let list = res.data.data
                dispatch(setArticleInfo(list))
            }
        )
    }
}

export const setHomeData = (list)=>({
    type: types.SET_HOME_DATA,
    value: fromJS(list)
})

export const getHomeData = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then(
            res =>{
                let {articleList} = res.data.data
                dispatch(setHomeData(articleList))
            }
        )
    }
}

export const setShowScrollStatus = (value)=>({
    type: types.SET_SHOW_SCROLL_STATUS,
    value
})