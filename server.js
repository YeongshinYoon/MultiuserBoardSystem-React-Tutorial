const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//for Debugging
app.get('/api/hello', (req, res) => {
    res.send({ message: "Hello Express!" });
});

//get user list
app.get('/api/users', (req, res) => {
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

app.listen(port, () => console.log(`listening on port ${port}`));