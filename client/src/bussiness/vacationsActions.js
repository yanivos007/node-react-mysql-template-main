import * as api from './ajaxRequest'


export const VACATION_ADDED = "/vacations/post";
export const VACATION_DELETED = "/vacations/delete";
export const FETCH_VACATIONS ="/vacations"

export const addVacation = (description, destination, price, dates, followers ) => async dispatch => {
    const result = await api.post('vacations/post', { description, destination, price, dates, followers })
        if(!result){
            console.log('something went wrong')
        }else{
            dispatch({type:VACATION_ADDED, vacation: result.data });
        }
    };
export const fetchAll = () => async dispatch => {
    const result = await api.get('api/vacations')
        if(!result){
            console.log('something went wrong')
        }else{
            dispatch({type:FETCH_VACATIONS, vacation: result.data });
            console.log(result)
        }
    };

    // export const deleteVacation = (index) => async dispatch => {

    