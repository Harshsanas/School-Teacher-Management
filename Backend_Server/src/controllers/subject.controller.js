const express = require("express");
const router = express.Router();
const Subject = require("./../models/subject.model");

router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find().lean().exec();

    res.status(200).json({ status: "OK", subjects });
  } catch (err) {
    res.status(500).json({ status: "failed", err: err.message });
    res.end();
  }
});

router.post("/new", async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);

    res.status(201).json({ status: "Created", newSubject });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
    res.end();
  }
});

module.exports = router;
