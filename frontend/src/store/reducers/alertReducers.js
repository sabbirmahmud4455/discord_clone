import alertActions from '../actions/alertActions';

const initState = {
	showAlertMessage: null,
	alertMessageContent: null
}

const reducer = (state = initState, actions) => {
	switch (actions.type) {
		case alertActions.OPEN_ALERT_MESSAGE:
			return {
				...state,
				showAlertMessage: true,
				alertMessageContent: actions.content
			};
		case alertActions.CLOSE_ALERT_MESSAGE:
			return {
				...state,
				showAlertMessage: false,
				alertMessageContent: null
			};
		default:
			return state;
	}
};

export default reducer