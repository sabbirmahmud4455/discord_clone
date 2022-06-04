const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../../models/User");
const Response = require('../../utils/Response');

const Register = async (req, res)=> {
	const response = new Response(res);
	try {
		
		const {username, mail, password} = req.body

		const userExists = await User.exists({mail: mail.toLowerCase()})
		if (userExists) {
			return response.conflict('Mail already exists')
		}

		//encrypt password
		const encryptPassword = await bcrypt.hash(password, 10);

		//create user
		const user = await User.create({
			username: username,
			mail: mail.toLowerCase(),
			password: encryptPassword
		})

		const token = 'JWT TOKEN';
		
		return response.created({
			userDetails:{
				mail: user.mail,
				token: token,
				userName: user.username
			}
		})

	} catch (error) {
		return response.internalServerError("Error occurred, Please try again")
	}
}

module.exports = Register;