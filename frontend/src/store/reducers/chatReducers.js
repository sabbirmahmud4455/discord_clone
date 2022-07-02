import { chatsActions } from "../actions/chatActions";

const initState = {
	chosenChatDetails: null,
	chatType: null,
	messages: [],
}

const reducer = (state = initState, action) => {

	switch (action.type) {
		case chatsActions.SET_CHOSEN_CHAT_DETAILS:
			return {
				...state,
				chosenChatDetails: action.chatDetails,
				chatType: action.chatType,
				messages: [],

			}
		case chatsActions.SET_MESSAGES:
			return {
				...state,
				messages: action.messages,
			}
			
	
		default:
			return {
				state
			}
	}


}

export default reducer;