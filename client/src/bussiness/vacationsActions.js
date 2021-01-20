import * as api from './ajaxRequest'


export const VACATION_ADDED = "/vacations/post";
export const VACATION_DELETED = "/vacations/delete";
export const FETCH_VACATIONS ="/vacations"

export const addVacation = (description, destination, price, dates, followers ) => async dispatch => {
    const response = await api.post('/vacations', 
    { description, destination, price, dates, followers })
        if(!response){
            console.log('something went wrong')
        }else{
            dispatch({type:VACATION_ADDED, vacations: response.data });
        }
    };
export const fetchAll = () => async dispatch => {
    const response = await api.get('/vacations')
        if(!response){
            console.log('something went wrong')
        }else{
            dispatch({type: FETCH_VACATIONS, vacations: response.data });
        }
    };

    // export const deleteVacation = (index) => async dispatch => {

    