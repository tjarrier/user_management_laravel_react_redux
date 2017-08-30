import { routerActions } from 'react-router-redux'
import * as counterActions from './counter'
import * as usersActions from './users'

export const ActionsCreators = {
    routerActions,
    ...usersActions,
    ...counterActions,
}