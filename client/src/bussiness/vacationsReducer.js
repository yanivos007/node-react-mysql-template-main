import {VACATION_ADDED, FETCH_VACATIONS,  }from './vacationsActions';
import { FOLLOW_VACATION }from './vacationsActions';

const initialState = {
    vacationsList: [],
    // follow: []
};
 const vacationsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case VACATION_ADDED:
            return {...state, vacationsList: [...state.vacationsList, action.vacation],  }
            case FETCH_VACATIONS:
            return {...state, vacationsList: action.vacation}
            case FOLLOW_VACATION:
          return{...state, follow: action.vacation ++ }
            default:
                return state;
    }
}
export default vacationsReducer;

