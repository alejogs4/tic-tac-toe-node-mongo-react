const express = require('express');
const setupExpress = require('./express.config');
const setupRoutes = require('./routes');

const app = express();
setupExpress(app);
setupRoutes(app);

module.exports = app;
