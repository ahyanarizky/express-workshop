const books = require('../data/data.js');

module.exports = {
    pingpong: (req, res) => {
        res.json({"message": 'PONG !'})
    },
    getBooks: (req, res) => {
        res.json(books)
    },
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
    postBook: (req, res) => {
        const book = {
            id: Number(req.body.id),
            name: req.body.name,
            price: Number(req.body.price)
        }
        books.push(book)
        res.json(books)
    },
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
