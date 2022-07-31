const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../../models/User");
const JWT = require("jsonwebtoken");
const Response = require('../../utils/Response');

const Login = async (req, res) => {
	const response = new Response(res)

	try {
		const {mail, password} = req.body;

		const user = await User.findOne({mail: mail.toLowerCase()});

		if (user && (await bcrypt.compare(password, user.password))) {
			
			//token generate
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

			return response.ok({
				userDetails:{
					mail: user.mail,
					token: token,
					userName: user.username,
					_id: user._id
				}
			})

		}

		return response.notFound("Invalid credentials Pleas try again")

	} catch (error) {
		return response.internalServerError(error)
	}


}

module.exports = Login;