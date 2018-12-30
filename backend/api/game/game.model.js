const mongoose = require('../../database/connection');
const Move = require('../move/move.model');

const { Schema } = mongoose;

const GameSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  finish: {
    type: Schema.Types.Boolean,
    default: false,
  },
  winner: {
    type: Schema.Types.String,
    default: null,
  },
  game_date: Date,
  moves: [Move],
});

module.exports = mongoose.model('Game', GameSchema);