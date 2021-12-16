const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env"});
const User = require("./models/User");

const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//for Debugging
app.get("/api/hello", (req, res) => {
    res.send({ message: "Hello Express!" });
});

//get user list
app.get("/api/users", (req, res) => {
    res.send([
        {
          "id": 1,
          "image": "https://placeimg.com/64/64/1",
          "name" : "홍길동1",
          "birthday" : "111111",
          "gender" : "남자",
          "job" : "학생"
        },
        {
          "id": 2,
          "image": "https://placeimg.com/64/64/2",
          "name" : "홍길동2",
          "birthday" : "222222",
          "gender" : "남자",
          "job" : "학생"
        },
        {
          "id": 3,
          "image": "https://placeimg.com/64/64/3",
          "name" : "홍길동3",
          "birthday" : "333333",
          "gender" : "남자",
          "job" : "학생"
        }
    ]);
})

app.get("/", (req, res) => {
  const newUser = new User();

  newUser.id = "123";
  newUser.email = "123";
  newUser.name = "123";
  newUser.age = "123";
  newUser.gender = "123";

  newUser.save()
  .then(user => {
    console.log(user);
    res.json({
      message: "New user is created succesfully."
    });
  })
  .catch(err => {
    res.json({
      message: "Failed to create new user."
    })
  })
});

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