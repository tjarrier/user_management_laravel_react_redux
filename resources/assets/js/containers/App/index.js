/* @flow */

import React from 'react'

// Components
// import NavBar from '@components/NavBar'
import NavBar from '@components/NavBar'


const App = (props) => {
    return (
        <div>
            <div>
                <NavBar uri={document.URL.split('/')[3]} />
            </div>
            <div className="container mt-3">
                {props.children}
            </div>
        </div>
    )
}

export default App