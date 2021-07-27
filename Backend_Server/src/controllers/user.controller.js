const { Router } = require("express");

const newToken = require("../utils/jwt");

const router = Router();

const User = require("../models/user.model");

//getting all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//posting details for signup
router.post("/signup", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user) {
      return res
        .status(400)
        .json({ status: "failed", message: "Email already exists" });
    }

    user = await User.create(req.body);

    return res.status(201).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//posting for login
router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      return res
        .status(400)
        .json({ stats: "failed", message: "user does not exist, login first" });
    }
    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res
        .status(401)
        .json({ status: "failed", message: "Email or Password is wrong" });
    }
    const token = newToken(user);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
