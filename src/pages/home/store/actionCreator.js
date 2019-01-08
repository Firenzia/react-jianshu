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