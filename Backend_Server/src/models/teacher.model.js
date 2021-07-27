const { Schema, model } = require("mongoose");

const teacherSchema = new Schema(
  {
    name: { type: String, require: true },
    gender: { type: String, require: true },
    age: { type: Number, require: true },
    classes: [{ type: Schema.Types.ObjectId, ref: "class" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("teacher", teacherSchema);
