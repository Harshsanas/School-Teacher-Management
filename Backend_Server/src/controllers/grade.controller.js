const express = require("express");
const router = express.Router();
const Grades = require("../models/section.model");

router.get("/", async (req, res) => {
  try {
    const grades = await Grades.find().lean().exec();

    res.status(200).json({ grades });
  } catch (err) {
    res.status(500).json({ err: err.message });
    res.end();
  }
});

module.exports = router;
