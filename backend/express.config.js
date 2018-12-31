const express = require('express');
const { access } = require('./config/express');
const cors = require('cors');

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(access)
  app.use(cors());
}
