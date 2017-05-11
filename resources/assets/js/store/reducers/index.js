import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import * as counterReducer from './counter'

export default combineReducers({
    routing,
    ...counterReducer,
})