// const Joi = require("joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.generateAuthToken = function (username) {
  return jwt.sign({ username: username }, process.env.JWT_KEY);
};

// const validateUser = (user) => {
//   const schema = Joi.object({
//     username: Joi.string().min(2).max(50).required(),
//   });

//   return Joi.validate(user, schema);
// };

// exports.validate = validateUser;
