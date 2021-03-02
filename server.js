const express = require('express');

const server = express();

server.use(express.json());

// const zoosRouter = require("./routers/zoos")
// const animalsRouter = require("./routers/animals")
// const speciesRouter = require("./routers/species")


// server.use("/zoos", zoosRouter)
// server.use("/animals", animalsRouter)
// server.use("/species", speciesRouter)



module.exports = server;


