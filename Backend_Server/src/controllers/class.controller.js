const express = require("express");

const router = express.Router();

const Class = require("../models/class.model");

router.get("/", async (req, res) => {
  try {
    const classes = await Class.find()
      .populate(["sections", "subjects"])
      .lean()
      .exec();

    res.status(200).json({ classes });
  } catch (err) {
    res.status(500).json({  err: err.message });
    res.end();
  }
});

router.post("/new", async (req, res) => {
  try {
    const newClass = await Class.create(req.body);

    res.status(201).json({ status: "Created", newClass });
  } catch (err) {
    res.status(500).json({ message: err.message });
    res.end();
  }
});

module.exports = router;
