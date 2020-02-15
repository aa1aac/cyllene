const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  elaboration: { type: JSON, required: true },
  _author: { type: Schema.Types.ObjectId, ref: "Users" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Questions", QuestionSchema);
