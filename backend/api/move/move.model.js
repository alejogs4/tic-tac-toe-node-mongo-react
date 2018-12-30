const mongoose = require('../../database/connection');

const { Schema } = mongoose;

const MoveSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  player_one: {
    type: Schema.Types.Boolean,
    default: true,
  },
  field: {
    type: Schema.Types.Number,
    required: [true, 'The field marked is required'],
  },
});

module.exports = MoveSchema;
