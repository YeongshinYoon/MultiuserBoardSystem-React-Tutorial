const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hymnSchema = new Schema({
    page: {type: Number, required: true},
    title: {type: String, required: true},
    lyric_kr: {type: String, required: true},
    lyric_en: {type: String, required: true},
    lyric_jp: {type: String, required: true},
    verses: {type: Number, required: true},
    length: {type: String, required: true}
})

const Hymns = mongoose.model("Hymns", hymnSchema, "Hymns")

const mySchemas = {"Hymns": Hymns}

module.exports = mySchemas