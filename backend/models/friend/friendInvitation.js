const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../User');


const friendsInvitationSchema = new Schema({
	senderId:{
		type: Schema.Types.ObjectId,
		ref: User,
	},
	receiverId: {
		type: Schema.Types.ObjectId,
		ref: User,
	}
})

module.exports = mongoose.model('friendInvitation', friendsInvitationSchema);