const Questions = require("../models/Questions");

const postQuestion = async (req, res) => {
  const { question, elaboration } = req.body;

  if (question && elaboration.blocks.length) {
    let newQuestion = new Questions({
      _author: req.userId,
      question,
      elaboration
    });

    newQuestion.save().then(question => {
      res.json({ question, msg: "question successfully saved" });
    });
  }
};

module.exports = {
  postQuestion
};
