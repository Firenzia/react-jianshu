import * as types from './type'
import axios from 'axios'

export const setDetail = (title, cont)=>({
    type: types.SET_DETAIL,
    title,
    cont 
})

export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json').then(
            res=>{
                let {title, content} = res.data.data
                dispatch(setDetail(title, content))
            }
        )
    }
}