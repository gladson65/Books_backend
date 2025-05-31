import mongoose from "mongoose";

const { Schema } = mongoose;

// creating books schema
const bookSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    years: {
        type: String,
        required: true
    },

    pages: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    ratings: {
        type: Number,
        required: true
    },

    coverImage: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
})

const bookModel = mongoose.model('books', bookSchema);
export default bookModel;