const knex = require('knex');

const knexfile = require('../knexfile.js');


const env = 'development';
const configOptions = knexfile[env];

module.exports = knex(configOptions);