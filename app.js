var path = require('path')

var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, './src/public')))

app.get('/', function(req, res) {
    // express.static('./src/public/index.html')
    res.send('Hello')
})

app.listen(3000, function() {
    console.log('Running on localhost:3000')
})