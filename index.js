const express = require("express");
const mongoose = require("mongoose");

const { MONGO_URI } = require("./config");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);

  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to mongo db"));
});
