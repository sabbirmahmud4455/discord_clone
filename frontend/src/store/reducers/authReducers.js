import { authActions } from '../actions/authActions';

const initState = {
	userDetails: null
}

const reducer = (state = initState, actions) => {
	switch (actions.type) {
		case authActions.SET_USER_DETAILS:
			return {
				...state,
				userDetails: actions.userDetails
			};
		default:
			return state;
	}
};

export default reducer