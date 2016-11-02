'use strict'

//CONFIGURATION
require('dotenv').config()
//express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//database
const mongoose = require('mongoose')
//initiate express
const app = express()
const router = express.Router()
const routeBooks = require('./routes/books')

//MONGODB

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
// ---------------------------------------
// APP CONFIGURATION
//----------------------------------------

//req.body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

// ---------------------------------------
// ROUTING
//----------------------------------------

app.use('/api', routeBooks)
const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on ${hostname}:${port}`);
    }
})
