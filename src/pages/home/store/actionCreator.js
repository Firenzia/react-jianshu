import * as types from './type'
import axios from 'axios';

export const setArticleInfo = (list)=>({
    type: types.SET_ARTICLE_DATA,
    value: list
})

export const getMoreArticle = ()=>{
    // return (dispatch)=>{
    //     console.log('here', axios)
    //     axios.get('/api/homeList.json').then(
    return (dispatch)=>{
        console.log(axios)
        axios.get('/api/trending_search.json').then(
            (res)=>{
                let list = res.data.data
                dispatch(setArticleInfo(list))
            }
        )
    }
}