const express = require("express");
const { check, validationResult } = require("express-validator");

const UserController = require("../controller/UserController");

const router = express.Router();

//  /api/user/signup
// POST
// PUBLIC route
router.post(
  "/signup",
  [
    check("email").isEmail({
      // require_display_name: true,
      domain_specific_validation: true
    }),
    check("name").isAlpha(),
    check("password").isLength({ min: 8, max: undefined })
  ],
  (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      // not empty  -|> return response of the validation error

      return res.json({
        hasValidationError: true,
        validationError: error.array()
      });
    } else {
      next();
    }
  },
  UserController.SignUp
);

// api/user/login
// POST
// PUBLIC route
router.post(
  "/login",
  [
    check("email").isEmail({
      require_display_name: true,
      domain_specific_validation: true
    })
  ],
  UserController.Login
);

module.exports = router;
