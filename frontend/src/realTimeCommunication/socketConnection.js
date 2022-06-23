import io from 'socket.io-client';
import { setPendingFriendsInvitations } from '../store/actions/friendsActions';
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


}