require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
};
