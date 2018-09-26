var express = require('express')
var router = express.Router()
var Book = require('../models/books')

router.get('/', function(req, res) {
    res.send('Get book end point')
})

router.post('/', function(req, res) {
    // var bookData = {
    //     title: req.body.title
    // }

    // Book.create(bookData, function (error, book) {
    //     if (error) {
    //         res.send('Fill in the title')
    //     } else {
    //         res.send(`You have created ${bookData.title}`)
    //     }
    //   })

    console.log(req.body)
    res.send('OK')
})



module.exports = router;