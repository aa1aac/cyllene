const Questions = require("../models/Questions");

const postQuestion = (req, res) => {
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

const getHomeQuestions = (req, res) => {
  let skip = parseInt(req.params.skip) || 0;

  Questions.find({}, "-elaboration")
    .sort({ date: -1 })
    .limit(5)
    .skip(skip)
    .populate("_author", "name")
    .then(questions => {
      if (!questions) return res.json({ msg: "no more questions" });

      return res.json({ questions, msg: "fetched questions" });
    });
};

const getDashboardQuestions = (req, res) => {
  let skip = parseInt(req.params.skip) || 0;

  Questions.find({ _author: req.userId }, "-elaboration")
    .sort({ date: -1 })
    .limit(5)
    .skip(skip)
    .populate("_author", "name")
    .then(questions => {
      if (!questions) return res.json({ msg: "no more questions" });

      return res.json({ questions, msg: "fetched dashboard questions" });
    });
};

const getSpecificQuestion = (req, res) => {

  Questions.findById(req.params.id)
    .populate("_author", "name")
    .then(question => {
      if (!question) return res.json({ errror: "no such question found" });
      return res.json({ question, msg: "fetched specific question" });
    });
};

module.exports = {
  postQuestion,
  getHomeQuestions,
  getDashboardQuestions,
  getSpecificQuestion
};
