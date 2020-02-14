const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { MONGO_URI } = require("./config");
const UserRouter = require("./router/UsersRouter");
const QuestionsRouter = require("./router/QuestionsRouter");

const app = express();

app.use(express.json()); //middleware for parsing JSON
app.use(cookieParser()); // midlleware for parsing cookie

// routing middleware
app.use("/api/users", UserRouter);
app.use("/api/questions", QuestionsRouter);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    app.get("/*", (req, res) => {
      res.sendFile("./client/build/index.html");
    });
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);

  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to mongo db"));
});
