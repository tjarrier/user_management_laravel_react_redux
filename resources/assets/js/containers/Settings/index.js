/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionsCreators} from '../../store/actions'

class Settings extends Component {
    render () {
        return (
            <div>
                <p>
                    On this page, we will could add a list of student and we will could change it at all moment.
                </p>
            </div>
        )
    }

    static propTypes = {
        counter: PropTypes.number
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionsCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Settings)