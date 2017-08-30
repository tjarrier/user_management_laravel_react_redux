import * as types from '../actions/users/types'
import _ from 'lodash'

const initialState = {
    users: []
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_RESULT:
            return [
                ...state.users,
                ...action.data.users
            ]
        case types.ADD:
            return [
                ...state,
                {...action.data}
            ]
        case types.DELETE:
            let users = _.filter(state, (item) => {
                return item.id != action.data
            })
            return users
        default:
            return state
    }
}