/* @flow */

import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'

// Components
import Home from '../containers/Home'
import Users from '@containers/Users'

const routes = (
    <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
    </App>
)

 export default routes