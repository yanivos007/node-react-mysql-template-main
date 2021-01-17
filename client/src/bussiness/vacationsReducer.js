import * as ACTIONS from './vacationsActions';


const initialState = {
    vacationsList: [],
};
 const vacationsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ACTIONS.VACATION_ADDED:
            return{...state, vacationsList: action.vacations}
        case ACTIONS.FETCH_VACATIONS:
            return{...state}
        // case ACTIONS.VACATION_DELETED:
        //     return {...state  }
            default:
                return state;
    }
}
export default vacationsReducer;

