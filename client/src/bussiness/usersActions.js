import * as api from './ajaxRequest'

export const USER_LOGGED_IN = "users/login";
export const USER_REGISTER = "users/register";
export const ADMIN_CONNECTED = "users/admin";
// import axios from 'axios'

export const login = (userName, password) => async dispatch => {
    const result = await api.post('.components/login', { userName, password })
        if(!result){
            console.log('something went wrong')
        }else{
            dispatch({type:USER_LOGGED_IN, user: result.data });
        }
    };

export const register = (firstName, lastName, userName, password) => async dispatch => {
    const result = await api.post('./components/register', {firstName, lastName, userName, password});
        if(!result){
            console.log(result.errors);
        }else{
            console.log('user added')
            }
    }

    export const adminConnected= async ()=> {
        await fetch('/user')
    }

