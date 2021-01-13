import * as ACTIONS from './usersActions';

const initialState ={
    currentUser: null ,
    admin: null
}
const usersReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ACTIONS.ADD_USER:
            return{...state, currentUser: action.user}
        case ACTIONS.REGISTER:
            return initialState
        case ACTIONS.ADD_USER:
            return{...state, admin: action.admin}
            default:
                return state;
    }
}

export default usersReducer;