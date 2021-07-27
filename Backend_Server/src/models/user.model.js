const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // using for hash

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    role: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const password = this.password;
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);

    this.password = hash;

    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) return reject(err);
      resolve(same);
    });
  });
};

module.exports = mongoose.model("user", userSchema);
