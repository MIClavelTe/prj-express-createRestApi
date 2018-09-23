var path = require('path')

var express = require('express')
var app = express()
var mongoose = require('mongoose')
var princessRoutes = require('./routes/princessRoutes')
var bookRoutes = require('./routes/bookRoutes')

mongoose.connect('mongodb://localhost:27017/createRestApi');
var db = mongoose.connection;

app.use(express.static(path.join(__dirname, './src/public')))

app.use(express.urlencoded())

app.use('/princess', princessRoutes)
app.use('/book', bookRoutes)

app.listen(3000, function() {
    console.log('Running on localhost:3000')
})