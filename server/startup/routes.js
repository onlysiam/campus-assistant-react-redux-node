const express = require("express");
const suggestions = require("../routes/suggestions");
const users = require("../routes/users");
const courses = require("../routes/courses");
const fileUpload = require("express-fileupload");
// const error = require("../middleware/error");

module.exports = function (app) {
  app.use(
    fileUpload({
      createParentPath: true,
    })
  );
  app.use(express.json({ limit: "25mb" }));
  app.use(express.urlencoded({ limit: "25mb" }));
  app.use("/api/suggestions", suggestions);
  app.use("/api/users", users);
  app.use("/api/courses", courses);
  // app.use(error);
};
