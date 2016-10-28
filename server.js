'use strict'

//express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//initiate express
const app = express()
const router = express.Router()

// ---------------------------------------
// APP CONFIGURATION
//----------------------------------------

//req.body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const books = require('./data.js');
console.log(books);
