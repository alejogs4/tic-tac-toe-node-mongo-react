// Set of fields to win a game
const gameWinCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]
];
// Verify if the move is valid, with reference to the current game
const isValidMove = (game, newMove) => game.moves.every(move => move.field !== newMove.field);
// Verify is with the current move the player win
const isAWinnerMove = (combination, playerMoves) => combination.every(move => playerMoves.includes(move));

// Get the winner of a game
const getPossibleWinner = (game) => {
  const movesPlayerOne = game.moves.filter(move => move.player_one).map(move => move.field);
  const movesPlayerTwo = game.moves.filter(move => !move.player_one).map(move => move.field);

  for(let combination of gameWinCombinations) {
    if (isAWinnerMove(combination, movesPlayerOne)) return { winner: 'Player one' };
    if (isAWinnerMove(combination, movesPlayerTwo)) return { winner: 'Player two' };
  }

  return null;
};

module.exports = {
  isValidMove,
  getPossibleWinner,
}
