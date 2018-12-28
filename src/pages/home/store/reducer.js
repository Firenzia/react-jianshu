import { fromJS } from 'immutable';
const defaultState = fromJS({
    name:'si'
})

export default (state=defaultState, action)=>{
    return state
}