require("dotenv").config()
const knex = require('knex');

const knexfile = require('../knexfile.js');


const env = process.env.NODE_ENV;
const configOptions = knexfile[env];

module.exports = knex(configOptions);