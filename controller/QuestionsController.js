const Questions = require("../models/Questions");
const Answers = require("../models/Answers");

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
    .populate("_answers", "answer _author")
    .then(question => {
      if (!question) return res.json({ errror: "no such question found" });
      return res.json({ question, msg: "fetched specific question" });
    });
};

const postAnswer = (req, res) => {
  if (!req.body.answer)
    return res.json({ error: "none of the fields can be empty" });

  Questions.findById(req.params.id).then(question => {
    if (!question)
      return res.json({ error: "invalid request! No such question found" });

    let answer = new Answers({
      _author: req.userId,
      answer: req.body.answer,
      _question: question._id
    });

    answer.save().then(answer => {
      question._answers.push(answer._id);

      question.save().then(question => {
        return res.json({ msg: "successfully added the answer" });
      });
    });
  });
};

const searchQuestion = (req, res) => {
  if (!req.body.search.trim())
    return res.json({ error: "search field cannot be empty" });
  let queryString = req.body.search.trim();
  Questions.find(
    {
      question: { $regex: `${queryString}`, $options: "i" }
    },
    "-elaboration -_answers -date"
  )
    .populate("_author", "name")
    .then(questions => {
      if (!questions.length)
        return res.json({ error: "no such result found", questions: null });
      res.json({ questions, msg: "successfully fetched" });
    });
};

module.exports = {
  postQuestion,
  getHomeQuestions,
  getDashboardQuestions,
  getSpecificQuestion,
  postAnswer,
  searchQuestion
};
