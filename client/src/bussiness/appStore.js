import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import usersReducer from './usersReducer';
import vacationsReducer from './vacationsReducer';

const applicationStore = createStore(
    combineReducers(
		{
			users: usersReducer,
			vacations: vacationsReducer
		}),
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)
export default applicationStore;