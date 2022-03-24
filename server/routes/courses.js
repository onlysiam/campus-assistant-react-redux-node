const express = require("express");
const router = express.Router();
const ocr = require("../ocr/ocr");
const { db } = require("../startup/db");

//get courses by semester
router.get("/semestersCourses/:course/:section/:semester", (req, res) => {
  const course = req.params.course;
  const section = req.params.section;
  const semester = req.params.semester;
  db.query(
    "SELECT * FROM semesters_courses WHERE course_initial LIKE ? AND section = ? AND semester_id = ?",
    [course, section, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});

//get users courses by semester
router.get("/:username/:password", (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  db.query(
    "SELECT stu.username,semc.* FROM semesters_courses semc INNER JOIN students_courses stu ON stu.username = ? AND stu.semesters_courses_id = semc.semesters_courses_id INNER JOIN students st ON st.username = ? AND st.password = ? ORDER BY semc.semester_id DESC",
    [username, username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});

router.get("/status/:username/:course/:semester", (req, res) => {
  const username = req.params.username;
  const course = req.params.course;
  const semester = req.params.semester;
  db.query(
    "SELECT status FROM courseinfo WHERE username = ? AND code LIKE ? AND semester LIKE ?",
    [username, course, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});
router.post("/", (req, res) => {
  const username = req.body.username;
  let resultArr = [];
  req.body.courses.forEach((course, index) => {
    const course_id = course.course_id;
    const semester_id = course.semester_id;
    const semesters_courses_id = course.semesters_courses_id;
    db.query(
      "INSERT INTO students_courses (username,course_id,semester_id,semesters_courses_id) VALUES (?,?,?,?)",
      [username, course_id, semester_id, semesters_courses_id],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result.affectedRows === 1) {
          resultArr.push(course);
          if (index === req.body.courses.length - 1) {
            res.send(resultArr);
          }
        } else {
          res.send({ message: "Cannot Fetch Data" });
        }
      }
    );
  });
});
router.post("/slip", async (req, res) => {
  const file = req.files.file;
  const semester = req.body.semester;
  let data = await ocr(file, semester);
  if (data) res.send(data);
  else res.send("no data");
});

router.put("/", (req, res) => {
  const username = req.body.username;
  const course = req.body.course;
  const semester = req.body.semester;
  db.query(
    "UPDATE courseinfo SET status = !status WHERE username = ? AND code LIKE ? AND semester LIKE ?",
    [username, course, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});

module.exports = router;
