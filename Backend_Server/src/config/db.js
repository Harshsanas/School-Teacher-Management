require("dotenv").config();

const mongoose = require("mongoose");

const password = process.env.PASSWORD;

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://dbSchoolManagement:${password}@cluster0.rwixo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  );
};

module.exports = connect;
