require("dotenv").config()
const helmet = require("helmet")
const server = require('./server.js');
const PORT = process.env.PORT || 5432

const { Client } = require('pg');

const client = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_URL,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.PORT,
});

client.connect();



server.use(helmet())


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });

