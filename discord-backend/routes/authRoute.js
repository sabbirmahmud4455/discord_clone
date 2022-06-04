const express = require("express");
const router = express.Router();
const RegisterController = require('../controllers/auth/RegisterController');
const LoginController = require('../controllers/auth/LoginController');
const joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const registerSchema = joi.object({
	username: joi.string().min(3).max(12).required(),
	password: joi.string().min(6).max(12).required(),
	mail: joi.string().email().required()
})

const loginSchema = joi.object({
	password: joi.string().min(6).max(12).required(),
	mail: joi.string().email().required()
})

router.post('/register', validator.body(registerSchema), RegisterController)
router.post('/login', validator.body(loginSchema), LoginController)

module.exports = router;