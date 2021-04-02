require("dotenv").config()
const knex = require('knex');

const knexfile = require('../knexfile.js');

////////// The variable below (env) needs to be hard coded for the tests to pass. Don't forget to change this back to "process.env.NODE_ENV" //////////
const env = 'development';
const configOptions = knexfile[env];

module.exports = knex(configOptions);