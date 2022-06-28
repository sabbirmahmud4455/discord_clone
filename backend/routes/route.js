const express = require('express');
const router = express.Router()
const AuthRoute = require('./authRoute');
const friendInvitationRoutes = require('./friendInvitationRoutes');
const verifyToken = require("../middleware/auth")

router.use('/auth', AuthRoute)

router.use('/friend-invitation', verifyToken, friendInvitationRoutes)

module.exports = router;