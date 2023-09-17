const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// router.get("/echo", (req, res) => {
//     res.send("hello this is for the test of the router");

// });
// router.get("/test", (req, res) => {
//     res.send("hello this is test route");

// });
// router.get("/api/studentlist", async (req, res) => {
//     try {
//           const studentsData = await Student.find();
//          res.status(201).send(studentsData);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

//-----------------//

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(201).send(studentsData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//how to get individual student data

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    console.log(studentData);
    if (!studentData) {
      res.status(400).send();
    } else {
      res.status(200).send(studentData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//updaate the student by its id

router.patch("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

//handling the delete req in RESTAPI

router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    if (!req.params.id) {
      return res.status(400).send(deleteStudent);
    }
    res.send(deleteStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
