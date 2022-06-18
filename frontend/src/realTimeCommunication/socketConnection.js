import io from 'socket.io-client';

let socket = null;

export const ConnectWithSocketServer = (userDetails) => {

	const jwtToken = userDetails.token;

	console.log(jwtToken);
	socket = io('http://localhost:4000', {
		auth: {
			token: jwtToken,
		}
	});

	socket.on('connect', () => {
		console.log('successfully connected with socket.io server');
		console.log(socket.id);
	})
}