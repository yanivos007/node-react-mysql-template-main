import * as ACTIONS from './usersActions';

const initialState = {
    currentUser: null ,
    loggedIn: false,
    usersList: []
}
const usersReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ACTIONS.ADD_USER:
            return{...state, currentUser: action.user , loggedIn: true};
        case ACTIONS.REGISTER:
            return{...state, currentUser: action.user , loggedIn: true};
        case ACTIONS.ADMIN_CONNECTED:
            return{...state, admin: action.admin}
            case ACTIONS.FETCH_ALL_USERS:
                return{...state, usersList: action.users}
                // case ACTIONS_DELETE_USER:
                //     return usersList.filter(user=> user.id !==user)
            default:
                return state;
    }
}

export default usersReducer;