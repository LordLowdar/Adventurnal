const { Schema, model } = require("mongoose");

const journalEntrySchema = new Schema({
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

const JournalEntry = model("JournalEntry", journalEntrySchema);

module.exports = JournalEntry;
