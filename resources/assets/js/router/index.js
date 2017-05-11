/* @flow */

import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'

// Components
import Home from '../containers/Home'
import Lycee from '../containers/Lycee'
import Settings from '../containers/Settings'
import Contact from '../containers/Contact'

const routes = (
    <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/chooseLycee" component={Lycee} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/contact" component={Contact} />
    </App>
)

 export default routes