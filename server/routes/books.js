'use strict'
const express = require('express');
const router = express.Router()
const controller = require('../controllers/api.books')

// ---------------------------------------
// ROUTE CONFIGURATION
//----------------------------------------

// GET api/ping
router.get('/ping', controller.pingpong)
// GET api/books
router.get('/books', controller.getBooks)
// GET api/books/id
router.get('/books/:id', controller.getBookById)
// POST api/books
router.post('/books', controller.postBook)
// DELETE api/books/:id
router.delete('/books/:id', controller.deleteBook)
// PUT api/books/:id
router.put('/books/:id', controller.putBook)

module.exports = router
