const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config");

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

const Login = (req, res) => {
  let { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user)
      return res.json({
        hasValidationError: true,
        validationError: [
          {
            msg: "no such user found with the email adress try logging in",
            param: " "
          }
        ]
      });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (isMatch) {
        // set up a cookie
        res.cookie(
          "token",
          jwt.sign({ user: user._id }, config.SECRET, { expiresIn: "24h" }),
          { maxAge: 86400 * 1000 }
        );

        // send user data
        return res.json({
          msg: "user successfully logged in",
          user: { _id: user._id, name: user.name }
        });
      } else {
        return res.json({
          hasValidationError: true,
          validationError: [
            {
              msg: " invalid password",
              param: " "
            }
          ]
        });
      }
    });
  });
};

const getUser = (req, res) => {
  User.findById(req.userId, "-password -email").then(user => {
    return res.json({ user, msg: "user successfully fetched" });
  });
};

module.exports = {
  SignUp,
  Login,
  getUser
};
