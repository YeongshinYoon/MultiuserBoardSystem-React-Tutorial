const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env"});
const Schemas = require("./models/Schemas");

const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get List of Users (for Debugging)
app.get("/api/users", (req, res) => {
  res.send([
    {
      "username": "test1",
      "password": "test1"
    },
    {
      "username": "test2",
      "password": "test2"
    },
    {
      "username": "test3",
      "password": "test3"
    }
  ])
})

app.post("/api/loginProc", (req, res) => {
  const username = req.body.Username
  const password = req.body.Password
  console.log("Username: ", username)
  console.log("Password: ", password)
})

app.get("/api/addUser", async (req, res) => {
  const user = { username: "test", email: "test@test.com", name: "test", age: 1, gender: "male" }
  const newUser = new Schemas.Users(user)

  try {
    await newUser.save( async (err, newUserResult) => {
      console.log("New user created!")
      res.end("New user created!")
    })
  } catch (err) {
    console.log(err)
    res.end("User not added!")
  }
})

app.get("/api/addWriting", async (req, res) => {
  const user = Schemas.Users
  const userID = await user.findOne({username: "test"}).exec()
  console.log(userID)
  const newWriting = new Schemas.Writings({ content: "test", user: userID._id})
  
  try {
    await newWriting.save( async (err, newUserResult) => {
      console.log("New writing added!")
      res.end("New writing added!")
    })
  } catch (err) {
    console.log(err)
    res.end("Writing not added!")
  }
})

app.listen(port, err => {
  if (err) {
    return console.log(err);
  } else {
    console.log(`listening on port ${port}`);
    mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to DB succesfully.");
      }
    });
  }
});