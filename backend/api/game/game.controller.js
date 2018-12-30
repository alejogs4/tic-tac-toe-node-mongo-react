const Game = require('./game.model');
const {
  OK,
  CREATED,
  SERVER_ERROR,
} = require('../constants').codes;

function handleError(res) {
  return function returnGameError(err) {
    res.status(SERVER_ERROR).json({ message: err.message, err });
  };
}

function createNewGame(req, res) {
  const game = new Game(req.body);
  // Set moves like an empty array
  game.moves = [];

  game.save()
    .then((gameData) => {
      res.status(CREATED).json(gameData);
    })
    .catch(handleError(res));
}

module.exports = {
  createNewGame,
};
