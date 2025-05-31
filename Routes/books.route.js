import { createBook, getAllBooks } from "../Controllers/books.controller.js";


// creating routes for books
export function bookRoutes(bookApp) {
    bookApp.get('/api/getAllBooks', getAllBooks),
    bookApp.post('/api/book', createBook)
}