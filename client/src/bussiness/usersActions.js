import * as api from './ajaxRequest'


export const ADD_USER = "users/login";
export const REGISTER = "users/register";
export const ADMIN_CONNECTED = "users/admin";
// import axios from 'axios'

export const login = (userName, password) => async dispatch => {
    const result = await api.post('users/login', { userName, password })
        if(!result){
            console.log('something went wrong')
        }else{
            dispatch({type:ADD_USER, user: result.data });
        }
    };

export const register = (firstName, lastName, userName, password) => async dispatch => {
    const result = await api.post('users/register', {firstName, lastName, userName, password});
        if(!result){
            console.log(result.errors);
        }else{
            dispatch({type: REGISTER, user: result.data} )
            console.log('user added')
            }
    }

    export const adminConnected= async ()=> {
     const  response= await fetch('/users/admin')
        if(response){
            const currentUser = response.data;
         console.log(currentUser)
        }else{
            console.log("error")
        }
    }

