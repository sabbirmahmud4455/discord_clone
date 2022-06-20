const express = require("express");
const router = express.Router();
const joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const friendInvitationController = require('../controllers/friend/friendInvitationController');

const postFriendInvitationSchema = joi.object({
	targetMailAddress: joi.string().email().required()
})

router.post('/invite', validator.body(postFriendInvitationSchema), friendInvitationController.posInvite)

module.exports = router;