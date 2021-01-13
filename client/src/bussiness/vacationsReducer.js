export const VACATION_ADDED = "vacation/post";
export const VACATION_DELETED = "vacation/delete";

const initialState ={
    vacationsList=[]
}
 const usersReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ACTION.VACATION_ADDED:
            return{...state, vacationsList: action.vacation}
        case ACTION.VACATION_DELETED:
            return {...state  }
            default:
                return state;
    }
}
export default usersReducer;

