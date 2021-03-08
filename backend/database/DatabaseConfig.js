const redis = require('redis');
const dotenv = require('dotenv').config()

const client = redis.createClient({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
});
  
client.on('error', err => {
    console.log('Error ' + err);
});

module.exports = client;