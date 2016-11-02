const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BookSchema = new Schema({
    isbn: String,
    name: String,
    price: Number
}, {timestamp: true})
module.exports = mongoose.model('Book', BookSchema)
