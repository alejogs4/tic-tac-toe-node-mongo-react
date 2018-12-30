const Game = require('./game.model');
const {
  OK,
  CREATED,
  SERVER_ERROR,
  BAD_DATA
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

function getGameById(req, res) {
  const gameId = req.params.id;

  if (!gameId) return res.status(BAD_DATA).send({ message: 'The game id is required' });

  return Game.findById(gameId)
    .then((game) => {
      res.status(OK).json(game);
    })
    .catch(handleError(res));
}

module.exports = {
  createNewGame,
  getGameById,
};
