var path = require('path')

var express = require('express')
var app = express()

app.get('/', express.static(path.join(__dirname, './src/public')))

app.listen(3000, function() {
    console.log('Running on localhost:3000')
})