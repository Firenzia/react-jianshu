import { combineReducers } from 'redux-immutable';
import {reducer as  HomeReducer} from '../pages/home/store'
import {reducer as  HeaderReducer} from '../common/header/store'
import {reducer as DetailReducer} from '../pages/detail/store'
import {reducer as LoginReducer} from '../pages/login/store'

const rootReducer = combineReducers({
    home: HomeReducer,
    header: HeaderReducer,
    detail: DetailReducer,
    login: LoginReducer
})

export default rootReducer