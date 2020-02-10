
const User = require("../models/Users");

const SignUp = (req, res) => {
  let { email, password } = req.body;

  
  // validate the response
  // check existing user
  // if existing return exixitng
  // else create the user
};

const Login = (req, res) => {};

module.exports = {
  SignUp,
  Login
};
