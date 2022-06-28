const User = require('../../models/User');
const friendInvitation = require('../../models/friend/friendInvitation');
const serverStore = require('../../serverStore');

const updateFriendsPendingInvitations = async (userId) => {

	try {
		// find all active connections of specific user id
		const receiverList = serverStore.getActiveUsers(userId);

		if (receiverList.length > 0) {
			const pendingInvitations = await friendInvitation.find({
				receiverId: userId
			}).populate('senderId', '_id username mail');

			const io = serverStore.getSocketServerInstance();

			receiverList.forEach((receiverSocketId) => {
				io.to(receiverSocketId).emit('friends-invitations', {
					pendingInvitations: pendingInvitations ? pendingInvitations : [],
				})
			})
		}

	} catch (error) {
		console.log(error);
	}
}

const updateFriends = async (userId) => {
	try {
		//find active connections of specific id (online user)
		const receiverList = serverStore.getActiveUsers(userId);

		if (receiverList.length > 0) {
			const user = await User.findById(userId).populate('friends', '_id username mail');

			if (user) {
				const friendsList = user.friends.map(f => {
					return {
						id: f._id,
						mail: f.mail,
						username: f.username
					}
				})

				//get io serve instance
				const io = serverStore.getSocketServerInstance();
				receiverList.forEach((receiverSocketId) => {
					io.to(receiverSocketId).emit('friends-list', {
						friends: friendsList ? friendsList : [],
					})
				})
			}
		}

	} catch (error) {
		console.log(error);
	}
}


module.exports = {
	updateFriendsPendingInvitations,
	updateFriends,
}