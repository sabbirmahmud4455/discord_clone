const User = require('../../models/User');
const friendInvitation = require('../../models/friend/friendInvitation');
const serverStore = require('../../serverStore');

const updateFriendsPendingInvitations = async (userId) => {

	try {
		const pendingInvitations = await friendInvitation.find({
			receiverId: userId
		}).populate('senderId', '_id username mail');

		// find all active connections of specific user id
		const receiverList = serverStore.getActiveUsers(userId);

		const io = serverStore.getSocketServerInstance();

		receiverList.forEach((receiverSocketId) => {
			io.to(receiverSocketId).emit('friends-invitations', {
				pendingInvitations: pendingInvitations ? pendingInvitations : [],
			})
		} ) 


	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	updateFriendsPendingInvitations,
}