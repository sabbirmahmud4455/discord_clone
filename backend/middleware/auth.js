const jwt = require("jsonwebtoken");
const Response = require('../utils/Response');
const config = process.env;

const verifyToken = (req, res, next)=>{
	const response = new Response(res);
	let token = req.body.token || req.query.token || req.headers["authorization"];

	if (!token) {
		return response.forbidden('A token is required for authentication')
	}

	try {
		token = token.replace(/^Bearer\s+/, '');
		const decoded = jwt.verify(token, config.TOKEN_KEY);
		req.user = decoded;
	} catch (error) {
		return response.forbidden("Invalid Token")
	}

	next()
}

module.exports = verifyToken;