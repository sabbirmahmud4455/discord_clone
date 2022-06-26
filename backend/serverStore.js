const connectedUsers = new Map();
let io = null;

const setSocketServerInstance = (ioInstance) => {
	io = ioInstance;
}

const getSocketServerInstance = () => {
	return io;
}

const addNewConnectedUser = ({socketId, userId }) => {
	if (!connectedUsers.has(socketId)) {
		connectedUsers.set(socketId, { userId });
	}
}

const removeConnectedUser = (socketId) => {
	if (connectedUsers.has(socketId)) {
		connectedUsers.delete(socketId);
	}
}

const getActiveUsers = (userId) => {
	const activeConnections = [];

	connectedUsers.forEach(function (value, key) {
		if (value.userId === userId) {
			activeConnections.push(key)
		}
	})

	return activeConnections;
}

module.exports = {
	addNewConnectedUser,
	removeConnectedUser,
	getActiveUsers,
	setSocketServerInstance,
	getSocketServerInstance,
}