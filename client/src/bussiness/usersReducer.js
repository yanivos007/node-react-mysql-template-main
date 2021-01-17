import * as ACTIONS from './usersActions';

const initialState = {
    currentUser: null ,
    loggedIn: false
}
const usersReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ACTIONS.ADD_USER:
            return{...state, currentUser: action.user , loggedIn: true};
        case ACTIONS.REGISTER:
            return{...state, currentUser: action.user , loggedIn: true};
        case ACTIONS.ADMIN_CONNECTED:
            return{...state, admin: action.admin}
            default:
                return state;
    }
}

export default usersReducer;