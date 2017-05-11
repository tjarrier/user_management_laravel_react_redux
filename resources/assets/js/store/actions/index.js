/* @flow */

import { routerActions } from 'react-router-redux'
import * as counterActions from './counter'

export const ActionsCreators = {
    routerActions,
    ...counterActions,
}