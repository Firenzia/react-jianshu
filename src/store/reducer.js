import { combineReducers } from 'redux-immutable';
import {reducer as  HomeReducer} from '../pages/home/store'
import {reducer as  HeaderReducer} from '../common/header/store'
import {reducer as DetailReducer} from '../pages/detail/store'

const rootReducer = combineReducers({
    home: HomeReducer,
    header: HeaderReducer,
    detail: DetailReducer
})

export default rootReducer