const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const restricted = require('./auth-middleware');


// const authRouter = require("./auth/auth-router");
// server.use('/auth', authRouter)



const employeesRouter = require('./employees/employees-router');
server.use('/employees', restricted(), employeesRouter)


server.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to our 3D ByDesign API!",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong.",
	})
})


module.exports = server;


