const Game = require('./game.model');
const {
  OK,
  CREATED,
  SERVER_ERROR,
  BAD_DATA,
} = require('../constants').codes;

const {
  isValidMove,
  getPossibleWinner,
} = require('./game.utils');

function handleError(res) {
  return function returnGameError(err) {
    res.status(SERVER_ERROR).json({ message: err.message, err });
  };
}

/**
 * Get games from the database for homepage of the game
 *  @returns array of games
 */
function getGames(req, res) {
  return Game.find({})
    .then((games) => {
      res.status(OK).json(games);
    })
    .catch(handleError(res));
}

/**
 * Get one game using the game id
 * @returns game is this exists
 */
function getGameById(req, res) {
  const gameId = req.params.id;

  if (!gameId) return res.status(BAD_DATA).send({ message: 'The game id is required' });

  return Game.findById(gameId)
    .then((game) => {
      res.status(OK).json(game);
    })
    .catch(handleError(res));
}
/**
 * Create new game with moves like a empty array
 */
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
/**
 * Create a new move and return the game data with the current moves
 */
function createGameMove(req, res) {
  const moveInfo = req.body;
  const gameId = req.params.id;

  return Game.findById(gameId)
    .then((game) => {
      // If the game finish or the field is already marked the move is invalid
      if (game.finish || !isValidMove(game, moveInfo)) {
        throw new Error('I´ts an invalid move')
      }
      return game;
    })
    .then((game) => {
      const newGameData = game;
      // Update game data
      newGameData.moves = newGameData.moves.concat([moveInfo]);
      newGameData.turn_player_one = !newGameData.turn_player_one;

      const possibleWinner = getPossibleWinner(newGameData);
      // If one winner was detected update the game data
      if (possibleWinner) {
        newGameData.winner = possibleWinner.winner;
        newGameData.finish = true;
      }
      // If every
      if (newGameData.moves.length === 9 && !newGameData.finish) {
        newGameData.winner = 'Empate';
        newGameData.finish = true;
      }

      return newGameData.save()
    })
    .then(game => {
      res.status(CREATED).json(game)
    })
    .catch(handleError(res))
}

module.exports = {
  createNewGame,
  getGames,
  getGameById,
  createGameMove,
};
