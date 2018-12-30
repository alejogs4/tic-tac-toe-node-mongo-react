const mongoose = require('mongoose');
const config = require('../config/db');

mongoose.connect(`mongodb://${config.host}/${config.db}`)
  .then(() => console.log('Connection'))
  .catch(err => console.log(err.message));

module.exports = mongoose;
