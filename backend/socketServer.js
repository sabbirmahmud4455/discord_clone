const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const disconnectDandler = require('./socketHandlers/disconnectHandler');

const registerSocketServer = (server) => {
	const io =  require('socket.io')(server, {
		cors: {
			origin: '*',
			methods: ['GET', 'POST'],
		}
	});

	io.use((socket, next) => {
		authSocket(socket, next)
	})

	io.on('connection', (socket) => {
		console.log('user connected');
		console.log(socket.id);

		newConnectionHandler(socket, io);
		socket.on('disconnect', () => {
			disconnectDandler(socket);
		})

	})

}

module.exports = {
	registerSocketServer,
}