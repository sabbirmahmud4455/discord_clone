const bcrypt = require("bcryptjs/dist/bcrypt");
const JWT = require("jsonwebtoken");
const User = require("../../models/User");
const Response = require('../../utils/Response');

const Register = async (req, res)=> {
	console.log(req);
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

		const token = JWT.sign(
			{
				userId: user._id,
				mail
			},
			process.env.TOKEN_KEY,
			{
				expiresIn: "24h",
			}
		);
		
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