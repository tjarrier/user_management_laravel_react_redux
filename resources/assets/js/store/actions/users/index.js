import * as types from './types'
import axios from 'axios'

const URL_API = 'http://localhost:3000/api'

const searchResult = (data) => ({type: types.SEARCH_RESULT, data})

export const searchUsers = () => {
    return (dispatch) => {
        const url = `${URL_API}/allUsers`
        return fetch(url)
            .then(response => response.json())
            .then(response => {
                dispatch(searchResult(response))
            })
            .catch(err => {
                return err
            })
    }
}

export const addUser = (data) => {
    return dispatch => {
        const url = `${URL_API}/addUser`
        return axios({
            method: 'post',
            url: url,
            data: data
        })
            .then((response) => {
                dispatch({
                    type: types.ADD,
                    data: response.data.user
                })
            })
            .catch((error) => {
                dispatch({
                    type: types.ADD_ERROR,
                    data: error.response.data
                })
            })
    }
}

export const deleteUser = (data) => {
    return dispatch => {
        const url = `${URL_API}/deleteUser`
        return axios.delete(url, {
            data: {id: data}
        })
            .then((response) => {
                dispatch({
                    type: types.DELETE,
                    data: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}