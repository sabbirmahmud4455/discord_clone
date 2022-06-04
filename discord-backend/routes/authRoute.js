const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get('/register', (req, res)=>{
	res.send('register route')
})

router.post('/login', ()=>{
	res.send('login route')
})

module.exports = router;