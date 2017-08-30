import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import * as counterReducer from './counter'
import * as usersReducer from './users'

export default combineReducers({
    routing,
    ...usersReducer,
    ...counterReducer,
})