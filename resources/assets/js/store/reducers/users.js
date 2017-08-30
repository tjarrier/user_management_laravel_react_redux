import * as types from '../actions/users/types'
import _ from 'lodash'

const initialState = {
    users: [],
    errorsUsers: {
        firstname: null,
        lastname: null,
        username: null,
        birthday: null
    }
}

export const users = (state = initialState.users, action) => {
    switch (action.type) {
        case types.SEARCH_RESULT:
            console.log(state, '****************')
            return [
                ...state,
                ...action.data.users
            ]
        case types.ADD:
            console.log(action, '$$$$$$$$$$$$$$$$$$$$$$$$')
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

export const errorsUsers = (state = initialState.errorsUsers, action) => {
    switch (action.type) {
        case types.ADD_ERROR:
            return {
                firstname: typeof action.data.firstname === 'object' ? action.data.firstname[0] : null,
                lastname: typeof action.data.lastname === 'object' ? action.data.lastname[0] : null,
                username: typeof action.data.username === 'object' ? action.data.username[0] : null,
                birthday: typeof action.data.birthday === 'object' ? action.data.birthday[0] : null
            }
        default:
            return state
    }
}