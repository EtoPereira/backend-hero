//const knex = require('knex');
const environment = process.emit.NODE_ENV || 'development';
const configuration = require('../../knexfile.js')[environment];

// const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
const connection = knex(config);

module.exports = connection;