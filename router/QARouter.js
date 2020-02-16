const express = require("express");

const isAuth = require("../middleware/isAuth");
const QuestionsController = require("../controller/QuestionsController");

const router = express.Router();

// /api/questions/home-questions/:skip
// GET request
// PRIVATE
router.get(
  "/home-questions/:skip",
  isAuth,
  QuestionsController.getHomeQuestions
);

// /api/questions/
// POST request
// PRIVATE
router.post("/", isAuth, QuestionsController.postQuestion);

// /api/questions/dashboard-questions/:skip
// GET request
// PRIVATE
router.get(
  "/dashboard-questions/:skip",
  isAuth,
  QuestionsController.getDashboardQuestions
);

// /api/questions/:id
// GET request
// PRIVATE
router.get("/:id", isAuth, QuestionsController.getSpecificQuestion);

// /api/questions/:id/answer
// POST request
// PRIVATE
router.post("/:id/answer", isAuth, QuestionsController.postAnswer);

// /api/questions/search
// POST request
// PRIVATE
router.post("/search", isAuth, QuestionsController.searchQuestion);

module.exports = router;
