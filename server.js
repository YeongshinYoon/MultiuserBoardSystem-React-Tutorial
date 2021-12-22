const express = require("express")
const fs = require("fs")
const app = express()

const mongoose = require("mongoose")
require("dotenv").config({ path: "variables.env"})
const Schemas = require("./models/Schemas")

const bodyParser = require("body-parser")

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/getHymns", async (req, res) => {
  const hymns = await (Schemas.Hymns).find().exec()
  res.send(hymns)
})

app.get("/api/getHymn/:filename", async (req, res) => {
  const filename = req.params.filename
  const path = "./hymns/" + filename

  fs.readFile(path, (err, data) => {
    //res.write(data)
    res.send(data)
  })
})

app.post("/api/addHymn", async (req, res) => {
  const hymn = {
    page: req.body.page,
    title: req.body.title,
    lyric: req.body.lyric,
    verses: req.body.verses,
    length: req.body.length,
    password: req.body.password
  }

  if (hymn.password === process.env.ADMIN_PW) {
    const newHymn = new Schemas.Hymns({
      page: hymn.page,
      title: hymn.title,
      lyric: hymn.lyric,
      verses: hymn.verses,
      length: hymn.length})
    
    try {
      await newHymn.save( async (err, result) => {
        res.send("Added successfully.")
      })
    } catch (err) {
      console.log(err)
      res.send("Failed to add.")
    }
  } else {
    res.send("Invalid password.")
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