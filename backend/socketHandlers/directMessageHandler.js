
const Conversation = require("../models/conversation");
const Message = require("../models/message");
const chatUpdates = require("./updates/chat");


const directMessageHandler = async (socket, data) => {
	try {
		const {userId} = socket.user;
		const {receiverUserId, content} = data;

		//create a new message
		const message = await Message.create({
			content: content,
			authorId: userId,
			date: new Date,
			type: "DIRECT",
		});

		// find if conversation exist with this tow users - if not create new
		const conversation = await Conversation.findOne({
			participants: { $all: [userId, receiverUserId] },
		})

		if (conversation) {
			conversation.messages.push(message._id);
			await conversation.save();

			//perform and update to sender and receiver if is online
			chatUpdates.updateChatHistory(conversation._id.toString());
		} else {
			//create new conversation of not online
			const newConversation = await Conversation.create({
				messages: [message._id],
				participants: [userId, receiverUserId],
			})

			//perform and update to sender and receiver if is online
			chatUpdates.updateChatHistory(conversation._id.toString());
		}

	} catch (err) {
		console.log(err);
	}
}

module.exports = directMessageHandler;
