const express = require("express");

const app = express();

app.use(express.json()); // usefull while posting and updating;

const connect = require("./config/db");

const userController = require("./controllers/user.controller");

const teacherController = require("./controllers/teacher.controller");

const sectionController = require("./controllers/section.controller");

const subjectController = require("./controllers/subject.controller");

const classController = require("./controllers/class.controller");

const gradeController = require("./controllers/grade.controller");

app.use("/user", userController);

app.use("/grades", gradeController);

app.use("/teachers", teacherController);

app.use("/sections", sectionController);

app.use("/subjects", subjectController);

app.use("/classes", classController);

const start = async () => {
  await connect();
  app.listen(3033, () => {
    console.log("listening on port 3033");
  });
};

start()