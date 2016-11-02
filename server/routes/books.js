'use strict'
const express = require('express');
const router = express.Router()
const controller = require('../controllers/api.books')

// ---------------------------------------
// ROUTE CONFIGURATION
//----------------------------------------

router.get('/ping', controller.pingpong)
router.get('/books', controller.getBooks)
router.get('/books/:id', controller.getBookById)
router.post('/books', controller.postBook)
router.delete('/books/:id', controller.deleteBook)
router.put('/books/:id', controller.putBook)

module.exports = router
