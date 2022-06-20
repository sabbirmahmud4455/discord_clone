const express = require('express');
const router = express.Router()
const AuthRoute = require('./authRoute');
const friendInvitationRoutes = require('./friendInvitationRoutes');
const verifyToken = require("../middleware/auth")

router.use('/', AuthRoute)

router.use('/friend-invitation', verifyToken, friendInvitationRoutes)

router.get("/auth", verifyToken,(req, res)=>{
	res.send(req.user);
})

router.get("/test", (req, res)=>{
	console.log("test");
})

module.exports = router;