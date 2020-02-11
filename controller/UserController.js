const User = require("../models/Users");
const bcrypt = require("bcryptjs");

const SignUp = (req, res) => {
  let { email, password, name, confirm } = req.body;

  // validate the response
  if (password !== confirm)
    return res.json({
      hasValidationError: true,
      validationError: [{ msg: "passwords do not match", param: " " }]
    });
  // check existing user
  User.findOne({ email }).then(existingUser => {
    // if existing return exisitng
    if (existingUser)
      return res.json({
        hasValidationError: true,
        validationError: [{ msg: "user already exists", param: " " }]
      });

    // else create the user

    const user = new User({ name, email, password });

    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        // save the user and send the response

        user.save().then(() => {
          return res.json({
            msg: "user successfully created head over to login"
          });
        });
      });
    });
  });
};

const Login = (req, res) => {};

module.exports = {
  SignUp,
  Login
};
