const express = require("express");
const router = express.Router();
const Sections = require("../models/section.model");

router.get("/", async (req, res) => {
  try {
    const sections = await Sections.find().lean().exec();

    res.status(200).json({ sections });
  } catch (err) {
    res.status(500).json({ err: err.message });
    res.end();
  }
});

router.post("/new", async (req, res) => {
  try {
    const newSection = await Sections.create({ name: req.body.name });
    res.status(201).json({ newSection });
  } catch (err) {
    res.status(500).json({ message: err.message });
    res.end();
  }
});

module.exports = router;
