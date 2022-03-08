const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
  journals: [{ type: mongooseSchema.Types.ObjectId, ref: 'Journal' }],
});

const Character = model('Character', characterSchema);

module.exports = Character;
