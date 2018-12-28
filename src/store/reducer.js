import { combineReducers } from 'redux-immutable';
import {reducer as  HomeReducer} from '../pages/home/store'

const rootReducer = combineReducers({
    home: HomeReducer
})

export default rootReducer