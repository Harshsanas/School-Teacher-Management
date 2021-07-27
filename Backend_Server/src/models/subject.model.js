const { Schema, model } = require("mongoose");

const subjectSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    details:{type:String,required:false},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("subject", subjectSchema);
