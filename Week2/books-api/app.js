const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let books = [
  { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
  { id: 2, title: "Pride and Prejudice", author: "Jane Austen" },
];
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

app.use(express.json());
// Configure body-parser to handle URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true })); // Set extended: true for nested objects
app.get("/books", (req, res) => {
  res.json(books); // Send the array of books as JSON response
});
app.post("/books", (req, res) => {
  const newBook = req.body; // Get the new book data from the request body
  newBook.id = books.length + 1; // Assign a unique ID
  books.push(newBook); // Add the new book to the array
  res.status(201).json(newBook); // Send created book with status code 201
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id); // Get book ID from URL parameter
  const book = books.find((book) => book.id === bookId);

  if (book) {
    res.json(book); // Send the book data if found
  } else {
    res.status(404).send("Book not found"); // Send error for non-existent book
  }
});
