const mongoose = require('mongoose');
const config = require( '../config');

module.exports =  () => {
  if (!config.MONGO_STORAGE_CONNECTION_URL) {
    console.log('Mongo connection url is not provided');
    return;
  }
  mongoose.connect(config.MONGO_STORAGE_CONNECTION_URL);
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${config.MONGO_STORAGE_CONNECTION_URL}`);
  });
  mongoose.connection.on('error', (error) => {
    console.log(`Mongoose default connection error: ${error}`);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
};
