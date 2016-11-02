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
    // GET api/books/:id
    /**
 * @api {get} api/books/:id Request Single Book information
 * @apiName GetBooksById
 * @apiGroup Books
 *
 * @apiParam {Number} id Books unique ID.
 *
 * @apiSuccess {String} isbn ISBN number of the Book.
 * @apiSuccess {String} name  Name of the Book.
 * @apiSuccess {Number} price  Price of the Book.
 */

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
    /**
 * @api {post} api/books/ Post new Book
 * @apiName PostBook
 * @apiGroup Books
 *
 * @apiParam {String} isbn ISBN number of the Book.
 * @apiParam {String} name  Name of the Book.
 * @apiParam {Number} price  Price of the Book.
 *
 * @apiSuccess {String} isbn ISBN number of the Book.
 * @apiSuccess {String} name  Name of the Book.
 * @apiSuccess {Number} price  Price of the Book.
 */

    postBook: (req, res) => {
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
    /**
 * @api {delete} api/books/:id Delete Single Book
 * @apiName DeleteBooksById
 * @apiGroup Books
 *
 * @apiParam {Number} id Books unique ID.
 *
 * @apiSuccess book deleted from database
 */

    deleteBook: (req, res) => {
        Book.remove({
            _id: req.params.id
        }, (err, data) => {
            if (err) {
                res.json({message: `Error: ${err}`})
            } else if (!data) {
                res.json({message: 'ID not found'})
            } else {
                res.json({message: 'Data deleted'})
            }
        })
    },
    // PUT api/books/:id
    /**
 * @api {put} api/books/:id Update a book
 * @apiName UpdateBook
 * @apiGroup Books
 *
 * @apiParam {Number} id Books unique ID.
 * @apiParam {String} isbn ISBN number of the Book.
 * @apiParam {String} name  Name of the Book.
 * @apiParam {Number} price  Price of the Book.
 *
 * @apiSuccess {String} isbn ISBN number of the Book.
 * @apiSuccess {String} name  Name of the Book.
 * @apiSuccess {Number} price  Price of the Book.
 */

    putBook: (req, res) => {
        Book.findOneAndUpdate({
            _id: req.params.id
        }, {
            isbn: req.body.isbn,
            name: req.body.name,
            price: req.body.price
        }, {
            new: true,
            upsert: true
        }, (err, data) => {
            if (err) {
                res.json({message: `Error: ${err}`})
            } else {
                res.json(data)
            }
        })
    }
}
