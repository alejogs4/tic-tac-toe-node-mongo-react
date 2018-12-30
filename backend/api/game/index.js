const express = require('express');
const gameController = require('./game.controller');

const router = express.Router();

router.get('/api/v1/game/:id', gameController.getGameById)
router.post('/api/v1/game', gameController.createNewGame);

module.exports = router;
