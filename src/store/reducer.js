import { combineReducers } from 'redux-immutable';
import {reducer as  HomeReducer} from '../pages/home/store'
import {reducer as  HeaderReducer} from '../common/header/store'

const rootReducer = combineReducers({
    home: HomeReducer,
    header: HeaderReducer
})

export default rootReducer