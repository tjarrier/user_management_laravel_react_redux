/* @flow */

import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './router'

// CSS
//import 'bootstrap/dist/css/bootstrap.css';
//import './assets/css/index.css';

const store = configureStore()

const App = () => (
    <Provider store={store}>
        <Router history={history} children={routes} />
    </Provider>
)

render(
  <App />,
  document.getElementById('root')
);
