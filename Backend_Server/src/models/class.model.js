const { Schema, model } = require("mongoose");

const classSchema = new Schema(
  {
    grade: { type: Number, required: true, unique: true },
    sections: [{ type: Schema.Types.ObjectId, ref: "section" }],
    subjects: [{ type: Schema.Types.ObjectId, ref: "subject" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Class = model("class", classSchema);

module.exports = Class;
