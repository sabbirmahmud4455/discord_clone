import io from 'socket.io-client';
import { updateDirectChatHistoryIfActive } from '../shared/utils/chat';
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from '../store/actions/friendsActions';
import { store } from '../store/store'

let socket = null;

export const ConnectWithSocketServer = (userDetails) => {

	const jwtToken = userDetails.token;

	socket = io('http://localhost:4000', {
		auth: {
			token: jwtToken,
		}
	});

	socket.on('connect', () => {
		console.log('successfully connected with socket.io server');
	});

	socket.on('friends-invitations', (data) => {
		const { pendingInvitations } = data;
		store.dispatch(setPendingFriendsInvitations(pendingInvitations));
	})

	socket.on('friends-list', (data)=> {
		const {friends } = data;
		store.dispatch(setFriends(friends));
	})

	socket.on('online-users', (data) => {
		const { onlineUsers} = data;
		store.dispatch(setOnlineUsers(onlineUsers));
	})

	socket.on('direct-chat-history', (data) => {
		updateDirectChatHistoryIfActive(data);
	})

}

export const sendDirectMessage = (data) => {
	socket.emit('direct-message', data);
}

export const getDirectChatHistory = (data) => {
	socket.emit('direct-chat-history', data);
}