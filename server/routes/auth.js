const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../models/user");
const { db } = require("../startup/db");

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
        const token = generateAuthToken(result[0].username);
        res.header("x-auth-token", token).send({ result, token });
      }
    }
  );
});

module.exports = router;
