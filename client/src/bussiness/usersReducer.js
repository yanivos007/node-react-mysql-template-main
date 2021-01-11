export const USER_LOGGED_IN = "users/login";
export const USER_LOGGED_OUT = "users/logout";
export const DEVELOPERS_FETCHED = "users/developers-fetched";

const initialState ={
    currentUser: null ,
    admin: null
}
export default function usersReducer(state = initialState, action )=>{
    switch (action.type) {
        case ACTION.ADD_USER:
            return{...state, currentUser: action.user}
        case ACTION.USER_LOGGED_OUT:
            return initialState
        case ACTION.ADD_USER:
            return{...state, admin: action.admin}
            default:
                return state;
    }
}


