const mongoose = require("mongoose");

const { Schema } = mongoose;

const AnswersSchema = new Schema({
  answer: { type: JSON, required: true },
  _question: { type: Schema.Types.ObjectId, required: true, ref: "Questions" },
  _author: { type: Schema.Types.ObjectId, required: true, ref: "Users" }
});

module.exports = mongoose.model("Answers", AnswersSchema);
