require("dotenv").config();
const express = require("express");

const app = express();
const Student = require("./models/students");

//it exicute conn file otherwise we are not able to connect with our local mongodb
require("./db/conn");
const studentRouter = require("./route/student");

const router = new express.Router();
const PORT = process.env.PORT;

//express.json() is a method inbuilt in exrpess to recongize the incomming request
app.use(express.json());

//now this app can have function and properties to make express app
//app.get(route,callback)
//root folder when user hit localhost:port then it show cannot get if we cannot define the root folder

//when you used router then you need to
app.use("/api/students",studentRouter);
//instead of

// app.get("/", (req, res) => {
//   res.send("hello from server side root path");
// });
// app.post("/api/students", (req, res) => {
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
//   console.log(req.body);
// });

// app.post("/api/students", async (req, res) => {
//   console.log(req.body);
//   try {
//     const user = new Student(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });
// app.get("/api/students", async (req, res) => {
//   try {
//     const studentsData = await Student.find();
//     res.status(201).send(studentsData);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //how to get individual student data

// app.get("/api/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await Student.findById(_id);
//     console.log(studentData);
//     if (!studentData) {
//       res.status(400).send();
//     } else {
//       res.send(studentData);
//     }
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //updaate the student by its id

// app.patch("/api/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(updateStudent);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //handling the delete req in RESTAPI

// app.delete("/api/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const deleteStudent = await Student.findByIdAndDelete(_id);
//     if (!req.params.id) {
//       return res.status(400).send(deleteStudent);
//     }
//     res.send(deleteStudent);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

//sample code for the router
//1create router

//define the router

app.listen(PORT, () => {
  console.log(`listening on the port no: ${PORT}`);
});

//npm run dev in root folder
