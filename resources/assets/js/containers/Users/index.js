import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionsCreators} from '../../store/actions'

import _ from 'lodash'
import moment from 'moment'

class Users extends Component {
    constructor (props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            birthday: '',
        }
    }

    componentWillMount () {
        this.props.searchUsers()
    }

    addUser = (e) => {
        e.preventDefault()
        let age
        if (this.state.birthday != '') {
            age = Math.round(moment().diff(moment(this.state.birthday, 'DD/MM/YYYY'), 'days') / 365, 0)
        } else {
            age = null
        }
        console.log(moment(this.state.birthday, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss'))
        this.props.addUser({
            firstname: this.state.firstname != '' ? this.state.firstname : 'Non renseigné' ,
            lastname: this.state.lastname != '' ? this.state.lastname : 'Non renseigné',
            username: this.state.username != '' ? this.state.username : 'Non renseigné',
            birthday: this.state.birthday != '' ? moment(this.state.birthday, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss') : null,
            age: age
        })
    }

    deleteUser = (e, id) => {
        e.preventDefault()
        this.props.deleteUser(id)
    }

    render () {
        // console.log(this.props)
        return (
            <div>
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" id="firstname" placeholder="First Name" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" placeholder="Last Name" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="datepicker">Birthday</label>
                            <input type="text" className="form-control" id="datepicker" placeholder="jj/mm/aaaa" value={this.state.birthday} onChange={(e) => this.setState({birthday: e.target.value})} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.addUser}>Ajouter</button>
                    </form>
                </div>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Birthday</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(this.props.users, (user, index) => (
                            <tr key={index}>
                                <th scope="row">{user.id}</th>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.username}</td>
                                <td>{user.birthday != null ? moment(user.birthday).format('DD/MM/YYYY') : 'Non renseigné'}</td>
                                <td>{user.age != null ? user.age : 'Non renseigné'}</td>
                                <td>
                                    <form action="" method="post">
                                        <input type="hidden" name="_method" value="delete" />
                                        <button type="button" className="btn btn-danger" onClick={(e) => this.deleteUser(e, user.id)}>
                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }


}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionsCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Users)