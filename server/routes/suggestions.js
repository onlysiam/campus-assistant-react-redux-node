const express = require("express");
const router = express.Router();
const { db } = require("../startup/db");

router.get("/semesters", (req, res) => {
  db.query(
    "SELECT * FROM semesters ORDER BY semester_id DESC",
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
    }
  );
});

router.get("/courses/:semesterId", (req, res) => {
  semester_id = req.params.semesterId;
  db.query(
    "SELECT DISTINCT course_initial as initial FROM semesters_courses WHERE semester_id = ?",
    [semester_id],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
    }
  );
});

router.get("/faculties/:semesterId", (req, res) => {
  semester_id = req.params.semesterId;
  db.query(
    "SELECT DISTINCT faculty as initial FROM semesters_courses WHERE semester_id = ?",
    [semester_id],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
    }
  );
});
router.get("/departments", (req, res) => {
  db.query("SELECT * FROM departments", (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result) {
      res.send(result);
    }
  });
});
router.get("/coursetime/:semesterId", (req, res) => {
  semester_id = req.params.semesterId;
  db.query(
    "SELECT DISTINCT time FROM semesters_courses WHERE semester_id = ? ORDER BY time",
    [semester_id],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
    }
  );
});
module.exports = router;
