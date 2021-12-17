const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true},
        name: { type: String, required: true },
        birthday: { type: Number, required: true },
        gender: { type: String, required: true }
    },
    {
        timestamps: true
    }
)

const boardContentSchema = new Schema(
    {
        num: { type: Number, required: true },
        title: { type: String, required: true},
        writer: { type: String, required: true },
        createdAt: { type: String, required: true},
        view: { type: Number, required: true }
    },
    {
        timestamps: true
    }
)

const postingSchema = new Schema(
    {
        boardContent: { type: mongoose.Types.ObjectId, required: true },
        content: { type: String, required: true }
    }
)

const Users = mongoose.model("Users", userSchema, "Users")
const BoardContents = mongoose.model("BoardContents", boardContentSchema, "BoardContents")
const Postings = mongoose.model("Postings", postingSchema, "Postings")

const mySchemas = {"Users": Users, "BoardContents": BoardContents, "Postings": Postings}

module.exports = mySchemas