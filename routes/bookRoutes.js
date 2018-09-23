var express = require('express')
var router = express.Router()
var Book = require('../models/books')

router.get('/', function(req, res) {
    res.send('Get book end point')
})

router.post('/', function(req, res) {
    var bookData = {
        title: req.body.title
    }

    Book.create(bookData, function (error, book) {
        if (error) {
          console.error('Error')
        } else {
          console.log(bookData.title)
        }
      })
})



module.exports = router;