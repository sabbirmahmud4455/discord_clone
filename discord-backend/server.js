const express = require("express");
const http = require('http');
const cors = require('cors');
const mongoose = require("mongoose");
const Router = require("./routes/route");


require('dotenv').config();

const PORT =  process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', Router);

const server = http.createServer(app);

mongoose.connect(`mongodb://${process.env.MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=>{
		console.log(`mongodb connected on ${process.env.MONGO_URL}`);
	})

server.listen(PORT, ()=> {
	console.log(`Server is listening on ${PORT}`);
});
