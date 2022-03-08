const { Schema, model } = require('mongoose');

const journalSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  tags: [String],
});

const Journal = model('Journal', journalSchema);

module.exports = Journal;
