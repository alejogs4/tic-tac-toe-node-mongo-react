const gameRoutes = require('./api/game');

module.exports = (app) => {
  app.use(gameRoutes);
};
