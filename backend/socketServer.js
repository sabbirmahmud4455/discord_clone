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

	serverStore.setSocketServerInstance(io)

	io.use((socket, next) => {
		authSocket(socket, next)
	})

	io.on('connection', (socket) => {
		newConnectionHandler(socket, io);
		socket.on('disconnect', () => {
			disconnectDandler(socket);
		})
	})

}

module.exports = {
	registerSocketServer,
}