const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const disconnectDandler = require('./socketHandlers/disconnectHandler');
const serverStore = require('./serverStore');

const registerSocketServer = (server) => {
	const io =  require('socket.io')(server, {
		cors: {
			origin: '*',
			methods: ['GET', 'POST'],
		}
	});

	serverStore.setSocketServerInstance(io);

	const emitOnlineUsers = () => {
		const onlineUsers = serverStore.getOnlineUsers();
		io.emit('online-users', {onlineUsers})

	}

	io.use((socket, next) => {
		authSocket(socket, next)
	})

	io.on('connection', (socket) => {
		newConnectionHandler(socket, io);
		emitOnlineUsers();

		socket.on('disconnect', () => {
			disconnectDandler(socket);
		})
	});
	
	setInterval(() => {
		emitOnlineUsers()
	}, [1000 * 30]);

}

module.exports = {
	registerSocketServer,
}