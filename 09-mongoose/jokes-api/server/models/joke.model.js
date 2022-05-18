const mongoose = require('mongoose');

//purpose of this file is to describe how our jokes table (collection) should look
const JokeSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required!"],
        minlength: [5, "Content must be at least 5 characters!"]
    },
    author: {
        type: String,
        required: [true, "Author is required!"],
        minlength: [2, "Author name must be at least 2 characters!"]
        },
    rating: {
        type: Number,
        min: [1, "Rating can't be less than 1"],
        max: [10, "Rating cannot be more than 10"]
    },
    
},{timestamps: true})

const Joke = mongoose.model("Joke",JokeSchema);

module.exports = Joke;