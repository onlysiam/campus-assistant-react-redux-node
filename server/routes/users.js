const express = require("express");
const router = express.Router();
const { db } = require("../startup/db");

router.get("/:username/:password", (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  db.query(
    "SELECT name,username,profilepic,email FROM students WHERE username = ? AND password = ?",
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

module.exports = router;
