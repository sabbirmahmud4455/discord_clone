import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducers from '../store/reducers/authReducers'
import alertReducers from '../store/reducers/alertReducers'
import friendsReducers from '../store/reducers/friendsReducers'

const rootReducer = combineReducers({
	auth: authReducers,
	alert: alertReducers,
	friends: friendsReducers
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))