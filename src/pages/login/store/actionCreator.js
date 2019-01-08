import axios from 'axios'
import * as types from './type'

export const setLoginStatus = (status) =>({
    type: types.CHANGE_LOGIN_STATUS,
    value: status
})

export const login = ()=>{
    return (dispatch)=>{
        axios.get('/api/login.json').then(
            res=>{
                if(res.data.success === true ) dispatch(setLoginStatus(true))
            }
        )
    }
}