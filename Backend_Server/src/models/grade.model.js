const { Schema, model } = require("mongoose");

const gradeSchema = new Schema(
  {
    grade: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("grade", gradeSchema);
