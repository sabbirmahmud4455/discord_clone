const connectedUsers = new Map();

const addNewConnectedUser = ({socketId, userId }) => {
	if (!connectedUsers.has(socketId)) {
		connectedUsers.set(socketId, { userId });
	}

	console.log('new connected users');
	console.log(connectedUsers);
}

const removeConnectedUser = (socketId) => {
	if (connectedUsers.has(socketId)) {
		connectedUsers.delete(socketId);
		
		console.log('disconnected users');
		console.log(connectedUsers);

	}
}

module.exports = {
	addNewConnectedUser,
	removeConnectedUser,
}