/* @flow */

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducer from './reducers'

const loggerMiddleware = createLogger()


export const history = createHistory()


export const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            routerMiddleware(history)
        ),
    )
    return createStore(reducer, initialState, enhancer)
}

// export configureStore