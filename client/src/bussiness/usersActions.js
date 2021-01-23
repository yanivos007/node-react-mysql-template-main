import * as api from './ajaxRequest'


export const ADD_USER = "users/login";
export const REGISTER = "users/register";
export const ADMIN_CONNECTED = "users/admin";
export const FETCH_ALL_USERS = "users";
export const DELETE_USER = 'users/delete'
// import axios from 'axios'

export const login = (userName, password) => async dispatch => {
    const result = await api.post('users/login', { userName, password })
    if (result) {
        console.log(result)
        console.log('something went wrong')
    } else {
        console.log(result)
        dispatch({ type: ADD_USER, user: result.data });
    }
};

export const register = (firstName, lastName, userName, password) => async dispatch => {
    const results = await api.post('users/register', { firstName, lastName, userName, password });
    console.log(results)
    if (!results) {
        console.log(results.errors);
    } else {
        dispatch({ type: REGISTER, user: results.data })
        console.log('user added')
    }
}
export const fetchAllUsers = () => async dispatch => {
    const response = await api.get('/users')
    if (!response) {
        console.log(response)
        console.log(response.data)
        console.log('something went wrong')
    } else {
        dispatch({ type: FETCH_ALL_USERS, users: response.data });
    }
};

export const deleteUser = (userName) => async dispatch => {
    const response = await ('/users')
    if (!response) {
        return ({ message: 'something went wrong' })
    } else {
        dispatch({ type: DELETE_USER, users: response.data })
    }
}

export const adminConnected = async () => {
    const response = await fetch('/users/admin')
    if (response) {
        const currentUser = response.data;
        console.log(currentUser)
    } else {
        console.log("error")
    }
}

