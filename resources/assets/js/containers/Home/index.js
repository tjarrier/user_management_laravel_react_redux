/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionsCreators} from '../../store/actions'

class Home extends Component {
    render () {
        return (
            <div>
                <p>
                    This is the Home page. Here we'll have informations on application, and other feature depending on what you want
                </p>
            </div>
        )
    }

    static propTypes = {
        counter: PropTypes.number
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionsCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)