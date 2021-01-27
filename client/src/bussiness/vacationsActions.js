import * as api from './ajaxRequest'


export const VACATION_ADDED = "vacations/post";
export const VACATION_DELETED = "vacations/delete";
export const FETCH_VACATIONS ="vacations"
export const FOLLOW_VACATION = "vacations/follow"

export const addVacation = (description, destination, price, date, toDate ) => async dispatch => {
    
        const results = await api.post('/vacations/post', { description, destination, price, date, toDate })
        console.log(results)
        if(!results){
            console.log({message:'something went wrong'})
        }else{
            console.log('vacations added')
            dispatch({type : VACATION_ADDED, vacations: results.data, message: 'vacation added' });
        }

    };

export const fetchAll = () => async dispatch => {
    try{

    const response = await api.get('/vacations');
        if(!response){
            console.log('something went wrong')
        }else{
            dispatch({type: FETCH_VACATIONS, vacations: response.data, message: 'fetch all' });
        }
    }catch(err){
        console.log('not getting any response')
    }
    };

    export const follow = (vacation) => async dispatch => {
        try{
            const response = await api.get('/vacations',);
            if(!response){
                console.log('something went wrong')
            }else{
                dispatch({type: FOLLOW_VACATION, vacation: response.data, message: 'following this vacation' });
            }
        }catch(err){
            console.log('not getting any response')
        }
        };
        
    
    // export const deleteVacation = (index) => async dispatch => {

    