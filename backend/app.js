const express = require('express');
const setupExpress = require('./express');

const app = express();
setupExpress(app);

module.exports = app;
