import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducers from './reducers/authReducers';
import alertReducers from './reducers/alertReducers';
import friendsReducers from './reducers/friendsReducers';
import chatReducers from './reducers/chatReducers'

const rootReducer = combineReducers({
	auth: authReducers,
	alert: alertReducers,
	friends: friendsReducers,
	chat: chatReducers,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))