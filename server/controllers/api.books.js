const books = require('../data/data.js');

module.exports = {
    // GET api/ping
    pingpong: (req, res) => {
        res.json({"message": 'PONG !'})
    },
    // GET api/books
    getBooks: (req, res) => {
        res.json(books)
    },
    // GET api/books/id
    getBookById: (req, res) => {

        let book = books.filter(book => {
            return book.id === Number(req.params.id)
        })[0]
        if (!book) {
            res.status(404).json({message: "No book found"})
        } else {
            res.status(200).json(book)
        }
    },
    // POST api/books
    postBook: (req, res) => {
        const book = {
            id: Number(req.body.id),
            name: req.body.name,
            price: Number(req.body.price)
        }
        books.push(book)
        res.json(books)
    },
    // DELETE api/books/:id
    deleteBook: (req, res) => {

        let book = books.filter(book => {
            return book.id === Number(req.params.id)
        })[0]
        if (!book) {
            res.status(404).json({message: "No book found"})
        } else {
            books.splice(books.indexOf(book), 1)
            res.status(200).json({message: `Books ${req.params.id} has been deleted`})
        }
    },
    // PUT api/books/:id
    putBook: (req, res) => {
        let book = books.filter(book => {
            return book.id === Number(req.params.id)
        })[0]
        if (!book) {
            res.status(404).json({message: "No book found"})
        } else {
            Object.keys(req.body).forEach(key => {
                book[key] = req.body.key
            })
            books[index] = book
            res.json(books)
        }
    }
}
