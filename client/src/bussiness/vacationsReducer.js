import * as ACTIONS from './vacationsActions';


const initialState = {
    vacationsList: [],
};
 const vacationsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ACTIONS.VACATION_ADDED:
            return{...state, vacationsList: [...state, action.test] }
        case ACTIONS.FETCH_VACATIONS:
            return{...state, vacationsList: action.vacations}
      
            default:
                return state;
    }
}
export default vacationsReducer;

