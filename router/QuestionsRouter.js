const express = require("express");

const isAuth = require("../middleware/isAuth");
const QuestionsController = require("../controller/QuestionsController");

const router = express.Router();

// /api/questions/home-questions/:skip
// GET request
// PRIVATE
router.get("/home-questions/:skip", isAuth);

// /api/questions/
// POST request
// PRIVATE
router.post("/", isAuth, QuestionsController.postQuestion);

// /api/questions/dashboard-questions/:skip
// GET request
// PRIVATE
router.get("/dashboard-questions/:skip", isAuth);

module.exports = router;
