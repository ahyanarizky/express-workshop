const books = require('../data/data.js');

const Book = require('../models/books');

module.exports = {
    // GET api/ping
    pingpong: (req, res) => {
        res.json({"message": 'PONG !'})
    },
    // GET api/books
    /**
 * @api {get} api/books/ Request Book information
 * @apiName GetBooks
 * @apiGroup Books
 *
 * @apiParam {Number} id Books unique ID.
 *
 * @apiSuccess {String} isbn ISBN number of the Book.
 * @apiSuccess {String} name  Name of the Book.
 * @apiSuccess {Number} price  Price of the Book.
 */
    getBooks: (req, res) => {
        // res.json(books)
        Book.find({}, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
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
        // const book = {
        //     id: Number(req.body.id),
        //     name: req.body.name,
        //     price: Number(req.body.price)
        // }
        // books.push(book)
        // res.json(books)
        Book.create({
            isbn: req.body.isbn,
            name: req.body.name,
            price: Number(req.body.price)
        }, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })

    },
    // DELETE api/books/:id
    deleteBook: (req, res) => {

        // let book = books.filter(book => {
        //     return book.id === Number(req.params.id)
        // })[0]
        // if (!book) {
        //     res.status(404).json({message: "No book found"})
        // } else {
        //     books.splice(books.indexOf(book), 1)
        //     res.status(200).json({message: `Books ${req.params.id} has been deleted`})
        // }
        Book.remove({
            _id: req.params.id
        }, (err, data) => {
            if (err) {
                res.json({message: `Error: ${err}`})
            } else {
                res.json({message: 'Data deleted'})
            }
        })
    },
    // PUT api/books/:id
    putBook: (req, res) => {
        // let book = books.filter(book => {
        //     return book.id === Number(req.params.id)
        // })[0]
        // if (!book) {
        //     res.status(404).json({message: "No book found"})
        // } else {
        //     Object.keys(req.body).forEach(key => {
        //         book[key] = req.body.key
        //     })
        //     books[index] = book
        //     res.json(books)
        // }
        Book.findOneAndUpdate({
            _id: req.params.id
        }, (err, data) => {
            if (err) {
                res.json({message: `Error: ${err}`})
            } else {
                res.json(data)
            }
        })
    }
}
