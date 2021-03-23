require("dotenv").config()
const server = require('./server.js');


///////// Do we still need bodyParser? Check later after API is up and running. /////////
const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


const PORT = process.env.PORT || 5432

const { Client } = require('pg');

const client = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_URL,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.PORT,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});



server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });

