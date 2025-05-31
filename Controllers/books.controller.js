import mongoose from "mongoose";
import bookModel from "../Models/books.model.js";


// function for create new book
export function createBook(req, res) {

    const { title, author, years, pages, category, ratings, coverImage, description } = req.body;

    // key validation
    if (!title) { return res.status(400).json({message: 'title is not present'}) };
    if (!author) { return res.status(400).json({message: 'author is not present'}) };
    if (!years) { return res.status(400).json({message: 'years is not present'}) };
    if (!pages) { return res.status(400).json({message: 'pages is not present'}) };
    if (!category) { return res.status(400).json({message: 'category is not present'}) };
    if (!ratings) { return res.status(400).json({message: 'ratings is not present'}) };
    if (!coverImage) { return res.status(400).json({message: 'coverImage is not present'}) };
    if (!description) { return res.status(400).json({message: 'description is not present'}) };


    // prepairing data to store inside the model
    const newBook = new bookModel({
        title,
        author,
        years,
        pages,
        category,
        ratings,
        coverImage,
        description,
    })

    // saving neaBook inside the model
    newBook.save().then((data)=> {

        if (!data) {
            return res.status(400).json({message: "new book request failed. Try again!"});
        }

        return res.status(201).json({message: "new book is successfully created", newBook: data});
    
    }).catch((error)=> {
        return res.status(500).json({error: error.message});
    })
}  



// function for get all books
export function getAllBooks(req, res) {

    // find all books in bookModel
    bookModel.find({}).then((data)=> {

        if (!data) {
            return res.status(404).json({message: "Sorry No Data Inside"})
        }

        return res.status(200).json({Books: data});
    
    }).catch((error)=> {
        return res.status(500).json({error: error.message})
    })
}