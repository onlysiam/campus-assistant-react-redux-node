const express = require("express");
const router = express.Router();
const { db } = require("../startup/db");
const { cloudinaryUpload } = require("../startup/files");

router.get("/degree/:degreeId", (req, res) => {
  const degreeId = req.params.degreeId;
  db.query(
    "SELECT degree_name as degree, degree_id, total_credit as credit FROM degree WHERE degree_id = ?",
    [degreeId],
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

router.get("/:username/:password", (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  db.query(
    "SELECT studentsinfo.*,students.profilepic, students.email FROM studentsinfo INNER JOIN students ON studentsinfo.username=students.username WHERE students.username = ? AND students.password = ?",
    [username, password],
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

router.post("/", (req, res) => {
  const qrid = "";
  const name = req.body.fname + " " + req.body.lname;
  const username = req.body.username;
  const password = req.body.password;
  const profilepic = "";
  const email = req.body.email;
  const otp = Math.floor(1000 + Math.random() * 9000);
  db.query(
    "INSERT INTO students (qrid,name,username,password,profilepic,email,otp) VALUES (?,?,?,?,?,?,?)",
    [qrid, name, username, password, profilepic, email, otp],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.affectedRows === 1) {
        res.send([{ name, username, profilepic, email }]);
      }
    }
  );
});

router.post("/userinfo", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const cgpa = req.body.cgpa;
  const major = req.body.major;
  const credit = req.body.completedCredit;
  const total_credit = req.body.totalCredit;
  const dept_id = req.body.deptId;
  const school_id = req.body.schoolId;
  const degree_name = req.body.degree;
  const status = "Enrolled";
  db.query(
    "INSERT INTO studentsinfo (username,name,cgpa,major,credit,total_credit,status,dept_id,school_id,degree_name) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      username,
      name,
      cgpa,
      major,
      credit,
      total_credit,
      status,
      dept_id,
      school_id,
      degree_name,
    ],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.affectedRows === 1) {
        res.send([req.body]);
      }
    }
  );
});

router.post("/uploadpicture", async (req, res) => {
  const username = req.body.username;
  const jsonData = req.body.jsonData;
  const file = JSON.parse(jsonData);
  const uploadResult = await cloudinaryUpload(file);
  console.log(uploadResult.url);
  if (uploadResult.url) {
    db.query(
      "UPDATE students set profilepic = ? where username = ?",
      [uploadResult.url, username],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result.affectedRows === 1) {
          res.send(uploadResult);
        }
      }
    );
  }
});

module.exports = router;
