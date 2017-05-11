/* @flow */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }

    toggleNav () {
        this.refs.navBarCollapse.style.display = this.refs.navBarCollapse.style.display === "block" ? "none" : "block"
    }

    render () {
        return (
            <nav className="navbar navbar-inverse bg-inverse sticky-top navbar-toggleable-md">
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" onClick={() => this.toggleNav()}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">CCFF</Link>
                    <div ref="navBarCollapse" className="collapse navbar-collapse" id="#test">
                        <ul className="navbar-nav ml-auto">
                            <li className={"nav-item " + (this.props.uri === '' ? 'active' : '')}>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className={"nav-item " + (this.props.uri === 'chooseLycee' ? 'active' : '')}>
                                <Link className="nav-link" to="/chooseLycee">Lycée</Link>
                            </li>
                            <li className={"nav-item " + (this.props.uri === 'settings' ? 'active' : '')}>
                                <Link className="nav-link" to="/settings">Paramètres</Link>
                            </li>
                            <li className={"nav-item " + (this.props.uri === 'contact' ? 'active' : '')}>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar
