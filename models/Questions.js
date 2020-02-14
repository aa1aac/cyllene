const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  elaboration: { type: Object, required: true },
  _author: { type: Schema.Types.ObjectId, ref: "Users" }
});

module.exports = mongoose.model("Questions", QuestionSchema);
