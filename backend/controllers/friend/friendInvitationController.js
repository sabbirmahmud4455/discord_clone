
const User = require('../../models/User');
const friendInvitation = require('../../models/friend/friendInvitation');
const FriendsUpdate = require('../../socketHandlers/updates/friends')

const postInvite = async (req, res) => {
	const { targetMailAddress } = req.body;

	const { userId, mail } = req.user;

	//check if friend that we would like to invite is not user
	if (mail.toLowerCase() == targetMailAddress.toLowerCase()) {
		return res.status(409).send('Sorry. You cannot become friend with yourself')
	}

	const targetUser = await User.findOne({
		mail: targetMailAddress.toLowerCase()
	})

	if (!targetUser) {
		return res.status(404).send(`Friend of ${targetMailAddress} has not been found. Please check mail again`);
	}

	//check if invitation has been already sent
	const invitation_check = await friendInvitation.findOne({
		senderId: userId,
		receiverId: targetUser._id
	})

	if (invitation_check) {
		return res.status(409).send('Invitation has been already sent');
	}

	//check if the user which we would like to invite is already our friend
	const userAlreadyOurFriend = targetUser.friends.find(
		(friendId) => friendId.toString() === userId.toString()
	)

	if (userAlreadyOurFriend) {
		return res.status(409).send('Friend already added. Please check friends list');
	}

	//create new invitation
	const newInvitation = await friendInvitation.create({
		senderId: userId,
		receiverId: targetUser._id
	})

	//if invitation has been successfully created we would like to update friends invitations

	//send pending invitations update to specific user 
	if (newInvitation) {
		FriendsUpdate.updateFriendsPendingInvitations(targetUser._id.toString());
		return res.status(201).send('Invitation has been sent');
	}
}

const postAcceptInvite = async (req, res) => {
	try {
		const {id} = req.body;
		const {userId} = req.user;

		const invitation = await friendInvitation.findById(id);
		const {senderId, receiverId } = invitation;

		if (!invitation || receiverId != userId) {
			return res.status(404).send('Error occurred. Please try again')
		}

		// add friend to both users
		const senderUser = await User.findById(senderId);
		senderUser.friends = [...senderUser.friends, receiverId];

		const receiverUser = await User.findById(receiverId);
		receiverUser.friends = [...receiverUser.friends, senderId];

		await senderUser.save();
		await receiverUser.save();

		//delete both user invitation
		await friendInvitation.deleteMany({$or:[{senderId: senderId}, {senderId: receiverId}]});

		//update list of the friends if the users are online
		FriendsUpdate.updateFriends(receiverId.toString());
		FriendsUpdate.updateFriends(senderId.toString());

		//update pending invitation
		FriendsUpdate.updateFriendsPendingInvitations(receiverId.toString());
		FriendsUpdate.updateFriendsPendingInvitations(senderId.toString());

		return res.status(200).send('Invitation successfully added')

	} catch (error) {
		console.log(error);
		return res.status(500).send("Something went wrong please try again")
	}
}

const postRejectInvite = async (req, res) => {
	try {
		const {id } = req.body;
		const {userId} = req.user;

		const invitationExists = await friendInvitation.exists({_id: id});

		if (invitationExists) {
			await friendInvitation.findByIdAndDelete(id);
		}

		//update pending invitation
		FriendsUpdate.updateFriendsPendingInvitations(userId);

		return res.status(200).send('Invitation successfully rejected')

	} catch (error) {
		console.log(error);
		return res.status(500).send("Something went wrong please try again")
	}
}

module.exports = {
	postInvite,
	postAcceptInvite,
	postRejectInvite,
}