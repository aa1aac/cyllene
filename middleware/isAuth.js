const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");

const User = require("../models/Users");

module.exports = (req, res, next) => {
  let { token } = req.cookies;

  if (!token) return res.status(401);

  try {
    let decoded = jwt.verify(token, SECRET);

    // add decoded to the request
    req.userId = decoded.user;

    // check if user is present in the database
    User.findById(decoded.user).then(user => {
      if (!user) return res.status(401);

      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(401);
  }
};
