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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            birthday: this.state.birthday != '' ? moment(this.state.birthday, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss') : null,
            age: age
        })
    }

    deleteUser = (e, id) => {
        e.preventDefault()
        this.props.deleteUser(id)
    }

    render () {
        console.log(this.props.users, this.props.errorsUsers)
        return (
            <div>
                <div>
                    <form>
                        <div className="form-group has-danger has-feedback">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control form-control-danger" name="firstname" id="firstname" placeholder="First Name" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})} />
                            {this.props.errorsUsers.firstname != null && (
                                <div className="invalid-feedback" style={{display: 'block'}}>
                                    {this.props.errorsUsers.firstname}
                                </div>
                            )}
                        </div>
                        <div className="form-group has-danger">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control form-control-danger" name="lastname" id="lastname" placeholder="Last Name" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})} />
                            {this.props.errorsUsers.lastname != null && (
                                <div className="invalid-feedback" style={{display: 'block'}}>
                                    {this.props.errorsUsers.lastname}
                                </div>
                            )}
                        </div>
                        <div className="form-group has-danger">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control form-control-danger" id="username" name="username" placeholder="Username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                            {this.props.errorsUsers.username != null && (
                                <div className="invalid-feedback" style={{display: 'block'}}>
                                    {this.props.errorsUsers.username}
                                </div>
                            )}
                        </div>
                        <div className="form-group has-danger">
                            <label htmlFor="datepicker">Birthday</label>
                            <input type="text" className="form-control form-control-danger" id="datepicker" placeholder="jj/mm/aaaa" value={this.state.birthday} onChange={(e) => this.setState({birthday: e.target.value})} />
                            {this.props.errorsUsers.birthday != null && (
                                <div className="invalid-feedback" style={{display: 'block'}}>
                                    {this.props.errorsUsers.birthday}
                                </div>
                            )}
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
    users: state.users,
    errorsUsers: state.errorsUsers,
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionsCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Users)