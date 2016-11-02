'use strict'
const express = require('express');
const router = express.Router()
const books = require('../data/data.js');

// ---------------------------------------
// ROUTE CONFIGURATION
//----------------------------------------

// req.body  >>> /data + { id: 0 }
// req.params >>> /data/:id
// req. query >>> /data?q={id}

router.get('/ping', (req, res) => {
    res.json({"message": 'PONG !'})
})

router.get('/books', (req, res) => {
    res.json(books)
})

router.get('/books/:id', (req, res) => {

    let book = books.filter(book => {
        return book.id === Number(req.params.id)
    })[0]
    if (!book) {
        res.status(404).json({message: "No book found"})
    } else {
        res.status(200).json(book)
    }
})

router.post('/books', (req, res) => {
    const book = {
        id: Number(req.body.id),
        name: req.body.name,
        price: Number(req.body.price)
    }
    books.push(book)
    res.json(books)
})

router.delete('/books/:id', (req, res) => {

    let book = books.filter(book => {
        return book.id === Number(req.params.id)
    })[0]
    if (!book) {
        res.status(404).json({message: "No book found"})
    } else {
        books.splice(books.indexOf(book), 1)
        res.status(200).json({message: `Books ${req.params.id} has been deleted`})
    }
})

router.put('/books/:id', (req, res) => {
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
})

module.exports = router
