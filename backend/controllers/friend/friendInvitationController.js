
const user = require('../../models/User');
// const friendInvitation = require('../../models/friend/friendInvitation');

const posInvite = async (req, res) => {
	const { targetMailAddress } = req.body;

	const { userId, mail } = req.user;

	//check if friend that we would like to invite is not user
	if (mail.toLowerCase() == targetMailAddress.toLowerCase()) {
		return res.status(409).send('Sorry. You cannot become friend with yourself')
	}

	const targetUser = await user.findOne({
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
		return res.status(409).send('Invitation has been already sent')
	}

	//check if the user which we would like to invite is already our friend
	const userAlreadyOurFriend = targetUser.friends.find(
		(friendId) => friendId.toString() === userId.toString()
	)

	if (userAlreadyOurFriend) {
		res.status(409).send('Friend already added. Please check friends list');
	}

	return res.send(`controller is working for ${targetMailAddress}`);

}

module.exports = {
	posInvite
}