import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducers from '../store/reducers/authReducers'
import alertReducers from '../store/reducers/alertReducers'

const rootReducer = combineReducers({
	auth: authReducers,
	alert: alertReducers
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))