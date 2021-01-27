import * as api from './ajaxRequest'


export const ADD_USER = "users/login";
export const USER_LOGGED_OUT ="users/logout"
export const REGISTER = "users/register";
export const ADMIN_CONNECTED = "users/admin";
export const FETCH_ALL_USERS = "users";
export const DELETE_USER = 'users/delete'

export const login = (userName, password) => async dispatch => {
    const result = await api.post('/users/login', { userName, password })
    if (!result) {
        console.log('something went wrong')
    } else {
        console.log(result)
        dispatch({ type: ADD_USER, user: result.data });
    }
};

export const register = (firstName, lastName, userName, password) => async dispatch => {
    const results = await api.post('/users/register', 
    { firstName, lastName, userName, password });
    console.log(results)
    if (!results) {
        console.log({message:'something went wrong'});
    } else {
        dispatch({ type: REGISTER, message: 'user added' })
    }
}
export const fetchAllUsers = () => async dispatch => {
    const response = await api.get('/users')
    if (!response) {
        console.log('something went wrong')
    } else {
        dispatch({ type: FETCH_ALL_USERS, users: response.data });
    }
};
export const logout = () => async dispatch  => {
    const result = await api.post("/users/logout", {});
	if (result.errors) {
		console.log(result.errors);
    }else{
        dispatch({type: USER_LOGGED_OUT});

    }
}

export const deleteUser = (id) => async dispatch => {
    const response = await api.get('/users')
    console.log(response)
    if (!response) {
        return ({ message: 'something went wrong' })
    } else {
        dispatch({ type: DELETE_USER, users: response.data })
        console.log('user deleted')
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

