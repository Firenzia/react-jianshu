import * as types from './type'
import axios from 'axios';

export const getFocusAction =()=>(
    {
        type:types.FOCUS
    }
)

export const getBlurAction = ()=>(
    {
        type:types.BLUR
    }
)

export const setTrendingList = (data)=>(
    {
        type: types.SET_TRENDING_LIST,
        value: data
    }
)

export const setTrendingListIndex = (index)=>(
    {
        type: types.SET_TRENDING_LIST_INDEX,
        value: index
    }
)

export const setTotalPage = (count)=>(
    {
        type:types.SET_TOTAL_PAGE,
        value: count
    }
)

export const setMouseIn = () =>(
   {
       type: types.MOUSE_ENTER
   }
)

export const setMouseOut = () =>(
    {
        type: types.MOUSE_LEAVE
    }
 )

// 获取aciton 得到的不是一个对象，而是一个函数，里面处理了异步逻辑
export const initTrendingList = ()=>{
    return (dispatch)=>{
        axios.get('/api/trending_search.json').then(
            (res)=>{
               let list = res.data.data
               dispatch(setTrendingList(list))
               dispatch(setTrendingListIndex(1))
               dispatch(setTotalPage(Math.ceil(list.length/10)))
            }
        )
    }
}