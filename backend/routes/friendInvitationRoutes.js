const express = require("express");
const router = express.Router();
const joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const friendInvitationController = require('../controllers/friend/friendInvitationController');

const postFriendInvitationSchema = joi.object({
	targetMailAddress: joi.string().email().required()
})

const invitationDecisionSchema = joi.object({
	id: joi.string().required()
})

router.post('/invite', validator.body(postFriendInvitationSchema), friendInvitationController.postInvite)
router.post('/accept', validator.body(invitationDecisionSchema), friendInvitationController.postAcceptInvite)
router.post('/reject', validator.body(invitationDecisionSchema), friendInvitationController.postRejectInvite)

module.exports = router;