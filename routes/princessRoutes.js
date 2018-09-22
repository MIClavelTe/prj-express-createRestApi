var express = require('express')
var router = express.Router()

var princesses = []

router.get('/', function(req, res) {
    res.send('Get princess end point')
})

router.post('/', function(req, res) {
    // var name = req.body.name
    // var characterName = req.body.character_name
    // var gender = req.body.gender
    // var age = req.body.age
    // console.log(name)
    princesses.push(req.body)
    res.send('Post end point')
    console.log(req.body)
    console.log(princesses)
})



module.exports = router;